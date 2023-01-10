import React, { Suspense, lazy } from "react";

import {
  Experience,
  Header,
  Highlight,
  Testimonial,
  Platfrom,
} from "../Content";

const Project = lazy(()=> import('../Content/Project/Project'));

export default function Home() {
  return (
    <div>
      <Header />
      <Highlight />
      <Platfrom />
      <Experience />
      <Suspense fallback={<p>loader....</p>}>
      <Project />
      </Suspense>
      <Testimonial />
    </div>
  );
}
