# fantasydata-api
v0.1.2
___
[![Build Status](https://drone.io/github.com/n8io/fantasydata-api/status.png)](https://drone.io/github.com/n8io/fantasydata-api/latest)


This is a nodeJs wrapper for the [FantasyData.com](http://www.fantasydata.com)'s api. Fully tested using mocha.

##Installation
This can easily be installed via npm

```
npm install fantasydata-api
```

##Options

```javascript
var options = {
  protocol: 'http',
  url: 'api.nfldata.apiphany.com',
  level: 'developer',
  timeout: 10000,
  key: '' // <-- Pass in your key here
};
```

##Example Usage

```javascript
var fantasyData = require('fantasydata-api')(options);

var season = '2014REG';
fantasyData.Byes(season, function(err, results){
    console.log(JSON.stringify(results, null, 2));
})

/* Returns */
[
  {
    "Season": 2014,
    "Team": "ARI",
    "Week": 4
  },
  {
    "Season": 2014,
    "Team": "CIN",
    "Week": 4
  },
  {
    "Season": 2014,
    "Team": "CLE",
    "Week": 4
  },
  ...
]
```

##Parameters
* ``` season ```
  * Year of the season and the season type. If no season type is provided, then the default is regular season.
  * e.g., 2013REG, 2013PRE, 2013POST, 2013, etc
* ``` week ```
  * Integer representing a given week
  * Valid values are 1-21
* ``` team ```
  * The unique abbreviation for a given team
  * e.g., IND, ARI, NO, GB, etc
* ``` statColumn ```
  * Any given numerical stat column on a [PlayerGame object](http://fantasydata.com/resources/data-dictionary.aspx)
  * PassingYards, ReceivingTargets, RushingTouchdowns, etc
* ``` position ```
  * A given player's position
  * Valid values are QB, RB, WR, TE, K, P, DL, LB, DB and in Match Player cases DE, DT, C, G, CB, OLB, S as well
* ``` playerId ```
  * The integer identifier for a given player
  * e.g., 732
* ``` searchCriteria ```
  * Used only for MatchPlayer method
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

##Methods

For more information as to what each method returns, take a look at the [official documentation](https://developer.fantasydata.com/api-documentation).

* ```ActiveBoxScores(callback)```
* ```AreAnyGamesInProgress(callback)```
* ```BoxScore(season, week, homeTeam, callback)```
* ```BoxScores(season, week, callback)```
* ```Byes(season)(callback)```
* ```CurrentSeason(callback)```
* ```CurrentWeek(callback)```
* ```FantasyDefenseByGame(season, week, callback)```
* ```FantasyDefenseBySeason(season, callback)```
* ```FantasyDefenseProjectionsByGame(season, week, callback)```
* ```FantasyPlayers(callback)```
* ```FinalBoxScores(callback)```
* ```FreeAgents(callback)```
* ```GameLeagueLeaders(season, week, position, statColumn, callback)```
* ```GameStats(season, callback)```
* ```GameStatsByWeek(season, week, callback)```
* ```GetErrorSample(callback)```
* ```InjuriesByTeam(season, week, team, callback)```
* ```InjuriesByWeek(season, week, callback)```
* ```LastCompletedSeason(callback)```
* ```LastCompletedWeek(callback)```
* ```LiveBoxScores(callback)```
* ```MatchPlayer(searchCriteria, callback)```
* ```News(callback)```
* ```NewsByPlayerId(playerId, callback)```
* ```NewsByTeam(team, callback)```
* ```Player(playerId, callback)```
* ```PlayerGameProjectionStatsByTeam(season, week, team, callback)```
* ```PlayerGameStatsByPlayerId(season, week, playerId, callback)```
* ```PlayerGameStatsByTeam(season, week, team, callback)```
* ```PlayerGameStatsByWeek(season, week, callback)```
* ```PlayerSeasonStatsByPlayerId(season, playerId, callback)```
* ```PlayerSeasonStatsByTeam(season, team, callback)```
* ```Schedules(season, callback)```
* ```Scores(season,callback)```
* ```ScoresByWeek(season, week, callback)```
* ```SeasonLeagueLeaders(season, position, statColumn, callback)```
* ```Stadiums(callback)```
* ```Standings(season, callback)```
* ```TeamGameStats(season, week, callback)```
* ```TeamRoster(team, callback)```
* ```TeamSeasonStats(season, callback)```
* ```Teams(callback)```
* ```TeamsBySeason(season, callback)```
* ```Timeframes(timeFrameType, callback)```
* ```UpcomingSeason(callback)```
* ```UpcomingWeek(callback)```

___


The MIT License (MIT)

Copyright (c) 2014 Nate Clark

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