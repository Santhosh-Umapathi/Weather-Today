//------------------------------------------------------------------
//MARK: Data Types - Server Response
//------------------------------------------------------------------
export type TCitiesBE = {
  error: boolean;
  msg: string;
  data: TDatum[];
};

//------------------------------------------------------------------
//MARK: Data Types - Subtypes
//------------------------------------------------------------------
type TDatum = {
  iso2: string;
  iso3: string;
  country: string;
  cities: string[];
};
