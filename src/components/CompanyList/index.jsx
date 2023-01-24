
import { useEffect, useState } from 'react'
import * as CompanyServer from './Load_Api'

// importar componentes

import {CompanyItem} from './CompanyItem'
// import { NavBar } from '../NavBar';
// import { Form } from '../Form';

export function CompanyList () {

const[companies, setcompanies] = useState([]);

const listcompanies = async() =>{

    try{
    const data = await CompanyServer.Load_Api();
    const dataf = await data.json();
    console.log(data);
    console.log(dataf.companies);
    setcompanies(dataf.companies)
} catch (error){
    console.log(error);
}
}
 useEffect(()=>{
    listcompanies();
 },  [])

 return(
    <div className='container my-4'>
        {/* <NavBar/> */}
        <div className='row '>
        
        {
        companies.map((company) =>(
            <CompanyItem key={company.id} company ={company} listcompanies ={listcompanies}/>
            

    ))}
       </div> 
    </div>
 )

}  