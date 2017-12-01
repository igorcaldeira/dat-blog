import axios from 'axios'

const api = "http://localhost:3000"

export const selectAll = async function(){
    try{
        return await axios.get(api+"/posts")
            .then(function(retData){
                return retData.data;
            }); 
    }catch(err){
        return err;
    }
};