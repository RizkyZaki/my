import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex gap-2 md:gap-4 items-center justify-center py-5 ${className}`}
    >
      <div className="w-5 h-5 rounded-full bg-blue-400" />
      <div className="w-5 h-5 rounded-full bg-blue-500" />
      <div className="w-5 h-5 rounded-full bg-blue-600" />
      <div className="w-5 h-5 rounded-full bg-blue-700" />
      <div className="w-5 h-5 rounded-full bg-blue-800" />
      <div className="w-5 h-5 rounded-full bg-blue-900" />
    </div>
  );
};

export default Divider;
