export const ADD_VRESTO="ADD_VRESTO";
export const LOAD_VRESTO="LOAD_RESTO";
export const SET_VRESTO="SET_VRESTO";
export const SET_RESTO="SET_RESTO";
export const LOAD_RESTO="LOAD_RESTO";
export const LOAD_NRESTO="LOAD_NRESTO";

export const addVResto = (Resto) =>({
    type:ADD_VRESTO,
    payload:Resto,
});


export const setResto = (Resto) =>({
    type:SET_RESTO,
    payload:Resto,
});

export const loadResto = (payload) =>({
    type:LOAD_RESTO,
    action:payload,
});

export const loadVResto =(Resto) =>({
    type:LOAD_VRESTO,
    payload:Resto
});

export const setVResto = (Resto) =>({
    type:SET_VRESTO,
    payload:Resto

});

export const loadNResto=(Resto)=>({
    type:LOAD_NRESTO,
    payload:Resto
});