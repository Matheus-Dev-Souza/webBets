import React from "react";

export interface iFootTypes {
  number: number;
  requestChampsList(): void;
  listChamps: [] | iChamps[];
  requestDataChamp(data: string, number: number): void;
  listChampsFinded: [] | iChampFinded[];
  increaseNumber(data: string): void;
  decreaseNumber(data: string): void;
  nameChamp: string;
  setNameChamp: React.Dispatch<React.SetStateAction<string>>;
  tagChamp: string;
  setTagChamp: React.Dispatch<React.SetStateAction<string>>;
  requestMatchData(idMatch: number): void;
  matchFinded: iMatchData | null;
  requestInfoTeamHome(idTeam: number): void;
  teamHomeFinded: iTeamData | null;
  requestInfoTeamAway(idTeam: number): void;
  teamAwayFinded: iTeamData | null;
}

export interface iChildren {
  children: React.ReactNode
}

export interface iChamps {
  area?: {
    id: number;
    code: string;
    flag: null;
    name: string;
  };
  code?: string;
  currentSeason?: {
    currentMatchday?: string | null;
    endDate?: string;
    id?: number;
    startDate?: string;
    winner?: string | null;
  };
  id?: number;
  emblem?: string | null;
  lastUpdate?: string;
  name?: string;
  numberOfAvailableSeasons?: number;
  plan?: string;
  type?: string;
}

export interface iChampFinded {
    area?: {
      id?: number,
      name?: string,
      code?: string,
      flag?: string
    },
    competition?: {
      id?: number,
      name?: string,
      code?: string,
      type?: string,
      emblem?: string
    },
    season?: {
      id?: number,
      startDate?: string,
      endDate?: string,
      currentMatchday?: 1,
      winner?: null
    },
    id?: number,
    utcDate?: string,
    status?: string,
    matchday?: 1,
    stage?: string,
    group?: null,
    lastUpdated?: string,
    homeTeam?: {
      id?: number,
      name?: string,
      shortName?: string,
      tla?: string,
      crest?: string
    },
    awayTeam?: {
      id?: number,
      name?: string,
      shortName?: string,
      tla?: string,
      crest?: string
    },
    score?: {
      winner?: null | string,
      duration?: string,
      fullTime?: {
        home?: null,
        away?: null
      },
      halfTime?: {
        home?: null,
        away?: null
      }
    },
    odds?: {
      msg?: string
    },
    referees?: []
}

export interface iMatchData {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  awayTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  group: null;
  homeTeam: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  id: number;
  lastUpdated: string;
  matchday: number;
  odds: {
    msg: string;
  };
  referees: any[];
  score: {
    winner: string;
    duration: string;
    fullTime: {
      away: number;
      home: number;
    };
    halfTime: {
      away: number;
      home: number;
    };
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null;
  };
  stage: string;
  status: string;
  utcDate: string;
  venue: null;
}

export interface iTeamData {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  runningCompetitions: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string | null;
  }[];
  coach: {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    dateOfBirth: string;
    nationality: string;
    contract: {
      start: string;
      until: string;
    };
  };
  squad: {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;
  }[];
  staff: {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    dateOfBirth: string | null;
    nationality: string;
    contract: {
      start: string;
      until: string;
    };
  }[];
}