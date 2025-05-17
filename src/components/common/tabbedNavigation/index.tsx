import React from "react";
import "./tabbedNavigation.css";

interface TabbedNavigationPops {
  children: React.ReactNode;
}

export default function TabbedNavigation({ children }: TabbedNavigationPops) {
  return <div className="tabbed-navigation-container">{children}</div>;
}
