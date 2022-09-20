import {Button, Grid, Typography} from "@material-ui/core";
import {table1, table_header1} from '../CSS/table'
import Vector from '../../../Image/slaughter/Vector.svg';


const SimpleTable1 =(props)=>{

    // this function will generate table's header

    const header =()=>{

        // console.log('this is table header')

        return (

            <Grid container style={table_header1}>

                {props.columns.map( column => {

                    return (

                        <Grid items>
                            <Typography id={column.id} style={{

                                color:'white',
                                position:'absolute',
                                width:column.width,
                                right:column.rightPos,
                                fontSize:'1.5vw',
                                textAlign:'center',
                                height:'100px',
                                paddingTop:'25px'

                            }}>

                                {column.label}

                            </Typography>
                        </Grid>
                    )


                })}



            </Grid>
        )
    }

    // this will generate only one row
    const generateRow =(row, counter)=>{

        // console.log('this is generate rows')

        // generate all cell
        const rowData = props.columns.map(column => {

            const backgroundColor = (counter % 2 === 0.0) ? '#F6EDFF' :'white';
            const cell = row[column.id] ;
            if (column.id === 'counter' ) {

                return (

                    <Typography id={column.id} style={{

                        color: '#332D41',
                        position: 'absolute',
                        width: column.width,
                        right: column.rightPos,
                        top: '1%',
                        fontSize: '1.5vw',
                        textAlign: 'center',
                        backgroundColor: backgroundColor,
                        height: '100px',
                        paddingTop: '25px',
                        border: '1px solid #E6E1E5'

                    }}>
                        {counter}
                    </Typography>


                )
            } else if (column.id === 'click') {

                return (

                    <Button  style={{

                        color: '#332D41',
                        position: 'absolute',
                        width: column.width,
                        right: column.rightPos,
                        top: '1%',
                        fontSize: '1.5vw',
                        textAlign: 'center',
                        backgroundColor: backgroundColor,
                        height: '100px',
                        paddingTop: '25px',
                        border: '1px solid #E6E1E5'

                    }} onClick={() => props.click(row['sale_id'])}>

                        <img alt='hello' src={Vector} style={{height:'10%', width:'10%'}}/>

                    </Button>

                )

            } else {

                return (

                    <Typography id={column.id} style={{

                        color: '#332D41',
                        position: 'absolute',
                        width: column.width,
                        right: column.rightPos,
                        top: '1%',
                        fontSize: '1.5vw',
                        textAlign: 'center',
                        backgroundColor: backgroundColor,
                        height: '100px',
                        paddingTop: '25px',
                        border: '1px solid #E6E1E5'

                    }}>
                        {cell}
                    </Typography>

                )
            }
        })

        return (

            <Grid items >
                {rowData}
            </Grid>
        )

    }

    // this function will generate table's row
    const tableRows =(data)=>{

        let counter = 0;
        let top_w = '';
        let top_str = '';

        // console.log('this is table rows     ',data)
        // console.log('this is table rows     ',data.length)

        const data_row =  data.map(row => {

            counter += 1;
            top_w = (counter) * 100;
            top_str = top_w.toString() + 'px';

            return (

                <Grid container style={{

                    width: '100%',
                    height: '100px',
                    top: top_str,
                    position: 'absolute',
                    right: '0px',

                }}>

                    {generateRow(row, counter)}

                </Grid>

            )

        })

        return (data_row)

    }

    const {data} = props;

    return (

        <div style={table1}>

            {
                // generate table's header
                header()

            }

            {
                // generate table's rows
                tableRows(data)

            }

        </div>
    )

}

export default SimpleTable1;