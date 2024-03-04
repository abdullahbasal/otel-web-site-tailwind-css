import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import OtelRooms from "../../components/otel-rooms/OtelRooms";
import OtelInfo from "../../components/otel-info/OtelInfo";
import OtelLocation from "../../components/otel-location/OtelLocation";
import OtelImages from "../../components/otel-images/OtelImages";

const OtelDetail = () => {
  const location = useLocation();
  const state = location.state;
  const [activeTab, setActiveTab] = useState("rooms");

  const handleChangeTab = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="gap-4 mt-10 mb-10 max-w-screen-xl  mx-auto pl-10 pr-10">
      <h1 className="text-3xl font-bold text-center">{state.name}</h1>
      <img
        src={state.imgUrl}
        alt="otel-image"
        className="max-h-[400px] w-full rounded-[30px] mb-3"
      />
      <Tabs value={activeTab} onChange={handleChangeTab}>
        <TabsHeader>
          <Tab value="rooms">Odalar</Tab>
          <Tab value="gallery">Galeri</Tab>
          <Tab value="otelInfo">Hakkında</Tab>
          <Tab value="locations">Konum</Tab>
          <Tab value="comments">Yorumlar</Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="rooms">
            <OtelRooms />
          </TabPanel>
          <TabPanel value="gallery">
            <OtelImages />
          </TabPanel>
          <TabPanel value="otelInfo">
            <OtelInfo />
          </TabPanel>
          <TabPanel value="locations">
            <OtelLocation />
          </TabPanel>
          <TabPanel value="comments">
            <Comments />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default OtelDetail;
