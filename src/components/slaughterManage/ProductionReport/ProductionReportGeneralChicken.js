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

const history = createBrowserHistory();

class ProductionReportGeneralChicken extends Component {

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

        columns : [

            {
              id: 'tsh',
              label: 'ضایعات',
              minWidth: 170,
              align: 'right',
              format: (value) => value.toFixed(2),
            },

            {
              id: 'ftl',
              label: 'تونل انجماد',
              minWidth: 170,
              align: 'right',
              format: (value) => value.toFixed(2),
            },

            {
              id: 'pre',
              label: 'پیش سرد',
              minWidth: 170,
              align: 'right',
              format: (value) => value.toFixed(2),
            },

            {
                id: 'seg',
                label: 'قطعه بندی',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toFixed(2),
            },

            {
                id: 'sal',
                label: 'فروش',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toFixed(2),
            },

            {
                id: 'product',
                label: 'نوع محصول',
                minWidth: 170,
                align: 'right',
                format: (value) => value.toLocaleString('fa-IR'),
            },
            
            {
                id: 'counter',
                label: 'ردیف',
                minWidth: 170,
                align: 'right',
                format: (value) => value,
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
                product_type : 'c',

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
                product_type:'c'

            })

        } ;

        fetch(IPServer() + '/slaughterManage/production/report/list/api/', requestJson)
            .then(data => data.json())
            .then(data => this.handleFilterSubmit(data));


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


            return (

                <Grid container style={{marginTop:'75px'}} >

                    <Grid item xs={3}>
                        <h2 style={{direction:'rtl', textAlign:'right', margin:'50px' , color:'#6750A4'}}>وزن زنده : {this.state.product_owner_live_weight[product_owner]}</h2>
                    </Grid>

                    <Grid item xs={9}>
                        <h2 style={{direction:'rtl', textAlign:'right', margin:'50px' , color:'#6750A4'}}>{product_owner}</h2>
                    </Grid>


                    <Grid item xs={12}>
                        <SimpleTable  columns={this.state.columns} data={data_list} />
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

                    <Header title=' گزارش گیری تولید (واحد مرغ)' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />
                    
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


export default withCookies(ProductionReportGeneralChicken);
