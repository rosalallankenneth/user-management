import React from "react";
import { useDispatch } from "react-redux";
import {
  selectViewUser,
  toggleViewModal
} from "../redux/actions/eventsActions";

const TableRow = props => {
  const { user } = props;
  const dispatch = useDispatch();

  const handleViewUserClick = () => {
    dispatch(selectViewUser(user.id));
    dispatch(toggleViewModal());
  };

  return (
    <tr>
      <td className="pl-3 pr-1 py-3 text-gray-300">
        {user.firstName} {user.lastName}
      </td>
      <td className="px-1 py-3 text-gray-300">{user.username}</td>
      <td className="px-1 py-3 text-gray-300 text-ellipsis sm:table-cell hidden">
        {user.email}
      </td>
      <td className="px-1 py-3 text-gray-300 md:table-cell hidden">
        {user.city}
      </td>
      <td className="flex justify-center items-center space-x-1 pl-1 pr-3 py-3">
        <button
          className="bg-orange-700 hover:bg-orange-500 p-2 rounded text-white"
          onClick={handleViewUserClick}
        >
          <svg
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <polyline points="15 3 21 3 21 9" />{" "}
            <polyline points="9 21 3 21 3 15" />{" "}
            <line x1="21" y1="3" x2="14" y2="10" />{" "}
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
