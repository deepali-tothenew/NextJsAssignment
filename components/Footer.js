const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="m-10 pt-10 text-sm border-t border-gray-300">

        <p>&copy; {currentYear} Ink & Insight. All Rights Reserved.</p>
      </footer>
    );
  };
  
  export default Footer;