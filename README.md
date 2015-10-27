# fantasydata-api

This library is a wrapper for the [FantasyData.com](http://bit.ly/fantasydata)'s api. Fully tested using mocha.

[![Build Status](https://drone.io/github.com/n8io/fantasydata-api/status.png)](https://drone.io/github.com/n8io/fantasydata-api/latest)
[![Dependencies](https://david-dm.org/n8io/fantasydata-api.svg)](https://github.com/n8io/fantasydata-api/blob/master/package.json)

v1.3.3 [change log](change.md)

[![NPM](https://nodei.co/npm/fantasydata-api.png?downloads=true&stars=true)](http://bit.ly/npm-downloads-img)

## Intro
This wrapper provides a simple way of interacting with the exposed methods of FantasyData's various sports apis. Includes methods for MLB, NBA, NFL, and NHL.

## Installation
This can easily be installed via npm

```
npm install fantasydata-api
```

## Options

```javascript
var options = {
  timeout: 15000, // Service call timeout
  mlb: {
    version: 'mlb/v2',
    key: '' // <-- Pass in your mlb key here
  },
  nba: {
    version: 'nba/v2',
    key: '' // <-- Pass in your nba key here
  },
  nfl: {
    version: 'nfl/v2',
    key: '' // <-- Pass in your nfl key here
  },
  nhl: {
    version: 'nhl/v2',
    key: '' // <-- Pass in your nhl key here
  }
};
```

## Example Usage
```javascript
var fantasyData = require('fantasydata-api')(options);

var season = '2014REG';
fantasyData.nfl.Byes(season, function(err, results){
  console.log(JSON.stringify(results, null, 2));
});
```

## Parameters
* ``` season ```
  * Year of the season and the season type. If no season type is provided, then the default is regular season.
  * e.g., 2013REG, 2013PRE, 2013POST, 2013, etc
* ``` week ```
  * Integer representing a given week
  * Valid values are: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.
* ``` team ```
  * The unique abbreviation for a given team
  * e.g., IND, ARI, NO, GB, etc
* ``` statColumn ```
  * Any given numerical stat column on a [PlayerGame object](http://bit.ly/fantasydata-data-dictionary)
  * PassingYards, ReceivingTargets, RushingTouchdowns, etc
* ``` position ```
  * A given player's position
  * Valid values are QB, RB, WR, TE, K, P, DL, LB, DB and in Match Player cases DE, DT, C, G, CB, OLB, S as well

* ``` timeFrameType ```
  * The type of timeframes to return.
  * Valid types are current, upcoming, completed, recent, all. Visit the [timeframe documentation](http://bit.ly/fantasydata-timeframes) for more info.
* ``` playerId ```
  * The integer identifier for a given player
  * e.g., 732
* ``` minutes ```
  * Currently only used by the RecentlyUpdatedBoxScores method
  * The integer representing the time in minutes to look back for updates
  * e.g., 1,2,5,10
* ``` searchCriteria ```
  * Currently only used by the MatchPlayer method
  ```javascript
  var searchCriteria = {
    team: 'IND',
    firstName: 'Andrew',
    lastName: 'Luck',
    fullName: null,
    number: null,
    dob: null,
    position: 'QB',
    college: null
  };
  ```

## Methods

For more information as to what each method returns, take a look at the [official documentation](http://bit.ly/fantasydata-api-documentation).

### Helpers
* ```Options()``` - Get the current options
* ```Options(options)``` - Set the options

### API
All methods are asynchronous and require the last parameter to be a callback function ```function(err, results) {}```.

* FantasyData.nfl
  * ```.activeBoxScores(callback)```
  * ```.areAnyGamesInProgress(callback)```
  * ```.boxScore(season, week, homeTeam, callback)```
  * ```.boxScores(season, week, callback)```
  * ```.byes(season)(callback)```
  * ```.currentSeason(callback)```
  * ```.currentWeek(callback)```
  * ```.fantasyDefenseByGame(season, week, callback)```
  * ```.fantasyDefenseBySeason(season, callback)```
  * ```.fantasyDefenseProjectionsByGame(season, week, callback)```
  * ```.fantasyPlayers(callback)```
  * ```.finalBoxScores(callback)```
  * ```.freeAgents(callback)```
  * ```.gameLeagueLeaders(season, week, position, statColumn, callback)```
  * ```.gameStats(season, callback)```
  * ```.gameStatsByWeek(season, week, callback)```
  * ```.getErrorSample(callback)```
  * ```.injuriesByTeam(season, week, team, callback)```
  * ```.injuriesByWeek(season, week, callback)```
  * ```.lastCompletedSeason(callback)```
  * ```.lastCompletedWeek(callback)```
  * ```.liveBoxScores(callback)```
  * ```.matchPlayer(searchCriteria, callback)```
  * ```.news(callback)```
  * ```.newsByPlayerId(playerId, callback)```
  * ```.newsByTeam(team, callback)```
  * ```.player(playerId, callback)```
  * ```.playerGameProjectionStatsByTeam(season, week, team, callback)```
  * ```.playerGameStatsByPlayerId(season, week, playerId, callback)```
  * ```.playerGameStatsByTeam(season, week, team, callback)```
  * ```.playerGameStatsByWeek(season, week, callback)```
  * ```.playerSeasonStatsByPlayerId(season, playerId, callback)```
  * ```.playerSeasonStatsByTeam(season, team, callback)```
  * ```.recentlyUpdatedBoxScores(minutes, callback)```
  * ```.schedules(season, callback)```
  * ```.scores(season,callback)```
  * ```.scoresByWeek(season, week, callback)```
  * ```.seasonLeagueLeaders(season, position, statColumn, callback)```
  * ```.stadiums(callback)```
  * ```.standings(season, callback)```
  * ```.teamGameStats(season, week, callback)```
  * ```.teamRoster(team, callback)```
  * ```.teamSeasonStats(season, callback)```
  * ```.teams(callback)```
  * ```.teamsBySeason(season, callback)```
  * ```.timeframes(timeFrameType, callback)```
  * ```.upcomingSeason(callback)```
  * ```.upcomingWeek(callback)```

* FantastyData.nba
  * ```.activeTeams(callback)```
  * ```.activePlayers(callback)```
  * ```.boxScore(gameId, callback)```
  * ```.boxScores(dateStr, callback)```
  * ```.boxScoresDelta(dateStr, minutesBack, callback)```
  * ```.freeAgents(callback)```
  * ```.gamesByDate(dateStr, callback)```
  * ```.gamesBySeason(season, callback)```
  * ```.news(callback)```
  * ```.newsByDate(dateStr, callback)```
  * ```.newsByPlayerId(playerId, callback)```
  * ```.playerGameStatsByDate(dateStr, callback)```
  * ```.playerSeasonStats(season, callback)```
  * ```.playerSeasonStatsByTeam(season, team, callback)```
  * ```.playersByTeam(team, callback)```
  * ```.playerGameProjectionStatsByDate(dateStr, callback)```
  * ```.stadiums(callback)```
  * ```.teamGameStatsByDate(dateStr, callback)```
  * ```.teamSeasonStats(callback)```

* FantastyData.mlb
  * ```.activeTeams(callback)```
  * ```.activePlayers(callback)```
  * ```.boxScore(gameId, callback)```
  * ```.boxScores(dateStr, callback)```
  * ```.boxScoresDelta(dateStr, minutesBack, callback)```
  * ```.freeAgents(callback)```
  * ```.gamesByDate(dateStr, callback)```
  * ```.gamesBySeason(season, callback)```
  * ```.news(callback)```
  * ```.newsByDate(dateStr, callback)```
  * ```.newsByPlayerId(playerId, callback)```
  * ```.playerGameStatsByDate(dateStr, callback)```
  * ```.playerSeasonStats(season, callback)```
  * ```.playerSeasonStatsByTeam(season, team, callback)```
  * ```.playersByTeam(team, callback)```
  * ```.playerGameProjectionStatsByDate(dateStr, callback)```
  * ```.stadiums(callback)```
  * ```.teamGameStatsByDate(dateStr, callback)```
  * ```.teamSeasonStats(callback)```

* FantastyData.nhl
  * ```.activeTeams(callback)```
  * ```.activePlayers(callback)```
  * ```.boxScore(gameId, callback)```
  * ```.boxScores(dateStr, callback)```
  * ```.boxScoresDelta(dateStr, minutesBack, callback)```
  * ```.freeAgents(callback)```
  * ```.gamesByDate(dateStr, callback)```
  * ```.gamesBySeason(season, callback)```
  * ```.news(callback)```
  * ```.newsByDate(dateStr, callback)```
  * ```.newsByPlayerId(playerId, callback)```
  * ```.playerGameStatsByDate(dateStr, callback)```
  * ```.playerSeasonStats(season, callback)```
  * ```.playerSeasonStatsByTeam(season, team, callback)```
  * ```.playersByTeam(team, callback)```
  * ```.playerGameProjectionStatsByDate(dateStr, callback)```
  * ```.stadiums(callback)```
  * ```.teamGameStatsByDate(dateStr, callback)```
  * ```.teamSeasonStats(callback)```

___


The MIT License (MIT)

Copyright (c) 2015 Nate Clark

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.