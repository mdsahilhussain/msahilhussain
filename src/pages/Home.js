import React from "react";

import {
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
    </div>
  );
}
