
import {
    
    header_body, 
    button_text_purple , 
    button_purple,
    body_name,
    button_grid,

} from '../Sale/css/main';

import { Grid, Button, Typography} from "@material-ui/core";

function HeaderBody1Button (props){


    return (

        <Grid container style={header_body} >


                <Grid items xs={3} style={button_grid}>


                    <Button variant="contained" className="purpleButton" style={button_purple}>

                        <Typography style={button_text_purple}>{props.left_text1}</Typography>

                    </Button>

                </Grid>



                <Grid items xs={9}>

                    <Typography style={body_name} >{props.header}</Typography>

                </Grid>


        </Grid>




    )


}

export default HeaderBody1Button;