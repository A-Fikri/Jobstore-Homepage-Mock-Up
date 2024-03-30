import "./App.css";
import Header from "./Page Component/Header/header.jsx";
import Footer from "./Page Component/Footer/footer.jsx";
import Articles from "./Page Component/ArticlesSection/articles.jsx";
import Jobs from "./Page Component/JobSection/jobs.jsx";
import JobSlider from "./Page Component/JobSlider/jobslider.jsx";
import TrendingJobs from "./Page Component/TrendingJobsSection/trendingJobs.jsx";

function App() {
  return (
    <>
      <Header />
      <JobSlider />
      <div className="slider-trending">
        <TrendingJobs />
      </div>
      <Jobs />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
