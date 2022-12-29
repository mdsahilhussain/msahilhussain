import React from "react";

import {
  Experience,
  Header,
  Highlight,
  Project,
  Testimonial,
  Platfrom
} from "../Content";

export default function Home() {
  return (
    <div>
      <Header />
      <Highlight />
      <Platfrom/>
      <Experience/>
      <Project />
      <Testimonial/>
    </div>
  );
}
