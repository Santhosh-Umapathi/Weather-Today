export type TProps = {
  icon: TWeatherDataIcons;
  title: string;
  value: string;
};

type TWeatherDataIcons = 'feelsLike' | 'humidity' | 'windSpeed';

export type TIcons = {
  [key in TWeatherDataIcons]: React.ReactElement;
};
