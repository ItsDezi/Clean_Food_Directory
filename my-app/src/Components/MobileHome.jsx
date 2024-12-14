import Background from '../Assets/foodBackground.png';
import Map from '../Components/Map';
import MapMobile from './MapMobile';

function MobileHome() {

    return (

        <>
            <div className="App Home-background">
            <span>
                <h1 className='landing-page-slogan-mobile'>
                Find what's good in your hood.
              </h1>
              <span>
              <h3 className='landing-page-slogan-mobile-h3'>
                Welcome to our community led clean food directory.
              </h3>
              </span>
                </span>
                <div id='map'>
                    <MapMobile />
                </div>
            </div>
        </>

    );
}
export default MobileHome;