import React, {Component, Fragment} from "react";
import {withCookies} from "react-cookie";

import PrintReportHeader from "./PrintReportHeader";
import GetLiveweighBridgeLocation from "./GetLiveweighBridgeLocation";


class PrintReportLiveWeighBridge extends Component {

    state = {

    all_live_weighbridge:[],
    show_live_weighbridge:[],
    report_num:0,

    from_year :'',
    from_month :'',
    from_day :'',
    to_year :'',
    to_month :'',
    to_day :'',

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

    };

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
                    height : '100px',
                    width:'100%',
                    position:'absolute',
                    paddingTop:'25px',
                    top:top,
                    backgroundColor:'rgba(0,0,0,0)',

                }


                var counter_select= <td style={{display:'none'}}></td>;
                var enter_time_select= <td style={{display:'none'}}></td>;
                var exit_time_select= <td style={{display:'none'}}></td>;
                var weighting_time_select= <td style={{display:'none'}}></td>;
                var empty_weighting_time_select= <td style={{display:'none'}}></td>;
                var order_time_select= <td style={{display:'none'}}></td>;
                var weighting_user_select= <td style={{display:'none'}}></td>;
                var empty_user_select= <td style={{display:'none'}}></td>;
                var enter_user_select= <td style={{display:'none'}}></td>;
                var exit_user_select= <td style={{display:'none'}}></td>;
                var buy_price_select= <td style={{display:'none'}}></td>;
                var buy_amount_price_select= <td style={{display:'none'}}></td>;
                var sale_price_select= <td style={{display:'none'}}></td>;
                var sale_weight_select= <td style={{display:'none'}}></td>;
                var agriculture_average_weight_select=<td style={{display:'none'}}></td>;
                var slaughter_average_select= <td style={{display:'none'}}></td>;
                var cage_num_select= <td style={{display:'none'}}></td>;
                var prod_num_in_cage_select= <td style={{display:'none'}}></td>;
                var prod_num_select= <td style={{display:'none'}}></td>;
                var prod_num_minus_losses_select= <td style={{display:'none'}}></td>;
                var prod_num_minus_victim_select= <td style={{display:'none'}}></td>;
                var prod_num_minus_victim_minus_losses_select= <td style={{display:'none'}}></td>;
                var slaughter_count_select= <td style={{display:'none'}}></td>;
                var dif_num_select= <td style={{display:'none'}}></td>;
                var weight_select= <td style={{display:'none'}}></td>;
                var empty_weight_select= <td style={{display:'none'}}></td>;
                var net_weight_select= <td style={{display:'none'}}></td>;
                var net_weight_minus_losses_select= <td style={{display:'none'}}></td>;
                var net_weight_minus_victim_select= <td style={{display:'none'}}></td>;
                var net_weight_minus_victim_minus_losses_select= <td style={{display:'none'}}></td>;
                var source_weight_select= <td style={{display:'none'}}></td>;
                var drop_down_weight_select= <td style={{display:'none'}}></td>;
                var losses_num_select= <td style={{display:'none'}}></td>;
                var losses_weight_select= <td style={{display:'none'}}></td>;
                var victim_num_select= <td style={{display:'none'}}></td>;
                var victim_weight_select= <td style={{display:'none'}}></td>;
                var product_type_select= <td style={{display:'none'}}></td>;
                var order_type_select= <td style={{display:'none'}}></td>;
                var slaughter_type_select= <td style={{display:'none'}}></td>;
                var level_select= <div style={{display:'none'}}></div>;
                var weight_enter_type_select= <td style={{display:'none'}}></td>;
                var empty_weight_enter_type_select= <td style={{display:'none'}}></td>;
                var description_select= <td style={{display:'none'}}></td>;
                var account_side_select= <td style={{display:'none'}}></td>;
                var driver_select= <td style={{display:'none'}}></td>;
                var car_select= <td style={{display:'none'}}></td>;
                var product_owner_select= <td style={{display:'none'}}></td>;
                var agriculture_select= <td style={{display:'none'}}></td>;
                var rent_select= <td style={{display:'none'}}></td>;
                var fuel_select= <td style={{display:'none'}}></td>;
                var rent_type_select= <td style={{display:'none'}}></td>;

                var counter = 0;


                if(this.state.counter_select){
                    counter_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.counter}</h3></td>
                    counter = counter +1;

                }

                if(this.state.driver_select){
                    driver_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.driver}</h3></td>
                    counter = counter +1;

                }
                if(this.state.car_select){
                    car_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.car}</h3></td>
                    counter = counter +1;

                }
                if(this.state.product_type_select){
                    product_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.product_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.weight_select){
                    weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.empty_weight_select){
                    empty_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.empty_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.net_weight_select){
                    net_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.net_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.source_weight_select){
                    source_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.source_weight}</h3></td>
                    counter = counter +1;

                }


                if(this.state.drop_down_weight_select){
                    drop_down_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.drop_down_weight}</h3></td>
                    counter = counter +1;

                }


                if(this.state.agriculture_average_weight_select){
                    agriculture_average_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.agriculture_average_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.slaughter_average_select){
                    slaughter_average_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.slaughter_average}</h3></td>
                    counter = counter +1;

                }

                if(this.state.cage_num_select){
                    cage_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.cage_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.prod_num_in_cage_select){
                    prod_num_in_cage_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.prod_num_in_cage}</h3></td>
                    counter = counter +1;

                }

                if(this.state.prod_num_select){
                    prod_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.prod_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.slaughter_count_select){
                    slaughter_count_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.slaughter_count}</h3></td>
                    counter = counter +1;

                }

                if(this.state.dif_num_select){
                    dif_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.dif_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.losses_num_select){
                    losses_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.losses_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.losses_weight_select){
                    losses_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.losses_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.victim_num_select){
                    victim_num_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.victim_num}</h3></td>
                    counter = counter +1;

                }

                if(this.state.victim_weight_select){
                    victim_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.victim_weight}</h3></td>
                    counter = counter +1;

                }


                if(this.state.prod_num_minus_losses_select){
                    prod_num_minus_losses_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.prod_num_minus_losses}</h3></td>
                    counter = counter +1;

                }

                if(this.state.prod_num_minus_victim_select){
                    prod_num_minus_victim_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.prod_num_minus_victim}</h3></td>
                    counter = counter +1;

                }

                if(this.state.prod_num_minus_victim_minus_losses_select){
                    prod_num_minus_victim_minus_losses_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.prod_num_minus_victim_minus_losses}</h3></td>
                    counter = counter +1;

                }

                if(this.state.net_weight_minus_losses_select){
                    net_weight_minus_losses_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.net_weight_minus_losses}</h3></td>
                    counter = counter +1;
                }

                if(this.state.net_weight_minus_victim_select){
                    net_weight_minus_victim_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.net_weight_minus_victim}</h3></td>
                    counter = counter +1;

                }

                if(this.state.net_weight_minus_victim_minus_losses_select){
                    net_weight_minus_victim_minus_losses_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.net_weight_minus_victim_minus_losses}</h3></td>
                    counter = counter +1;

                }

                if(this.state.account_side_select){
                    account_side_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.account_side}</h3></td>
                    counter = counter +1;

                }
                if(this.state.product_owner_select){
                    product_owner_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.product_owner}</h3></td>
                    counter = counter +1;

                }

                if(this.state.agriculture_select){
                    agriculture_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.agriculture}</h3></td>
                    counter = counter +1;

                }


                if(this.state.buy_price_select){
                    buy_price_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.buy_price}</h3></td>
                    counter = counter +1;

                }

                if(this.state.buy_amount_price_select){
                    buy_amount_price_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.buy_amount_price}</h3></td>
                    counter = counter +1;

                }

                if(this.state.sale_weight_select){
                    sale_weight_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.sale_weight}</h3></td>
                    counter = counter +1;

                }

                if(this.state.sale_price_select){
                    sale_price_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.sale_price}</h3></td>
                    counter = counter +1;

                }

                if(this.state.order_type_select){
                    order_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.order_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.slaughter_type_select){
                    slaughter_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.slaughter_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.level_select){
                    level_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.level}</h3></td>
                    counter = counter +1;

                }

                if(this.state.weight_enter_type_select){
                    weight_enter_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.weight_enter_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.empty_weight_enter_type_select){
                    empty_weight_enter_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.empty_weight_enter_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.description_select){
                    description_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.description}</h3></td>
                    counter = counter +1;

                }

                if(this.state.fuel_select){
                    fuel_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.fuel}</h3></td>
                    counter = counter +1;

                }

                if(this.state.rent_type_select){
                    rent_type_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.rent_type}</h3></td>
                    counter = counter +1;

                }

                if(this.state.rent_select){
                    rent_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.rent}</h3></td>
                    counter = counter +1;

                }


                if(this.state.enter_time_select){
                    enter_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.enter_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.exit_time_select){
                    exit_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.exit_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.order_time_select){
                    order_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.order_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.weighting_time_select){
                    weighting_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.weighting_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.empty_weighting_time_select){
                    empty_weighting_time_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.empty_weighting_time}</h3></td>
                    counter = counter +1;

                }

                if(this.state.weighting_user_select){
                    weighting_user_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.weighting_user}</h3></td>
                    counter = counter +1;

                }

                if(this.state.empty_user_select){
                    empty_user_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.empty_user}</h3></td>
                    counter = counter +1;

                }

                if(this.state.enter_user_select){
                    enter_user_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.enter_user}</h3></td>
                    counter = counter +1;

                }

                if(this.state.exit_user_select){
                    exit_user_select = <td style={{
                        position:'absolute',
                        right:(counter * 10).toString() + '%',
                        top:'5%',
                        width:'10%',
                        height:'100%',
                        border:'2px solid rgb(0,0,0)'

                    }}><h3>{data.exit_user}</h3></td>
                    counter = counter +1;

                }

                const width = (counter * 10).toString() + '%';

                const divStyle = {


                    borderRadius:'15px',
                    color:'rgb(0,0,0)',
                    textAlign:'center',
                    fontSize:'25px',
                    fontFamily:'Roboto',
                    height : '100px',
                    width:width,
                    position:'absolute',
                    paddingTop:'25px',
                    top:top,
                    backgroundColor:background_color,


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

    /*downloadExcel =()=>{

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


    }*/
    /*
    excelActive = () =>{

        this.setState({

            excelView : !this.state.excelView,

        })

    }


    tableRowExcel =() => {
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




        return(

            <tbody>


            {this.state.show_order.map(data =>{


                const background_color = (data.counter % 2 === 0.0) ? 'rgb(255,255,255)' : '#F6EDFF'

                const style = {


                    borderRadius:'15px',
                    color:'rgb(0,0,0)',
                    textAlign:'center',
                    fontSize:'20px',
                    fontFamily:'Roboto',
                    height : '100px',
                    width:'100%',
                    position:'absolute',
                    paddingTop:'25px',
                    top:data.top,
                    backgroundColor:background_color,


                }

                return(( data.show === true) ?

                    <tr key={data.counter} style={style}>

                        <td style={{ position:'absolute', right:'0%' ,width:'5%'}} >{data.counter}</td>
                        <td style={{position:'absolute', right:'5%', width:'15%'}} >{data.driver}</td>
                        <td style={{position:'absolute', width:'15%', right:'20%'}} >{data.car}</td>
                        <td style={{position:'absolute', width:'10%', right:'35%'}} >{data.product_type}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.weight}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.dropdown}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.losses_num}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.victim_num}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.product_num}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.slaughter_count}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.dif_num}</td>
                        <td style={{position:'absolute', width:'15%', right:'60%'}} >{data.product_owner}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.order_type}</td>

                    </tr> : <div style={{display:'none'}}></div>)})}




            </tbody>
        )
    }*/


    tableHead =()=>{


        var counter_select= <td style={{display:'none'}}></td>;
        var enter_time_select= <td style={{display:'none'}}></td>;
        var exit_time_select= <td style={{display:'none'}}></td>;
        var weighting_time_select= <td style={{display:'none'}}></td>;
        var empty_weighting_time_select= <td style={{display:'none'}}></td>;
        var order_time_select= <td style={{display:'none'}}></td>;
        var weighting_user_select= <td style={{display:'none'}}></td>;
        var empty_user_select= <td style={{display:'none'}}></td>;
        var enter_user_select= <td style={{display:'none'}}></td>;
        var exit_user_select= <td style={{display:'none'}}></td>;
        var buy_price_select= <td style={{display:'none'}}></td>;
        var buy_amount_price_select= <td style={{display:'none'}}></td>;
        var sale_price_select= <td style={{display:'none'}}></td>;
        var sale_weight_select= <td style={{display:'none'}}></td>;
        var agriculture_average_weight_select=<td style={{display:'none'}}></td>;
        var slaughter_average_select= <td style={{display:'none'}}></td>;
        var cage_num_select= <td style={{display:'none'}}></td>;
        var prod_num_in_cage_select= <td style={{display:'none'}}></td>;
        var prod_num_select= <td style={{display:'none'}}></td>;
        var prod_num_minus_losses_select= <td style={{display:'none'}}></td>;
        var prod_num_minus_victim_select= <td style={{display:'none'}}></td>;
        var prod_num_minus_victim_minus_losses_select= <td style={{display:'none'}}></td>;
        var slaughter_count_select= <td style={{display:'none'}}></td>;
        var dif_num_select= <td style={{display:'none'}}></td>;
        var weight_select= <td style={{display:'none'}}></td>;
        var empty_weight_select= <td style={{display:'none'}}></td>;
        var net_weight_select= <td style={{display:'none'}}></td>;
        var net_weight_minus_losses_select= <td style={{display:'none'}}></td>;
        var net_weight_minus_victim_select= <td style={{display:'none'}}></td>;
        var net_weight_minus_victim_minus_losses_select= <td style={{display:'none'}}></td>;
        var source_weight_select= <td style={{display:'none'}}></td>;
        var drop_down_weight_select= <td style={{display:'none'}}></td>;
        var losses_num_select= <td style={{display:'none'}}></td>;
        var losses_weight_select= <td style={{display:'none'}}></td>;
        var victim_num_select= <td style={{display:'none'}}></td>;
        var victim_weight_select= <td style={{display:'none'}}></td>;
        var product_type_select= <td style={{display:'none'}}></td>;
        var order_type_select= <td style={{display:'none'}}></td>;
        var slaughter_type_select= <td style={{display:'none'}}></td>;
        var level_select= <div style={{display:'none'}}></div>;
        var weight_enter_type_select= <td style={{display:'none'}}></td>;
        var empty_weight_enter_type_select= <td style={{display:'none'}}></td>;
        var description_select= <td style={{display:'none'}}></td>;
        var account_side_select= <td style={{display:'none'}}></td>;
        var driver_select= <td style={{display:'none'}}></td>;
        var car_select= <td style={{display:'none'}}></td>;
        var product_owner_select= <td style={{display:'none'}}></td>;
        var agriculture_select= <td style={{display:'none'}}></td>;
        var rent_select= <td style={{display:'none'}}></td>;
        var fuel_select= <td style={{display:'none'}}></td>;
        var rent_type_select= <td style={{display:'none'}}></td>;

        var counter = 0;

        if(this.state.counter_select){
            counter_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>ردیف</h2></td>
            counter = counter +1;

        }

        if(this.state.driver_select){
            driver_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>راننده</h2></td>
            counter = counter +1;

        }
        if(this.state.car_select){
            car_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>ماشین</h2></td>
            counter = counter +1;

        }
        if(this.state.product_type_select){
            product_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>نوع محصول</h2></td>
            counter = counter +1;

        }

        if(this.state.weight_select){
            weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن پر</h2></td>
            counter = counter +1;

        }

        if(this.state.empty_weight_select){
            empty_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن خالی</h2></td>
            counter = counter +1;

        }

        if(this.state.net_weight_select){
            net_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن خالص</h2></td>
            counter = counter +1;

        }

        if(this.state.source_weight_select){
            source_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن مبدا</h2></td>
            counter = counter +1;

        }


        if(this.state.drop_down_weight_select){
            drop_down_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>افت</h2></td>
            counter = counter +1;

        }


        if(this.state.agriculture_average_weight_select){
            agriculture_average_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن میانگین مرغداری</h2></td>
            counter = counter +1;

        }

        if(this.state.slaughter_average_select){
            slaughter_average_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن میانگین کشتارگاه</h2></td>
            counter = counter +1;

        }

        if(this.state.cage_num_select){
            cage_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>تعداد قفس</h2></td>
            counter = counter +1;

        }

        if(this.state.prod_num_in_cage_select){
            prod_num_in_cage_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>تعداد محصول در قفس</h2></td>
            counter = counter +1;

        }

        if(this.state.prod_num_select){
            prod_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>تعداد کل</h2></td>
            counter = counter +1;

        }

        if(this.state.slaughter_count_select){
            slaughter_count_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>شمارش کشتارگاه</h2></td>
            counter = counter +1;

        }

        if(this.state.dif_num_select){
            dif_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>اختلاف شمارش</h2></td>
            counter = counter +1;

        }

        if(this.state.losses_num_select){
            losses_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>تعداد ضایعات</h2></td>
            counter = counter +1;

        }

        if(this.state.losses_weight_select){
            losses_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن ضابعات</h2></td>
            counter = counter +1;

        }

        if(this.state.victim_num_select){
            victim_num_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>تعداد تلفات</h2></td>
            counter = counter +1;

        }

        if(this.state.victim_weight_select){
            victim_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن تلفات</h2></td>
            counter = counter +1;

        }


        if(this.state.prod_num_minus_losses_select){
            prod_num_minus_losses_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>تعداد با کسر ضابعات</h2></td>
            counter = counter +1;

        }

        if(this.state.prod_num_minus_victim_select){
            prod_num_minus_victim_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>تعداد با کسر نلفات</h2></td>
            counter = counter +1;

        }

        if(this.state.prod_num_minus_victim_minus_losses_select){
            prod_num_minus_victim_minus_losses_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>تعداد با کسر ضایعات و تلفات</h2></td>
            counter = counter +1;

        }

        if(this.state.net_weight_minus_losses_select){
            net_weight_minus_losses_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن خالص با کسر ضایعات</h2></td>
            counter = counter +1;
        }

        if(this.state.net_weight_minus_victim_select){
            net_weight_minus_victim_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن خالص با کسر تلفات</h2></td>
            counter = counter +1;

        }

        if(this.state.net_weight_minus_victim_minus_losses_select){
            net_weight_minus_victim_minus_losses_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن خالص با کسر تلفات و ضایعات</h2></td>
            counter = counter +1;

        }

        if(this.state.account_side_select){
            account_side_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>طرف حساب</h2></td>
            counter = counter +1;

        }
        if(this.state.product_owner_select){
            product_owner_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>صاحب محصول</h2></td>
            counter = counter +1;

        }

        if(this.state.agriculture_select){
            agriculture_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>مرغداری</h2></td>
            counter = counter +1;

        }


        if(this.state.buy_price_select){
            buy_price_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>قبمت خرید</h2></td>
            counter = counter +1;

        }

        if(this.state.buy_amount_price_select){
            buy_amount_price_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>قیمت کل خرید</h2></td>
            counter = counter +1;

        }

        if(this.state.sale_weight_select){
            sale_weight_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وزن پرکنده</h2></td>
            counter = counter +1;

        }

        if(this.state.sale_price_select){
            sale_price_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>قیمت فروش</h2></td>
            counter = counter +1;

        }

        if(this.state.order_type_select){
            order_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>نوع سفارش</h2></td>
            counter = counter +1;

        }

        if(this.state.slaughter_type_select){
            slaughter_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>نوع کشتار</h2></td>
            counter = counter +1;

        }

        if(this.state.level_select){
            level_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>وضعبت سفارش</h2></td>
            counter = counter +1;

        }

        if(this.state.weight_enter_type_select){
            weight_enter_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>نوع ورود وزن پر</h2></td>
            counter = counter +1;

        }

        if(this.state.empty_weight_enter_type_select){
            empty_weight_enter_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>نوع ورود وزن خالی</h2></td>
            counter = counter +1;

        }

        if(this.state.description_select){
            description_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>توضیحات</h2></td>
            counter = counter +1;

        }

        if(this.state.fuel_select){
            fuel_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>سوخت</h2></td>
            counter = counter +1;

        }

        if(this.state.rent_type_select){
            rent_type_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>نوع کرایه</h2></td>
            counter = counter +1;

        }

        if(this.state.rent_select){
            rent_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>کرایه</h2></td>
            counter = counter +1;

        }


        if(this.state.enter_time_select){
            enter_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>زمان ورود</h2></td>
            counter = counter +1;

        }

        if(this.state.exit_time_select){
            exit_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>زمان خروج</h2></td>
            counter = counter +1;

        }

        if(this.state.order_time_select){
            order_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>زمان ثبت سفارش</h2></td>
            counter = counter +1;

        }

        if(this.state.weighting_time_select){
            weighting_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>زمان وزن کشی پر</h2></td>
            counter = counter +1;

        }

        if(this.state.empty_weighting_time_select){
            empty_weighting_time_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>زمان وزن کشی خالی</h2></td>
            counter = counter +1;

        }

        if(this.state.weighting_user_select){
            weighting_user_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>کاربر وزن کشی پر</h2></td>
            counter = counter +1;

        }

        if(this.state.empty_user_select){
            empty_user_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>کاربر وزن کشی خالی</h2></td>
            counter = counter +1;

        }

        if(this.state.enter_user_select){
            enter_user_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>کاربر ثبت زمان ورود به کشتارگاه</h2></td>
            counter = counter +1;

        }

        if(this.state.exit_user_select){
            exit_user_select = <td style={{
                position:'absolute',
                right:(counter * 10).toString() + '%',
                top:'5%',
                width:'10%',
                height:'100%',
                border:'5px solid rgb(0,0,0)'

            }}><h2>کاربر ثبت زمان خروج از کشتارگاه</h2></td>
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
                width:'100%',
                top:'25%',
                right:'0%',
                marginTop:'1%',
                borderRadius:'50px',

            }}>


                <div style={{

                    position:'absolute',
                    width:'100%',
                    height:'10%',
                    top:'1%',
                    right:'0px',
                    borderBottom:'1px solid #E6E1E5'

                }}>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'20%',
                            height:'80%',
                            right:'2%',
                            top:'0%',
                            fontSize:'20px',
                            textAlign:'center',

                        }}>

                            <h4 style={{textAlign:'center', display:'inline', position:'absolute',right:'0%', top:'50%'}} >از :</h4>

                            <input type='text' value={this.state.from_day} style={{

                                position:'absolute',
                                width:'15%',
                                top:'50%',
                                left:'75%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'25px',
                                paddingTop:'2.5%'


                            }}/>

                            <h1 style={{textAlign:'right', display:'inline', position:'absolute',left:'70%', top:'40%'}} >/</h1>

                            <input type='text' value={this.state.from_month} style={{

                                position:'absolute',
                                width:'15%',
                                top:'50%',
                                left:'50%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'25px',
                                paddingTop:'2.5%'



                            }}/>

                            <h1 style={{textAlign:'right', display:'inline', position:'absolute',left:'45%', top:'40%'}} >/</h1>

                            <input type='text' value={this.state.from_year} style={{

                                position:'absolute',
                                width:'40%',
                                top:'50%',
                                left:'0%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'25px',
                                paddingTop:'2.5%'


                            }}/>


                        </div>





                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'20%',
                            height:'80%',
                            right:'25%',
                            top:'1%',
                            fontSize:'20px',
                            textAlign:'center',

                        }}>

                            <h4 style={{textAlign:'center', display:'inline', position:'absolute',right:'0%', top:'50%'}} >تا :</h4>

                            <input type='text' value={this.state.to_day} style={{

                                position:'absolute',
                                width:'15%',
                                top:'50%',
                                left:'75%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'25px',
                                paddingTop:'2.5%'


                            }}/>

                            <h1 style={{textAlign:'right', display:'inline', position:'absolute',left:'70%', top:'40%'}} >/</h1>

                            <input type='text' value={this.state.to_month} style={{

                                position:'absolute',
                                width:'15%',
                                top:'50%',
                                left:'50%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'25px',
                                paddingTop:'2.5%'



                            }}/>

                            <h1 style={{textAlign:'right', display:'inline', position:'absolute',left:'45%', top:'40%'}} >/</h1>

                            <input type='text' value={this.state.to_year} style={{

                                position:'absolute',
                                width:'40%',
                                top:'50%',
                                left:'0%',
                                height:'50%',
                                borderRadius:'10px',
                                textAlign:'center',
                                fontSize:'25px',
                                paddingTop:'2.5%'


                            }}/>


                        </div>
                </div>

                    <div style={{

                        position:'absolute',
                        direction:'rtl',
                        height:'80%',
                        width:'100%',
                        top:'20%',
                        right:'2%',
                        overflowY:'scroll'

                    }}>

                        <table style={{
                            width:'100%',
                            height:'100%',
                        }}>


                            {this.tableHead()}
                            {this.tableRow()}

                        </table>


                    </div>




            </div>



        )


    };

    setLocation =(location)=>{

        console.log('this is set location')
        console.log(location)

        this.setState({

            all_live_weighbridge:location.state.all_live_weighbridge,
            show_live_weighbridge:location.state.show_live_weighbridge,

            from_year :location.state.from_year,
            from_month :location.state.from_month,
            from_day :location.state.from_day,
            to_year :location.state.to_year,
            to_month :location.state.to_month,
            to_day :location.state.to_day,

            counter_select: location.state.counter_select,
            enter_time_select: location.state.enter_time_select,
            exit_time_select: location.state.exit_time_select,
            weighting_time_select: location.state.weighting_time_select,
            empty_weighting_time_select: location.state.empty_weighting_time_select,
            order_time_select: location.state.order_time_select,
            weighting_user_select: location.state.weighting_user_select,
            empty_user_select: location.state.empty_user_select,
            enter_user_select: location.state.enter_user_select,
            exit_user_select: location.state.exit_user_select,
            buy_price_select: location.state.buy_price_select,
            buy_amount_price_select: location.state.buy_amount_price_select,
            sale_price_select: location.state.sale_price_select,
            sale_weight_select:location.state.sale_weight_select,
            agriculture_average_weight_select: location.state.agriculture_average_weight_select,
            slaughter_average_select: location.state.slaughter_average_select,
            cage_num_select: location.state.cage_num_select,
            prod_num_in_cage_select: location.state.prod_num_in_cage_select,
            prod_num_select: location.state.prod_num_select,
            prod_num_minus_losses_select: location.state.prod_num_minus_losses_select,
            prod_num_minus_victim_select: location.state.prod_num_minus_victim_select,
            prod_num_minus_victim_minus_losses_select: location.state.prod_num_minus_victim_minus_losses_select,
            slaughter_count_select: location.state.slaughter_count_select,
            dif_num_select: location.state.dif_num_select,
            weight_select: location.state.weight_select,
            empty_weight_select: location.state.empty_weight_select,
            net_weight_select: location.state.net_weight_select,
            net_weight_minus_losses_select: location.state.net_weight_minus_losses_select,
            net_weight_minus_victim_select: location.state.net_weight_minus_victim_select,
            net_weight_minus_victim_minus_losses_select: location.state.net_weight_minus_victim_minus_losses_select,
            source_weight_select: location.state.source_weight_select,
            drop_down_weight_select: location.state.drop_down_weight_select,
            losses_num_select: location.state.losses_num_select,
            losses_weight_select: location.state.losses_weight_select,
            victim_num_select: location.state.victim_num_select,
            victim_weight_select: location.state.victim_weight_select,
            product_type_select: location.state.product_type_select,
            order_type_select: location.state.order_type_select,
            slaughter_type_select: location.state.slaughter_type_select,
            level_select: location.state.level_select,
            weight_enter_type_select: location.state.weight_enter_type_select,
            empty_weight_enter_type_select: location.state.empty_weight_enter_type_select,
            description_select: location.state.description_select,
            account_side_select: location.state.account_side_select,
            driver_select: location.state.driver_select,
            car_select: location.state.car_select,
            product_owner_select: location.state.product_owner_select,
            agriculture_select: location.state.agriculture_select,
            rent_select: location.state.rent_select,
            fuel_select: location.state.fuel_select,
            rent_type_select: location.state.rent_type_select,
            report_num : 1


        })






    }


    render= ()=> {
        const { innerWidth: width, innerHeight: height } = window;



        return(

            <div className="App" style={{

                height:{height},
                width:{width},
                background:'rgb(0,100,0)',

            }}>

            <style type="text/css">
                {"@media print{@page {size: landscape}}"}
            </style>
            
                <GetLiveweighBridgeLocation report_num={this.state.report_num} setLocation={this.setLocation} />

                <PrintReportHeader title='گزارش گیری باسکول زنده'/>


                {this.ReportList()}

            </div>

        )
    }
}

export default withCookies(PrintReportLiveWeighBridge);