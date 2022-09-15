import React, {Component} from "react";
import { Button, IconButton } from "@material-ui/core";
import  MenuOpenIcon  from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

class Header extends Component{



    rightDashboardClick =()=>{


        if (this.props.rightDashboardButton){

            return(

                <div style={{

                    width:'10%',
                    height:'100%',
                    position:'absolute',
                    right:'22%',
                    
                }}>


                    <IconButton variant='contained' color='default' onClick={this.props.rightDashboardClickButton} style={{

                        width:'100%',
                        backgroundColor:"rgba(0,0,0,0)",
                        border:'none',
                        textAlign:'left',



                    }}>
                        
                        <CloseIcon style={{

                        width:'20%',
                        height: '20%',
                        right:'0%',

                        }}   />
 
                    </IconButton>


                </div>
            )

        } else {


            return(


                <div style={{

                    width:'10%',
                    height:'100%',
                    position:'absolute',
                    right:'1%',
                    

                }}>


                    <IconButton variant='contained' color='default' onClick={this.props.rightDashboardClickButton} style={{

                    width:'100%',
                    backgroundColor:"rgba(0,0,0,0)",
                    border:'none',
                    textAlign:'left',


                    }}>
                        
                        <MenuOpenIcon style={{

                            width:'25%',
                            height: '25%',
                            right:'0%',

                        }}   /> 

                    </IconButton>


                </div>
            )




        }



    }




    render() {

        return(

            <div style={{

                position: 'absolute',
                width: '100%',
                height: '150px',
                left: '0px',
                top: '0px',
                borderColor:'rgb(0,0,0)',
                border: '1px solid #E6E1E5',
                marginRight:'0px',

                backgroundColor: '#FFFFFF',

            }}>

                <h1 style={{


                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: '0%',
                    top: '25%',

                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '2.5vw',
                    lineHeight: '40px',

                    alignItems: 'center',
                    textAlign: 'center',


                    color: '#6750A4',


                }}>{this.props.title}</h1>


                {this.rightDashboardClick()}



            </div>

        );


    }



}

export default Header;