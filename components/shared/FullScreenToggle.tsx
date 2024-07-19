"use client";

import React, { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Fullscreen, Minimize } from "lucide-react";

const FullScreenToggle = () => {
  /* View in fullscreen */
  const [isFullScreen, setIsFullScreen] = useState(false);

  const closeFullscreen = () => {
    let doc = document;
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const openFullscreen = () => {
    let elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      setIsFullScreen(true);
    }
  };

  return (
    <Toggle className="rounded-full">
      {!isFullScreen ? (
        <Fullscreen
          onClick={openFullscreen}
          className="hover:scale-110 transition ease-in-out"
        />
      ) : (
        <Minimize
          onClick={closeFullscreen}
          className="hover:scale-110 transition ease-in-out"
        />
      )}
    </Toggle>
  );
};

export default FullScreenToggle;
