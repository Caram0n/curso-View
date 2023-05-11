import {createStore } from 'vuex'

import counterStore from './counter'


//Las actions llaman a las mutaciones que son las que modifican el estado
//Las mutaciones son sincronas
//Las acciones son asincronas
//Las mutaciones no pueden llamar a las acciones
//Las acciones pueden llamar a otras acciones
//Las acciones pueden llamar a las mutaciones
//Las mutaciones no pueden llamar a otras mutaciones

export default createStore({
   modules: {
        counter: counterStore
    }
})