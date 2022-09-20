import React, {Component} from "react";
import RightDashbord from '../Main/Main'
import Header from "../Main/Header";
import Select from "react-select";
import {IPServer} from "../../../data";
import {createBrowserHistory} from "history";
import VectorIcon from '../../../Image/slaughter/Vector.svg';
import {withCookies} from "react-cookie";
import deleteIcon from '../../../Image/slaughter/delete.svg';
import ExitIconPOPUP from '../../../Image/slaughter/exit.svg';
import * as XLSX from 'xlsx';


const history = createBrowserHistory();

class LiveDriverList extends Component {

    state = {

        DriverChange : '0',
        productType : 0,
        levelType: 0,
        all_driver:[],
        show_driver:[],
        excelView:false,
        new_driver_popup:false,
        newDriverCheckBox:false,
        newDriverCarType:'',
        newDriverCarOwner:'',
        newDriverProductType:'',
        newDriverName :'',
        car_number1:'11',
        car_number2:'ع',
        car_number3:'111',
        car_number4:'87',
        newDriverLastName:'',
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

    download_product_owner_excel =()=>{

        const worksheet = XLSX.utils.json_to_sheet(this.state.product_owner_list);
        const workBook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workBook, worksheet, 'product owner')

        // buffer
        let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})

        //Binary string
        XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
        
        //Download
        XLSX.writeFile(workBook,"لیست صاحب بار.xlsx")
  

    }


    download_agriculture_excel =()=>{

        const worksheet = XLSX.utils.json_to_sheet(this.state.agriculture_list);
        const workBook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workBook, worksheet, 'agriculture')

        // buffer
        let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})

        //Binary string
        XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
        
        //Download
        XLSX.writeFile(workBook,"لیست مرغداری ها.xlsx")
  

    }


    handledriverExcel =(jsonResponse)=>{

        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            alert(jsonResponse['result'])


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

        fetch(IPServer() + '/slaughterManage/live/driver/excel/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handledriverExcel(data));


    }


    handledriverList = (jsonResponse) => {


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                all_driver: jsonResponse['driver_list'],
                show_driver : jsonResponse['driver_list'],
                product_owner_list: jsonResponse['product_owner'],
                agriculture_list: jsonResponse['agriculture'],

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

        fetch(IPServer() + '/slaughterManage/live/driver/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handledriverList(data));

    }

    new_driver =()=>{

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

    driverFilter =()=>{

        var live_driver = this.state.all_driver;

        if(this.state.DriverChange !== '0'){
            live_driver = live_driver.map(data => {

                const x = data.driver_id;
                return ((x === this.state.DriverChange) ? data : {show:false})

            })
        }

        if(this.state.productType !== 0){

            live_driver = live_driver.map(data => {

                const x = data.product_type_id;
                return ((x === this.state.productType) ? data : {show:false})

            })
        }

        var counter = 0;

        live_driver = live_driver.map(data => {

            if (data.show === true) {
                counter += 1;
                data.top = counter * 16;
                data.top = data.top.toString() + '%';
                data.counter = counter;
            }
            return data;


        })


        this.setState({

            show_driver : live_driver
        })
    }

    DriverChange =(event)=>{

        console.log(event.value)

        this.setState({

            DriverChange: event.value,

        })


    };

    productTypechange =(event) => {

        this.setState({
            productType: event.value,

        })

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

        var top_param = 15;

        return(

            <tbody>


            {this.state.show_driver.map(data =>{


                const background_color = (data.counter % 2 === 0.0) ? 'rgb(255,255,255)' : '#F6EDFF'

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
                    top:top_param.toString() + '%',
                    backgroundColor:background_color,


                }
                top_param = (data.show === true) ? top_param + 12.5 : top_param;

                return(( data.show === true) ?

                    <tr key={data.counter} style={style}>

                        <td style={{ position:'absolute', right:'0%' ,width:'10%'}} >

                            <button onClick={this.deleteDriver} name={data.car_id} style={{


                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)',
                                height: '100%',
                                width: '100%',
                                right:'10px',
                                bottom: '0%',
                                paddingTop:'4%',
                                textAlign:'center',
                                color:'#DC362E',



                            }}><img src={deleteIcon} alt={'this is car icon'} name={data.car_id} style={{

                                right:'0px',
                                width:'10%',
                                height:'10%',

                            }}/>
                            </button>


                        </td>
                        <td style={{ position:'absolute', right:'10%' ,width:'10%'}} ><h3 className="tableRow" >{data.counter}</h3></td>
                        <td style={{position:'absolute', right:'20%', width:'20%'}} ><h3 className="tableRow" >{data.driver}</h3></td>
                        <td style={{position:'absolute', width:'20%', right:'40%'}} ><h3 className="tableRow" >{data.car}</h3></td>
                        <td style={{position:'absolute', width:'20%', right:'60%'}} ><h3 className="tableRow" >{data.product_type}</h3></td>
                        <td style={{position:'absolute', width:'10%', height:'40%', right:'80%', textAlign:'center', paddingRight:'15px'}} >



                            <button onClick={this.selectDriver} name={data.car_id} style={{


                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)',
                                height: '100%',
                                width: '100%',
                                right:'10px',
                                bottom: '0%',
                                paddingTop:'4%',
                                textAlign:'center',
                                color:'#DC362E',



                            }}>
                                <img src={VectorIcon} name={data.car_id} alt={'this is car icon'} style={{

                                right:'0px',
                                width:'100%',
                                height:'100%',

                            }}/>

                            </button>

                        </td>

                    </tr> : <div style={{display:'none'}}></div>)})}



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

    newDriverChangeName =(event)=>{

        this.setState({

            newDriverName : event.target.value
        })

    }

    newDriverChangeLastName =(event)=>{

        this.setState({

            newDriverLastName : event.target.value
        })

    }

    newCarChange4 =(event)=>{

        this.setState({

            newCar4:event.target.value

        })

    }

    newCarChange3 =(event)=>{

        this.setState({

            newCar3:event.target.value

        })

    }

    newCarChange2 =(event)=>{

        this.setState({

            newCar2:event.target.value

        })

    }

    newCarChange1 =(event)=>{

        this.setState({

            newCar1:event.target.value

        })

    }

    newDriverCheckBox =()=>{

        this.setState({

            newDriverCheckBox:!this.state.newDriverCheckBox,

        })

    }

    newDriverChangeCarType =(event)=>{


        this.setState({

            newDriverCarType:event.target.value,

        })

    }

    newDriverChangeCarOwner =(event)=>{

        this.setState({

            newDriverCarOwner:event.target.value,

        })

    }

    newProductType = (event) =>{

        this.setState({

            newDriverProductType:event.value,

        })

    }

    responseCreateDriver =(jsonResponse)=>{


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            history.push('/new/order/', {

                car_id : jsonResponse['car_id']

            })

            window.location.reload();

        }

    }

    create_new_driver=()=>{

        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                product_type : this.state.newDriverProductType,
                repetitive : this.state.newDriverCheckBox,
                car_owner : this.state.newDriverCarOwner,
                car_number1 : this.state.newCar1,
                car_number2 : this.state.newCar2,
                car_number3 : this.state.newCar3,
                car_number4 : this.state.newCar4,
                name: this.state.newDriverName,
                last_name: this.state.newDriverLastName,
                car_type: this.state.newDriverCarType,

            })

        }


        fetch(IPServer() + '/slaughterManage/live/driver/new/api/', requestJson)
            .then(data => data.json())
            .then(data => this.responseCreateDriver(data));



    }

    driverPOPUP =()=>{

        const productList = [

            {value:'c', label:'مرغ'},
            {value:'t', label:'بوقلمون'},
            {value:'q', label:'بلدرچین'},

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
                        fontSize: '1.5vw',
                        lineHeight: '28px',
                        borderBottom:' 2px solid #E6E1E5 ',

                    }}>

                        <h1 style={{fontSize: '1.5vw', paddingRight:'20px',top:'6%',position:'absolute',  right:'10px', width:'50%'}}>افزودن راننده جدید</h1>

                        <button onClick={this.new_driver} style={{


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
                            top:'15%',
                            width:'50%',
                            height:'15%',
                            right:'5%',


                        }}>

                            <p style={{fontSize: '1.0vw',}}>نام راننده</p>
                            <input type='text' onChange={this.newDriverChangeName} style={{


                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'80%',
                                paddingRight:'10px',
                                fontSize:'1.5vw',
                                textAlign:'right',


                            }}/>

                        </div>

                        <div style={{

                            position:'absolute',
                            top:'15%',
                            width:'50%',
                            height:'15%',
                            right:'50%',


                        }}>

                            <p style={{fontSize: '1.0vw',}}>نام خانوادگی راننده</p>
                            <input type='text' onChange={this.newDriverChangeLastName} style={{


                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'80%',
                                fontSize:'1.5vw',
                                textAlign:'right',
                                paddingRight:'10px',


                            }}/>

                        </div>

                        <div style={{

                            position:'absolute',
                            top:'30%',
                            width:'100%',
                            height:'20%',
                            right:'5%',

                        }}>

                            <p style={{fontSize: '1.0vw',}} >شماره پلاک کامیون  </p>
                            <input type='text' placeholder='87' onChange={this.newCarChange4} style={{

                                height:'50%',
                                position:'absolute',
                                borderRadius:'0px 10px 10px 0px',
                                right:'0%',
                                width:'20%',
                                textAlign:'center',
                                fontSize:'1.75vw',

                            }}/>

                            <input type='text' placeholder='145' onChange={this.newCarChange3} style={{

                                fontSize:'1.75vw',
                                textAlign:'center',
                                height:'50%',
                                position:'absolute',
                                borderRadius:'0px',
                                right:'20%',
                                width:'30%',

                            }}/>
                            <input type='text' placeholder='ع' onChange={this.newCarChange2} style={{

                                fontSize:'1.75vw',
                                textAlign:'center',
                                height:'50%',
                                position:'absolute',
                                borderRadius:'0px',
                                right:'50%',
                                width:'16.5%'

                            }}/>
                            <input type='text' placeholder='15' onChange={this.newCarChange1} style={{

                                fontSize:'1.75vw',
                                textAlign:'center',
                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px 0px 0px 10px',
                                right:'66%',
                                width:'20%',

                            }}/>


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
                            top:'47%',
                            fontSize:'1.5vw',
                            textAlign:'center',


                        }}><h3 style={{fontSize:"1.0vw",textAlign:'right'}} >نوع بار</h3>
                            <Select  options={productList} placeholder='نوع بار'  defaultvalue={this.state.newDriverProductType} onChange={this.newProductType} />
                        </div>


                        <div style={{

                            position:'absolute',
                            top:'60%',
                            width:'50%',
                            height:'15%',
                            right:'5%',


                        }}>

                            <p style={{fontSize:"1.0vw",textAlign:'right'}} >نوع ماشین</p>
                            <input type='text' onChange={this.newDriverChangeCarType} style={{


                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'80%',
                                paddingRight:'10px',
                                fontSize:'1.5vw',
                                textAlign:'right',

                            }}/>

                        </div>

                        <div style={{

                            position:'absolute',
                            top:'60%',
                            width:'50%',
                            height:'15%',
                            right:'50%',


                        }}>

                            <p style={{fontSize:"1.0vw",textAlign:'right'}}  >مالک کامیون</p>
                            <input type='text' onChange={this.newDriverChangeCarOwner} style={{


                                height:'50%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'80%',
                                fontSize:'1.5vw',
                                textAlign:'right',
                                paddingRight:'10px',


                            }}/>

                        </div>




                        <div style={{

                            position:'absolute',
                            top:'77%',
                            width:'100%',
                            height:'20%',
                            right:'0%',


                        }}>

                            <input type='checkbox' onChange={this.newDriverCheckBox} style={{

                                height:'15%',
                                position:'absolute',
                                borderRadius:'10px',
                                right:'0%',
                                width:'15%',
                                top:'0%',
                                paddingRight:'0%',
                                fontSize:'1.5',
                                textAlign:'right',

                            }}/>

                            <span style={{


                                position:'absolute',
                                right:'16%',
                                top:'5%',
                                fontSize:'1.0vw'

                            }}>آیا میخواهید به لیست راننده های پر تکرار اضافه شود ؟</span>


                        </div>

                    </div>

                    <div style={{

                        position:'absolute',
                        width:'100%',
                        height:'17.5%',
                        bottom:'2.5%',
                        right:'5%',

                    }}>

                        <button onClick={this.create_new_driver} style={{

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
                            fontSize:'1.5vw',
                            bottom:'0%',
                            left:'10%'

                        }}   >افزودن راننده جدید </button>


                    </div>


                </div>


            )

        }else{
            return (<div style={{display:'none'}}></div>)
        }


    }

    driverList =()=>{

        const productList = [

            {value:0, label:'همه'},
            {value:1, label:'مرغ'},
            {value:2, label:'بوقلمون'},
            {value:3, label:'بلدرچین'},

        ]


        const driverList_init = this.state.all_driver.map(data => {

            const x = {value:data.driver_id, label:data.driver};
            return(x)

        });

        const x = [

            {value:'0', label:'همه'},
        ];

        const driverList_dict = [...x, ...driverList_init];


        return(

            <div style={{

                border: '1px solid #E6E1E5',
                position:'absolute',
                height:'1750px',
                width:'98%',
                top:'250px',
                right:'1%',
                marginTop:'1%',
                borderRadius:'50px',


            }}>

                <div style={{

                    position:'absolute',
                    width:'100%',
                    height:'5%',
                    borderBottom:'1px solid #E6E1E5',


                }}>


                    <h2 style={{

                        position: 'absolute',
                        width: '17%',
                        height: '100%',
                        right: '5%',
                        top: '0%',

                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: '400px',
                        fontSize: '2.5vw',
                        lineHeight: '36px',

                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'right',

                        color: '#6750A4',


                    }} >لیست راننده ها</h2>

                    <button onClick={this.new_driver} style={{

                        position:'absolute',
                        width:'15%',
                        height:'70%',
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
                        fontSize:'2.0vw',
                        top:'10%',
                        left:'5%'

                    }}   >+ راننده جدید </button>



                </div>


                <div style={{

                    position:'absolute',
                    width:'100%',
                    height:'90%',
                    top:'5%',
                    right:'0px',

                }}>

                    <div style={{

                        position:'absolute',
                        width:'100%',
                        height:'100px',

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
                                top:'25%',
                                fontSize:'2.0vw',
                                textAlign:'center',



                            }}><h4 style={{textAlign:'right', fontSize:'2.0vw'}} >انتخاب راننده</h4>
                                <Select  options={driverList_dict} placeholder='راننده ها'  defaultvalue={this.state.DriverChange} onChange={this.DriverChange}/>
                            </div>


                            <div style={{


                                position:'absolute',
                                direction:'rtl',
                                borderRadius:'20px',
                                backgroundColor:'rgba(200,200,200, 0.0)',
                                color: 'rgb(0,0,0)',
                                width:'20%',
                                height:'100%',
                                right:'27%',
                                top:'25%',
                                fontSize:'2.0vw',
                                textAlign:'center',



                            }}><h4 style={{textAlign:'right',fontSize:'2.0vw',}} >نوع بار</h4>
                                <Select  options={productList} placeholder='نوع بار'  defaultvalue={this.state.productType} onChange={this.productTypechange}/>
                            </div>

                            <button onClick={this.driverFilter} style={{

                                position:'absolute',
                                width:'20%',
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
                                fontSize:'2.0vw',
                                top:'60%',
                                left:'5%'

                            }}>اعمال فیلتر</button>

                        </div>

                        <div style={{

                            position:'absolute',
                            direction:'rtl',
                            height:'80%',
                            width:'90%',
                            top:'12.5%',
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
                                    fontSize:'1.25vw',
                                    fontFamily:'Roboto',
                                    height : '10%',
                                    width:'100%',
                                    position:'absolute',
                                    paddingTop:'1%',

                                }}>

                                    <td style={{ position:'absolute', right:'0%' ,width:'10%'}} ></td>
                                    <td style={{ position:'absolute', right:'10%' ,width:'10%'}} ><h2 className="tableHead" >ردیف</h2></td>
                                    <td style={{position:'absolute', right:'20%', width:'20%'}} ><h2 className="tableHead" >نام راننده</h2></td>
                                    <td style={{position:'absolute', width:'20%', right:'40%'}} ><h2 className="tableHead">پلاک کامیون</h2></td>
                                    <td style={{position:'absolute', width:'20%', right:'60%'}} ><h2 className="tableHead">نوع بار</h2></td>

                                    <td style={{position:'absolute', width:'20%', right:'80%'}} ></td>

                                </tr></thead>


                                {this.tableRow()}

                            </table>


                        </div>

                    {this.driverPOPUP()}


                    </div>

                    <label for='uploadExcel' style={{

                        position:'absolute',
                        width:'150px',
                        height:'75px',
                        direction:'rtl',
                        borderRadius:'100px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1.25vw',
                        bottom:'0%',
                        right:'5%',

                    }} >اپلود اکسل سفارشات :</label>

                    <input type='file' accept=".xlsx,.xls" onChange={this.UploadExcel} style={{

                        position:'absolute',
                        width:'150px',
                        height:'75px',
                        direction:'rtl',
                        borderRadius:'100px',
                        color:'rgb(255,255,255)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 24px 10px 16px',
                        gap: '8px',
                        fontSize:'1.0vw',
                        bottom:'0%',
                        right:'12%',

                    }} id='uploadExcel' />


                    <button onClick={this.download_product_owner_excel} style={{

                        position:'absolute',
                        width:'10%',
                        height:'75px',
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
                        fontSize:'1.0vw',
                        bottom:'0%',
                        right:'20%'

                    }}>دانلود اکسل صاحب بار</button>

                    <button onClick={this.download_agriculture_excel} style={{

                        position:'absolute',
                        width:'10%',
                        height:'75px',
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
                        fontSize:'1.0vw',
                        bottom:'0%',
                        right:'35%'

                    }}>دانلود اکسل مرغداری</button>



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

                <Header title='ثبت سفارش جدید' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />

                <div style={{

                    position:'absolute',
                    top:'175px',
                    left:'0%',
                    color:'#4A4458',
                    width:'100%',
                    textAlign:'center',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '1.5vw',
                    lineHeight: '36px',

                }}>
                    برای ثبت سفارش جدید ابتدا راننده را انتخاب کنید

                </div>

                {this.driverList()}

                {this.rightDashboardActivate()}
            </div>

        )
    }
}

export default withCookies(LiveDriverList);