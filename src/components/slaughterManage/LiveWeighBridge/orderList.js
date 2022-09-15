import React, {Component} from "react";
import RightDashbord from '../Main/Main'
import Header from "../Main/Header";
import Select from "react-select";
import {IPServer} from "../../../data";
import {createBrowserHistory} from "history";
import VectorIcon from '../../../Image/slaughter/Vector.svg';
import {withCookies} from "react-cookie";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Grid, MenuItem, TextField, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const history = createBrowserHistory();

class OrderList extends Component {

    state = {

        DriverChange : '0',
        productType : 0,
        levelType: 0,
        all_order:[],
        show_order:[],
        excelView:false,
        car_id : '',
        lwb_id : '',
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

    handleOrderExcel =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            alert(jsonResponse['result']);
            window.location.reload();

        }

    }


    UploadExcel =(event)=>{

        this.setState({

            excelFile : event.target.files[0],

        })

        const form = new FormData();

        form.append('File', event.target.files[0]);
        form.append('FileName', event.target.files[0].name);
        form.append('token', this.props.cookies.get('token'))

        const requestJson = {

            method:'POST',
            body: form

        } ;

        fetch(IPServer() + '/slaughterManage/order/finalization/excel/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleOrderExcel(data));


    }

    handleOrderList = (jsonResponse) => {



        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                all_order: jsonResponse['order_list'],
                show_order : jsonResponse['order_list'],

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

        fetch(IPServer() + '/slaughterManage/order/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleOrderList(data));

    }

    new_order =()=>{

        history.push('/live/driver/list/')
        window.location.reload();

    };

    orderFilter =()=>{

        var order = this.state.all_order;



        if(this.state.DriverChange !== '0'){
            order = order.map(data => {

                const x = data.driver_id;
                return ((x === this.state.DriverChange) ? data : {show:false})


            })
        }


        if(this.state.productType !== 0){

            order = order.map(data => {

                const x = data.product_type_id;
                return ((x === this.state.productType) ? data : {show:false})

            })
        }

        if(this.state.levelType !== 0){

            order = order.map(data => {

                const x = data.level_num;
                return ((x === this.state.levelType) ? data : {show:false})


            })
        }

        var counter = 0;


        order = order.map(data => {
            if (data.show === true) {
                counter += 1;
                data.top = counter * 16;
                data.top = data.top.toString() + '%';
                data.counter = counter;
            }
            return data;


        })


        this.setState({

            show_order : order
        })



    }

    DriverChange =(event, value)=>{

        this.setState({

            DriverChange: value.id,

        })


    };

    productTypechange =(event, value) => {

        this.setState({
            productType: value.id,

        })

    };


    levelChange = (event, value) => {

        this.setState({
            levelType: value.id,

        })

    }

    selectLwb =(event)=>{


        var car_id = "";
        var lwb_id = "";

        this.state.show_order.map( data => {

            if (data.lwb_id === event.target.name ){

                car_id = data.car_id;
                lwb_id = data.lwb_id;


            }})

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

        var top_param = 10;
        var counter = 0;

        return(

            <tbody>


            {this.state.show_order.map(data =>{


                const background_color = (counter % 2 === 0.0) ? 'rgb(255,255,255)' : '#F6EDFF'

                const style = {


                    borderRadius:'15px',
                    color:'rgb(0,0,0)',
                    textAlign:'center',
                    fontFamily:'Roboto',
                    height : '200px',
                    width:'100%',
                    position:'absolute',
                    paddingTop:'25px',
                    top:top_param.toString() + '%',
                    backgroundColor:background_color,


                }
                top_param = (data.show === true) ? top_param + 15 : top_param;
                counter = (data.show === true) ? counter + 1 : counter;

                return(( data.show === true) ?

                <tr key={data.counter} style={style} className='tableRow'>


                    <td style={{ position:'absolute', right:'0%' ,width:'5%' }}  ><h1  className="tableRow">{counter}</h1></td>
                    <td style={{position:'absolute', right:'5%', width:'15%'}}  ><h1 className="tableRow">{data.driver}</h1></td>
                    <td style={{position:'absolute', width:'15%', right:'20%'}} ><h1 className="tableRow">{data.car}</h1></td>
                    <td style={{position:'absolute', width:'10%', right:'35%'}} ><h1 className="tableRow">{data.product_type}</h1></td>
                    <td style={{position:'absolute', width:'15%', right:'45%'}} ><h1 className="tableRow">{data.enter_time}</h1></td>
                    <td style={{position:'absolute', width:'15%', right:'60%'}} ><h1 className="tableRow">{data.product_owner}</h1></td>
                    <td style={{position:'absolute', width:'10%', right:'75%'}} ><h1 className="tableRowOrderType">{data.order_type}</h1></td>
                    <td style={{position:'absolute', width:'10%', right:'85%'}} ><h1 className="tableRow">{data.level_str}</h1></td>



                    <td style={{position:'absolute', height:'50%',width:'5%', right:'95%', textAlign:'right'}} >

                       <button onClick={this.selectLwb} name={data.lwb_id} style={{border:'none', width:'100%', height:'100%' , backgroundColor:'rgba(0,0,0,0)'}}><img name={data.lwb_id} style={{border:'none',width:'25%', height:'25', backgroundColor:'rgba(0,0,0,0)'}} src={VectorIcon} alt='this is vector' /></button> </td>

                </tr> : <div style={{display:'none'}}></div>)


            })}



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

        * */


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
                        <td style={{position:'absolute', width:'15%', right:'20%'}} >{data.car_number_id}</td>
                        <td style={{position:'absolute', width:'10%', right:'35%'}} >{data.victim_num}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.losses_num}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.prod_num_in_cage}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.cage_num}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.agriculture}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.source_weight}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.weight}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.dropdown}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.slaughter_avg}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{data.product_owner}</td>
                        <td style={{position:'absolute', width:'10%', right:'75%'}} >{'ID' + data.lwb_id.toString()}</td>

                    </tr> : <div style={{display:'none'}}></div>)})}
            </tbody>
        )
    }

    driverListSelect =()=>{

        return(

            this.state.all_order.map(data => {

                return(

                    <MenuItem value={data.driver_id}>{data.driver}</MenuItem>

                )
    
            })



        )


    }

    orderList =()=>{

        const productList = [

            {id:0, name:'همه'},
            {id:1, name:'مرغ'},
            {id:2, name:'بوقلمون'},
            {id:3, name:'بلدرچین'},

        ]

        const levelList = [

            {id:0, name:'همه'},
            {id:1, name:'مرحله ثبت سقارش'},
            {id:2, name:'در انتظار ورود به کشتارگاه'},
            {id:3, name:'مرحله وزن کشی پر'},
            {id:4, name:'مرحله وزن کشی خالی'},
            {id:5, name:'در انتظار خروج تز کشتارگاه'},
            {id:6, name:'مرحله شمارش کشتارگاه/ خروج از کشتارگاه'},
            {id:7, name:'مرحله نهایی سازی سفارش'},

        ]

        const driverList_init = this.state.all_order.map(data => {

            const x = {id:data.driver_id, name:data.driver};
            return(x)

        });


        const x = [

            {id:'0', name:'همه'},
        ];

        const driverList = [...x, ...driverList_init];


        return(

            <div style={{

                border: '1px solid #E6E1E5',
                position:'absolute',
                height:'1800px',
                width:'98%',
                top:'200px',
                right:'1%',
                marginTop:'1%',
                borderRadius:'50px',

            }}>

                <div style={{

                    position:'absolute',
                    width:'100%',
                    height:'7.5%',
                    borderBottom:'1px solid #E6E1E5',
                    direction:'rtl',



                }}>

                    <Grid container style={{

                        position:'absolute',
                        width:'100%',
                        height:'100%',
                        borderBottom:'1px solid #E6E1E5',
                        direction:'rtl',



                    }}>

                        <Grid items xs={6} >

                            <Typography style={{


                                fontSize: '2.5vw',
                                color: '#6750A4',
                                paddingRight:'7%',
                                fontFamily:'Shabnam',


                            }}>لیست سفارشات زنده</Typography>

                        </Grid>


                        <Grid items onClick={this.new_order} xs={3} >

                            <Button variant="contained" className="purpleButton" style={{

                                backgroundColor: '#6750A4',
                                color: 'aliceblue',
                                borderRadius: '50px',
                                width:'22vw',
                                height:'7vh',
                                fontSize:'2vw',
                                fontFamily:'Shabnam',
                                marginTop:'2%',

                            }}>

                                + ثبت سفارش جدید
                            </Button>

                        </Grid>


                        <Grid items xs={3}>


                            <Button onClick={this.excelActive} variant="contained" style={{

                                color:'#6750A4',
                                borderColor:'#6750A4',
                                backgroundColor:'rgba(0,0,0,0)',
                                width:'18vw',
                                borderSize:'5px',
                                border:'solid',
                                borderRadius:'50px',
                                height:'7vh',
                                top:'1vh',
                                fontSize:'2vw',
                                fontFamily:'B-Nazanin',

                            }}>
                                دریافت اکسل
                            </Button>

                        </Grid>






                    </Grid>

                </div>

                <div style={{

                    position:'absolute',
                    width:'100%',
                    height:'90%',
                    top:'10%',
                    right:'0px',

                }}>


                <Grid container style={{

                position:'absolute',
                width:'100%',
                height:'10%',
                direction:'rtl',
                paddingTop:'2.5%'


                }}>

                    <Grid item xs={3} style={{

                        paddingRight:'5%',


                    }} >

                        <Autocomplete

                            id='لیست راننده ها'
                            options={driverList}
                            onChange={this.DriverChange}
                            size={'medium'}

                            style={{

                                width:'90%',
                                height:'100%',
                                fontSize:'3vw',

                            }}

                            sx={{width:600}}

                            renderInput={ param=>(

                                <TextField {...param} label='لیست راننده ها' variant="outlined" fullWidth style={{fontSize:'2vw'}} />

                            )}

                            getOptionLabel={option => option.name}

                        />

                    </Grid>


                    <Grid item xs={3} style={{

                    paddingRight:'0%',


                    }} >

                        <Autocomplete

                            id='نوع بار'
                            options={productList}
                            onChange={this.productTypechange}
                            size={'medium'}


                            style={{

                                width:'90%',
                                height:'100%',
                                fontSize:'3vw',

                            }}

                            sx={{width:600}}

                            renderInput={ param=>(

                                <TextField {...param} label='نوع بار' variant="outlined" size="larg" fullWidth />

                            )}

                            getOptionLabel={option => option.name}

                        />

                    </Grid>


                    <Grid item xs={3} style={{

                        paddingRight:'0%',


                        }} >

                            <Autocomplete

                                id='انتخاب مرحله'
                                options={levelList}
                                onChange={this.levelChange}
                                size={'medium'}

                                style={{

                                    width:'90%',
                                    height:'100%',
                                    fontSize:'3vw',

                                }}

                                sx={{width:600}}

                                renderInput={ param=>(

                                    <TextField {...param} label='انتخاب مرحله' variant="outlined" fullWidth />

                                )}

                                getOptionLabel={option => option.name}

                            />

                    </Grid>





                    <Grid items xs={3} >


                    <Button onClick={this.orderFilter} variant="contained" style={{

                        color:'#6750A4',
                        borderColor:'#6750A4',
                        backgroundColor:'rgba(0,0,0,0)',
                        width:'18vw',
                        borderSize:'5px',
                        border:'solid',
                        borderRadius:'50px',
                        height:'7vh',
                        fontSize:'2.5vw',
                        fontFamily:'Shabnam',

                    }}>
                        اعمال فیلتر
                    </Button>

                    </Grid>

                </Grid>

                    <div style={{

                        position:'absolute',
                        width:'100%',
                        height:'10%',
                        display:'none'

                    }}>




                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'20%',
                            height:'100%',
                            right:'5%',
                            top:'0%',
                            fontSize:'2vw',
                            textAlign:'center',



                        }}><h4 style={{textAlign:'right'}} >لیست راننده</h4>
                            <Select  options={driverList} placeholder='راتتده ها'  defaultvalue={this.state.productType} onChange={this.DriverChange}/>
                        </div>


                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'20%',
                            height:'100%',
                            right:'47%',
                            top:'0%',
                            fontSize:'2vw',
                            textAlign:'center',



                        }}><h4 style={{textAlign:'right'}} >نوع بار</h4>
                        <Select  options={productList} placeholder='نوع بار'  defaultvalue={this.state.productType} onChange={this.productTypechange}/>
                        </div>

                        <div style={{


                            position:'absolute',
                            direction:'rtl',
                            borderRadius:'20px',
                            backgroundColor:'rgba(200,200,200, 0.0)',
                            color: 'rgb(0,0,0)',
                            width:'20%',
                            height:'100%',
                            right:'26%',
                            top:'0%',
                            fontSize:'2vw',
                            textAlign:'center',



                        }}><h4 style={{textAlign:'right'}} >انتخاب مرحله</h4>
                            <Select  options={levelList} placeholder='انتحاب مرحله'  defaultvalue={this.state.levelType} onChange={this.levelChange}/>
                        </div>

                        <button onClick={this.orderFilter} style={{

                            position:'absolute',
                            width:'10vw',
                            height:'10vh',
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
                            fontSize:'2.5vw',
                            top:'60%',
                            left:'5%'

                        }}><h4>اعمال فیلتر</h4></button>

                    </div>

                    <div style={{

                        position:'absolute',
                        direction:'rtl',
                        height:'80%',
                        width:'90%',
                        top:'10%',
                        right:'5%',
                        overflowY:'scroll'

                    }}>

                        <table style={{
                            width:'100%',
                            height:'100%',
                
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


                                <td style={{position:'absolute', textAlign:'center',height:'100%', right:'0%' ,width:'9%'}} ><h2 className="tableHead">ردیف</h2></td>
                                <td style={{position:'absolute',textAlign:'center', right:'5%', width:'15%'}} ><h2 className="tableHead">راننده</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">ماشین</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'10%', right:'35%'}} ><h2 className="tableHead">نوع بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'45%'}} ><h2 className="tableHead">زمان ورود</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'60%'}} ><h2 className="tableHead">صاحب بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'10%', right:'75%'}} ><h2 style={{fontSize: '1.75vw'}}>نوع سفارش</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'10%', right:'85%'}} ><h2 className="tableHead">مرحله</h2></td>
                                <td style={{position:'absolute',textAlign:'center', width:'10%', right:'95%'}} ></td>


                            </tr></thead>


                            {this.tableRow()}

                        </table>


                    </div>
                    {this.downloadExcel()}

                    <div style={{

                        position:'absolute',
                        bottom:'50px',
                        right:'5%',

                    }}>

                            <h3>اپلود اکسل</h3>
                            <input  type='file' accept=".xlsx,.xls" onChange={this.UploadExcel} />


                    </div>

                    <div style={{

                        position:'absolute',
                        direction:'rtl',
                        height:'80%',
                        width:'90%',
                        top:'20%',
                        right:'5%',
                        overflowY:'scroll',
                        display:'none',
                    }}>

                        <table id='table-to-xls' style={{
                            width:'100%',
                            direction:'rtl',
                            height:'100%',
                        }}>

                            <thead><tr style={{

                                backgroundColor:'#6750A4',
                                borderRadius:'25px',
                                color:'rgb(255,255,255)',
                                textAlign:'center',
                                direction:'rtl',
                                fontSize:'30px',
                                fontFamily:'Roboto',
                                height : '80px',
                                width:'100%',
                                position:'absolute',
                                paddingTop:'40px',


                            }}>

                                <td style={{position:'absolute', textAlign:'center',height:'100%', right:'0%' ,width:'9%'}} ><h2 className="tableHead">ردیف</h2></td>
                                <td style={{position:'absolute',textAlign:'center', right:'5%', width:'15%'}} ><h2 className="tableHead">راننده</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">ماشین</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">تعداد تلفات</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">تعداد ضایعات</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">تعداد مرغ در قفس</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">تعداد قفس</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">مرغداری </h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">وزن مرغداری</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">وزن کشتارگاه</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">افت راهی</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'20%'}} ><h2 className="tableHead">وزن میانگین کشتارگاه</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'60%'}} ><h2 className="tableHead">صاحب بار</h2> </td>
                                <td style={{position:'absolute',textAlign:'center', width:'15%', right:'60%'}} ><h2 className="tableHead">کد منحصر بفرد</h2> </td>

                            </tr></thead>


                            {this.tableRowExcel()}

                        </table>


                    </div>

                </div>



            </div>



        )


    };


    render= ()=> {
        const { innerWidth: width, innerHeight: height } = window;


        return(

            <div className="App" style={{

                height:'2000px',
                width:{width},

            }}>

                    <Header title='باسکول زنده' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />
                    {this.orderList()}
                    {this.rightDashboardActivate()}
            </div>

        )
    };
}

export default withCookies(OrderList);