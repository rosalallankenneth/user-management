import React from "react";
import { useSelector } from "react-redux";

import TableRow from "./TableRow";
import TableSearchResults from "./TableSearchResults";

const TableBody = () => {
  const users = useSelector(state => state.users);
  const searchResults = useSelector(state => state.events.searchResults);

  return (
    <tbody>
      {searchResults !== null ? (
        searchResults.length > 0 ? (
          searchResults.map(user => (
            <TableSearchResults key={user.id} user={user} />
          ))
        ) : (
          <tr>
            <td
              colSpan={5}
              className="text-gray-300 text-white text-center p-3"
            >
              No results.
            </td>
          </tr>
        )
      ) : users.data.length > 0 ? (
        users.data.map(user => <TableRow key={user.id} user={user} />)
      ) : (
        <tr>
          <td colSpan={5} className="text-gray-300 text-white text-center p-3">
            Nothing to show so far.
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
