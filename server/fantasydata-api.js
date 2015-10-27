var request = require('request');
var _ = require('lodash');
var async = require('async');
var url = require('url');

module.exports = function(options) {
  var defaults = {
    timeoout: 15000,
    nba: {
      version: 'nba/v2',
      key: ''
    },
    nfl: {
      version: 'nfl/v2',
      key: ''
    },
    mlb: {
      version: 'mlb/v2',
      key: ''
    },
    nhl: {
      version: 'nhl/v2',
      key: ''
    }
  };

  options = options || {};
  options.url = 'api.fantasydata.net';
  options.protocol = 'http';

  var config = _.extend(defaults, options);

  var FantasyData = function() {};

  FantasyData.Options = function(opts) {
    var isSetter = !!opts;

    opts = opts || {};

    opts.format = 'json'; // Always json

    if(isSetter) {
      if(!opts || (!opts.nfl && !opts.mlb && !opts.mlb && !opts.nhl)) return;

      if(opts.nfl && !validateConfig(opts.nfl)) return;

      if(opts.mlb && !validateConfig(opts.mlb)) return;

      if(opts.nhl && !validateConfig(opts.nhl)) return;

      config = _.extend(defaults, opts);
    }
    else {
      return _.extend(defaults, opts);
    }
  };

  FantasyData.nhl = {};

  FantasyData.nhl.activeTeams = function(callback) {
    var uri = buildNhlUrl('Teams');

    makeRequest(uri, callback);
  };

  FantasyData.nhl.activePlayers = function(callback) {
    var uri = buildNhlUrl('Players');

    makeRequest(uri, callback);
  };

  FantasyData.nhl.boxScore = function(game, callback) {
    var uri = buildNhlUrl('BoxScore/{{game}}', {game: game});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.boxScores = function(gameDateStr, callback) {
    var uri = buildNhlUrl('BoxScores/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.boxScoresDelta = function(gameDateStr, minutesBack, callback) {
    var uri = buildNhlUrl('BoxScoresDelta/{{gameDateStr}}/{{minutesBack}}', {gameDateStr: gameDateStr, minutesBack: minutesBack});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.freeAgents = function(callback) {
    var uri = buildNhlUrl('FreeAgents');

    makeRequest(uri, callback);
  }

  FantasyData.nhl.gamesByDate = function(gameDateStr, callback) {
    var uri = buildNhlUrl('GamesByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.gamesBySeason = function(season, callback) {
    var uri = buildNhlUrl('Games/{{season}}', {season: season});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.news = function(callback) {
    var uri = buildNhlUrl('News');

    makeRequest(uri, callback);
  }

  FantasyData.nhl.newsByDate = function(gameDateStr, callback) {
    var uri = buildNhlUrl('NewsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.newsByPlayerId = function(playerId, callback) {
    var uri = buildNhlUrl('NewsByPlayerId/{{playerId}}', {playerId: playerId});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.playerGameStatsByDate = function(gameDateStr, callback) {
    var uri = buildNhlUrl('PlayerGameStatsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.playerSeasonStats = function(season, callback) {
    var uri = buildNhlUrl('PlayerSeasonStats/{{season}}', {season: season});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.playerSeasonStatsByTeam = function(season, team, callback) {
    var uri = buildNhlUrl('PlayerSeasonStatsByTeam/{{season}}/{{team}}', {season: season, team: team});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.playersByTeam = function(team, callback) {
    var uri = buildNhlUrl('Players/{{team}}', {team: team});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.playerGameProjectionStatsByDate = function(gameDateStr, callback) {
    var uri = buildNhlUrl('PlayerGameProjectionStatsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.stadiums = function(callback) {
    var uri = buildNhlUrl('Stadiums');

    makeRequest(uri, callback);
  }

  FantasyData.nhl.teamGameStatsByDate = function(gameDateStr, callback) {
    var uri = buildNhlUrl('TeamGameStatsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nhl.teamSeasonStats = function(season, callback) {
    var uri = buildNhlUrl('TeamSeasonStats/{{season}}', {season: season});

    makeRequest(uri, callback);
  }

  FantasyData.mlb = {};

  FantasyData.mlb.activeTeams = function(callback) {
    var uri = buildMlbUrl('Teams');

    makeRequest(uri, callback);
  };

  FantasyData.mlb.activePlayers = function(callback) {
    var uri = buildMlbUrl('Players');

    makeRequest(uri, callback);
  };

  FantasyData.mlb.boxScore = function(game, callback) {
    var uri = buildMlbUrl('BoxScore/{{game}}', {game: game});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.boxScores = function(gameDateStr, callback) {
    var uri = buildMlbUrl('BoxScores/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.boxScoresDelta = function(gameDateStr, minutesBack, callback) {
    var uri = buildMlbUrl('BoxScoresDelta/{{gameDateStr}}/{{minutesBack}}', {gameDateStr: gameDateStr, minutesBack: minutesBack});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.freeAgents = function(callback) {
    var uri = buildMlbUrl('FreeAgents');

    makeRequest(uri, callback);
  }

  FantasyData.mlb.gamesByDate = function(gameDateStr, callback) {
    var uri = buildMlbUrl('GamesByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.gamesBySeason = function(season, callback) {
    var uri = buildMlbUrl('Games/{{season}}', {season: season});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.news = function(callback) {
    var uri = buildMlbUrl('News');

    makeRequest(uri, callback);
  }

  FantasyData.mlb.newsByDate = function(gameDateStr, callback) {
    var uri = buildMlbUrl('NewsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.newsByPlayerId = function(playerId, callback) {
    var uri = buildMlbUrl('NewsByPlayerId/{{playerId}}', {playerId: playerId});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.playerGameStatsByDate = function(gameDateStr, callback) {
    var uri = buildMlbUrl('PlayerGameStatsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.playerSeasonStats = function(season, callback) {
    var uri = buildMlbUrl('PlayerSeasonStats/{{season}}', {season: season});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.playerSeasonStatsByTeam = function(season, team, callback) {
    var uri = buildMlbUrl('PlayerSeasonStatsByTeam/{{season}}/{{team}}', {season: season, team: team});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.playersByTeam = function(team, callback) {
    var uri = buildMlbUrl('Players/{{team}}', {team: team});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.playerGameProjectionStatsByDate = function(gameDateStr, callback) {
    var uri = buildMlbUrl('PlayerGameProjectionStatsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.stadiums = function(callback) {
    var uri = buildMlbUrl('Stadiums');

    makeRequest(uri, callback);
  }

  FantasyData.mlb.teamGameStatsByDate = function(gameDateStr, callback) {
    var uri = buildMlbUrl('TeamGameStatsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.mlb.teamSeasonStats = function(season, callback) {
    var uri = buildMlbUrl('TeamSeasonStats/{{season}}', {season: season});

    makeRequest(uri, callback);
  }

  FantasyData.nba = {};

  FantasyData.nba.activeTeams = function(callback) {
    var uri = buildNbaUrl('Teams');

    makeRequest(uri, callback);
  };

  FantasyData.nba.activePlayers = function(callback) {
    var uri = buildNbaUrl('Players');

    makeRequest(uri, callback);
  };

  FantasyData.nba.boxScore = function(game, callback) {
    var uri = buildNbaUrl('BoxScore/{{game}}', {game: game});

    makeRequest(uri, callback);
  }

  FantasyData.nba.boxScores = function(gameDateStr, callback) {
    var uri = buildNbaUrl('BoxScores/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nba.boxScoresDelta = function(gameDateStr, minutesBack, callback) {
    var uri = buildNbaUrl('BoxScoresDelta/{{gameDateStr}}/{{minutesBack}}', {gameDateStr: gameDateStr, minutesBack: minutesBack});

    makeRequest(uri, callback);
  }

  FantasyData.nba.freeAgents = function(callback) {
    var uri = buildNbaUrl('FreeAgents');

    makeRequest(uri, callback);
  }

  FantasyData.nba.gamesByDate = function(gameDateStr, callback) {
    var uri = buildNbaUrl('GamesByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nba.gamesBySeason = function(season, callback) {
    var uri = buildNbaUrl('Games/{{season}}', {season: season});

    makeRequest(uri, callback);
  }

  FantasyData.nba.news = function(callback) {
    var uri = buildNbaUrl('News');

    makeRequest(uri, callback);
  }

  FantasyData.nba.newsByDate = function(gameDateStr, callback) {
    var uri = buildNbaUrl('NewsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nba.newsByPlayerId = function(playerId, callback) {
    var uri = buildNbaUrl('NewsByPlayerId/{{playerId}}', {playerId: playerId});

    makeRequest(uri, callback);
  }

  FantasyData.nba.playerGameStatsByDate = function(gameDateStr, callback) {
    var uri = buildNbaUrl('PlayerGameStatsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nba.playerSeasonStats = function(season, callback) {
    var uri = buildNbaUrl('PlayerSeasonStats/{{season}}', {season: season});

    makeRequest(uri, callback);
  }

  FantasyData.nba.playerSeasonStatsByTeam = function(season, team, callback) {
    var uri = buildNbaUrl('PlayerSeasonStatsByTeam/{{season}}/{{team}}', {season: season, team: team});

    makeRequest(uri, callback);
  }

  FantasyData.nba.playersByTeam = function(team, callback) {
    var uri = buildNbaUrl('Players/{{team}}', {team: team});

    makeRequest(uri, callback);
  }

  FantasyData.nba.playerGameProjectionStatsByDate = function(gameDateStr, callback) {
    var uri = buildNbaUrl('PlayerGameProjectionStatsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nba.stadiums = function(callback) {
    var uri = buildNbaUrl('Stadiums');

    makeRequest(uri, callback);
  }

  FantasyData.nba.teamGameStatsByDate = function(gameDateStr, callback) {
    var uri = buildNbaUrl('TeamGameStatsByDate/{{gameDateStr}}', {gameDateStr: gameDateStr});

    makeRequest(uri, callback);
  }

  FantasyData.nba.teamSeasonStats = function(season, callback) {
    var uri = buildNbaUrl('TeamSeasonStats/{{season}}', {season: season});

    makeRequest(uri, callback);
  }

  FantasyData.nfl = {};

  FantasyData.nfl.activeBoxScores = function(callback) {
    var uri = buildNflUrl('ActiveBoxScores');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.areAnyGamesInProgress = function(callback) {
    var uri = buildNflUrl('AreAnyGamesInProgress');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.boxScore = function(season, week, homeTeam, callback) {
    var uri = buildNflUrl('BoxScore/{{season}}/{{week}}/{{homeTeam}}', {season: season, week: week, homeTeam: homeTeam.toUpperCase()});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.boxScores = function(season, week, callback) {
    var uri = buildNflUrl('BoxScores/{{season}}/{{week}}', {season: season, week: week});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.byes = function(season, callback) {
    var uri = buildNflUrl('Byes/{{season}}', {season: season});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.currentSeason = function(callback) {
    var uri = buildNflUrl('CurrentSeason');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.currentWeek = function(callback) {
    var uri = buildNflUrl('CurrentWeek');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.fantasyDefenseByGame = function(season, week, callback) {
    var uri = buildNflUrl('FantasyDefenseByGame/{{season}}/{{week}}', {season: season, week: week});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.fantasyDefenseBySeason = function(season, callback) {
    var uri = buildNflUrl('FantasyDefenseBySeason/{{season}}', {season: season});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.fantasyDefenseProjectionsByGame = function(season, week, callback) {
    var uri = buildNflUrl('FantasyDefenseProjectionsByGame/{{season}}/{{week}}', {season: season, week: week});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.fantasyPlayers = function(callback) {
    var uri = buildNflUrl('FantasyPlayers');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.finalBoxScores = function(callback) {
    var uri = buildNflUrl('FinalBoxScores');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.freeAgents = function(callback) {
    var uri = buildNflUrl('FreeAgents');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.gameLeagueLeaders = function(season, week, position, statsColumn, callback) {
    var uri = buildNflUrl('GameLeagueLeaders/{{season}}/{{week}}/{{position}}/{{statsColumn}}', {season: season, week: week, position: position, statsColumn: statsColumn});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.gameStats = function(season, callback) {
    var uri = buildNflUrl('GameStats/{{season}}', {season: season});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.gameStatsByWeek = function(season, week, callback) {
    var uri = buildNflUrl('GameStatsByWeek/{{season}}/{{week}}', {season: season, week: week});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.getErrorSample = function(callback) {
    var uri = buildNflUrl('GetErrorSample');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.injuriesByTeam = function(season, week, team, callback) {
    var uri = buildNflUrl('Injuries/{{season}}/{{week}}/{{team}}', {season: season, week: week, team: team});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.injuriesByWeek = function(season, week, callback) {
    var uri = buildNflUrl('Injuries/{{season}}/{{week}}', {season: season, week: week});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.lastCompletedSeason = function(callback) {
    var uri = buildNflUrl('LastCompletedSeason');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.lastCompletedWeek = function(callback) {
    var uri = buildNflUrl('LastCompletedWeek');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.liveBoxScores = function(callback) {
    var uri = buildNflUrl('LiveBoxScores');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.matchPlayer = function(searchCriteria, callback) {
    var uri = buildNflUrl('MatchPlayer', null, searchCriteria);

    makeRequest(uri, callback);
  };

  FantasyData.nfl.news = function(callback) {
    var uri = buildNflUrl('News');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.newsByPlayerId = function(playerId, callback) {
    var uri = buildNflUrl('NewsByPlayerId/{{playerId}}', {playerId: playerId});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.newsByTeam = function(team, callback) {
    var uri = buildNflUrl('NewsByTeam/{{team}}', {team: team});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.player = function(playerId, callback) {
    var uri = buildNflUrl('Player/{{playerId}}', {playerId: playerId});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.playerGameProjectionStatsByTeam = function(season, week, team, callback) {
    var uri = buildNflUrl('PlayerGameProjectionStatsByTeam/{{season}}/{{week}}/{{team}}', {season: season, week: week, team: team});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.playerGameStatsByPlayerId = function(season, week, playerId, callback) {
    var uri = buildNflUrl('PlayerGameStatsByPlayerId/{{season}}/{{week}}/{{playerId}}', {season: season, week: week, playerId: playerId});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.playerGameStatsByTeam = function(season, week, team, callback) {
    var uri = buildNflUrl('PlayerGameStatsByTeam/{{season}}/{{week}}/{{team}}', {season: season, week: week, team: team});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.playerGameStatsByWeek = function(season, week, callback) {
    var uri = buildNflUrl('PlayerGameStatsByWeek/{{season}}/{{week}}', {season: season, week: week});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.playerSeasonStatsByPlayerId = function(season, playerId, callback) {
    var uri = buildNflUrl('PlayerSeasonStatsByPlayerId/{{season}}/{{playerId}}', {season: season, playerId: playerId});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.playerSeasonStatsByTeam = function(season, team, callback) {
    var uri = buildNflUrl('PlayerSeasonStatsByTeam/{{season}}/{{team}}', {season: season, team: team});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.recentlyUpdatedBoxScores = function(minutes, callback) {
    var uri = buildNflUrl('RecentlyUpdatedBoxScores/{{minutes}}', {minutes: minutes});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.schedules = function(season, callback) {
    var uri = buildNflUrl('Schedules/{{season}}', {season: season});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.scores = function(season, callback) {
    var uri = buildNflUrl('Scores/{{season}}', {season: season});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.scoresByWeek = function(season, week, callback) {
    var uri = buildNflUrl('ScoresByWeek/{{season}}/{{week}}', {season: season, week: week});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.seasonLeagueLeaders = function(season, position, statsColumn, callback) {
    var uri = buildNflUrl('SeasonLeagueLeaders/{{season}}/{{position}}/{{statsColumn}}', {season: season, position: position, statsColumn: statsColumn});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.stadiums = function(callback) {
    var uri = buildNflUrl('Stadiums');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.standings = function(season, callback) {
    var uri = buildNflUrl('Standings/{{season}}', {season: season});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.teamGameStats = function(season, week, callback) {
    var uri = buildNflUrl('TeamGameStats/{{season}}/{{week}}', {season: season, week: week});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.teamRoster = function(team, callback) {
    var uri = buildNflUrl('Players/{{team}}', {team: team});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.teamSeasonStats = function(season, callback) {
    var uri = buildNflUrl('TeamSeasonStats/{{season}}', {season: season});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.teams = function(callback) {
    var uri = buildNflUrl('Teams');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.teamsBySeason = function(season, callback) {
    var uri = buildNflUrl('Teams/{{season}}', {season: season});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.timeFrames = function(timeFrameType, callback) {
    var uri = buildNflUrl('TimeFrames/{{timeFrameType}}', {timeFrameType: timeFrameType});

    makeRequest(uri, callback);
  };

  FantasyData.nfl.upcomingSeason = function(callback) {
    var uri = buildNflUrl('UpcomingSeason');

    makeRequest(uri, callback);
  };

  FantasyData.nfl.upcomingWeek = function(callback) {
    var uri = buildNflUrl('UpcomingWeek');

    makeRequest(uri, callback);
  };

  function validateConfig(cfg) {
    var isValid = true;

    if(console && !console.error) {
      console.error = console.log;
    }

    if(isNaN(cfg.timeout)) {
      console.error('Timeout in (ms) must be a valid number.')
      isValid = false;
    }

    var validVersions = [
      "trial",
      "developer",
      "standard",
      "weekly",
      "enterprise",
      "v2"
    ];

    if(validVersions.indexOf(cfg.version.toLowerCase()) === -1) {
      console.error('The given version: ' + cfg.version + ' is not supported at this time. Value must be one of the following: ' + validVersions.join(','));
      isValid = false;
    }

    var validUrls = [
      "api.fantasydata.net"
    ];

    if(validUrls.indexOf(cfg.url.toLowerCase()) === -1) {
      console.error('The given url: ' + cfg.url + ' is not supported at this time. Value must be one of the following: ' + validUrls.join(','));
      isValid = false;
    }

    var guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    if(guidRegex.test(cfg.key) === false) {
      console.error('The given key: ' + (cfg.key || 'empty string') + ' is not valid. Value must be a valid guid.');
      isValid = false;
    }

    if(!isValid) {
      console.error('Invalid configuration. Use the fantasyData.Options(options) method and try again.');
    }

    return isValid;
  }

  function makeRequest(uri, callback) {
    if(config.debug) {
      console.log(uri);
    }

    request(getDefaultOptions(uri), function(err, results) {
      if(err) {
        return callback(err, null);
      }

      var data = results && results.statusCode === 200 ? results.body : {statusCode: results.statusCode || 500, message: results.body || 'An error response was returned.'};

      return callback(err, data);
    });
  }

  function getDefaultOptions(uri) {
    return {
      scheme: config.protocol,
      uri: uri,
      method: 'get',
      json: true,
      timeout: config.timeout || 3000
    };
  }

  function buildNflUrl(path, urlParams, qsParams) {
    return buildUrl(path, urlParams, qsParams, 'nfl');
  }

  function buildMlbUrl(path, urlParams, qsParams) {
    return buildUrl(path, urlParams, qsParams, 'mlb');
  }

  function buildNbaUrl(path, urlParams, qsParams) {
    return buildUrl(path, urlParams, qsParams, 'nba');
  }

  function buildNhlUrl(path, urlParams, qsParams) {
    return buildUrl(path, urlParams, qsParams, 'nhl');
  }

  function buildUrl(path, urlParams, qsParams, sportType) {
    if(urlParams) {
      _.each(_.keys(urlParams), function(key) {
        path = path.toLowerCase().split('{{' + key.toLowerCase() + '}}').join(urlParams[key]);
      });
    }

    var address = url.format({
      protocol: config.protocol,
      host: config.url,
      pathname: [config[sportType].version, 'json', path].join('/'),
      query: _.extend(qsParams || {}, {key: config[sportType].key})
    });

    return address;
  }

  return FantasyData;
};
