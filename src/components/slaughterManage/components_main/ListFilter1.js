import { Grid , TextField, Button, Typography} from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import {button_text_white, button_grid, button_white, filter_grid} from '../Sale/css/main'


function ListFilter1 (props){

    return (

        <Grid container style={filter_grid}>

            <Grid items xs={3} style={button_grid}>
                
                <Button variant="contained" style={button_white}>

                    <Typography style={button_text_white}>اعمال فیلتر</Typography>

                </Button>
                
            </Grid>

            <Grid items xs={6} >

            </Grid>


            <Grid items xs={3} style={{textAlign:'center', paddingTop:'1%', paddingRight:'1.5%'}}>

                <Autocomplete 
                
                    id={props.id}
                    options={props.options}
                    onChange={props.selectValueChange}
                    size={'medium'}

                    style={{

                        width:'90%',
                        height:'100%',
                        fontSize:'3vw',

                    }}

                    sx={{width:600}}

                    renderInput={ param=>(

                        <TextField {...param} label={props.id} variant="outlined" fullWidth style={{fontSize:'2vw'}} />

                    )}

                    getOptionLabel={option => option.name}

                
                />


            </Grid>


        </Grid>




    )



}

export default ListFilter1;