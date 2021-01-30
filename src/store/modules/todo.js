export const state = {
    todo: []
};

export const getters = {
    getTodo: state => state.todo
};

export const mutations = {
    ADD_TODO: (state, payload) => {
        const newTodo = {
            id: payload.id,
            description: payload.description,
            finished: false
        };
        state.todo.unshift(newTodo);
    },
    SETSTATE_TODO: (state, payload) => {
        const item = state.todo.find(todo => todo.id === payload);
        item.finished = !item.finished;
    },
    DELETE_TODO: (state, payload) => {
        const index = state.todo.findIndex(todo => todo.id === payload);
        state.todo.splice(index, 1);
    }
};

export const actions = {
    addTodo: (context, payload) => {
        context.commit("ADD_TODO", payload);
    },
    setStateTodo: (context, payload) => {
        context.commit("SETSTATE_TODO", payload);
    },
    deleteTodo: (context, payload) => {
        context.commit("DELETE_TODO", payload);
    }
};
