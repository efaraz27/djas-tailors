/*---------------Importing Sub-Parts Images----------------*/ 
/*-------product types------*/
import threePieceSuitImage from '../images/suit_parts/product types/threepiecesuit.svg'
import twoPieceSuitImage from '../images/suit_parts/product types/twopiecesuit.svg'
import suitJacketImage from '../images/suit_parts/product types/suitjacket.svg'
import waistCoatImage from '../images/suit_parts/product types/waistcoat.svg'
                /*-------product types------*/

                /*-------buttonings------*/
import twoButtonImage from '../images/suit_parts/buttonings/twobutton.svg'
import oneButtonImage from '../images/suit_parts/buttonings/onebutton.svg'
import doubleBreastedImage from '../images/suit_parts/buttonings/doublebreasted.svg'
                /*-------buttonings------*/
                
                /*-------lapels------*/
import standardImage from '../images/suit_parts/lapels/standard.svg'
import slimImage from '../images/suit_parts/lapels/slim.svg'
import peakImage from '../images/suit_parts/lapels/peak.svg'
import shawlImage from '../images/suit_parts/lapels/shawl.svg'
                /*-------lapels------*/

                /*-------pocket types------*/
import flapImage from '../images/suit_parts/pocket types/flap.svg'
import noFlapImage from '../images/suit_parts/pocket types/noflap.svg'
                /*-------pocket types------*/

                /*-------vents------*/
import singleVentImage from '../images/suit_parts/vents/singlevent.svg'
import doubleVentImage from '../images/suit_parts/vents/doublevent.svg'
                /*-------vents------*/

                /*-------pant buttonings------*/
import hiddenImage from '../images/suit_parts/pant buttonings/hidden.svg'
import visibleImage from '../images/suit_parts/pant buttonings/visible.svg'
                /*-------pant buttonings------*/

                /*-------pant pockets------*/
import straightImage from '../images/suit_parts/pant pockets/straight.svg'
import beveledImage from '../images/suit_parts/pant pockets/beveled.svg'
                /*-------pant pockets------*/

                /*-------back pocket designs------*/
import buttonedImage from '../images/suit_parts/back pocket designs/buttoned.svg'
import hiddenBackImage from '../images/suit_parts/back pocket designs/hidden.svg'
                /*-------back pocket designs------*/

                /*-------back pocket placements------*/
import rightImage from '../images/suit_parts/back pocket placements/right.svg'
import bothImage from '../images/suit_parts/back pocket placements/both.svg'
import noBackPocketImage from '../images/suit_parts/back pocket placements/nobackpocket.svg'
                /*-------back pocket placements------*/

                /*-------fabrics------*/
import fabric1 from '../images/suit_fabrics/alsace sand.png'
import fabric2 from '../images/suit_fabrics/brussel brown.png'
import fabric3 from '../images/suit_fabrics/havana black.png'
import fabric4 from '../images/suit_fabrics/maryport grey.png'
import fabric5 from '../images/suit_fabrics/ottawa brown.png'
import fabric6 from '../images/suit_fabrics/ottawa navy.png'
import fabric7 from '../images/suit_fabrics/paris black.png'
import fabric8 from '../images/suit_fabrics/rivington brown and sand.png'
import fabric9 from '../images/suit_fabrics/sofia grey.png'
import fabric10 from '../images/suit_fabrics/stockholm brown.png'
import fabric11 from '../images/suit_fabrics/traveller navy.png'
import fabric12 from '../images/suit_fabrics/windsor green.png'
                /*-------fabrics------*/
/*---------------Importing Sub-Parts Images----------------*/ 

//product types props
export const productTypes=[threePieceSuitImage,
    twoPieceSuitImage,
    suitJacketImage,
    waistCoatImage]
export const productTypes_names=['Three Piece Suit',
    'Two Piece Suit',
    'Suit Jacket',
    'Waist Coat']

//buttonings props
export const buttonings=[twoButtonImage, oneButtonImage, doubleBreastedImage]
export const buttonings_names=['Two Button','One Button','Double Breasted']

//lapels props
export const lapels=[standardImage, slimImage, peakImage, shawlImage]
export const lapels_names=['Standard', 'Slim', 'Peak', 'Shawl']

//pocket types props
export const pocketTypes=[flapImage, noFlapImage]
export const pocketTypes_names=['Flap', 'No Flap']

//vents props
export const vents=[singleVentImage, doubleVentImage]
export const vents_names=['Single Vent', 'Double Vent']

//pant buttonings props
export const pantButtonings=[hiddenImage, visibleImage]
export const pantButtonings_names=['Hidden', 'Visible']

//pant pockets props
export const pantPockets=[straightImage, beveledImage]
export const pantPockets_names=['Straight', 'Beveled']

//back pocket designs props
export const backPocketDesigns=[buttonedImage, hiddenBackImage]
export const backPocketDesigns_names=['Buttoned', 'Hidden Back']

//back pocket placements props
export const backPocketPlacements=[rightImage, bothImage, noBackPocketImage]
export const backPocketPlacements_names=['Right', 'Both', 'No Back Pocket']

//fabric props
export const fabrics=[fabric1,fabric2,fabric3,fabric4,fabric5,fabric6,fabric7,fabric8,fabric9,fabric10,fabric11,fabric12]
export const fabrics_names=['Alsace Sand','Brussel Brown','Havana Black','Maryport Grey','Ottawa Brown','Ottawa Navy','Paris Black','Rivington Brown and Sand','Sofia Grey','Stockholm Brown','Traveller Navy','Windsor Green']