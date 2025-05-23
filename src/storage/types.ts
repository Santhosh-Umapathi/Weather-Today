//Storage Types
export type TStorageKey = 'locations' | 'savedSearches';

export type TStorageValue<T> = T;

export type TSavedSearch = {
  id: number;
  search: string;
};

export type TSavedSearches = TSavedSearch[];
