const app = require('express')()
require('dotenv').config()
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')

app.use(cors())
app.use(bodyParser.json())

const { MongoClient } = require('mongodb');
const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const addOrderToDB = async (data) => {
	try {
		await client.connect()
		const collection = client.db("Djas").collection("orders");
		const result = await collection.insertOne(data)
		console.log(`NEW ORDER CREATED ${JSON.stringify(result)}`);
	} catch (error) {
		console.log(error);
	} finally {
		await client.close();
	}
}



const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID,
	key_secret: process.env.RAZORPAY_KEY_SECRET
})

// app.get('/logo.svg', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'logo.svg'))
// })


function jsonConcat(o1, o2) {
	for (var key in o2) {
	 o1[key] = o2[key];
	}
	return o1;
}
   

let amount = 0
let cartItems={}
let addressDetails={}
app.post('/amount', (req, res) => {
	amount = req.body.amount
	cartItems = req.body.cartItems
	address = req.body.address
})

app.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'
	const crypto = require('crypto')
	const digest = crypto.createHmac('SHA256',secret)
	.update(JSON.stringify(req.body))
	.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'], req.body.razorpay_signature)

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		var dataToPush = {};
		jsonConcat(dataToPush,cartItems)
		jsonConcat(dataToPush,address)
		jsonConcat(dataToPush,req.body)
		console.log(address)
		require('fs').writeFileSync('payment1.json', JSON.stringify(dataToPush, null, 4))
		addOrderToDB(dataToPush)
	} else {
		// pass it
		console.log('request is not legit');
	}
	res.json({ status: 'ok' })
})


app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const currency = 'INR'
	const options = {
		amount: amount * 100 || 0,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount || 0
		})
	} catch (error) {
		console.log(error)
	}
})

app.listen(1337, () => {
	console.log('Listening on 1337')
	console.log(process.env.RAZORPAY_KEY_ID);
	console.log(process.env.RAZORPAY_KEY_SECRET);
})