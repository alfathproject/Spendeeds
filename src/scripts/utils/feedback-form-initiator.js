import FeedbackDbSource from '../data/feedbackdb-source';
import { createAlertTemplate } from '../views/templates/template-creator';

const FeedbackFormInitiator = {
  init(feedback) {
    createAlertTemplate.confirm('Your feedback will be sent!').then((result) => {
      if (result.isConfirmed) FeedbackDbSource.addFeedback(feedback);
      createAlertTemplate.alert('success', 'Success!', 'Your feedback has been added successfully!');
    });
  },
};

export default FeedbackFormInitiator;
