import "./index.css";

export default function Banner() {
  return (
    <>
      <div className="header-box">
        <div className="header-content">
          <div className="top-banner">
            <p className="congratulations">Congratulations!</p>
            <p className="banner-text">
              You just received a
              <span className="bolded-text">&nbsp;job recommendation</span>
            </p>
            <button className="banner-button">check it out now</button>
          </div>
        </div>
      </div>
    </>
  );
}
