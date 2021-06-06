import axios from 'axios';

export const getCategories = async() => 
        await axios.get("https://mbm-backends.herokuapp.com/api/categories")


export const getCategory = async(slug) => 
        await axios.get(`https://mbm-backends.herokuapp.com/api/category/${slug}`)
 

 
// export const removeCategory = async (slug, authtoken) => 
        
//         await axios.delete(`http://localhost:8000/api/category/${slug}`, {
//             headers: authtoken
//         })

export const removeCategory = async (slug, authtoken) =>
  await axios.delete(`https://mbm-backends.herokuapp.com/api/category/${slug}`, {
    headers: {
      authtoken,
    },
  });


export const updateCategory = async(slug, category, authtoken) => 
        await axios.put(`https://mbm-backends.herokuapp.com/api/category/${slug}`, {
            headers: authtoken
        },{
            name: category
        })


// export const createCategory = async(catogery, authtoken) => {
//     console.log(catogery)
//     return(
//         await axios.post(`http://localhost:8000/api/category`, catogery, {
//             headers: authtoken,
//         })
//     )
// }

export const createCategory = async (category, authtoken) =>
  await axios.post(`https://mbm-backends.herokuapp.com/api/category`, category, {
    headers: {
      authtoken,
    },
  });


  export const getCategoriesSubs = async(_id) => 
        await axios.get(`https://mbm-backends.herokuapp.com/api/category/subs/${_id}`)
