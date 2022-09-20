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

function Get_sale_watchman_table_list_API(props) {

    const [data, set_data] = useState([])

    const requestJson = JSON.stringify({

        token: cookie.get('token'),

    })


    const handle_sale_watchman_list_API = (jsonResponse) => {


        if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

            cookie.remove('token')
            cookie.remove('username')
            cookie.remove('access_level')


            history.push('/');
            window.location.reload();

        } else if (jsonResponse['response_code'] === 1) {

            return jsonResponse['sale_watchman_list']

        }
    }

    const get_sale_watchman_list = async (requestJson) => {
        const {data} = await server.post('/slaughterManage/sale/watchman/list/api/', requestJson)
        const x = handle_sale_watchman_list_API(data)
        set_data(x)
        return x
    }

    const _ = get_sale_watchman_list(requestJson)

    props.newData(data)

    return <div style={{display:'none'}}></div>

}

export default Get_sale_watchman_table_list_API;