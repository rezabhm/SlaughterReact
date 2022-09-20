import React, {useState} from "react";
import Header from "../Main/Header";
import { Right_Menu_controller } from "../utils/utils";
import { Grid} from "@material-ui/core";

import {
    button_purple, button_text_purple,
    driver_popup,
    main_header, popup_body_grid,
    popup_header,
    popup_header_grid,
    popup_input,
    popup_text
} from './css/main';

import HeaderBody2Button from '../components_main/HeaderBody';
import ListFilter1 from "../components_main/ListFilter1";
import Get_sale_watchman_table_list_API from '../utils/GetSaleWatchmanListAPI';
import SimpleTable1 from "../components_main/simpleTable1";
import Get_Sale_Driver_List_API from "../utils/SaleDriverListAPI";
import PopUp from "../components_main/PopUp";

const SaleWatchMan =(props)=> {

    /////////////////////////////
    /* parameter */

    const [menu, setMenu] = useState({

        RightDashboard : false,

    });

    // const [watchman_table_list, set_watchman_table_list] = useState([])

    const [driverFilter, set_driverFilter] = useState('')
    const [select_sale, set_select_sale] = useState('')
    const [sale_watchman_list, set_sale_watchman_list] = useState([])
    const [sale_driver_list, set_sale_driver_list] = useState([])
    const [create_driver_popup, set_create_driver_popup] = useState(false)
    const [create_car_popup, set_create_car_popup] = useState(false)

    // driver create popup
    const [driver_name, set_driver_name] = useState('')
    const [driver_last_name, set_driver_last_name] = useState('')
    const [car_num1, set_car_num1] = useState('')
    const [car_num2, set_car_num2] = useState('')
    const [car_num3, set_car_num3] = useState('')
    const [car_num4, set_car_num4] = useState('')

    const table_columns = [

        {label:'ردیف', id:'counter', width:'18%', rightPos:'0%'},
        {label:'راننده', id:'driver', width:'18%', rightPos:'18%'},
        {label:'شماره پلاک کامیون', id:'car', width:'18%', rightPos:'36%'},
        {label:'زمان ورود', id:'enter_time', width:'18%', rightPos:'54%'},
        {label:'وضعیت', id:'status', width:'18%', rightPos:'72%'},
        {label:'', id:'click', width:'10%', rightPos:'90%'},

    ];


    /////////////////////////////
    /* Function */


    const Right_Menu_handler =()=> {

        setMenu({
    
            RightDashboard : !menu.RightDashboard,
    
        })
    
    }

    // filter watchman list
    const watchman_list_filter =()=>{

        const filter_data = [];

        sale_watchman_list.map(data => {

            if (driverFilter === data.driver){

                filter_data.push(data)

            }
        })

        set_sale_watchman_list(filter_data)

    }

    const driver_create_popup =()=>{

        if(create_driver_popup){
            console.log('popup')

            const header_dict = {

                grid_style:popup_header_grid,
                closePopup:()=> set_create_driver_popup(!create_driver_popup),
                text_style:popup_header,
                text:'اضافه کردن راننده جدید'

            }

            const rows = [

                [
                    {

                        type:'input_text',
                        xs:6,
                        grid_style: {},
                        placeholder:'',
                        input_style:popup_input,
                        inputOnChange:set_driver_name,

                    },
                    {

                        type:'text',
                        xs:6,
                        grid_style:{},
                        text_style:popup_text,
                        text:'نام راننده : '

                    },

                ],
                [


                    {

                        type:'input_text',
                        xs:6,
                        grid_style: {},
                        placeholder:'',
                        input_style:popup_input,
                        inputOnChange:set_driver_last_name,

                    },
                    {

                        type:'text',
                        xs:6,
                        grid_style:{},
                        text_style:popup_text,
                        text:' نام خانوادگی راننده : '

                    },

                ],
                [

                    {

                        type:'empty',
                        xs:6,

                    },


                    {

                        type:'text',
                        xs:6,
                        grid_style:{},
                        text_style:popup_text,
                        text:' شماره پلاک ماشین : '

                    },

                ],

                [

                    {

                        type:'input_text',
                        xs:3,
                        grid_style: {},
                        placeholder:'12',
                        input_style:popup_input,
                        inputOnChange:set_car_num1,

                    },
                    {

                        type:'input_text',
                        xs:1,
                        grid_style: {},
                        placeholder:'ع',
                        input_style:popup_input,
                        inputOnChange:set_car_num2,

                    },
                    {

                        type:'input_text',
                        xs:5,
                        grid_style: {},
                        placeholder:'458',
                        input_style:popup_input,
                        inputOnChange:set_car_num3,

                    },
                    {

                        type:'input_text',
                        xs:3,
                        grid_style: {},
                        placeholder:'87',
                        input_style:popup_input,
                        inputOnChange:set_car_num4,

                    },



                ],

                [

                    {

                        type:'button',
                        xs:12,
                        grid_style: {paddingLeft:'12.5%'},
                        button_style:button_purple,
                        buttonClick: ()=> console.log({

                            driver_name:driver_name,
                            driver_last_name:driver_last_name,
                            car_number1:car_num1,
                            car_number2:car_num2,
                            car_number3:car_num3,
                            car_number4:car_num4,


                        }),
                        button_text_style:button_text_purple,
                        button_text:'ثبت اطلاعات'

                    }

                ]

            ]


            return <PopUp

                div_style={driver_popup}
                header={header_dict}
                rows={rows}
                row_grid_style={popup_body_grid}

            />

        }

    }


    // get fetch data

    const fetch1 = (sale_watchman_list.length === 0) ?<Get_sale_watchman_table_list_API newData={set_sale_watchman_list}  />: <div style={{display:'none'}}></div>;
    const fetch2 = (sale_driver_list.length === 0) ? <Get_Sale_Driver_List_API newData={set_sale_driver_list}   />: <div style={{display:'none'}}></div>;

    return (

        <div>

            <Header title='نگهبانی (فروش)' rightDashboardButton={menu.RightDashboard} rightDashboardClickButton={Right_Menu_handler} />

            <div  style={main_header}>

                    
                <HeaderBody2Button

                    header='لیست ماشین ها'
                    left_text1='+ ورود ماشین یخچال'
                    left_text2='+ افزودن راننده جدید'
                    leftButton2Click={()=> set_create_driver_popup(!create_driver_popup)}
                    leftButton1Click={()=> set_create_car_popup(!create_car_popup)}


                />
                <ListFilter1 id='لیست راننده های یخچال' options={sale_driver_list}  selectValueChange={(event, value)=>{

                    set_driverFilter(value.id)

                }} filterClick={watchman_list_filter} />

                <Grid container >

                    <Grid items xs={12} style={{padding:'4%'}}>
                        <SimpleTable1

                            columnsNum={6}
                            columns={table_columns}
                            data={sale_watchman_list}
                            click ={(data) =>{ set_select_sale(data) }}
                        />
                    </Grid>

                </Grid>
                {driver_create_popup()}

            </div>

            
            {
            
            // active right menu if click on right-top button
            Right_Menu_controller(menu.RightDashboard)
            
            }

            {fetch1}
            {fetch2}


        </div>

    )

}

export default SaleWatchMan;