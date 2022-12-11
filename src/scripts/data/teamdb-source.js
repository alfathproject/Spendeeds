import API_ENDPOINT from '../globals/api-endpoint';

class TeamDbSource {
  static async team() {
    const response = await fetch(API_ENDPOINT.TEAM);
    const responseJson = await response.json();
    return responseJson.sort((a, b) => b.name - a.name).slice(0, 4);
  }
}

export default TeamDbSource;
