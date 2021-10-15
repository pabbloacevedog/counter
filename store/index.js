export const state = () => ({
	showModal: false,
})

export const mutations = {
    toggleModal (state) {
        state.showModal = !state.showModal
    }
}
export const getters = {
    showModal: state => {
        return state.showModal
    }
}
