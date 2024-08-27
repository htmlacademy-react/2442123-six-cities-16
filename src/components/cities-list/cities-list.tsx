import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { selectCity } from '../../store/selectors';
import { setCity } from '../../store/reducer';

interface CitiesListProps {
  cities: string[];
}

const CitiesList: React.FC<CitiesListProps> = ({ cities }) => {
  const dispatch = useDispatch();
  const activeCity = useSelector(selectCity);

  const handleCityChange = (cityName: string) => {
    dispatch(setCity(cityName));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((cityName) => (
          <li key={cityName} className="locations__item">
            <Link
              to={AppRoute.Main}
              className={`locations__item-link tabs__item${activeCity === cityName ? ' tabs__item--active' : ''}`}
              onClick={() => handleCityChange(cityName)}
            >
              <span>{cityName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CitiesList;
