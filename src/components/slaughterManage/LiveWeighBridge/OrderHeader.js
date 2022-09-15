import React, {useState} from "react";
import { useLocation} from "react-router-dom";
import {IPServer} from "../../../data";
import {createBrowserHistory} from "history";
import {withCookies} from "react-cookie";
import OrderIcon from '../../../Image/slaughter/orders.svg';
import EnterIcon from '../../../Image/slaughter/entranse.png';
import FullTruckIcon from '../../../Image/slaughter/fulltruckicon.svg';
import EmptyTruckIcon from '../../../Image/slaughter/emptytruckicon.svg';
import ExitIcon from '../../../Image/slaughter/exitense.png';
import FinalIcon from '../../../Image/slaughter/double-tick.png';
import CounterIcon from '../../../Image/slaughter/counter.png';
import ExitIconPOPUP from "../../../Image/slaughter/exit.svg";

const history = createBrowserHistory();

const OrderHeader =(props)=>{

    const location = useLocation();

    const [state , setState] = useState({

        level : '',
        lwb_id:'',
        product_owner: '-',
        agriculture: '-',
        enter_time: '-',
        exit_time: '-',
        source_weight: '-',
        agriculture_average_weight: '-',
        weight: '-',
        empty_weight: '-',
        net_weight: '-',
        losses_num: '-',
        losses_weight: '-',
        victim_weight: '-',
        victim_num: '-',
        slaughter_counter: '-',
        prod_num_in_cage: '-',
        cage_num: '-',
        prod_num: '-',
        order_type: '-',
        fuel: '-',

    });


    const initialHandle =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            props.setLwbInf(jsonResponse)
            setState({


                level:jsonResponse['lwb']['level'],
                lwb_id: jsonResponse['lwb']['lwb_id'],
                product_owner: jsonResponse['lwb']['product_owner'],
                agriculture: jsonResponse['lwb']['agriculture'],
                enter_time: jsonResponse['lwb']['enter_time'],
                exit_time: jsonResponse['lwb']['exit_time'],
                source_weight: jsonResponse['lwb']['source_weight'],
                agriculture_average_weight: jsonResponse['lwb']['agriculture_average_weight'],
                weight: jsonResponse['lwb']['weight'],
                empty_weight: jsonResponse['lwb']['empty_weight'],
                net_weight: jsonResponse['lwb']['net_weight'],
                losses_num: jsonResponse['lwb']['losses_num'],
                losses_weight: jsonResponse['lwb']['losses_weight'],
                victim_weight: jsonResponse['lwb']['victim_weight'],
                victim_num: jsonResponse['lwb']['victim_num'],
                slaughter_counter: jsonResponse['lwb']['slaughter_counter'],
                prod_num_in_cage: jsonResponse['lwb']['prod_num_in_cage'],
                cage_num: jsonResponse['lwb']['cage_num'],
                prod_num: jsonResponse['lwb']['prod_num'],
                order_type: jsonResponse['lwb']['order_type'],
                fuel: jsonResponse['lwb']['fuel'],

            })
        }
    }

    const cancelHandle =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            history.push('/order/list/');
            window.location.reload();
        }


    }

    const cancelLwb =()=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: props.cookies.get('token'),
                lwb_id: state.lwb_id,

            })

        }


        fetch(IPServer() + '/slaughterManage/lwb/cancel/api/', requestJson)
            .then(data => data.json())
            .then(data => { cancelHandle(data)});


    }

    const constructor =(props)=> {

        const lwb_id = location.state.lwb_id;

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: props.cookies.get('token'),
                lwb_id: lwb_id,

            })

        }


        fetch(IPServer() + '/slaughterManage/lwb/inf/api/', requestJson)
            .then(data => data.json())
            .then(data => { initialHandle(data)});



    }

    if(props.lwbINF_num  < 1) {
        constructor(props);
    }

    const popup =()=>{

        console.log('this is popup')
        props.change_popup()


    }

    const show_popup =()=>{

        if(props.popup) {

            return(

                <div style={{

                    position:'absolute',
                    top:'0%',
                    right:'25%',
                    borderRadius:'20px',
                    border:'5px solid #6750A4' ,
                    width:'50%',
                    height:'200%',
                    borderStyle:'solid',
                    backgroundColor:'rgb(255,255.0,255.0)',
                    overflow:'scroll',

                }}>


                    <div style={{

                        width:'100%',
                        height:'15%',
                        right:'0%',
                        top:'0%',
                        color:'#484649',
                        textAlign:'right',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '28px',
                        borderBottom:' 2px solid #E6E1E5 ',

                    }}>

                        <h1 style={{paddingRight:'20px',top:'6%',position:'absolute',fontSize:'1.5vw',  right:'10px', width:'50%'}}>اطلاعات ریز سفارش</h1>

                        <button onClick={popup} style={{


                            backgroundColor: 'rgba(0,0,0,0)',
                            height: '5%',
                            width: '5%',
                            position:'absolute',
                            left:'0%',
                            top: '0%',
                            margin: '6%',
                            border:'none',
                            fontFamily:'Roboto',
                            fontStyle: 'normal',
                            textAlign:'left',
                            fontSize:'0.5vw',



                        }}><img src={ExitIconPOPUP} alt={'this is car icon'} style={{

                            right:'0px',
                            width:'100%',
                            height:'100%',

                        }}/>
                        </button>
                    </div>


                    <div style={{


                        width:'100%',
                        height:'85%',
                        right:'0%',
                        top:'20%',
                        color:'#484649',
                        textAlign:'right',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '28px',


                    }}>



                        <div style={{
                            position:'absolute',
                            width:'90%',
                            height:'7%',
                            top:'17%',
                            right:'1.5vw',
                            borderBottom:'5px solid #F4EFF4',

                        }}>
                            <h5 style={{

                                borderRight:'15px solid #6750A4',
                                borderTopRightRadius:'8px',
                                borderBottomRightRadius: '8px',
                                position:'absolute',
                                width:'50%',
                                height:'100%',
                                top:'0%',
                                fontSize:'1.25vw',
                                paddingRight:'10px',
                                paddingTop:'15px',
                                color:'#4A4458'

                            }}>اطلاعات سفارش</h5>

                        </div>



                        <div style={{

                            position:'absolute',
                            top:'30%',
                            right:'7%',
                            width:'50%',
                            height:'50%',
                            fontSize:'1vw',
                            color:'#484649',

                        }}><h3 style={{fontSize:'1vw',}} >صاحب محصول</h3></div>

                        <div style={{

                            position:'absolute',
                            top:'37%',
                            right:'7%',
                            width:'22%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h3 style={{fontSize:'1vw',}} >{state.product_owner}</h3></div>


                        <div style={{

                            position:'absolute',
                            top:'30%',
                            right:'35%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h3 style={{fontSize:'1vw',}} >مرغداری</h3></div>

                        <div style={{

                            position:'absolute',
                            top:'37%',
                            right:'35%',
                            width:'22%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h3 style={{fontSize:'1vw',}} >{state.agriculture}</h3></div>




                        <div style={{

                            position:'absolute',
                            top:'30%',
                            right:'65%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h3 style={{fontSize:'1vw',}}>نوع سفارش</h3></div>

                        <div style={{

                            position:'absolute',
                            top:'37%',
                            right:'65%',
                            width:'25%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'7%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h3 style={{fontSize:'1vw',}} >{state.order_type}</h3></div>





                        <div style={{
                            position:'absolute',
                            width:'90%',
                            height:'7%',
                            top:'48%',
                            right:'4%',
                            borderBottom:'5px solid #F4EFF4',

                        }}>
                            <h5 style={{

                                borderRight:'15px solid #6750A4',
                                borderTopRightRadius:'8px',
                                borderBottomRightRadius: '8px',
                                position:'absolute',
                                width:'75%',
                                height:'100%',
                                top:'0%',
                                fontSize:'1.25vw',
                                paddingRight:'10px',
                                paddingTop:'15px',
                                color:'#4A4458'

                            }}>زمان ورود و خروج</h5>

                        </div>



                        <div style={{

                            position:'absolute',
                            top:'60%',
                            right:'7%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h3 style={{fontSize:'1vw',}} >زمان ورود</h3></div>

                        <div style={{

                            position:'absolute',
                            top:'68%',
                            right:'7%',
                            width:'35%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h3 style={{fontSize:'1vw',}} >{state.enter_time}</h3></div>


                        <div style={{

                            position:'absolute',
                            top:'60%',
                            right:'50%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h3 style={{fontSize:'1vw',}} >زمان خروج</h3></div>

                        <div style={{

                            position:'absolute',
                            top:'68%',
                            right:'50%',
                            width:'35%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h3 style={{fontSize:'1vw',}} >{state.exit_time}</h3></div>


                        <div style={{
                            position:'absolute',
                            width:'90%',
                            height:'7%',
                            top:'80%',
                            right:'4%',
                            borderBottom:'5px solid #F4EFF4',

                        }}>
                            
                            <h5 style={{

                                borderRight:'15px solid #6750A4',
                                borderTopRightRadius:'8px',
                                borderBottomRightRadius: '8px',
                                position:'absolute',
                                width:'50%',
                                height:'100%',
                                top:'0%',
                                fontSize:'1.25vw',
                                paddingRight:'10px',
                                paddingTop:'15px',
                                color:'#4A4458'

                            }}>اطلاعات باسکول</h5>

                        </div>



                        <div style={{

                            position:'absolute',
                            top:'93%',
                            right:'7%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h3 style={{fontSize:'1vw',}} >وزن پر</h3></div>

                        <div style={{

                            position:'absolute',
                            top:'100%',
                            right:'7%',
                            width:'22%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h2 style={{fontSize:'1vw',}} >{state.weight}</h2></div>


                        <div style={{

                            position:'absolute',
                            top:'93%',
                            right:'35%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h2 style={{fontSize:'1vw',}} > وزن خالی</h2></div>

                        <div style={{

                            position:'absolute',
                            top:'100%',
                            right:'35%',
                            width:'22%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h2 style={{fontSize:'1vw',}} >{state.empty_weight}</h2></div>




                        <div style={{

                            position:'absolute',
                            top:'93%',
                            right:'65%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h2 style={{fontSize:'1vw',}} >وزن خالص</h2></div>

                        <div style={{

                            position:'absolute',
                            top:'100%',
                            right:'65%',
                            width:'25%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h2 style={{fontSize:'1vw',}} >{state.net_weight}</h2></div>





                        <div style={{

                            position:'absolute',
                            top:'110%',
                            right:'7%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h2 style={{fontSize:'1vw',}} >تعداد تلفات</h2></div>

                        <div style={{

                            position:'absolute',
                            top:'115%',
                            right:'7%',
                            width:'22%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h2 style={{fontSize:'1vw',}} >{state.victim_num}</h2></div>


                        <div style={{

                            position:'absolute',
                            top:'110%',
                            right:'35%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h2 style={{fontSize:'1vw',}} > تعداد ضایعات</h2></div>

                        <div style={{

                            position:'absolute',
                            top:'115%',
                            right:'35%',
                            width:'22%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h2 style={{fontSize:'1vw',}} >{state.losses_num}</h2></div>





                        <div style={{

                            position:'absolute',
                            top:'110%',
                            right:'65%',
                            width:'50%',
                            height:'50%',
                            font:'20px',
                            color:'#484649',

                        }}><h2 style={{fontSize:'1vw',}} >شمارش کشتار</h2></div>

                        <div style={{

                            position:'absolute',
                            top:'115%',
                            right:'65%',
                            width:'25%',
                            border:'5px solid rgba(0,0,0,0.15)',
                            height:'5%',
                            padding:'0px 0px 0px 0px',
                            font:'20px',
                            color:'#484649',
                            borderRadius:'20px',
                            textAlign:'center'

                        }}><h2 style={{fontSize:'1vw',}} >{state.slaughter_counter}</h2></div>


                    </div>





                </div>


            )


        } else{

            return (

                <div>
                </div>

            )


        }


    }

    const top = props.top;

    if (state.level === 'en'){

        return(
            <div style={{

                position:'absolute',
                width:'100%',
                height:'50%',
                top:top,
                right:'0%',
                textAlign:'right',
                direction:'rtl'

            }}>

                <div style={{
                    position:'absolute',
                    width:'90%',
                    height:'15%',
                    top:'5px',
                    right:'4%',
                    borderBottom:'5px solid #F4EFF4',

                }}>
                    <h2 style={{

                        borderRight:'15px solid #6750A4',
                        borderTopRightRadius:'8px',
                        borderBottomRightRadius: '8px',
                        position:'absolute',
                        width:'25%',
                        height:'90%',
                        top:'0%',
                        fontSize:'1.5vw',
                        paddingRight:'1.5vw',
                        paddingTop:'15px',
                        color:'#4A4458'

                    }}>وضعیت سفارش</h2>

                    <button onClick={popup} style={{

                        position:'absolute',
                        width:'15%',
                        height:'50%',
                        direction:'rtl',
                        borderRadius:'100px',
                        backgroundColor:'#6750A4',
                        color:'rgb(255,255,255)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1vw',
                        top:'30%',
                        left:'0%'

                    }}  name='this-is-neworder' >اطلاعات ریز سفارش</button>

                    <button onClick={cancelLwb} style={{

                        position:'absolute',
                        width:'10%',
                        height:'50%',
                        direction:'rtl',
                        borderRadius:'200px',
                        backgroundColor:'rgba(0,0,0,0)',
                        color:'#DC362E',
                        borderColor:'#DC362E',
                        borderWidth:'5px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1vw',
                        top:'30%',
                        left:'16%'

                    }}>عدم ارجاع</button>

                </div>

                <div style={{

                    position:'absolute',
                    top:'17%',
                    width:'90%',
                    right:'5%',
                    height:'70%',
                    fontSize:'1.5vw',
                    font:'Robot',

                }}>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'8%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'0%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>

                        <img alt='this is icon' src={OrderIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'2%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> سفارش </h3>



                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'23%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'14%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,1)'

                    }}>
                        <img alt='this is icon' src={EnterIcon} style={{position:'absolute', width:'40%', height:'40%' ,top:'30%', right:'30%' }} />

                    </div>
                    <h2 style={{

                        position:'absolute',
                        top:'48%',
                        right:'17%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(127,103,190,1)',
                        fontSize:'1.25vw',


                    }}> ورود </h2>


                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'38%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'30%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={FullTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'31%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> باسکول پر </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'53%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'45%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={EmptyTruckIcon} style={{position:'absolute', width:'40%', height:'40%' ,top:'30%', right:'30%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'45%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> باسکول خالی </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'68%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'60%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={ExitIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }} />

                    </div>

                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'62%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> خروج </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'83%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'75%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={CounterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }}/>

                    </div>

                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'74%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> شمارش کشتارگاه </h3>


                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'90%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={FinalIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }} />

                    </div>


                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'89%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> نهایی سازی سفارش </h3>

                </div>
                {show_popup()}

            </div>

        )



    }else if (state.level === 'w'){

        return(
            <div style={{

                position:'absolute',
                width:'100%',
                height:'50%',
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
                        height:'90%',
                        top:'8%',
                        fontSize:'1.5vw',
                        paddingRight:'1.5vw',
                        paddingTop:'15px',
                        color:'#4A4458'

                    }}>وضعیت سفارش</h2>

                    <button onClick={popup} style={{

                        position:'absolute',
                        width:'15%',
                        height:'50%',
                        direction:'rtl',
                        borderRadius:'100px',
                        backgroundColor:'#6750A4',
                        color:'rgb(255,255,255)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1vw',
                        top:'30%',
                        left:'0%'

                    }}  name='this-is-neworder' >اطلاعات ریز سفارش</button>

                </div>

                <div style={{

                    position:'absolute',
                    top:'17%',
                    width:'90%',
                    right:'5%',
                    height:'70%',
                    fontSize:'25px',
                    font:'Robot',

                }}>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'8%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'0%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>

                        <img alt='this is icon' src={OrderIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'2%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> سفارش </h3>



                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'23%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'15%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EnterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'18%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> ورود </h3>


                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'38%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{
                        position:'absolute',
                        top:'12%',
                        right:'30%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,1)'

                    }}>
                        <img alt='this is icon' src={FullTruckIcon} style={{position:'absolute', width:'40%', height:'40%' ,top:'30%', right:'35%' }} />

                    </div>
                    <h2 style={{

                        position:'absolute',
                        top:'48%',
                        right:'31%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(127,103,190,1)',
                        fontSize:'1.25vw',


                    }}> باسکول پر </h2>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'53%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'45%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)',
                        fontSize:'1vw',

                    }}>
                        <img alt='this is icon' src={EmptyTruckIcon} style={{position:'absolute', width:'40%', height:'40%' ,top:'30%', right:'30%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'45%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> باسکول خالی </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'68%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'60%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={ExitIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }} />

                    </div>

                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'62%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> خروج </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'83%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'75%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={CounterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }}/>

                    </div>

                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'74%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> شمارش کشتارگاه </h3>


                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'90%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={FinalIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }} />

                    </div>


                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'89%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> نهایی سازی سفارش </h3>

                </div>

                {show_popup()}

            </div>

        )



    }else if (state.level === 'em'){

        return(
            <div style={{

                position:'absolute',
                width:'100%',
                height:'50%',
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
                        height:'90%',
                        top:'8%',
                        fontSize:'1.5vw',
                        paddingRight:'1.5vw',
                        paddingTop:'15px',
                        color:'#4A4458'

                    }}>وضعیت سفارش</h2>

                    <button onClick={popup} style={{

                        position:'absolute',
                        width:'15%',
                        height:'50%',
                        direction:'rtl',
                        borderRadius:'100px',
                        backgroundColor:'#6750A4',
                        color:'rgb(255,255,255)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1vw',
                        top:'30%',
                        left:'0%'

                    }}  name='this-is-neworder' >اطلاعات ریز سفارش</button>

                </div>

                <div style={{

                    position:'absolute',
                    top:'17%',
                    width:'90%',
                    right:'5%',
                    height:'70%',
                    fontSize:'25px',
                    font:'Robot',

                }}>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'8%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'0%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>

                        <img alt='this is icon' src={OrderIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'2%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> سفارش </h3>



                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'23%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'15%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EnterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'18%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',

                    }}> ورود </h3>


                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'38%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'30%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={FullTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{


                        position:'absolute',
                        top:'45%',
                        right:'31%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',

                        fontSize:'1vw',

                    }}> باسکول پر </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'53%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'44%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,1)'

                    }}>
                        <img alt='this is icon' src={EmptyTruckIcon} style={{position:'absolute', width:'40%', height:'40%' ,top:'30%', right:'30%' }} />

                    </div>
                    <h2 style={{
                        position:'absolute',
                        top:'48%',
                        right:'44%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(127,103,190,1)',
                        fontSize:'1vw',

                    }}> باسکول خالی </h2>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'68%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'60%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={ExitIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }} />

                    </div>

                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'62%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> خروج </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'83%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'75%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={CounterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }}/>

                    </div>

                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'74%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> شمارش کشتارگاه </h3>


                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'90%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={FinalIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }} />

                    </div>


                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'89%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> نهایی سازی سفارش </h3>

                </div>
                {show_popup()}

            </div>

        )


    }else if (state.level === 'ex'){

        return(
            <div style={{

                position:'absolute',
                width:'100%',
                height:'50%',
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
                        height:'90%',
                        top:'8%',
                        fontSize:'1.5vw',
                        paddingRight:'1.5vw',
                        paddingTop:'15px',
                        color:'#4A4458'

                    }}>وضعیت سفارش</h2>

                    <button onClick={popup} style={{

                        position:'absolute',
                        width:'15%',
                        height:'50%',
                        direction:'rtl',
                        borderRadius:'100px',
                        backgroundColor:'#6750A4',
                        color:'rgb(255,255,255)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1vw',
                        top:'30%',
                        left:'0%'

                    }}  name='this-is-neworder' >اطلاعات ریز سفارش</button>

                </div>

                <div style={{

                    position:'absolute',
                    top:'17%',
                    width:'90%',
                    right:'5%',
                    height:'70%',
                    fontSize:'25px',
                    font:'Robot',

                }}>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'8%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'0%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>

                        <img alt='this is icon' src={OrderIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'2%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> سفارش </h3>



                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'23%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'15%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EnterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />
                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'18%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> ورود </h3>


                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'38%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'30%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={FullTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{


                        position:'absolute',
                        top:'45%',
                        right:'31%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> باسکول پر </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'53%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'45%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EmptyTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }}  />

                    </div>
                    <h3 style={{
                        position:'absolute',
                        top:'45%',
                        right:'45.5%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> باسکول خالی </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'68%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'60%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,1)'

                    }}>
                        <img alt='this is icon' src={ExitIcon} style={{position:'absolute', width:'40%', height:'40%' ,top:'30%', right:'30%' }} />

                    </div>

                    <h2 style={{
                        position:'absolute',
                        top:'48%',
                        right:'62.5%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(127,103,190,1)',
                        fontSize:'1.25vw',

                    }}> خروج </h2>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'83%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'75%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={CounterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }}/>

                    </div>

                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'74%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',


                    }}> شمارش کشتارگاه </h3>


                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'90%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={FinalIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }} />

                    </div>


                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'89%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw',

                    }}> نهایی سازی سفارش </h3>

                </div>
                {show_popup()}

            </div>

        )


    }else if (state.level === 's'){

        return(
            <div style={{

                position:'absolute',
                width:'100%',
                height:'50%',
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
                        height:'90%',
                        top:'8%',
                        fontSize:'1.5vw',
                        paddingRight:'1.5vw',
                        paddingTop:'15px',
                        color:'#4A4458'

                    }}>وضعیت سفارش</h2>

                    <button onClick={popup} style={{

                        position:'absolute',
                        width:'15%',
                        height:'50%',
                        direction:'rtl',
                        borderRadius:'100px',
                        backgroundColor:'#6750A4',
                        color:'rgb(255,255,255)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1vw',
                        top:'30%',
                        left:'0%'

                    }}  name='this-is-neworder' >اطلاعات ریز سفارش</button>

                </div>

                <div style={{

                    position:'absolute',
                    top:'17%',
                    width:'90%',
                    right:'5%',
                    height:'70%',
                    fontSize:'25px',
                    font:'shabnam',

                }}>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'8%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'0%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>

                        <img alt='this is icon' src={OrderIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'2%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'


                    }}> سفارش </h3>



                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'23%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'15%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EnterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'18%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'


                    }}> ورود </h3>


                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'38%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'30%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={FullTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{


                        position:'absolute',
                        top:'45%',
                        right:'31%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'


                    }}> باسکول پر </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'53%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'45%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EmptyTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }}  />

                    </div>
                    <h3 style={{
                        position:'absolute',
                        top:'45%',
                        right:'45.5%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'


                    }}> باسکول خالی </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'68%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{


                        position:'absolute',
                        top:'12%',
                        right:'60%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={ExitIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }}  />

                    </div>

                    <h3 style={{
                        position:'absolute',
                        top:'45%',
                        right:'62%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'

                    }}> خروج </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'83%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'75%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,1)'

                    }}>
                        <img alt='this is icon' src={CounterIcon} style={{position:'absolute', width:'40%', height:'40%' ,top:'30%', right:'30%' }}/>

                    </div>

                    <h2 style={{

                        position:'absolute',
                        top:'48%',
                        right:'73%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(127,103,190,1)',
                        fontSize:'1vw'

                    }}> شمارش کشتارگاه </h2>


                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'90%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(103, 80, 164, 0.08)'

                    }}>
                        <img alt='this is icon' src={FinalIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'35%', right:'35%' }} />

                    </div>


                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'89%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.5)',
                        fontSize:'1vw'

                    }}> نهایی سازی سفارش </h3>

                </div>
                {show_popup()}

            </div>

        )


    }else if (state.level === 'fin'){

        return(
            <div style={{

                position:'absolute',
                width:'100%',
                height:'50%',
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
                        height:'90%',
                        top:'8%',
                        fontSize:'1.5vw',
                        paddingRight:'1.5vw',
                        paddingTop:'15px',
                        color:'#4A4458'

                    }}>وضعیت سفارش</h2>


                    <button onClick={popup} style={{

                        position:'absolute',
                        width:'15%',
                        height:'50%',
                        direction:'rtl',
                        borderRadius:'100px',
                        backgroundColor:'#6750A4',
                        color:'rgb(255,255,255)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1vw',
                        top:'30%',
                        left:'0%',

                    }}  name='this-is-neworder' ><h5>اطلاعات ریز سفارش</h5></button>



                </div>

                <div style={{

                    position:'absolute',
                    top:'17%',
                    width:'90%',
                    right:'5%',
                    height:'70%',
                    fontSize:'25px',
                    font:'Robot',

                }}>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'8%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'0%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>

                        <img alt='this is icon' src={OrderIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'2%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'


                    }}> سفارش </h3>



                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'23%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'15%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EnterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'18%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'


                    }}> ورود </h3>


                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'38%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'30%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={FullTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{


                        position:'absolute',
                        top:'45%',
                        right:'31%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'


                    }}> باسکول پر </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'53%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'45%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EmptyTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }}  />

                    </div>
                    <h3 style={{
                        position:'absolute',
                        top:'45%',
                        right:'45.5%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'


                    }}> باسکول خالی </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'68%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{


                        position:'absolute',
                        top:'12%',
                        right:'60%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={ExitIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }}  />

                    </div>

                    <h3 style={{
                        position:'absolute',
                        top:'45%',
                        right:'62%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'

                    }}> خروج </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'83%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{


                        position:'absolute',
                        top:'12%',
                        right:'75%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={CounterIcon}  style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }}/>

                    </div>

                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'74%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw'

                    }}> شمارش کشتارگاه </h3>


                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'90%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,1)'

                    }}>
                        <img alt='this is icon' src={FinalIcon} style={{position:'absolute', width:'40%', height:'40%' ,top:'30%', right:'30%' }}/>

                    </div>


                    <h2 style={{

                        position:'absolute',
                        top:'48%',
                        right:'88%',
                        width:'25%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(127,103,190,1)',
                        fontSize:'1vw'

                    }}> نهایی سازی سفارش </h2>

                </div>
                {show_popup()}

            </div>

        )

    } else{


        return(
            <div style={{

                position:'absolute',
                width:'100%',
                height:'50%',
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
                        height:'90%',
                        top:'8%',
                        fontSize:'1.5vw',
                        paddingRight:'1.5vw',
                        paddingTop:'15px',
                        color:'#4A4458'

                    }}>وضعیت سفارش</h2>


                    <button onClick={popup} style={{

                        position:'absolute',
                        width:'20%',
                        height:'50%',
                        direction:'rtl',
                        borderRadius:'100px',
                        backgroundColor:'#6750A4',
                        color:'rgb(255,255,255)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1vw',
                        top:'30%',
                        left:'0%'

                    }}  name='this-is-neworder' >اطلاعات ریز سفارش</button>



                </div>

                <div style={{

                    position:'absolute',
                    top:'17%',
                    width:'90%',
                    right:'5%',
                    height:'70%',
                    fontSize:'25px',
                    font:'Robot',

                }}>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'8%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'0%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>

                        <img alt='this is icon' src={OrderIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'2%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> سفارش </h3>



                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'23%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'15%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EnterIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'18%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> ورود </h3>


                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'38%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'30%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={FullTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }} />

                    </div>
                    <h3 style={{


                        position:'absolute',
                        top:'45%',
                        right:'31%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> باسکول پر </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'53%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{

                        position:'absolute',
                        top:'12%',
                        right:'45%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={EmptyTruckIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }}  />

                    </div>
                    <h3 style={{
                        position:'absolute',
                        top:'45%',
                        right:'45.5%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',


                    }}> باسکول خالی </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'68%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{


                        position:'absolute',
                        top:'12%',
                        right:'60%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={ExitIcon} style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }}  />

                    </div>

                    <h3 style={{
                        position:'absolute',
                        top:'45%',
                        right:'62%',
                        width:'9%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',

                    }}> خروج </h3>

                    <div style={{

                        position:'absolute',
                        top:'30%',
                        right:'83%',
                        width:'7%',
                        height:'1%',
                        borderTop : '5px solid #C9C5CA'
                    }}></div>

                    <div style={{


                        position:'absolute',
                        top:'12%',
                        right:'75%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={CounterIcon}  style={{position:'absolute', width:'30%', height:'30%' ,top:'40%', right:'35%' }}/>

                    </div>

                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'74%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',

                    }}> شمارش کشتارگاه </h3>


                    <div style={{
                        position:'absolute',
                        top:'12%',
                        right:'90%',
                        width:'8%',
                        height:'32%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(127,103,190,0.35)'

                    }}>
                        <img alt='this is icon' src={FinalIcon} style={{position:'absolute', width:'40%', height:'40%' ,top:'30%', right:'30%' }}/>

                    </div>


                    <h3 style={{

                        position:'absolute',
                        top:'45%',
                        right:'90%',
                        width:'15%',
                        height:'35%',
                        borderRadius:'100%',
                        backgroundColor:'rgba(0.0,0.0,0.0,0.0)',
                        color:'rgba(0,0,0,0.8)',
                        fontSize:'1vw',

                    }}> نهایی سازی سفارش </h3>

                </div>

                {show_popup()}

            </div>
        )
    }


}

export default withCookies(OrderHeader);