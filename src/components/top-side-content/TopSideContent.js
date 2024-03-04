import React from "react";
import OpportunityCard from "../opportunity-card/OpportunityCard";
import Slider from "../slider/Slider";
import Axess from "../../assets/images/axess.jpg";
const TopSideContent = () => {
  return (
    <div className="flex flex-wrap  gap-10 items-center justify-center mt-10 mb-10 ">
      <div className="top-side-content">
        <Slider />
      </div>
      <img
        src={Axess}
        alt="Axess"
        className="h-full w-full object-cover cursor-pointer"
        width={"100%"}
      />
      <OpportunityCard
        title="Bayramın Tadını Çıkar!"
        img={require("../../assets/images/celebration-holiday.jpg")}
      />
      <OpportunityCard
        title="Balkan Turlarını Denediniz Mi?"
        img={require("../../assets/images/balkan-tour.jpg")}
      />
      <OpportunityCard
        title="Ön Ödemeli Oteller Kaçırma!"
        img={require("../../assets/images/otels.jpg")}
      />
      <OpportunityCard
        title="Kışın Kayak Eğlencesi!"
        img={require("../../assets/images/ski-otel.jpg")}
      />
      <OpportunityCard
        title="Yurt Dışında Kayak Başka!"
        img={require("../../assets/images/ski.jpg")}
      />
      <OpportunityCard
        title="Termal Zamanı!"
        img={require("../../assets/images/thermal-otels.jpg")}
      />
    </div>
  );
};

export default TopSideContent;
