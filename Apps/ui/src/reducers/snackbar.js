const snackbarReducer = (state = {}, action) => {
    switch (action.type) {
        case "OPEN_SNACKBAR":
            return {
                ...state,
                snackbarOpen: true,
                snackbarMessage: action.message,
                snackbarType: action.snackType,
            };
        case "CLOSE_SNACKBAR":
            return {
                ...state,
                snackbarOpen: false,
                snackbarMessage: '',
                snackbarType: '',
            };
        default:
            return state;
    }
};

export default snackbarReducer;