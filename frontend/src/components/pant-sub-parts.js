/*---------------Importing Sub-Parts Images----------------*/ 

                /*-------types------*/
import model_chinos from '../images/pant_parts/types/chinos.svg'
import model_shorts from '../images/pant_parts/types/shorts.svg'
                /*-------types------*/

                /*-------side pockets------*/
import sidepocket_beveled from '../images/pant_parts/sidepockets/beveled.svg'
import sidepocket_straight from '../images/pant_parts/sidepockets/straight.svg'
                /*-------side pockets------*/

                /*-------back pocket styles------*/
import backpocketstyle_buttoned from '../images/pant_parts/backpocketstyles/buttoned.svg'
import backpocketstyle_nobutton from '../images/pant_parts/backpocketstyles/nobutton.svg'
import backpocketstyle_withhook from '../images/pant_parts/backpocketstyles/withhook.svg'
                /*-------back pocket styles------*/

                /*-------back pocket------*/
import backpocket_right from '../images/pant_parts/backpockets/right.svg'
import backpocket_both from '../images/pant_parts/backpockets/both.svg'
import backpocket_nobackpocket from '../images/pant_parts/backpockets/nobackpocket.svg'
                /*-------back pocket------*/

                /*-------fly------*/
import fly_zipperfly from '../images/pant_parts/flys/zipperfly.svg'
import fly_buttonfly from '../images/pant_parts/flys/buttonfly.svg'
                /*-------fly------*/

                /*---------fabrics--------*/
import fabric1 from '../images/pant_fabrics/burgundy.png'
import fabric2 from '../images/pant_fabrics/light grey.png'
import fabric3 from '../images/pant_fabrics/oliver green.png'
import fabric4 from '../images/pant_fabrics/dark navy.png'
import fabric5 from '../images/pant_fabrics/camel.png'
                /*---------fabrics--------*/
                
/*---------------Importing Sub-Parts Images----------------*/ 


//type props
export const models=[model_chinos,model_shorts]
export const models_names=['Chinos','Shorts']

//sidepocket props
export const sidepockets=[sidepocket_beveled,sidepocket_straight]
export const sidepockets_names=['Beveled','Straight']

//backpocketstyle props
export const backpocketstyles=[backpocketstyle_buttoned,backpocketstyle_withhook,backpocketstyle_nobutton]
export const backpocketstyles_names=['Buttoned','With Hook','No Button']

//backpocket props
export const backpockets=[backpocket_right,backpocket_both,backpocket_nobackpocket]
export const backpockets_names=['Right','Both','No Back Pocket']

//fly props
export const flys=[fly_zipperfly,fly_buttonfly]
export const flys_names=['Zipper Fly','Button Fly']

//fabric props
export const fabrics = [fabric1,fabric2,fabric3,fabric4,fabric5]
export const fabrics_names= ['Burgundy', 'Light Grey','Oliver Green','Dark Navy','Camel']