/* eslint-disable no-undef */
import Swal from 'sweetalert2';

const createFavoriteSchoolButtonTemplate = () => `
  <button aria-label="Add to Favorite" class="btn btn-lg btn-primary btn-lg-square" id="favoriteButton"><i class="bi bi-heart"></i></button>`;

const createUnfavoriteSchoolButtonTemplate = () => `
  <button aria-label="Remove from Favorite" class="btn btn-lg btn-primary btn-lg-square" id="favoriteButton"><i class="bi bi-heart-fill"></i></button>`;

const createAlertTemplate = {
  alert(type, title, msg) {
    return Swal.fire({
      icon: type,
      title,
      text: msg,
      showConfirmButton: false,
      timer: 1000,
    });
  },

  confirm(msg) {
    return Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: msg,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm!',
    });
  },
};

export {
  createFavoriteSchoolButtonTemplate,
  createUnfavoriteSchoolButtonTemplate,
  createAlertTemplate,
};
