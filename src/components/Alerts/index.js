import Swal from "sweetalert2";
import "./alerts-style.css";

const showLoading = () => {
  Swal.fire({
    title: "Loading",
    text: "Please wait...",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

const showSuccess = (title, text) => {
  Swal.fire({
    icon: "success",
    title: title,
    text: text,
    confirmButtonText: "Accept",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
};

const showError = (title, text) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    confirmButtonText: "Aceptar",
    allowOutsideClick: false,
  });
};

export {
    showLoading,
    showSuccess,
    showError
}