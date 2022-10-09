import React from "react";
import { useSelector } from "react-redux";

import Searchbar from "../components/Searchbar";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import AddUserSection from "../components/AddUserSection";
import ModalAddUser from "../components/ModalAddUser";
import ModalViewUser from "../components/ModalViewUser";

const Dashboard = () => {
  const viewUserId = useSelector(state => state.events.viewUserId);

  return (
    <div className="py-10 px-3">
      <AddUserSection />
      <Searchbar />
      <table className="container mx-auto rounded-b-lg" style={gradientBg}>
        <TableHead />
        <TableBody />
      </table>
      <ModalAddUser />
      {viewUserId && <ModalViewUser />}
    </div>
  );
};

const gradientBg = {
  background:
    "rgb(41,41,50) linear-gradient(120deg, rgba(41,41,50,1) 0%, rgba(28,28,36,1) 50%, rgba(19,19,26,1) 100%)"
};

export default Dashboard;
