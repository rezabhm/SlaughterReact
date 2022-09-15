import React , {Component} from 'react';
import './Css/ProductionReportCss.css';
import ExitIconPOPUP from '../../../Image/slaughter/exit.svg';
import Select from "react-select";


//defaultvalue={this.state.filterSlaughterType}
//options={this.state.driver_list}

class FilterPopUp extends Component {



    render =()=> {

        const receiver_unit = [

            {value:'', label:'هیچدام'},
            {value:'sal', label:'فروش'},
            {value:'seg', label:'قطعه بندی'},
            {value:'pre', label:'پیش سرد'},
            {value:'ftl', label:'تونل انجماد'},
            {value:'tsh', label:'ضایعات'},
            {value:'chl', label:'چیلر'},
            {value:'prd', label:'تولید'},

        ]

        if (this.props.filterPopUpShow) {

            return (

                <div className='filter-popup-div'>

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

                            <button onClick={this.props.popupButton} style={{

                                backgroundColor: 'rgba(0,0,0,0)',
                                height: '10%',
                                width: '10%',
                                position:'absolute',
                                left:'0%',
                                top: '0%',
                                fontSize:'1.5vw',
                                margin: '5%',
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
                                top:'20%',
                                fontSize:'20px',
                                textAlign:'center',


                            }}>
                                <h4 style={{textAlign:'right', fontSize:'1vw' }} >صاحب محصول</h4>
                                
                                <Select   
                                    
                                    options={this.props.product_owner_list} 
                                    placeholder='صاحب محصول'   
                                    onChange={this.props.changeProductOwner} 
                                    style={{fontSize:'1vw'}} 
                                   
                                />

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
                                top:'40%',
                                fontSize:'20px',
                                textAlign:'center',


                            }}><h4 style={{textAlign:'right', fontSize:'1vw' }} >نوع محصول</h4>
                                
                                <Select   
                                
                                    options={this.props.product_list}
                                    placeholder='نوع محصول'   
                                    onChange={this.props.changeProduct} 
                                    style={{fontSize:'1vw'}} 
                                    
                                />
                            
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
                                top:'60%',
                                fontSize:'20px',
                                textAlign:'center',


                            }}><h4 style={{textAlign:'right', fontSize:'1vw' }} >واحد تحویل گیرنده</h4>
                                
                                <Select   
                                    
                                    options={receiver_unit}
                                    placeholder='واحد تحویل گیرنده'   
                                    onChange={this.props.changeReceiverUnit} 
                                    style={{fontSize:'1vw'}} />
                            
                            
                            </div>



                        </div>






                </div>

            )


        }

    }




}

export default FilterPopUp;