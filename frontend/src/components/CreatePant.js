import React, {useState,useContext} from 'react'
import CartContext from '../contexts/CartContext'
import DialogSelect from './DialogSelect'
import SizeDialogSelect from './PantSizeDialogSelect'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom';
import './CreatePant.css'

/*---------------Importing Parts Images----------------*/ 
import modelImage from '../images/pant_parts/type.svg'
import sidepocketImage from '../images/pant_parts/sidepocket.svg'
import backpocketstyleImage from '../images/pant_parts/backpocketstyle.svg'
import backpocketImage from '../images/pant_parts/backpockets.svg'
import flyImage from '../images/pant_parts/fly.svg'
import fabricImage from '../images/pant_parts/fabric.jpg'
/*---------------Importing Parts Images----------------*/ 

/*---------------Importing Sub-Parts----------------*/ 
import {models,models_names,sidepockets,sidepockets_names,backpocketstyles,backpocketstyles_names,backpockets,backpockets_names,flys,flys_names, fabrics, fabrics_names} from './pant-sub-parts'
/*---------------Importing Sub-Parts Images----------------*/ 


function CreatePant() {
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
            type: 'Pant',
            model: selectedModel,
            sidepocket: selectedSidepocket,
            backpocketstyle: selectedBackpocketstyle,
            backpocket: selectedBackpocket,
            fly: selectedFly,
            fabric:selectedFabric,
            size:selectedSize,
            price: "600",
            id:'',
            image: fabrics[fabrics_names.indexOf(selectedFabric)]
        }
        addToCart(selectedOptions)
        history.push('/cart')
    }

    //defining states
    const [selectedModel, setSelectedModel] = useState(models_names[0])
    const [selectedSidepocket, setSelectedSidepocket] = useState(sidepockets_names[0])
    const [selectedBackpocketstyle, setSelectedBackpocketstyle] = useState(backpocketstyles_names[0])
    const [selectedBackpocket, setSelectedBackpocket] = useState(backpockets_names[0])
    const [selectedFly, setSelectedFly] = useState(flys_names[0])
    const [selectedFabric, setSelectedFabric] = useState(fabrics_names[0])
    const [selectedSize, setSelectedSize] = useState({
            normalSize : 36,
            length : 36,
            waistSize: 25,
            fitType : 'Slim',
            heightRange : "5'3' - 5'6'"
      })


    return (
        <div>
            <div className='create-pant'>
            <div className='image'>
                <DialogSelect
                    image={modelImage}
                    options={models}
                    options_names={models_names}
                    setSelectedOption={setSelectedModel}/>
                <div className='desc'>Select Model</div>
            </div>
            <div className='image'>
                <DialogSelect 
                    image={sidepocketImage}
                    options={sidepockets}
                    options_names={sidepockets_names}
                    setSelectedOption={setSelectedSidepocket}/>
                <div className='desc'>Select Side Pocket</div>
            </div>
            <div className='image'>
                <DialogSelect 
                    image={backpocketstyleImage}
                    options={backpocketstyles}
                    options_names={backpocketstyles_names}
                    setSelectedOption={setSelectedBackpocketstyle}/>
                <div className='desc'>Select Back Pocket Style</div>
            </div>
            <div className='image'>
                <DialogSelect 
                    image={backpocketImage}
                    options={backpockets}
                    options_names={backpockets_names}
                    setSelectedOption={setSelectedBackpocket}/>
                <div className='desc'>Select Back Pocket</div>
            </div>
            <div className='image'>
                <DialogSelect 
                    image={flyImage}
                    options={flys}
                    options_names={flys_names}
                    setSelectedOption={setSelectedFly}/>
                <div className='desc'>Select Fly</div>
            </div>
            <div className='image'>
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
                >
                    Next
                </Button>
            </div>
        </div>
        </div>
    )
}

export default CreatePant
