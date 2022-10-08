import React from "react";

const TableHead = () => {
  return (
    <thead className="text-white bg-theme-secondary">
      <tr>
        <th className="py-1">
          <small>Name</small>
        </th>
        <th className="py-1">
          <small>Username</small>
        </th>
        <th className="py-1 sm:table-cell hidden">
          <small>Email</small>
        </th>
        <th className="py-1 md:table-cell hidden">
          <small>City Address</small>
        </th>
        <th>
          <small>Actions</small>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
