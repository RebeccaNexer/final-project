import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: "1",
          text: "Reys Market Second-hand clothing",
        },
        { id: "2",
          text: "Stockholms Stadsmission Second Hand",
        },
        { id: "3",
        text: "Sneakerstvätten",
      },
    ]
  };
  
export const places = createSlice({
  name: 'places',
  initialState,
  reducers: {
        addItem: (store, action) => {
            store.items.push({
              id: Date.now(),
              text: action.payload,
              isChecked: false,
            });
          },
          removeItem: (store, action) => {
            const id = action.payload;
            const newArray = [...store.items]
            const condition = (element) => element.id === id;
            const foundIndex = newArray.findIndex(condition);
            newArray.splice(foundIndex, 1);
            store.items = newArray;
    },
    clearTodos: (store) => {
      store.items = []
    },
  }
});