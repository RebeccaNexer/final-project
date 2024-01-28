import { useState } from 'react';
import AddPlace from './AddPlace';

export const Home = () => {
    const [selectedItem, setSelectedItem] = useState("Alla")
    const handleChange = (e) => {
        setSelectedItem(e.target.value)
    }

     return (
      <div className="container">
        <h1>Green Closet Collective</h1>
        <div>
            <form>
            <label htmlFor="Choose category">Välj kategori
            <select name="Alla" value={selectedItem} onChange={handleChange}>
                <option value="Alla">Alla</option>
                <option value="Second hand">Second hand</option>
                <option value="Laga och återvinn">Laga och återvinn</option>
            </select>
            </label>
            </form>

        <p>Du har valt {selectedItem}</p>
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

        <div>
            <AddPlace />
        </div>
        </div>
    );
  };