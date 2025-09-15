import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2025 EMS Management System. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: "#f1f1f1",
        color: "#333",
        padding: "10px",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
    },
};

export default Footer;
