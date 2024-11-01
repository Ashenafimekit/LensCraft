import React from "react";
import { Tabs } from "antd";
import Gallery from "../components/Gallery";
import Wedding from "../components/Wedding";
import Portrait from "../components/Portrait";
import Couples from "../components/Couples";
import Fashion from "../components/Fashion";
import '../Custom/Custom.css'

const { TabPane } = Tabs;

const Tab = () => {
  return (
    <div className="tab-container">
      <h1 className="text-4xl text-white text-bold text-center mb-5">Our Best Shouts</h1>
      <Tabs defaultActiveKey="1" centered className="">
        <TabPane tab="ALL" key="1">
          <Gallery/>
        </TabPane>
        <TabPane tab="WEDDING" key="2">
          Content of WEDDING tab
        </TabPane>
        <TabPane tab="CUPPLES" key="3">
          Content of CUPPLES tab
        </TabPane>
        <TabPane tab="PORTRAITS" key="4">
          Content of PORTRAITS tab
        </TabPane>
        <TabPane tab="FASHION" key="5">
         <Fashion/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Tab;
