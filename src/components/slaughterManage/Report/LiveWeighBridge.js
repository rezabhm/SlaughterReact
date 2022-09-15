import React, {Component, Fragment} from "react";
import RightDashbord from '../Main/Main'
import Header from "../Main/Header";
import Select from "react-select";
import {IPServer} from "../../../data";
import {createBrowserHistory} from "history";
import {withCookies} from "react-cookie";
import ExitIconPOPUP from '../../../Image/slaughter/exit.svg';
import filterIcon from "../../../Image/slaughter/filter.svg";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const history = createBrowserHistory();

class ReportLiveWeighBridge extends Component {

    state = {

        DriverChange : '0',
        productType : 0,
        columnSelect : 0,
        levelType: 0,
        all_live_weighbridge:[],
        show_live_weighbridge:[],
        excelView:false,
        new_driver_popup:false,
        column_show_popup :false,
        filterProductType:'',
        filterDriver:'',
        filterProductOwner:'',
        filterCar:'',
        filterAgriculture:'',
        filterOrderType:'',
        filterSlaughterType:'',
        start_time : 0.0,
        end_time: 0.0,
        product_type_list :[],
        product_owner_list :[],
        driver_list :[],
        car_list :[],
        agriculture_list :[],
        from_year :'',
        from_month :'',
        from_day :'',
        to_year :'',
        to_month :'',
        to_day :'',
        tableWidth : '50%',

        counter_select: true,
        enter_time_select: false,
        exit_time_select: false,
        weighting_time_select: false,
        empty_weighting_time_select: false,
        order_time_select: false,
        weighting_user_select: false,
        empty_user_select: false,
        enter_user_select: false,
        exit_user_select: false,
        buy_price_select: false,
        buy_amount_price_select: false,
        sale_price_select: false,
        sale_weight_select:false,
        agriculture_average_weight_select: false,
        slaughter_average_select: false,
        cage_num_select: false,
        prod_num_in_cage_select: false,
        prod_num_select: false,
        prod_num_minus_losses_select: false,
        prod_num_minus_victim_select: false,
        prod_num_minus_victim_minus_losses_select: false,
        slaughter_count_select: false,
        dif_num_select: false,
        weight_select: false,
        empty_weight_select: false,
        net_weight_select: true,
        net_weight_minus_losses_select: false,
        net_weight_minus_victim_select: false,
        net_weight_minus_victim_minus_losses_select: false,
        source_weight_select: false,
        drop_down_weight_select: false,
        losses_num_select: false,
        losses_weight_select: false,
        victim_num_select: false,
        victim_weight_select: false,
        product_type_select: true,
        order_type_select: false,
        slaughter_type_select: false,
        level_select: false,
        weight_enter_type_select: false,
        empty_weight_enter_type_select: false,
        description_select: false,
        account_side_select: false,
        driver_select: true,
        car_select: true,
        product_owner_select: false,
        agriculture_select: false,
        rent_select: false,
        fuel_select: false,
        rent_type_select: false,
        RightDashbord : false,

    };



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

    redirectReportPrint =()=>{

        history.push('/report/print/live/weighbridge/',{

            all_live_weighbridge:this.state.all_live_weighbridge,
            show_live_weighbridge:this.state.show_live_weighbridge,

            from_year :this.state.from_year,
            from_month :this.state.from_month,
            from_day :this.state.from_day,
            to_year :this.state.to_year,
            to_month :this.state.to_month,
            to_day :this.state.to_day,

            counter_select: this.state.counter_select,
            enter_time_select: this.state.enter_time_select,
            exit_time_select: this.state.exit_time_select,
            weighting_time_select: this.state.weighting_time_select,
            empty_weighting_time_select: this.state.empty_weighting_time_select,
            order_time_select: this.state.order_time_select,
            weighting_user_select: this.state.weighting_user_select,
            empty_user_select: this.state.empty_user_select,
            enter_user_select: this.state.enter_user_select,
            exit_user_select: this.state.exit_user_select,
            buy_price_select: this.state.buy_price_select,
            buy_amount_price_select: this.state.buy_amount_price_select,
            sale_price_select: this.state.sale_price_select,
            sale_weight_select:this.state.sale_weight_select,
            agriculture_average_weight_select: this.state.agriculture_average_weight_select,
            slaughter_average_select: this.state.slaughter_average_select,
            cage_num_select: this.state.cage_num_select,
            prod_num_in_cage_select: this.state.prod_num_in_cage_select,
            prod_num_select: this.state.prod_num_select,
            prod_num_minus_losses_select: this.state.prod_num_minus_losses_select,
            prod_num_minus_victim_select: this.state.prod_num_minus_victim_select,
            prod_num_minus_victim_minus_losses_select: this.state.prod_num_minus_victim_minus_losses_select,
            slaughter_count_select: this.state.slaughter_count_select,
            dif_num_select: this.state.dif_num_select,
            weight_select: this.state.weight_select,
            empty_weight_select: this.state.empty_weight_select,
            net_weight_select: this.state.net_weight_select,
            net_weight_minus_losses_select: this.state.net_weight_minus_losses_select,
            net_weight_minus_victim_select: this.state.net_weight_minus_victim_select,
            net_weight_minus_victim_minus_losses_select: this.state.net_weight_minus_victim_minus_losses_select,
            source_weight_select: this.state.source_weight_select,
            drop_down_weight_select: this.state.drop_down_weight_select,
            losses_num_select: this.state.losses_num_select,
            losses_weight_select: this.state.losses_weight_select,
            victim_num_select: this.state.victim_num_select,
            victim_weight_select: this.state.victim_weight_select,
            product_type_select: this.state.product_type_select,
            order_type_select: this.state.order_type_select,
            slaughter_type_select: this.state.slaughter_type_select,
            level_select: this.state.level_select,
            weight_enter_type_select: this.state.weight_enter_type_select,
            empty_weight_enter_type_select: this.state.empty_weight_enter_type_select,
            description_select: this.state.description_select,
            account_side_select: this.state.account_side_select,
            driver_select: this.state.driver_select,
            car_select: this.state.car_select,
            product_owner_select: this.state.product_owner_select,
            agriculture_select: this.state.agriculture_select,
            rent_select: this.state.rent_select,
            fuel_select: this.state.fuel_select,
            rent_type_select: this.state.rent_type_select,

        })
        window.location.reload();


    }

    handleReportList = (jsonResponse) => {

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                agriculture_list: jsonResponse['agriculture_list'],
                product_owner_list: jsonResponse['product_owner_list'],
                car_list: jsonResponse['car_list'],
                driver_list: jsonResponse['driver_list'],

            })


        }
    }

    constructor(props) {

        super(props);

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),

            })

        } ;

        fetch(IPServer() + '/slaughterManage/report/live/weighbridge/filter/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleReportList(data));

    }

    new_driver =(event)=>{

        this.setState({

            new_driver_popup:!this.state.new_driver_popup,

        })

    };

    deleteDriverResponse =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            const requestJson = {

                method:'POST',
                mod:'core',
                headers: { "Content-type":"application/json;charset=utf-8"},
                body: JSON.stringify({

                    token: this.props.cookies.get('token'),

                })

            }

            fetch(IPServer() + '/slaughterManage/live/driver/list/api/', requestJson)
                .then(data => data.json())
                .then(data => this.handledriverList(data));

            alert(jsonResponse['response']);

        } else {

            alert(jsonResponse['response']);

        }
    }

    deleteDriver =(event)=>{


        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                car_id: event.target.name,

            })

        }

        fetch(IPServer() + '/slaughterManage/live/driver/delete/api/', requestJson)
            .then(data => data.json())
            .then(data => this.deleteDriverResponse(data));

    }

    selectDriver = (event)=>{


        history.push('/new/order/', {

            car_id: event.target.name,
            name:'hello',
        })

        window.location.reload();
    }

    handleTableData =(jsonResponse)=>{


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                all_live_weighbridge : jsonResponse['lwb_list'],
                show_live_weighbridge : jsonResponse['lwb_list'],

            })


        }

    }

    applyFilter =()=>{


        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                from_year: this.state.from_year,
                from_month: this.state.from_month,
                from_day: this.state.from_day,
                to_year : this.state.to_year,
                to_month : this.state.to_month,
                to_day : this.state.to_day,
                product_owner: this.state.filterProductOwner,
                product_type: this.state.filterProductType,
                agriculture: this.state.filterAgriculture,
                driver: this.state.filterDriver,
                car: this.state.filterCar,
                order_type: this.state.filterOrderType,
                slaughter_type: this.state.filterSlaughterType,

            })


        } ;

        fetch(IPServer() + '/slaughterManage/report/live/weighbridge/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleTableData(data));


    }

    selectColumn =()=>{

        this.setState({

            column_show_popup : !this.state.column_show_popup

        })
    }

    selectLwb =(event)=>{


        var car_id = "";
        var lwb_id = "";

        this.state.show_live_weighbridge.map( data => {

            if (data.lwb_id === event.target.name ){

                car_id = data.car_id;
                lwb_id = data.lwb_id;


            }}


        )


        
        history.push('/live/weighbridge/', {

            car_id : car_id,
            lwb_id : lwb_id

        })
        window.location.reload()

    }



    tableRow =() => {
        /*
        *             <div>

                    {() => this.state.show_order.map(data =>

                        <tr key={data.counter} style={{

                            backgroundColor: 'rgba(255,180,255,0.99)' ,
                            borderRadius:'15px',
                            color:'#6750A4',
                            textAlign:'center',
                            fontSize:'16px',
                            fontFamily:'Roboto',
                            height : '56px',
                            width:'100%',
                            position:'absolute',
                            paddingTop:'25px',

                        }}>


                            <td style={{ position:'absolute', right:'0%' ,width:'5%'}} >data.counter</td>
                            <td style={{position:'absolute', right:'5%', width:'15%'}} >data.driver</td>
                            <td style={{position:'absolute', width:'15%', right:'20%'}}>data.car</td>
                            <td style={{position:'absolute', width:'10%', right:'35%'}}>data.product_type</td>
                            <td style={{position:'absolute', width:'15%', right:'45%'}}>data.enter_time</td>
                            <td style={{position:'absolute', width:'15%', right:'60%'}}>data.product_owner</td>
                            <td style={{position:'absolute', width:'10%', right:'75%'}}>data.order_type</td>
                            <td style={{position:'absolute', width:'10%', right:'85%'}}>data.level_str</td>
                            <td style={{position:'absolute', width:'10%', right:'95%'}}><img src={VectorIcon} alt='this is vector icon' /></td>



                        </tr> )}

            </div>

        * */

        var x = 0;
        const y = 15;

        return(

            <tbody>

            {this.state.show_live_weighbridge.map(data =>{


                const background_color = (data.counter % 2 === 0.0) ? 'rgb(255,255,255)' : '#F6EDFF'
                x = x+1;
                const top = (x * y).toString() + '%';


                const style = {


                    borderRadius:'15px',
                    color:'rgb(0,0,0)',
                    textAlign:'center',
                    fontSize:'25px',
                    fontFamily:'Roboto',
                    height : '90px',
                    width:'100%',
                    position:'absolute',
                    top:top,
                    backgroundColor:'rgba(0,0,0,0)',


                }
                const changeDir = IPServer() + '/admin/slaughterManage/liveweighbridge/' + data.lwb_id.toString() +'/change/' ;

                var counter_select= <div style={{display:'none'}}></div>;
                var enter_time_select= <div style={{display:'none'}}></div>;
                var exit_time_select= <div style={{display:'none'}}></div>;
                var weighting_time_select= <div style={{display:'none'}}></div>;
                var empty_weighting_time_select= <div style={{display:'none'}}></div>;
                var order_time_select= <div style={{display:'none'}}></div>;
                var weighting_user_select= <div style={{display:'none'}}></div>;
                var empty_user_select= <div style={{display:'none'}}></div>;
                var enter_user_select= <div style={{display:'none'}}></div>;
                var exit_user_select= <div style={{display:'none'}}></div>;
                var buy_price_select= <div style={{display:'none'}}></div>;
                var buy_amount_price_select= <div style={{display:'none'}}></div>;
                var sale_price_select= <div style={{display:'none'}}></div>;
                var sale_weight_select= <div style={{display:'none'}}></div>;
                var agriculture_average_weight_select=<div style={{display:'none'}}></div>;
                var slaughter_average_select= <div style={{display:'none'}}></div>;
                var cage_num_select= <div style={{display:'none'}}></div>;
                var prod_num_in_cage_select= <div style={{display:'none'}}></div>;
                var prod_num_select= <div style={{display:'none'}}></div>;
                var prod_num_minus_losses_select= <div style={{display:'none'}}></div>;
                var prod_num_minus_victim_select= <div style={{display:'none'}}></div>;
                var prod_num_minus_victim_minus_losses_select= <div style={{display:'none'}}></div>;
                var slaughter_count_select= <div style={{display:'none'}}></div>;
                var dif_num_select= <div style={{display:'none'}}></div>;
                var weight_select= <div style={{display:'none'}}></div>;
                var empty_weight_select= <div style={{display:'none'}}></div>;
                var net_weight_select= <div style={{display:'none'}}></div>;
                var net_weight_minus_losses_select= <div style={{display:'none'}}></div>;
                var net_weight_minus_victim_select= <div style={{display:'none'}}></div>;
                var net_weight_minus_victim_minus_losses_select= <div style={{display:'none'}}></div>;
                var source_weight_select= <div style={{display:'none'}}></div>;
                var drop_down_weight_select= <div style={{display:'none'}}></div>;
                var losses_num_select= <div style={{display:'none'}}></div>;
                var losses_weight_select= <div style={{display:'none'}}></div>;
                var victim_num_select= <div style={{display:'none'}}></div>;
                var victim_weight_select= <div style={{display:'none'}}></div>;
                var product_type_select= <div style={{display:'none'}}></div>;
                var order_type_select= <div style={{display:'none'}}></div>;
                var slaughter_type_select= <div style={{display:'none'}}></div>;
                var level_select= <div style={{display:'none'}}></div>;
                var weight_enter_type_select= <div style={{display:'none'}}></div>;
                var empty_weight_enter_type_select= <div style={{display:'none'}}></div>;
                var description_select= <div style={{display:'none'}}></div>;
                var account_side_select= <div style={{display:'none'}}></div>;
                var driver_select= <div style={{display:'none'}}></div>;
                var car_select= <div style={{display:'none'}}></div>;
                var product_owner_select= <div style={{display:'none'}}></div>;
                var agriculture_select= <div style={{display:'none'}}></div>;
                var rent_select= <div style={{display:'none'}}></div>;
                var fuel_select= <div style={{display:'none'}}></div>;
                var rent_type_select= <div style={{display:'none'}}></div>;

                var counter = 0;


                if(this.state.counter_select){
                    counter_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.counter}</h3></td>
                    counter = counter +1;

                }

                if(this.state.driver_select){
                    driver_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><a href={changeDir}><h3 style={{fontSize:'1vw'}} >{data.driver}</h3></a></td>
                    counter = counter +1;

                }
                if(this.state.car_select){
                    car_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',


                    }}>
                        <button onClick={this.selectLwb} name={data.lwb_id} style={{

                            position:'absolute',
                            width:'100%',
                            height:'75%',
                            direction:'rtl',
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
                            top:'15%',
                            right:'0%'

                        }}>

                        {data.car} </button>


                    </td>
                    counter = counter +1;

                }
                if(this.state.product_type_select){
                    product_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.product_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.weight_select){
                    weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.empty_weight_select){
                    empty_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.empty_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.net_weight_select){
                    net_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.net_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.source_weight_select){
                    source_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.source_weight}</h3></td>
                    counter = counter +1;

                }


                if(this.state.drop_down_weight_select){
                    drop_down_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.drop_down_weight}</h3></td>
                    counter = counter +1;

                }


                if(this.state.agriculture_average_weight_select){
                    agriculture_average_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.agriculture_average_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.slaughter_average_select){
                    slaughter_average_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.slaughter_average}</h3></td>
                    counter = counter +1;

                }

                if(this.state.cage_num_select){
                    cage_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.cage_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.prod_num_in_cage_select){
                    prod_num_in_cage_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.prod_num_in_cage}</h3></td>
                    counter = counter +1;

                }

                if(this.state.prod_num_select){
                    prod_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.prod_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.slaughter_count_select){
                    slaughter_count_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.slaughter_count}</h3></td>
                    counter = counter +1;

                }

                if(this.state.dif_num_select){
                    dif_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.dif_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.losses_num_select){
                    losses_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.losses_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.losses_weight_select){
                    losses_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.losses_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.victim_num_select){
                    victim_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.victim_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.victim_weight_select){
                    victim_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.victim_weight}</h3></td>
                    counter = counter +1;

                }


                if(this.state.prod_num_minus_losses_select){
                    prod_num_minus_losses_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.prod_num_minus_losses}</h3></td>
                    counter = counter +1;

                }

                if(this.state.prod_num_minus_victim_select){
                    prod_num_minus_victim_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.prod_num_minus_victim}</h3></td>
                    counter = counter +1;

                }

                if(this.state.prod_num_minus_victim_minus_losses_select){
                    prod_num_minus_victim_minus_losses_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.prod_num_minus_victim_minus_losses}</h3></td>
                    counter = counter +1;

                }

                if(this.state.net_weight_minus_losses_select){
                    net_weight_minus_losses_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.net_weight_minus_losses}</h3></td>
                    counter = counter +1;
                }

                if(this.state.net_weight_minus_victim_select){
                    net_weight_minus_victim_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.net_weight_minus_victim}</h3></td>
                    counter = counter +1;

                }

                if(this.state.net_weight_minus_victim_minus_losses_select){
                    net_weight_minus_victim_minus_losses_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.net_weight_minus_victim_minus_losses}</h3></td>
                    counter = counter +1;

                }

                if(this.state.account_side_select){
                    account_side_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.account_side}</h3></td>
                    counter = counter +1;

                }
                if(this.state.product_owner_select){
                    product_owner_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.product_owner}</h3></td>
                    counter = counter +1;

                }

                if(this.state.agriculture_select){
                    agriculture_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.agriculture}</h3></td>
                    counter = counter +1;

                }


                if(this.state.buy_price_select){
                    buy_price_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.buy_price}</h3></td>
                    counter = counter +1;

                }

                if(this.state.buy_amount_price_select){
                    buy_amount_price_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.buy_amount_price}</h3></td>
                    counter = counter +1;

                }

                if(this.state.sale_weight_select){
                    sale_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.sale_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.sale_price_select){
                    sale_price_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.sale_price}</h3></td>
                    counter = counter +1;

                }

                if(this.state.order_type_select){
                    order_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.order_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.slaughter_type_select){
                    slaughter_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.slaughter_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.level_select){
                    level_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.level}</h3></td>
                    counter = counter +1;

                }

                if(this.state.weight_enter_type_select){
                    weight_enter_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.weight_enter_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.empty_weight_enter_type_select){
                    empty_weight_enter_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.empty_weight_enter_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.description_select){
                    description_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.description}</h3></td>
                    counter = counter +1;

                }

                if(this.state.fuel_select){
                    fuel_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.fuel}</h3></td>
                    counter = counter +1;

                }

                if(this.state.rent_type_select){
                    rent_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.rent_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.rent_select){
                    rent_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.rent}</h3></td>
                    counter = counter +1;

                }


                if(this.state.enter_time_select){
                    enter_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.enter_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.exit_time_select){
                    exit_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.exit_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.order_time_select){
                    order_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.order_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.weighting_time_select){
                    weighting_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.weighting_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.empty_weighting_time_select){
                    empty_weighting_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        padding:'1.5%',
                        height:'100%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.empty_weighting_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.weighting_user_select){
                    weighting_user_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.weighting_user}</h3></td>
                    counter = counter +1;

                }

                if(this.state.empty_user_select){
                    empty_user_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.empty_user}</h3></td>
                    counter = counter +1;

                }

                if(this.state.enter_user_select){
                    enter_user_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.enter_user}</h3></td>
                    counter = counter +1;

                }

                if(this.state.exit_user_select){
                    exit_user_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        padding:'1.5%',

                    }}><h3 style={{fontSize:'1vw'}} >{data.exit_user}</h3></td>
                    counter = counter +1;

                }

                const width = (counter * 10).toString() + '%';

                const divStyle = {


                    borderRadius:'15px',
                    color:'rgb(0,0,0)',
                    textAlign:'center',
                    fontSize:'25px',
                    fontFamily:'Roboto',
                    height : '90px',
                    width:width,
                    position:'absolute',
                    backgroundColor:background_color,
                    top:'0%',

                }



                return(

                    <tr key={data.counter} style={style}>
                        <div style={divStyle}></div>

                        {counter_select}
                        {enter_time_select}
                        {exit_time_select}
                        {weighting_time_select}
                        {empty_weighting_time_select}
                        {order_time_select}
                        {
                            weighting_user_select
                        }
                        {
                            empty_user_select
                        }
                        {
                            enter_user_select
                        }
                        {
                            exit_user_select
                        }
                        {
                            buy_price_select
                        }
                        {
                            buy_amount_price_select
                        }
                        {
                            sale_price_select
                        }
                        {
                            sale_weight_select
                        }
                        {
                            agriculture_average_weight_select
                        }
                        {
                            slaughter_average_select
                        }
                        {
                            cage_num_select
                        }
                        {
                            prod_num_in_cage_select
                        }
                        {
                            prod_num_select
                        }
                        {
                            prod_num_minus_losses_select
                        }
                        {
                            prod_num_minus_victim_select
                        }
                        {
                            prod_num_minus_victim_minus_losses_select
                        }
                        {
                            slaughter_count_select
                        }
                        {
                            dif_num_select
                        }
                        {
                            weight_select
                        }
                        {
                            empty_weight_select
                        }
                        {
                            net_weight_select
                        }
                        {
                            net_weight_minus_losses_select
                        }
                        {
                            net_weight_minus_victim_select
                        }
                        {
                            net_weight_minus_victim_minus_losses_select
                        }
                        {
                            source_weight_select
                        }
                        {
                            drop_down_weight_select
                        }
                        {
                            losses_num_select
                        }
                        {
                            losses_weight_select
                        }
                        {
                            victim_num_select
                        }
                        {
                            victim_weight_select
                        }
                        {
                            product_type_select
                        }
                        {
                            order_type_select
                        }
                        {
                            slaughter_type_select
                        }
                        {
                            level_select
                        }
                        {
                            weight_enter_type_select
                        }
                        {
                            empty_weight_enter_type_select
                        }
                        {
                            description_select
                        }
                        {
                            account_side_select
                        }
                        {
                            driver_select
                        }
                        {
                            car_select
                        }
                        {
                            product_owner_select
                        }
                        {
                            agriculture_select
                        }
                        {
                            rent_select
                        }
                        {
                            fuel_select
                        }
                        {rent_type_select}


                    </tr>
                )})}



            </tbody>
        )
    }

    downloadExcel =()=>{

        if (this.state.excelView){
            return (

                <div style={{

                    position:'absolute',
                    width:'5%',
                    height:'5%',
                    direction:'rtl',
                    backgroundColor:'rgb(255,255,255)',
                    color:'#6750A4',
                    borderColor:'#6750A4',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px 24px 10px 16px',
                    gap: '8px',
                    fontSize:'25px',
                    top:'100%',
                    left:'5%'


                }}>

                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        table="table-to-xls"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="دریافت اکسل"  />

                </div>

            )
        } else {
            return (<div style={{display:'none'}}></div>)
        }


    }

    excelActive = () =>{

        this.setState({

            excelView : !this.state.excelView,

        })

    }



    filterProductType = (event) =>{

        this.setState({

            filterProductType:event.value,

        })

    }

    filterProductOwner = (event) =>{
        this.setState({

            filterProductOwner:event.value,

        })

    }

    filterAgriculture = (event) =>{
        this.setState({

            filterAgriculture:event.value,

        })

    }
    filterOrderType = (event) =>{
        this.setState({

            filterOrderType:event.value,

        })

    }
    filterSlaughterType = (event) =>{
        this.setState({

            filterSlaughterType:event.value,

        })

    }

    filterDriver = (event) =>{
        this.setState({

            filterDriver:event.value,

        })

    }

    filterCar = (event) =>{

        this.setState({

            filterCar:event.value,

        })

    }


    filterPOPUP =()=>{

        const productList = [

            {value:'', label:'همه'},
            {value:'c', label:'مرغ'},
            {value:'t', label:'بوقلمون'},
            {value:'q', label:'بلدرچین'},

        ]

        const slaughter_type_list = [

            {value:'', label:'همه'},
            {value:'ss', label:'تحویلی کشتارگاه'},
            {value:'pd', label:'درب مرغداری'},

        ]

        const order_type_list = [

            {value:'', label:'همه'},
            {value:'c', label:'شرکتی'},
            {value:'cb', label:'حق العملی (خرید توسط شرکت)'},
            {value:'pob', label:'حق العملی (خرید توسط صاحب محصول)'},

        ]

        if(this.state.new_driver_popup){


            return(

                <div style={{

                    position:'absolute',
                    top:'0%',
                    right:'30%',
                    borderRadius:'20px',
                    border:'5px solid #6750A4' ,
                    width:'35%',
                    height:'95%',
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
                        fontSize: '14px',
                        lineHeight: '28px',
                        borderBottom:' 2px solid #E6E1E5 ',

                    }}>

                        <h1 style={{paddingRight:'20px',top:'6%',position:'absolute',  right:'10px', width:'50%', fontSize:'1.5vw' }}>فیلتر</h1>

                        <button onClick={this.new_driver} style={{

                            backgroundColor: 'rgba(0,0,0,0)',
                            height: '5%',
                            width: '5%',
                            position:'absolute',
                            left:'0%',
                            top: '0%',
                            fontSize:'1.5vw',
                            margin: '10%',
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
                        right:'0%',
                        top:'20%',
                        color:'#484649',
                        textAlign:'right',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize:'1vw',
                        lineHeight: '28px',
                        borderBottom:' 2px solid #E6E1E5 ',


                    }}>



                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'16%',
                            fontSize:'1vw',
                            textAlign:'center',


                        }}>
                            <h4 style={{textAlign:'right' , fontSize:'1vw' }} >نوع بار</h4>
                            <Select  options={productList} placeholder='نوع بار'  defaultvalue={this.state.filterProductType} onChange={this.filterProductType} style={{fontSize:'1vw'}} />
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'27%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}><h4 style={{textAlign:'right', fontSize:'1vw'}} >راننده</h4>
                            <Select  options={this.state.driver_list} placeholder='راننده'  defaultvalue={this.state.filterDriver} onChange={this.filterDriver} style={{fontSize:'1vw'}} />
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'37%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}><h4 style={{textAlign:'right', fontSize:'1vw'}} >ماشین</h4>
                            <Select  options={this.state.car_list} placeholder='ماشین'  defaultvalue={this.state.filterCar} onChange={this.filterCar} style={{fontSize:'1vw'}} />
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'49%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}><h4 style={{textAlign:'right', fontSize:'1vw' }} >صاحب محصول</h4>
                            <Select  options={this.state.product_owner_list} placeholder='صاحب محصول'  defaultvalue={this.state.filterProductOwner} onChange={this.filterProductOwner} style={{fontSize:'1vw'}} />
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'61%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}><h4 style={{textAlign:'right' , fontSize:'1vw' }} >مرغداری</h4>
                            <Select  options={this.state.agriculture_list} placeholder='مرغداری'  defaultvalue={this.state.filterAgriculture} onChange={this.filterAgriculture} style={{fontSize:'1vw'}} />
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'73%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}><h4 style={{textAlign:'right', fontSize:'1vw'}} >نوع سفارش</h4>
                            <Select  options={order_type_list} placeholder='نوع سفارش'  defaultvalue={this.state.filterOrderType} onChange={this.filterOrderType} style={{fontSize:'1vw'}} />
                        </div>

                        <div style={{

                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'85%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}><h4 style={{textAlign:'right', fontSize:'1vw'}} >نوع کشتار</h4>
                            <Select  options={slaughter_type_list} placeholder='نوع کشتار'  defaultvalue={this.state.filterSlaughterType} onChange={this.filterSlaughterType} style={{fontSize:'1vw'}} />
                        </div>

                    </div>

                </div>


            )

        }else{
            return (<div style={{display:'none'}}></div>)
        }


    }


    enterTimeCheckBox=(event)=>{

        this.setState({

            enter_time_select : !this.state.enter_time_select

        })
    }

    exitTimeCheckBox=(event)=>{

        this.setState({

            exit_time_select : !this.state.exit_time_select

        })
    }

    weightingTimeCheckBox=(event)=>{

        this.setState({

            weighting_time_select : !this.state.weighting_time_select

        })
    }

    emptyWeightTimeCheckBox=(event)=>{

        this.setState({

            empty_weight_time_select : !this.state.empty_weight_select

        })
    }

    orderTimeCheckBox=(event)=>{

        this.setState({

            order_time_select : !this.state.order_time_select

        })
    }

    weightingUserCheckBox=(event)=>{

        this.setState({

            weighting_user_select : !this.state.weighting_user_select

        })
    }

    emptyUserCheckBox=(event)=>{

        this.setState({

            empty_user_select : !this.state.empty_user_select

        })
    }

    enterUserCheckBox=(event)=>{

        this.setState({

            enter_user_select : !this.state.enter_user_select

        })
    }

    exitUserCheckBox=(event)=>{

        this.setState({

            exit_user_select : !this.state.exit_user_select

        })
    }

    buyPriceCheckBox=(event)=>{

        this.setState({

            buy_price_select : !this.state.buy_price_select

        })
    }

    buyAmountPriceCheckBox=(event)=>{

        this.setState({

            buy_amount_price_select : !this.state.buy_amount_price_select

        })
    }

    salePriceCheckBox=(event)=>{

        this.setState({

            sale_price: !this.state.sale_price_select

        })
    }

    saleWeightCheckBox=(event)=>{

        this.setState({

            sale_weight_select : !this.state.sale_weight_select

        })
    }

    agricultureAVGWeightCheckBox=(event)=>{

        this.setState({

            agriculture_average_weight_select : !this.state.agriculture_average_weight_select

        })
    }

    slaughterAVGCheckBox=(event)=>{

        this.setState({

            slaughter_average_select : !this.state.slaughter_average_select

        })
    }

    cageNumCheckBox=(event)=>{

        this.setState({

            cage_num_select : !this.state.cage_num_select

        })
    }


    prodNumInCageCheckBox=(event)=>{

        this.setState({

            prod_num_in_cage_select : !this.state.prod_num_in_cage_select

        })
    }

    prodNumCheckBox=(event)=>{

        this.setState({

            prod_num_select : !this.state.prod_num_select

        })
    }

    prodMLossesCheckBox=(event)=>{

        this.setState({

            prod_num_minus_losses_select : !this.state.prod_num_minus_losses_select

        })
    }

    prodMVictimCheckBox=(event)=>{

        this.setState({

            prod_num_minus_victim_select : !this.state.prod_num_minus_victim_select

        })
    }

    prodMVictimMLossesCheckBox=(event)=>{

        this.setState({

            prod_num_minus_victim_minus_losses_select : !this.state.prod_num_minus_victim_minus_losses_select

        })
    }

    slaughterCountCheckBox=(event)=>{

        this.setState({

            slaughter_count_select : !this.state.slaughter_count_select

        })
    }

    difNumCheckBox=(event)=>{

        this.setState({

            dif_num_select : !this.state.dif_num_select

        })
    }

    weightCheckBox=(event)=>{

        this.setState({

            weight_select : !this.state.weight_select

        })
    }

    emptyWeightCheckBox=(event)=>{

        this.setState({

            empty_weight_select : !this.state.empty_weight_select

        })
    }

    netWeightCheckBox=(event)=>{

        this.setState({

            net_weight_select : !this.state.net_weight_select

        })
    }

    netWMLossesCheckBox=(event)=>{

        this.setState({

            net_weight_minus_losses_select : !this.state.net_weight_minus_losses_select

        })
    }

    netWMVictimCheckBox=(event)=>{

        this.setState({

            net_weight_minus_victim_select : !this.state.net_weight_minus_victim_select

        })
    }

    netWMVictimMLossesCheckBox=(event)=>{

        this.setState({

            net_weight_minus_victim_minus_losses_select : !this.state.net_weight_minus_victim_minus_losses_select

        })
    }

    sourceWeightCheckBox=(event)=>{

        this.setState({

            source_weight_select : !this.state.source_weight_select

        })
    }

    dropDownWeightCheckBox=(event)=>{

        this.setState({

            drop_down_weight_select : !this.state.drop_down_weight_select

        })
    }

    lossesNumCheckBox=(event)=>{

        this.setState({

            losses_num_select : !this.state.losses_num_select

        })
    }

    lossesWeightCheckBox=(event)=>{

        this.setState({

            losses_weight_select : !this.state.losses_weight_select

        })
    }

    victimNumCheckBox=(event)=>{

        this.setState({

            victim_num_select : !this.state.victim_num_select

        })
    }

    victimWeightCheckBox=(event)=>{

        this.setState({

            victim_weight_select : !this.state.victim_weight_select

        })
    }

    orderTypeCheckBox=(event)=>{

        this.setState({

            order_type_select : !this.state.order_type_select

        })
    }


    slaughterTypeCheckBox=(event)=>{

        this.setState({

            slaughter_type_select : !this.state.slaughter_type_select

        })
    }

    levelCheckBox=(event)=>{

        this.setState({

            level_select : !this.state.level_select

        })
    }

    weightEnterTypeCheckBox=(event)=>{

        this.setState({

            weight_enter_type_select : !this.state.weight_enter_type_select

        })
    }

    emptyWeightEnterTypeCheckBox=(event)=>{

        this.setState({

            empty_weight_enter_type_select : !this.state.empty_weight_enter_type_select

        })
    }

    descriptionCheckBox=(event)=>{

        this.setState({

            description_select : !this.state.description_select

        })
    }

    accountSideCheckBox=(event)=>{

        this.setState({

            account_side_select : !this.state.account_side_select

        })
    }

    productOwnerCheckBox=(event)=>{

        this.setState({

            product_owner_select : !this.state.product_owner_select

        })
    }

    agricultureCheckBox=(event)=>{

        this.setState({

            agriculture_select : !this.state.agriculture_select

        })
    }

    rentCheckBox=(event)=>{

        this.setState({

            rent_select : !this.state.rent_select

        })
    }

    fuelCheckBox=(event)=>{

        this.setState({

            fuel_select : !this.state.fuel_select

        })
    }

    rentTypeCheckBox=(event)=>{

        this.setState({

            rent_type_select : !this.state.rent_type_select

        })
    }


    columnPOPUP =()=>{

        if(this.state.column_show_popup){

            return(

                <div style={{

                    position:'absolute',
                    top:'13%',
                    right:'61%',
                    borderRadius:'20px',
                    border:'5px solid #6750A4' ,
                    width:'25%',
                    height:'95%',
                    backgroundColor:'rgba(255,255.0,255.0,1.0)',
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

                        <h1 style={{paddingRight:'20px',top:'6%',position:'absolute',  right:'10px', width:'50%', fontSize:'1.5vw'}}>فیلتر</h1>

                        <button onClick={this.selectColumn} style={{

                            backgroundColor: 'rgba(0,0,0,0)',
                            height: '5%',
                            width: '5%',
                            position:'absolute',
                            left:'0%',
                            top: '0%',
                            fontSize:'24px',
                            margin: '10%',
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
                        right:'0%',
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
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'20%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox'  onChange={this.enterTimeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>زمان ورود</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'27%',
                            fontSize:'1vw',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.exitTimeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>زمان خروج</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'34%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.weightingTimeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>زمان وزن کشی</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'41%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.emptyWeightTimeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>زمان کشی خالی</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'48%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.orderTimeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>زمان ثبت سفارش</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'55%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.weightingUserCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>کاربر ثبت وزن کشی</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'63%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.emptyUserCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>کاربر ثبت وزن خالی</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'70%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.enterUserCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>کاربر ثبت وزن ورود</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'77%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.exitUserCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>کاربر ثیت زمان خروج</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'84%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.buyPriceCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>قیمت خرید</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'91%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.buyAmountPriceCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>قیمت کل خرید</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'98%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.salePriceCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>قیمت قروش</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'105%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.saleWeightCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن پرکنده</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'112%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.agricultureAVGWeightCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن میانگین مرغداری</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'119%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.slaughterAVGCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن میانگین کشتارگاه</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'126%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.cageNumCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>تعداد قفس</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'134%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.prodNumInCageCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>تعداد مرغ در قفس</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'141%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.prodNumCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>تعداد کل</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'148%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.prodMLossesCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>تعداد با کسر ضایعات</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'155%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.prodMVictimCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{

                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>تعداد با کسر تلفات</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'162%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.prodMVictimMLossesCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>تعداد با کسر ضایعات و تلفات</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'168%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.slaughterCountCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>شمارش کشتار</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'175%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.difNumCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>اختلاف شمارش</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'182%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.weightCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن پر</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'189%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.emptyWeightCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن خالی</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'196%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.netWeightCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن خالص</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'203%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.netWMLossesCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن خالص با کسر ضایعات</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'210%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.netWMVictimCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن خالص با کسر تلفات</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'217%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.netWMVictimMLossesCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن خالص با کسر ضابعات و تلفات</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'224%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.sourceWeightCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن مرغداری</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'231%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.dropDownWeightCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>افت راهی</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'238%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.lossesNumCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>تعداد ضایعات</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'245%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.lossesWeightCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن ضایعات</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'252%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.victimNumCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>تعداد تلفات</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'259%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.victimWeightCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وزن تلفات</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'266%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.orderTypeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>نوع سفارش</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'273%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.slaughterTypeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>نوع کشتار</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'280%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.levelCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>وضعیت سفارش</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'287%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.weightEnterTypeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>نوع ثبت وزن پر</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'294%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.emptyWeightEnterTypeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>نوع ثبت وزن خالی</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'301%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.descriptionCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>توضیحات</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'308%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.accountSideCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>طرف حساب</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'315%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.productOwnerCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>صاحب محصول</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'322%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.agricultureCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>مرغداری</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'329%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.rentCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>کرایه</span>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'336%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.rentTypeCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>نوع کرایه</span>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'90%',
                            height:'10%',
                            right:'5%',
                            top:'343%',
                            fontSize:'20px',
                            textAlign:'center',


                        }}>

                            <input type='checkbox' onChange={this.fuelCheckBox} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'50%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'25px',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'35%',
                                top:'5%',
                                fontSize:'1vw',

                            }}>سوخت</span>





                        </div>

                    </div>
                </div>


            )

        }else{
            return (<div style={{display:'none'}}></div>)
        }


    }


    from_yearChange =(event)=>{

        this.setState({
            from_year:event.target.value
        })

    }

    from_monthChange =(event)=>{

        this.setState({
            from_month:event.target.value
        })

    }

    from_dayChange =(event)=>{

        this.setState({
            from_day:event.target.value
        })

    }

    to_yearChange =(event)=>{

        this.setState({
            to_year:event.target.value
        })

    }

    to_monthChange =(event)=>{

        this.setState({
            to_month:event.target.value
        })

    }

    to_dayChange =(event)=>{

        this.setState({
            to_day:event.target.value
        })

    }

    tableHead =()=>{


        var counter_select= <div style={{display:'none'}}></div>;
        var enter_time_select= <div style={{display:'none'}}></div>;
        var exit_time_select= <div style={{display:'none'}}></div>;
        var weighting_time_select= <div style={{display:'none'}}></div>;
        var empty_weighting_time_select= <div style={{display:'none'}}></div>;
        var order_time_select= <div style={{display:'none'}}></div>;
        var weighting_user_select= <div style={{display:'none'}}></div>;
        var empty_user_select= <div style={{display:'none'}}></div>;
        var enter_user_select= <div style={{display:'none'}}></div>;
        var exit_user_select= <div style={{display:'none'}}></div>;
        var buy_price_select= <div style={{display:'none'}}></div>;
        var buy_amount_price_select= <div style={{display:'none'}}></div>;
        var sale_price_select= <div style={{display:'none'}}></div>;
        var sale_weight_select= <div style={{display:'none'}}></div>;
        var agriculture_average_weight_select=<div style={{display:'none'}}></div>;
        var slaughter_average_select= <div style={{display:'none'}}></div>;
        var cage_num_select= <div style={{display:'none'}}></div>;
        var prod_num_in_cage_select= <div style={{display:'none'}}></div>;
        var prod_num_select= <div style={{display:'none'}}></div>;
        var prod_num_minus_losses_select= <div style={{display:'none'}}></div>;
        var prod_num_minus_victim_select= <div style={{display:'none'}}></div>;
        var prod_num_minus_victim_minus_losses_select= <div style={{display:'none'}}></div>;
        var slaughter_count_select= <div style={{display:'none'}}></div>;
        var dif_num_select= <div style={{display:'none'}}></div>;
        var weight_select= <div style={{display:'none'}}></div>;
        var empty_weight_select= <div style={{display:'none'}}></div>;
        var net_weight_select= <div style={{display:'none'}}></div>;
        var net_weight_minus_losses_select= <div style={{display:'none'}}></div>;
        var net_weight_minus_victim_select= <div style={{display:'none'}}></div>;
        var net_weight_minus_victim_minus_losses_select= <div style={{display:'none'}}></div>;
        var source_weight_select= <div style={{display:'none'}}></div>;
        var drop_down_weight_select= <div style={{display:'none'}}></div>;
        var losses_num_select= <div style={{display:'none'}}></div>;
        var losses_weight_select= <div style={{display:'none'}}></div>;
        var victim_num_select= <div style={{display:'none'}}></div>;
        var victim_weight_select= <div style={{display:'none'}}></div>;
        var product_type_select= <div style={{display:'none'}}></div>;
        var order_type_select= <div style={{display:'none'}}></div>;
        var slaughter_type_select= <div style={{display:'none'}}></div>;
        var level_select= <div style={{display:'none'}}></div>;
        var weight_enter_type_select= <div style={{display:'none'}}></div>;
        var empty_weight_enter_type_select= <div style={{display:'none'}}></div>;
        var description_select= <div style={{display:'none'}}></div>;
        var account_side_select= <div style={{display:'none'}}></div>;
        var driver_select= <div style={{display:'none'}}></div>;
        var car_select= <div style={{display:'none'}}></div>;
        var product_owner_select= <div style={{display:'none'}}></div>;
        var agriculture_select= <div style={{display:'none'}}></div>;
        var rent_select= <div style={{display:'none'}}></div>;
        var fuel_select= <div style={{display:'none'}}></div>;
        var rent_type_select= <div style={{display:'none'}}></div>;

        var counter = 0;

        if(this.state.counter_select){
            counter_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                fontSize:'2vw'

            }}><h2 style={{fontSize:'1.25vw'}} >ردیف</h2></td>
            counter = counter +1;

        }

        if(this.state.driver_select){
            driver_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2  style={{fontSize:'1.25vw'}} >راننده</h2></td>
            counter = counter +1;

        }
        if(this.state.car_select){
            car_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >ماشین</h2></td>
            counter = counter +1;

        }
        if(this.state.product_type_select){
            product_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.5vw'}} >نوع محصول</h2></td>
            counter = counter +1;

        }

        if(this.state.weight_select){
            weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن پر</h2></td>
            counter = counter +1;

        }

        if(this.state.empty_weight_select){
            empty_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن خالی</h2></td>
            counter = counter +1;

        }

        if(this.state.net_weight_select){
            net_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن خالص</h2></td>
            counter = counter +1;

        }

        if(this.state.source_weight_select){
            source_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن مبدا</h2></td>
            counter = counter +1;

        }


        if(this.state.drop_down_weight_select){
            drop_down_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >افت</h2></td>
            counter = counter +1;

        }


        if(this.state.agriculture_average_weight_select){
            agriculture_average_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن میانگین مرغداری</h2></td>
            counter = counter +1;

        }

        if(this.state.slaughter_average_select){
            slaughter_average_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن میانگین کشتارگاه</h2></td>
            counter = counter +1;

        }

        if(this.state.cage_num_select){
            cage_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >تعداد قفس</h2></td>
            counter = counter +1;

        }

        if(this.state.prod_num_in_cage_select){
            prod_num_in_cage_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >تعداد محصول در قفس</h2></td>
            counter = counter +1;

        }

        if(this.state.prod_num_select){
            prod_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >تعداد کل</h2></td>
            counter = counter +1;

        }

        if(this.state.slaughter_count_select){
            slaughter_count_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >شمارش کشتارگاه</h2></td>
            counter = counter +1;

        }

        if(this.state.dif_num_select){
            dif_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >اختلاف شمارش</h2></td>
            counter = counter +1;

        }

        if(this.state.losses_num_select){
            losses_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >تعداد ضایعات</h2></td>
            counter = counter +1;

        }

        if(this.state.losses_weight_select){
            losses_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن ضابعات</h2></td>
            counter = counter +1;

        }

        if(this.state.victim_num_select){
            victim_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}}  >تعداد تلفات</h2></td>
            counter = counter +1;

        }

        if(this.state.victim_weight_select){
            victim_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن تلفات</h2></td>
            counter = counter +1;

        }


        if(this.state.prod_num_minus_losses_select){
            prod_num_minus_losses_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >تعداد با کسر ضابعات</h2></td>
            counter = counter +1;

        }

        if(this.state.prod_num_minus_victim_select){
            prod_num_minus_victim_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >تعداد با کسر نلفات</h2></td>
            counter = counter +1;

        }

        if(this.state.prod_num_minus_victim_minus_losses_select){
            prod_num_minus_victim_minus_losses_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >تعداد با کسر ضایعات و تلفات</h2></td>
            counter = counter +1;

        }

        if(this.state.net_weight_minus_losses_select){
            net_weight_minus_losses_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن خالص با کسر ضایعات</h2></td>
            counter = counter +1;
        }

        if(this.state.net_weight_minus_victim_select){
            net_weight_minus_victim_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن خالص با کسر تلفات</h2></td>
            counter = counter +1;

        }

        if(this.state.net_weight_minus_victim_minus_losses_select){
            net_weight_minus_victim_minus_losses_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن خالص با کسر تلفات و ضایعات</h2></td>
            counter = counter +1;

        }

        if(this.state.account_side_select){
            account_side_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >طرف حساب</h2></td>
            counter = counter +1;

        }
        if(this.state.product_owner_select){
            product_owner_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >صاحب محصول</h2></td>
            counter = counter +1;

        }

        if(this.state.agriculture_select){
            agriculture_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >مرغداری</h2></td>
            counter = counter +1;

        }


        if(this.state.buy_price_select){
            buy_price_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >قبمت خرید</h2></td>
            counter = counter +1;

        }

        if(this.state.buy_amount_price_select){
            buy_amount_price_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >قیمت کل خرید</h2></td>
            counter = counter +1;

        }

        if(this.state.sale_weight_select){
            sale_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >وزن پرکنده</h2></td>
            counter = counter +1;

        }

        if(this.state.sale_price_select){
            sale_price_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >قیمت فروش</h2></td>
            counter = counter +1;

        }

        if(this.state.order_type_select){
            order_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >نوع سفارش</h2></td>
            counter = counter +1;

        }

        if(this.state.slaughter_type_select){
            slaughter_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}}  >نوع کشتار</h2></td>
            counter = counter +1;

        }

        if(this.state.level_select){
            level_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}}  >وضعبت سفارش</h2></td>
            counter = counter +1;

        }

        if(this.state.weight_enter_type_select){
            weight_enter_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >نوع ورود وزن پر</h2></td>
            counter = counter +1;

        }

        if(this.state.empty_weight_enter_type_select){
            empty_weight_enter_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >نوع ورود وزن خالی</h2></td>
            counter = counter +1;

        }

        if(this.state.description_select){
            description_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >توضیحات</h2></td>
            counter = counter +1;

        }

        if(this.state.fuel_select){
            fuel_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >سوخت</h2></td>
            counter = counter +1;

        }

        if(this.state.rent_type_select){
            rent_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >نوع کرایه</h2></td>
            counter = counter +1;

        }

        if(this.state.rent_select){
            rent_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >کرایه</h2></td>
            counter = counter +1;

        }


        if(this.state.enter_time_select){
            enter_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >زمان ورود</h2></td>
            counter = counter +1;

        }

        if(this.state.exit_time_select){
            exit_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >زمان خروج</h2></td>
            counter = counter +1;

        }

        if(this.state.order_time_select){
            order_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >زمان ثبت سفارش</h2></td>
            counter = counter +1;

        }

        if(this.state.weighting_time_select){
            weighting_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >زمان وزن کشی پر</h2></td>
            counter = counter +1;

        }

        if(this.state.empty_weighting_time_select){
            empty_weighting_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >زمان وزن کشی خالی</h2></td>
            counter = counter +1;

        }

        if(this.state.weighting_user_select){
            weighting_user_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >کاربر وزن کشی پر</h2></td>
            counter = counter +1;

        }

        if(this.state.empty_user_select){
            empty_user_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >کاربر وزن کشی خالی</h2></td>
            counter = counter +1;

        }

        if(this.state.enter_user_select){
            enter_user_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >کاربر ثبت زمان ورود به کشتارگاه</h2></td>
            counter = counter +1;

        }

        if(this.state.exit_user_select){
            exit_user_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',

            }}><h2 style={{fontSize:'1.25vw'}} >کاربر ثبت زمان خروج از کشتارگاه</h2></td>
            counter = counter +1;

        }


        const width = (counter * 10).toString() + '%';


        return(
        <Fragment>
        <div  style={{

            backgroundColor:'rgb(103,80,164)',
            borderRadius:'25px',
            color:'rgb(0,255,0)',
            textAlign:'center',
            fontSize:'20px',
            fontFamily:'Roboto',
            height : '80px',
            width:width,
            position:'absolute',
            paddingTop:'40px',

        }}>


        </div>
        <tr style={{

            backgroundColor:'rgba(0,0,0,0)',
            borderRadius:'25px',
            color:'rgb(255,255,255)',
            textAlign:'center',
            fontSize:'20px',
            fontFamily:'Roboto',
            height : '80px',
            width:'100%',
            position:'absolute',
            paddingTop:'40px',

        }}>


            {counter_select}
        {enter_time_select}
        {exit_time_select}
        {weighting_time_select}
        {empty_weighting_time_select}
        {order_time_select}
        {
            weighting_user_select
        }
        {
            empty_user_select
        }
        {
            enter_user_select
        }
        {
            exit_user_select
        }
        {
            buy_price_select
        }
        {
            buy_amount_price_select
        }
        {
            sale_price_select
        }
        {
            sale_weight_select
        }
        {
            agriculture_average_weight_select
        }
        {
            slaughter_average_select
        }
        {
            cage_num_select
        }
        {
            prod_num_in_cage_select
        }
        {
            prod_num_select
        }
        {
            prod_num_minus_losses_select
        }
        {
            prod_num_minus_victim_select
        }
        {
            prod_num_minus_victim_minus_losses_select
        }
        {
            slaughter_count_select
        }
        {
            dif_num_select
        }
        {
            weight_select
        }
        {
            empty_weight_select
        }
        {
            net_weight_select
        }
        {
            net_weight_minus_losses_select
        }
        {
            net_weight_minus_victim_select
        }
        {
            net_weight_minus_victim_minus_losses_select
        }
        {
            source_weight_select
        }
        {
            drop_down_weight_select
        }
        {
            losses_num_select
        }
        {
            losses_weight_select
        }
        {
            victim_num_select
        }
        {
            victim_weight_select
        }
        {
            product_type_select
        }
        {
            order_type_select
        }
        {
            slaughter_type_select
        }
        {
            level_select
        }
        {
            weight_enter_type_select
        }
        {
            empty_weight_enter_type_select
        }
        {
            description_select
        }
        {
            account_side_select
        }
        {
            driver_select
        }
        {
            car_select
        }
        {
            product_owner_select
        }
        {
            agriculture_select
        }
        {
            rent_select
        }
        {
            fuel_select
        }
        {rent_type_select}
            </tr>

        </Fragment>


    )

    }


    ReportList =()=>{



        return(

            <div style={{

                border: '1px solid #E6E1E5',
                position:'absolute',
                height:'89%',
                width:'98%',
                top:'15%',
                right:'1%',
                marginTop:'1%',
                borderRadius:'50px',

            }} >

                <div style={{

                    position:'absolute',
                    width:'100%',
                    height:'10%',
                    borderBottom:'1px solid #E6E1E5',

                }}>

                    <h2 style={{

                        position: 'absolute',
                        width: '15%',
                        height: '10%',
                        right: '1%',
                        top: '30%',

                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '1.5vw',
                        lineHeight: '36px',

                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'right',

                        color: '#6750A4',

                    }} >باسکول زنده</h2>



                    <button onClick={this.excelActive} style={{

                        position:'absolute',
                        width:'10%',
                        height:'50%',
                        direction:'rtl',
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
                        top:'30%',
                        left:'5%'

                    }}   >دریافت اکسل</button>


                    <button onClick={this.redirectReportPrint} style={{

                        position:'absolute',
                        width:'10%',
                        height:'50%',
                        direction:'rtl',
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
                        top:'30%',
                        left:'16%'

                    }}   >دریافت پرینت</button>


                </div>



                <div style={{

                    position:'absolute',
                    width:'100%',
                    height:'90%',
                    top:'10%',
                    right:'0px',

                }}>

                    <div style={{

                        position:'absolute',
                        width:'100%',
                        height:'10%',

                    }}>


                        <button onClick={this.new_driver} style={{

                            position:'absolute',
                            width:'15%',
                            height:'80%',
                            direction:'rtl',
                            borderRadius:'100px',
                            backgroundColor:'#6750A4',
                            color:'rgb(255,255,255)',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px 5px 10px 16px',
                            gap: '8px',
                            fontSize:'25px',
                            top:'50%',
                            right:'5%'

                        }}   >
                            <img src={filterIcon} alt={'this is car icon'} style={{

                                right:'0px',
                                width:'10%',
                                height:'40%',
                                direction:'ltr',

                            }}/>
                            <h4 style={{fontSize:'1.25vw'}}>
                            فیلتر
                            </h4></button>





                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'20%',
                            height:'100%',
                            right:'21%',
                            top:'10%',
                            fontSize:'20px',
                            textAlign:'center',

                        }}>

                            <h4 style={{ fontSize:'1vw', textAlign:'center', display:'inline', position:'absolute',right:'0%', top:'50%'}} >از :</h4>

                            <input type='text' onChange={this.from_dayChange} style={{

                                position:'absolute',
                                width:'15%',
                                top:'50%',
                                left:'75%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'1vw',


                            }}/>

                            <h1 style={{fontSize:'1vw', textAlign:'right', display:'inline', position:'absolute',left:'70%', top:'60%'}} >/</h1>

                            <input type='text' onChange={this.from_monthChange} style={{

                                position:'absolute',
                                width:'15%',
                                top:'50%',
                                left:'50%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'1vw',



                            }}/>

                            <h1 style={{ fontSize:'1vw', textAlign:'right', display:'inline', position:'absolute',left:'45%', top:'60%'}} >/</h1>

                            <input type='text' onChange={this.from_yearChange} style={{

                                position:'absolute',
                                width:'40%',
                                top:'50%',
                                left:'0%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'1vw',


                            }}/>


                        </div>





                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'20%',
                            height:'100%',
                            right:'43%',
                            top:'10%',
                            fontSize:'20px',
                            textAlign:'center',

                        }}>

                            <h4 style={{ fontSize:'1vw', textAlign:'center', display:'inline', position:'absolute',right:'0%', top:'50%'}} >تا :</h4>

                            <input type='text' onChange={this.to_dayChange} style={{

                                position:'absolute',
                                width:'15%',
                                top:'50%',
                                left:'75%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'1vw',


                            }}/>

                            <h1 style={{ fontSize:'1vw', textAlign:'right', display:'inline', position:'absolute',left:'70%', top:'60%'}} >/</h1>

                            <input type='text' onChange={this.to_monthChange} style={{

                                position:'absolute',
                                width:'15%',
                                top:'50%',
                                left:'50%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'1vw',



                            }}/>

                            <h1 style={{ fontSize:'1vw', textAlign:'right', display:'inline', position:'absolute',left:'45%', top:'60%'}} >/</h1>

                            <input type='text' onChange={this.to_yearChange} style={{

                                position:'absolute',
                                width:'40%',
                                top:'50%',
                                left:'0%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'1vw',


                            }}/>


                        </div>

                        <button onClick={this.selectColumn} style={{

                            position:'absolute',
                            width:'15%',
                            height:'50%',
                            direction:'rtl',
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
                            top:'60%',
                            left:'18%'

                        }}>موارد نمایش</button>

                        <button onClick={this.applyFilter} style={{

                            position:'absolute',
                            width:'10%',
                            height:'50%',
                            direction:'rtl',
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
                            top:'60%',
                            left:'5%'

                        }}>اعمال فیلتر</button>

                    </div>

                    <div style={{

                        position:'absolute',
                        direction:'rtl',
                        height:'80%',
                        width:'90%',
                        top:'20%',
                        right:'5%',
                        overflowY:'scroll'

                    }}>

                        <table id='table-to-xls' style={{
                            width:'100%',
                            height:'100%',
                        }}>


                            {this.tableHead()}
                            {this.tableRow()}

                        </table>


                    </div>

                    {this.filterPOPUP()}
                    {this.columnPOPUP()}
                    {this.downloadExcel()}


                </div>


            </div>



        )


    };


    render= ()=> {
        const { innerWidth: width, innerHeight: height } = window;



        return(

            <div className="App" style={{

                height:{height},
                width:{width},
                background:'rgb(0,100,0)',

            }}>

                <Header title='ثبت سفارش جدید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />



                {this.ReportList()}
                {this.rightDashboardActivate()}

            </div>

        )
    }
}

export default withCookies(ReportLiveWeighBridge);