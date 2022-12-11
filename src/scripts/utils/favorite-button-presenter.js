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
    const { id } = this._school;

    if (await this._isSchoolExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isSchoolExist(id) {
    const school = await this._favoriteSchools.getSchool(id);
    return !!school;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteSchoolButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      const response = await this._favoriteSchools.putSchool(this._school);
      if (response) {
        createAlertTemplate.alert('success', 'Success!', 'School added to favorite!');
      } else {
        createAlertTemplate.alert('error', 'Error!', 'failed to add school!');
      }
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createUnfavoriteSchoolButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      const response = await this._favoriteSchools.deleteSchool(this._school.id);
      if (!response) {
        createAlertTemplate.alert('success', 'Success!', 'School removed from favorite!');
      } else {
        createAlertTemplate.alert('error', 'Error!', 'failed to remove school!');
      }
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
