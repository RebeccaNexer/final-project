import { useDispatch, useSelector } from 'react-redux';
import { places } from '../reducers/places';
export const Saved = () => {
    const saved = useSelector((store) => store.places.items);
    const dispatch = useDispatch();

    return (
    <>
    <div className="container saved">
      <h1 className="savedtitle">List with all your favorite sustainable GCC spots in Stockholm:</h1>
       {saved.map((item) => (
            <div className="divider" key={item.id}>
            <h2>• {item.text}</h2>
                  <button className="btn-red" onClick={() => dispatch(places.actions.removeItem(item.id))}>
                    Ta bort
                  </button>
            </div>
        ))}
    </div>
    </>
    );
};