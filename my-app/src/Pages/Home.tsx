import Background from '../Assets/foodBackground.png';
import Map from '../Components/Map';
import { useMediaQuery } from 'react-responsive';
import MobileHome from '../Components/MobileHome';
function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });

    return (
      <>
      {isMobile ? (
      <>
        <MobileHome />
      </>
      ) : (
        <>
              <div className="App Home-background">
              <div className='landing-page-slogan'>
                <div className='wrapper-ting'>
      
                <span>
                <h1>
                Find what's good in your hood.
              </h1>
                </span>
              <span>
              <h3>
                Welcome to our community led clean food directory.
              </h3>
              </span>
      
              <h5>
                <span>Whether you're here to share your spots... </span>
              </h5>
              <h5>
              <span>or to find some new ones, we've got you covered.</span>
              </h5>
              </div>
      
              </div>
      
      
            </div>
            <div id='map'>
            <Map/>
            </div>
            </>
      )}

      </>
    );
  }
  export default Home;