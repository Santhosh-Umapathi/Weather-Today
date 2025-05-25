import {OPEN_WEATHER_URLS} from '../../../const';
import {formatDate} from '../../../helpers';
import {styles} from './styles';
import {TController} from './types';

export const useController = ({
  index,
  minTemperature,
  maxTemperature,
  date,
  icon,
}: TController) => {
  const label =
    index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : formatDate(date);

  const isTempEqual = minTemperature.toFixed(0) === maxTemperature.toFixed(0);

  const minMax = isTempEqual
    ? `${minTemperature.toFixed(0)} °C`
    : `${minTemperature.toFixed(0)} °C / ${maxTemperature.toFixed(0)} °C`;

  const isFirstItem = index === 0;

  const iconUrl = `${OPEN_WEATHER_URLS.icon}/${icon}@2x.png`;

  const style = isFirstItem ? styles.firstCard : undefined;

  return {
    label,
    isFirstItem,
    minMax,
    iconUrl,
    style,
  };
};
