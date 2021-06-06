import axios from 'axios';

export const getsubs = async() => 
        await axios.get("https://mbm-backends.herokuapp.com/api/subs")


export const getsub = async(slug) => 
        await axios.get(`https://mbm-backends.herokuapp.com/api/sub/${slug}`)
 


export const removesub = async (slug, authtoken) =>
  await axios.delete(`https://mbm-backends.herokuapp.com/api/sub/${slug}`, {
    headers: {
      authtoken,
    },
  });


export const updatesub = async(slug, category, authtoken) => 
        await axios.put(`https://mbm-backends.herokuapp.com/api/sub/${slug}`, {
            headers: authtoken
        },{
            name: category
        })




export const createsub = async (category,  authtoken) =>
  await axios.post(`https://mbm-backends.herokuapp.com/api/sub`, category,  {
    headers: {
      authtoken,
    },
  });