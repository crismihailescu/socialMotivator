export const openSnackbar = (message, snackType) => {
    return { type: "OPEN_SNACKBAR", message, snackType }
};

export const closeSnackbar = () => {
    return {
        type: "CLOSE_SNACKBAR"
    };
};