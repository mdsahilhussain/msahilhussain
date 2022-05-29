import React from "react";

import {
  Contact,
  Experience,
  Header,
  Highlight,
  Project,
  Testimonial,
} from "../Content";

export default function Home() {
  return (
    <div>
      <Header />
      <Highlight />
      <Experience/>
      <Project />
      <Testimonial/>
      <Contact />
    </div>
  );
}
