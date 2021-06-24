export interface Coordinate {
  lat: number;
  lon: number;
}
export interface Summary {
  title: string;
  description: string;
  icon: string;
}
export interface Temperature {
  actual: number;
  feelsLike: number;
  min: number;
  max: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
  visibility: number;
  humidity: number;
}
export interface Weather {
  summary: Summary;
  temperature: Temperature;
  wind: Wind;
  clouds: Clouds;
  timestamp: number;
}
export interface CityMetaData {
  id: string;
  name: string;
  country: string;
  coord: Coordinate;
  weather: Weather;
}

export interface CityByName {
  getCityByName: CityMetaData;
}

export interface CityByNameVars {
  name: string;
}
