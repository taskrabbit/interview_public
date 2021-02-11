import React from "react";
import Link from "./Link";

const Profile = ({ name, logout }) => {
  return (
    <div>
      Welcome, {name}
      <hr />
      <Link onClick={logout}>Log out</Link>
      <br />
    </div>
  );
};

export default Profile;
