import { AppRoute } from '../../const';

export const getLayoutState = (pathname: AppRoute, favoritesCount: number) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;
  let shoudRenderFooter = false;

  if (pathname === AppRoute.Main) {
    rootClassName = 'page--gray page--main';
    linkClassName = 'header_logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    shouldRenderUser = false;
  } else if (pathname === AppRoute.Favorites) {
    shoudRenderFooter = true;
    if (!favoritesCount) {
      rootClassName = ' page--favorites-empty';
    }
  }
  return {rootClassName, linkClassName, shouldRenderUser, shoudRenderFooter};
};
