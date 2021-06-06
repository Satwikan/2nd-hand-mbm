import axios from 'axios';

export const create0update = async(authtokens) => {
    return(
        await axios.post("https://mbm-backends.herokuapp.com/api/create-update-user", {}, {
            headers: {
               
                authtoken: authtokens
            }
        })
    )
}

 
export const currentuser = async(authtokens) => {
    return(
        await axios.post("https://mbm-backends.herokuapp.com/api/current-user", {}, {
            headers: {
                
                authtoken: authtokens
            }
        })
    )
}

export const currentAdmin = async(authtokens) => {
    return(
        await axios.post("https://mbm-backends.herokuapp.com/api/current-admin", {}, {
            headers: {
               
                authtoken: authtokens
            }
        })
    )
}






