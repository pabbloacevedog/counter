export const state = () => ({
    filter: [],
    list_new:[],
    filter_active: false,
    filterHigher :false,
    filterSmaller :false,
    number_filter: 0,
})
export const mutations = {
    filterHigher(state, data) {
        state.filterHigher = true
        state.number_filter = Number(data)
        // console.log('filterHigher',data)
        // state.list_new = state.list
        // state.list = state.list.filter(e => Number(e.value) >= Number(data));
        state.filter_active = true
    },
    filterSmaller(state, data) {
        state.filterSmaller = true
        state.number_filter = Number(data)
        // console.log('filterSmaller',data)
        // state.list_new = state.list
        // state.list = state.list.filter(e => Number(e.value) <= Number(data));
        state.filter_active = true
    },
    cleanFilters(state) {
        state.filter_active = false
        state.filterHigher = false
        state.filterSmaller = false
        // state.list = state.list_new
    },
}