import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PlantBox from "./PlantBox";
import FeaturesSection from "./featuresSection";
import Rigth_Image_component from "./rigth_Image_component";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="header">
        <nav className="navigationBar">
          <div className="logo-section">
            <h1 className="title">POPPY</h1>
          </div>
          <div className="menu_icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`midile-nav ${isMenuOpen ? "show" : ""}`}>
            <li className="shop-hover">
              Shop <FontAwesomeIcon icon={faChevronDown} />
              <div className="hover_imgs">
                <div className="hover-img-container">
                  <img src="https://poppy-theme.myshopify.com/cdn/shop/collections/live-plants-collection.jpg?v=1654851104&width=350" />
                  <img src="https://poppy-theme.myshopify.com/cdn/shop/collections/faux-plants-collection.jpg?v=1654851031&width=350" />
                </div>
              </div>
            </li>
            <li className="care_tool">
              Care Tool <FontAwesomeIcon icon={faChevronDown} />
              <div className="hover_imgs">
                <div className="hover-img-container_care_tool">
                  <img src="https://poppy-theme.myshopify.com/cdn/shop/collections/tools-collection.jpg?v=1654851048&width=350" />
                  <img src="https://poppy-theme.myshopify.com/cdn/shop/collections/planters-collection.jpg?v=1654850997&width=350" />
                  <img src="https://poppy-theme.myshopify.com/cdn/shop/collections/merch-collection.jpg?v=1654850964&width=350" />
                </div>
              </div>
            </li>
            <li>Gift</li>
            <li>Journal</li>
          </ul>
          <ul className={`right-nav ${isMenuOpen ? "show" : ""}`}>
            <li>Search</li>
            <li>Login</li>
            <li>Cart()</li>
          </ul>
        </nav>
        <div className="content">
          <div className="left-Content">
            <h1 className="first_Title">Green is where the heart is</h1>
            <p className="paragraph">
              Get unique plants, containers, home decor, and gardening services
              to create your little piece of heaven.
            </p>
            <button className="btn_shop_now">Shop Now</button>
          </div>
          <div className="rigth-Content">
            <img
              className="hidden-image"
              src="https://poppy-theme.myshopify.com/cdn/shop/files/Mask_Group_11_1.jpg?v=1663589970&width=700"
              alt="Poppy Theme"
            />
          </div>
        </div>
      </header>

      <middle className="middle_Section">
        <div className="m-left">
          <h1 className="title-Second">
            Fall favourites <i>sale</i>
          </h1>
        </div>
        <div className="m-right">
          <p className="midile-paragraph">
            Highlight Sales campaigns, discounts & promotions
          </p>
          <button className="m-btn">Shop Now</button>
        </div>
      </middle>
      <section className="image-Component">
        <div className="main-container">
          <h1 className="img-title">
            Flex your <i>green</i> thumb
          </h1>
          <div className="img-container">
            <PlantBox
              imgUrl="https://poppy-theme.myshopify.com/cdn/shop/files/collection-1.jpg?v=1655376565&width=650"
              name="Live Plants"
            />
            <PlantBox
              imgUrl="https://poppy-theme.myshopify.com/cdn/shop/files/collection-2.jpg?v=1655376666&width=330"
              name="Planters"
            />
            <PlantBox
              imgUrl="https://poppy-theme.myshopify.com/cdn/shop/files/collection-3.jpg?v=1655376898&width=330"
              name="Riya"
            />
          </div>
        </div>
      </section>
      <section className="second-image-component">
        <div className="Second-main-container">
          <h1>product features page</h1>
          <div className="img-container mt">
            <FeaturesSection
              imgUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/the-autumn-bouquet-1.png?v=1654691736&width=750"
              }
              name={"Shopify Product"}
              price={"$100"}
              overlayUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/TheAutumnBouquet_1.jpg?v=1665565699&width=490"
              }
            />

            <FeaturesSection
              imgUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/poppy-scissors-green-1.jpg?v=1665565392&width=750"
              }
              name={"Shopify Product"}
              price={"Price:$100"}
              overlayUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/PoppyScissors.jpg?v=1665565392&width=490"
              }
            />

            <FeaturesSection
              imgUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/poppy-fridge-magnet-green.jpg?v=1654709251&width=750"
              }
              name={"Shopify Product"}
              price={" Price:$100"}
              overlayUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/PoppyFridgeMagnet.jpg?v=1665565527&width=490"
              }
            />

            <FeaturesSection
              imgUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/minimal-plant-stand.png?v=1654833686&width=750"
              }
              name={"Shopify Product"}
              price={" Price: $100"}
              overlayUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/MinimalPlantStand.jpg?v=1665565827&width=490"
              }
            />

            <FeaturesSection
              imgUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/codra-pot-1.jpg?v=1654707447&width=750"
              }
              name={"Shopify Product"}
              price={" Price: $100"}
              overlayUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/LinedPot-white_olive_brown.jpg?v=1665566668&width=490"
              }
            />
            <FeaturesSection
              imgUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/agave-plant-1_52849779-5a55-43b3-812f-2798e5bd5e07.jpg?v=1654754863&width=750"
              }
              name={"Shopify Product"}
              price={"Price: $100"}
              overlayUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/Agaveplant-1.jpg?v=1665566738&width=490"
              }
            />

            <FeaturesSection
              imgUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/dried-yellow-pom-poms-1.png?v=1654691803&width=750"
              }
              name={"Shopify Product"}
              price={" Price: $100"}
              overlayUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/Driedyellowflowers-MilkyPinkDriedFlower.jpg?v=1665566009&width=490"
              }
            />
            <FeaturesSection
              imgUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/dried-bunny-tail-grass-1.png?v=1654691441&width=750"
              }
              name={"Shopify Product"}
              price={"$100"}
              overlayUrl={
                "https://poppy-theme.myshopify.com/cdn/shop/products/DriedBunnyTailgrass.png?v=1666250653&width=490"
              }
            />
          </div>
          <button className="discover-more-btn">DISCOVER MORE</button>
        </div>
      </section>
      <section className="third_section">
        <div className="third_containt">
          <div className="Left_container">
            <img src="https://poppy-theme.myshopify.com/cdn/shop/files/Mask_Group_2_2.jpg?v=1655378489&width=700" />
          </div>
          <div className="Rigth_container">
            <h1 className="Pink-title">
              <i>Same day</i> delivery collection
            </h1>
            <p className="pink-Para">
              This curated collection of plants will satisfy your time-sensitive
              gardening needs. Delivered today if ordered before 2 PM, across
              the town or country
            </p>
            <button className="view-all-plants">View All Plants</button>
          </div>
        </div>
      </section>
      <section className="fourth-section">
        <div className="fourth_title">
          <h1 className="title-f">
            Bloom together with our <i>best sellers</i>
          </h1>
        </div>
        <div className="fourth_Container">
          <div className="left_fourth_Section">
            <img src="https://poppy-theme.myshopify.com/cdn/shop/files/Frame_1.png?v=1656337600&width=600" />

            <div className="popup">
              <div className="pop-Title">A Gift You Can Give Anytime</div>
              <p className="para-popup">
                Looking for the perfect last-minute gift? Share the joy of green
                with a gift card sent directly to your loved one’s email.
              </p>
              <button className="btn-popup">SHOP GIFT CARD</button>
            </div>
          </div>

          <div className="right_fourth_Section">
            <div className="adding-img">
              <Rigth_Image_component
                imgUrl={
                  "https://poppy-theme.myshopify.com/cdn/shop/products/nature-fresh-tote-bag-1.jpg?v=1654709082&width=750"
                }
                overlayUrl={
                  "https://poppy-theme.myshopify.com/cdn/shop/products/NatureFreshToteBag.jpg?v=1665651772&width=490"
                }
              />

              <Rigth_Image_component
                imgUrl={
                  "https://poppy-theme.myshopify.com/cdn/shop/products/dried-yellow-pom-poms-1.png?v=1654691803&width=750"
                }
                overlayUrl={
                  "https://poppy-theme.myshopify.com/cdn/shop/products/Driedyellowflowers-MilkyPinkDriedFlower.jpg?v=1665566009&width=490"
                }
              />

              <Rigth_Image_component
                imgUrl={
                  "https://poppy-theme.myshopify.com/cdn/shop/products/milky-pink-dried-flower-1.png?v=1654692287&width=750"
                }
                overlayUrl={
                  "https://poppy-theme.myshopify.com/cdn/shop/products/Singlepinkflower.png?v=1665651621&width=490"
                }
              />

              <Rigth_Image_component
                imgUrl={
                  "https://poppy-theme.myshopify.com/cdn/shop/products/b_w-simply-patterned-pots-2.jpg?v=1655457836&width=750"
                }
                overlayUrl={
                  "https://poppy-theme.myshopify.com/cdn/shop/products/B_WSimplyPatternedPots_packof4.jpg?v=1665645483&width=490"
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="fifth_section">
        <div className="title-section">
          <div className="fifth-title">
            <h1>Flourish your area with expert help</h1>
          </div>{" "}
        </div>
        <div className="fidth-container">
          <div className="left-fifth-img-cont">
            <img src="https://poppy-theme.myshopify.com/cdn/shop/files/Mask_Group_3.jpg?v=1655393278&width=720" />
          </div>
          <div className="rigth-fifth-img-container">
            <img src="https://poppy-theme.myshopify.com/cdn/shop/files/Mask_Group_4.jpg?v=1655393294&width=720" />
          </div>
        </div>
      </section> */}
      <footer>
        <section className="footer-section">
          <div className="footer-container">
            <div className="footer-conten">
              <div className="footer-ttile">
                <h1>
                  <i>Featured </i>in
                </h1>
              </div>
              <div className="footer-img-container">
                <div className="Footer-img">
                  <img
                    className="img-f"
                    src="https://poppy-theme.myshopify.com/cdn/shop/files/Miamenista_1.png?v=1655888184"
                  />
                </div>
                <div className="Footer-img">
                  <img
                    className="img-f"
                    src="https://poppy-theme.myshopify.com/cdn/shop/files/M_M_1.png?v=1655888201"
                  />
                </div>
                <div className="Footer-img">
                  <img
                    className="img-f"
                    src="https://poppy-theme.myshopify.com/cdn/shop/files/plant_therapg_fbcc334d-e89a-4ebe-b93c-86f3051378b9.png?v=1655888214"
                  />
                </div>
                <div className="Footer-img">
                  <img
                    className="img-f"
                    src="https://poppy-theme.myshopify.com/cdn/shop/files/happy_plantdigest_1.png?v=1655888231"
                  />
                </div>
                <div className="Footer-img">
                  <img
                    className="img-f"
                    src="https://poppy-theme.myshopify.com/cdn/shop/files/Greenopsital_c522d867-bd8b-4162-8f63-cd2594d723a6.png?v=1655888269"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/* <div className="last_section">
        <div className="last_Container">
          <div className="last_warper">
            <span className="first_span">
              <h1 className="heds"> Catalog</h1>
              <p className="ptt">
                <a href="#">Live Plants</a>
                <a href="#">Faux Plants</a>
                <a href="#">Tools</a>
                <a href="#">Planters</a>
                <a href="#">Merch</a>
              </p>
            </span>
            <span className="first_span">
              <h1 className="heds">About</h1>
              <p className="ptt">
                <a href="#">Our Story</a>
                <a href="#">Journal</a>
              </p>
            </span>
            <span className="thrid_span">
              <h1 className="heds">Support</h1>
              <p className="ptt">
                <a href="#">Contact</a>
                <a href="#">FAQs</a>
                <a href="#">Shipping Information</a>
                <a href="#">Returns & Exchanges</a>
                <a href="#">Gifting</a>
              </p>
            </span>
            <span className="fourth_span">
              <h1 className="heds">Newsletter</h1>
              <h5>Join our VIP list for inspiration, new arrivals & more</h5>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input-box"
              />
              <div className="fourth_Footer">
                <button className="fourth_btn">SIGN UP</button>
                <h6>
                  California residents, please see Financial Incentive Terms.
                </h6>
              </div>
            </span>
          </div>
        </div>
      </div> */}

      <div class="footer1">
    <div class="footer-container1">
        <div class="footer-column">
            <h3>Catalog</h3>
            <ul>
                <li><a href="#">Live Plants</a></li>
                <li><a href="#">Faux Plants</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Planters</a></li>
                <li><a href="#">Merch</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>About</h3>
            <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Journal</a></li>
               
            </ul>
        </div>
        <div class="footer-column">
            <h3>Support</h3>
            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping Information</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Gifting</a></li>
            </ul>
        </div>
        
        <div class="newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to get the latest updates.</p>
            <input type="email" placeholder="Enter your email"/>
            <button>Subscribe</button>
        </div>
    </div>
</div>

    </>
  );
};

export default Header;
