import React, {Component, Fragment} from "react";
import {Button, Grid, IconButton, TextField} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.css';
import Multplication from '../../Image/core/multiplication.png';



class Login extends Component{


    state={

        username:'',
        password:'',

    }


    submit = ()=>{

        const { loginClick }= this.props;
        loginClick();

    }


    /* <button style={{

         position: 'absolute',
         right: '5px',
         top:'5px',
         width:'50px',
         height:'50px',
         background: 'none',
         color: 'inherit',
         border: 'none',
         padding: '0px',
         font: 'inherit',
         cursor: 'pointer',
         outline: 'inherit',


     }} onClick={headerClick} >
         <img alt='tiyur zanjan app ' src={multiplication} style={{

             width:'30px',
             height:'30px',
             left: '5px',
             top:'0px',


         }} /></button>*/



    render() {

        const { headerClick } = this.props.data;

        return(
            <div style={{

                width:'50%',
                height:'400px',
                border:'solid',
                left:'25%',
                top:'100px',
                position:'absolute',
                backgroundColor:'rgba(50,50,50,0.9)'
            }}>


                <Grid container spacing={{xs:6, md:5}} style={{height:'30%'}}>

                    <Grid item xs={2}></Grid>

                    <Grid item xs={8} style={{textAlign:'center', paddingTop:'20px' ,color:'rgb(255,255,255)'}}>

                        <h1 style={{fontSize:'10vm'}}>ورود</h1>

                    </Grid>

                    <Grid item xs={2} >

                        <IconButton variant='contained' color='default' onClick={headerClick} style={{

                            width:'50%',
                            height:'50%',
                            backgroundColor:"rgba(0,0,0,0)",
                            border:'none',
                            marginTop:'10px',
                            textAlign:'left',


                        }}>

                            <img alt='tiyur zanjan app ' src={Multplication} style={{

                                width:'30px',
                                height:'30px',
                                left: '5px',
                                top:'0px',


                            }} />

                        </IconButton>


                    </Grid>

                </Grid>

                <Grid container spacing={{xs:6, md:5}} >
                    <Grid item xs={1}></Grid>

                    <Grid item xs={10} >


                        <TextField label='نام کاربری' onChange={this.props.login_usernameChange} variant='outlined' style={{

                            width:'100%' ,
                            direction:'rtl',

                        }} InputProps={{
                            style:{

                                backgroundColor:'rgba(200,200,200,0.9)'

                            }

                        }} />


                    </Grid>

                </Grid>

                <Grid container spacing={{xs:6, md:5}} style={{height:'5%'}}>
                    <Grid item xs={1}></Grid>

                </Grid>



                <Grid container spacing={{xs:6, md:5}}>

                    <Grid item xs={1}></Grid>

                    <Grid item xs={10}  >

                        <TextField type='password' label='رمز عبور' onChange={this.props.login_passwordChange} variant='outlined' style={{

                            width:'100%',
                            direction:'rtl',

                        }} InputProps={{
                            style:{

                                backgroundColor:'rgba(200,200,200,0.9)'

                            }

                        }}/>

                    </Grid>

                </Grid>


                <Grid container spacing={{xs:6, md:5}} style={{height:'10%'}}>
                    <Grid item xs={1}></Grid>

                </Grid>



                <Grid container spacing={{xs:6, md:10}} style={{height:'2%'}}>

                    <Grid item xs={2}></Grid>

                    <Grid item xs={8} >

                        <Button variant='contained' color='primary' onClick={this.props.loginClick} style={{

                            width:'100%',
                            height:'100%',
                            backgroundColor:"#6750A4"

                        }}><h2 style={{fontSize:'1vw', color:'black'}}>ورود</h2></Button>

                    </Grid>

                </Grid>

            </div>
        );
    }
}
export default Login;