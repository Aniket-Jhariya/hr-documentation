import React from "react";
import { logout } from "../../auth";

const styles = {
  logoutButton: {
    marginRight:"12px",
    padding: "8px 12px",
    backgroundColor: "#663169",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

const LogoutButton = () => {
  return (
    <button style={styles.logoutButton} onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
