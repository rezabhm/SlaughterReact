import React, { Component, Fragment } from "react";
import { withCookies } from "react-cookie";
import Header from "../Main/Header";
import RightDashbord from '../Main/Main'
import { IPServer } from "../../../data";
import {createBrowserHistory} from "history";
import ProductionHeader from './ProductionHeader';
import VectorIcon from '../../../Image/slaughter/Vector.svg';
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import BackVector from '../../../Image/slaughter/Vector_back.svg';
import ExitIconPOPUP from "../../../Image/slaughter/exit.svg";

const history = createBrowserHistory();


class Production extends Component{


    /*
    
    if pageState equal true it means we must show main production page with toggle swich button else we must show detail
    
    */


    state = {
    
    
        RightDashbord : false,
        pageState : true,
        pageLevel : 'Production',
        toleranceValue: '0.0',
        tolerance_popup : false,
        production_product_owner_list :[],
        production_pre_cold_list :[],
        production_pre_cold_product_information :{},
        production_freeze_tunnel_list :[],
        production_freeze_tunnel_product_information :{},
        production_return_weighting_list :[],
        production_return_weighting_product_information :{},
        production_return_sale_list :[],


        production_product_owner_id:'',
        production_product_owner_name:'',
        production_receiver_unit : '',
        production_product_list:[],
        production_product_select:'',
        production_product_box_num:0,
        production_driver_list:[],
        production_driver:'',
        production_net_wight:'0.0',
        production_bike_weight:'0.0',
        production_2_5_box_num:0,
        production_2_box_num:0,
        production_box_weight:'0.0',
        production_pallet_weight:'0.0',
        production_box_num:0,
        production_pre_cold_id:0,
        production_tunnel_id:0,
        

        preCold_product_owner_id:'',
        preCold_product_owner_name:'',
        preCold_receiver_unit : '',
        preCold_product_list:[],
        preCold_product:'',
        preCold_product_id:'',
        preCold_product_box_num:0,
        preCold_driver_list:[],
        preCold_driver:'',
        preCold_net_wight:'0.0',
        preCold_bike_weight:'0.0',
        preCold_2_5_box_num:0,
        preCold_2_box_num:0,
        preCold_box_weight:'0.0',
        preCold_pallet_weight:'0.0',
        preCold_box_num:0,
        preCold_pre_cold_id:0,
        preCold_tunnel_id:0,
        preCold_max_weight:0,
        

        tunnel_product_owner_id:'',
        tunnel_product_owner_name:'',
        tunnel_receiver_unit : '',
        tunnel_product_list:[],
        tunnel_product:'',
        tunnel_product_id:'',
        tunnel_product_box_num:0,
        tunnel_driver_list:[],
        tunnel_driver:'',
        tunnel_net_wight:'0.0',
        tunnel_bike_weight:'0.0',
        tunnel_2_5_box_num:0,
        tunnel_2_box_num:0,
        tunnel_box_weight:'0.0',
        tunnel_box_num:0,
        tunnel_preCold_id:0,
        tunnel_tunnel_id:0,
        tunnel_max_weight:0,
        tunnel_pallet_weight:'0.0',
        
        returnWeighting_product_owner_id:'',
        returnWeighting_product_owner_name:'',
        returnWeighting_receiver_unit : '',
        returnWeighting_product_list:[],
        returnWeighting_product:'',
        returnWeighting_product_id:'',
        returnWeighting_product_box_num:0,
        returnWeighting_driver_list:[],
        returnWeighting_driver:'',
        returnWeighting_net_wight:'0.0',
        returnWeighting_bike_weight:'0.0',
        returnWeighting_2_5_box_num:0,
        returnWeighting_2_box_num:0,
        returnWeighting_box_weight:'0.0',
        returnWeighting_box_num:0,
        returnWeighting_preCold_id:0,
        returnWeighting_tunnel_id:0,
        returnWeighting_max_weight:0,
        returnWeighting_pallet_weight:'0.0',
        

        returnSale_product_owner_id:'',
        returnSale_product_owner_name:'',
        returnSale_receiver_unit : '',
        returnSale_product_list:[],
        returnSale_product:'',
        returnSale_product_id:'',
        returnSale_product_box_num:0,
        returnSale_driver_list:[],
        returnSale_driver:'',
        returnSale_net_wight:'0.0',
        returnSale_bike_weight:'0.0',
        returnSale_2_5_box_num:0,
        returnSale_2_box_num:0,
        returnSale_box_weight:'0.0',
        returnSale_box_num:0,
        returnSale_preCold_id:0,
        returnSale_tunnel_id:0,
        returnSale_pallet_weight:'0.0',
        returnSale_time_year :'',
        returnSale_time_month :'',
        returnSale_time_day :'',
        returnSale_buyer_list :[],
        returnSale_buyer : '',

    }

    constructor (props){
        super(props);


        this.get_product_owner_list()
        this.get_pre_cold_list()
        this.get_freeze_tunnel_list()
        this.get_return_weighting_list()
        this.get_return_sale_list()




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

            RightDashbord : !this.state.RightDashbord,

        })
    }

    handle_production_product_list =(jsonResponse)=>{


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                production_product_list : jsonResponse['product_list']

            })
        }
    }

    handle_production_product_owner_name =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                production_product_owner_name : jsonResponse['product_owner'],
                returnSale_product_owner_name : jsonResponse['product_owner'],
                returnSale_buyer_list : jsonResponse['buyer_list'],

            })

        }
    }

    handle_production_product_owner_driver_list =(jsonResponse)=>{


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                production_driver_list : jsonResponse['driver_list'],

            })

        }



    }

    get_production_product_list =(product_id)=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                receiver_unit : product_id

            })


        } ;

        fetch(IPServer() + '/slaughterManage/production/product/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_production_product_list(data));




    }

    get_product_owner_name =(product_owner_id)=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                product_owner_id : product_owner_id

            })

        } ;

        fetch(IPServer() + '/slaughterManage/production/product/owner/name/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_production_product_owner_name(data));

    }

    get_product_owner_driver_list =(product_owner_id)=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                product_owner_id : product_owner_id

            })

        } ;

        fetch(IPServer() + '/slaughterManage/production/product/owner/driver/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_production_product_owner_driver_list(data));

    }


    production_receiver_unit =(event, value)=>{

        this.setState({

            production_receiver_unit : value.id

        })

        this.get_production_product_list(value.id)


    }

    product_type_change =(event, value)=>{


        this.setState({

            production_product_select: value.id,

        })


    }

    production_driver_change =(event, value)=>{

        this.setState({


            production_driver : value.id

        })


    }

    preCold_id =(event)=>{

        this.setState({

            production_pre_cold_id:event.target.value

        })


    }

    tunnel_id =(event)=>{

        this.setState({

            production_tunnel_id:event.target.value

        })


    }

    production_product_box_numChange =(event)=>{



        this.setState({

            production_product_box_num: event.target.value,

        })


    }

    production_box_num_change =(event)=>{



        this.setState({

            production_box_num:event.target.value,

        })
    }


    production_bike_weight_change =(event)=>{


        this.setState({

            production_bike_weight:event.target.value,

        })

    }


    production_net_weight_change =(event)=>{



        this.setState({

            production_net_wight:event.target.value,

        })

    }

    production_2_5_box_num_change =(event)=>{


        this.setState({

            production_2_5_box_num:event.target.value,

        })

    }


    production_2_box_num_change =(event)=>{


        this.setState({

            production_2_box_num:event.target.value,

        })

    }


    production_box_weight_change =(event)=>{



        this.setState({

            production_box_weight:event.target.value,

        })

    }

    handle_production_submit =(jsonResponse)=>{



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                pageState: true,
                pageLevel:'Production',
            })

            window.location.reload()

        }



    }

    submitProduction =(event)=>{


        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                product_owner_id : this.state.production_product_owner_id,
                receiver_unit: this.state.production_receiver_unit,
                pre_cold_id : this.state.production_pre_cold_id,
                tunnel_id: this.state.production_tunnel_id,
                product: this.state.production_product_select,
                product_box_num: this.state.production_product_box_num,
                driver: this.state.production_driver,
                net_weight: this.state.production_net_wight,
                bike_weight: this.state.production_bike_weight,
                box_2_5 : this.state.production_2_5_box_num,
                box_2: this.state.production_2_box_num,
                box_weight: this.state.production_box_weight,
                box_num : this.state.production_box_num,
                pallet_weight: this.state.production_pallet_weight,


            })

        } ;

        fetch(IPServer() + '/slaughterManage/production/create/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_production_submit(data));




    }



    return_preCold_tunnel_id = ()=>{



        if (this.state.production_receiver_unit === 'pre'){

            return (

                <Fragment>

                    <h1 style={{

                        position:'absolute',
                        height:'50px',
                        width:'50%',
                        top:'500px',
                        right:'50%',
                        fontSize:'1.5vw',
                        right:'50%',
                        textAlign:'right',

                    }} >آیدی پیش سرد</h1>

                    <div style={{

                        position:'absolute',
                        height:'75px',
                        width:'25%',
                        top:'575px',
                        right:'50%',
                        fontSize:'1.5vw',


                    }}>



                            <input type='number' onChange={this.preCold_id} placeholder='0' style={{

                            height:'60px',
                            textAlign:'center',
                            top:'0%',
                            right:'0%',
                            position:'absolute',


                            }} />

                    </div>
                </Fragment>

            )
        } else if(this.state.production_receiver_unit === 'ftl'){


            return (


                <Fragment>

                    <h1 style={{

                        position:'absolute',
                        height:'50px',
                        width:'50%',
                        top:'500px',
                        right:'50%',
                        fontSize:'1.5vw',
                        right:'50%',
                        textAlign:'right',

                    }} >آیدی تونل انجماد</h1>

                    <div style={{

                        position:'absolute',
                        height:'75px',
                        width:'25%',
                        top:'570px',
                        right:'50%',
                        fontSize:'1.5vw',


                    }}>



                            <input type='number' onChange={this.tunnel_id} placeholder='0' style={{

                            height:'60px',
                            textAlign:'center',
                            top:'0%',
                            right:'0%',
                            position:'absolute',


                            }} />

                    </div>
                </Fragment>

            )


        } else {

            return (<Fragment></Fragment>)

        }



    }

    //////////////////////////////////// Pre Cold Function


    preCold_receiver_unit =(event, value)=>{

        this.setState({

            preCold_receiver_unit : value.id

        })


    }


    preCold_tunnel_id =(event)=>{

        this.setState({

            preCold_tunnel_id:event.target.value

        })


    }

    preCold_product_box_numChange =(event)=>{



        this.setState({

            preCold_product_box_num: event.target.value,

        })


    }

    preCold_box_num_change =(event)=>{



        this.setState({

            preCold_box_num:event.target.value,

        })
    }


    preCold_bike_weight_change =(event)=>{


        this.setState({

            preCold_bike_weight:event.target.value,

        })

    }


    preCold_net_weight_change =(event)=>{



        this.setState({

            preCold_net_wight:event.target.value,

        })

    }

    preCold_2_5_box_num_change =(event)=>{


        this.setState({

            preCold_2_5_box_num:event.target.value,

        })

    }


    preCold_2_box_num_change =(event)=>{


        this.setState({

            preCold_2_box_num:event.target.value,

        })

    }


    preCold_box_weight_change =(event)=>{



        this.setState({

            preCold_box_weight:event.target.value,

        })

    }



    
    handle_preCold_submit =(jsonResponse)=>{



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                pageState: true,
                pageLevel:'Production',
            })

            window.location.reload()

        }



    }

    submitPreCold =(event)=>{

        const weight = parseFloat(this.state.preCold_net_wight);
        const weight_2_5 = parseFloat(this.state.preCold_2_5_box_num) * 2.5;
        const weight_2 = parseFloat(this.state.preCold_2_box_num) * 2;
        const box_weight = parseFloat(this.state.preCold_box_num) * parseFloat(this.state.preCold_box_weight);
        const bike_weight = parseFloat(this.state.preCold_bike_weight);
        const pallet_weight = parseFloat(this.state.preCold_pallet_weight);

        const net_weight = weight - weight_2_5 - weight_2 - box_weight - bike_weight - pallet_weight;

        if (net_weight <= parseFloat(this.state.preCold_max_weight)){
        
            const requestJson = {

                method:'POST',
                mod:'core',
                headers: { "Content-type":"application/json;charset=utf-8"},
                body: JSON.stringify({

                    token: this.props.cookies.get('token'),
                    product_owner_id : this.state.preCold_product_owner_id,
                    receiver_unit: this.state.preCold_receiver_unit,
                    tunnel_id: this.state.preCold_tunnel_id,
                    product: this.state.preCold_product_id,
                    product_box_num: this.state.preCold_product_box_num,
                    net_weight: this.state.preCold_net_wight,
                    bike_weight: this.state.preCold_bike_weight,
                    box_2_5 : this.state.preCold_2_5_box_num,
                    box_2: this.state.preCold_2_box_num,
                    box_weight: this.state.preCold_box_weight,
                    box_num : this.state.preCold_box_num,
                    pallet_weight: this.state.preCold_pallet_weight,


                })

            } ;

            fetch(IPServer() + '/slaughterManage/production/preCold/create/api/', requestJson)
                .then(data => data.json())
                .then(data => this.handle_preCold_submit(data));
        
        } else {


            alert('مقدار وزن وارد شده بیش از حد مجاز است !!!')

        }



    }



    preCold_return_preCold_tunnel_id = ()=>{



    if(this.state.preCold_receiver_unit === 'ftl'){


            return (


                <Fragment>

                    <h1 style={{

                        position:'absolute',
                        height:'50px',
                        width:'50%',
                        top:'500px',
                        right:'50%',
                        fontSize:'1.5vw',
                        right:'50%',
                        textAlign:'right',

                    }} >آیدی تونل انجماد</h1>

                    <div style={{

                        position:'absolute',
                        height:'75px',
                        width:'25%',
                        top:'570px',
                        right:'50%',
                        fontSize:'1.5vw',


                    }}>



                            <input type='number' onChange={this.preCold_tunnel_id} placeholder='0' style={{

                            height:'60px',
                            textAlign:'center',
                            top:'0%',
                            right:'0%',
                            position:'absolute',


                            }} />

                    </div>
                </Fragment>

            )


        } else {

            return (<Fragment></Fragment>)

        }



    }

    //////////////////////////////////// Freeze Tunnel Function


    tunnel_receiver_unit =(event, value)=>{

        this.setState({

            tunnel_receiver_unit : value.id

        })


    }


    tunnel_preCold_id =(event)=>{

        this.setState({

            tunnel_preCold_id:event.target.value

        })


    }

    tunnel_product_box_numChange =(event)=>{



        this.setState({

            tunnel_product_box_num: event.target.value,

        })


    }

    tunnel_box_num_change =(event)=>{



        this.setState({

            tunnel_box_num:event.target.value,

        })
    }


    tunnel_bike_weight_change =(event)=>{


        this.setState({

            tunnel_bike_weight:event.target.value,

        })

    }


    tunnel_net_weight_change =(event)=>{



        this.setState({

            tunnel_net_wight:event.target.value,

        })

    }

    tunnel_2_5_box_num_change =(event)=>{


        this.setState({

            tunnel_2_5_box_num:event.target.value,

        })

    }


    tunnel_2_box_num_change =(event)=>{


        this.setState({

            tunnel_2_box_num:event.target.value,

        })

    }


    tunnel_box_weight_change =(event)=>{



        this.setState({

            tunnel_box_weight:event.target.value,

        })

    }

    tunnel_pallet_weight_change =(event)=>{

        this.setState({

            tunnel_pallet_weight:event.target.value,

        })


    }



    
    handle_tunnel_submit =(jsonResponse)=>{



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                pageState: true,
                pageLevel:'Production',
            })

            window.location.reload()

        }



    }

    submitTunnel =(event)=>{

        const weight = parseFloat(this.state.tunnel_net_wight);
        const weight_2_5 = parseFloat(this.state.tunnel_2_5_box_num) * 2.5;
        const weight_2 = parseFloat(this.state.tunnel_2_box_num) * 2;
        const box_weight = parseFloat(this.state.tunnel_box_num) * parseFloat(this.state.tunnel_box_weight);
        const bike_weight = parseFloat(this.state.tunnel_bike_weight);
        const pallet_weight = parseFloat(this.state.tunnel_pallet_weight);

        const net_weight = weight - weight_2_5 - weight_2 - box_weight - bike_weight - pallet_weight;

        if (net_weight <= parseFloat(this.state.tunnel_max_weight)){
            

            const requestJson = {

                method:'POST',
                mod:'core',
                headers: { "Content-type":"application/json;charset=utf-8"},
                body: JSON.stringify({

                    token: this.props.cookies.get('token'),
                    product_owner_id : this.state.tunnel_product_owner_id,
                    receiver_unit: this.state.tunnel_receiver_unit,
                    pre_cold_id: this.state.tunnel_preCold_id,
                    product: this.state.tunnel_product_id,
                    product_box_num: this.state.tunnel_product_box_num,
                    net_weight: this.state.tunnel_net_wight,
                    bike_weight: this.state.tunnel_bike_weight,
                    box_2_5 : this.state.tunnel_2_5_box_num,
                    box_2: this.state.tunnel_2_box_num,
                    box_weight: this.state.tunnel_box_weight,
                    box_num : this.state.tunnel_box_num,
                    pallet_weight: this.state.tunnel_pallet_weight,


                })

            } ;

            fetch(IPServer() + '/slaughterManage/production/FreezeTunnel/create/api/', requestJson)
                .then(data => data.json())
                .then(data => this.handle_preCold_submit(data));
        } else {

            alert('مقدار وزن وارد شده بیش از حد مجاز است !!!')

        }



    }



    tunnel_return_preCold_tunnel_id = ()=>{


        if (this.state.production_receiver_unit === 'pre'){

            return (

                <Fragment>

                    <h1 style={{

                        position:'absolute',
                        height:'50px',
                        width:'50%',
                        top:'500px',
                        right:'50%',
                        fontSize:'1.5vw',
                        right:'50%',
                        textAlign:'right',

                    }} >آیدی پیش سرد</h1>

                    <div style={{

                        position:'absolute',
                        height:'75px',
                        width:'25%',
                        top:'575px',
                        right:'50%',
                        fontSize:'1.5vw',


                    }}>


                            <input type='number' onChange={this.tunnel_preCold_id} placeholder='0' style={{

                            height:'60px',
                            textAlign:'center',
                            top:'0%',
                            right:'0%',
                            position:'absolute',


                            }} />

                    </div>
                </Fragment>

            )
        } else {

            return (<Fragment></Fragment>)

        }



    }


    //////////////////////////////////// return Weighting Function


    returnWeighting_receiver_unit =(event, value)=>{

        this.setState({

            returnWeighting_receiver_unit : value.id

        })


    }


    returnWeighting_preCold_id =(event)=>{

        this.setState({

            returnWeighting_preCold_id:event.target.value

        })


    }

    returnWeighting_tunnel_id =(event)=>{

        this.setState({

            returnWeighting_tunnel_id:event.target.value

        })


    }

    returnWeighting_product_box_numChange =(event)=>{



        this.setState({

            returnWeighting_product_box_num: event.target.value,

        })


    }

    returnWeighting_box_num_change =(event)=>{



        this.setState({

            returnWeighting_box_num:event.target.value,

        })
    }


    returnWeighting_bike_weight_change =(event)=>{


        this.setState({

            returnWeighting_bike_weight:event.target.value,

        })

    }


    returnWeighting_net_weight_change =(event)=>{



        this.setState({

            returnWeighting_net_wight:event.target.value,

        })

    }

    returnWeighting_2_5_box_num_change =(event)=>{


        this.setState({

            returnWeighting_2_5_box_num:event.target.value,

        })

    }


    returnWeighting_2_box_num_change =(event)=>{


        this.setState({

            returnWeighting_2_box_num:event.target.value,

        })

    }


    returnWeighting_box_weight_change =(event)=>{



        this.setState({

            returnWeighting_box_weight:event.target.value,

        })

    }



    
    handle_returnWeighting_submit =(jsonResponse)=>{



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                pageState: true,
                pageLevel:'Production',
            })

            window.location.reload()

        }



    }

    submitReturnWeighting =(event)=>{


        const weight = parseFloat(this.state.returnWeighting_net_wight);
        const weight_2_5 = parseFloat(this.state.returnWeighting_2_5_box_num) * 2.5;
        const weight_2 = parseFloat(this.state.returnWeighting_2_box_num) * 2;
        const box_weight = parseFloat(this.state.returnWeighting_box_num) * parseFloat(this.state.returnWeighting_box_weight);
        const bike_weight = parseFloat(this.state.returnWeighting_bike_weight);
        const pallet_weight = parseFloat(this.state.returnWeighting_pallet_weight);

        const net_weight = weight - weight_2_5 - weight_2 - box_weight - bike_weight - pallet_weight;

        if (net_weight <= parseFloat(this.state.returnWeighting_max_weight)){
                
            const requestJson = {

                method:'POST',
                mod:'core',
                headers: { "Content-type":"application/json;charset=utf-8"},
                body: JSON.stringify({

                    token: this.props.cookies.get('token'),
                    product_owner_id : this.state.returnWeighting_product_owner_id,
                    receiver_unit: this.state.returnWeighting_receiver_unit,
                    tunnel_id: this.state.returnWeighting_tunnel_id,
                    pre_cold_id: this.state.returnWeighting_preCold_id,
                    product: this.state.returnWeighting_product_id,
                    product_box_num: this.state.returnWeighting_product_box_num,
                    net_weight: this.state.returnWeighting_net_wight,
                    bike_weight: this.state.returnWeighting_bike_weight,
                    box_2_5 : this.state.returnWeighting_2_5_box_num,
                    box_2: this.state.returnWeighting_2_box_num,
                    box_weight: this.state.returnWeighting_box_weight,
                    box_num : this.state.returnWeighting_box_num,
                    pallet_weight: this.state.returnWeighting_pallet_weight,


                })

            } ;

            fetch(IPServer() + '/slaughterManage/production/returnWeighting/create/api/', requestJson)
                .then(data => data.json())
                .then(data => this.handle_returnWeighting_submit(data));
        } else {


            alert('مقدار وزن وارد شده بیش از حد مجاز است !!!')

        }
    }


    returnWeighting_return_preCold_tunnel_id = ()=>{




        if (this.state.returnWeighting_receiver_unit === 'pre'){

            return (

                <Fragment>

                    <h1 style={{

                        position:'absolute',
                        height:'50px',
                        width:'50%',
                        top:'500px',
                        right:'50%',
                        fontSize:'1.5vw',
                        right:'50%',
                        textAlign:'right',

                    }} >آیدی پیش سرد</h1>

                    <div style={{

                        position:'absolute',
                        height:'75px',
                        width:'25%',
                        top:'575px',
                        right:'50%',
                        fontSize:'1.5vw',


                    }}>



                            <input type='number' onChange={this.returnWeighting_preCold_id} placeholder='0' style={{

                            height:'60px',
                            textAlign:'center',
                            top:'0%',
                            right:'0%',
                            position:'absolute',


                            }} />

                    </div>
                </Fragment>

            )
        } else if(this.state.returnWeighting_receiver_unit === 'ftl'){


            return (


                <Fragment>

                    <h1 style={{

                        position:'absolute',
                        height:'50px',
                        width:'50%',
                        top:'500px',
                        right:'50%',
                        fontSize:'1.5vw',
                        right:'50%',
                        textAlign:'right',

                    }} >آیدی تونل انجماد</h1>

                    <div style={{

                        position:'absolute',
                        height:'75px',
                        width:'25%',
                        top:'570px',
                        right:'50%',
                        fontSize:'1.5vw',


                    }}>



                            <input type='number' onChange={this.returnWeighting_tunnel_id} placeholder='0' style={{

                            height:'60px',
                            textAlign:'center',
                            top:'0%',
                            right:'0%',
                            position:'absolute',


                            }} />

                    </div>
                </Fragment>

            )


        } else {

            return (<Fragment></Fragment>)

        }



    }


    //////////////////////////////////// Return Sale Function
    
    handle_returnSale_product_list =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                returnSale_product_list : jsonResponse['product_list']

            })


        }


    };

    get_product_returnSale_list =(data)=>{



        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                receiver_unit: data,


            })

        };

        fetch(IPServer() + '/slaughterManage/production/product/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_returnSale_product_list(data));


    }

    returnSale_buyer_change =(event, value)=>{

        this.setState({

            returnSale_buyer : value.id

        })


    }

    returnSale_receiver_unit =(event, value)=>{

        this.setState({

            returnSale_receiver_unit : value.id

        });

        this.get_product_returnSale_list(value.id);
    }

    returnSale_product_change =(event, value)=>{

        this.setState({

            returnSale_product: value.id

        })


    }

    returnSale_pre_cold_id =(event)=>{

        this.setState({

            returnSale_pre_Cold_id:event.target.value

        })


    }



    returnSale_tunnel_id =(event)=>{

        this.setState({

            returnSale_tunnel_id:event.target.value

        })


    }

    returnSale_product_box_numChange =(event)=>{



        this.setState({

            returnSale_product_box_num: event.target.value,

        })


    }

    returnSale_time_year_Change =(event)=>{



        this.setState({

            returnSale_time_year: event.target.value,

        })


    }

    returnSale_time_month_Change =(event)=>{



        this.setState({

            returnSale_time_month: event.target.value,

        })


    }

    returnSale_time_day_Change =(event)=>{



        this.setState({

            returnSale_time_day: event.target.value,

        })


    }


    returnSale_box_num_change =(event)=>{



        this.setState({

            returnSale_box_num:event.target.value,

        })
    }


    returnSale_bike_weight_change =(event)=>{


        this.setState({

            returnSale_bike_weight:event.target.value,

        })

    }


    returnSale_net_weight_change =(event)=>{



        this.setState({

            returnSale_net_wight:event.target.value,

        })

    }

    returnSale_2_5_box_num_change =(event)=>{


        this.setState({

            returnSale_2_5_box_num:event.target.value,

        })

    }


    returnSale_2_box_num_change =(event)=>{


        this.setState({

            returnSale_2_box_num:event.target.value,

        })

    }


    returnSale_box_weight_change =(event)=>{



        this.setState({

            returnSale_box_weight:event.target.value,

        })

    }



    
    handle_returnSale_submit =(jsonResponse)=>{



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                pageState: true,
                pageLevel:'Production',
            })

            window.location.reload()

        }



    }

    submitReturnSale =(event)=>{


        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                product_owner_id : this.state.returnSale_product_owner_id,
                receiver_unit: this.state.returnSale_receiver_unit,
                tunnel_id: this.state.returnSale_tunnel_id,
                pre_cold_id: this.state.returnSale_preCold_id,
                product: this.state.returnSale_product,
                product_box_num: this.state.returnSale_product_box_num,
                net_weight: this.state.returnSale_net_wight,
                bike_weight: this.state.returnSale_bike_weight,
                box_2_5 : this.state.returnSale_2_5_box_num,
                box_2: this.state.returnSale_2_box_num,
                box_weight: this.state.returnSale_box_weight,
                box_num : this.state.returnSale_box_num,
                buyer: this.state.returnSale_buyer,
                time_day: this.state.returnSale_time_day,
                time_month: this.state.returnSale_time_month,
                time_year: this.state.returnSale_time_year,
                pallet_weight: this.state.returnSale_pallet_weight,

            })

        } ;

        fetch(IPServer() + '/slaughterManage/production/returnSale/create/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_returnSale_submit(data));




    }



    returnSale_return_preCold_tunnel_id = ()=>{

        if (this.state.returnSale_receiver_unit === 'pre'){

            return (

                <Fragment>

                    <h1 style={{

                        position:'absolute',
                        height:'50px',
                        width:'50%',
                        top:'500px',
                        right:'50%',
                        fontSize:'1.5vw',
                        right:'50%',
                        textAlign:'right',

                    }} >آیدی پیش سرد</h1>

                    <div style={{

                        position:'absolute',
                        height:'75px',
                        width:'25%',
                        top:'575px',
                        right:'50%',
                        fontSize:'1.5vw',


                    }}>



                            <input type='number' onChange={this.returnSale_pre_cold_id} placeholder='0' style={{

                            height:'60px',
                            textAlign:'center',
                            top:'0%',
                            right:'0%',
                            position:'absolute',


                            }} />

                    </div>
                </Fragment>

            )
        } else if(this.state.returnSale_receiver_unit === 'ftl'){


            return (


                <Fragment>

                    <h1 style={{

                        position:'absolute',
                        height:'50px',
                        width:'50%',
                        top:'500px',
                        right:'50%',
                        fontSize:'1.5vw',
                        right:'50%',
                        textAlign:'right',

                    }} >آیدی تونل انجماد</h1>

                    <div style={{

                        position:'absolute',
                        height:'75px',
                        width:'25%',
                        top:'570px',
                        right:'50%',
                        fontSize:'1.5vw',


                    }}>



                            <input type='number' onChange={this.returnSale_tunnel_id} placeholder='0' style={{

                            height:'60px',
                            textAlign:'center',
                            top:'0%',
                            right:'0%',
                            position:'absolute',


                            }} />

                    </div>
                </Fragment>

            )


        } else {

            return (<Fragment></Fragment>)

        }




    }



    //////////////////////// add pallet weight function

    pallet_weight_change=(event)=>{

        this.setState({

            production_pallet_weight: event.target.value,
            preCold_pallet_weight:event.target.value,
            returnWeighting_pallet_weight: event.target.value,
            returnSale_pallet_weight: event.target.value,
            tunnel_pallet_weight: event.target.value,

        })

    }


    add_pallet_weight =(dataType)=>{


        if (dataType === 'ftl'){

            return(

                

                <div style={{

                    position:'absolute',
                    height:'125px',
                    width:'15%',
                    top:'1300px',
                    right:'80%',
                    fontSize:'1.5vw',

                    }}>
                        <h1 style={{

                        position:'absolute',
                        height:'50px',
                        width:'100%',
                        top:'0px',
                        right:'0px',
                        fontSize:'1.5vw',
                        right:'0%',
                        textAlign:'right',

                        }} >وزن پالت</h1>


                        <input type='text' onChange={this.pallet_weight_change} placeholder='0.0' style={{

                            height:'60px',
                            textAlign:'center',
                            top:'50%',
                            right:'0%',
                            width:'100%',
                            position:'absolute',


                        }} />

                </div>


            )


        }

    }




    production_level =()=>{

        if (this.state.pageLevel === 'ProductionDetail'){
            
            const receiver_unit = [

                { id:'sal', name:'فروش'},
                { id:'seg', name:'قطعه بندی'},
                { id:'pre', name:'پیش سرد'},
                { id:'ftl', name:'تونل انجماد'},
                { id:'tsh', name:'ضایعات'},

            ];


            return (

                <Fragment >

                    <div style={{

                        position:'absolute',
                        height:'100px',
                        width:'95%',
                        right:'2.5%',
                        textAlign:'right',
                        borderStyle:'none none solid none',
                        borderBottom:'3px solid #F4EFF4',
                        top:'0px',

                    }}>

                        <h1 style={{

                            fontSize:'2vw',
                            borderRight:'15px solid #6750A4',
                            paddingRight:'20px',
                            borderRadius:'10px',
                            height:'90%',
                            paddingTop:'20px',
                            color:'#332D41',

                        }}>اطلاعات صاحب محصول</h1>

                    </div>

                        <h1 style={{

                            position:'absolute',
                            height:'50px',
                            width:'50%',
                            top:'150px',
                            right:'0px',
                            fontSize:'1.5vw',
                            right:'2.5%',
                            textAlign:'right',

                        }} >نام و نام خانوادگی صاحب محصول</h1>

                        <div style={{

                            position:'absolute',
                            height:'75px',
                            width:'25%',
                            top:'225px',
                            right:'2.5%',
                            fontSize:'1.5vw',
                            border:'2px solid #F4EFF4',
                            direction:'rtl',
                            textAlign:'center',


                        }}>

                                {this.state.production_product_owner_name}

                        </div>



                            <div style={{

                                position:'absolute',
                                height:'100px',
                                width:'95%',
                                right:'2.5%',
                                textAlign:'right',
                                borderStyle:'none none solid none',
                                borderBottom:'3px solid #F4EFF4',
                                top:'350px'

                                }}>

                                <h1 style={{

                                    fontSize:'2vw',
                                    borderRight:'15px solid #6750A4',
                                    paddingRight:'20px',
                                    borderRadius:'10px',
                                    height:'90%',
                                    paddingTop:'20px',
                                    color:'#332D41',

                                }}>واحد تحویل گیرنده</h1>

                                </div>

                                <h1 style={{

                                    position:'absolute',
                                    height:'50px',
                                    width:'50%',
                                    top:'500px',
                                    right:'0px',
                                    fontSize:'1.5vw',
                                    right:'2.5%',
                                    textAlign:'right',

                                }} >واحد تحویل گیرنده</h1>

                                <div style={{

                                    position:'absolute',
                                    height:'75px',
                                    width:'25%',
                                    top:'575px',
                                    right:'2.5%',
                                    fontSize:'1.5vw',


                                }}>

                                    <Autocomplete

                                    id='لیست واحد های تحویل گیرنده'
                                    options={receiver_unit}
                                    onChange={this.production_receiver_unit}
                                    size={'medium'}

                                    style={{

                                        width:'100%',
                                        height:'100%',
                                        fontSize:'3vw',
                                        direction:'rtl',

                                    }}

                                    sx={{width:600}}

                                    renderInput={ param=>(

                                        <TextField {...param} label='لیست واحد های تحویل گیرنده' variant="outlined" fullWidth style={{direction:'rtl',fontSize:'2vw'}} />

                                    )}

                                    getOptionLabel={option => option.name}

                                    />

                                </div>

                                {this.return_preCold_tunnel_id()}



                                <div style={{

                                    position:'absolute',
                                    height:'100px',
                                    width:'95%',
                                    right:'2.5%',
                                    textAlign:'right',
                                    borderStyle:'none none solid none',
                                    borderBottom:'3px solid #F4EFF4',
                                    top:'700px'

                                    }}>

                                    <h1 style={{

                                        fontSize:'2vw',
                                        borderRight:'15px solid #6750A4',
                                        paddingRight:'20px',
                                        borderRadius:'10px',
                                        height:'90%',
                                        paddingTop:'20px',
                                        color:'#332D41',

                                    }}>اطلاعات محصول</h1>

                                    </div>

                                    <h1 style={{

                                        position:'absolute',
                                        height:'50px',
                                        width:'50%',
                                        top:'850px',
                                        right:'0px',
                                        fontSize:'1.5vw',
                                        right:'2.5%',
                                        textAlign:'right',

                                    }} >نوع محصول</h1>

                                    <div style={{

                                        position:'absolute',
                                        height:'75px',
                                        width:'25%',
                                        top:'925px',
                                        right:'2.5%',
                                        fontSize:'1.5vw',

                                    }}>

                                        <Autocomplete

                                        id='نوع محصول'
                                        options={this.state.production_product_list}
                                        onChange={this.product_type_change}
                                        size={'medium'}

                                        style={{

                                            width:'100%',
                                            height:'100%',
                                            fontSize:'3vw',
                                            direction:'rtl',
                                            textAlign:'right',

                                        }}

                                        sx={{width:600}}

                                        renderInput={ param=>(

                                            <TextField {...param} label='نوع محصول' variant="outlined" fullWidth style={{direction:'rtl',fontSize:'2vw', textAlign:'right'}} />

                                        )}

                                        getOptionLabel={option => option.name}

                                        />

                                    </div>

                                    <div style={{

                                        position:'absolute',
                                        height:'125px',
                                        width:'25%',
                                        top:'850px',
                                        right:'50%',
                                        fontSize:'1.5vw',

                                        }}>
                                            <h1 style={{

                                            position:'absolute',
                                            height:'50px',
                                            width:'100%',
                                            top:'0px',
                                            right:'0px',
                                            fontSize:'1.5vw',
                                            right:'0%',
                                            textAlign:'right',

                                            }} >تعداد بسته بندی</h1>


                                            <input type='number' onChange={this.production_product_box_numChange} placeholder='0' style={{

                                                height:'60px',
                                                textAlign:'center',
                                                top:'50%',
                                                right:'0%',
                                                position:'absolute',


                                            }} />

                                    </div>

                                    <div style={{

                                        position:'absolute',
                                        height:'75px',
                                        width:'25%',
                                        top:'1025px',
                                        right:'2.5%',
                                        fontSize:'1.5vw',

                                        }}>

                                        <Autocomplete

                                        id='لیست راننده زنده'
                                        options={this.state.production_driver_list}
                                        onChange={this.production_driver_change}
                                        size={'medium'}

                                        style={{

                                            width:'100%',
                                            height:'100%',
                                            fontSize:'3vw',
                                            direction:'rtl',

                                        }}

                                        sx={{width:600}}

                                        renderInput={ param=>(

                                            <TextField {...param} label='لیست راننده زنده' variant="outlined" fullWidth style={{direction:'rtl',fontSize:'2vw'}} />

                                        )}

                                        getOptionLabel={option => option.name}

                                        />

                                        </div>




                                        <div style={{

                                            position:'absolute',
                                            height:'100px',
                                            width:'95%',
                                            right:'2.5%',
                                            textAlign:'right',
                                            borderStyle:'none none solid none',
                                            borderBottom:'3px solid #F4EFF4',
                                            top:'1150px'

                                            }}>

                                            <h1 style={{

                                                fontSize:'2vw',
                                                borderRight:'15px solid #6750A4',
                                                paddingRight:'20px',
                                                borderRadius:'10px',
                                                height:'90%',
                                                paddingTop:'20px',
                                                color:'#332D41',

                                            }}>اطلاعات وزن کشی</h1>

                                            </div>


                                            <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1300px',
                                                right:'50%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >وزن چرخ</h1>


                                                    <input type='text' onChange={this.production_bike_weight_change} placeholder='0.0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                            </div>

                                            {this.add_pallet_weight(this.state.production_receiver_unit)}


                                            <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1300px',
                                                right:'2.5%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >وزن کلی</h1>


                                                    <input type='text' onChange={this.production_net_weight_change} placeholder='0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                                </div>



                                                <div style={{

                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1450px',
                                                    right:'2.5%',
                                                    fontSize:'1.5vw',

                                                    }}>
                                                        <h1 style={{

                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',

                                                        }} > تعداد جعبه 2.5 کیلیویی</h1>


                                                        <input type='number' onChange={this.production_2_5_box_num_change} placeholder='0' style={{

                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',


                                                        }} />

                                                    </div>






                                                    <div style={{

                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1450px',
                                                    right:'50%',
                                                    fontSize:'1.5vw',

                                                    }}>
                                                        <h1 style={{

                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',

                                                        }} >تعداد جعبه 2 کیلویی</h1>


                                                        <input type='number' onChange={this.production_2_box_num_change} placeholder='0' style={{

                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',


                                                        }} />

                                                    </div>

                                    <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1600px',
                                                right:'50%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >تعداد جعبه با وزن دلخواه</h1>


                                                    <input type='number' onChange={this.production_box_num_change} placeholder='0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                    </div>





                        <div style={{

                            position:'absolute',
                            height:'125px',
                            width:'25%',
                            top:'1600px',
                            right:'2.5%',
                            fontSize:'1.5vw',

                            }}>
                                <h1 style={{

                                position:'absolute',
                                height:'50px',
                                width:'100%',
                                top:'0px',
                                right:'0px',
                                fontSize:'1.5vw',
                                right:'0%',
                                textAlign:'right',

                                }} >وزن جعبه دلخواه</h1>


                                <input type='text' onChange={this.production_box_weight_change} placeholder='0.0' style={{

                                    height:'60px',
                                    textAlign:'center',
                                    top:'50%',
                                    right:'0%',
                                    position:'absolute',


                                }} />

                            </div>







                            <div style={{

                                position:'absolute',
                                height:'75px',
                                width:'25%',
                                top:'1800px',
                                right:'2.5%',
                                fontSize:'1.5vw',

                                }}>

                                    <button onClick={this.submitProduction} style={{


                                        width:'100%',
                                        height:'100%',
                                        backgroundColor:'#6750A4',
                                        borderRadius:'50px',
                                        color:'#FFFFFF',


                                    }}>ثبت اطلاعات</button>

                                </div>

                </Fragment>

            )

        } else if (this.state.pageLevel === 'PreColdDetail'){

            const receiver_unit = [

                { id:'sal', name:'فروش'},
                { id:'seg', name:'قطعه بندی'},
                { id:'ftl', name:'تونل انجماد'},
                { id:'tsh', name:'ضایعات'},
                { id:'prd', name:'برگشتی'},

            ];

            return(


                <Fragment >

                    <div style={{

                        position:'absolute',
                        height:'100px',
                        width:'95%',
                        right:'2.5%',
                        textAlign:'right',
                        borderStyle:'none none solid none',
                        borderBottom:'3px solid #F4EFF4',
                        top:'0px',

                    }}>

                        <h1 style={{

                            fontSize:'2vw',
                            borderRight:'15px solid #EED602',
                            paddingRight:'20px',
                            borderRadius:'10px',
                            height:'90%',
                            paddingTop:'20px',
                            color:'#332D41',

                        }}>اطلاعات صاحب محصول</h1>

                    </div>

                        <h1 style={{

                            position:'absolute',
                            height:'50px',
                            width:'50%',
                            top:'150px',
                            right:'0px',
                            fontSize:'1.5vw',
                            right:'2.5%',
                            textAlign:'right',

                        }} >نام و نام خانوادگی صاحب محصول</h1>

                        <div style={{

                            position:'absolute',
                            height:'75px',
                            width:'25%',
                            top:'225px',
                            right:'2.5%',
                            fontSize:'1.5vw',
                            border:'2px solid #F4EFF4',
                            direction:'rtl',
                            textAlign:'center',


                        }}>

                                {this.state.preCold_product_owner_name}

                        </div>



                            <div style={{

                                position:'absolute',
                                height:'100px',
                                width:'95%',
                                right:'2.5%',
                                textAlign:'right',
                                borderStyle:'none none solid none',
                                borderBottom:'3px solid #F4EFF4',
                                top:'350px'

                                }}>

                                <h1 style={{

                                    fontSize:'2vw',
                                    borderRight:'15px solid #EED602',
                                    paddingRight:'20px',
                                    borderRadius:'10px',
                                    height:'90%',
                                    paddingTop:'20px',
                                    color:'#332D41',

                                }}>واحد تحویل گیرنده</h1>

                                </div>

                                <h1 style={{

                                    position:'absolute',
                                    height:'50px',
                                    width:'50%',
                                    top:'500px',
                                    right:'0px',
                                    fontSize:'1.5vw',
                                    right:'2.5%',
                                    textAlign:'right',

                                }} >واحد تحویل گیرنده</h1>

                                <div style={{

                                    position:'absolute',
                                    height:'75px',
                                    width:'25%',
                                    top:'575px',
                                    right:'2.5%',
                                    fontSize:'1.5vw',


                                }}>

                                    <Autocomplete

                                    id='لیست واحد های تحویل گیرنده'
                                    options={receiver_unit}
                                    onChange={this.preCold_receiver_unit}
                                    size={'medium'}

                                    style={{

                                        width:'100%',
                                        height:'100%',
                                        fontSize:'3vw',
                                        direction:'rtl',

                                    }}

                                    sx={{width:600}}

                                    renderInput={ param=>(

                                        <TextField {...param} label='لیست واحد های تحویل گیرنده' variant="outlined" fullWidth style={{direction:'rtl',fontSize:'2vw'}} />

                                    )}

                                    getOptionLabel={option => option.name}

                                    />

                                </div>

                                {this.preCold_return_preCold_tunnel_id()}



                                <div style={{

                                    position:'absolute',
                                    height:'100px',
                                    width:'95%',
                                    right:'2.5%',
                                    textAlign:'right',
                                    borderStyle:'none none solid none',
                                    borderBottom:'3px solid #F4EFF4',
                                    top:'700px'

                                    }}>

                                    <h1 style={{

                                        fontSize:'2vw',
                                        borderRight:'15px solid #EED602',
                                        paddingRight:'20px',
                                        borderRadius:'10px',
                                        height:'90%',
                                        paddingTop:'20px',
                                        color:'#332D41',

                                    }}>اطلاعات محصول</h1>

                                    </div>

                                    <h1 style={{

                                        position:'absolute',
                                        height:'50px',
                                        width:'50%',
                                        top:'850px',
                                        right:'0px',
                                        fontSize:'1.5vw',
                                        right:'2.5%',
                                        textAlign:'right',

                                    }} >نوع محصول</h1>

                                    <div style={{

                                        position:'absolute',
                                        height:'75px',
                                        width:'25%',
                                        top:'925px',
                                        right:'2.5%',
                                        fontSize:'1.5vw',
                                        border:'2px solid #F4EFF4',
                                        textAlign:'center',
                                        direction:'rtl',

                                    }}>

                                        {this.state.preCold_product}

                                    </div>

                                    <div style={{

                                        position:'absolute',
                                        height:'125px',
                                        width:'25%',
                                        top:'850px',
                                        right:'50%',
                                        fontSize:'1.5vw',

                                        }}>
                                            <h1 style={{

                                            position:'absolute',
                                            height:'50px',
                                            width:'100%',
                                            top:'0px',
                                            right:'0px',
                                            fontSize:'1.5vw',
                                            right:'0%',
                                            textAlign:'right',

                                            }} >تعداد بسته بندی</h1>


                                            <input type='number' onChange={this.preCold_product_box_numChange} placeholder='0' style={{

                                                height:'60px',
                                                textAlign:'center',
                                                top:'50%',
                                                right:'0%',
                                                position:'absolute',


                                            }} />

                                    </div>

                                        <div style={{

                                            position:'absolute',
                                            height:'100px',
                                            width:'95%',
                                            right:'2.5%',
                                            textAlign:'right',
                                            borderStyle:'none none solid none',
                                            borderBottom:'3px solid #F4EFF4',
                                            top:'1150px'

                                            }}>

                                            <h1 style={{

                                                fontSize:'2vw',
                                                borderRight:'15px solid #EED602',
                                                paddingRight:'20px',
                                                borderRadius:'10px',
                                                height:'90%',
                                                paddingTop:'20px',
                                                color:'#332D41',

                                            }}>اطلاعات وزن کشی</h1>

                                            </div>


                                            <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1300px',
                                                right:'50%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >وزن چرخ</h1>


                                                    <input type='text' onChange={this.preCold_bike_weight_change} placeholder='0.0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                            </div>
                                            {this.add_pallet_weight(this.state.preCold_receiver_unit)}


                                            <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1300px',
                                                right:'2.5%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >وزن کلی</h1>


                                                    <input type='text' onChange={this.preCold_net_weight_change} placeholder='0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                                </div>



                                                <div style={{

                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1450px',
                                                    right:'2.5%',
                                                    fontSize:'1.5vw',

                                                    }}>
                                                        <h1 style={{

                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',

                                                        }} > تعداد جعبه 2.5 کیلیویی</h1>


                                                        <input type='number' onChange={this.preCold_2_5_box_num_change} placeholder='0' style={{

                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',


                                                        }} />

                                                    </div>


                                                    <div style={{

                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1450px',
                                                    right:'50%',
                                                    fontSize:'1.5vw',

                                                    }}>
                                                        <h1 style={{

                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',

                                                        }} >تعداد جعبه 2 کیلویی</h1>


                                                        <input type='number' onChange={this.preCold_2_box_num_change} placeholder='0' style={{

                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',


                                                        }} />

                                                    </div>






                                    <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1600px',
                                                right:'50%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >تعداد جعبه با وزن دلخواه</h1>


                                                    <input type='number' onChange={this.preCold_box_num_change} placeholder='0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                    </div>





                        <div style={{

                            position:'absolute',
                            height:'125px',
                            width:'25%',
                            top:'1600px',
                            right:'2.5%',
                            fontSize:'1.5vw',

                            }}>
                                <h1 style={{

                                position:'absolute',
                                height:'50px',
                                width:'100%',
                                top:'0px',
                                right:'0px',
                                fontSize:'1.5vw',
                                right:'0%',
                                textAlign:'right',

                                }} >وزن جعبه دلخواه</h1>


                                <input type='text' onChange={this.preCold_box_weight_change} placeholder='0.0' style={{

                                    height:'60px',
                                    textAlign:'center',
                                    top:'50%',
                                    right:'0%',
                                    position:'absolute',


                                }} />

                            </div>

                            <div style={{

                                position:'absolute',
                                height:'75px',
                                width:'25%',
                                top:'1800px',
                                right:'2.5%',
                                fontSize:'1.5vw',

                                }}>

                                    <button onClick={this.submitPreCold} style={{


                                        width:'100%',
                                        height:'100%',
                                        backgroundColor:'#6750A4',
                                        borderRadius:'50px',
                                        color:'#FFFFFF',


                                    }}>ثبت اطلاعات</button>

                                </div>





                </Fragment>




            )


        } else if(this.state.pageLevel === 'FreezTunnelDetail'){

            const receiver_unit = [

                { id:'sal', name:'فروش'},
                { id:'col', name:'نگهداری (شیرینگ)'},
                { id:'prd', name:'برگشتی'},

            ];

            return(


                <Fragment >

                    <div style={{

                        position:'absolute',
                        height:'100px',
                        width:'95%',
                        right:'2.5%',
                        textAlign:'right',
                        borderStyle:'none none solid none',
                        borderBottom:'3px solid #F4EFF4',
                        top:'0px',

                    }}>

                        <h1 style={{

                            fontSize:'2vw',
                            borderRight:'15px solid #E35C02',
                            paddingRight:'20px',
                            borderRadius:'10px',
                            height:'90%',
                            paddingTop:'20px',
                            color:'#332D41',

                        }}>اطلاعات صاحب محصول</h1>

                    </div>

                        <h1 style={{

                            position:'absolute',
                            height:'50px',
                            width:'50%',
                            top:'150px',
                            right:'0px',
                            fontSize:'1.5vw',
                            right:'2.5%',
                            textAlign:'right',

                        }} >نام و نام خانوادگی صاحب محصول</h1>

                        <div style={{

                            position:'absolute',
                            height:'75px',
                            width:'25%',
                            top:'225px',
                            right:'2.5%',
                            fontSize:'1.5vw',
                            border:'2px solid #F4EFF4',
                            direction:'rtl',
                            textAlign:'center',


                        }}>

                                {this.state.tunnel_product_owner_name}

                        </div>



                            <div style={{

                                position:'absolute',
                                height:'100px',
                                width:'95%',
                                right:'2.5%',
                                textAlign:'right',
                                borderStyle:'none none solid none',
                                borderBottom:'3px solid #F4EFF4',
                                top:'350px'

                                }}>

                                <h1 style={{

                                    fontSize:'2vw',
                                    borderRight:'15px solid #E35C02',
                                    paddingRight:'20px',
                                    borderRadius:'10px',
                                    height:'90%',
                                    paddingTop:'20px',
                                    color:'#332D41',

                                }}>واحد تحویل گیرنده</h1>

                                </div>

                                <h1 style={{

                                    position:'absolute',
                                    height:'50px',
                                    width:'50%',
                                    top:'500px',
                                    right:'0px',
                                    fontSize:'1.5vw',
                                    right:'2.5%',
                                    textAlign:'right',

                                }} >واحد تحویل گیرنده</h1>

                                <div style={{

                                    position:'absolute',
                                    height:'75px',
                                    width:'25%',
                                    top:'575px',
                                    right:'2.5%',
                                    fontSize:'1.5vw',


                                }}>

                                    <Autocomplete

                                    id='لیست واحد های تحویل گیرنده'
                                    options={receiver_unit}
                                    onChange={this.tunnel_receiver_unit}
                                    size={'medium'}

                                    style={{

                                        width:'100%',
                                        height:'100%',
                                        fontSize:'3vw',
                                        direction:'rtl',

                                    }}

                                    sx={{width:600}}

                                    renderInput={ param=>(

                                        <TextField {...param} label='لیست واحد های تحویل گیرنده' variant="outlined" fullWidth style={{direction:'rtl',fontSize:'2vw'}} />

                                    )}

                                    getOptionLabel={option => option.name}

                                    />

                                </div>

                                {this.preCold_return_preCold_tunnel_id()}



                                <div style={{

                                    position:'absolute',
                                    height:'100px',
                                    width:'95%',
                                    right:'2.5%',
                                    textAlign:'right',
                                    borderStyle:'none none solid none',
                                    borderBottom:'3px solid #F4EFF4',
                                    top:'700px'

                                    }}>

                                    <h1 style={{

                                        fontSize:'2vw',
                                        borderRight:'15px solid #E35C02',
                                        paddingRight:'20px',
                                        borderRadius:'10px',
                                        height:'90%',
                                        paddingTop:'20px',
                                        color:'#332D41',

                                    }}>اطلاعات محصول</h1>

                                    </div>

                                    <h1 style={{

                                        position:'absolute',
                                        height:'50px',
                                        width:'50%',
                                        top:'850px',
                                        right:'0px',
                                        fontSize:'1.5vw',
                                        right:'2.5%',
                                        textAlign:'right',

                                    }} >نوع محصول</h1>

                                    <div style={{

                                        position:'absolute',
                                        height:'75px',
                                        width:'25%',
                                        top:'925px',
                                        right:'2.5%',
                                        fontSize:'1.5vw',
                                        border:'2px solid #F4EFF4',
                                        textAlign:'center',
                                        direction:'rtl',

                                    }}>

                                        {this.state.tunnel_product}

                                    </div>

                                    <div style={{

                                        position:'absolute',
                                        height:'125px',
                                        width:'25%',
                                        top:'850px',
                                        right:'50%',
                                        fontSize:'1.5vw',

                                        }}>
                                            <h1 style={{

                                            position:'absolute',
                                            height:'50px',
                                            width:'100%',
                                            top:'0px',
                                            right:'0px',
                                            fontSize:'1.5vw',
                                            right:'0%',
                                            textAlign:'right',

                                            }} >تعداد بسته بندی</h1>


                                            <input type='number' onChange={this.tunnel_product_box_numChange} placeholder='0' style={{

                                                height:'60px',
                                                textAlign:'center',
                                                top:'50%',
                                                right:'0%',
                                                position:'absolute',


                                            }} />

                                    </div>

                                        <div style={{

                                            position:'absolute',
                                            height:'100px',
                                            width:'95%',
                                            right:'2.5%',
                                            textAlign:'right',
                                            borderStyle:'none none solid none',
                                            borderBottom:'3px solid #F4EFF4',
                                            top:'1150px'

                                            }}>

                                            <h1 style={{

                                                fontSize:'2vw',
                                                borderRight:'15px solid #E35C02',
                                                paddingRight:'20px',
                                                borderRadius:'10px',
                                                height:'90%',
                                                paddingTop:'20px',
                                                color:'#332D41',

                                            }}>اطلاعات وزن کشی</h1>

                                            </div>


                                            <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1300px',
                                                right:'50%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >وزن لیفتراک</h1>


                                                    <input type='text' onChange={this.tunnel_bike_weight_change} placeholder='0.0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                            </div>

                                            {this.add_pallet_weight('ftl')}


                                            <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1300px',
                                                right:'2.5%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >وزن کلی</h1>


                                                    <input type='text' onChange={this.tunnel_net_weight_change} placeholder='0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                                </div>



                                                <div style={{

                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1450px',
                                                    right:'2.5%',
                                                    fontSize:'1.5vw',

                                                    }}>
                                                        <h1 style={{

                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',

                                                        }} > تعداد جعبه 2.5 کیلیویی</h1>


                                                        <input type='number' onChange={this.tunnel_2_5_box_num_change} placeholder='0' style={{

                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',


                                                        }} />

                                                    </div>


                                                    <div style={{

                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1450px',
                                                    right:'50%',
                                                    fontSize:'1.5vw',

                                                    }}>
                                                        <h1 style={{

                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',

                                                        }} >تعداد جعبه 2 کیلویی</h1>


                                                        <input type='number' onChange={this.tunnel_2_box_num_change} placeholder='0' style={{

                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',


                                                        }} />

                                                    </div>






                                    <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1600px',
                                                right:'50%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >تعداد جعبه با وزن دلخواه</h1>


                                                    <input type='number' onChange={this.tunnel_box_num_change} placeholder='0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                    </div>





                        <div style={{

                            position:'absolute',
                            height:'125px',
                            width:'25%',
                            top:'1600px',
                            right:'2.5%',
                            fontSize:'1.5vw',

                            }}>
                                <h1 style={{

                                position:'absolute',
                                height:'50px',
                                width:'100%',
                                top:'0px',
                                right:'0px',
                                fontSize:'1.5vw',
                                right:'0%',
                                textAlign:'right',

                                }} >وزن جعبه دلخواه</h1>


                                <input type='text' onChange={this.tunnel_box_weight_change} placeholder='0.0' style={{

                                    height:'60px',
                                    textAlign:'center',
                                    top:'50%',
                                    right:'0%',
                                    position:'absolute',

                                }} />

                            </div>


                        <div style={{

                            position:'absolute',
                            height:'125px',
                            width:'25%',
                            top:'1600px',
                            right:'2.5%',
                            fontSize:'1.5vw',

                            }}>
                                <h1 style={{

                                position:'absolute',
                                height:'50px',
                                width:'100%',
                                top:'0px',
                                right:'0px',
                                fontSize:'1.5vw',
                                right:'0%',
                                textAlign:'right',

                                }} >وزن جعبه دلخواه</h1>


                                <input type='text' onChange={this.tunnel_box_weight_change} placeholder='0.0' style={{

                                    height:'60px',
                                    textAlign:'center',
                                    top:'50%',
                                    right:'0%',
                                    position:'absolute',

                                }} />

                            </div>




                            <div style={{

                                position:'absolute',
                                height:'75px',
                                width:'25%',
                                top:'1800px',
                                right:'2.5%',
                                fontSize:'1.5vw',

                                }}>

                                    <button onClick={this.submitTunnel} style={{


                                        width:'100%',
                                        height:'100%',
                                        backgroundColor:'#6750A4',
                                        borderRadius:'50px',
                                        color:'#FFFFFF',


                                    }}>ثبت اطلاعات</button>

                                </div>





                </Fragment>




            )





        } else if(this.state.pageLevel === 'ReturnWeightingDetail'){

            const receiver_unit = [

                { id:'sal', name:'فروش'},
                { id:'seg', name:'قطعه بندی'},
                { id:'tsh', name:'ضایعات'},

            ];

            return(


                <Fragment >

                    <div style={{

                        position:'absolute',
                        height:'100px',
                        width:'95%',
                        right:'2.5%',
                        textAlign:'right',
                        borderStyle:'none none solid none',
                        borderBottom:'3px solid #F4EFF4',
                        top:'0px',

                    }}>

                        <h1 style={{

                            fontSize:'2vw',
                            borderRight:'15px solid #021AEE',
                            paddingRight:'20px',
                            borderRadius:'10px',
                            height:'90%',
                            paddingTop:'20px',
                            color:'#332D41',

                        }}>اطلاعات صاحب محصول</h1>

                    </div>

                        <h1 style={{

                            position:'absolute',
                            height:'50px',
                            width:'50%',
                            top:'150px',
                            right:'0px',
                            fontSize:'1.5vw',
                            right:'2.5%',
                            textAlign:'right',

                        }} >نام و نام خانوادگی صاحب محصول</h1>

                        <div style={{

                            position:'absolute',
                            height:'75px',
                            width:'25%',
                            top:'225px',
                            right:'2.5%',
                            fontSize:'1.5vw',
                            border:'2px solid #F4EFF4',
                            direction:'rtl',
                            textAlign:'center',


                        }}>

                                {this.state.returnWeighting_product_owner_name}

                        </div>



                            <div style={{

                                position:'absolute',
                                height:'100px',
                                width:'95%',
                                right:'2.5%',
                                textAlign:'right',
                                borderStyle:'none none solid none',
                                borderBottom:'3px solid #F4EFF4',
                                top:'350px'

                                }}>

                                <h1 style={{

                                    fontSize:'2vw',
                                    borderRight:'15px solid #021AEE',
                                    paddingRight:'20px',
                                    borderRadius:'10px',
                                    height:'90%',
                                    paddingTop:'20px',
                                    color:'#332D41',

                                }}>واحد برگداننده</h1>

                                </div>

                                <h1 style={{

                                    position:'absolute',
                                    height:'50px',
                                    width:'50%',
                                    top:'500px',
                                    right:'0px',
                                    fontSize:'1.5vw',
                                    right:'2.5%',
                                    textAlign:'right',

                                }} >واحد برگرداننده</h1>

                                <div style={{

                                    position:'absolute',
                                    height:'75px',
                                    width:'25%',
                                    top:'575px',
                                    right:'2.5%',
                                    fontSize:'1.5vw',


                                }}>

                                    <Autocomplete

                                    id='لیست واحد های تحویل گیرنده'
                                    options={receiver_unit}
                                    onChange={this.returnWeighting_receiver_unit}
                                    size={'medium'}

                                    style={{

                                        width:'100%',
                                        height:'100%',
                                        fontSize:'3vw',
                                        direction:'rtl',

                                    }}

                                    sx={{width:600}}

                                    renderInput={ param=>(

                                        <TextField {...param} label='لیست واحد های تحویل گیرنده' variant="outlined" fullWidth style={{direction:'rtl',fontSize:'2vw'}} />

                                    )}

                                    getOptionLabel={option => option.name}

                                    />

                                </div>

                                {this.returnWeighting_return_preCold_tunnel_id()}



                                <div style={{

                                    position:'absolute',
                                    height:'100px',
                                    width:'95%',
                                    right:'2.5%',
                                    textAlign:'right',
                                    borderStyle:'none none solid none',
                                    borderBottom:'3px solid #F4EFF4',
                                    top:'700px'

                                    }}>

                                    <h1 style={{

                                        fontSize:'2vw',
                                        borderRight:'15px solid #021AEE',
                                        paddingRight:'20px',
                                        borderRadius:'10px',
                                        height:'90%',
                                        paddingTop:'20px',
                                        color:'#332D41',

                                    }}>اطلاعات محصول</h1>

                                    </div>

                                    <h1 style={{

                                        position:'absolute',
                                        height:'50px',
                                        width:'50%',
                                        top:'850px',
                                        right:'0px',
                                        fontSize:'1.5vw',
                                        right:'2.5%',
                                        textAlign:'right',

                                    }} >نوع محصول</h1>

                                    <div style={{

                                        position:'absolute',
                                        height:'75px',
                                        width:'25%',
                                        top:'925px',
                                        right:'2.5%',
                                        fontSize:'1.5vw',
                                        border:'2px solid #F4EFF4',
                                        textAlign:'center',
                                        direction:'rtl',

                                    }}>

                                        {this.state.returnWeighting_product}

                                    </div>

                                    <div style={{

                                        position:'absolute',
                                        height:'125px',
                                        width:'25%',
                                        top:'850px',
                                        right:'50%',
                                        fontSize:'1.5vw',

                                        }}>
                                            <h1 style={{

                                            position:'absolute',
                                            height:'50px',
                                            width:'100%',
                                            top:'0px',
                                            right:'0px',
                                            fontSize:'1.5vw',
                                            right:'0%',
                                            textAlign:'right',

                                            }} >تعداد بسته بندی</h1>


                                            <input type='number' onChange={this.returnWeighting_product_box_numChange} placeholder='0' style={{

                                                height:'60px',
                                                textAlign:'center',
                                                top:'50%',
                                                right:'0%',
                                                position:'absolute',


                                            }} />

                                    </div>

                                        <div style={{

                                            position:'absolute',
                                            height:'100px',
                                            width:'95%',
                                            right:'2.5%',
                                            textAlign:'right',
                                            borderStyle:'none none solid none',
                                            borderBottom:'3px solid #F4EFF4',
                                            top:'1150px'

                                            }}>

                                            <h1 style={{

                                                fontSize:'2vw',
                                                borderRight:'15px solid #021AEE',
                                                paddingRight:'20px',
                                                borderRadius:'10px',
                                                height:'90%',
                                                paddingTop:'20px',
                                                color:'#332D41',

                                            }}>اطلاعات وزن کشی</h1>

                                            </div>


                                            <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1300px',
                                                right:'50%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >وزن چرخ</h1>


                                                    <input type='text' onChange={this.returnWeighting_bike_weight_change} placeholder='0.0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                            </div>

                                            {this.add_pallet_weight(this.state.returnWeighting_receiver_unit)}


                                            <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1300px',
                                                right:'2.5%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >وزن کلی</h1>


                                                    <input type='text' onChange={this.returnWeighting_net_weight_change} placeholder='0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                                </div>



                                                <div style={{

                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1450px',
                                                    right:'2.5%',
                                                    fontSize:'1.5vw',

                                                    }}>
                                                        <h1 style={{

                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',

                                                        }} > تعداد جعبه 2.5 کیلیویی</h1>


                                                        <input type='number' onChange={this.returnWeighting_2_5_box_num_change} placeholder='0' style={{

                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',


                                                        }} />

                                                    </div>


                                                    <div style={{

                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1450px',
                                                    right:'50%',
                                                    fontSize:'1.5vw',

                                                    }}>
                                                        <h1 style={{

                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',

                                                        }} >تعداد جعبه 2 کیلویی</h1>


                                                        <input type='number' onChange={this.returnWeighting_2_box_num_change} placeholder='0' style={{

                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',


                                                        }} />

                                                    </div>






                                    <div style={{

                                                position:'absolute',
                                                height:'125px',
                                                width:'25%',
                                                top:'1600px',
                                                right:'50%',
                                                fontSize:'1.5vw',

                                                }}>
                                                    <h1 style={{

                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >تعداد جعبه با وزن دلخواه</h1>


                                                    <input type='number' onChange={this.returnWeighting_box_num_change} placeholder='0' style={{

                                                        height:'60px',
                                                        textAlign:'center',
                                                        top:'50%',
                                                        right:'0%',
                                                        position:'absolute',


                                                    }} />

                                    </div>





                        <div style={{

                            position:'absolute',
                            height:'125px',
                            width:'25%',
                            top:'1600px',
                            right:'2.5%',
                            fontSize:'1.5vw',

                            }}>
                                <h1 style={{

                                position:'absolute',
                                height:'50px',
                                width:'100%',
                                top:'0px',
                                right:'0px',
                                fontSize:'1.5vw',
                                right:'0%',
                                textAlign:'right',

                                }} >وزن جعبه دلخواه</h1>


                                <input type='text' onChange={this.returnWeighting_box_weight_change} placeholder='0.0' style={{

                                    height:'60px',
                                    textAlign:'center',
                                    top:'50%',
                                    right:'0%',
                                    position:'absolute',

                                }} />

                            </div>




                            <div style={{

                                position:'absolute',
                                height:'75px',
                                width:'25%',
                                top:'1800px',
                                right:'2.5%',
                                fontSize:'1.5vw',

                                }}>

                                    <button onClick={this.submitReturnWeighting} style={{


                                        width:'100%',
                                        height:'100%',
                                        backgroundColor:'#6750A4',
                                        borderRadius:'50px',
                                        color:'#FFFFFF',


                                    }}>ثبت اطلاعات</button>

                                </div>

                </Fragment>

            )
            
        } else if (this.state.pageLevel === 'ReturnSaleDetail'){
            
                const receiver_unit = [
    
                    { id:'sal', name:'فروش'},
                    { id:'seg', name:'قطعه بندی'},
                    { id:'pre', name:'پیش سرد'},
                    { id:'ftl', name:'تونل انجماد'},
                    { id:'tsh', name:'ضایعات'},
                    { id:'chl', name:'چیلر'},
    
                ];
    
    
                return (
    
                    <Fragment >
    
                        <div style={{
    
                            position:'absolute',
                            height:'100px',
                            width:'95%',
                            right:'2.5%',
                            textAlign:'right',
                            borderStyle:'none none solid none',
                            borderBottom:'3px solid #F4EFF4',
                            top:'0px',
    
                        }}>
    
                            <h1 style={{
    
                                fontSize:'2vw',
                                borderRight:'15px solid #4D8000',
                                paddingRight:'20px',
                                borderRadius:'10px',
                                height:'90%',
                                paddingTop:'20px',
                                color:'#332D41',
    
                            }}>اطلاعات صاحب محصول</h1>
    
                        </div>
    
                            <h1 style={{
    
                                position:'absolute',
                                height:'50px',
                                width:'50%',
                                top:'150px',
                                right:'0px',
                                fontSize:'1.5vw',
                                right:'2.5%',
                                textAlign:'right',
    
                            }} >نام و نام خانوادگی صاحب محصول</h1>
    
                            <div style={{
    
                                position:'absolute',
                                height:'75px',
                                width:'25%',
                                top:'225px',
                                right:'2.5%',
                                fontSize:'1.5vw',
                                border:'2px solid #F4EFF4',
                                direction:'rtl',
                                textAlign:'center',
    
    
                            }}>
    
                                    {this.state.production_product_owner_name}
    
                            </div>
    
        
                            <h1 style={{
                                
                                position:'absolute',
                                height:'50px',
                                width:'50%',
                                top:'150px',
                                right:'0px',
                                fontSize:'1.5vw',
                                right:'50%',
                                textAlign:'right',

                            }} >خریدار</h1>

                            <div style={{

                                position:'absolute',
                                height:'75px',
                                width:'25%',
                                top:'225px',
                                right:'50%',
                                fontSize:'1.5vw',
                                direction:'rtl',
                                textAlign:'center',


                            }}>
 
                                <Autocomplete
                                    
                                    id='لیست خریدار'
                                    options={this.state.returnSale_buyer_list}
                                    onChange={this.returnSale_buyer_change}
                                    size={'medium'}

                                    style={{

                                        width:'100%',
                                        height:'100%',
                                        fontSize:'3vw',
                                        direction:'rtl',

                                    }}

                                    sx={{width:600}}

                                    renderInput={ param=>(

                                        <TextField {...param} label='لیست خریداران' variant="outlined" fullWidth style={{direction:'rtl',fontSize:'2vw'}} />

                                    )}

                                    getOptionLabel={option => option.name}

                                    />

                            </div>
    
                                <div style={{
    
                                    position:'absolute',
                                    height:'100px',
                                    width:'95%',
                                    right:'2.5%',
                                    textAlign:'right',
                                    borderStyle:'none none solid none',
                                    borderBottom:'3px solid #F4EFF4',
                                    top:'350px'
    
                                    }}>
    
                                    <h1 style={{
    
                                        fontSize:'2vw',
                                        borderRight:'15px solid #4D8000',
                                        paddingRight:'20px',
                                        borderRadius:'10px',
                                        height:'90%',
                                        paddingTop:'20px',
                                        color:'#332D41',
    
                                    }}>واحد تحویل گیرنده</h1>
    
                                    </div>
    
                                    <h1 style={{
    
                                        position:'absolute',
                                        height:'50px',
                                        width:'50%',
                                        top:'500px',
                                        right:'0px',
                                        fontSize:'1.5vw',
                                        right:'2.5%',
                                        textAlign:'right',
    
                                    }} >واحد تحویل گیرنده</h1>
    
                                    <div style={{
    
                                        position:'absolute',
                                        height:'75px',
                                        width:'25%',
                                        top:'575px',
                                        right:'2.5%',
                                        fontSize:'1.5vw',
    
    
                                    }}>
    
                                        <Autocomplete
    
                                        id='لیست واحد های تحویل گیرنده'
                                        options={receiver_unit}
                                        onChange={this.returnSale_receiver_unit}
                                        size={'medium'}
    
                                        style={{
    
                                            width:'100%',
                                            height:'100%',
                                            fontSize:'3vw',
                                            direction:'rtl',
    
                                        }}
    
                                        sx={{width:600}}
    
                                        renderInput={ param=>(
    
                                            <TextField {...param} label='لیست واحد های تحویل گیرنده' variant="outlined" fullWidth style={{direction:'rtl',fontSize:'2vw'}} />
    
                                        )}
    
                                        getOptionLabel={option => option.name}
    
                                        />
    
                                    </div>
    
                                    {this.returnSale_return_preCold_tunnel_id()}
    
    
    
                                    <div style={{
    
                                        position:'absolute',
                                        height:'100px',
                                        width:'95%',
                                        right:'2.5%',
                                        textAlign:'right',
                                        borderStyle:'none none solid none',
                                        borderBottom:'3px solid #F4EFF4',
                                        top:'700px'
    
                                        }}>
    
                                        <h1 style={{
    
                                            fontSize:'2vw',
                                            borderRight:'15px solid #4D8000',
                                            paddingRight:'20px',
                                            borderRadius:'10px',
                                            height:'90%',
                                            paddingTop:'20px',
                                            color:'#332D41',
    
                                        }}>اطلاعات محصول</h1>
    
                                        </div>
    
                                        <h1 style={{
    
                                            position:'absolute',
                                            height:'50px',
                                            width:'50%',
                                            top:'850px',
                                            right:'0px',
                                            fontSize:'1.5vw',
                                            right:'2.5%',
                                            textAlign:'right',
    
                                        }} >نوع محصول</h1>
    
                                        <div style={{
    
                                            position:'absolute',
                                            height:'75px',
                                            width:'25%',
                                            top:'925px',
                                            right:'2.5%',
                                            fontSize:'1.5vw',
    
                                        }}>
    
                                            <Autocomplete
    
                                            id='نوع محصول'
                                            options={this.state.returnSale_product_list}
                                            onChange={this.returnSale_product_change}
                                            size={'medium'}
    
                                            style={{
    
                                                width:'100%',
                                                height:'100%',
                                                fontSize:'3vw',
                                                direction:'rtl',
                                                textAlign:'right',
    
                                            }}
    
                                            sx={{width:600}}
    
                                            renderInput={ param=>(
    
                                                <TextField {...param} label='نوع محصول' variant="outlined" fullWidth style={{direction:'rtl',fontSize:'2vw', textAlign:'right'}} />
    
                                            )}
    
                                            getOptionLabel={option => option.name}
    
                                            />
    
                                        </div>
    
                                        <div style={{
    
                                            position:'absolute',
                                            height:'125px',
                                            width:'25%',
                                            top:'850px',
                                            right:'50%',
                                            fontSize:'1.5vw',
    
                                            }}>
                                                <h1 style={{
    
                                                position:'absolute',
                                                height:'50px',
                                                width:'100%',
                                                top:'0px',
                                                right:'0px',
                                                fontSize:'1.5vw',
                                                right:'0%',
                                                textAlign:'right',
    
                                                }} >تعداد بسته بندی</h1>
    
    
                                                <input type='number' onChange={this.returnSale_product_box_numChange} placeholder='0' style={{
    
                                                    height:'60px',
                                                    textAlign:'center',
                                                    top:'50%',
                                                    right:'0%',
                                                    position:'absolute',
    
    
                                                }} />
    
                                        </div>
    
                                        <div style={{
    
                                            position:'absolute',
                                            height:'75px',
                                            width:'25%',
                                            top:'1025px',
                                            right:'2.5%',
                                            fontSize:'1.5vw',
    
                                            }}>
                                                    <h1 style={{
    
                                                    position:'absolute',
                                                    height:'50px',
                                                    width:'100%',
                                                    top:'0px',
                                                    right:'0px',
                                                    fontSize:'1.5vw',
                                                    right:'0%',
                                                    textAlign:'right',

                                                    }} >تاریخ تولید</h1>

     
                                                <input type='text' onChange={this.returnSale_time_day_Change} placeholder='-' style={{
                                                
                                                height:'60px',
                                                textAlign:'center',
                                                top:'50%',
                                                right:'0%',
                                                position:'absolute',
                                                width:'25%',


                                            }} />

                                            <div style={{
                                                
                                                height:'60px',
                                                textAlign:'center',
                                                top:'55%',
                                                right:'28%',
                                                position:'absolute',
                                                width:'5%',
                                                fontSize:'30px'


                                            }} >
                                                /
                                            </div>
    
    
                                            <input type='text' onChange={this.returnSale_time_month_Change} placeholder='-' style={{
                                                
                                                height:'60px',
                                                textAlign:'center',
                                                top:'50%',
                                                right:'35%',
                                                position:'absolute',
                                                width:'15%',


                                            }} />
        
                                            <div style={{
                                                
                                                height:'60px',
                                                textAlign:'center',
                                                top:'56%',
                                                right:'53%',
                                                position:'absolute',
                                                width:'5%',
                                                fontSize:'30px',


                                            }} >
                                                /
                                            </div>

                                            <input type='text' onChange={this.returnSale_time_year_Change} placeholder='-' style={{
                                                
                                                height:'60px',
                                                textAlign:'center',
                                                top:'50%',
                                                right:'60%',
                                                position:'absolute',
                                                width:'40%',

                                            }} />

                                            </div>
    
                                            <div style={{
    
                                                position:'absolute',
                                                height:'100px',
                                                width:'95%',
                                                right:'2.5%',
                                                textAlign:'right',
                                                borderStyle:'none none solid none',
                                                borderBottom:'3px solid #F4EFF4',
                                                top:'1150px'
    
                                                }}>
    
                                                <h1 style={{
    
                                                    fontSize:'2vw',
                                                    borderRight:'15px solid #4D8000',
                                                    paddingRight:'20px',
                                                    borderRadius:'10px',
                                                    height:'90%',
                                                    paddingTop:'20px',
                                                    color:'#332D41',
    
                                                }}>اطلاعات وزن کشی</h1>
    
                                                </div>
    
    
                                                <div style={{
    
                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1300px',
                                                    right:'50%',
                                                    fontSize:'1.5vw',
    
                                                    }}>
                                                        <h1 style={{
    
                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',
    
                                                        }} >وزن چرخ</h1>
    
    
                                                        <input type='text' onChange={this.returnSale_bike_weight_change} placeholder='0.0' style={{
    
                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',
    
    
                                                        }} />
    
                                                </div>
    
                                                {this.add_pallet_weight(this.state.returnSale_receiver_unit)}
    
                                                <div style={{
    
                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1300px',
                                                    right:'2.5%',
                                                    fontSize:'1.5vw',
    
                                                    }}>
                                                        <h1 style={{
    
                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',
    
                                                        }} >وزن کلی</h1>
    
    
                                                        <input type='text' onChange={this.returnSale_net_weight_change} placeholder='0' style={{
    
                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',
    
    
                                                        }} />
    
                                                    </div>
    
    
    
                                                    <div style={{
    
                                                        position:'absolute',
                                                        height:'125px',
                                                        width:'25%',
                                                        top:'1450px',
                                                        right:'2.5%',
                                                        fontSize:'1.5vw',
    
                                                        }}>
                                                            <h1 style={{
    
                                                            position:'absolute',
                                                            height:'50px',
                                                            width:'100%',
                                                            top:'0px',
                                                            right:'0px',
                                                            fontSize:'1.5vw',
                                                            right:'0%',
                                                            textAlign:'right',
    
                                                            }} > تعداد جعبه 2.5 کیلیویی</h1>
    
    
                                                            <input type='number' onChange={this.returnSale_2_5_box_num_change} placeholder='0' style={{
    
                                                                height:'60px',
                                                                textAlign:'center',
                                                                top:'50%',
                                                                right:'0%',
                                                                position:'absolute',
    
    
                                                            }} />
    
                                                        </div>
    
    
    
    
    
    
                                                        <div style={{
    
                                                        position:'absolute',
                                                        height:'125px',
                                                        width:'25%',
                                                        top:'1450px',
                                                        right:'50%',
                                                        fontSize:'1.5vw',
    
                                                        }}>
                                                            <h1 style={{
    
                                                            position:'absolute',
                                                            height:'50px',
                                                            width:'100%',
                                                            top:'0px',
                                                            right:'0px',
                                                            fontSize:'1.5vw',
                                                            right:'0%',
                                                            textAlign:'right',
    
                                                            }} >تعداد جعبه 2 کیلویی</h1>
    
    
                                                            <input type='number' onChange={this.returnSale_2_box_num_change} placeholder='0' style={{
    
                                                                height:'60px',
                                                                textAlign:'center',
                                                                top:'50%',
                                                                right:'0%',
                                                                position:'absolute',
    
    
                                                            }} />
    
                                                        </div>
    
                                        <div style={{
    
                                                    position:'absolute',
                                                    height:'125px',
                                                    width:'25%',
                                                    top:'1600px',
                                                    right:'50%',
                                                    fontSize:'1.5vw',
    
                                                    }}>
                                                        <h1 style={{
    
                                                        position:'absolute',
                                                        height:'50px',
                                                        width:'100%',
                                                        top:'0px',
                                                        right:'0px',
                                                        fontSize:'1.5vw',
                                                        right:'0%',
                                                        textAlign:'right',
    
                                                        }} >تعداد جعبه با وزن دلخواه</h1>
    
    
                                                        <input type='number' onChange={this.returnSale_box_num_change} placeholder='0' style={{
    
                                                            height:'60px',
                                                            textAlign:'center',
                                                            top:'50%',
                                                            right:'0%',
                                                            position:'absolute',
    
    
                                                        }} />
    
                                        </div>
    
    
    
    
    
                            <div style={{
    
                                position:'absolute',
                                height:'125px',
                                width:'25%',
                                top:'1600px',
                                right:'2.5%',
                                fontSize:'1.5vw',
    
                                }}>
                                    <h1 style={{
    
                                    position:'absolute',
                                    height:'50px',
                                    width:'100%',
                                    top:'0px',
                                    right:'0px',
                                    fontSize:'1.5vw',
                                    right:'0%',
                                    textAlign:'right',
    
                                    }} >وزن جعبه دلخواه</h1>
    
    
                                    <input type='text' onChange={this.returnSale_box_weight_change} placeholder='0.0' style={{
    
                                        height:'60px',
                                        textAlign:'center',
                                        top:'50%',
                                        right:'0%',
                                        position:'absolute',
    
    
                                    }} />
    
                                </div>
    
    
    
    
    
    
    
                                <div style={{
    
                                    position:'absolute',
                                    height:'75px',
                                    width:'25%',
                                    top:'1800px',
                                    right:'2.5%',
                                    fontSize:'1.5vw',
    
                                    }}>
    
                                        <button onClick={this.submitReturnSale} style={{
    
    
                                            width:'100%',
                                            height:'100%',
                                            backgroundColor:'#6750A4',
                                            borderRadius:'50px',
                                            color:'#FFFFFF',
    
    
                                        }}>ثبت اطلاعات</button>
    
                                    </div>
    
                    </Fragment>
    
                )
    
            
        }

    }

    changeLevelClick =(event)=>{

        if (this.state.pageLevel === 'Production'){


            this.setState({

                production_product_owner_id : event.target.name,
                pageLevel:'ProductionDetail',
                pageState:false,

            })

            this.get_product_owner_name(event.target.name)
            this.get_product_owner_driver_list(event.target.name)


        } else if(this.state.pageLevel === 'PreCold'){

            this.setState({

                preCold_product_owner_id: this.state.production_pre_cold_product_information[event.target.name]['product_owner_id'],
                preCold_product_owner_name: this.state.production_pre_cold_product_information[event.target.name]['product_owner'],
                preCold_product: this.state.production_pre_cold_product_information[event.target.name]['product'],
                preCold_product_id: this.state.production_pre_cold_product_information[event.target.name]['product_id'],
                preCold_max_weight: this.state.production_pre_cold_product_information[event.target.name]['max_weight'],
                pageLevel:'PreColdDetail',
                pageState:false,

            })


        } else if(this.state.pageLevel === 'FreezTunnel'){


            this.setState({

                tunnel_product_owner_id: this.state.production_freeze_tunnel_product_information[event.target.name]['product_owner_id'],
                tunnel_product_owner_name: this.state.production_freeze_tunnel_product_information[event.target.name]['product_owner'],
                tunnel_product: this.state.production_freeze_tunnel_product_information[event.target.name]['product'],
                tunnel_product_id: this.state.production_freeze_tunnel_product_information[event.target.name]['product_id'],
                tunnel_max_weight: this.state.production_freeze_tunnel_product_information[event.target.name]['max_weight'],
                pageLevel:'FreezTunnelDetail',
                pageState:false,

            })


        } else if(this.state.pageLevel === 'ReturnWeighting'){

            this.setState({

                returnWeighting_product_owner_id: this.state.production_return_weighting_product_information[event.target.name]['product_owner_id'],
                returnWeighting_product_owner_name: this.state.production_return_weighting_product_information[event.target.name]['product_owner'],
                returnWeighting_product: this.state.production_return_weighting_product_information[event.target.name]['product'],
                returnWeighting_product_id: this.state.production_return_weighting_product_information[event.target.name]['product_id'],
                returnWeighting_max_weight: this.state.production_return_weighting_product_information[event.target.name]['max_weight'],
                pageLevel:'ReturnWeightingDetail',
                pageState:false,

            })


        } else if(this.state.pageLevel === 'ReturnSale'){

            this.setState({

                returnSale_product_owner_id : event.target.name,
                pageLevel:'ReturnSaleDetail',
                pageState:false,

            })

            this.get_product_owner_name(event.target.name)


        }



    }


    handle_product_owner_list = (jsonResponse) => {



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                production_product_owner_list : jsonResponse['product_owner_list']

            })


        }
    }

    handle_pre_cold_list = (jsonResponse) => {



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                production_pre_cold_list : jsonResponse['pre_cold_list'],
                production_pre_cold_product_information : jsonResponse['product_information'],

            })


        }
    }

    handle_freeze_tunnel_list = (jsonResponse) => {



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {



            this.setState({

                production_freeze_tunnel_list : jsonResponse['freeze_tunnel'],
                production_freeze_tunnel_product_information : jsonResponse['product_information'],

            })


        }
    }

    handle_return_weighting_list = (jsonResponse) => {



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {



            this.setState({

                production_return_weighting_list : jsonResponse['return_weighting'],
                production_return_weighting_product_information : jsonResponse['product_information'],

            })


        }
    }

    handle_return_sale_list = (jsonResponse) => {



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {



            this.setState({

                production_return_sale_list : jsonResponse['product_owner_list'],

            })


        }
    }

    get_product_owner_list =()=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),

            })


        } ;

        fetch(IPServer() + '/slaughterManage/production/product/owner/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_product_owner_list(data));


    };

    get_pre_cold_list =() => {

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),

            })


        } ;

        fetch(IPServer() + '/slaughterManage/production/preCold/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_pre_cold_list(data));


    };

    get_freeze_tunnel_list =() => {

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),

            })


        } ;

        fetch(IPServer() + '/slaughterManage/production/freezeTunnel/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_freeze_tunnel_list(data));

    };

    get_return_weighting_list =() => {

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),

            })


        } ;

        fetch(IPServer() + '/slaughterManage/production/returnWeighting/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_return_weighting_list(data));

    };


    get_return_sale_list =() => {

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),

            })


        } ;

        fetch(IPServer() + '/slaughterManage/production/returnSale/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_return_sale_list(data));

    };
    
    ChangeHeaderProduction =(levelName) =>{

        this.setState({

            pageLevel:levelName
 
        })

    }

    production_product_owner_table_Row = ()=>{

        var counter = 0;
        var topNum = 0;

        return (
            <Fragment  >
                {this.state.production_product_owner_list.map( data =>{

                    counter = counter + 1;
                    topNum = topNum + 120;
                    const backgroundColorRow = (counter % 2 !== 0.0) ? '#F6EDFF' : '#FFFFFF';

                    const rowStyle = {

                        position:'absolute',
                        top:topNum.toString() + 'px',
                        right:'0px',
                        height:'100px',
                        backgroundColor:backgroundColorRow,
                        width:'100%',

                    }

                    return(
                        
                        <tr style={rowStyle}>

                            <td  style={{position:'absolute', right:'0%', width:'25%'}}><h1 className="tableRow" >{counter}</h1></td>
                            <td  style={{position:'absolute', right:'25%', width:'25%'}}><h1 className="tableRow" >{data.product_owner}</h1></td>
                            <td  style={{position:'absolute', right:'50%', width:'25%'}}><h1 className="tableRow" >{data.live_driver_num}</h1></td>
                            <td  style={{position:'absolute', right:'75%', width:'25%'}}>

                            <button onClick={this.changeLevelClick} name={data.product_owner_id} style={{border:'none', width:'100%', height:'100%' , backgroundColor:'rgba(0,0,0,0)'}}>
                                
                                <img name={data.product_owner_id} style={{border:'none',width:'10%', height:'10', backgroundColor:'rgba(0,0,0,0)'}} src={VectorIcon} alt='this is vector' />
                            
                            </button>


                            </td>


                        </tr>
                    
                    )
                })}
            </Fragment>

        )

    }


    production_pre_cold_table_Row = ()=>{

        var counter = 0;
        var topNum = 0;

        return (
            <Fragment  >

                {this.state.production_pre_cold_list.map( data =>{

                    counter = counter + 1;
                    topNum = topNum + 120;
                    const backgroundColorRow = (counter % 2 !== 0.0) ? '#F6EDFF' : '#FFFFFF';

                    const rowStyle = {

                        position:'absolute',
                        top:topNum.toString() + 'px',
                        right:'0px',
                        height:'100px',
                        backgroundColor:backgroundColorRow,
                        width:'100%',

                    }

                    return(
                        
                        <tr style={rowStyle}>

                            <td  style={{position:'absolute', right:'0%' , width:'20%'}}><h1 className="tableRow" >{counter}</h1></td>
                            <td  style={{position:'absolute', right:'20%', width:'20%'}}><h1 className="tableRow" >{data.product_owner}</h1></td>
                            <td  style={{position:'absolute', right:'40%', width:'20%'}}><h1 className="tableRow" >{data.product}</h1></td>
                            <td  style={{position:'absolute', right:'60%', width:'20%'}}><h1 className="tableRow" >{data.weight}</h1></td>
                            <td  style={{position:'absolute', right:'80%', width:'20%'}}>

                            <button onClick={this.changeLevelClick} name={data.product_id} style={{border:'none', width:'100%', height:'100%' , backgroundColor:'rgba(0,0,0,0)'}}>
                                
                                <img name={data.product_id} style={{border:'none',width:'10%', height:'10', backgroundColor:'rgba(0,0,0,0)'}} src={VectorIcon} alt='this is vector' />
                            
                            </button>


                            </td>


                        </tr>
                    
                    )
                })}
            </Fragment>

        )

    }

    production_freeze_tunnel_table_Row = ()=>{

        var counter = 0;
        var topNum = 0;

        return (
            <Fragment  >

                {this.state.production_freeze_tunnel_list.map( data =>{

                    counter = counter + 1;
                    topNum = topNum + 120;
                    const backgroundColorRow = (counter % 2 !== 0.0) ? '#F6EDFF' : '#FFFFFF';

                    const rowStyle = {

                        position:'absolute',
                        top:topNum.toString() + 'px',
                        right:'0px',
                        height:'100px',
                        backgroundColor:backgroundColorRow,
                        width:'100%',

                    }

                    return(
                        
                        <tr style={rowStyle}>

                            <td  style={{position:'absolute', right:'0%' , width:'20%'}}><h1 className="tableRow" >{counter}</h1></td>
                            <td  style={{position:'absolute', right:'20%', width:'20%'}}><h1 className="tableRow" >{data.product_owner}</h1></td>
                            <td  style={{position:'absolute', right:'40%', width:'20%'}}><h1 className="tableRow" >{data.product}</h1></td>
                            <td  style={{position:'absolute', right:'60%', width:'20%'}}><h1 className="tableRow" >{data.weight}</h1></td>
                            <td  style={{position:'absolute', right:'80%', width:'20%'}}>

                            <button onClick={this.changeLevelClick} name={data.product_id} style={{border:'none', width:'100%', height:'100%' , backgroundColor:'rgba(0,0,0,0)'}}>
                                
                                <img name={data.product_id} style={{border:'none',width:'10%', height:'10', backgroundColor:'rgba(0,0,0,0)'}} src={VectorIcon} alt='this is vector' />
                            
                            </button>


                            </td>


                        </tr>
                    
                    )
                })}
            </Fragment>

        )

    }


    production_return_weighting_table_Row = ()=>{

        var counter = 0;
        var topNum = 0;

        return (
            <Fragment  >

                {this.state.production_return_weighting_list.map( data =>{

                    counter = counter + 1;
                    topNum = topNum + 120;
                    const backgroundColorRow = (counter % 2 !== 0.0) ? '#F6EDFF' : '#FFFFFF';

                    const rowStyle = {

                        position:'absolute',
                        top:topNum.toString() + 'px',
                        right:'0px',
                        height:'100px',
                        backgroundColor:backgroundColorRow,
                        width:'100%',

                    }

                    return(
                        
                        <tr style={rowStyle}>

                            <td  style={{position:'absolute', right:'0%' , width:'20%'}}><h1 className="tableRow" >{counter}</h1></td>
                            <td  style={{position:'absolute', right:'20%', width:'20%'}}><h1 className="tableRow" >{data.product_owner}</h1></td>
                            <td  style={{position:'absolute', right:'40%', width:'20%'}}><h1 className="tableRow" >{data.product}</h1></td>
                            <td  style={{position:'absolute', right:'60%', width:'20%'}}><h1 className="tableRow" >{data.weight}</h1></td>
                            <td  style={{position:'absolute', right:'80%', width:'20%'}}>

                            <button onClick={this.changeLevelClick} name={data.product_id} style={{border:'none', width:'100%', height:'100%' , backgroundColor:'rgba(0,0,0,0)'}}>
                                
                                <img name={data.product_id} style={{border:'none',width:'10%', height:'10', backgroundColor:'rgba(0,0,0,0)'}} src={VectorIcon} alt='this is vector' />
                            
                            </button>


                            </td>


                        </tr>
                    
                    )
                })}
            </Fragment>

        )

    }

    production_return_sale_table_Row = ()=>{

        var counter = 0;
        var topNum = 0;

        return (
            <Fragment  >
                {this.state.production_return_sale_list.map( data =>{

                    counter = counter + 1;
                    topNum = topNum + 120;
                    const backgroundColorRow = (counter % 2 !== 0.0) ? '#F6EDFF' : '#FFFFFF';

                    const rowStyle = {

                        position:'absolute',
                        top:topNum.toString() + 'px',
                        right:'0px',
                        height:'100px',
                        backgroundColor:backgroundColorRow,
                        width:'100%',

                    }

                    return(
                        
                        <tr style={rowStyle}>

                            <td  style={{position:'absolute', right:'0%', width:'25%'}}><h1 className="tableRow" >{counter}</h1></td>
                            <td  style={{position:'absolute', right:'25%', width:'25%'}}><h1 className="tableRow" >{data.product_owner}</h1></td>
                            <td  style={{position:'absolute', right:'50%', width:'25%'}}><h1 className="tableRow" >{data.live_driver_num}</h1></td>
                            <td  style={{position:'absolute', right:'75%', width:'25%'}}>

                            <button onClick={this.changeLevelClick} name={data.product_owner_id} style={{border:'none', width:'100%', height:'100%' , backgroundColor:'rgba(0,0,0,0)'}}>
                                
                                <img name={data.product_owner_id} style={{border:'none',width:'10%', height:'10', backgroundColor:'rgba(0,0,0,0)'}} src={VectorIcon} alt='this is vector' />
                            
                            </button>


                            </td>


                        </tr>
                    
                    )
                })}
            </Fragment>

        )

    }

    ///////////// add tolerance popup

    handle_tolerance =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                tolerance_popup: false

            })
        }
    

    }

    submitTolerance =()=>{


        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                pageLevel : this.state.pageLevel,
                tolerance:this.state.toleranceValue,

            })


        } ;

        fetch(IPServer() + '/slaughterManage/tolerance/create/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handle_tolerance(data));






    }

    toleranceChange =(event)=>{

        this.setState({

            toleranceValue : event.target.value


        })


    }

    show_tolerance_popup =(event)=>{


        this.setState({

            tolerance_popup : !this.state.tolerance_popup,

        })


    }

    tolerance_popup_view =()=>{


        if(this.state.tolerance_popup){

                return(

                    <div style={{

                        position:'absolute',
                        height:'200px',
                        width:'25%',
                        right:'37.5%',
                        border:'solid',
                        top:'1%',
                        backgroundColor:'rgba(255,255,255,1.0)',

                    }}>


                        <h1 style={{
                            
                            paddingRight: '20px',
                            textAlign:'right',
                            top: '3%',
                            position: 'absolute',
                            right: '10px',
                            width: '100%',
                            fontSize:'1.5vw',
                            color:'#6750A4',

                        }}>افزودن تلرانس</h1>

                        <button onClick={this.show_tolerance_popup} style={{


                            backgroundColor: 'rgba(0,0,0,0)',
                            height: '25%',
                            width: '10%',
                            position: 'absolute',
                            left: '5%',
                            top: '0%',
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
                        
                        <div style={{

                            position:'absolute',
                            height:'5px',
                            width:'90%',
                            right:'5%',
                            top:'30%',
                            borderRadius:'10px',
                            backgroundColor:'#F4EFF4',


                        }}></div>

                        <h3 style={{
                            paddingRight: '20px',
                            textAlign:'right',
                            top: '45%',
                            position: 'absolute',
                            right: '10px',
                            width: '100%',
                            fontSize:'1vw',
                            color:'#6750A4',
                        }}>وزن تلرانس</h3>

                        <input type='text' onChange={this.toleranceChange} placeholder="0.0" style={{


                            position:'absolute',
                            top:'45%',
                            right:'50%',
                            width:'40%',
                            textAlign:'center',
                            fontSize:'1vw'


                        }} />

                        <button onClick={this.submitTolerance} style={{

                            backgroundColor: '#6750A4',
                            color: 'aliceblue',
                            borderRadius: '50px',
                            width:'50%',
                            height:'20%',
                            fontSize:'1vw',
                            left:'25%',
                            bottom:'5%',
                            fontFamily:'Shabnam',
                            position:'absolute',

                        }}>
                            افزودن تلرانس

                        </button>
                    </div>



                )


        } else {

            return(<div></div>)
        }


        
    }


    production_main_level =()=>{
    

        if (this.state.pageLevel === 'Production'){

            return(

                <Fragment>

                    <div style={{

                        position:'absolute',
                        height:'100px',
                        width:'100%',

                    }}>

                        <h1 className="production-main-header">لیست صاحب محصول</h1>
                        
                    </div>

                    <div>


                        <table style={{
                                position:'absolute',
                                width:'80%',
                                height:'1500px',
                                top:'100px',
                                right:'10%',
                                overflow:'scroll'
                    
                                }}>

                                <thead><tr style={{

                                    backgroundColor:'#6750A4',
                                    borderRadius:'25px',
                                    color:'rgb(255,255,255)',
                                    textAlign:'center',
                                    fontSize:'20px',
                                    fontFamily:'Roboto',
                                    height : '80px',
                                    width:'100%',
                                    position:'absolute',
                                    paddingTop:'0',


                                }}>


                                    <td style={{position:'absolute', textAlign:'center',height:'100%', right:'0%' ,width:'25%'}} ><h2 className="tableHead">ردیف</h2></td>
                                    <td style={{position:'absolute',textAlign:'center', width:'25%', right:'25%'}} ><h2 className="tableHead">صاحب بار</h2> </td>
                                    <td style={{position:'absolute',textAlign:'center', right:'50%', width:'25%'}} ><h2 className="tableHead">تعداد راننده</h2> </td>
                                    <td style={{position:'absolute',textAlign:'center', width:'20%', right:'75%'}} ></td>


                                </tr>
                                </thead>
                                

                                {this.production_product_owner_table_Row()}


                        </table>
                            


                    </div>


                </Fragment>

            )


        } else if (this.state.pageLevel === 'PreCold'){


            return(

                <Fragment>
                    <div style={{

                    position:'absolute',
                    height:'100px',
                    width:'100%',

                    }}>

                    <h1 className="production-main-header">لیست موجودی پیش سرد</h1>
                    <button onClick={this.show_tolerance_popup} style={{

                    backgroundColor: '#6750A4',
                    color: 'aliceblue',
                    borderRadius: '50px',
                    width:'10%',
                    height:'75%',
                    fontSize:'1.5vw',
                    left:'10%',
                    fontFamily:'Shabnam',
                    position:'absolute',

                    }}>
                        تلرانس

                    </button>
                    
                    </div>

                    <div>


                        <table style={{
                            position:'absolute',
                            width:'80%',
                            height:'1500px',
                            top:'100px',
                            right:'10%',
                            overflow:'scroll'

                            }}>

                            <thead><tr style={{

                                backgroundColor:'#6750A4',
                                borderRadius:'25px',
                                color:'rgb(255,255,255)',
                                textAlign:'center',
                                fontSize:'20px',
                                fontFamily:'Roboto',
                                height : '80px',
                                width:'100%',
                                position:'absolute',
                                paddingTop:'0',


                            }}>


                                <td style={{position:'absolute', textAlign:'center',height:'100%', right:'0%' ,width:'20%'}} ><h2 className="tableHead">ردیف</h2></td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'20%'}} ><h2 className="tableHead">صاحب بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'40%'}} ><h2 className="tableHead">نوع بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', right:'60%', width:'20%'}} ><h2 className="tableHead">موجودی</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'80%'}} ></td>


                            </tr>
                            </thead>
                            

                            {this.production_pre_cold_table_Row()}
                            {this.tolerance_popup_view()}


                        </table>
                            


                    </div>

                </Fragment>

            )


        } 

        if (this.state.pageLevel === 'FreezTunnel'){


            return(

                <Fragment>
                    <div style={{

                    position:'absolute',
                    height:'100px',
                    width:'100%',

                    }}>

                    <h1 className="production-main-header">لیست موجودی تونل انجماد</h1>

                    <button onClick={this.show_tolerance_popup} style={{

                    backgroundColor: '#6750A4',
                    color: 'aliceblue',
                    borderRadius: '50px',
                    width:'10%',
                    height:'75%',
                    fontSize:'1.5vw',
                    left:'10%',
                    fontFamily:'Shabnam',
                    position:'absolute',

                    }}>
                        تلرانس

                    </button>

                    </div>

                    <div>



                        <table style={{
                            position:'absolute',
                            width:'80%',
                            height:'1500px',
                            top:'100px',
                            right:'10%',
                            overflow:'scroll'

                            }}>

                            <thead><tr style={{

                                backgroundColor:'#6750A4',
                                borderRadius:'25px',
                                color:'rgb(255,255,255)',
                                textAlign:'center',
                                fontSize:'20px',
                                fontFamily:'Roboto',
                                height : '80px',
                                width:'100%',
                                position:'absolute',
                                paddingTop:'0',

                            }}>


                                <td style={{position:'absolute', textAlign:'center',height:'100%', right:'0%' ,width:'20%'}} ><h2 className="tableHead">ردیف</h2></td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'20%'}} ><h2 className="tableHead">صاحب بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'40%'}} ><h2 className="tableHead">نوع بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', right:'60%', width:'20%'}} ><h2 className="tableHead">موجودی</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'80%'}} ></td>


                            </tr>
                            </thead>
                            

                            {this.production_freeze_tunnel_table_Row()}

                            {this.tolerance_popup_view()}

                        </table>
                            


                    </div>

                </Fragment>

            )


        } 

        if (this.state.pageLevel === 'ReturnWeighting'){


            return(

                <Fragment>



                    <div style={{

                    position:'absolute',
                    height:'100px',
                    width:'100%',

                    }}>

                    <h1 className="production-main-header">لیست بارگیری</h1>

                    </div>

                    <div>


                        <table style={{
                            position:'absolute',
                            width:'80%',
                            height:'1500px',
                            top:'100px',
                            right:'10%',
                            overflow:'scroll'

                            }}>

                            <thead><tr style={{

                                backgroundColor:'#6750A4',
                                borderRadius:'25px',
                                color:'rgb(255,255,255)',
                                textAlign:'center',
                                fontSize:'20px',
                                fontFamily:'Roboto',
                                height : '80px',
                                width:'100%',
                                position:'absolute',
                                paddingTop:'0',


                            }}>


                                <td style={{position:'absolute', textAlign:'center',height:'100%', right:'0%' ,width:'20%'}} ><h2 className="tableHead">ردیف</h2></td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'20%'}} ><h2 className="tableHead">صاحب بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'40%'}} ><h2 className="tableHead">نوع بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', right:'60%', width:'20%'}} ><h2 className="tableHead">کل بار(کیلوگرم)</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'80%'}} ></td>


                            </tr>
                            </thead>
                            

                            {this.production_return_weighting_table_Row()}


                        </table>
                        


                    </div>


                </Fragment>

            )


        } 

        if (this.state.pageLevel === 'ReturnSale'){


            return(

                <Fragment>

                    <div style={{

                    position:'absolute',
                    height:'100px',
                    width:'100%',

                    }}>

                    <h1 className="production-main-header">لیست صاحب محصول  (6 روز گذشته)</h1>

                    </div>

                    <div>


                    <table style={{
                            position:'absolute',
                            width:'80%',
                            height:'1500px',
                            top:'100px',
                            right:'10%',
                            overflow:'scroll'

                            }}>

                            <thead><tr style={{

                                backgroundColor:'#6750A4',
                                borderRadius:'25px',
                                color:'rgb(255,255,255)',
                                textAlign:'center',
                                fontSize:'20px',
                                fontFamily:'Roboto',
                                height : '80px',
                                width:'100%',
                                position:'absolute',
                                paddingTop:'0',


                            }}>


                                <td style={{position:'absolute', textAlign:'center',height:'100%', right:'0%' ,width:'25%'}} ><h2 className="tableHead">ردیف</h2></td>
                                <td style={{position:'absolute',textAlign:'center', width:'25%', right:'25%'}} ><h2 className="tableHead">صاحب بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', right:'50%', width:'25%'}} ><h2 className="tableHead">تعداد راننده</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'20%', right:'75%'}} ></td>


                            </tr>
                            </thead>
                            
                            {this.production_return_sale_table_Row()}

                    </table>
                </div>

                </Fragment>

            )


        } 

    }


    production_page =()=>{

        if (this.state.pageState){

            return(
                
                
                <Fragment>
    
                    <ProductionHeader HeaderType={this.state.pageLevel} ChangeHeaderProduction={this.ChangeHeaderProduction} />
                    <div style={{

                        position:'absolute',
                        top:'150px',
                        width:'100%',
                        height:'1600px',
                    }}>
                        {this.production_main_level()}
                    </div>
                </Fragment>
                )

        } else {

            return(
            
                <Fragment>
            
                    <div style={{

                        position:'absolute',
                        top:'50px',
                        width:'100%',
                        height:'1600px',
                    }}>
                        {this.production_level()}
                    </div>

                </Fragment>
            
            )

        }
    }

    ////////////////////// add header button


    reload_page =()=>{

        window.location.reload()

    }

    add_header_back_button = () => {

        console.log()

        if (this.state.pageState === false){

            if (this.state.pageLevel === 'ProductionDetail'){

                return (

                    <div style={{

                        position:'absolute',
                        height:'100px',
                        top:'150px',
                        width:'98%',
                        right:'1%',

                    }}>
                        <h2 style={{

                            position:'absolute',
                            height:'100%',
                            width:'100%',
                            right:'0px',
                            fontSize:'2vw',
                            right:'0%',
                            textAlign:'center',
                            color:'#4A4458',
                            paddingTop:'20px',

                        }} >تولید</h2>

                        
                        <button onClick={this.reload_page} style={{

                            position:'absolute',
                            width:'25%',
                            right:'2.5%',
                            height:'100%',
                            background:'none',
                            border:'none',


                        }}>
                            
                            <img src={BackVector} alt={'this is back icon'} style={{

                                right: '0px',
                                width: '10%',
                                height: '30%',
                                top:'30%',
                                position:'absolute',
                                border:'none',

                            }}/>
                                
                            <h4 style={{

                                position:'absolute',
                                height:'50%',
                                width:'50%',
                                right:'10%',
                                top:'30%',
                                fontSize:'1vw',
                                textAlign:'right',
                                color:'#4A4458',
                                border:'none',

                            }} >بازگشت</h4>        

                        </button>

                    </div>

                )



            } else if (this.state.pageLevel === 'PreColdDetail'){

                    return (
    
                        <div style={{
    
                            position:'absolute',
                            height:'100px',
                            top:'150px',
                            width:'98%',
                            right:'1%',
    
                        }}>
                            <h2 style={{
    
                                position:'absolute',
                                height:'100%',
                                width:'100%',
                                right:'0px',
                                fontSize:'2vw',
                                right:'0%',
                                textAlign:'center',
                                color:'#4A4458',
                                paddingTop:'20px',
    
                            }} >خروج از پیش سرد </h2>
    
                            
                            <button onClick={this.reload_page} style={{
    
                                position:'absolute',
                                width:'25%',
                                right:'2.5%',
                                height:'100%',
                                background:'none',
                                border:'none',
    
    
                            }}>
                                
                                <img src={BackVector} alt={'this is back icon'} style={{
    
                                    right: '0px',
                                    width: '10%',
                                    height: '30%',
                                    top:'30%',
                                    position:'absolute',
                                    border:'none',
    
                                }}/>
                                    
                                <h4 style={{
    
                                    position:'absolute',
                                    height:'50%',
                                    width:'50%',
                                    right:'10%',
                                    top:'30%',
                                    fontSize:'1vw',
                                    textAlign:'right',
                                    color:'#4A4458',
                                    border:'none',
    
                                }} >بازگشت</h4>        
    
                            </button>
    
                        </div>
    
                    )
    
    
    
                } else if (this.state.pageLevel === 'FreezTunnelDetail'){

                    return (
    
                        <div style={{
    
                            position:'absolute',
                            height:'100px',
                            top:'150px',
                            width:'98%',
                            right:'1%',
    
                        }}>
                            <h2 style={{
    
                                position:'absolute',
                                height:'100%',
                                width:'100%',
                                right:'0px',
                                fontSize:'2vw',
                                right:'0%',
                                textAlign:'center',
                                color:'#4A4458',
                                paddingTop:'20px',
    
                            }} >خروج از تونل انجماد </h2>
    
                            
                            <button onClick={this.reload_page} style={{
    
                                position:'absolute',
                                width:'25%',
                                right:'2.5%',
                                height:'100%',
                                background:'none',
                                border:'none',
    
    
                            }}>
                                
                                <img src={BackVector} alt={'this is back icon'} style={{
    
                                    right: '0px',
                                    width: '10%',
                                    height: '30%',
                                    top:'30%',
                                    position:'absolute',
                                    border:'none',
    
                                }}/>
                                    
                                <h4 style={{
    
                                    position:'absolute',
                                    height:'50%',
                                    width:'50%',
                                    right:'10%',
                                    top:'30%',
                                    fontSize:'1vw',
                                    textAlign:'right',
                                    color:'#4A4458',
                                    border:'none',
    
                                }} >بازگشت</h4>        
    
                            </button>
    
                        </div>
    
                    )
    
    
    
                } else if (this.state.pageLevel === 'ReturnWeightingDetail'){

                    return (
    
                        <div style={{
    
                            position:'absolute',
                            height:'100px',
                            top:'150px',
                            width:'98%',
                            right:'1%',
    
                        }}>
                            <h2 style={{
    
                                position:'absolute',
                                height:'100%',
                                width:'100%',
                                right:'0px',
                                fontSize:'2vw',
                                right:'0%',
                                textAlign:'center',
                                color:'#4A4458',
                                paddingTop:'20px',
    
                            }} >برگشت از بارگیری </h2>
    
                            
                            <button onClick={this.reload_page} style={{
    
                                position:'absolute',
                                width:'25%',
                                right:'2.5%',
                                height:'100%',
                                background:'none',
                                border:'none',
    
    
                            }}>
                                
                                <img src={BackVector} alt={'this is back icon'} style={{
    
                                    right: '0px',
                                    width: '10%',
                                    height: '30%',
                                    top:'30%',
                                    position:'absolute',
                                    border:'none',
    
                                }}/>
                                    
                                <h4 style={{
    
                                    position:'absolute',
                                    height:'50%',
                                    width:'50%',
                                    right:'10%',
                                    top:'30%',
                                    fontSize:'1vw',
                                    textAlign:'right',
                                    color:'#4A4458',
                                    border:'none',
    
                                }} >بازگشت</h4>        
    
                            </button>
    
                        </div>
    
                    )
    
    
                } else if (this.state.pageLevel === 'ReturnSaleDetail'){

                    return (
    
                        <div style={{
    
                            position:'absolute',
                            height:'100px',
                            top:'150px',
                            width:'98%',
                            right:'1%',
    
                        }}>
                            <h2 style={{
    
                                position:'absolute',
                                height:'100%',
                                width:'100%',
                                right:'0px',
                                fontSize:'2vw',
                                right:'0%',
                                textAlign:'center',
                                color:'#4A4458',
                                paddingTop:'20px',
    
                            }} >برگشت از فروش</h2>
    
                            
                            <button onClick={this.reload_page} style={{
    
                                position:'absolute',
                                width:'25%',
                                right:'2.5%',
                                height:'100%',
                                background:'none',
                                border:'none',
    
    
                            }}>
                                
                                <img src={BackVector} alt={'this is back icon'} style={{
    
                                    right: '0px',
                                    width: '10%',
                                    height: '30%',
                                    top:'30%',
                                    position:'absolute',
                                    border:'none',
    
                                }}/>
                                    
                                <h4 style={{
    
                                    position:'absolute',
                                    height:'50%',
                                    width:'50%',
                                    right:'10%',
                                    top:'30%',
                                    fontSize:'1vw',
                                    textAlign:'right',
                                    color:'#4A4458',
                                    border:'none',
    
                                }} >بازگشت</h4>        
    
                            </button>
    
                        </div>
    
                    )
    
    
    
                }



        } else {

            return (<div></div>)

        }


    }


    render (){

        const { innerWidth: width, innerHeight: height } = window;

        return(

            <div className="App" style={{

                height:'2000px',
                width:{width},
                background:'rgba(0,0,0,0)',
                overflow:'scroll',

            }} >

                <Header title='تولید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />

                {this.add_header_back_button()}

                <div style={{

                    position:'absolute',
                    height:'2000px',
                    top:'250px',
                    width:'98%',
                    right:'1%',
                    border:'2px solid #E6E1E5',
                    borderRadius:'5px',

                }}>
                    
                    {this.production_page()}
                
                </div>
                {this.rightDashboardActivate()}

            </div>
        )



    }




}


export default withCookies(Production);