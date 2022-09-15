import React from "react";
import { useLocation} from "react-router-dom";
import {withCookies} from "react-cookie";

const GetLevelData =(props)=>{

    const location = useLocation();

    const constructor =(props)=> {

        props.setLocation(location)

    }

    if(props.report_num === 0) {
        constructor(props);
    }

    return(
        <div></div>
    )

}

export default withCookies(GetLevelData);