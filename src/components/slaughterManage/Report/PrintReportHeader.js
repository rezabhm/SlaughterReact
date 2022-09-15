import React, {Component} from "react";
import TiyurLogo from "../../../Image/slaughter/Toyore zanjan logo 2.svg";
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

class PrintReportHeader extends Component{

    redirectMain = () => {

        history.push('/report/live/weighbridge/');
        window.location.reload();

    }

    render() {

        return(

            <div style={{

                position: 'absolute',
                width: '100%',
                height: '250px',
                left: '0px',
                top: '0px',
                borderColor:'rgb(0,0,0)',
                border: '1px solid #E6E1E5',
                marginRight:'0px',
                textAlign: 'center',

                backgroundColor: '#FFFFFF',

            }}>

                <div style={{

                    position: 'absolute',
                    width: '100%',
                    height: '40%',
                    left: '0%',
                    top: '5%',

                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '45px',
                    lineHeight: '40px',

                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',


                    color: '#6750A4',



                }}>
                    <button onClick={this.redirectMain} style={{


                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: 'rgba(0,0,0,0)',
                        height: '10%',
                        width: '100%',
                        top: '0%',


                    }}><img src={TiyurLogo} alt='tiyur logo2'/></button>

                </div>

                <h1 style={{


                    position: 'absolute',
                    width: '100%',
                    height: '40px',
                    left: '0%',
                    top: '50%',

                    fontFamily: 'IRANSans_LFN',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '45px',

                    alignItems: 'center',
                    textAlign: 'center',


                    color: '#6750A4',


                }}>{this.props.title}</h1>



            </div>

        );


    }



}

export default PrintReportHeader;