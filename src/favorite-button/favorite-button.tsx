
type FavoriteButtonProps = {
  className: string;
  isFavorite: boolean;
}

const OFFER_CLASS_NAME = 'offer';

function FavoriteButton({className, isFavorite}:FavoriteButtonProps):JSX.Element {
  const imgWidth = className === OFFER_CLASS_NAME ? 31 : 18;
  const imgHeight = className === OFFER_CLASS_NAME ? 33 : 19;

  return (
    <button className={`${className}__bookmark-button${isFavorite ? ` ${className}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${className}__bookmark-icon`} width={imgWidth} height={imgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavoriteButton;
