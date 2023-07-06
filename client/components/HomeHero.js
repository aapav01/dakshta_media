import React from "react";
import { Button } from "./ui/button";

export default function HomeHero() {
  return (
    <div className="hero bg-gradient-radial from-blue-900 to-transparent">
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content py-20">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Recent Posts</h1>
          <p className="mb-5">
            Welcome to Dakshta Media. This is Socail Media App for Developers.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
