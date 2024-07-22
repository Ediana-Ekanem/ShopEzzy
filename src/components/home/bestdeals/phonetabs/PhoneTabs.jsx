import React from "react";
import Card from "../../../card/Card";
import { GadgetData } from "./data";
import Container from "../../../container/Container";
import Item from "../../../card/Item";

const PhoneTabs = () => {
  return (
    <div className="my-10">
      <Container>
        <div>
          <div className="md:flex   bg-blue-400 rounded-t-md px-10 py-5">
            <h3 className="text-2xl text-white font-semibold">
              Mobile Gadgets
            </h3>
          </div>
          <div>
            <Item data={GadgetData} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PhoneTabs;
