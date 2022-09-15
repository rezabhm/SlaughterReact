import React from "react";
import { useLocation} from "react-router-dom";
import {withCookies} from "react-cookie";

const OrderHeader =(props)=>{

    const location = useLocation();
    console.log(location)

    const constructor =(props)=> {

        props.setLocation(location)
        console.log(location)

    }

    if(props.report_num === 0) {
        constructor(props);
    }

    return(
        <div></div>
    )

}

export default withCookies(OrderHeader);