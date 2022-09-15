import React, { Component } from "react";
import '../../../index.css';


class ProductionHeader extends Component{


    HeaderButtonClick =(event)=>{

        this.props.ChangeHeaderProduction(event.target.name);
        
    }

    constructor(props){

        super(props)

    }

    render(){

        const ProductionButtonColor = (this.props.HeaderType === 'Production') ? '#4F378B' : '#625B71';
        const ProductionBackGroundColor = (this.props.HeaderType === 'Production') ? '#F6EDFF' : '#FFFFFF';
        const ProductionBorderColor = (this.props.HeaderType === 'Production') ? '#4F378B' : '#FFFFFF';


        const PreColdButtonColor = (this.props.HeaderType === 'PreCold') ? '#827500' : '#625B71';
        const PreColdBackGroundColor = (this.props.HeaderType === 'PreCold') ? '#FFFDED' : '#FFFFFF';
        const PreColdBorderColor = (this.props.HeaderType === 'PreCold') ? '#EED602' : '#FFFFFF';


        const FreezeTunnelButtonColor = (this.props.HeaderType === 'FreezTunnel') ? '#B54800' : '#625B71';
        const FreezeTunnelBackGroundColor = (this.props.HeaderType === 'FreezTunnel') ? '#FFF4ED' : '#FFFFFF';
        const FreezeTunnelBorderColor = (this.props.HeaderType === 'FreezTunnel') ? '#E35C02' : '#FFFFFF';


        const ReturnWeightingButtonColor = (this.props.HeaderType === 'ReturnWeighting') ? '#021AEE' : '#625B71';
        const ReturnWeightingBackGroundColor = (this.props.HeaderType === 'ReturnWeighting') ? '#F5F6FF' : '#FFFFFF';
        const ReturnWeightingBorderColor = (this.props.HeaderType === 'ReturnWeighting') ? '#021AEE' : '#FFFFFF';


        const ReturnSaleButtonColor = (this.props.HeaderType === 'ReturnSale') ? '#4D8000' : '#625B71';
        const ReturnSaleBackGroundColor = (this.props.HeaderType === 'ReturnSale') ? '#F5FFE6' : '#FFFFFF';
        const ReturnSaleBorderColor = (this.props.HeaderType === 'ReturnSale') ? '#4D8000' : '#FFFFFF';


        return(
            
            <div style={{

                position:'absolute',
                width:'100%',
                height:'100px',
                border:'2px',
                borderColor:'#E6E1E5',
                borderStyle:'none none solid none',
                
            }}>


                <div style={{

                    position:'absolute',
                    height:'100%',
                    width:'20%',
                    right:'0%',
                    color:ProductionButtonColor,
                    backgroundColor:ProductionBackGroundColor,


                }} >

                    <button name='Production' onClick={this.HeaderButtonClick} style={{

                        backgroundColor:'rgba(0,0,0,0)',
                        border:'none',
                        width:'100%',
                        height:'100%',
                        boreder:'150px',
                        borderStyle:'none none solid none',
                        borderColor : ProductionBorderColor,
                        fontSize:'2vw',
                        color: ProductionButtonColor,
                            
                    }} className='font-shabnam-main' >

                       تولید

                    </button>

                </div>



                <div style={{

                    position:'absolute',
                    height:'100%',
                    width:'20%',
                    right:'20%',
                    color:PreColdButtonColor,
                    backgroundColor:PreColdBackGroundColor,
                    borederSize:'0px 0px 5px 0px',
                    borderColor : PreColdBorderColor,


                    }} >

                    <button name='PreCold' onClick={this.HeaderButtonClick} style={{

                        backgroundColor:'rgba(0,0,0,0)',
                        border:'none',
                        width:'100%',
                        height:'100%',
                        boreder:'150px',
                        borderStyle:'none none solid none',
                        borderColor : PreColdBorderColor,
                        fontSize:'2vw',
                        color: PreColdButtonColor,
                        
                        }} >

                            خروج از پیش سرد

                        
                    </button>

                </div>



                <div style={{

                    position:'absolute',
                    height:'100%',
                    width:'20%',
                    right:'40%',
                    color:FreezeTunnelButtonColor,
                    backgroundColor:FreezeTunnelBackGroundColor,
                    borederSize:'0px 0px 5px 0px',
                    borderColor : FreezeTunnelBorderColor,


                    }} >

                    <button name='FreezTunnel' onClick={this.HeaderButtonClick}  style={{

                        backgroundColor:'rgba(0,0,0,0)',
                        border:'none',
                        width:'100%',
                        height:'100%',
                        boreder:'150px',
                        borderStyle:'none none solid none',
                        borderColor : FreezeTunnelBorderColor,
                        fontSize:'2vw',
                        color: FreezeTunnelButtonColor,
                        

                        }}>
                            خروج از تونل انجماد

                    </button>

                </div>



                <div style={{

                    position:'absolute',
                    height:'100%',
                    width:'20%',
                    right:'60%',
                    color:ReturnWeightingButtonColor,
                    backgroundColor:ReturnWeightingBackGroundColor,
                    borederSize:'0px 0px 5px 0px',
                    borderColor : ReturnWeightingBorderColor,


                    }}  
                                    >

                    <button name='ReturnWeighting' onClick={this.HeaderButtonClick} style={{

                            backgroundColor:'rgba(0,0,0,0)',
                            border:'none',
                            width:'100%',
                            height:'100%',
                            boreder:'150px',
                            borderStyle:'none none solid none',
                            borderColor : ReturnWeightingBorderColor,
                            fontSize:'2vw',
                            color: ReturnWeightingButtonColor,
                            

                            }}>
                                برگشت از بارگیری


                    </button>

                </div>


                <div  style={{

                    position:'absolute',
                    height:'100%',
                    width:'20%',
                    right:'80%',
                    color:ReturnSaleButtonColor,
                    backgroundColor:ReturnSaleBackGroundColor,
                    borederSize:'0px 0px 5px 0px',
                    borderColor : ReturnSaleBorderColor,


                    }}>

                    <button name='ReturnSale' onClick={this.HeaderButtonClick} style={{

                            backgroundColor:'rgba(0,0,0,0)',
                            border:'none',
                            width:'100%',
                            height:'100%',
                            boreder:'150px',
                            borderStyle:'none none solid none',
                            borderColor : ReturnSaleBorderColor,
                            fontSize:'2vw',
                            color: ReturnSaleButtonColor,
                            

                            }}>
                                برگشت از فروش
                    </button>

                </div>



            </div>



        )


    }


}


export default ProductionHeader;