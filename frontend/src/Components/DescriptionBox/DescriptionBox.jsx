import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that faciliates the buying
          and selling of products or services over the internet. It serves as a
          virtial marketplace where businesses and individuals can showcase
          their products, interact with customers, and conduct transactions
          without the need for a pysical presence. E-commerce websites have
          gained immense popularity due to their convenience, accessibility, and
          the global reach they offer.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          iste ducimus ad minima, laudantium tenetur quo impedit sunt cupiditate
          cum.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
