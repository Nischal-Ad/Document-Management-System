import { enqueueSnackbar } from 'notistack';

export const notifySuccess = (message) => {
	enqueueSnackbar({ message, variant: 'success' });
};

export const notifyError = (message) => {
	enqueueSnackbar({ message, variant: 'error' });
};
