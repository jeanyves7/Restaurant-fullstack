export const ADD_VRESTO="ADD_VRESTO";
export const LOAD_VRESTO="LOAD_VRESTO";
export const SET_VRESTO="SET_VRESTO";
export const SET_RESTO="SET_RESTO";
export const LOAD_RESTO="LOAD_RESTO";
export const LOAD_NRESTO="LOAD_NRESTO";
export const SAVE_VRESTO="SAVE_VRESTO";
export const LOADING_RESTO_DATA="LOADER_RESTO_DATA";
export const LOADING_VRESTO_DATA="LOADER_VRESTO_DATA";
export const SET_TYPE="SET_TYPE";

export const setType =(type)=>({
    type:SET_TYPE,
    payload:type
});


export const loadingResto= (load) =>({
    type:LOADING_RESTO_DATA,
    payload:load,

})

export const loadingVResto= (load) =>({
    type:LOADING_VRESTO_DATA,
    payload:load,

})

export const saveResto = (Resto)=>({
    type:SAVE_VRESTO,
    payload:Resto
});

export const addVResto = (Resto) =>({
    type:ADD_VRESTO,
    payload:Resto,
});

export const setVResto = (Resto) =>({
    type:SET_VRESTO,
    payload:Resto

});

export const setResto = (Resto) =>({
    type:SET_RESTO,
    payload:Resto,
});

export const loadResto = (payload) =>({
    type:LOAD_RESTO,
    action:payload,
});

export const loadVResto =() =>({
    type:LOAD_VRESTO
});



export const loadNResto=(Resto)=>({
    type:LOAD_NRESTO,
    payload:Resto
});