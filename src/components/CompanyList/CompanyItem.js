import * as ApiCompany from './Load_Api'
export const CompanyItem = ({company, listcompanies}) => {

const DeleCompany = async(id) =>{

    console.log(id);
    const re = await ApiCompany.DeleteCompany(id);
    const data = await re.json();
    console.log(data);
    listcompanies();

}


return (
    <div className="col-md-4 my-1"> 
    <div className="card card-body">
        <h3 className="card-tittle">{company.name} <button className='btn btn-sm btn-outline-primary mx-4'>Update</button></h3>
        <p className="card-text"><strong>{company.fundador}</strong> </p>
        <a href="{company.email}" target="blank" rel="nofollow noopener noreferrer" className = "btn btn-success me-md-10 mx-4 my-2"> Go to Website</a>
        <button className="btn btn-outline-danger mx-4 my-1 d-grid" onClick={()=> company.id && DeleCompany(company.id)}>Delete Company</button>
    </div>   
    </div>
    )
};