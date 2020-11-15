import api from "./index"

export const getRestos =  async (restos) => { 
    const pag=restos.action.action.page -1
    const realPage=pag.toString();
    const Type=restos.action.action.type;
    const res = await api.get(`Restaurants/${Type}/?page=${realPage}&size=3`);
    return res.data.content;
}

export const getVRestos= async () =>{
     const res = await api.get("VisitedRestaurants");
    return res.data;
}

export const postVRestos = async (data) =>{
    console.log(data)
    return  api.post("/VisitedRestaurants", data).then(res=> res.data).catch(error => {
        console.log(error)
    });
   
}

export const getRestosId= async (id) => { 
    const res = await api.get(`Restaurants/id/${id}`);
    return res.content;
}