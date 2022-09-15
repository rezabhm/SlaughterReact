import React, {Component} from "react";
import {withCookies} from "react-cookie";
import PrintReportHeader from "../Report/PrintReportHeader";
import GetLevelData from "./GetLevelData";

class PrintReportLevel extends Component {

    state = {

        report_num:0,
        counter :'1',
        driver :'',
        car :'',
        product_type :'',
        weight :'',
        empty_weight :'',
        net_weight :'',
        victim :'',
        losses :'',
        agriculture :'',
        product_owner :'',
        cage_num :'',
        prod_num_in_cage :'',
        total_num :'',
        weighting_time :'',
        source_weight: '',

    };


    ReportList =()=>{

        return(

            <div style={{

                border: '1px solid #E6E1E5',
                position:'absolute',
                height:'500px',
                width:'100%',
                top:'250px',
                right:'0%',
                marginTop:'1%',
                borderRadius:'50px',

            }}>

                <div style={{

                    position:'absolute',
                    direction:'rtl',
                    height:'80%',
                    width:'100%',
                    top:'5%',
                    right:'0%',
                    overflowY:'scroll'

                }}>

                    <div style={{
                        backgroundColor:'#4A4458',
                        borderRadius:'25px',
                        color:'rgb(255,255,255)',
                        textAlign:'center',
                        fontSize:'20px',
                        fontFamily:'Roboto',
                        height : '80px',
                        width:'100%',
                        right:'0%',
                        position:'absolute',
                        paddingTop:'40px',
                    }}>


                    </div>

                    <table style={{
                        width:'100%',
                        height:'100%',
                    }}>

                    <tr  style={{

                        borderRadius:'25px',
                        color:'rgb(255,255,255)',
                        textAlign:'center',
                        fontSize:'20px',
                        fontFamily:'Roboto',
                        height : '80px',
                        width:'100%',
                        right:'0%',
                        position:'absolute',
                        paddingTop:'40px',
                        backgroundColor:'rgba(0,0,0,0)',

                    }}>

                        <td style={{
                            position:'absolute',
                            right:'0%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>راننده</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'7%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>ماشین</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'14%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>نوع بار</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'21%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>وزن پر</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'28%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>وزن خالی</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'35%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>وزن خالص</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'42%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>تلفات</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'49%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>ضایعات</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'56%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>مرغداری</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'63%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>وزن مرغداری</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'70%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>تعداد قفس</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'77%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>تعداد مرغ در قفس</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'84%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>تعداد کل</h4></td>

                        <td style={{
                            position:'absolute',
                            right:'91%',
                            top:'5%',
                            width:'7%',
                            height:'110%',
                            border:'5px solid rgba(0,0,0,0.5)',

                        }}><h4>زمان وزن کشی</h4></td>


                    </tr>

                    <tr style={{


                        borderRadius:'15px',
                        color:'rgb(0,0,0)',
                        textAlign:'center',
                        fontSize:'25px',
                        fontFamily:'Roboto',
                        height : '180px',
                        width:'100%',
                        position:'absolute',
                        paddingTop:'25px',
                        top:'20%',
                        right:'0%',
                        backgroundColor:'rgba(0,0,0,0)',

                    }}>

                        <td style={{
                            position:'absolute',
                            right:'0%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            borderRadius:'0px 50px 50px 0 px',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.driver }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'7%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.car }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'14%',
                            top:'5%',
                            width:'7%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            height:'100%',
                            paddingTop:'3%',

                        }}><h5>{this.state.product_type }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'21%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.weight }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'28%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.empty_weight }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'35%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.net_weight }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'42%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.victim }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'49%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.losses }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'56%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.agriculture }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'63%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.source_weight }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'70%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.cage_num }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'77%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.prod_num_in_cage }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'84%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            paddingTop:'3%',

                        }}><h5>{this.state.total_num }</h5></td>

                        <td style={{
                            position:'absolute',
                            right:'91%',
                            top:'5%',
                            width:'7%',
                            height:'100%',
                            border:'5px solid rgba(0,0,0,0.5)',
                            fontSize:'16px',
                            paddingTop:'3%',

                        }}><h6>{this.state.weighting_time }</h6></td>

                    </tr>

                    </table>


                </div>

                <div style={{

                    position:'absolute',
                    direction:'rtl',
                    height:'20%',
                    width:'100%',
                    bottom:'15%',
                    right:'5%',

                }}>

                    <h2 style={{
                        position:'absolute',
                        direction:'rtl',
                        height:'80%',
                        width:'20%',
                        bottom:'0%',
                        right:'2%',

                    }}>امضا مسعول باسکول</h2>


                    <h2 style={{
                        position:'absolute',
                        direction:'rtl',
                        height:'80%',
                        width:'20%',
                        top:'0%',
                        right:'75%',

                    }}>امضا نگهبانی</h2>



                    <h3 style={{
                        position:'absolute',
                        direction:'rtl',
                        height:'80%',
                        width:'90%',
                        top:'60%',
                        right:'0%',
                        textAlign:'center',
                        fontSize:'2vw',

                    }}>آدرس : زنجان - 22 کیلومتری جاده تهران - 6 کیلومتر بالاتر از روستای یوسف آباد جاده مروارید</h3>


                    <h3 style={{
                        position:'absolute',
                        direction:'rtl',
                        height:'80%',
                        width:'90%',
                        top:'80%',
                        right:'0%',
                        textAlign:'center',
                        fontSize:'2vw',

                    }}>تلفن دفتر : 33745870 - 33745850</h3>


                    <h3 style={{
                        position:'absolute',
                        direction:'rtl',
                        height:'80%',
                        width:'90%',
                        top:'100%',
                        right:'0%',
                        textAlign:'center',
                        fontSize:'2vw',

                    }}>تلفن کشتارگاه : 1351 141 0912</h3>

                </div>



                <h1 style={{

                position:'absolute',
                right:'0%',
                top:'-10%',
                color:'rgb(0,0,0)',
                direction:'rtl',
                fontSize:'24px'

                }}>
                صاحب بار :
                
                 {this.state.product_owner}

                </h1>

            </div>



        )


    };

    setLocation =(location)=>{
        console.log(location)

        this.setState({

            counter :'1',
            driver :location.state.driver,
            car :location.state.car,
            product_type :location.state.product_type,
            weight :location.state.weight,
            empty_weight :location.state.empty_weight,
            net_weight :location.state.net_weight,
            victim :location.state.victim_num,
            losses :location.state.losses_num,
            agriculture :location.state.agriculture,
            product_owner :location.state.product_owner,
            cage_num :location.state.cage_num,
            prod_num_in_cage :location.state.prod_num_in_cage,
            total_num :location.state.total_num,
            weighting_time :location.state.weigh_time,
            source_weight: location.state.source_weight,

            report_num : 1


        })






    }


    render= ()=> {

        const { innerWidth: width, innerHeight: height } = window;


        return(

            <div className="App" style={{

                height:'500px',
                width:{width},

            }}>

            <style type="text/css">
                {"@media print{@page {size: landscape}}"}
            </style>


                <GetLevelData report_num={this.state.report_num} setLocation={this.setLocation} />

                <PrintReportHeader title='رسید باسکول زنده'/>


                {this.ReportList()}

            </div>

        )
    }
}

export default withCookies(PrintReportLevel);