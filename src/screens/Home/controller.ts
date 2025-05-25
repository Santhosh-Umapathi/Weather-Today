import {useLocation} from '../../hooks';
export const useController = () => {
  const {isRequestingPermissions, location} = useLocation();

  return {
    isRequestingPermissions,
    location,
  };
};
