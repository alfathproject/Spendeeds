import team from './team.json';

class TeamDbSource {
  static async team() {
    return team;
  }
}

export default TeamDbSource;
