import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Home from './home';
import Widget from '../widget';
import Banner from '../banner';

function Root() {
  const location = useLocation();
  return (
    <>
      <Header />
      {location?.pathname === '/' && (
        <>
          <Banner />
        </>
      )}
      <div className="mx-auto flex flex-row py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grow">
          {location?.pathname === '/' && <Home />}
          <Outlet />
        </div>
        <div className="basis-1/5">
          <Widget
            widgetId={283761}
            pubId={84088}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Root;
