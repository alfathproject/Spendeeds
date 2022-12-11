import SchoolDbSource from '../data/schooldb-source';
import { createAlertTemplate } from '../views/templates/template-creator';
import '../views/components/review-list';

const ReviewFormInitiator = {
  init(review, schoolID) {
    createAlertTemplate.confirm('Your review will be sent!').then((result) => {
      if (result.isConfirmed) this._review(review, schoolID);
    });
  },

  async _review(review, schoolID) {
    const reviews = await SchoolDbSource.addReview(review, schoolID);
    if (reviews) {
      createAlertTemplate.alert('success', 'Success!', 'Your review has been added successfully!');

      const reviewList = document.querySelector('review-list');
      reviewList.innerHTML = '';
      reviewList.reviews = reviews;
    } else {
      createAlertTemplate.alert('error', 'Error!', 'Failed to add review!');
    }
  },
};

export default ReviewFormInitiator;
