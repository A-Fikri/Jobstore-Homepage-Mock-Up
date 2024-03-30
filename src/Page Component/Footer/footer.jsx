import "./index.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-redirects">
            <div className="">
              <img
                src="https://assets.jobstore.my/images/branding/jobstore_logo_blue.png"
                className="footer-logo"
              />
              <br />
              <br />
              <select className="dropdown">
                <option value="">Jobstore Malaysia</option>
                <option value="">Jobstore Singapore</option>
                <option value="">Jobstore Hong Kong</option>
                <option value="">Jobstore Philipines</option>
                <option value="">Jobstore Indonesia</option>
                <option value="">Jobstore Australia</option>
                <option value="">Jobstore New Zealand</option>
              </select>
            </div>
            <div className="">
              <p className="jobseekers">JOBSEEKERS</p>
              <br />
              <br />
              <li>Create Account</li>
              <li>Sign In</li>
              <li>Search Jobs</li>
              <li>Search Employers</li>
              <li>Featured Companies</li>
              <li>Government Jobs</li>
              <li>Working in Singapore</li>
              <li>My Career Fair</li>
              <li>Industry News</li>
            </div>
            <div className="">
              <p className="corporate">CORPORATE</p>
              <br />
              <br />
              <li>Create Account</li>
              <li>Product & Services</li>
              <li>Pricing & Plan</li>
              <li>Advertise Jobs</li>
              <li>Industry News</li>
              <li>Customer Support</li>
              <li>Contact Sales</li>
            </div>
            <div className="">
              <p className="about">ABOUT</p>
              <br />
              <br />
              <li>About Us</li>
              <li>Mobile App</li>
              <li>FAQs</li>
              <li>Contact Support</li>
              <li>Careers @ Jobstore</li>
              <li>Blog</li>
              <li>Fulfillment Policy</li>
            </div>
            <div className="">
              <p className="resources">RESOURCES</p>
              <br />
              <br />
              <li>Career Guide</li>
              <li>Job Templates</li>
              <li>Employer Resources</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Partnership Inquiries</li>
            </div>
          </div>
          <div className="app-redirects">
            <p className="trademark">© 2024 Jobstore. All rights reserved.</p>
            <img
              src="https://assets.jobstore.my/images/icon/icon_social_facebook_round.png"
              className="image-redirects"
            />
            <img
              src="https://assets.jobstore.my/images/icon/icon_social_linkedin_round.png"
              className="image-redirects"
            />
            <img
              src="https://assets.jobstore.my/images/icon/icon_social_instagram_round.png"
              className="image-redirects"
            />
            <img
              src="https://assets.jobstore.my/images/icon/icon_social_pinterest_round.png"
              className="image-redirects"
            />
            <img
              src="https://assets.jobstore.my/images/icon/icon_social_tiktok_round.png"
              className="image-redirects"
            />
            <img
              src="https://assets.jobstore.my/images/icon/icon_social_youtube_round.png"
              className="image-redirects"
            />
            <img
              src="https://assets.jobstore.my/images/icon/icon_social_twitter_round.png"
              className="image-redirects"
            />
            <img
              src="https://assets.jobstore.my/images/icon/icon_social_whatsapp_round.png"
              className="image-redirects"
            />
            <img
              src="https://assets.jobstore.my/images/icon/icon_app_applestore_white.png"
              className="apple"
            />
            <img
              src="https://assets.jobstore.my/images/icon/icon_app_googleplaystore_white.png"
              className="google"
            />
          </div>
        </div>
      </div>
    </>
  );
}
