import "./Cover.css";
const Cover = () => {
  return (
    <>
      <div className="cover">
        <div className="cover-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div>
            <button>Shop Now</button>
            <button>Catagory</button>
          </div>
          <div>
            <p>
              <small>Also Available On</small>
            </p>
            <img src="./images/flipkart.png" alt="flipkart" />
            <img src="./images/amazon.png" alt="Amazon" />
          </div>
        </div>
        <div className="cover-img">
          <img src="./images/cover-shoes.png" alt="" />
        </div>
      </div>
    </>
  );
};
export default Cover;
