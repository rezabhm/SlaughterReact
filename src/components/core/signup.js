import React, {Component} from "react";
import multiplication from '../../Image/core/multiply-cross-svgrepo-com.svg';
import Select from "react-select";

class Signup  extends Component{


    state = {

        username : '',
        name : '',
        lastname:'',
        password:'',
        verifyPassword:'',
        email:'',
        userType:'',


    }


    render() {

        const { headerClick } = this.props;
        const userType_list = [
            { value: 'a', label: 'ادمین',color: 'rgb(0,100,0)' },
            { value: 'm', label: 'مدیر',color: 'rgb(0,0,0)'  },
            { value: 'ce', label: 'کارمند واحد مرغ', color: 'rgb(0,0,0)' },
            { value: 'lwm', label: 'مسعول باسکول زنده', color: 'rgb(0,0,0)' },
            { value: 'w', label: 'نگهبان', color: 'rgb(0,0,0)' },

        ];


        return(

            // main div
            <div style={{

                position:'absolute',
                left:'35%',
                top:'35%',
                width:'32%',
                height:'55%',
                borderRadius: '25px' ,
                backgroundColor: 'rgba(50,50,50,0.9)',

            }}>

                <button style={{

                    position: 'absolute',
                    right: '30px',
                    top:'30px',
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


                }} /></button>

                <div style={{

                    position:'absolute',
                    direction:'rtl',
                    borderRadius:'20px',
                    backgroundColor:'rgba(200,200,200,0)',
                    fontSize:'25',
                    color: 'rgb(255,255,255)',
                    textAlign:'center',
                    width:'15%',
                    height:'15%',
                    right:'35%',
                    top:'5%',
                    paddingRight: '5%',


                }}><h2>ثبت نام</h2></div>

                <input type='text' name='username' placeholder='نام کاربری' style={{

                    position:'absolute',
                    direction:'rtl',
                    borderRadius:'20px',
                    backgroundColor:'rgba(200,200,200)',
                    color: 'rgb(0,0,0)',
                    width:'85%',
                    height:'8%',
                    right:'5%',
                    top:'20%',
                    paddingRight: '5%',


                }} onChange={this.props.signup_usernameChange}/>

                <input type='text' name='name' placeholder='نام' style={{

                    position:'absolute',
                    direction:'rtl',
                    borderRadius:'20px',
                    backgroundColor:'rgba(200,200,200)',
                    color: 'rgb(0,0,0)',
                    width:'30%',
                    height:'8%',
                    right:'10%',
                    top:'32%',
                    paddingRight: '30px',


                }} onChange={this.props.signup_nameChange}/>

                <input type='text' name='lastname' placeholder='نام خانوادگی' style={{

                    position:'absolute',
                    direction:'rtl',
                    borderRadius:'20px',
                    backgroundColor:'rgba(200,200,200)',
                    color: 'rgb(0,0,0)',
                    width:'30%',
                    height:'8%',
                    right:'55%',
                    top:'32%',
                    paddingRight: '30px',


                }} onChange={this.props.signup_lastnameChange}/>

                <input type='password' name='password' placeholder='رمز عبور' style={{

                    position:'absolute',
                    direction:'rtl',
                    borderRadius:'20px',
                    backgroundColor:'rgba(200,200,200)',
                    color: 'rgb(0,0,0)',
                    width:'30%',
                    height:'8%',
                    right:'10%',
                    top:'44%',
                    paddingRight: '30px',


                }} onChange={this.props.signup_passwordChange}/>

                <input type='password' name='verifyPassword' placeholder='رمز عبور را دوباره وارد کنید' style={{

                    position:'absolute',
                    direction:'rtl',
                    borderRadius:'20px',
                    backgroundColor:'rgba(200,200,200)',
                    color: 'rgb(0,0,0)',
                    width:'30%',
                    height:'8%',
                    right:'55%',
                    top:'44%',
                    paddingRight: '30px',


                }} onChange={this.props.signup_verifyPasswordChange}/>





                <input type='text' name='email' placeholder='ایمیل' style={{

                    position:'absolute',
                    direction:'rtl',
                    borderRadius:'20px',
                    backgroundColor:'rgba(200,200,200)',
                    color: 'rgb(0,0,0)',
                    width:'85%',
                    height:'8%',
                    right:'5%',
                    top:'56%',
                    paddingRight: '30px',


                }} onChange={this.props.signup_emailChange}/>

                <div  style={{

                    position:'absolute',
                    direction:'rtl',
                    borderRadius:'20px',
                    backgroundColor:'rgba(200,200,200, 0.0)',
                    color: 'rgb(0,0,0)',
                    width:'85%',
                    height:'8%',
                    right:'5%',
                    top:'68%',
                    paddingRight: '30px',

                }}>

                    <Select options={userType_list} placeholder='یکی از گزینه های زیر را انتخاب کنید ...'  defaultvalue={this.state.userType} onChange={this.props.signup_userTypeChange}/>

                </div>


                <button onClick={this.props.signupClick}   style={{

                    position:'absolute',
                    right:'25%',
                    bottom:'10%',
                    borderRadius: '30px',
                    backgroundColor:'rgb(50,100,50)',
                    color:'rgb(0,0,0)',
                    height:'50px',
                    width:'50%',





                }} ><p>ثبت نام</p></button>


            </div>


        )
    }
}

export default Signup;