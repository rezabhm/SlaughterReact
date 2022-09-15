import React, {Component} from "react";
import {withCookies} from "react-cookie";
import RightDashbord from "../Main/Main";
import Header from "../Main/Header";
import DriverInf from "./DriverInformation";
import OrderHeader from "./OrderHeader";
import {IPServer} from "../../../data";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

class OrderLevel extends Component{

    state = {

        car_id : '',
        driverINF_num : -10,
        lwbINF_num : -1,
        lwb_id: '',
        product_owner: '',
        driver:'' ,
        car: '',
        agriculture : '',
        product_type:'' ,
        enter_time:'' ,
        exit_time: '',
        source_weight: '',
        agriculture_average_weight : '',
        weight: '',
        empty_weight:'' ,
        net_weight: '',
        losses_num: '',
        losses_weight: '',
        victim_weight :'' ,
        victim_num: '',
        slaughter_counter: '',
        prod_num_in_cage: '',
        cage_num: '',
        prod_num:'' ,
        level : '',
        order_type:'' ,
        fuel:'' ,
        rnt:0.0,
        desc:'-',
        additional_data:'',
        popup : false,
        RightDashbord : false,

    }


    rightDashboardActivate =()=>{

        if (this.state.RightDashbord){

            return(

                <RightDashbord />
            )

        }


    }

    rightDashboardButtonClick =()=>{

        this.setState({

            RightDashbord : !this.state.RightDashbord


        })


    }


    change_popup =()=>{

        this.setState({
            popup: !this.state.popup
        })

        console.log('this is change popup')
        console.log(this.state.popup)

    }

    GetPrint =()=>{

        history.push('/print/live/weighbridge/', {

            counter : 1,
            driver: this.state.driver ,
            car : this.state.car,
            product_type:this.state.product_type,
            weight:this.state.weight,
            empty_weight:this.state.empty_weight,
            net_weight:this.state.weight - this.state.empty_weight,
            victim_num:this.state.victim_num,
            losses_num:this.state.losses_num,
            agriculture:this.state.agriculture,
            product_owner:this.state.product_owner,
            cage_num:this.state.cage_num,
            prod_num_in_cage:this.state.prod_num_in_cage,
            total_num:this.state.cage_num * this.state.prod_num_in_cage,
            weigh_time:this.state.enter_time,
            source_weight : this.state.source_weight
        })
        window.location.reload()


    }

    setCarID =(car_id)=>{

        this.setState({

            car_id:car_id,
            driverINF_num : this.state.driverINF_num + 1
        })
    }

    setLwbInf =(jsonResponse)=>{

        this.setState({

            lwbINF_num:this.state.lwbINF_num +  1,
            lwb_id: jsonResponse['lwb']['lwb_id'],
            product_owner: jsonResponse['lwb']['product_owner'],
            driver: jsonResponse['lwb']['driver'],
            car: jsonResponse['lwb']['car'],
            agriculture : jsonResponse['lwb']['agriculture'],
            product_type: jsonResponse['lwb']['product_type'],
            enter_time: jsonResponse['lwb']['enter_time'],
            exit_time: jsonResponse['lwb']['exit_time'],
            source_weight: jsonResponse['lwb']['source_weight'],
            agriculture_average_weight : jsonResponse['lwb']['agriculture_average_weight'],
            weight: jsonResponse['lwb']['weight'],
            empty_weight: jsonResponse['lwb']['empty_weight'],
            net_weight: jsonResponse['lwb']['net_weight'],
            losses_num: jsonResponse['lwb']['losses_num'],
            losses_weight: jsonResponse['lwb']['losses_weight'],
            victim_weight : jsonResponse['lwb']['victim_weight'],
            victim_num: jsonResponse['lwb']['victim_num'],
            slaughter_counter: jsonResponse['lwb']['slaughter_counter'],
            prod_num_in_cage: jsonResponse['lwb']['prod_num_in_cage'],
            cage_num: jsonResponse['lwb']['cage_num'],
            prod_num: jsonResponse['lwb']['prod_num'],
            level : jsonResponse['lwb']['level'],
            order_type: jsonResponse['lwb']['order_type'],
            fuel: jsonResponse['lwb']['fuel'],
            description : jsonResponse['lwb']['description']
        })


    }

    weightChange =(event)=>{

        this.setState({

            weight : event.target.value

        })

    }

    sourceWeightChange =(event)=>{

        this.setState({

            source_weight : event.target.value

        })

    }

    cageNumChange =(event)=>{

        this.setState({

            cage_num : event.target.value

        })

    }

    prodNumInCage =(event)=>{

        this.setState({

            prod_num_in_cage : event.target.value

        })

    }

    emptyWeightChange =(event)=>{

        this.setState({

            empty_weight : event.target.value,
            net_weight : this.state.weight - event.target.value,

        })

    }

    victimNumChange=(event)=>{

        this.setState({

            victim_num : event.target.value

        })

    }

    victimWeightChange=(event)=>{

        this.setState({

            losses_weight : event.target.value

        })

    }

    lossesWeightChange=(event)=>{

        this.setState({

            victim_weight : event.target.value

        })

    }

    lossesNumChange=(event)=>{

        this.setState({

            losses_num : event.target.value

        })

    }

    fuelChange=(event)=>{

        this.setState({

            fuel : event.target.value

        })

    }

    descriptionChange=(event)=>{

        this.setState({

            desc : event.target.value

        })

    }

    slaughterCountChange=(event)=>{

        this.setState({

            slaughter_counter : event.target.value

        })

    }

    buyPrice=(event)=>{

        this.setState({

            buy_price : event.target.value

        })

    }

    salePrice=(event)=>{

        this.setState({

            sale_price : event.target.value

        })

    }

    saleWeight=(event)=>{

        this.setState({

            sale_weight : event.target.value

        })

    }
    agricultureAvgWeight=(event)=>{

        this.setState({

            agriculture_avg_weight : event.target.value

        })

    }

    account_side=(event)=>{

        this.setState({

            account_side : event.target.value

        })

    }

    rent=(event)=>{

        this.setState({

            rnt : event.target.value

        })

    }

    handleLevelClick =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            history.push('/order/list/')
            window.location.reload()

        } else{

            alert('دیتا های وارد شده اشتباه است !!!')


        }


    }

    levelClick =()=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                data: this.state,

            })


        } ;

        fetch(IPServer() + '/slaughterManage/order/level/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleLevelClick(data));


    }


    render() {

        if(this.state.level === 'en'){


            return (

                <div style={{}}>

                    <Header title='ثبت سفارش جدید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />
                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '1000px',
                        borderStyle: 'solid solid solid solid',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px',


                    }}>

                        <DriverInf setCar_ID={this.setCarID} driverINF_num={this.state.driverINF_num} top='30%'/>
                        <OrderHeader top='0%' popup={this.state.popup} change_popup={this.change_popup}  setLwbInf={this.setLwbInf} lwbINF_num={this.state.lwbINF_num}/>

                        <div style={{

                            position: 'absolute',
                            bottom: '5%',
                            right: '5%',
                            width: '15%',
                            height: '5%'

                        }}>

                            <button onClick={this.levelClick} style={{

                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                direction: 'rtl',
                                borderRadius: '100px',
                                backgroundColor: '#6750A4',
                                color: 'rgb(255,255,255)',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 24px 10px 16px',
                                gap: '8px',
                                fontSize: '1vw',
                                bottom: '0%',
                                right: '0%'

                            }} name='this-is-neworder'>ثبت ورود به کشتارگاه
                            </button>


                        </div>

                    </div>
                    {this.rightDashboardActivate()}


                </div>


            )


        } else if(this.state.level === 'w'){

            return (

                <div style={{}}>

                    <Header title='ثبت سفارش جدید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />


                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '1500px',
                        borderStyle: 'solid',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 50px 50px',


                    }}>
                    </div>


                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '600px',
                        borderStyle: 'none',
                        width: '98%',
                        top: '1000px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 50px 50px',

                    }}>

                        <div style={{
                            position:'absolute',
                            direction:'rtl',
                            width:'90%',
                            height:'15%',
                            top:'10px',
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

                            }}>اطلاعات سفارش</h2>

                        </div>

                        <h3 style={{

                            position: 'absolute',
                            top: '30%',
                            right: '4%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign:'right',

                        }}>وزن پر  </h3>

                        <input style={{

                            position: 'absolute',
                            top: '45%',
                            right: '4%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '20%',
                            padding: '10px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign:'center',
                            direction:'rtl'

                        }} type='text' onChange={this.weightChange}/>


                        <h3 style={{

                            position: 'absolute',
                            top: '30%',
                            right: '29%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign:'right',

                        }}>وزن خالص مبدا  </h3>

                        <input style={{

                            position: 'absolute',
                            top: '45%',
                            right: '29%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '15%',
                            padding: '10px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign:'center',
                            direction:'rtl'

                        }} type='text' onChange={this.sourceWeightChange}/>

                        <h3 style={{

                            position: 'absolute',
                            top: '30%',
                            right: '54%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign:'right',

                        }}>تعداد قفس  </h3>

                        <input style={{

                            position: 'absolute',
                            top: '45%',
                            right: '54%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '15%',
                            padding: '10px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign:'center',
                            direction:'rtl'

                        }} type='text' onChange={this.cageNumChange}/>

                        <h3 style={{

                            position: 'absolute',
                            top: '30%',
                            right: '79%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign:'right',

                        }}>تعداد مرغ در قفس  </h3>

                        <input style={{

                            position: 'absolute',
                            top: '45%',
                            right: '79%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '15%',
                            padding: '10px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign:'center',
                            direction:'rtl'

                        }} type='text' onChange={this.prodNumInCage}/>



                        <button onClick={this.levelClick} style={{

                            position: 'absolute',
                            width: '15%',
                            height: '10%',
                            direction: 'rtl',
                            borderRadius: '100px',
                            backgroundColor: '#6750A4',
                            color: 'rgb(255,255,255)',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px 24px 10px 16px',
                            gap: '8px',
                            fontSize: '1vw',
                            bottom: '10%',
                            right: '4%'

                        }} name='this-is-neworder'>ثبت اطلاعات
                        </button>


                    </div>



                    <div style={{

                        border: '1px solid #E6E1E5',

                        position: 'absolute',
                        height: '1000px',
                        borderStyle: 'none',
                        width: '98%',
                        top: '210px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 0px 0px',


                    }}>

                        <DriverInf setCar_ID={this.setCarID} driverINF_num={this.state.driverINF_num} top='30%'/>
                        <OrderHeader top='1%' popup={this.state.popup} change_popup={this.change_popup}  setLwbInf={this.setLwbInf} lwbINF_num={this.state.lwbINF_num}/>

                    </div>

                    {this.rightDashboardActivate()}

                </div>


            )

        } else if(this.state.level === 'em') {

            return (

                <div style={{}}>

                    <Header title='ثبت سفارش جدید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />


                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '1700px',
                        borderStyle: 'solid',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 50px 50px',


                    }}>
                    </div>


                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '800px',
                        borderStyle: 'none',
                        width: '98%',
                        top: '1000px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 50px 50px',

                    }}>

                        <div style={{
                            position: 'absolute',
                            direction: 'rtl',
                            width: '90%',
                            height: '15%',
                            top: '10px',
                            right: '4%',
                            borderBottom: '5px solid #F4EFF4',

                        }}>
                            <h2 style={{

                                borderRight: '15px solid #6750A4',
                                borderTopRightRadius: '8px',
                                borderBottomRightRadius: '8px',
                                position: 'absolute',
                                width: '25%',
                                height: '90%',
                                top: '0%',
                                fontSize: '1.5vw',
                                paddingRight: '1.5vw',
                                paddingTop: '15px',
                                color: '#4A4458'

                            }}>اطلاعات سفارش</h2>

                        </div>


                        <h3 style={{

                            position: 'absolute',
                            top: '25%',
                            right: '4%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}>وزن خالی </h3>

                        <input style={{

                            position: 'absolute',
                            top: '40%',
                            right: '4%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '10%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.emptyWeightChange}/>


                        <h3 style={{

                            position: 'absolute',
                            top: '25%',
                            right: '29%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}>تعداد تلفات </h3>

                        <input style={{

                            position: 'absolute',
                            top: '40%',
                            right: '29%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '10%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.victimNumChange}/>

                        <h3 style={{

                            position: 'absolute',
                            top: '25%',
                            right: '54%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}> وزن تلفات </h3>

                        <input  style={{

                            position: 'absolute',
                            top: '40%',
                            right: '54%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '10%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.victimWeightChange}/>


                        <h3 style={{

                            position: 'absolute',
                            top: '55%',
                            right: '4%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}>سوخت </h3>

                        <input style={{

                            position: 'absolute',
                            top: '70%',
                            right: '4%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '10%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.fuelChange}/>


                        <h3 style={{

                            position: 'absolute',
                            top: '55%',
                            right: '29%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}>تعداد ضایعات </h3>

                        <input style={{

                            position: 'absolute',
                            top: '70%',
                            right: '29%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '10%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.lossesNumChange}/>

                        <h3 style={{

                            position: 'absolute',
                            top: '55%',
                            right: '54%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}> وزن ضایعات </h3>

                        <input style={{

                            position: 'absolute',
                            top: '70%',
                            right: '54%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '10%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.lossesWeightChange}/>

                        <h3 style={{

                            position: 'absolute',
                            top: '25%',
                            right: '75%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}> توضیحات </h3>

                        <input style={{

                            position: 'absolute',
                            top: '40%',
                            right: '75%',
                            width: '20%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '40%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.descriptionChange}/>


                        <button onClick={this.levelClick} style={{

                            position: 'absolute',
                            width: '15%',
                            height: '10%',
                            direction: 'rtl',
                            borderRadius: '100px',
                            backgroundColor: '#6750A4',
                            color: 'rgb(255,255,255)',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px 24px 10px 16px',
                            gap: '8px',
                            fontSize: '1vw',
                            bottom: '0%',
                            right: '4%'

                        }} name='this-is-neworder'>ثبت اطلاعات
                        </button>


                    </div>
                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '1000px',
                        borderStyle: 'none',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 0px 0px',


                    }}>

                        <DriverInf setCar_ID={this.setCarID} driverINF_num={this.state.driverINF_num} top='30%'/>
                        <OrderHeader top='0%' popup={this.state.popup} change_popup={this.change_popup} setLwbInf={this.setLwbInf} lwbINF_num={this.state.lwbINF_num}/>

                    </div>

                    {this.rightDashboardActivate()}

                </div>


            )

        }else if(this.state.level === 'ex') {


            return (

                <div style={{}}>

                    <Header title='ثبت سفارش جدید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />
                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '1000px',
                        borderStyle: 'solid solid solid solid',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px',


                    }}>

                        <DriverInf setCar_ID={this.setCarID} driverINF_num={this.state.driverINF_num} top='30%'/>
                        <OrderHeader top='0%' popup={this.state.popup} change_popup={this.change_popup}  setLwbInf={this.setLwbInf} lwbINF_num={this.state.lwbINF_num}/>

                        <div style={{

                            position: 'absolute',
                            bottom: '5%',
                            right: '5%',
                            width: '50%',
                            height: '5%'

                        }}>

                            <button onClick={this.levelClick} style={{

                                position: 'absolute',
                                width: '25%',
                                height: '100%',
                                direction: 'rtl',
                                borderRadius: '100px',
                                backgroundColor: '#6750A4',
                                color: 'rgb(255,255,255)',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 24px 10px 16px',
                                gap: '8px',
                                fontSize: '1vw',
                                bottom: '0%',
                                right: '0%'

                            }} name='this-is-neworder'>ثبت خروج از کشتارگاه
                            </button>

                            <button onClick={this.GetPrint} style={{

                                position: 'absolute',
                                width: '20%',
                                height: '100%',
                                direction: 'rtl',
                                borderRadius:'200px',
                                backgroundColor:'rgb(255,255,255)',
                                color:'#6750A4',
                                borderColor:'#6750A4',
                                borderWidth:'5px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 24px 10px 16px',
                                gap: '8px',
                                fontSize:'1vw',
                                top:'0%',
                                right:'27%'

                            }} name='this-is-new_order'>دریافت پرینت
                            </button>


                        </div>

                    </div>
                    {this.rightDashboardActivate()}

                </div>


            )

        } else if(this.state.level === 's') {


            return (

                <div style={{}}>

                    <Header title='ثبت سفارش جدید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />

                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '1250px',
                        borderStyle: 'solid',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 50px 50px',


                    }}>
                    </div>

                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '400px',
                        borderStyle: 'none',
                        width: '98%',
                        top: '1000px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 50px 50px',

                    }}>

                        <div style={{
                            position: 'absolute',
                            direction: 'rtl',
                            width: '90%',
                            height: '15%',
                            top: '10px',
                            right: '4%',
                            borderBottom: '5px solid #F4EFF4',

                        }}>
                            <h2 style={{

                                borderRight: '15px solid #6750A4',
                                borderTopRightRadius: '8px',
                                borderBottomRightRadius: '8px',
                                position: 'absolute',
                                width: '25%',
                                height: '90%',
                                top: '0%',
                                fontSize: '1.5vw',
                                paddingRight: '1.5vw',
                                paddingTop: '15px',
                                color: '#4A4458'

                            }}>اطلاعات سفارش</h2>

                        </div>


                        <h3 style={{

                            position: 'absolute',
                            top: '30%',
                            right: '4%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}>شمارش کشتارگاه </h3>

                        <input style={{

                            position: 'absolute',
                            top: '45%',
                            right: '4%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '20%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '1vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.slaughterCountChange}/>

                        <button onClick={this.levelClick} style={{

                            position: 'absolute',
                            width: '15%',
                            height: '15%',
                            direction: 'rtl',
                            borderRadius: '100px',
                            backgroundColor: '#6750A4',
                            color: 'rgb(255,255,255)',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px 24px 10px 16px',
                            gap: '8px',
                            fontSize: '1.5vw',
                            bottom: '10%',
                            right: '4%'

                        }} name='this-is-neworder'>ثبت اطلاعات
                        </button>

                    </div>


                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '1000px',
                        borderStyle: 'none',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 0px 0px',

                    }}>

                        <DriverInf setCar_ID={this.setCarID} driverINF_num={this.state.driverINF_num} top='30%'/>
                        <OrderHeader top='0%' popup={this.state.popup} change_popup={this.change_popup}  setLwbInf={this.setLwbInf} lwbINF_num={this.state.lwbINF_num}/>

                    </div>
                    {this.rightDashboardActivate()}

                </div>
            )


        } else if(this.state.level === 'fin'){

            return (

                <div style={{}}>
                    <Header title='ثبت سفارش جدید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />


                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '1400px',
                        borderStyle: 'solid',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 50px 50px',


                    }}>
                    </div>


                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '500px',
                        borderStyle: 'none',
                        width: '98%',
                        top: '1000px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 50px 50px',

                    }}>

                        <div style={{
                            position: 'absolute',
                            direction: 'rtl',
                            width: '90%',
                            height: '15%',
                            top: '10px',
                            right: '4%',
                            borderBottom: '5px solid #F4EFF4',

                        }}>
                            <h2 style={{

                                borderRight: '15px solid #6750A4',
                                borderTopRightRadius: '8px',
                                borderBottomRightRadius: '8px',
                                position: 'absolute',
                                width: '25%',
                                height: '90%',
                                top: '0%',
                                fontSize: '1.5vw',
                                paddingRight: '1.5vw',
                                paddingTop: '15px',
                                color: '#4A4458'

                            }}>اطلاعات سفارش</h2>

                        </div>


                        <h3 style={{

                            position: 'absolute',
                            top: '25%',
                            right: '4%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}>قیمت خرید </h3>

                        <input style={{

                            position: 'absolute',
                            top: '40%',
                            right: '4%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '15%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '2vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.buyPrice}/>


                        <h3 style={{

                            position: 'absolute',
                            top: '25%',
                            right: '29%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}>قیمت فروش</h3>

                        <input style={{

                            position: 'absolute',
                            top: '40%',
                            right: '29%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '15%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '2vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.salePrice}/>

                        <h3 style={{

                            position: 'absolute',
                            top: '25%',
                            right: '54%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}> وزن فروش </h3>

                        <input style={{

                            position: 'absolute',
                            top: '40%',
                            right: '54%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '15%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '2vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.saleWeight}/>


                        <h3 style={{

                            position: 'absolute',
                            top: '58%',
                            right: '4%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}>وزن میانگین مرغداری </h3>

                        <input style={{

                            position: 'absolute',
                            top: '70%',
                            right: '4%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '15%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '2vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.agricultureAvgWeight}/>


                        <h3 style={{

                            position: 'absolute',
                            top: '58%',
                            right: '29%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}>طرف حساب </h3>

                        <input style={{

                            position: 'absolute',
                            top: '70%',
                            right: '29%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '15%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '2vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl'

                        }} type='text' onChange={this.account_side}/>

                        <h3 style={{

                            position: 'absolute',
                            top: '58%',
                            right: '54%',
                            width: '20%',
                            height: '10%',
                            fontSize: '1vw',
                            color: '#484649',
                            textAlign: 'right',

                        }}> کرایه </h3>

                        <input style={{

                            position: 'absolute',
                            top: '70%',
                            right: '54%',
                            width: '15%',
                            border: '5px solid rgba(0,0,0,0.15)',
                            height: '15%',
                            padding: '20px 20px 0px 0px',
                            fontSize: '2vw',
                            color: '#484649',
                            borderRadius: '20px',
                            textAlign: 'center',
                            direction: 'rtl',

                        }} type='text' onChange={this.rent}/>


                        <button onClick={this.levelClick} style={{

                            position: 'absolute',
                            width: '15%',
                            height: '10%',
                            direction: 'rtl',
                            borderRadius: '100px',
                            backgroundColor: '#6750A4',
                            color: 'rgb(255,255,255)',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px 24px 10px 16px',
                            gap: '8px',
                            fontSize: '1vw',
                            bottom: '0%',
                            right: '4%'

                        }} name='this-is-new_order'>نهایی سازی سفارش
                        </button>


                    </div>

                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '1000px',
                        borderStyle: 'none',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px 50px 0px 0px',


                    }}>

                        <DriverInf setCar_ID={this.setCarID} driverINF_num={this.state.driverINF_num} top='30%'/>
                        <OrderHeader top='0%' popup={this.state.popup} change_popup={this.change_popup} setLwbInf={this.setLwbInf} lwbINF_num={this.state.lwbINF_num}/>

                    </div>

                    {this.rightDashboardActivate()}

                </div>


            )

        } else {

            return (

                <div style={{}}>

                    <Header title='ثبت سفارش جدید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />
                    <div style={{

                        border: '1px solid #E6E1E5',
                        position: 'absolute',
                        height: '900px',
                        borderStyle: 'solid solid solid solid',
                        width: '98%',
                        top: '200px',
                        marginTop: '1%',
                        right: '1%',
                        borderRadius: '50px',


                    }}>

                        <DriverInf setCar_ID={this.setCarID} driverINF_num={this.state.driverINF_num} top='30%'/>
                        <OrderHeader top='0%' popup={this.state.popup} change_popup={this.change_popup} setLwbInf={this.setLwbInf} lwbINF_num={this.state.lwbINF_num}/>

                        <div style={{

                            border: 'none',
                            position: 'absolute',
                            height: '40%',
                            width: '80%',
                            top: '85%',
                            marginTop: '1%',
                            right: '0%',

                        }}>

                            <button onClick={this.GetPrint} style={{

                                position: 'absolute',
                                width: '15%',
                                height: '20%',
                                direction: 'rtl',
                                borderRadius:'200px',
                                backgroundColor:'rgb(255,255,255)',
                                color:'#6750A4',
                                borderColor:'#6750A4',
                                borderWidth:'5px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 24px 10px 16px',
                                gap: '8px',
                                fontSize:'1vw',
                                top:'0%',
                                right:'5%'

                            }} name='this-is-new_order'>دریافت پرینت
                            </button>


                        </div>


                    </div>
                    {this.rightDashboardActivate()}

                </div>


            )
        }


    }
}

export default withCookies(OrderLevel)