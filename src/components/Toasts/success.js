import { toast } from 'react-toastify';

function successToast(errorMes) {
  return toast.success(errorMes, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
}

export default successToast;