export const state = {
    todoList: []
};

export const getters = {
    getTasks: (state) => {
        return state.todoList
    },
    getOpenTasks: (state) => {
        var openTasks = [];
        for (var i in state.todoList) {
            if (!state.todoList[i].completed)
                openTasks.push(state.todoList[i]);
        }
        return openTasks;
    }
};

export const mutations = {
    ADD_TASK: (state, payload) => {
        const newTask = {
            id: payload.id,
            description: payload.description,
            completed: false
        };
        state.todoList.unshift(newTask);
    },
    SETSTATE_TASK: (state, payload) => {
        const item = state.todoList.find(todoList => todoList.id === payload);
        item.completed = !item.completed;
    },
    DELETE_TASK: (state, payload) => {
        const index = state.todoList.findIndex(todoList => todoList.id === payload);
        state.todoList.splice(index, 1);
    }
};

export const actions = {
    addTask: (context, payload) => {
        context.commit("ADD_TASK", payload);
    },
    setStateTask: (context, payload) => {
        context.commit("SETSTATE_TASK", payload);
    },
    deleteTask: (context, payload) => {
        context.commit("DELETE_TASK", payload);
    }
};
