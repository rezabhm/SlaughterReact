import { Typography } from "@material-ui/core";
import {table1, table_header1} from '../CSS/table'

function SimpleTable1 (props){


    const header =()=>{
        
        var counter = 0;

        return (

            <div style={table_header1}>

                {props.columns.map( columnLabel => {

                    // calculate header column width
                    var width = 100 / props.columnsNum;
                    var widthNum = width;
                    width = width.toString() + '%';

                    // calculate header column position from right
                    var pos = counter * widthNum;
                    pos = pos.toString() + '%';
                    console.log(pos, width)

                    counter += 1;

                    return (

                        <Typography style={{

                            color:'white',
                            position:'absolute',
                            width:width,
                            right:pos,
                            top:'1%',
                            fontSize:'1.5vw',
                            textAlign:'center'

                        }}>

                            {columnLabel}

                        </Typography>

                    )


                })}



            </div>
        )
    }



    return (

        <div style={table1}>

            {header()}

        </div>
    )

}

export default SimpleTable1;