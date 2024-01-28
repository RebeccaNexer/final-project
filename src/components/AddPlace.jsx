import { useState } from "react";
import { useDispatch } from "react-redux";
import { places } from '../reducers/places';
const AddPlace = () => {
    const [newPlace, setNewPlace] = useState("");
    const dispatch = useDispatch();

    const handleAddItem = () => {
        if (newPlace.trim() !== "") {
        dispatch(places.actions.addItem(newPlace));
        setNewPlace("");
        }
    };

    return (
        <div>
          <input
            type="text"
            value={newPlace}
            onChange={(e) => setNewPlace(e.target.value)}
            placeholder="Spara i din lista med favoritställen"
          />
          <button onClick={handleAddItem}>Lägg till</button>
        </div>
      );
    };
    
    export default AddPlace;