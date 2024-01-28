import { useDispatch, useSelector } from 'react-redux';
import { places } from '../reducers/places';
export const Saved = () => {
    const saved = useSelector((store) => store.places.items);
    const dispatch = useDispatch();

    return (
    <div>
       {saved.map((item) => (
            <div className="divider" key={item.id}>
            <h2>• {item.text}</h2>
                <span className="checkmark" />
                  <button className="btn-red" onClick={() => dispatch(places.actions.removeItem(item.id))}>
                    Ta bort
                  </button>
            </div>
        ))}
    </div>
    );
};