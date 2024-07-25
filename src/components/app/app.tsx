import MainPage from '../../pages/main-page/main-page';

type AppScreanProps = {
  placesCount: number;
}

function App({placesCount}: AppScreanProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount} />
  );
}

export default App;
