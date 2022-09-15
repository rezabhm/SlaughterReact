import React , {Component} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

const HeadStyledTableCell = styled(TableCell)(({ theme }) => ({
    
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#6750A4',
      color: theme.palette.common.white,
      fontSize:'1.25vw'
    },
    
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },

  }));

const WhiteRowStyledTableCell = styled(TableCell)(({ theme }) => ({
    
    [`&.${tableCellClasses.body}`]: {
      backgroundColor:  '#F6EDFF',      
      color: theme.palette.common.black,
      border:'2px solid rgba(0,0,0,1)',
      fontSize:'1.25vw'
    },
    

  }));

  const BlackRowStyledTableCell = styled(TableCell)(({ theme }) => ({
    
    [`&.${tableCellClasses.body}`]: {

      color: theme.palette.common.black,
      backgroundColor: 'rgb(255,255,255)',
      border:'2px solid rgba(0,0,0,1)',
      fontSize:'1.25vw'

    },
    

  }));



class SimpleTable extends Component {

    constructor (props) {

        super(props)

        this.state = {

            columns : props.columns,
            data: props.data,
            page : 0,
            rowsPerPage : 10,

        }

    }

    setPage =(pageNum)=>{

        this.setState({

            setPage : pageNum

        })

    }

    setRowsPerPage = (rowsPerPage) => {

        this.setState({

            rowsPerPage : rowsPerPage,

        })

    }

    handleChangePage =(event, newPage) =>{

        this.setPage(newPage)

    }

    handleRowsPerPage =(event, rowPerPage) =>{

        this.setRowsPerPage(rowPerPage)

    }

    render =()=>{

        return(

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          
            <TableContainer sx={{ maxHeight: 440 }} >
          
              <Table stickyHeader aria-label="sticky table" id={this.props.table_id}>
          
                <TableHead>
          
                  <TableRow style={{

                    color:'rgb(255,255,255)',
                    backgroundColor:'#6750A4'

                  }}>
          
                    {this.state.columns.map((column) => (

                        <HeadStyledTableCell
                            
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                         
                        >
                            {column.label}
                        </HeadStyledTableCell>
         
                        ))
                    }
          
                  </TableRow>
          
                </TableHead>
          
                <TableBody>
          
                  {this.state.data
          
                    .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                    .map((row) => {
                        
                      return(

                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>

                          {this.state.columns.map((column) => {

                            const value = row[column.id];

                            if( row['counter'] % 2 === 0.0 )
                            {
                              console.log(column.width)
                                return (
                                <WhiteRowStyledTableCell key={column.id} align={column.align} style={{width:column.width}} >

                                    {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}

                                </WhiteRowStyledTableCell>
                                );

                            } else {
                              console.log(column.width)

                                return (
                                <BlackRowStyledTableCell key={column.id} align={column.align} style={{width:column.width}} >

                                    {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}

                                </BlackRowStyledTableCell>
                                );

                            }


                          })}


                        </TableRow>
                      );
                    })}
          
                </TableBody>
          
              </Table>
          
            </TableContainer>
           
            <TablePagination

              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={this.state.data.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onPageChange={this.handleChangePage}
              onRowsPerPageChange={this.handleChangeRowsPerPage}

            />
          
          </Paper>
            
        )

    }

}

export default SimpleTable;