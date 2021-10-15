export const state = () => ({
    list: [],
    total: 0,
    number_counters:0
})
export const actions = {
    saveCount({ commit,state }, data) {
        commit('addCount', data)
        var total = state.list.reduce((sum, value) => sum + Number(value.value),0);
        commit('updateTotal', total)
        commit('updateNumberCounters', state.list.length)
    },
    deleteCount({ commit, state }, data) {
        commit('removeCount', data)
        var total = state.list.reduce((sum, value) => sum + Number(value.value),0);
        commit('updateTotal', total)
        commit('updateNumberCounters', state.list.length)
    },
    add_one({ commit, state }, data) {
        commit('addOne', data)
        var total = state.list.reduce((sum, value) => sum + Number(value.value),0);
        commit('updateTotal', total)
    },
    remove_one({ commit, state }, data) {
        commit('removeOne', data)
        var total = state.list.reduce((sum, value) => sum + Number(value.value),0);
        commit('updateTotal', total)
    },
}
export const mutations = {
    addCount(state, data) {
        state.list.push({
            name: data.name,
            value: Number(data.value)
        })
    },
    removeCount(state, data) {
        state.list.splice(data, 1);
    },
    addOne(state, data) {
        state.list[data].value++
    },
    removeOne(state, data) {
        state.list[data].value--
    },
    updateTotal(state,data){
        state.total = data
    },
    updateNumberCounters(state,data){
        state.number_counters = data
    },
    orderNameAsc (state) {
        state.list.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
    },
    orderNameDesc(state) {
        state.list.sort(function(a, b){
            if(b.name < a.name) { return -1; }
            if(b.name > actions.name) { return 1; }
            return 0;
        })
    },
    orderValueAsc (state) {
        state.list = state.list.sort(((a, b) => a.value - b.value));
    },
    orderValueDesc(state) {
        state.list = state.list.sort(((a, b) => b.value - a.value));
    }
}
export const getters = {
    getList: state => {
        return state.list
    },
    getTotal: state => {
        return state.total
    }
}