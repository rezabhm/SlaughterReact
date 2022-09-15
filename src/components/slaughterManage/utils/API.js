import {createBrowserHistory} from "history";
import { Cookies } from "react-cookie";
import { IPServer } from "../../../data";

const history = createBrowserHistory();
const cookie = new Cookies();


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
////// sale driver list for filter selet component 

/*

    get list all of sale driver that are in the slaughter

*/

var get_sale_driver_list = [];

export function handle_sale_driver_list_API(jsonResponse){

    if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

        cookie.remove('token')
        cookie.remove('username')
        cookie.remove('access_level')


        history.push('/');
        window.location.reload();

    } else if (jsonResponse['response_code'] === 1) {

        get_sale_driver_list = jsonResponse['sale_driver_list']
    

    }
}

export function get_sale_driver_list_API(){

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
        .then(data => this.handle_sale_driver_list_API(data));

    return get_sale_driver_list

}


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
////// sale watchman table list  

/*

    get list all of sale watchman table list

*/

var get_sale_watchman_table_list = [];

export function handle_sale_watchman_list_API(jsonResponse){

    if (jsonResponse['response_code'] === 0 || jsonResponse['response_code'] === 3 || jsonResponse['response_code'] === 2) {

        cookie.remove('token')
        cookie.remove('username')
        cookie.remove('access_level')


        history.push('/');
        window.location.reload();

    } else if (jsonResponse['response_code'] === 1) {

        get_sale_watchman_table_list = jsonResponse['sale_watchman_list']
    

    }
}

export function get_sale_watchman_table_list_API(driver){

    const requestJson = {

        method:'POST',
        mod:'core',
        headers: { "Content-type":"application/json;charset=utf-8"},
        body: JSON.stringify({

            token: cookie.get('token'),
            driver:driver

        })

    } ;

    fetch(IPServer() + '/slaughterManage/sale/watchman/list/api/', requestJson)
        .then(data => data.json())
        .then(data => this.handle_sale_watchman_list_API(data));

    return get_sale_watchman_table_list

}

