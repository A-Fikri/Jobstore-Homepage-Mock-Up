import "./index.css";

export default function Search_Bar() {
  return (
    <>
      <div className="search-bar-column">
        <img
          src="https://assets.jobstore.my/images/branding/jobstore_logo_blue.png"
          className="jobstore-logo"
        ></img>
        <input
          className="search-bar"
          type="text"
          placeholder="BETTER JOB, BETTER ME"
        ></input>
        <p className="malaysia-text">│ Malaysia</p>
        <img
          src="https://th.bing.com/th/id/R.6feb51cd7bb5a4e8341a8d3cde9d048d?rik=iKXzaPHH3cDhHg&riu=http%3a%2f%2fimages.clipartpanda.com%2flocation-icon-vector-5142-location-mark-icon.png&ehk=qBcBqMpwL2lHI%2bMjFVg1lIF%2b43YWn4lv%2bz9TiIRcQyI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          className="location-icon"
        />
        <img
          src="https://th.bing.com/th/id/OIP.xFdlpkdiPMl4heXKKJWUZAHaHa?pid=ImgDet&w=474&h=474&rs=1"
          className="search-icon"
        />
        <button className="all-jobs-button">View All Jobs</button>
        <img
          src="https://assets.jobstore.my/mycareerfair/images/branding/mycareerfair_logo_heart_orange.png"
          className="career-fair-logo"
        ></img>
      </div>
    </>
  );
}
