import Swal from 'sweetalert2';

const createLoaderTemplate = () => `
  <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div class="spinner-border text-warning" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;

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
  createLoaderTemplate,
  createFavoriteSchoolButtonTemplate,
  createUnfavoriteSchoolButtonTemplate,
  createAlertTemplate,
};
