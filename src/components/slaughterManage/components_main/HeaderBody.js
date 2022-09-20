
import {

    header_body,
    button_text_purple,
    button_purple,
    body_name,
    button_grid, button_white, button_text_white,

} from '../Sale/css/main';

import { Grid, Button, Typography} from "@material-ui/core";

const HeaderBody2Button =(props)=>{


    return (

        <Grid container style={header_body} >


                <Grid items xs={3} style={button_grid}>


                    <Button variant="contained" className="purpleButton" style={button_purple} onClick={props.leftButton1Click}>

                        <Typography style={button_text_purple}>{props.left_text1}</Typography>

                    </Button>

                </Grid>

                <Grid items xs={3} style={button_grid}>


                    <Button variant="contained" className="purpleButton" style={button_white} onClick={props.leftButton2Click}>

                        <Typography style={button_text_white}>{props.left_text2}</Typography>

                    </Button>

                </Grid>


                <Grid items xs={6}>

                    <Typography style={body_name} >{props.header}</Typography>

                </Grid>


        </Grid>




    )


}

export default HeaderBody2Button;