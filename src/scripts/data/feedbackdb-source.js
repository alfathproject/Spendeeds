/* eslint-disable no-dupe-else-if */
import API_ENDPOINT from '../globals/api-endpoint';

class FeedbackDbSource {
  static async feedbacks() {
    const response = await fetch(API_ENDPOINT.FEEDBACKS);
    const responseJson = await response.json();
    return responseJson.sort((a, b) => b.id - a.id).slice(0, 5);
  }

  static async addFeedback(feedback) {
    const response = await fetch(API_ENDPOINT.FEEDBACKS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });

    const responseJson = response.json();
    return responseJson;
  }
}

export default FeedbackDbSource;
