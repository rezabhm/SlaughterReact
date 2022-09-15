import React, {Component} from 'react';
import mainImage from '../../Image/core/hero-bg.jpg';
import Login from './login';
import Signup from './signup';
import logoutIcon from '../../Image/core/logout-svgrepo-com.svg';
import {createBrowserHistory} from "history";
import {Button, Grid, IconButton, Typography} from "@material-ui/core";
import Multplication from "../../Image/core/multiplication.png";

const history = createBrowserHistory();

class ImageComp extends Component{

    enterProfile =()=>{

        history.push('/order/list/');
        window.location.reload();


    }

    handleHeader = () => {



        const {header_bool, login_bool, signup_bool, userState} = this.props.data;
        const { innerWidth: width} = window;
        const txt_width = (width * 0.04).toString() + 'px';
        const txt_width2 = (width * 0.02).toString() + 'px';
        console.log(txt_width)
        const { signup_user } = this.props;
        const { login_user } = this.props;
        const { logoutBTN } = this.props;

        if (header_bool === true) {

            if (userState === 0) {


                return (

                <div style={{

                    width:'50%',
                    height:'400px',
                    border:'solid',
                    left:'25%',
                    top:'100px',
                    position:'absolute',
                    backgroundColor:'rgba(50,50,50,0.9)'
                }}>

                    <Grid container style={{height:'300px', paddingTop:'100px'}}>

                        <Grid item xs={2}></Grid>

                        <Grid item xs={8}>
                            <h1 className='enter-header' >

                                Tiyur Zanjan APP

                            </h1>
                        </Grid>

                        <Grid item xs={2} >

                            <IconButton variant='contained' color='default' onClick={logoutBTN} style={{

                                width:'100%',
                                backgroundColor:"rgba(0,0,0,0)",
                                border:'none',
                                textAlign:'left',


                            }}>

                                <img alt='tiyur zanjan app ' src={logoutIcon} style={{

                                    width:'50px',
                                    height:'50px',
                                    left: '5px',
                                    top:'0px',


                                }} />

                            </IconButton>


                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={2}></Grid>


                        <Grid item xs={8}>
                            <Button onClick={this.enterProfile} variant='contained' style={{

                                width: '100%',
                                fontSize: '1vw',
                                backgroundColor: '#6750A4',
                                color: 'black',

                            }} >

                                ورود به پروفایل

                            </Button>
                        </Grid>


                    </Grid>


                </div>

                );

            } else if (userState === 1) {

                return (


                <div style={{

                    width:'50%',
                    height:'400px',
                    border:'solid',
                    left:'25%',
                    top:'100px',
                    position:'absolute',
                    backgroundColor:'rgba(50,50,50,0.9)'
                }}>

                    <Grid container style={{height:'300px', paddingTop:'100px'}}>

                        <Grid item xs={2}></Grid>

                        <Grid item xs={8}>
                            <h1 className='enter-header' >

                                Tiyur Zanjan APP

                            </h1>
                        </Grid>

                        <Grid item xs={2} >

                            <IconButton variant='contained' color='default' onClick={logoutBTN} style={{

                                width:'100%',
                                backgroundColor:"rgba(0,0,0,0)",
                                border:'none',
                                textAlign:'left',


                            }}>

                                <img alt='tiyur zanjan app ' src={logoutIcon} style={{

                                    width:'50px',
                                    height:'50px',
                                    left: '5px',
                                    top:'0px',


                                }} />

                            </IconButton>


                        </Grid>


                    </Grid>

                    <Grid container>

                        <Grid item xs={6}>
                            <Button onClick={signup_user} variant='contained' style={{

                                width: '80%',
                                fontSize: '1vw',
                                backgroundColor: '#6750A4',
                                color: 'black',
                                left:'10%',

                            }} >

                                ثبت نام

                            </Button>
                        </Grid>

                        <Grid item xs={6}>
                            <Button onClick={this.enterProfile} variant='contained' style={{

                                width: '80%',
                                fontSize: '1vw',
                                backgroundColor: '#6750A4',
                                color: 'black',
                                left:'10%',

                            }} >

                                ورود به پروفایل

                            </Button>
                        </Grid>


                    </Grid>


                </div>







                );



        } else {

            return (
                <div style={{

                    width:'50%',
                    height:'400px',
                    border:'solid',
                    left:'25%',
                    top:'100px',
                    position:'absolute',
                    backgroundColor:'rgba(50,50,50,0.9)'
                }}>

                    <Grid container style={{height:'300px', paddingTop:'100px'}}>

                        <Grid item xs={2}></Grid>

                        <Grid item xs={8}>
                            <h1 className='enter-header' >

                                Tiyur Zanjan APP

                            </h1>
                        </Grid>

                        <Grid item xs={2}></Grid>

                    </Grid>

                    <Grid container>

                        <Grid item xs={2}></Grid>

                        <Grid item xs={8}>
                            <Button onClick={this.props.login_user} variant='contained' style={{

                                width: '100%',
                                fontSize: '1vw',
                                backgroundColor: '#6750A4',
                                color: 'black',

                            }} >

                                ورود

                            </Button>
                        </Grid>

                        <Grid item xs={2}></Grid>

                    </Grid>


                </div>

            )}
        } else if (login_bool){


            return(

                <Login  login_usernameChange={this.props.login_usernameChange} login_passwordChange={this.props.login_passwordChange} data={this.props}  headerClick={this.props.headerClick} loginClick={this.props.loginClick}/>

            );
        } else if (signup_bool){

            return(

                <Signup

                    signup_usernameChange={this.props.signup_usernameChange}  signup_nameChange={this.props.signup_nameChange} signup_lastnameChange={this.props.signup_lastnameChange}
                    signup_passwordChange={this.props.signup_passwordChange}  signup_verifyPasswordChange={this.props.signup_verifyPasswordChange} signup_emailChange={this.props.signup_emailChange}
                    signup_userTypeChange={this.props.signup_userTypeChange}

                    data={this.props.data} headerClick={this.props.headerClick} signupClick={this.props.signupClick} />

            );
        }

    };


    render() {
        const image_style = {

            position:'absolute',
            height:'100%',
            width:'100%',
            left: '0px',
            top:'0px',

        };

        return (

          <div>

              <img alt='this is Tiyur app' src={mainImage} style={image_style}  />

                <div>{this.handleHeader()}</div>

          </div>

        );
    };

}

export default ImageComp;
