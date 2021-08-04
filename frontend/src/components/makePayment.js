import Razorpay from 'razorpay'
export const makePayment=()=>{
    var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET })

    var options = {
    amount: 50000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function(err, order) {
    console.log(order);
    });
}