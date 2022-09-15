import React , { Component } from 'react';
import './Css/ProductionReportCss.css';
import Header from '../Main/Header';
import RightDashbord from '../Main/Main';
import FilterHeader from './FilterHeader';
import FilterPopUp from './FilterPopUp';
import { createBrowserHistory } from "history";
import { withCookies } from "react-cookie";
import { IPServer } from '../../../data';
import SimpleTable from '../Main/simpleTable';
import { Grid } from '@material-ui/core';
import { IconButton } from "@material-ui/core";
import DownloadIcon from '@mui/icons-material/Download';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const history = createBrowserHistory();

class ProductionReportDetailTurkey extends Component {


    state = {

        RightDashbord : false,
        fromTime : '',
        toTime : '',
        filterPopUpShow : false,
        product_owner: '',
        product: '',
        receiver_unit: '',
        production_list:[],
        product_owner_live_weight: {},
        excel_data : {},

        columns : [


            {
                id: 'time',
                label: 'تاریخ وزن کشی',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toLocaleString('fa-IR'),
                width:'20%',

            },

            {
                id: 'send_place_id',
                label: 'ایدی پیش سرد/تونل انجماد',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toFixed(1),
                width:'5%',
            },

            {
                id: 'data_type',
                label: 'توع وزن کشی',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toLocaleString('fa-IR'),
                width:'20%',
            },

            {
                id: 'live_driver',
                label: 'راننده زنده',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toLocaleString('fa-IR'),
                width:'20%',
            },


            {
                id: 'packing_num',
                label: 'تعداد بسته بندی',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toFixed(1),
                width:'10%',
            },

            {
              id: 'box_add_weight',
              label: 'وزن جعبه دلخواه',
              minWidth: 170,
              align: 'right',
              format: (value) => value.toFixed(1),
              width:'10%',
            },

            {
              id: 'box_add_num',
              label: 'تعداد جعبه با وزن دلخواه',
              minWidth: 170,
              align: 'right',
              format: (value) => value.toFixed(1),
              width:'10%',
            },

            {
              id: 'box_2_5k',
              label: 'تعداد جعبه ۲.۵ کیلویی',
              minWidth: 170,
              align: 'right',
              format: (value) => value.toFixed(1),
              width:'10%',
            },

            {
                id: 'box_2k',
                label: 'تعداد جعبه ۲ کیلویی',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toFixed(1),
                width:'10%',
            },

            {
                id: 'weight',
                label: 'وزن خالص',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toFixed(2),
                width:'10%',
            },
            {
                id: 'receiver_return_unit',
                label: 'واحد تحویل گیرنده',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toLocaleString('fa-IR'),
                width:'20%',
            },
           
            {
                id: 'product',
                label: 'نوع محصول',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toLocaleString('fa-IR'),
                width:'20%',
            },
            
            {
                id: 'counter',
                label: 'ردیف',
                minWidth: 170,
                align: 'right',
                format: (value) => value,
                width:'5%',
            },
  
          ],

    }

    constructor (props){
        
        super(props)

        this.get_product_owner_list()
        this.get_product_list()

    }


    handleProductOwnerList =(jsonResponse)=>{


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                product_owner_list:jsonResponse['po_list'],

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

        fetch(IPServer() + '/slaughterManage/productOwner/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleProductOwnerList(data));


    }


    
    handleProductList =(jsonResponse)=>{


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                product_list:jsonResponse['product_list_2'],

            })

        }
    }

    get_product_list =()=>{
        
        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                receiver_unit :'',
                product_type : 't',

            })

        } ;

        fetch(IPServer() + '/slaughterManage/production/product/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleProductList(data));


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


    // change time from filter header component
    
    /* 
    
    how to convert date to jalali date :

        console.log(this.state.fromTime.toLocaleDateString('fa-IR'))
        console.log(this.state.toTime.toLocaleDateString('fa-IR'))
    
    */

    changeToTime = (time)=>{ this.setState({toTime : time}) }
    changeFromTime = (time)=>{ this.setState({fromTime : time}) }

    // change filter paramtere
    changeProductOwner = (data) =>{ this.setState({ product_owner: data.value }) }
    changeProduct = (data) =>{ this.setState({ product: data.value }) }
    changeReceiverUnit = (data) =>{ this.setState({ receiver_unit: data.value }) }


    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////

    // filter submit button
    // when click we must send data to server and receive data(report list) from server

    handleFilterSubmit =(jsonResponse)=>{


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            this.props.cookies.remove('token');
            this.props.cookies.remove('username');
            this.props.cookies.remove('access_level');

            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            this.setState({

                production_list : jsonResponse['production_list'],
                product_owner_live_weight : jsonResponse['product_owner_live_weight']

            })


        }
    }


    filterSubmit =()=>{


        const requestJson = {

            method:'POST',
            mod:'core',
            headers: { "Content-type":"application/json;charset=utf-8"},
            body: JSON.stringify({

                token: this.props.cookies.get('token'),
                receiver_unit : this.state.receiver_unit,
                product_owner : this.state.product_owner,
                product : this.state.product,
                fromTime : (this.state.fromTime === '') ? '' : this.state.fromTime.toLocaleDateString('fa-IR'),
                ToTime : (this.state.toTime === '') ? '' : this.state.toTime.toLocaleDateString('fa-IR'),
                product_type:'t'

            })

        } ;

        fetch(IPServer() + '/slaughterManage/production/report/detail/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleFilterSubmit(data));


    }

    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////

    /* download excel from table with data json input */

    download_excel =(data, product_owner_name)=>{

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workBook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workBook, worksheet, 'production data')

        // buffer
        let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})

        //Binary string
        XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
        
        //Download
        XLSX.writeFile(workBook,product_owner_name + ".xlsx")
  
    }


    /* download pdf from table with data json input */

    download_pdf =(data, product_owner_name, id)=>{

        const doc = new jsPDF()

        doc.text('product owner', 20, 10)

        doc.autoTable({html : '#' +  id})

        /*
        doc.autoTable({
          theme: "grid",
          columns: this.state.columns.map(col => ({ ...col, dataKey: col.label })),
          body: data
        })
        doc.save(product_owner_name + '.pdf')
        */

    }


    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////


    returnTable =()=>{

        return (this.state.production_list.map(( data )=>{


            var counter = 0;
            var product_owner = '';
            var data_list = [];

            data.map( (dt) => {

                if (counter === 0) {

                    product_owner = dt


                } else {


                    data_list = dt

                }

                counter = counter +1;

            } )

            let id = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
            id = id.toString() + data_list.length.toString();


            return (

                <Grid container style={{marginTop:'75px'}} >


                    <Grid item xs={1} >

                        <IconButton size='large' style={{width:'80%', height:'80%' }} onClick={this.download_excel(data_list, product_owner)} >

                            <DownloadIcon style={{width:'50%', height:'50%'}} />

                        </IconButton>

                    </Grid>

                    <Grid item xs={1}>


                    </Grid>


                    <Grid item xs={2}>
                        <h2 style={{direction:'rtl', textAlign:'right', margin:'50px' , color:'#6750A4'}}>وزن زنده : {this.state.product_owner_live_weight[product_owner]}</h2>
                    </Grid>

                    <Grid item xs={8}>
                        <h2 style={{direction:'rtl', textAlign:'right', margin:'50px' , color:'#6750A4'}}>{product_owner}</h2>
                    </Grid>


                    <Grid item xs={12}>
                        <SimpleTable  columns={this.state.columns} data={data_list} table_id={'#' + id}/>
                    </Grid>


                </Grid>

            )

        }))

    }


    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////

    render =()=> {



        const { innerWidth: width, innerHeight: height } = window;


        return (
            <div className="App" style={{

                height:'2000px',
                width:{width},
                overflow:'scroll',

            }} >
                    <style type="text/css">
                        {"@media print{@page {size: landscape}}"}
                    </style>

                    <Header title=' گزارش گیری ریز تولید (واحد بوقلمون)' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />
                    
                    <div style={{

                        position:'absolute',
                        width:'96%',
                        right:'2%',
                        top:'200px',
                        height:'1800px' ,
                        border:'1px solid rgba(0,0,0,0.25)',
                        padding:'50px',

                    }}>

                        <FilterHeader 
                            
                            changeToTime={this.changeToTime} 
                            changeFromTime={this.changeFromTime} 
                            toTime={this.state.toTime} 
                            fromTime={this.state.fromTime} 
                            
                            popupButton={()=> {this.setState({
                                
                                filterPopUpShow: !this.state.filterPopUpShow
                            
                            })}}

                            filterSubmit={this.filterSubmit}

                            />

                        {this.returnTable()}

                        <div style={{

                            position:'absolute',
                            top:'0px',
                            right:'0%',
                            width:'100%',
                            zIndex:'1',

                        }}>
                            <FilterPopUp 
                                
                                filterPopUpShow={this.state.filterPopUpShow} 
                                
                                popupButton={()=> {this.setState({
                                    
                                    filterPopUpShow: !this.state.filterPopUpShow
                                
                                })}}

                                product_owner_list={this.state.product_owner_list}
                                product_list={this.state.product_list}
                                changeProductOwner={this.changeProductOwner}
                                changeReceiverUnit={this.changeReceiverUnit}
                                changeProduct={this.changeProduct}
                            
                            />
                        </div>

                    </div>

                    {this.rightDashboardActivate()}

            </div>
        )

    }


}

export default withCookies(ProductionReportDetailTurkey);