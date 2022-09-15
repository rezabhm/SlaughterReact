import React, {useState} from "react";
import Header from "../Main/Header";
import { Right_Menu_controller } from "../utils/utils";
import { Grid} from "@material-ui/core";
import {main_header} from './css/main';
import HeaderBody1Button from '../components_main/HeaderBody';
import ListFilter1 from "../components_main/ListFilter1";
import {get_sale_driver_list_API , get_sale_watchman_table_list_API} from '../utils/API';
import { Cookies } from "react-cookie";
import SimpleTable1 from "../components_main/simpleTable1";

const cookie = new Cookies();


function SaleWatchMan() {

    /////////////////////////////
    /* parameter */

    const [menu, setMenu] = useState({

        RightDashboard : false,

    });

    const [driverFilter, set_driverFilter] = useState('')

    const table_columns = [
        'ردیف',
        'راننده',
        'شماره پلاک کامیون',
        'زمان ورود',
        'وضعیت',
        '',
    ];


    /////////////////////////////
    /* Function */


    const Right_Menue_handler =()=> {


        setMenu({
    
            RightDashboard : !menu.RightDashboard,
    
        })
    
    }

    const Sale_Driver_FilterChange =(event, value)=>{

        set_driverFilter(value.id)

    }




    return (

        <div>

            <Header title='نگهبانی (فروش)' rightDashboardButton={menu.RightDashboard} rightDashboardClickButton={Right_Menue_handler} />

            <div  style={main_header}>

                    
                <HeaderBody1Button header='لیست ماشین ها' left_text1='+ ورود ماشین یخچال' />
                <ListFilter1 id='لیست راننده های یخچال' options={get_sale_driver_list_API()}  selectValueChange={Sale_Driver_FilterChange} />

                <Grid container >

                    <Grid items xs={12} style={{padding:'4%'}}>
                        <SimpleTable1 columnsNum={6} columns={table_columns} data={get_sale_watchman_table_list_API(driverFilter)} id='tableWatchman' />
                    </Grid>

                </Grid>

            </div>

            
            {
            
            // active right menu if click on right-top button
            Right_Menu_controller(menu.RightDashboard)
            
            }

        </div>

    )

}

export default SaleWatchMan;