import Banner from "../../Components/Banner Component/banner.jsx";
import Redirects from "../../Components/Redirects Component/redirects.jsx";
import Search_Bar from "../../Components/Search Bar Component/search_bar.jsx";
import Timer from "../../Components/Timer Component/timer.jsx";

export default function Header() {
  return (
    <>
      <Banner />
      <Redirects />
      <Search_Bar />
      <Timer />
    </>
  );
}
