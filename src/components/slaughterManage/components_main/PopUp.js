import {Grid, Typography} from "@mui/material";
import {Button} from "@material-ui/core";
import Exit from "../../../Image/slaughter/exit.svg";

function PopUp (props){

    const generateRow =(row_list)=>{

        const final_row = row_list.map(row =>{

            if (row.type === 'text') {
                return (

                    <Grid items xs={row.xs} style={row.grid_style}>

                        <Typography style={row.text_style}>

                            {row.text}

                        </Typography>

                    </Grid>
                )

            } else if(row.type === 'input_text'){

                return(

                    <Grid items xs={row.xs} style={row.grid_style}>

                        <input type='text' placeholder={row.placeholder} style={row.input_style} onChange={(x)=> row.inputOnChange(x.target.value) } />

                    </Grid>

                )

            } else if(row.type === 'button'){


                return (


                    <Grid item xs={row.xs} style={row.grid_style}>

                        <Button variant="contained" className="purpleButton" style={row.button_style} onClick={row.buttonClick} >

                            <Typography style={row.button_text_style}>{row.button_text}</Typography>

                        </Button>
                    </Grid>

                )

            } else {

                return(<Grid items xs={row.xs}></Grid>)

            }

        })

        return (

            <Grid container style={props.row_grid_style}>

                {final_row}

            </Grid>

        )

    }

    const header =(header_inf)=>{


        return (

            <Grid container style={header_inf.grid_style}>
                <Grid item xs={3}>

                    <Button  onClick={header_inf.closePopup}>

                        <img alt='hello' src={Exit} style={{height:'100%', width:'100%'}}/>

                    </Button>

                </Grid>

                <Grid item xs={9}>

                    <Typography style={header_inf.text_style}>

                        {header_inf.text}

                    </Typography>


                </Grid>

            </Grid>

        )


    }


    return(

        <div style={props.div_style}>

            {header(props.header)}
            { props.rows.map(row=>{ return generateRow(row)}) }

        </div>
    )




}

export default PopUp;