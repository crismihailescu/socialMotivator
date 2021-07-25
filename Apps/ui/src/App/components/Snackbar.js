import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { closeSnackbar } from "../../actions/snackbar";
import { Alert } from '@material-ui/lab';

export default function CustomSnackbar() {
    const dispatch = useDispatch();

    const { snackbarMessage, snackbarOpen, snackbarType } = useSelector(
        state => state.snackbar
    );

    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={() => dispatch(closeSnackbar())}
        >
            <Alert onClose={() => dispatch(closeSnackbar())} severity={snackbarType}>
                {snackbarMessage}
            </Alert>
        </Snackbar>
    );
}