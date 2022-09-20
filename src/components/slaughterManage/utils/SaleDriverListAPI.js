import {createBrowserHistory} from "history";
import {Cookies} from "react-cookie";
import axios from "axios";
import {useState} from "react";
import {IPServer} from "../../../data";


const server = axios.create({

    baseURL:IPServer()

})

const history = createBrowserHistory();
const cookie = new Cookies();

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
////// sale watchman table list

/*

    get list all sale watchman car table list
    it means we must receive list of dict that each dict are table's row data
    in each dict , dict key are column's header label with header label and value must be row's data

    Header labels :

        1)  id : counter
        2)  id : driver
        3)  id : car
        4)  id : enter_time
        5)  id : status
        6)  id : click

    example :

        [

            { counter : 1, driver : reza, car : 12q1257-87 , enter_time : 1401/12/2-10:30:14 , status: ... , click:'-' }

        ]


*/

const Get_Sale_Driver_List_API =(props)=> {

    const [data_driver, set_data_driver] = useState([])


    const handle_sale_driver_list_API = (jsonResponse) => {


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            cookie.remove('token')
            cookie.remove('username')
            cookie.remove('access_level')


            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            set_data_driver(jsonResponse['sale_driver_list'])
            return jsonResponse['sale_driver_list']

        }
    }


    const requestJson = {

        method:'POST',
        mod:'core',
        headers: { "Content-type":"application/json;charset=utf-8"},
        body: JSON.stringify({

            token: cookie.get('token'),

        })


    } ;

    fetch(IPServer() + '/slaughterManage/sale/driver/list/api/', requestJson)
        .then(data => data.json())
        .then(data => handle_sale_driver_list_API(data));



    props.newData(data_driver)

    return <div style={{display:'none'}}>he</div>

}

export default Get_Sale_Driver_List_API;