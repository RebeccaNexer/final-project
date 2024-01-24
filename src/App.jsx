import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CurrentQuestion } from './components/CurrentQuestion';
import { Notfound } from './components/Notfound';
import { Navbar } from './components/Navbar';
import { Inspiration } from './components/Inspiration';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '100vw',
//   height: '100vh',
// };
// const center = {
//   lat: 7.2905715, // default latitude
//   lng: 80.6337262, // default longitude
// };



// // const position = {lat: 53.54992, lng: 10.00678};

const routes = (
  <Routes>
    <Route path="*" element={<Notfound />}></Route>
    <Route path="/" element={<CurrentQuestion />}></Route>
    <Route path="/inspiration" element={<Inspiration />}></Route>
  </Routes>
)

export const App = () => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: GOOGLE_MAPS_API,
  //   libraries,
  // });

  // if (loadError) {
  //   return <div>Error loading maps</div>;
  // }

  // if (!isLoaded) {
  //   return <div>Loading maps</div>;
  // }
  return (
    <>
       <BrowserRouter>
       <Navbar />
        {routes}
        {/* <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap> */}
      </BrowserRouter>
    </>
  );
}