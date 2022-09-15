import React, {Component} from "react";
import {IPServer} from "../../../data";
import {withCookies } from "react-cookie";
import {createBrowserHistory} from "history";
import TiyurLogo from '../../../Image/slaughter/Toyore zanjan logo 2.svg';
import carIcon from '../../../Image/slaughter/car (1).svg';
import reportIcon from '../../../Image/slaughter/report (2).svg';
import vectorDown from '../../../Image/slaughter/vectordown (3).svg';
import vectorUp from '../../../Image/slaughter/Vector.svg';
import ExitIcon from '../../../Image/slaughter/exitIcon.svg';

const history = createBrowserHistory();

class RightDashbord extends Component {


    state = {

        tokens: this.props.cookies.get('token'),
        access_level: this.props.cookies.get('access_level'),
        username: this.props.cookies.get('username'),
        reportStatus : false,


    }


    order_list =()=>{


        history.push('/order/list/');
        window.location.reload();
    }

    initialCookie = (jsonResponse) => {


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();


        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                tokens: jsonResponse['api_token'],
                username: jsonResponse['username'],
                access_level: jsonResponse['access_level'],
                userState: jsonResponse['userState'],


            })

        }

    };

    reportIconClick=() =>{

        if(this.state.reportStatus){

            return vectorDown
        }else{

            return vectorUp

        }

    }

    constructor(props) {
        super(props);

        const token = this.props.cookies.get('token') || false;
        if (token && token.length > 0) {

            // we must determine our token are correct or not

            const requestOptions = {
                method: "POST",
                headers: {"Content-type": "application/json;charset=utf-8"},
                body: JSON.stringify({token: token}),
                mode: 'cors',
            };

            fetch(IPServer() + '/core/access/level/api/', requestOptions)
                .then(data => data.json())
                .then(data => this.initialCookie(data))


        } else {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        }
    }


    watchManClick =()=>{

        history.push('/watchman/order/list/')
        window.location.reload()


    }

    productionClick =()=>{

        history.push('/production/')
        window.location.reload()

    }

    reportLWBClick =()=>{

        history.push('/report/live/weighbridge/')
        window.location.reload()


    }

    reportGeneralChickenClick =()=>{

        history.push('/production/Report/general/chicken/')
        window.location.reload()


    }

    reportGeneralTurkeyClick =()=>{

        history.push('/production/Report/general/turkey/')
        window.location.reload()


    }

    reportGeneralQuailClick =()=>{

        history.push('/production/Report/general/quail/')
        window.location.reload()


    }

    reportDetailChickenClick =()=>{

        history.push('/production/Report/detail/chicken/')
        window.location.reload()


    }

    reportDetailTurkeyClick =()=>{

        history.push('/production/Report/detail/turkey/')
        window.location.reload()


    }

    reportDetailQuailClick =()=>{

        history.push('/production/Report/detail/quail/')
        window.location.reload()


    }



    

    logout =()=>{

        this.props.cookies.remove('token');
        this.props.cookies.remove('name');
        this.props.cookies.remove('access_level');

        history.push('/');
        window.location.reload();
    }

    dashboardButton =()=>{


        if(this.state.access_level === 'a' || this.state.access_level ==='m'){


            const background_color = (window.location.href === 'http://localhost:3000/order/list/') ? '#EADDFF' : 'rgb(255,255,255)'
            const background_color_watchman = (window.location.href === 'http://localhost:3000/watchman/order/list/') ? '#EADDFF' : 'rgb(255,255,255)'
            const background_color_production = (window.location.href === 'http://localhost:3000/production/') ? '#EADDFF' : 'rgb(255,255,255)'
            const background_color_report_lwb = (window.location.href === 'http://localhost:3000/report/live/weighbridge/') ? '#EADDFF' : 'rgb(255,255,255)'
            const background_color_report_general_chicken = (window.location.href === 'http://localhost:3000/production/Report/general/chicken/') ? '#EADDFF' : 'rgb(255,255,255)'
            const background_color_report_general_turkey = (window.location.href === 'http://localhost:3000/production/Report/general/turkey/') ? '#EADDFF' : 'rgb(255,255,255)'
            const background_color_report_general_quail = (window.location.href === 'http://localhost:3000/production/Report/general/quail/') ? '#EADDFF' : 'rgb(255,255,255)'
            const background_color_report_detail_quail = (window.location.href === 'http://localhost:3000/production/Report/detail/quail/') ? '#EADDFF' : 'rgb(255,255,255)'
            const background_color_report_detail_turkey = (window.location.href === 'http://localhost:3000/production/Report/detail/turkey/') ? '#EADDFF' : 'rgb(255,255,255)'
            const background_color_report_detail_chicken = (window.location.href === 'http://localhost:3000/production/Report/detail/chicken/') ? '#EADDFF' : 'rgb(255,255,255)'



            return(

            <div style={{overflow:'scroll' , height:'55%', top:'27.5%', position:'absolute', width:'100%'}} >

                  <button onClick={this.order_list} style={{


                      position: 'absolute',
                      backgroundColor: background_color,
                      borderColor: 'rgba(0,0,0,0)',
                      borderRadius:'16px',
                      height: '12.5%',
                      width: '80%',
                      top: '0%',
                      fontSize:'24px',
                      margin: '10%',
                      fontFamily:'Roboto',
                      fontStyle: 'normal',
                      textAlign:'center',
                      color:'#4A4458',


                    }}><img src={reportIcon} alt={'this is car icon'} style={{

                        right:'5px',
                        width:'25%',
                        height:'50%',
                        position:'absolute',
                        top:'25%'

                    }}/>

                        <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>

                      باسکول زنده
                      
                      </h5>
                      </button>

                

                <button onClick={this.watchManClick} style={{


                    position: 'absolute',
                    backgroundColor: background_color_watchman,
                    borderColor: 'rgba(0,0,0,0)',
                    borderRadius:'16px',
                    height: '12.5%',
                    width: '80%',
                    top: '15%',
                    fontSize:'24px',
                    margin: '10%',
                    fontFamily:'Roboto',
                    fontStyle: 'normal',
                    textAlign:'center',
                    color:'#4A4458',


                }}><img src={reportIcon} alt={'this is car icon'} style={{

                    right:'5px',
                    width:'25%',
                    height:'50%',
                    position:'absolute',
                    top:'25%'

                }}/>

                    <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>

                    نگهبانی
                    </h5>

                </button>



                <button onClick={this.productionClick} style={{


                    position: 'absolute',
                    backgroundColor: background_color_production,
                    borderColor: 'rgba(0,0,0,0)',
                    borderRadius:'16px',
                    height: '12.5%',
                    width: '80%',
                    top: '30%',
                    fontSize:'24px',
                    margin: '10%',
                    fontFamily:'Roboto',
                    fontStyle: 'normal',
                    textAlign:'center',
                    color:'#4A4458',


                }}><img src={reportIcon} alt={'this is car icon'} style={{

                    right:'5px',
                    width:'25%',
                    height:'50%',
                    position:'absolute',
                    top:'25%'

                }}/>

                    <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>

                    تولید
                    </h5>

                    </button>

            <button onClick={this.reportLWBClick} style={{


                position: 'absolute',
                backgroundColor: background_color_report_lwb,
                borderColor: 'rgba(0,0,0,0)',
                borderRadius:'16px',
                height: '12.5%',
                width: '80%',
                top: '45%',
                fontSize:'24px',
                margin: '10%',
                fontFamily:'Roboto',
                fontStyle: 'normal',
                textAlign:'center',
                color:'#4A4458',


            }}><img src={reportIcon} alt={'this is car icon'} style={{

                right:'5px',
                width:'25%',
                height:'50%',
                position:'absolute',
                top:'25%'

            }}/>

                <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>

                گزارش گیری باسکول زنده
                </h5>

            </button>


                    <button onClick={this.reportGeneralChickenClick} style={{


                        position: 'absolute',
                        backgroundColor: background_color_report_general_chicken,
                        borderColor: 'rgba(0,0,0,0)',
                        borderRadius:'16px',
                        height: '12.5%',
                        width: '80%',
                        top: '60%',
                        fontSize:'24px',
                        margin: '10%',
                        fontFamily:'Roboto',
                        fontStyle: 'normal',
                        textAlign:'center',
                        color:'#4A4458',


                    }}><img src={reportIcon} alt={'this is car icon'} style={{

                        right:'5px',
                        width:'25%',
                        height:'50%',
                        position:'absolute',
                        top:'25%'

                    }}/>

                        <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>

                        گزارش گیری تولید(واحد مرغ)

                        </h5>

                    </button>


                    <button onClick={this.reportGeneralTurkeyClick} style={{


                        position: 'absolute',
                        backgroundColor: background_color_report_general_turkey,
                        borderColor: 'rgba(0,0,0,0)',
                        borderRadius:'16px',
                        height: '12.5%',
                        width: '80%',
                        top: '75%',
                        fontSize:'24px',
                        margin: '10%',
                        fontFamily:'Roboto',
                        fontStyle: 'normal',
                        textAlign:'center',
                        color:'#4A4458',


                    }}><img src={reportIcon} alt={'this is car icon'} style={{

                        right:'5px',
                        width:'25%',
                        height:'50%',
                        position:'absolute',
                        top:'25%'

                    }}/>

                        <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>

                        گزارش گیری تولید(واحد بوقلمون)
                        </h5>

                    </button>


        <button onClick={this.reportGeneralQuailClick} style={{


                        position: 'absolute',
                        backgroundColor: background_color_report_general_quail,
                        borderColor: 'rgba(0,0,0,0)',
                        borderRadius:'16px',
                        height: '12.5%',
                        width: '80%',
                        top: '90%',
                        fontSize:'24px',
                        margin: '10%',
                        fontFamily:'Roboto',
                        fontStyle: 'normal',
                        textAlign:'center',
                        color:'#4A4458',


                    }}><img src={reportIcon} alt={'this is car icon'} style={{

                        right:'5px',
                        width:'25%',
                        height:'50%',
                        position:'absolute',
                        top:'25%'

                    }}/>

                        <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>

                        گزارش گیری تولید(واحد بلدرچین)
                        </h5>

                    </button>



                    <button onClick={this.reportDetailChickenClick} style={{


                        position: 'absolute',
                        backgroundColor: background_color_report_detail_chicken,
                        borderColor: 'rgba(0,0,0,0)',
                        borderRadius:'16px',
                        height: '12.5%',
                        width: '80%',
                        top: '105%',
                        fontSize:'24px',
                        margin: '10%',
                        fontFamily:'Roboto',
                        fontStyle: 'normal',
                        textAlign:'center',
                        color:'#4A4458',


                    }}><img src={reportIcon} alt={'this is car icon'} style={{

                        right:'5px',
                        width:'25%',
                        height:'50%',
                        position:'absolute',
                        top:'25%'

                    }}/>

                        <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>

                        گزارش گیری ریز تولید(واحد مرغ)
                        </h5>

                    </button>



                    <button onClick={this.reportDetailTurkeyClick} style={{


                        position: 'absolute',
                        backgroundColor: background_color_report_detail_turkey,
                        borderColor: 'rgba(0,0,0,0)',
                        borderRadius:'16px',
                        height: '12.5%',
                        width: '80%',
                        top: '120%',
                        fontSize:'24px',
                        margin: '10%',
                        fontFamily:'Roboto',
                        fontStyle: 'normal',
                        textAlign:'center',
                        color:'#4A4458',

                    }}><img src={reportIcon} alt={'this is car icon'} style={{

                        right:'5px',
                        width:'25%',
                        height:'50%',
                        position:'absolute',
                        top:'25%'

                    }}/>

                        <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>
                        گزارش گیری ریز تولید(واحد یوقلمون)
                        </h5>

                    </button>



                    <button onClick={this.reportDetailQuailClick} style={{


                        position: 'absolute',
                        backgroundColor: background_color_report_detail_quail,
                        borderColor: 'rgba(0,0,0,0)',
                        borderRadius:'16px',
                        height: '12.5%',
                        width: '80%',
                        top: '135%',
                        fontSize:'24px',
                        margin: '10%',
                        fontFamily:'Roboto',
                        fontStyle: 'normal',
                        textAlign:'center',
                        color:'#4A4458',


                    }}><img src={reportIcon} alt={'this is car icon'} style={{

                        right:'5px',
                        width:'25%',
                        height:'50%',
                        position:'absolute',
                        top:'25%'

                    }}/>

                        <h5 style={{display:'inline', position:'absolute', top:'0%', right:'26%', height:'100%'}}>
                        گزارش گیری ریز تولید(واحد بلدرچین)
                        </h5>
                    </button>


            </div>




            );


        }






    }

    redirectMain = () => {

        history.push('/');
        window.location.reload();

    }


    render() {

        return (

            <div style={{

                position: 'absolute',
                direction: 'rtl',
                height: '80%',
                width: '25%',
                right: '0px',
                top:'0px',
                border: '1px solid #E6E1E5',
                backgroundColor: 'rgba(248,248,248,8.0)',
                border:'2px solid #6750A4'

            }}>

                <button onClick={this.redirectMain} style={{


                    position: 'absolute',
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(0,0,0,0)',
                    height: '10%',
                    width: '80%',
                    top: '5%',
                    margin: '10%',


                }}><img src={TiyurLogo} alt='tiyur logo2'/></button>


                {this.dashboardButton()}

                <button onClick={this.logout} style={{


                    position: 'absolute',
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(0,0,0,0)',
                    borderTop:'1px solid #E6E1E5',
                    height: '8%',
                    width: '90%',
                    right:'0px',
                    bottom: '0%',
                    fontSize:'24px',
                    margin: '10%',
                    fontFamily:'Roboto',
                    fontStyle: 'normal',
                    textAlign:'right',
                    color:'#DC362E',



                }}><img src={ExitIcon} alt={'this is car icon'} style={{

                    right:'0px',
                    width:'25%',
                    height:'25%',

                }}/>

                    خروج
                    
                </button>

            </div>

        );


    }
}

export default withCookies(RightDashbord);