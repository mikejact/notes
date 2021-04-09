import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Mike Acton ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
