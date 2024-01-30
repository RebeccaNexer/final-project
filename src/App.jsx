import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Home } from './components/Home';
import { Notfound } from './components/Notfound';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Inspiration } from './components/Inspiration';
import { Saved } from './components/Saved';
import { places } from './reducers/places';

const routes = (
  <Routes>
    <Route path="*" element={<Notfound />}></Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/inspiration" element={<Inspiration />}></Route>
    <Route path="/saved" element={<Saved />}></Route>

  </Routes>
)

const reducer = combineReducers({
  places: places.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
       <BrowserRouter>
       <Navbar />
        {routes}
        <Footer />
      </BrowserRouter>
   </Provider>
  );
}