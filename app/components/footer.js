const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <div className="footer text-center bg-gray-700"style={{ fontFamily: 'Verdana, sans-serif' }}>
        <p className="text-xl font-bold text-center text-white p-5"> Kevin Clothings  &copy; {currentYear}</p>
      </div>
    );
  };

  export default Footer;