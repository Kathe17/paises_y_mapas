export interface CountryModel {
  name: {
    common: string;
    official: string;
  };
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  capital: string;
  region: string;
  area: number;
  maps: {
    googleMaps: string;
  };
}
