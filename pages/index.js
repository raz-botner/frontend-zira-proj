import styles from '../styles/Home.module.css'
import tableStyle from '../styles/Table.module.css'
import Row from '../src/components/homePage/Row'
import axios from 'axios'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'; 
import Paper from '@material-ui/core/Paper';

export const getServerSideProps= async ()=>{

  try{
    const dataStr=await fetch('http://localhost:3000/api/system')
    const data= await dataStr.json()

    const chartData = await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/charts`)

    return {props:{data:data.data,chartData:chartData.data}}

  }catch(err){
    console.log(err)
    return {props:{data:err}}
  }
  
}


export default function Home({data,chartData}) {

  return (
    <div>
      <div className={styles.container}>
       
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead >
              <TableRow className={tableStyle.THtable}>
                <TableCell />
                <TableCell style={{fontSize:'20px',fontWeight:'bold'}}>Name</TableCell>
                <TableCell style={{fontSize:'20px',fontWeight:'bold'}} align="right">Type</TableCell>
                <TableCell style={{fontSize:'20px',fontWeight:'bold'}} align="right">Site</TableCell>
                <TableCell style={{fontSize:'20px',fontWeight:'bold'}} align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <Row key={row.id} row={row} chartData={chartData}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
    )
}
