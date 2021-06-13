import fs from 'fs-extra'

export default async(req, res) => {

    // try{
    //   const dataStr=await fetch('http://localhost:4000/api/systems')
    //   const data= await dataStr.json()
    //     res.status(200).json(data)

    //   }catch(err){
    //     console.log(err)
    //   }

      try{
        const dataStr= fs.readFileSync('data/systemDB.json','utf-8')
        const data=JSON.parse(dataStr)
        res.status(200).json(data)
      }catch(err){
        console.log(err)
        res.status(200).json(err)
      }
  }