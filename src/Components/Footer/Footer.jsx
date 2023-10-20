const Footer = () => {
  const footStyle = {
    background:"black",
    color: "white",
    textAlign:"center",
    padding:"20px",
  };

  return (
    <>
      <div>
        <p style={footStyle}>
          <small >
            All right reserved by 
            <a style={{color:"white", textDecoration:"none"}} href="https://www.facebook.com/bigg.bangg.906/"> Adib Ahbab @2023</a>
          </small>
        </p>
      </div>
    </>
  );
};
export default Footer;
