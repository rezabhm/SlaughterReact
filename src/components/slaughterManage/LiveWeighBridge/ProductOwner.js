import React, {Component} from "react";
import {IPServer} from "../../../data";
import {createBrowserHistory} from "history";
import {withCookies} from "react-cookie";
import Select from "react-select";
import ExitIconPOPUP from "../../../Image/slaughter/exit.svg";

const history = createBrowserHistory();

class ProductOwnerSelect extends Component{
    state={

        po_list : [],
        po_label : '',
        po_id : '',
        agc_list:[],
        agc_id:'',
        order_type:'',
        slaughter_type:'',
        rent_type:'',
        agc_avg :'',
        sale_weight :'',
        popUP:'none',
        poPopUpName:'',
        poPopUpLastName:'',
        agcPopUpName:'',
        agcPopUpCity:'',
        sale_weight : '0.0'
    }

    agcInitial=(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.agcConstructor()

        }else{

            alert('مرغداری جدید اضافه نشد')
        }


    }

    add_agriculture =()=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                name: this.state.agcPopUpName,
                city: this.state.agcPopUpCity,

            })

        }

        fetch(IPServer() + '/slaughterManage/agriculture/new/api/', requestJson)
            .then(data => data.json())
            .then(data => { this.agcInitial(data)});


    }

    agc_initialHandle =(jsonResponse)=>{


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState( {

                agc_list: jsonResponse['agc_list']

            })
        }
    }

    agcConstructor =()=> {

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),

            })

        }

        fetch(IPServer() + '/slaughterManage/agriculture/list/api/', requestJson)
            .then(data => data.json())
            .then(data => { this.agc_initialHandle(data)});

    }




    poInitial=(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.poConstructor()

        }else{

            alert('صاحب محصول جدید اضافه نشد')
        }


    }

    add_productOwner =()=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                name: this.state.poPopUpName,
                last_name: this.state.poPopUpLastName,

            })

        }

        fetch(IPServer() + '/slaughterManage/productOwner/new/api/', requestJson)
            .then(data => data.json())
            .then(data => { this.poInitial(data)});



    }



    initialHandle =(jsonResponse)=>{


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState( {

                po_list: jsonResponse['po_list']

            })
        }
    }

    poConstructor =()=> {

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),

            })

        }

        fetch(IPServer() + '/slaughterManage/productOwner/list/api/', requestJson)
            .then(data => data.json())
            .then(data => { this.initialHandle(data)});

    }

    poChange =(event)=>{

        this.setState({

            po_id: event.value

        })

    }

    agcChange =(event)=>{

        this.setState({

            agc_id: event.value

        })

    }


    orderChange =(event)=>{

        this.setState({

            order_type: event.value

        })

    }

    slaughterChange =(event)=>{

        this.setState({

            slaughter_type: event.value

        })

    }

    rentChange =(event)=>{

        this.setState({

            rent_type: event.value

        })

    }

    agc_avgChange =(event)=>{

        this.setState({

            agc_avg : event.target.value

        })
    }

    sale_weightChange =(event)=>{

        this.setState({

            sale_weight : event.target.value

        })
    }
    poPOPUP =()=>{


        this.setState({

            popUP : 'po'

        })

    }

    agcPOPUP =()=>{

        this.setState({

            popUP : 'agc'

        })

    }




    closePopUp=()=>{

        this.setState({
            popUP: 'none'
        })
    }

    poNameChange=(event)=>{

        this.setState({

            poPopUpName: event.target.value

        })

    }

    poLastNameChange=(event)=>{

        this.setState({

            poPopUpLastName: event.target.value

        })

    }

    agcNameChange=(event)=>{

        this.setState({

            agcPopUpName: event.target.value
        })

    }

    agcCityChange=(event)=>{

        this.setState({

            agcPopUpCity: event.target.value

        })

    }



    popUpClick =()=>{

        if (this.state.popUP === 'po'){

            this.add_productOwner()

        } else if(this.state.popUP === 'agc'){

            this.add_agriculture()
        }
        this.closePopUp()


    }


    show_popup =()=>{

        if (this.state.popUP === 'po') {

            return (


                <div style={{

                    position: 'absolute',
                    top: '0%',
                    right: '35%',
                    borderRadius: '20px',
                    border: '5px solid #6750A4',
                    width: '20%',
                    height: '40%',
                    backgroundColor: 'rgba(255,255.0,255.0,1.0)',

                }}>

                    <div style={{

                        width: '100%',
                        height: '15%',
                        right: '0%',
                        top: '0%',
                        color: '#484649',
                        textAlign: 'right',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '28px',
                        borderBottom: ' 2px solid #E6E1E5 ',

                    }}>

                        <h1 style={{
                            paddingRight: '20px',
                            top: '3%',
                            position: 'absolute',
                            right: '10px',
                            width: '100%',
                            fontSize:'1.5vw',
                        }}>صاحب محصول جدید</h1>

                        <button onClick={this.closePopUp} style={{


                            backgroundColor: 'rgba(0,0,0,0)',
                            height: '7%',
                            width: '7%',
                            position: 'absolute',
                            left: '5%',
                            top: '5%',
                            fontSize: '24px',
                            border: 'none',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            textAlign: 'left',


                        }}><img src={ExitIconPOPUP} alt={'this is car icon'} style={{

                            right: '0px',
                            width: '100%',
                            height: '100%',

                        }}/>
                        </button>
                    </div>


                    <div style={{


                        width: '100%',
                        height: '70%',
                        right: '1%',
                        top: '20%',
                        color: '#484649',
                        textAlign: 'right',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '28px',
                        borderBottom: ' 2px solid #E6E1E5 ',


                    }}>

                        <div style={{

                            position: 'absolute',
                            top: '20%',
                            width: '100%',
                            height: '15%',
                            right: '5%',


                        }}>

                            <p>نام صاحب محصول</p>
                            <input type='text' onChange={this.poNameChange} style={{


                                height: '80%',
                                position: 'absolute',
                                borderRadius: '10px',
                                right: '0%',
                                width: '85%',
                                paddingRight: '10px',
                                fontSize: '25px',
                                textAlign: 'right',


                            }}/>

                        </div>

                        <div style={{

                            position: 'absolute',
                            top: '50%',
                            width: '100%',
                            height: '15%',
                            right: '5%',

                        }}>

                            <p>نام خانوادگی صاحب محصول</p>
                            <input type='text' onChange={this.poLastNameChange} style={{


                                height: '80%',
                                position: 'absolute',
                                borderRadius: '10px',
                                right: '0%',
                                width: '85%',
                                paddingRight: '10px',
                                fontSize: '25px',
                                textAlign: 'right',

                            }}/>

                        </div>
                    </div>

                    <div style={{

                        position: 'absolute',
                        width: '100%',
                        height: '17.5%',
                        bottom: '2.5%',
                        right: '5%',

                    }}>

                        <button onClick={this.popUpClick} style={{

                            position: 'absolute',
                            width: '90%',
                            height: '50%',
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
                            left: '10%'

                        }}>افزودن صاحب محصول جدید
                        </button>


                    </div>


                </div>


            )


        } else if(this.state.popUP ==='agc'){


            return(


                <div style={{

                    position:'absolute',
                    top:'0%',
                    right:'35%',
                    borderRadius:'20px',
                    border:'5px solid #6750A4' ,
                    width:'20%',
                    height:'40%',
                    backgroundColor:'rgba(255,255.0,255.0,1.0)',

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
                        fontSize: '1vw',
                        lineHeight: '28px',
                        borderBottom:' 2px solid #E6E1E5 ',

                    }}>

                        <h1 style={{paddingRight:'20px',top:'3%',position:'absolute',  right:'10px', width:'50%', fontSize:'1.5vw'}}>مرغداری</h1>

                        <button onClick={this.closePopUp} style={{


                            backgroundColor: 'rgba(0,0,0,0)',
                            height: '7%',
                            width: '7%',
                            position:'absolute',
                            left:'5%',
                            top: '5%',
                            fontSize:'24px',
                            border:'none',
                            fontFamily:'Roboto',
                            fontStyle: 'normal',
                            textAlign:'left',



                        }}><img src={ExitIconPOPUP} alt={'this is car icon'} style={{

                            right:'0px',
                            width:'100%',
                            height:'100%',

                        }}/>
                        </button>
                    </div>


                    <div style={{


                        width:'100%',
                        height:'70%',
                        right:'1%',
                        top:'20%',
                        color:'#484649',
                        textAlign:'right',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '28px',
                        borderBottom:' 2px solid #E6E1E5 ',


                    }}>

                        <div style={{

                            position:'absolute',
                            top:'20%',
                            width:'100%',
                            height:'15%',
                            right:'5%',


                        }}>

                            <p>نام مرغداری</p>
                            <input type='text' onChange={this.agcNameChange} style={{


                                height:'80%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'85%',
                                paddingRight:'10px',
                                fontSize:'25px',
                                textAlign:'right',


                            }}/>

                        </div>

                        <div style={{

                            position:'absolute',
                            top:'50%',
                            width:'100%',
                            height:'15%',
                            right:'5%',

                        }}>

                            <p>استان مرغداری</p>
                            <input type='text' onChange={this.agcCityChange} style={{


                                height:'80%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'85%',
                                paddingRight:'10px',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                        </div>
                    </div>

                    <div style={{

                        position:'absolute',
                        width:'100%',
                        height:'17.5%',
                        bottom:'2.5%',
                        right:'5%',

                    }}>

                        <button onClick={this.popUpClick} style={{

                            position:'absolute',
                            width:'90%',
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
                            bottom:'0%',
                            left:'10%'

                        }}   >افزودن مرغداری جدید </button>


                    </div>


                </div>



            )




        } else{

            return (<div style={{display:'none'}}></div>)
        }

    }

    constructor(props) {
        super(props);
        this.agcConstructor()
        this.poConstructor()

    }

    new_orderCreate =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            history.push('/order/list/')
            window.location.reload()

        }

    }

    new_order =()=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                car_id : this.props.car_id,
                po_id: this.state.po_id,
                agc_id:this.state.agc_id,
                order_type: this.state.order_type,
                slaughter_type:this.state.slaughter_type,
                rent_type:this.state.rent_type,
                sale_weight:this.state.sale_weight,
                avg_agc:this.state.agc_avg,

            })

        }

        fetch(IPServer() + '/slaughterManage/new_order/create/api/', requestJson)
            .then(data => data.json())
            .then(data => { this.new_orderCreate(data)});



    }

    render() {


        const order_type_list = [

            {value: 'c', label: 'شرکتی'},
            {value: 'cb', label: 'حق العملی (خرید توسط شرکت)'},
            {value: 'pob', label: 'حق العملی (خرید توسط صاحب بار)'},

        ]

        const slaughter_type_list = [

            {value: 'ss', label: 'تحویلی کشتارگاه'},
            {value: 'pd', label: 'درب مرغداری'},

        ]

        const rent_type_list = [

            {value: 'c', label: 'پرداخت توسط شرکت'},
            {value: 'po', label: 'پرداخت توسط صاحب بار'},
            {value: 'd', label: 'پرداخت توسط شرکت و دریافت از صاحب بار'},

        ]

        return (

            <div style={{

                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '5%',
                textAlign: 'right',
                right: '1%',
                direction: 'rtl'

            }}>

                <div style={{
                    position: 'absolute',
                    width: '90%',
                    height: '6%',
                    top: '0px',
                    right: '4%',
                    borderBottom: '5px solid #F4EFF4',

                }}>
                    <h2 style={{

                        borderRight: '15px solid #6750A4',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        position: 'absolute',
                        width: '25%',
                        height: '95%',
                        top: '8%',
                        fontSize: '1.5vw',
                        paddingRight: '1vw',
                        paddingTop: '15px',
                        color: '#4A4458'

                    }}> صاحب محصول</h2>

                    <button onClick={this.poPOPUP} style={{

                        position: 'absolute',
                        width: '15%',
                        height: '50%',
                        direction: 'rtl',
                        borderRadius: '200px',
                        backgroundColor: 'rgb(255,255,255)',
                        color: '#6750A4',
                        borderColor: '#6750A4',
                        borderWidth: '5px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize: '1vw',
                        top: '20%',
                        left: '1%'

                    }}>+ صاحب محصول جدید
                    </button>

                </div>

                <div style={{

                    position: 'absolute',
                    top: '7%',
                    width: '90%',
                    right: '4%',
                    height: '70%',
                    fontSize: '30px',
                    font: 'Robot',

                }}>

                    <div style={{

                        position: 'absolute',
                        direction: 'rtl',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(200,200,200, 0.0)',
                        color: '#484649',
                        width: '20%',
                        height: '10%',
                        right: '0%',
                        top: '5%',
                        fontSize: '1vw',
                        textAlign: 'center',

                    }}><h3 style={{fontSize: '1vw', textAlign: 'right'}}>صاحب محصول را انتخاب کنید </h3>
                        <Select options={this.state.po_list} placeholder='صاحب محصول ها' defaultvalue={this.state.po_id}
                                onChange={this.poChange}/>
                    </div>
                </div>

                <div style={{

                    position: 'absolute',
                    top: '25%',
                    width: '90%',
                    right: '4%',
                    height: '100%',
                    fontSize: '30px',
                    font: 'Robot',

                }}>

                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '6%',
                        top: '0px',
                        right: '0%',
                        borderBottom: '5px solid #F4EFF4',

                    }}>
                        <h2 style={{

                            borderRight: '15px solid #6750A4',
                            borderTopRightRadius: '8px',
                            borderBottomRightRadius: '8px',
                            position: 'absolute',
                            width: '100%',
                            height: '95%',
                            top: '8%',
                            fontSize: '1.5vw',
                            paddingRight: '1.5vw',
                            paddingTop: '15px',
                            color: '#4A4458'

                        }}> مرغداری</h2>

                        <button onClick={this.agcPOPUP} style={{

                            position: 'absolute',
                            width: '13%',
                            height: '50%',
                            direction: 'rtl',
                            borderRadius: '200px',
                            backgroundColor: 'rgb(255,255,255)',
                            color: '#6750A4',
                            borderColor: '#6750A4',
                            borderWidth: '5px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px 24px 10px 16px',
                            gap: '8px',
                            fontSize: '1vw',
                            top: '20%',
                            left: '1%'

                        }}>+ مرغداری جدید
                        </button>

                    </div>

                    <div style={{

                        position: 'absolute',
                        direction: 'rtl',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(200,200,200, 0.0)',
                        color: '#484649',
                        width: '20%',
                        height: '10%',
                        right: '0%',
                        top: '10%',
                        fontSize: '1vw',
                        textAlign: 'center',


                    }}><h3 style={{fontSize: '1vw', textAlign: 'right'}}>مرغداری را انتخاب کنید </h3>
                        <Select options={this.state.agc_list} placeholder='مرغداری ها' defaultvalue={this.state.agc_id}
                                onChange={this.agcChange}/>
                    </div>

                </div>


                <div style={{

                    position: 'absolute',
                    top: '50%',
                    width: '90%',
                    right: '4%',
                    height: '70%',
                    fontSize: '30px',
                    font: 'Robot',

                }}>

                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '10%',
                        top: '0px',
                        right: '0%',
                        borderBottom: '5px solid #F4EFF4',

                    }}>
                        <h2 style={{

                            borderRight: '15px solid #6750A4',
                            borderTopRightRadius: '8px',
                            borderBottomRightRadius: '8px',
                            position: 'absolute',
                            width: '100%',
                            height: '95%',
                            top: '8%',
                            fontSize: '1.5vw',
                            paddingRight: '1.5vw',
                            paddingTop: '15px',
                            color: '#4A4458'

                        }}> اطلاعات سفارش</h2>


                    </div>

                    <div style={{


                        position: 'absolute',
                        direction: 'rtl',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(200,200,200, 0.0)',
                        color: '#484649',
                        width: '20%',
                        height: '10%',
                        right: '0%',
                        top: '15%',
                        fontSize: '1vw',
                        textAlign: 'center',


                    }}><h3 style={{fontSize: '1vw',textAlign: 'right'}}>نوع سفارش</h3>
                        <Select options={order_type_list} placeholder='انواع سفارش' defaultvalue={this.state.order_type}
                                onChange={this.orderChange}/>
                    </div>

                    <div style={{


                        position: 'absolute',
                        direction: 'rtl',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(200,200,200, 0.0)',
                        color: '#484649',
                        width: '20%',
                        height: '10%',
                        right: '30%',
                        top: '15%',
                        fontSize: '1vw',
                        textAlign: 'center',


                    }}><h3 style={{fontSize: '1vw',textAlign: 'right'}}>نوع کشتار</h3>
                        <Select options={slaughter_type_list} placeholder='انواع کشتار '
                                defaultvalue={this.state.slaughter_type} onChange={this.slaughterChange}/>
                    </div>


                    <div style={{


                        position: 'absolute',
                        direction: 'rtl',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(200,200,200, 0.0)',
                        color: '#484649',
                        width: '20%',
                        height: '10%',
                        right: '60%',
                        top: '15%',
                        fontSize: '1vw',
                        textAlign: 'center',


                    }}><h3 style={{fontSize: '1vw',textAlign: 'right'}}>نوع پرداخت کرایه</h3>
                        <Select options={rent_type_list} placeholder='انواع پرداخت کرایه '
                                defaultvalue={this.state.rent_type} onChange={this.rentChange}/>
                    </div>

                    <h3 style={{

                        position: 'absolute',
                        top: '35%',
                        right: '0%',
                        width: '20%',
                        height: '10%',
                        fontSize: '1vw',
                        color: '#484649',

                    }}>وزن میانگین مرغداری</h3>

                    <input style={{

                        position: 'absolute',
                        top: '43%',
                        right: '0%',
                        width: '25%',
                        border: '5px solid rgba(0,0,0,0.15)',
                        height: '10%',
                        padding: '20px 20px 0px 0px',
                        fontSize: '1vw',
                        color: '#484649',
                        borderRadius: '20px',

                    }} type='text' onChange={this.agc_avgChange}/>




                </div>
                {this.show_popup()}

                <button onClick={this.new_order} style={{

                    position:'absolute',
                    width:'15%',
                    height:'5%',
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
                    fontSize: '1vw',
                    bottom:'6%',
                    right:'4%'

                }}   >ثبت سفارش </button>
            </div>

        )
    }
}

export default withCookies(ProductOwnerSelect);