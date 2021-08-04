import React, {useState,useContext} from 'react'
import {useHistory} from 'react-router-dom';
import CartContext from '../contexts/CartContext'
import DialogSelect from './DialogSelect'
import { makeStyles } from '@material-ui/core/styles'
import SuitSizeDialogSelect from './SuitSizeDialogSelect'
import PantSizeDialogSelect from './PantSizeDialogSelect'
import Button from '@material-ui/core/Button'
import './CreateSuit.css'


/*---------------Importing Parts Images----------------*/ 
import productTypeImage from '../images/suit_parts/producttype.svg'
import buttoningImage from '../images/suit_parts/buttoning.svg'
import lapelImage from '../images/suit_parts/lapel.svg'
import pocketTypeImage from '../images/suit_parts/pockettype.svg'
import ventImage from '../images/suit_parts/vent.svg'
import pantButtoningImage from '../images/suit_parts/pantbuttoning.svg'
import pantPocketImage from '../images/suit_parts/pantpocket.svg'
import backPocketDesignImage from '../images/suit_parts/backpocketdesign.svg'
import backPocketPlacementImage from '../images/suit_parts/backpocketplacement.svg'
import fabricImage from '../images/suit_parts/suit_fabric.jpg'
/*---------------Importing Parts Images----------------*/ 

/*---------------Importing Sub-Parts Images----------------*/ 
import {productTypes,productTypes_names,
    buttonings, buttonings_names,
    lapels,lapels_names,
    pocketTypes, pocketTypes_names,
    vents, vents_names,
    pantButtonings,pantButtonings_names,
    pantPockets,pantPockets_names,
    backPocketDesigns, backPocketDesigns_names,
    backPocketPlacements, backPocketPlacements_names,
    fabrics,fabrics_names} from './suit-sub-parts'
/*---------------Importing Sub-Parts Images----------------*/ 

function CreateSuit() {
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
        if(selectedProductType === 'Suit Jacket' || selectedProductType === 'Waist Coat'){
            const selectedOptions = {
                type: selectedProductType,
                buttoning: selectedButtoning,
                lapel: selectedLapel,
                pocketType: selectedPocketType,
                vent: selectedVent,
                price: 1200,
                fabric: selectedFabric,
                size:{jacketSize:selectedJacketSize,},
                image: fabrics[fabrics_names.indexOf(selectedFabric)],
                id:'',
            }
            addToCart(selectedOptions)
        }
        else{
            const selectedOptions={
                type: selectedProductType,
                buttoning: selectedButtoning,
                lapel: selectedLapel,
                pocketType: selectedPocketType,
                vent: selectedVent,
                pantButtoning: selectedPantButtoning,
                pantPocket: selectedPantPocket,
                backPocketDesign: selectedBackPocketDesign,
                backPocketPlacement: selectedBackPocketPlacement,
                fabric: selectedFabric,
                price: 2200,
                image: fabrics[fabrics_names.indexOf(selectedFabric)],
                size:{jacketSize:selectedJacketSize,
                    pantSize: selectedPantSize,},
                id:''
            }
            addToCart(selectedOptions)
        }
        history.push('/cart')
    }


    //defining states
    const [selectedProductType, setSelectedProductType] = useState(productTypes_names[0])
    const [selectedButtoning, setSelectedButtoning] = useState(buttonings_names[0])
    const [selectedLapel, setSelectedLapel] = useState(lapels_names[0])
    const [selectedPocketType, setSelectedPocketType] = useState(pocketTypes_names[0])
    const [selectedVent, setSelectedVent] = useState(vents_names[0])
    const [selectedPantButtoning, setSelectedPantButtoning] = useState(pantButtonings_names[0])
    const [selectedPantPocket, setSelectedPantPocket] = useState(pantPockets_names[0])
    const [selectedBackPocketDesign, setSelectedBackPocketDesign] = useState(backPocketDesigns_names[0])
    const [selectedBackPocketPlacement, setSelectedBackPocketPlacement] = useState(backPocketPlacements_names[0])
    const [selectedFabric, setSelectedFabric] = useState(fabrics_names[0])
    const [selectedJacketSize, setSelectedJacketSize] = useState({
        chestSize : 32,
        length : 26,
        waistSize: 28,
        hipSize:33,
        shoulderSize:15,
        sleevesLength: 23,
        fitType : 'Slim',
        heightRange : "5'3' - 5'6'"
    })
    const [selectedPantSize, setSelectedPantSize] = useState({
        normalSize : 36,
        length : 36,
        waistSize: 25,
        fitType : 'Slim',
        heightRange : "5'3' - 5'6'"
  })

    return (
        <div className='create-suit'>
            <div className='image'>
                <DialogSelect
                    image={productTypeImage}
                    options={productTypes}
                    options_names={productTypes_names}
                    setSelectedOption={setSelectedProductType}/>
                <div className='desc'>Select Product Type</div>
            </div>
            <div className='image'>
                <DialogSelect
                    image={buttoningImage}
                    options={buttonings}
                    options_names={buttonings_names}
                    setSelectedOption={setSelectedButtoning}/>
                <div className='desc'>Select Buuttoning</div>
            </div>
            <div className='image'>
                <DialogSelect
                    image={lapelImage}
                    options={lapels}
                    options_names={lapels_names}
                    setSelectedOption={setSelectedLapel}/>
                <div className='desc'>Select Lapel</div>
            </div>
            <div className='image'>
                <DialogSelect
                    image={pocketTypeImage}
                    options={pocketTypes}
                    options_names={pocketTypes_names}
                    setSelectedOption={setSelectedPocketType}/>
                <div className='desc'>Select Pocket Type</div>
            </div>
            <div className='image'>
                <DialogSelect
                    image={ventImage}
                    options={vents}
                    options_names={vents_names}
                    setSelectedOption={setSelectedVent}/>
                <div className='desc'>Select Vent</div>
            </div>
            <div className='image'>
                <SuitSizeDialogSelect 
                    setSelectedOption={setSelectedJacketSize}/>
                <div className='desc'>Select Jacket Size</div>
            </div>
            <div className='image'>
                        <DialogSelect 
                        image={fabricImage}
                        options={fabrics}
                        options_names={fabrics_names}
                        setSelectedOption={setSelectedFabric}/>
                        <div className='desc'>Select Fabric</div>
            </div>
            {(selectedProductType === 'Three Piece Suit' || selectedProductType === 'Two Piece Suit') &&
                <div className='pant-options'>
                    <div className='pant-image' key='models'>
                        <DialogSelect
                            image={pantButtoningImage}
                            options={pantButtonings}
                            options_names={pantButtonings_names}
                            setSelectedOption={setSelectedPantButtoning}/>
                        <div className='desc'>Select Pant Buttoning</div>
                    </div>
                    <div className='pant-image'>
                        <DialogSelect
                            image={pantPocketImage}
                            options={pantPockets}
                            options_names={pantPockets_names}
                            setSelectedOption={setSelectedPantPocket}/>
                        <div className='desc'>Select Pant Pocket</div>
                    </div>
                    <div className='pant-image'>
                        <DialogSelect
                            image={backPocketDesignImage}
                            options={backPocketDesigns}
                            options_names={backPocketDesigns_names}
                            setSelectedOption={setSelectedBackPocketDesign}/>
                        <div className='desc'>Select Back Pocket Design</div>
                    </div>
                    <div className='pant-image'>
                        <DialogSelect
                            image={backPocketPlacementImage}
                            options={backPocketPlacements}
                            options_names={backPocketPlacements_names}
                            setSelectedOption={setSelectedBackPocketPlacement}/>
                        <div className='desc'>Select Back Pocket Placement</div>
                    </div>
                    <div className='image'>
                        <PantSizeDialogSelect 
                        setSelectedOption={setSelectedPantSize}/>
                        <div className='desc'>Select Pant Size</div>
                    </div>
                    </div>
                    }
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
    )
}

export default CreateSuit
