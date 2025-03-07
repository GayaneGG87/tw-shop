import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateItem } from "../redux/dataSlice";

const DataList: React.FC = () => {
  const items = useSelector((state: RootState) => state.data.items);
  const dispatch = useDispatch();

  const handleUpdate = (id: number) => {
    dispatch(updateItem({ id, name: "Updated Name", value: "New Value" }));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Data List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="border p-2 mb-2">
            {item.name} - {item.value}
            <button onClick={() => handleUpdate(item.id)} className="ml-4 bg-blue-500 text-white px-2 py-1 rounded">
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
