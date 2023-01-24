import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as CompanyServer from '../CompanyList/Load_Api'

export const Form = () => {

const navigate = useNavigate();

 const initialState = {
    
    name:"",
    email:"http://",
    fundador:""
};

const [company, setcompany] = useState(initialState);

const register = (e) => {

    setcompany({...company,[e.target.name]:e.target.value});

}

const SubmitCompany = async (e) => {
    e.preventDefault();
    try {
        
    
    console.log(company);
    const res = await CompanyServer.Save_company(company);
    const dat = await res.json();
    console.log(dat);
    navigate("/");
    setcompany(initialState);
} catch(error){
    console.log(error);
}
}
 
    return (
    
    <div className="container col-med-3 my-5">

    <form type = "submition" onSubmit={SubmitCompany}>

    <div>
       <h4 className="container my-3">Registro de empresa</h4> 
    </div>

    <div classNameName="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Name</label>
         <input type="text" className="form-control" placeholder="Company Name" name='name' 
         value={company.name} onChange = {register}></input>
    </div>
    <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Website</label>
        <input type="url" className="form-control" placeholder="Ingrese el Website de la compañia" name='email'
        value={company.email} onChange = {register}></input>
    </div>
    <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Fundador</label>
        <input type="text" className="form-control" placeholder="Ingrese el fundador de la compañia" name='fundador'
        value={company.fundador} onChange = {register}></input>
    </div>

    <div type = "submit" className="d-grid">
        <button className="btn btn-success">Register company</button>


    </div>
    </form>
    </div>

    )

}