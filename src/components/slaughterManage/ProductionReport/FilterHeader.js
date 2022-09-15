import react, {Component, ReactFragment} from 'react';
import AdapterJalali from '@date-io/date-fns-jalali';
import { Grid, TextField, Button } from '@material-ui/core';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './Css/ProductionReportCss.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

class FilterHeader extends Component {



    render =()=>{

        return(

            <div>

                <Grid 
                
                    container 
                    direction='row-reverse'


                >

                    <Grid item xs={2} md={2}  >

                        <Button 


                            onClick={this.props.popupButton}
                            variant='contained'
                            style={{

                                color: 'aliceblue',
                                borderRadius: '50px',
                                width: '100%',
                                height:'56px',
                                backgroundColor: '#6750A4',
                                fontSize:'1.5vw',

                            }}

                            
                        > 

                            فیلتر

                        </Button>

                    </Grid>


                    
                    
                    <Grid item xs={1} md={1} style={{direction:'rtl', textAlign:'center'}}>

                            <h3 style={{fontSize:'1.5vw'}}>از :</h3>
                            
                    </Grid>



                    <Grid item xs={2} md={2} >

                        <LocalizationProvider dateAdapter={AdapterJalali} >
                            
                            <DatePicker
    
                                mask="____/__/__"
                                value={this.props.fromTime}
                                onChange={(newValue) => this.props.changeFromTime(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                            />

                        </LocalizationProvider>

                    </Grid>




                    <Grid item xs={1} md={1} style={{direction:'rtl', textAlign:'center'}}>

                            <h3 style={{fontSize:'1.5vw'}}>تا : </h3>
                            
                    </Grid>




                    <Grid item xs={2} md={2}>

                        

                        <LocalizationProvider dateAdapter={AdapterJalali}>
                            
                            <DatePicker
                                mask="____/__/__"
                                value={this.props.toTime}
                                onChange={(newValue) => this.props.changeToTime(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                            />

                        </LocalizationProvider>

                    </Grid>



                    <Grid item xs={4} md={4}>

                        <Button 

                            
                            onClick={this.props.filterSubmit}
                            variant='contained'
                            style={{

                                color: '#6750A4',
                                borderRadius: '50px',
                                width: '50%',
                                height:'56px',
                                borderColor: '#6750A4',
                                border:'solid',
                                backgroundColor: 'rgba(255,255,255,1)',
                                fontSize:'1.5vw',

                            }}
                            
                        > 

                            اعمال فیلتر

                        </Button>


                    </Grid>


                </Grid>

            </div>


        )


    }


}


export default FilterHeader;