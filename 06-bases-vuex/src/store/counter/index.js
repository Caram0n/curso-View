import state from "./state"
import * as mutations from "./mutations"
import * as actions from "./actions"
import * as getters from "./getters"
//Las actions llaman a las mutaciones que son las que modifican el estado
//Las mutaciones son sincronas
//Las acciones son asincronas
//Las mutaciones no pueden llamar a las acciones
//Las acciones pueden llamar a otras acciones
//Las acciones pueden llamar a las mutaciones
//Las mutaciones no pueden llamar a otras mutaciones

const counterStore = {
    //namespaced: true, //Para que no se mezclen los nombres de las mutaciones y acciones
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default counterStore