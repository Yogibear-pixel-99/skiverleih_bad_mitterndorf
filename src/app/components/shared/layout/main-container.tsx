import React from "react";

interface MainContainerProps {
    children: React.ReactNode;
}

function MainContainer({children}:MainContainerProps) {
  return <section className="px-4 py-8">{children}</section>;
}

export {MainContainer};