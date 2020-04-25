const defaultState = {
    inputString: '',
}

const getters = {
    getInputString: state=>state.inputString,
}

const actions = {
    updateInputString: (context, newValue) => {
        context.commit('UPDATE_INPUT_STRING', newValue);
    }
}

const mutations = {
    UPDATE_INPUT_STRING: (state, newValue) => {
        state.inputString = newValue;
    }
}

export default {
    state: defaultState,
    getters,
    actions,
    mutations
}