import React, {useState} from "react";
import { useLocation} from "react-router-dom";
import {IPServer} from "../../../data";
import {createBrowserHistory} from "history";
import {withCookies} from "react-cookie";

const history = createBrowserHistory();

const DriverInf =(props)=>{

    const location = useLocation();

    const [state , setState] = useState({

        car_number1 : '',
        car_number2 : '',
        car_number3 : '',
        car_number4 : '',
        driver : '',
        car_id:'',
        productType:'',
        car_owner:'',
        car_type:'',



    });


    const initialHandle =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {


            setState( {

                car_number1 : jsonResponse['car_number_1'],
                car_number2 : jsonResponse['car_number_2'],
                car_number3 : jsonResponse['car_number_3'],
                car_number4 : jsonResponse['car_number_4'],
                driver : jsonResponse['driver'],
                car_id:jsonResponse['car_id'],
                productType:jsonResponse['product_type'],
                car_owner:jsonResponse['car_owner'],
                car_type:jsonResponse['car_type'],

            })
        }


    }


    const constructor =(props)=> {

        const car_id = location.state.car_id;
        props.setCar_ID(car_id)

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: props.cookies.get('token'),
                car_id: car_id,

            })

        }


        fetch(IPServer() + '/slaughterManage/live/driver/api/', requestJson)
            .then(data => data.json())
            .then(data => { initialHandle(data)});



    }

    if(props.driverINF_num < 1) {
        constructor(props);
        console.log('this isdriver inf')

    }

    const top = props.top;

    return(
        <div style={{

            position:'absolute',
            width:'100%',
            height:'500px',
            top:top,
            right:'0%',
            textAlign:'right',
            direction:'rtl'

        }}>

            <div style={{
                position:'absolute',
                width:'90%',
                height:'15%',
                top:'0px',
                right:'4%',
                borderBottom:'5px solid #F4EFF4',

            }}>
                <h2 style={{

                    borderRight:'15px solid #6750A4',
                    borderTopRightRadius:'8px',
                    borderBottomRightRadius: '8px',
                    position:'absolute',
                    width:'25%',
                    height:'95%',
                    top:'8%',
                    fontSize:'1.5vw',
                    paddingRight:'1vw',
                    paddingTop:'15px',
                    color:'#4A4458'

                }}>اطلاعات راننده</h2>

            </div>

            <div style={{

                position:'absolute',
                top:'17%',
                width:'90%',
                right:'4%',
                height:'70%',
                fontSize:'25px',
                font:'Robot',

            }}>

                <div style={{

                    position:'absolute',
                    top:'5%',
                    right:'0%',
                    width:'20%',
                    height:'10%',
                    fontSize:'1vw',
                    color:'#484649',

                }}>نام ونام خانوادگی راننده</div>

                <div style={{

                    position:'absolute',
                    top:'15%',
                    right:'0%',
                    width:'25%',
                    border:'5px solid rgba(0,0,0,0.15)',
                    height:'20%',
                    padding:'0px 20px 0px 0px',
                    fontSize:'2vw',
                    color:'#484649',
                    borderRadius:'20px',

                }}>{state.driver}</div>

                <div style={{

                    position:'absolute',
                    top:'5%',
                    right:'50%',
                    width:'20%',
                    height:'10%',
                    fontSize:'1vw',
                    color:'#484649',

                }}>مالک ماشین</div>

                <div style={{

                    position:'absolute',
                    top:'15%',
                    right:'50%',
                    width:'25%',
                    border:'5px solid rgba(0,0,0,0.15)',
                    height:'20%',
                    padding:'0px 20px 0px 0px',
                    fontSize:'2vw',
                    color:'#484649',
                    borderRadius:'20px',

                }}>{state.car_owner}</div>



                <div style={{

                    position:'absolute',
                    top:'39%',
                    right:'0%',
                    width:'20%',
                    height:'10%',
                    fontSize:'1vw',
                    color:'#484649',

                }}>نوع محصول</div>

                <div style={{

                    position:'absolute',
                    top:'50%',
                    right:'0%',
                    width:'25%',
                    border:'5px solid rgba(0,0,0,0.15)',
                    height:'20%',
                    padding:'0px 20px 0px 0px',
                    fontSize:'2vw',
                    color:'#484649',
                    borderRadius:'20px',

                }}>{state.productType}</div>


                <div style={{

                    position:'absolute',
                    top:'39%',
                    right:'50%',
                    width:'20%',
                    height:'10%',
                    fontSize:'1vw',
                    color:'#484649',

                }}>نوع ماشین</div>

                <div style={{

                    position:'absolute',
                    top:'50%',
                    right:'50%',
                    width:'25%',
                    border:'5px solid rgba(0,0,0,0.15)',
                    height:'20%',
                    padding:'0px 20px 0px 0px',
                    fontSize:'2vw',
                    color:'#484649',
                    borderRadius:'20px',

                }}>{state.car_type}</div>

                <div style={{

                    position:'absolute',
                    top:'74%',
                    right:'0%',
                    width:'20%',
                    height:'10%',
                    fontSize:'1vw',
                    color:'#484649',

                }}>شماره پلاک ماشین</div>

                <div style={{

                    position:'absolute',
                    top:'85%',
                    right:'0%',
                    textAlign:'center',
                    width:'6%',
                    height:'25%',
                    padding:'20px 20px 0px 0px',
                    color:'#484649',
                    borderRadius:'0px 20px 20px 0px',
                    borderColor:'rgba(0,0,0,0.15)',
                    borderWidth:'2px 2px 2px 0px',
                    borderStyle:'solid solid solid none',
                    fontSize:'2vw',

                }}>{state.car_number4}</div>

                <div style={{
                    textAlign:'center',

                    position:'absolute',
                    top:'85%',
                    right:'6%',
                    width:'9%',
                    height:'25%',
                    padding:'20px 20px 0px 0px',
                    color:'#484649',
                    borderRadius:'0px 0px 0px 0px',
                    borderColor:'rgba(0,0,0,0.15)',
                    borderWidth:'2px 2px 2px 0px',
                    borderStyle:'solid solid solid solid',
                    fontSize:'2vw',

                }}>{state.car_number3}</div>

                <div style={{

                    position:'absolute',
                    top:'85%',
                    right:'15%',
                    width:'3%',
                    height:'25%',
                    padding:'10px 0px 0px 0px',
                    color:'#484649',
                    borderRadius:'0px 0px 0px 0px',
                    textAlign:'center',
                    borderColor:'rgba(0,0,0,0.15)',
                    borderWidth:'2px 2px 2px 0px',
                    borderStyle:'solid solid solid solid',
                    fontSize:'2vw',

                }}>{state.car_number2}</div>

                <div style={{

                    position:'absolute',
                    top:'85%',
                    right:'18%',
                    width:'6%',
                    height:'25%',
                    padding:'20px 20px 0px 0px',
                    color:'#484649',
                    borderColor:'rgba(0,0,0,0.15)',
                    borderRadius:'20px 0px 0px 20px',
                    borderWidth:'2px 2px 2px 2px',
                    borderStyle:'solid solid solid solid',
                    textAlign:'center',
                    fontSize:'2vw',

                }}>{state.car_number1}</div>


            </div>
        </div>

    )


}

export default withCookies(DriverInf);