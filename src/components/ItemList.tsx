// src/components/ItemList.tsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteItem } from "../redux/itemsSlice";
import { startEdit, cancelEdit } from "../redux/formSlice";
/* import { Item } from "../types"; */
const ItemList: React.FC = () => {
  const items = useSelector((state: RootState) => state.items);
  const currentItem = useSelector((state: RootState) => state.form.currentItem);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    if (currentItem?.id === id) {
      dispatch(cancelEdit());
    }
    dispatch(deleteItem(id));
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <b>
            {item.title} {item.price}
          </b>{" "}
          <button onClick={() => dispatch(startEdit(item))}>✎</button>
          <button onClick={() => handleDelete(item.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
