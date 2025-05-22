import {TWeatherType} from '../helpers';

type TColors = {
  white: string;
  black: string;
  gray: string;
  lightBg: string;
  weatherColors: {
    [key in TWeatherType]: string[];
  };
};

export const colors: TColors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#9A938C',
  lightBg: 'rgba(255, 255, 255, 0.35)',

  // Gradient colors for weather types
  weatherColors: {
    sunny: ['#FEE3BC', '#F39876'],
    cloudy: ['#d3d3d3', '#a2b0c0'],
    partialRain: ['#dfe3e6', '#6a7ba2'],
    partialSun: ['#fceabb', '#d4e3f2'],
    partialSunnyRain: ['#FEE3BC', '#a1b5c8'],
  },
};
