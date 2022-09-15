import React, {Component} from "react";
import Header from "../Main/Header";
import RightDashbord from "../Main/Main";
import DriverInf from "./DriverInformation";
import ProductOwnerSelect from "./ProductOwner";


class NewOrder extends Component{

    state={

        car_id:'',
        driverINF_num : 0,
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


    setCarID =(car_id)=>{

        if(this.state.car_id !== car_id){
            this.setState({
                car_id : car_id,
                driverINF_num : 1
            })}

    }

    render() {
        const { innerWidth: width, innerHeight: height } = window;

        return(

            <div style={{

                height:'1500px',
                width:{width},

            }}>

                <Header title='باسکول زنده' rightDashboardButton={this.state.RightDashbord} rightDashboardClickButton={this.rightDashboardButtonClick} />
                <div style={{

                    border: '1px solid #E6E1E5',
                    position:'absolute',
                    height:'89%',
                    borderStyle:'solid solid none solid',
                    width:'98%',
                    top:'210px',
                    right:'1%',
                    borderRadius:'50px',


                }}>
                    <DriverInf setCar_ID={this.setCarID}  driverINF_num={this.state.driverINF_num} top='0%'/>

                </div>

                <div style={{

                    borderStyle: 'none solid solid solid',
                    borderColor:'rgba(0,0,0,0.15)',
                    borderWidth:'2px',
                    position:'absolute',
                    height:'800px',
                    width:'98%',
                    top:'700px',
                    right:'1%',
                    borderRadius:'0px 0px 50px 50px',


                }}>
                    <ProductOwnerSelect car_id={this.state.car_id} top='0%'/>

                </div>

                {this.rightDashboardActivate()}

            </div>
        )

    }


}

export default NewOrder;