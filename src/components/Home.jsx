import { useState } from 'react';
import AddPlace from './AddPlace';
import homeLogo from '../assets/logos/1gcc.png';

export const Home = () => {
    const [selectedItem, setSelectedItem] = useState("Alla")
    const handleChange = (e) => {
        setSelectedItem(e.target.value)
    }

     return (
      <div className="container text-m">
        <div className="homelogo"><img src={homeLogo} alt="logo home" /></div>
        <div className="home">
        <h2>Välkommen till GCC! Här kan du hitta nya platser för en hållbar livsstil genom olika kategorier. Spara dina favoriter genom att lägga till dem i din lista över favoritställen nedan.</h2>
        <p className="hometitle">Du har valt kategori: {selectedItem}</p>

            <form className="form">
            <label className="label" htmlFor="Choose category"><p className="label">Välj kategori</p>
            <select name="Alla" value={selectedItem} onChange={handleChange}>
                <option value="Alla">Alla</option>
                <option value="Second hand">Second hand</option>
                <option value="Laga och återvinn">Laga och återvinn</option>
            </select>
            </label>
            </form>

        </div>

        {selectedItem == "Alla" &&
             <iframe title="map" src="https://www.google.com/maps/d/embed?mid=13aeGBbmAz0kPEZWHuOo5RE_E6FzRqfc&ehbc=2E312F&callback=initMap" width="640" height="480"></iframe>
        }

        {selectedItem == "Second hand" && 
                 <iframe title="map second hand" src="https://www.google.com/maps/d/u/0/embed?mid=1_LzbcuoibUdYSiftiSBQY56JcsNYsPw&ehbc=2E312F" width="640" height="480"></iframe>
        }

        {selectedItem == "Laga och återvinn" &&
                 <iframe title="map repair" src="https://www.google.com/maps/d/u/0/embed?mid=1yvHSKNZr7dHkaVeCuBpx1Er0RHobuds&ehbc=2E312F" width="640" height="480"></iframe>        
        }

        <div className="place">
            <AddPlace />
        </div>
        </div>
    );
  };