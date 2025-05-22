export type TWeatherType =
  | 'sunny'
  | 'cloudy'
  | 'partialRain'
  | 'partialSun'
  | 'partialSunnyRain';

export const generateWeatherType = (code: number) => {
  const weatherCode = code.toString();
  let weather: TWeatherType = 'sunny';

  if (weatherCode === '800') {
    weather = 'sunny';
  }

  if (weatherCode.startsWith('6')) {
    weather = 'cloudy';
  }

  if (weatherCode.startsWith('7')) {
    weather = 'partialSun';
  }

  if (
    weatherCode.startsWith('5') ||
    weatherCode.startsWith('2') ||
    weatherCode.startsWith('3')
  ) {
    weather = 'partialRain';
  }

  if (weatherCode.startsWith('80') && weatherCode !== '800') {
    weather = 'partialSunnyRain';
  }

  return weather;
};
