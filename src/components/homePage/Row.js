
import React,{useState} from 'react'
import ChildRow from './ChildRow'
import tableStyle from '../../../styles/Table.module.css'
import style from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function graph(row,chartData){

    let chart=[]

    chart=chartData.filter((c)=>{
        return c.id==row.type.id
    })
    return chart
}
export default function Row(props) {

    const router = useRouter()
    const { row,chartData } = props;
    const [open, setOpen] = useState(false);
    const [openChart, setOpenChart] = useState(false);

    let chart = graph(row,chartData)

    return (<>
            
            <TableRow hover style={{cursor:'pointer'}} onClick={() =>{ setOpenChart(!openChart);router.push('/', undefined, { scroll: false })}}>
            
                <TableCell>
                    {(row.children) && <IconButton aria-label="expand row" size="small" onClick={(event) =>{ setOpen(!open); event.stopPropagation()}}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>}
                
                </TableCell>
                <TableCell component="th" scope="row" style={{fontSize:'18px'}}>{row.name}</TableCell>
                <TableCell align="right" style={{fontSize:'18px'}}>{row.type.name}</TableCell>
                
                <TableCell align="right" style={{fontSize:'18px'}}>{row.site.name}</TableCell>
                
                <TableCell align="right" style={{fontSize:'18px'}}>{row.status}</TableCell>
                
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openChart} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <div className={style.chartContainer}>
                                {(chart[0])? <HighchartsReact Highcharts={Highcharts} options={chart[0]}/>:<p> Sorry, There is not enough information to create a chart</p>}
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            
            </TableRow>
            
            {(row.children)&&
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div" style={{fontSize:'25px'}}>
                            Children
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                            <TableRow className={tableStyle.THtable}>
                                <TableCell style={{fontSize:'18px'}}>Name</TableCell>
                                <TableCell style={{fontSize:'18px'}}>Type</TableCell>
                                <TableCell align="right" style={{fontSize:'18px'}}>Site</TableCell>
                                <TableCell align="right" style={{fontSize:'18px'}}>status</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {row.children.map((child) => (
                                <ChildRow key={child.id} child={child} chartData={chartData} graph={graph}/>
                            ))}
                            </TableBody>
                        </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>}
          
      </>
    )
}
