
import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import style from '../../../styles/Home.module.css'

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';

export default function ChildRow(props) {

    const router = useRouter()
    const [open, setOpen] = useState(false);
    const { child,chartData,graph } = props;

    let chart = graph(child,chartData)


    return (
        <>
            <TableRow hover style={{cursor:'pointer'}} onClick={() =>{ setOpen(!open);router.push('/', undefined, { scroll: false })}}>
                <TableCell component="th" scope="row" style={{fontSize:'16px'}}>{child.name}</TableCell>
                <TableCell style={{fontSize:'16px'}}>{child.type.name}</TableCell>
                <TableCell style={{fontSize:'16px'}} align="right">{child.site.name}</TableCell>
                <TableCell style={{fontSize:'16px'}} align="right">{child.status}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box margin={1}>
                <div className={style.chartContainer}>
                    {(chart[0])? <HighchartsReact Highcharts={Highcharts} options={chart[0]}/>:<p> Sorry, There is not enough information to create a chart</p>}
                </div>
                </Box>
            </Collapse>
            </TableCell>
            </TableRow>
        </>
    )
}
