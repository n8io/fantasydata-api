var request = require('request');
var _ = require('underscore');
var async = require('async');
var url = require('url');

module.exports = function(options){
  var defaults = {
    protocol: 'http',
    url: 'api.nfldata.apiphany.com',
    level: 'developer',
    timeout: 10000,
    key: ''
  };

  options = options || {};
  options.format = 'json';

  var config = _.extend(defaults, options);

  var FantasyData = function(){};

  FantasyData.Options = function(opts){
    var isSetter = !!opts;

    opts = opts || {};

    opts.format = 'json'; // Always json

    if(isSetter){
      if(!validateConfig(config)) return;

      config = _.extend(defaults, opts);
    }
    else{
      return _.extend(defaults, opts);
    }
  };

  FantasyData.ActiveBoxScores = function(callback){
    var uri = buildUrl('ActiveBoxScores');

    makeRequest(uri, callback);
  };

  FantasyData.AreAnyGamesInProgress = function(callback){
    var uri = buildUrl('AreAnyGamesInProgress');

    makeRequest(uri, callback);
  };

  FantasyData.BoxScore = function(season, week, homeTeam, callback){
    var uri = buildUrl('BoxScore/{{season}}/{{week}}/{{homeTeam}}', {season:season,week:week,homeTeam:homeTeam.toUpperCase()});

    makeRequest(uri, callback);
  };

  FantasyData.BoxScores = function(season, week, callback){
    var uri = buildUrl('BoxScores/{{season}}/{{week}}', {season:season,week:week});

    makeRequest(uri, callback);
  };

  FantasyData.Byes = function(season, callback){
    var uri = buildUrl('Byes/{{season}}', {season:season});

    makeRequest(uri, callback);
  };

  FantasyData.CurrentSeason = function(callback){
    var uri = buildUrl('CurrentSeason');

    makeRequest(uri, callback);
  };

  FantasyData.CurrentWeek = function(callback){
    var uri = buildUrl('CurrentWeek');

    makeRequest(uri, callback);
  };

  FantasyData.FantasyDefenseByGame = function(season, week, callback){
    var uri = buildUrl('FantasyDefenseByGame/{{season}}/{{week}}', {season:season,week:week});

    makeRequest(uri, callback);
  };

  FantasyData.FantasyDefenseBySeason = function(season, callback){
    var uri = buildUrl('FantasyDefenseBySeason/{{season}}', {season:season});

    makeRequest(uri, callback);
  };

  FantasyData.FantasyDefenseProjectionsByGame = function(season, week, callback){
    var uri = buildUrl('FantasyDefenseProjectionsByGame/{{season}}/{{week}}', {season:season,week:week});

    makeRequest(uri, callback);
  };

  FantasyData.FantasyPlayers = function(callback){
    var uri = buildUrl('FantasyPlayers');

    makeRequest(uri, callback);
  };

  FantasyData.FinalBoxScores = function(callback){
    var uri = buildUrl('FinalBoxScores');

    makeRequest(uri, callback);
  };

  FantasyData.FreeAgents = function(callback){
    var uri = buildUrl('FreeAgents');

    makeRequest(uri, callback);
  };

  FantasyData.GameLeagueLeaders = function(season, week, position, statsColumn, callback){
    var uri = buildUrl('GameLeagueLeaders/{{season}}/{{week}}/{{position}}/{{statsColumn}}', {season:season,week:week,position:position,statsColumn:statsColumn});

    makeRequest(uri, callback);
  };

  FantasyData.GameStats = function(season, callback){
    var uri = buildUrl('GameStats/{{season}}', {season:season});

    makeRequest(uri, callback);
  };

  FantasyData.GameStatsByWeek = function(season, week, callback){
    var uri = buildUrl('GameStatsByWeek/{{season}}/{{week}}', {season:season,week:week});

    makeRequest(uri, callback);
  };

  FantasyData.GetErrorSample = function(callback){
    var uri = buildUrl('GetErrorSample');

    makeRequest(uri, callback);
  };

  FantasyData.InjuriesByTeam = function(season, week, team, callback){
    var uri = buildUrl('Injuries/{{season}}/{{week}}/{{team}}', {season:season,week:week,team:team});

    makeRequest(uri, callback);
  };

  FantasyData.InjuriesByWeek = function(season, week, callback){
    var uri = buildUrl('Injuries/{{season}}/{{week}}', {season:season,week:week});

    makeRequest(uri, callback);
  };

  FantasyData.LastCompletedSeason = function(callback){
    var uri = buildUrl('LastCompletedSeason');

    makeRequest(uri, callback);
  };

  FantasyData.LastCompletedWeek = function(callback){
    var uri = buildUrl('LastCompletedWeek');

    makeRequest(uri, callback);
  };

  FantasyData.LiveBoxScores = function(callback){
    var uri = buildUrl('LiveBoxScores');

    makeRequest(uri, callback);
  };

  FantasyData.MatchPlayer = function(searchCriteria, callback){
    var uri = buildUrl('MatchPlayer', null, searchCriteria);

    makeRequest(uri, callback);
  };

  FantasyData.News = function(callback){
    var uri = buildUrl('News');

    makeRequest(uri, callback);
  };

  FantasyData.NewsByPlayerId = function(playerId, callback){
    var uri = buildUrl('NewsByPlayerId/{{playerId}}',{playerId:playerId});

    makeRequest(uri, callback);
  };

  FantasyData.NewsByTeam = function(team, callback){
    var uri = buildUrl('NewsByTeam/{{team}}',{team:team});

    makeRequest(uri, callback);
  };

  FantasyData.Player = function(playerId, callback){
    var uri = buildUrl('Player/{{playerId}}',{playerId:playerId});

    makeRequest(uri, callback);
  };

  FantasyData.PlayerGameProjectionStatsByTeam = function(season, week, team, callback){
    var uri = buildUrl('PlayerGameProjectionStatsByTeam/{{season}}/{{week}}/{{team}}', {season:season,week:week,team:team});

    makeRequest(uri, callback);
  };

  FantasyData.PlayerGameStatsByPlayerId = function(season, week, playerId, callback){
    var uri = buildUrl('PlayerGameStatsByPlayerId/{{season}}/{{week}}/{{playerId}}', {season:season,week:week,playerId:playerId});

    makeRequest(uri, callback);
  };

  FantasyData.PlayerGameStatsByTeam = function(season, week, team, callback){
    var uri = buildUrl('PlayerGameStatsByTeam/{{season}}/{{week}}/{{team}}', {season:season,week:week,team:team});

    makeRequest(uri, callback);
  };

  FantasyData.PlayerGameStatsByWeek = function(season, week, callback){
    var uri = buildUrl('PlayerGameStatsByWeek/{{season}}/{{week}}', {season:season,week:week});

    makeRequest(uri, callback);
  };

  FantasyData.PlayerSeasonStatsByPlayerId = function(season, playerId, callback){
    var uri = buildUrl('PlayerSeasonStatsByPlayerId/{{season}}/{{playerId}}', {season:season,playerId:playerId});

    makeRequest(uri, callback);
  };

  FantasyData.PlayerSeasonStatsByTeam = function(season, team, callback){
    var uri = buildUrl('PlayerSeasonStatsByTeam/{{season}}/{{team}}', {season:season,team:team});

    makeRequest(uri, callback);
  };

  FantasyData.Schedules = function(season, callback){
    var uri = buildUrl('Schedules/{{season}}',{season:season});

    makeRequest(uri, callback);
  };

  FantasyData.Scores = function(season, callback){
    var uri = buildUrl('Scores/{{season}}', {season:season});

    makeRequest(uri, callback);
  };

  FantasyData.ScoresByWeek = function(season, week, callback){
    var uri = buildUrl('ScoresByWeek/{{season}}/{{week}}', {season:season,week:week});

    makeRequest(uri, callback);
  };

  FantasyData.SeasonLeagueLeaders = function(season, position, statsColumn, callback){
    var uri = buildUrl('SeasonLeagueLeaders/{{season}}/{{position}}/{{statsColumn}}', {season:season,position:position,statsColumn:statsColumn});

    makeRequest(uri, callback);
  };

  FantasyData.Stadiums = function(callback){
    var uri = buildUrl('Stadiums');

    makeRequest(uri, callback);
  };

  FantasyData.Standings = function(season, callback){
    var uri = buildUrl('Standings/{{season}}', {season:season});

    makeRequest(uri, callback);
  };

  FantasyData.TeamGameStats = function(season, week, callback){
    var uri = buildUrl('TeamGameStats/{{season}}/{{week}}', {season:season,week:week});

    makeRequest(uri, callback);
  };

  FantasyData.TeamRoster = function(team, callback){
    var uri = buildUrl('Players/{{team}}', {team:team});

    makeRequest(uri, callback);
  };

  FantasyData.TeamSeasonStats = function(season, callback){
    var uri = buildUrl('TeamSeasonStats/{{season}}', {season:season});

    makeRequest(uri, callback);
  };

  FantasyData.Teams = function(callback){
    var uri = buildUrl('Teams');

    makeRequest(uri, callback);
  };

  FantasyData.TeamsBySeason = function(season, callback){
    var uri = buildUrl('Teams/{{season}}', {season:season});

    makeRequest(uri, callback);
  };

  FantasyData.TimeFrames = function(timeFrameType, callback){
    var uri = buildUrl('TimeFrames/{{timeFrameType}}', {timeFrameType:timeFrameType});

    makeRequest(uri, callback);
  };

  FantasyData.UpcomingSeason = function(callback){
    var uri = buildUrl('UpcomingSeason');

    makeRequest(uri, callback);
  };

  FantasyData.UpcomingWeek = function(callback){
    var uri = buildUrl('UpcomingWeek');

    makeRequest(uri, callback);
  };

  function validateConfig(cfg){
    var isValid = true;

    if(console && !console.error){
      console.error = console.log;
    }

    if(isNaN(cfg.timeout)){
      console.error('Timeout in (ms) must be a valid number.')
      isValid = false;
    }

    var validLevels = [
      "trial",
      "developer",
      "standard",
      "weekly",
      "enterprise"
    ];

    if(validLevels.indexOf(cfg.level.toLowerCase()) === -1){
      console.error('The given level: ' + cfg.level + ' is not supported at this time. Value must be one of the following: ' + validLevels.join(','));
      isValid = false;
    }

    var validProtocols = [
      "http"
    ];

    if(validProtocols.indexOf(cfg.protocol.toLowerCase()) === -1){
      console.error('The given protocol: ' + cfg.protocol + ' is not supported at this time. Value must be one of the following: ' + validProtocols.join(','));
      isValid = false;
    }

    var validUrls = [
      "api.nfldata.apiphany.com"
    ];

    if(validUrls.indexOf(cfg.url.toLowerCase()) === -1){
      console.error('The given url: ' + cfg.url + ' is not supported at this time. Value must be one of the following: ' + validUrls.join(','));
      isValid = false;
    }

    var guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if(guidRegex.test(cfg.key) === false){
      console.error('The given key: ' + (cfg.key || 'empty string') + ' is not valid. Value must be a valid guid.');
      isValid = false;
    }

    if(!isValid){
      console.error('Invalid configuration. Use the fantasyData.Options(options) method and try again.');
    }

    return isValid;
  }

  function makeRequest(uri, callback){
    request(getDefaultOptions(uri), function(err, results){
      if(err){
        console.log(uri, err);
        return callback(err, null);
      }

      var data = results && results.statusCode === 200 ? results.body : null;

      return callback(err, data);
    });
  }

  function getDefaultOptions(uri){
    return {
      scheme: config.protocol,
      uri: uri,
      method: 'get',
      json: true,
      timeout: config.timeout || 3000
    };
  }

  function buildUrl(path, urlParams, qsParams){
    if(urlParams){
      _.each(_(urlParams).keys(),function(key){
        path = path.toLowerCase().split('{{'+key.toLowerCase()+'}}').join(urlParams[key]);
      });
    }

    var address = url.format({
      protocol: config.protocol,
      host: config.url,
      pathname: [ config.level, config.format, path ].join('/'),
      query: _.extend(qsParams || {}, { key: config.key })
    });

    return address;
  }

  return FantasyData;
};