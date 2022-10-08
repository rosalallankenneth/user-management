import React from "react";
import { useSelector } from "react-redux";

import TableRow from "./TableRow";

const TableBody = () => {
  const users = useSelector(state => state.users);

  return (
    <tbody>
      {users.data.map(user => (
        <TableRow key={user.id} user={user} />
      ))}
    </tbody>
  );
};

export default TableBody;
