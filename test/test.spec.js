var config = require('./config.json');
var expect = require('chai').expect;

if(process.env.NFL_API_KEY) {
  config.nfl.key = process.env.NFL_API_KEY;
}

if(process.env.NBA_API_KEY) {
  config.nba.key = process.env.NBA_API_KEY;
}

if(process.env.MLB_API_KEY) {
  config.mlb.key = process.env.MLB_API_KEY;
}

if(process.env.NHL_API_KEY) {
  config.nhl.key = process.env.NHL_API_KEY;
}

config.timeout = 60 * 1000;

var FantasyData = require('../server/fantasydata-api')(config);

describe('FantasyData', function() {
  describe('.nhl', function() {
    var game = 16905;
    var gameDate = '2015-MAY-15';
    var minutes = 1;
    var season = 2015;
    var playerId = 30000058;
    var team = 'BOS';

    describe('.activeTeams()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.activeTeams(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.activePlayers()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.activePlayers(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.boxScore()', function() {
      it('Results should return an object', function(done) {
        FantasyData.nhl.boxScore(game, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('object');

          return done();
        });
      });
    });

    describe('.boxScores()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.boxScores(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.boxScoresDelta()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.boxScoresDelta(gameDate, minutes, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.freeAgents()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.freeAgents(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.gamesByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.gamesByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.gamesBySeason()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.gamesBySeason(season, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.news()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.news(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.newsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.newsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.newsByPlayerId()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.newsByPlayerId(playerId, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerGameStatsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.playerGameStatsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerSeasonStats()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.playerSeasonStats(season, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerSeasonStatsByTeam()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.playerSeasonStatsByTeam(season, team, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playersByTeam()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.playersByTeam(team, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerGameProjectionStatsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.playerGameProjectionStatsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.stadiums()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.stadiums(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.teamGameStatsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.teamGameStatsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.teamSeasonStats()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nhl.teamSeasonStats(season, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });
  });

  describe('.mlb', function() {
    var game = 16905;
    var gameDate = '2015-MAY-15';
    var minutes = 1;
    var season = 2015;
    var playerId = 10000507;
    var team = 'NYY';

    describe('.activeTeams()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.activeTeams(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.activePlayers()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.activePlayers(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.boxScore()', function() {
      it('Results should return an object', function(done) {
        FantasyData.mlb.boxScore(game, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('object');

          return done();
        });
      });
    });

    describe('.boxScores()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.boxScores(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.boxScoresDelta()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.boxScoresDelta(gameDate, minutes, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.freeAgents()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.freeAgents(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.gamesByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.gamesByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.gamesBySeason()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.gamesBySeason(season, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.news()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.news(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.newsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.newsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.newsByPlayerId()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.newsByPlayerId(playerId, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerGameStatsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.playerGameStatsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerSeasonStats()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.playerSeasonStats(season, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerSeasonStatsByTeam()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.playerSeasonStatsByTeam(season, team, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playersByTeam()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.playersByTeam(team, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerGameProjectionStatsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.playerGameProjectionStatsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.stadiums()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.stadiums(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.teamGameStatsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.teamGameStatsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.teamSeasonStats()', function() {
      it('Results should return an array', function(done) {
        FantasyData.mlb.teamSeasonStats(season, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });
  });

  describe('.nba', function() {
    var game = 56;
    var gameDate = '2015-MAY-15';
    var minutes = 1;
    var season = 2015;
    var playerId = 10000507;
    var team = 'CLE';

    describe('.activeTeams()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.activeTeams(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.activePlayers()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.activePlayers(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.boxScore()', function() {
      it('Results should return an object', function(done) {
        FantasyData.nba.boxScore(game, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('object');

          return done();
        });
      });
    });

    describe('.boxScores()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.boxScores(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.boxScoresDelta()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.boxScoresDelta(gameDate, minutes, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.freeAgents()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.freeAgents(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.gamesByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.gamesByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.gamesBySeason()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.gamesBySeason(season, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.news()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.news(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.newsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.newsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.newsByPlayerId()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.newsByPlayerId(playerId, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerGameStatsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.playerGameStatsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerSeasonStats()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.playerSeasonStats(season, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerSeasonStatsByTeam()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.playerSeasonStatsByTeam(season, team, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playersByTeam()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.playersByTeam(team, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.playerGameProjectionStatsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.playerGameProjectionStatsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.stadiums()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.stadiums(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.teamGameStatsByDate()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.teamGameStatsByDate(gameDate, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });

    describe('.teamSeasonStats()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nba.teamSeasonStats(season, function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });
  });

  describe('.nfl', function() {
    var season = process.env.SEASON || 2013;
    var week = 1;
    var team = 'IND';
    var minutes = 1;
    var statsColumn = 'PassingYards';
    var timeFrameType = 'current';

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

    describe('.activeBoxScores()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.activeBoxScores(function(err, results) {
          if(err) {
            return done(err);
          }

          expect(results).to.be.an('array');

          return done();
        });
      });
    });
    describe('.areAnyGamesInProgress()', function() {
      it('Results should return a boolean', function(done) {
        FantasyData.nfl.areAnyGamesInProgress(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.a('boolean');
          done();
        });
      });
    });
    describe('.boxScore(season, week, homeTeam)', function() {
      it('Results should return an object', function(done) {
        FantasyData.nfl.boxScore(season, week, homeTeam, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('object');
          done();
        });
      });
    });
    describe('.boxScores(season, week)', function() {
      it('Results should return an array', function(done) {
        this.timeout(0);
        FantasyData.nfl.boxScores(season, week, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.byes(season)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.byes(season, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.currentSeason()', function() {
      it('Results should return a number', function(done) {
        FantasyData.nfl.currentSeason(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.a('number');
          done();
        });
      });
    });
    describe('.currentWeek()', function() {
      it('Results should return a number', function(done) {
        FantasyData.nfl.currentWeek(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.a('number');
          done();
        });
      });
    });
    describe('.fantasyDefenseByGame(season, week)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.fantasyDefenseByGame(season, week, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.fantasyDefenseBySeason(season)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.fantasyDefenseBySeason(season, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.fantasyDefenseProjectionsByGame(season, week)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.fantasyDefenseProjectionsByGame(season, week, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.fantasyPlayers()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.fantasyPlayers(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.finalBoxScores()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.finalBoxScores(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.freeAgents()', function() {
      it('Results should return an array', function(done) {
        this.timeout(0);
        FantasyData.nfl.freeAgents(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.gameLeagueLeaders(season, week, position, statsColumn)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.gameLeagueLeaders(season, week, player.position, statsColumn, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.gameStats(season)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.gameStats(season, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.gameStatsByWeek(season, week)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.gameStatsByWeek(season, week, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.getErrorSample()', function() {
      it.skip('Results should return an object', function(done) {
        FantasyData.nfl.getErrorSample(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('object');
          done();
        });
      });
    });
    describe('.injuriesByTeam(season, week, team)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.injuriesByTeam(season, week, team, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.injuriesByWeek(season, week)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.injuriesByWeek(season, week, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.lastCompletedSeason()', function() {
      it('Results should return a number', function(done) {
        FantasyData.nfl.lastCompletedSeason(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.a('number');
          done();
        });
      });
    });
    describe('.lastCompletedWeek()', function() {
      it('Results should return a number', function(done) {
        FantasyData.nfl.lastCompletedWeek(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.a('number');
          done();
        });
      });
    });
    describe('.liveBoxScores()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.liveBoxScores(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.matchPlayer(searchCriteria)', function() {
      it('Results should return an object', function(done) {
        FantasyData.nfl.matchPlayer(searchCriteria, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('object');
          done();
        });
      });
    });
    describe('.news()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.news(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.newsByPlayerId(playerId)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.newsByPlayerId(player.id, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.newsByTeam(team)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.newsByTeam(team, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.player(playerId)', function() {
      it('Results should return an object', function(done) {
        FantasyData.nfl.player(player.id, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('object');
          done();
        });
      });
    });
    describe('.playerGameProjectionStatsByTeam(season, week, team)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.playerGameProjectionStatsByTeam(season, week, team, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.playerGameStatsByPlayerId(season, week, playerId)', function() {
      it('Results should return an object', function(done) {
        FantasyData.nfl.playerGameStatsByPlayerId(season, week, player.id, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('object');
          done();
        });
      });
    });
    describe('.playerGameStatsByTeam(season, week, team)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.playerGameStatsByTeam(season, week, team, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.playerGameStatsByWeek(season, week)', function() {
      it('Results should return an array', function(done) {
        this.timeout(0);
        FantasyData.nfl.playerGameStatsByWeek(season, week, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.playerSeasonStatsByPlayerId(season, playerId)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.playerSeasonStatsByPlayerId(season, player.id, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.playerSeasonStatsByTeam(season, team)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.playerSeasonStatsByTeam(season, team, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.recentlyUpdatedBoxScores(minutes)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.recentlyUpdatedBoxScores(minutes, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.schedules(season)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.schedules(season, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.scores(season)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.scores(season, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.scoresByWeek(season, week)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.scoresByWeek(season, week, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.seasonLeagueLeaders(season, position, statsColumn)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.seasonLeagueLeaders(season, player.position, statsColumn, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.stadiums()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.stadiums(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.standings(season)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.standings(season, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.teamGameStats(season, week)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.teamGameStats(season, week, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.teamRoster(team)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.teamRoster(team, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.teamSeasonStats(season)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.teamSeasonStats(season, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.teams()', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.teams(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.teamsBySeason(season)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.teamsBySeason(season, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.timeFrames(timeFrameType)', function() {
      it('Results should return an array', function(done) {
        FantasyData.nfl.timeFrames(timeFrameType, function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('array');
          done();
        });
      });
    });
    describe('.upcomingSeason()', function() {
      it('Results should return a number', function(done) {
        FantasyData.nfl.upcomingSeason(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('number');
          done();
        });
      });
    });
    describe('.upcomingWeek()', function() {
      it('Results should return a number', function(done) {
        FantasyData.nfl.upcomingWeek(function(err, results) {
          if(err) {
            done(err);
          }

          expect(results).to.be.an('number');
          done();
        });
      });
    });
  });
});
