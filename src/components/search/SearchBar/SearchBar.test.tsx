import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SearchBar} from './SearchBar';
import {useController} from './controller';

// Mock controller file
jest.mock('./controller', () => ({
  useController: jest.fn(),
}));

const mockSetShowRecentSearches = jest.fn();
const mockSearchLocation = jest.fn();
const mockOnChangeText = jest.fn();
const mockOnFocus = jest.fn();
const mockOnBlur = jest.fn();
const mockClearSearch = jest.fn();
const mockSearchInputRef = React.createRef();

function setupController({searchText = '', isClearIconVisible = false} = {}) {
  (useController as jest.Mock).mockReturnValue({
    searchText,
    isClearIconVisible,
    searchLocation: mockSearchLocation,
    onChangeText: mockOnChangeText,
    onFocus: mockOnFocus,
    onBlur: mockOnBlur,
    clearSearch: mockClearSearch,
    searchInputRef: mockSearchInputRef,
  });
}

afterEach(() => {
  jest.clearAllMocks();
});

test('renders search icon, input, and no clear icon when isClearIconVisible is false', () => {
  setupController({isClearIconVisible: false, searchText: ''});
  const {queryByTestId, getByDisplayValue} = render(
    <SearchBar setShowRecentSearches={mockSetShowRecentSearches} />,
  );
  expect(queryByTestId('search-icon')).toBeTruthy();
  expect(getByDisplayValue('')).toBeTruthy();
  expect(queryByTestId('close-icon')).toBeNull();
});

test('renders clear icon when isClearIconVisible is true', () => {
  setupController({isClearIconVisible: true, searchText: 'abc'});
  const {queryByTestId, getByDisplayValue} = render(
    <SearchBar setShowRecentSearches={mockSetShowRecentSearches} />,
  );
  expect(queryByTestId('close-icon')).toBeTruthy();
  expect(getByDisplayValue('abc')).toBeTruthy();
});

test('pressing search icon calls searchLocation', () => {
  setupController();
  const {getByTestId} = render(
    <SearchBar setShowRecentSearches={mockSetShowRecentSearches} />,
  );
  fireEvent.press(getByTestId('search-icon'));
  expect(mockSearchLocation).toHaveBeenCalled();
});

test('pressing clear icon calls clearSearch', () => {
  setupController({isClearIconVisible: true});
  const {getByTestId} = render(
    <SearchBar setShowRecentSearches={mockSetShowRecentSearches} />,
  );
  fireEvent.press(getByTestId('close-icon'));
  expect(mockClearSearch).toHaveBeenCalled();
});

test('changing text calls onChangeText', () => {
  setupController();
  const {getByDisplayValue} = render(
    <SearchBar setShowRecentSearches={mockSetShowRecentSearches} />,
  );
  fireEvent.changeText(getByDisplayValue(''), 'new text');
  expect(mockOnChangeText).toHaveBeenCalledWith('new text');
});

test('focusing and blurring input calls onFocus and onBlur', () => {
  setupController();
  const {getByDisplayValue} = render(
    <SearchBar setShowRecentSearches={mockSetShowRecentSearches} />,
  );
  const input = getByDisplayValue('');
  fireEvent(input, 'focus');
  expect(mockOnFocus).toHaveBeenCalled();
  fireEvent(input, 'blur');
  expect(mockOnBlur).toHaveBeenCalled();
});
