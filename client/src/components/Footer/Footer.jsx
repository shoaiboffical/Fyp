import React from "react";
import './footer.scss';
const Footer = () => {
    return ([
        <div className="footer">
            <div className="container">
                <div className="top">
                    
                    <div className="item">
                        <h2>About</h2>
                        <span>Careers</span>
                        <span>Press & News</span>
                        <span>Partnerships</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span> Intellectual Property Claims</span>
                        <span>Investor Relations</span>
                    </div>
                    <div className="item">
                        <h2>Support</h2>
                        <span>Help & Support</span>
                        <span>Trust & Safety</span>
                        <span>Selling on cryptagig </span>
                        <span> Buying on cryptagig </span>
                        <span>cryptagig  Guides</span>
                    </div>
                    <div className="item">
                        <h2>Community</h2>
                        <span>Customer Success Stories</span>
                        <span> Become a Seller</span>
                        <span>Community Standards</span>
                    </div>
                    
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <h2>cryptagig </h2>
                        <span>© cryptagig  International Ltd. 2023</span>
                    </div>
                    <div className="right">
                        {/* <div className="social">
                            <a href="https://twitter.com/cryptagig "> <img src="/images/twitter.png" alt=""  /></a>
                            <a href="https://www.facebook.com/cryptagig /"> <img src="/images/facebook.png" alt=""  /></a>
                            <a href="https://www.linkedin.com/company/cryptagig -com"><img src="/images/linkedin.png" alt=""  /></a>
                            <a href="https://www.pinterest.com/cryptagig /"> <img src="/images/pinterest.png" alt=""  /></a>
                            <a href="https://www.instagram.com/cryptagig /"> <img src="/images/instagram.png" alt=""  /></a> 
                        </div> */}
                        <div className="link">
                            <img src="/images/language.png" alt="" />
                            <span>English</span>
                        </div>
                        <div className="link">
                            <img src="/images/coin.png" alt="" />
                            <span>USD</span>
                        </div>
                        <img src="/images/accessibility.png" alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    ]);
}
export default Footer;
