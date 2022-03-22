import React from "react";
import PricingCard from "../card/PricingCard";
import "./index.css";

export default function index() {
  const Guardian = [
    "Edit up to 10 hours of podcast audio files",
    "Set your own CoreLoop Page",
  ];
  const Mage = ["Edit up to 1000 hours of podcast audio files", "Set your own CoreLoop Page", "24/7 support", "Advanced analytics"];
  const Phantom = [...Mage, "Advanced analytics", "Set sponsor deals"];

  return (
    <div className="index">
      <PricingCard title="Guardian" items={Guardian} type="free" />
      <PricingCard title="Mage" items={Mage} price="480" type="month" />
      <PricingCard title="Phantom" items={Phantom} price="600" type="month" />
    </div>
  );
}
