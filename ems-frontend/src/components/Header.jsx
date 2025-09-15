import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>EMS Management System</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#1E3A8A", // Dark blue
    color: "#F9FAFB",           // Light text
    padding: "20px 0",          // Height of header
    textAlign: "center",
    width: "100%",              // Full width
    position: "fixed",          // Fix at top
    top: 0,                     // Stick to top
    left: 0,
    zIndex: 1000,               // Stay above content
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  title: {
    margin: 0,
    fontSize: "2rem",
  },
};

export default Header;
