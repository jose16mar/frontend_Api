import App from "../../App";

//const API_KEY = 'http://127.0.0.1:8000/api/company/'
const API_KEY = 'https://api2-euf2.onrender.com/api/company/'

export const Load_Api = async () => {

    const company = await fetch(API_KEY)
    //console.log(company)
    return company

};

export const Save_company =async(company) =>{

    return fetch(API_KEY, {
        method : "POST",
        headers :{'content-type' : 'application/json'},
        body:JSON.stringify({
            "name": String(company.name).trim(),
            "email": String(company.email).trim(),
            "fundador": String(company.fundador).trim(), //trim(), eliminar espacios

        })
    }

    )
}

export const DeleteCompany = async(id) =>{

    return await fetch (`${API_KEY}${id}/`,{
        method:"DELETE"

    })
}