import getRandomInt from '@/helpers/getRandomInt'
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
    state: () => ( {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
    }),
    mutations: {
        increment(state) {
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy(state, val) {
            state.count += val
            state.lastMutation = 'incrementBy' + val
            state.lastRandomInt = val
        },
        setLoading(state, val) {
            state.isLoading = val
            state.lastMutation = 'setLoading' + val

        }
    },
    actions: {
        async incrementRandomInt({ commit }) {
            commit('setLoading', true)

            const randomInt = await getRandomInt()
            commit('incrementBy', randomInt)

            commit('setLoading', false)


        }
    },
    getters: {
        squareCount(state) {
            return state.count * state.count
        }
    }
}

export default counterStore