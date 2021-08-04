import React, {useState,useContext} from 'react'
import CartContext from '../contexts/CartContext'
import DialogSelect from './DialogSelect'
import SizeDialogSelect from './ShirtSizeDialogSelect'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom';
import './CreateShirt.css'

/*---------------Importing Parts Images----------------*/ 
import collarImage from '../images/shirt_parts/collar.svg'
import cuffImage from '../images/shirt_parts/cuff.svg'
import sleeveImage from '../images/shirt_parts/sleeve.svg'
import modelImage from '../images/shirt_parts/model.svg'
import placketImage from '../images/shirt_parts/placket.svg'
import pocketImage from '../images/shirt_parts/pocket.svg'
import bottomcutImage from '../images/shirt_parts/bottomcut.svg'
import backdetailsImage from '../images/shirt_parts/backdetails.svg'
import backyokeImage from '../images/shirt_parts/backyoke.svg'
import fabricImage from '../images/shirt_parts/fabric.jpg'
/*---------------Importing Parts Images----------------*/ 

/*---------------Importing Sub-Parts Images----------------*/ 
import {models,models_names,
    collars,collars_names,
    cuffs,cuffs_names,
    sleeves,sleeves_names,
    pockets,pockets_names,
    plackets,plackets_names,
    bottomcuts,bottomcuts_names,
    backdetails, backdetails_names,
    backyokes,backyokes_names,
    fabrics, fabrics_names} from './shirt-sub-parts'
/*---------------Importing Sub-Parts Images----------------*/ 


function CreateShirt() {
    const history = useHistory()
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            fontSize: 85,
          },
        },
    }));
    const classes = useStyles();
    
    const {addToCart} = useContext(CartContext)

    const handleNext= ()=>{
        const selectedOptions={
            type: 'Shirt',
            model: selectedModel,
            collar: selectedCollar,
            cuff: selectedCuff,
            sleeve: selectedSleeve,
            pocket: selectedPocket,
            placket: selectedPlacket,
            bottomcut: selectedBottomcut,
            backdetail: selectedBackdetail,
            backyoke: selectedBackyoke,
            fabric: selectedFabric,
            price: "1000",
            image: fabrics[fabrics_names.indexOf(selectedFabric)],
            size:selectedSize,
            id:''
        }
        addToCart(selectedOptions)
        history.push('/cart')
    }

    //defining states
    const [selectedModel, setSelectedModel]= useState(models_names[0])
    const [selectedCollar, setSelectedCollar]= useState(collars_names[0])
    const [selectedCuff, setSelectedCuff]= useState(cuffs_names[0])
    const [selectedSleeve, setSelectedSleeve]= useState(sleeves_names[0])
    const [selectedPocket, setSelectedPocket]= useState(pockets_names[0])
    const [selectedPlacket, setSelectedPlacket]= useState(plackets_names[0])
    const [selectedBottomcut, setSelectedBottomcut]= useState(bottomcuts_names[0])
    const [selectedBackdetail, setSelectedBackdetail]= useState(backdetails_names[0])
    const [selectedBackyoke, setSelectedBackyoke]= useState(backyokes_names[0])
    const [selectedFabric, setSelectedFabric]= useState(fabrics_names[0])
    const [selectedSize, setSelectedSize]= useState({
        normalSize : 36,
        chestSize : 30,
        fitType : 'Slim',
        heightRange : "5'3' - 5'6'"
      })


    return (
        <div className='create-shirt'>
            <div className='image' key='models'>
                <DialogSelect
                    image={modelImage}
                    options={models}
                    options_names={models_names}
                    setSelectedOption={setSelectedModel}/>
                <div className='desc'>Select Model</div>
            </div>
            <div className='image' key='collars'>
                <DialogSelect 
                    image={collarImage}
                    options={collars}
                    options_names={collars_names}
                    setSelectedOption={setSelectedCollar}/>
                <div className='desc'>Select Collar</div>
            </div>
            <div className='image' key='cuffs'>
                <DialogSelect 
                    image={cuffImage}
                    options={cuffs}
                    options_names={cuffs_names}
                    setSelectedOption={setSelectedCuff}/>
                <div className='desc'>Select Cuff</div>
            </div>
            <div className='image' key='sleeves'>
                <DialogSelect 
                    image={sleeveImage}
                    options={sleeves}
                    options_names={sleeves_names}
                    setSelectedOption={setSelectedSleeve}/>
                <div className='desc'>Select Sleeve</div>
            </div>
            <div className='image' key='pockets'>
                <DialogSelect 
                    image={pocketImage}
                    options={pockets}
                    options_names={pockets_names}
                    setSelectedOption={setSelectedPocket}/>
                <div className='desc'>Select Pocket</div>
            </div>
            <div className='image' key='plackets'>
                <DialogSelect 
                    image={placketImage}
                    options={plackets}
                    options_names={plackets_names}
                    setSelectedOption={setSelectedPlacket}/>
                <div className='desc'>Select Placket</div>
            </div>
            <div className='image' key='bottomcuts'>
                <DialogSelect 
                    image={bottomcutImage}
                    options={bottomcuts}
                    options_names={bottomcuts_names}
                    setSelectedOption={setSelectedBottomcut}/>
                <div className='desc'>Select Bottom Cut</div>
            </div>
            <div className='image' key='back details'>
                <DialogSelect 
                    image={backdetailsImage}
                    options={backdetails}
                    options_names={backdetails_names}
                    setSelectedOption={setSelectedBackdetail}/>
                <div className='desc'>Select Back Details</div>
            </div>
            <div className='image' key='backyokes'>
                <DialogSelect 
                    image={backyokeImage}
                    options={backyokes}
                    options_names={backyokes_names}
                    setSelectedOption={setSelectedBackyoke}/>
                <div className='desc'>Select Back Yoke</div>
            </div>
            <div className='image' key='fabrics'>
                <DialogSelect 
                    image={fabricImage}
                    options={fabrics}
                    options_names={fabrics_names}
                    setSelectedOption={setSelectedFabric}/>
                <div className='desc'>Select Fabric</div>
            </div>
            <div className='image' key='size'>
                <SizeDialogSelect 
                    setSelectedOption={setSelectedSize}/>
                <div className='desc'>Select Size</div>
            </div>
                
            <div className={classes.root}>
                <Button 
                    variant="contained"
                    color="primary"
                    style={{maxWidth: '410px', maxHeight: '445px', minWidth: '410px', minHeight: '445px'}}
                    onClick={handleNext}
                    className='next-button'
                >
                    Next
                </Button>
            </div>
        </div>
    )
}

export default CreateShirt
