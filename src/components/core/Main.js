import React, {Component} from 'react';
import { withCookies,Cookies} from "react-cookie";
import {instanceOf} from "prop-types";
import ImageComp from "./Image";
import { IPServer } from '../../data';


class MainPage extends Component{

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    state = {

        tokens: this.props.cookies.get('token') || false,
        username: this.props.cookies.get('username') || false,
        access_level: this.props.cookies.get('access_level') || false,
        login_bool : false,
        signup_bool: false,
        header_bool: true,
        login_error : '',
        signup_error: '',
        login_username : '',
        login_password : '',
        signup_username : '',
        signup_name : '',
        signup_lastname : '',
        signup_password : '',
        signup_verifyPassword : '',
        signup_email : '',
        signup_userType : '',


    };

    // user state : 2 ==> logout
    // user state : 1 ==> admin
    // user state : 0 ==> normal user


    initialCookie = (jsonResponse) => {


        if(jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2){

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            this.setState({

                tokens : false,
                username : false,
                access_level : false,
                userState : 2,
                header_bool: true,
                login_bool:false,
                signup_bool:false,

            })
        } else if(jsonResponse['response_code'] === 1 ){

            this.setState({

                tokens : jsonResponse['api_token'],
                username : jsonResponse['username'],
                access_level : jsonResponse['access_level'],
                userState : jsonResponse['userState'],
                header_bool: true,
                login_bool:false,
                signup_bool:false,


            })
        }

    };


    constructor(props) {
        super(props);

        const token = this.props.cookies.get('token') || false ;
        if(token && token.length > 0){

            // we must determine our token are correct or not

            const requestOptions = {
                method: "POST",
                headers: { "Content-type":"application/json;charset=utf-8"},
                body: JSON.stringify({ token: token }),
                mode:'cors',
            };

            fetch( IPServer() + '/core/access/level/api/', requestOptions)
                .then(data => data.json())
                .then(data => this.initialCookie(data))

        } else {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            this.setState({

                tokens : false,
                username : false,
                access_level : false,
                userState: 2,
                header_bool: true,
                login_bool:false,
                signup_bool:false,

            })

        }


    }



    login_usernameChange = (event) => {

        this.setState({

            login_username : event.target.value,
        })

    };

    login_passwordChange = (event) => {

        this.setState({

            login_password: event.target.value,

        })

    }

    loginClick = () => {

        const requestJson = {

            method: "POST",
            mod:'cors',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body : JSON.stringify({

                username: this.state.login_username,
                password: this.state.login_password,

            })

        }

        fetch(IPServer() + '/core/logIn/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleLogin(data))



    }

    handleLogin = (responseJson) =>{


        if (responseJson['response_code'] === 0){

            this.setState({

                login_error : 'نام کاربری موجود نمی باشد'
            })

        } else if (responseJson['response_code'] === 2){

            this.setState({

                login_error : 'رمز عبور اشتباه است'
            })


        } else if(responseJson['response_code']===1) {

            this.props.cookies.set('token', responseJson['token']);
            this.props.cookies.set('username', responseJson['username']);
            this.props.cookies.set('access_level', responseJson['access_level']);

            this.setState({

                token: responseJson['token'],
                username: responseJson['username'],
                access_level: responseJson['access_level'],
                userState: responseJson['userState'],
                header_bool: true,
                login_bool:false,
                signup_bool:false,

            });

        }


    }


    signup_usernameChange = (event) =>{

        this.setState({signup_username:event.target.value});

    };

    signup_nameChange = (event) => {

        this.setState({signup_name:event.target.value});

    };

    signup_lastnameChange = (event) => {

        this.setState({signup_lastname:event.target.value})
    };

    signup_passwordChange = (event) => {

        this.setState({signup_password: event.target.value })

    };

    signup_verifyPasswordChange = (event) =>{

        this.setState({signup_verifyPassword:event.target.value});

    };

    signup_emailChange = (event) =>{

        this.setState({signup_email:event.target.value});

    };

    signup_userTypeChange = (event) =>{

        this.setState({signup_userType: event.value });

    };


    signupClick = () => {

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                username : this.state.signup_username,
                name: this.state.signup_name,
                last_name: this.state.signup_lastname,
                password : this.state.signup_password,
                user_email: this.state.signup_email,
                user_type: this.state.signup_userType,

            })


        } ;

        fetch(IPServer() + '/core/signUP/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleSignUp(data));


    };

    handleSignUp = (jsonResponse) => {


        if (this.state.signup_password === this.state.signup_verifyPassword) {
            if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

                this.props.cookies.remove('token');
                this.props.cookies.remove('username');
                this.props.cookies.remove('access_level');

                this.setState({

                    tokens: false,
                    username: false,
                    access_level: false,
                    userState: 2,
                    header_bool: true,
                    login_bool: false,
                    signup_bool: false,

                })
            } else if (jsonResponse['response_code'] === 4) {

                this.setState({

                    signup_error: 'نام کاربری کوجود میباشد'
                })


            } else if (jsonResponse['response_code'] === 1) {

                this.setState({

                    header_bool: true,
                    login_bool: false,
                    signup_bool: false,

                })

            }

        } else {


            this.setState({

                signup_error : 'رمز تاییده ای اشتباه میباشد'

            })


        }
    }

    logout =() =>{

        this.props.cookies.remove('token');
        this.props.cookies.remove('username');
        this.props.cookies.remove('access_level');

        this.setState({

            tokens : false,
            username : false,
            access_level : false,
            userState : 2,
            header_bool: true,
            login_bool:false,
            signup_bool:false,

        });

    };
    headerClick = () =>{

        this.setState({ header_bool:true , login_bool:false, signup_bool:false});

    }



    signup_user = () =>{

        this.setState({

            login_bool:false,
            signup_bool:true,
            header_bool:false,

        })

    }


    login_user = () =>{

        this.setState({ header_bool:false , login_bool:true, signup_bool:false});

    }


    render() {
        const { innerWidth: width, innerHeight: height } = window;

        return (

            <div className="App" style={
                {
                width:{width},
                height:{height},
            }}>
                <ImageComp

                    signup_usernameChange={this.signup_usernameChange}  signup_nameChange={this.signup_nameChange} signup_lastnameChange={this.signup_lastnameChange}
                    signup_passwordChange={this.signup_passwordChange}  signup_verifyPasswordChange={this.signup_verifyPasswordChange} signup_emailChange={this.signup_emailChange}
                    signup_userTypeChange={this.signup_userTypeChange}
                    login_passwordChange={this.login_passwordChange} login_usernameChange={this.login_usernameChange} logoutBTN={this.logout} signupClick={this.signupClick} signup_user={this.signup_user} loginClick={this.loginClick} login_user={this.login_user} headerClick={this.headerClick} data={this.state}/>

            </div>
        );
    };

}

export default withCookies(MainPage);
