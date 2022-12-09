import {
  createFavoriteSchoolButtonTemplate,
  createUnfavoriteSchoolButtonTemplate,
  createAlertTemplate,
} from '../views/templates/template-creator';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, favoriteSchools, school }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._favoriteSchools = favoriteSchools;
    this._school = school;

    await this._renderButton();
  },

  async _renderButton() {
    const { npsn } = this._school;

    if (await this._isSchoolExist(npsn)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isSchoolExist(npsn) {
    const school = await this._favoriteSchools.detail(npsn);
    return !!school;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteSchoolButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      const response = await this._favoriteSchools.put(this._school);
      if (response) {
        createAlertTemplate.alert('success', 'Success!', 'School added to favorite!');
      } else {
        createAlertTemplate.alert('error', 'Error!', 'Failed to add school!');
      }
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createUnfavoriteSchoolButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      const response = await this._favoriteSchools.delete(this._school.npsn);
      if (!response) {
        createAlertTemplate.alert('success', 'Success!', 'School removed from favorite!');
      } else {
        createAlertTemplate.alert('error', 'Error!', 'Failed to remove school!');
      }
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
