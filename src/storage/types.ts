//Storage Types
export type TStorageKey = 'savedSearches' | 'primaryLocation';

export type TStorageValue<T> = T;

export type TSavedSearch = {
  id: number;
  search: string;
};

export type TSavedSearches = TSavedSearch[];
