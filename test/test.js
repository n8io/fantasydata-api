var config = require('./config.json');

if(process.env.API_KEY){
  config.key = process.env.API_KEY;
}

var FantasyData = require('../lib/fantasyData')(config);
var expect = require('expect.js')

describe('FantasyData', function(){
  var season = process.env.SEASON || 2013;
  var week = 1;
  var team = 'IND';
  var statsColumn = 'PassingYards';
  var timeFrameType = 'REG';

  var player = {
    id: 14008,
    position: 'QB'
  };

  var homeTeam = team;

  var searchCriteria = {
    team: team,
    firstName: 'Andrew',
    lastName: 'Luck',
    fullName: null,
    number: null,
    dob: null,
    position: 'QB',
    college: null
  };

  describe('.ActiveBoxScores()', function(){
    it('should return an array', function(done){
      FantasyData.ActiveBoxScores(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });

  describe('.ActiveBoxScores()', function(){
    it('should return an array', function(done){
      FantasyData.ActiveBoxScores(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.AreAnyGamesInProgress()', function(){
    it('should return a boolean', function(done){
      FantasyData.AreAnyGamesInProgress(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.a('boolean');
        done();
      });
    });
  });
  describe('.BoxScore(season, week, homeTeam)', function(){
    it('should return an object', function(done){
      FantasyData.BoxScore(season, week, homeTeam, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('object');
        done();
      });
    });
  });
  describe('.BoxScores(season, week)', function(){
    it('should return an array', function(done){
      FantasyData.BoxScores(season, week, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.Byes(season)', function(){
    it('should return an array', function(done){
      FantasyData.Byes(season, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.CurrentSeason()', function(){
    it('should return a number', function(done){
      FantasyData.CurrentSeason(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.a('number');
        done();
      });
    });
  });
  describe('.CurrentWeek()', function(){
    it('should return a number', function(done){
      FantasyData.CurrentWeek(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.a('number');
        done();
      });
    });
  });
  describe('.FantasyDefenseByGame(season, week)', function(){
    it('should return an array', function(done){
      FantasyData.FantasyDefenseByGame(season, week, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.FantasyDefenseBySeason(season)', function(){
    it('should return an array', function(done){
      FantasyData.FantasyDefenseBySeason(season, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.FantasyDefenseProjectionsByGame(season, week)', function(){
    it('should return an array', function(done){
      FantasyData.FantasyDefenseProjectionsByGame(season, week, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.FantasyPlayers()', function(){
    it('should return an array', function(done){
      FantasyData.FantasyPlayers(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.FinalBoxScores()', function(){
    it('should return an array', function(done){
      FantasyData.FinalBoxScores(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.FreeAgents()', function(){
    it('should return an array', function(done){
      this.timeout(15 * 1000); // Set the timeout for this specific test to 15s because it is longer call
      FantasyData.FreeAgents(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.GameLeagueLeaders(season, week, position, statsColumn)', function(){
    it('should return an array', function(done){
      FantasyData.GameLeagueLeaders(season, week, player.position, statsColumn, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.GameStats(season)', function(){
    it('should return an array', function(done){
      FantasyData.GameStats(season, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.GameStatsByWeek(season, week)', function(){
    it('should return an array', function(done){
      FantasyData.GameStatsByWeek(season, week, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.GetErrorSample()', function(){
    it.skip('should return an object', function(done){
      FantasyData.GetErrorSample(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('object');
        done();
      });
    });
  });
  describe('.InjuriesByTeam(season, week, team)', function(){
    it('should return an array', function(done){
      FantasyData.InjuriesByTeam(season, week, team, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.InjuriesByWeek(season, week)', function(){
    it('should return an array', function(done){
      FantasyData.InjuriesByWeek(season, week, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.LastCompletedSeason()', function(){
    it('should return a number', function(done){
      FantasyData.LastCompletedSeason(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.a('number');
        done();
      });
    });
  });
  describe('.LastCompletedWeek()', function(){
    it('should return a number', function(done){
      FantasyData.LastCompletedWeek(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.a('number');
        done();
      });
    });
  });
  describe('.LiveBoxScores()', function(){
    it('should return an array', function(done){
      FantasyData.LiveBoxScores(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.MatchPlayer(searchCriteria)', function(){
    it('should return an object', function(done){
      FantasyData.MatchPlayer(searchCriteria, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('object');
        done();
      });
    });
  });
  describe('.News()', function(){
    it('should return an array', function(done){
      FantasyData.News(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.NewsByPlayerId(playerId)', function(){
    it('should return an array', function(done){
      FantasyData.NewsByPlayerId(player.id, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.NewsByTeam(team)', function(){
    it('should return an array', function(done){
      FantasyData.NewsByTeam(team, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.Player(playerId)', function(){
    it('should return an object', function(done){
      FantasyData.Player(player.id, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('object');
        done();
      });
    });
  });
  describe('.PlayerGameProjectionStatsByTeam(season, week, team)', function(){
    it('should return an array', function(done){
      FantasyData.PlayerGameProjectionStatsByTeam(season, week, team, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.PlayerGameStatsByPlayerId(season, week, playerId)', function(){
    it('should return an object', function(done){
      FantasyData.PlayerGameStatsByPlayerId(season, week, player.id, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('object');
        done();
      });
    });
  });
  describe('.PlayerGameStatsByTeam(season, week, team)', function(){
    it('should return an array', function(done){
      FantasyData.PlayerGameStatsByTeam(season, week, team, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.PlayerGameStatsByWeek(season, week)', function(){
    it('should return an array', function(done){
      FantasyData.PlayerGameStatsByWeek(season, week, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.PlayerSeasonStatsByPlayerId(season, playerId)', function(){
    it('should return an array', function(done){
      FantasyData.PlayerSeasonStatsByPlayerId(season, player.id, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.PlayerSeasonStatsByTeam(season, team)', function(){
    it('should return an array', function(done){
      FantasyData.PlayerSeasonStatsByTeam(season, team, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.Schedules(season)', function(){
    it('should return an array', function(done){
      FantasyData.Schedules(season, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.Scores(season)', function(){
    it('should return an array', function(done){
      FantasyData.Scores(season, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.ScoresByWeek(season, week)', function(){
    it('should return an array', function(done){
      FantasyData.ScoresByWeek(season, week, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.SeasonLeagueLeaders(season, position, statsColumn)', function(){
    it('should return an array', function(done){
      FantasyData.SeasonLeagueLeaders(season, player.position, statsColumn, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.Stadiums()', function(){
    it('should return an array', function(done){
      FantasyData.Stadiums(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.Standings(season)', function(){
    it('should return an array', function(done){
      FantasyData.Standings(season, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.TeamGameStats(season, week)', function(){
    it('should return an array', function(done){
      FantasyData.TeamGameStats(season, week, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.TeamRoster(team)', function(){
    it('should return an array', function(done){
      FantasyData.TeamRoster(team, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.TeamSeasonStats(season)', function(){
    it('should return an array', function(done){
      FantasyData.TeamSeasonStats(season, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.Teams()', function(){
    it('should return an array', function(done){
      FantasyData.Teams(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.TeamsBySeason(season)', function(){
    it('should return an array', function(done){
      FantasyData.TeamsBySeason(season, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.TimeFrames(timeFrameType)', function(){
    it('should return an array', function(done){
      FantasyData.TimeFrames(timeFrameType, function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('array');
        done();
      });
    });
  });
  describe('.UpcomingSeason()', function(){
    it('should return a number', function(done){
      FantasyData.UpcomingSeason(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('number');
        done();
      });
    });
  });
  describe('.UpcomingWeek()', function(){
    it('should return a number', function(done){
      FantasyData.UpcomingWeek(function(err, results){
        if(err){
          done(err);
        }

        expect(results).to.be.an('number');
        done();
      });
    });
  });
});