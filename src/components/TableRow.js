import React from "react";

const TableRow = props => {
  const { user } = props;

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
        {user.address.city}
      </td>
      <td className="flex justify-center items-center space-x-1 pl-1 pr-3 py-3">
        <button className="bg-orange-700 hover:bg-orange-500 p-2 rounded text-white">
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
        <button className="bg-blue-700 hover:bg-blue-500 px-2 rounded text-white p-2">
          <svg
            className="h-4 w-4 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />{" "}
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        <button className="bg-red-700 hover:bg-red-500 p-2 rounded text-white">
          <svg
            className="h-4 w-4 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="4" y1="7" x2="20" y2="7" />{" "}
            <line x1="10" y1="11" x2="10" y2="17" />{" "}
            <line x1="14" y1="11" x2="14" y2="17" />{" "}
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />{" "}
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
