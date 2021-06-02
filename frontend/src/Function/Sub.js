import axios from 'axios';

export const getsubs = async() => 
        await axios.get("http://localhost:8000/api/subs")


export const getsub = async(slug) => 
        await axios.get(`http://localhost:8000/api/sub/${slug}`)
 


export const removesub = async (slug, authtoken) =>
  await axios.delete(`http://localhost:8000/api/sub/${slug}`, {
    headers: {
      authtoken,
    },
  });


export const updatesub = async(slug, category, authtoken) => 
        await axios.put(`http://localhost:8000/api/sub/${slug}`, {
            headers: authtoken
        },{
            name: category
        })




export const createsub = async (category,  authtoken) =>
  await axios.post(`http://localhost:8000/api/sub`, category,  {
    headers: {
      authtoken,
    },
  });