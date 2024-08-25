import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getLayoutState } from './utils';
import { getAuthorizationStatus } from '../../mocks/auth-status';

type LayoutProps = {
  favoritesCount: number;
}

export default function Layout({favoritesCount}: LayoutProps) {
  const {pathname} = useLocation();
  const {rootClassName, linkClassName, shouldRenderUser, shoudRenderFooter} = getLayoutState(pathname as AppRoute, favoritesCount);
  const authorizationstatus = getAuthorizationStatus();


  return (
    <div className={`page${rootClassName}`}>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              {
                linkClassName ? (
                  <a className='header__logo-link' href='main.html'>
                    <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41'/>
                  </a>
                ) : (
                  <Link to={AppRoute.Main} className={`header_logo-link${linkClassName}`}>
                    <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41'/>
                  </Link>
                )
              }
            </div>
            {
              shouldRenderUser ? (
                <nav className='header__nav'>
                  <ul className='header__nav-list'>
                    <li className='header__nav-item user'>
                      <Link className='header__nav-link header__nav-link--profile'
                        to={AppRoute.Favorites}
                      >

                        <div className='header__avatar-wrapper user__avatar-wrapper'>
                        </div>
                        {authorizationstatus === AuthorizationStatus.Auth ? (
                          <>
                            <span className='header__user-name user__name'>Oliver.conner@gmail.com</span>
                            <span className='header__favorite-count'>{favoritesCount}</span>
                          </>
                        ) : <span className='header_login'>Sign in</span>}
                      </Link>
                    </li>
                    {authorizationstatus === AuthorizationStatus.Auth ? (
                      <li className='header__nav-item'>
                        <a className='header__nav-link' href='#'>
                          <span className='header__signout'>Sign out</span>
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </nav>
              ) : null
            }
          </div>
        </div>
      </header>
      <Outlet />
      {shoudRenderFooter ? (
        <footer className='footer container'>
          <a className='footer__logo-link' href='main.html'>
            <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33'/>
          </a>
        </footer>
      ) : null}
    </div>
  );
}
