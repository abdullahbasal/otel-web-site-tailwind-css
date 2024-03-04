import React from "react";
import TopSideContent from "../../components/top-side-content/TopSideContent";
import BottomSideContent from "../../components/bottom-side-content/BottomSideContent";

const Home = () => {
  return (
    <div className="max-w-screen-xl  mx-auto">
      <TopSideContent />
      <BottomSideContent />
    </div>
  );
};

export default Home;
