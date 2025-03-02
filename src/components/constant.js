export const baseUrl = 'https://react-redux-social-media-57816-default-rtdb.firebaseio.com'

export const getApi =(endpoint)=>{
    axios.getApi((`${baseUrl}/${endpoint}`))
    .then((res)=>res)

}