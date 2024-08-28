import { useState } from 'react';

export type SortingOption = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

type SortingOptionsProps = {
  activeSorting: SortingOption;
  onSortingChange: (sorting: SortingOption) => void;
};

const sortingOptions: SortingOption[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

function SortingOptions({ activeSorting, onSortingChange }: SortingOptionsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: SortingOption) => {
    onSortingChange(option);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {sortingOptions.map((option) => (
            <li
              key={option}
              className={`places__option${option === activeSorting ? ' places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortingOptions;
