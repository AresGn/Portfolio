import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "./scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

// Icônes simples pour remplacer les icônes Lucide
const OverviewIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="-ms-0.5 me-1.5 opacity-80"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const WebsiteIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="-ms-0.5 me-1.5 opacity-80"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const MobileIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="-ms-0.5 me-1.5 opacity-80"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

const DesignIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="-ms-0.5 me-1.5 opacity-80"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

// CSS personnalisé pour adapter les couleurs au thème vert
const customStyles = {
  tabs: {
    marginBottom: "30px",
  },
  tabsList: {
    border: "1px solid rgba(12, 242, 160, 0.5)",
    borderRadius: "30px",
    padding: "5px",
    backgroundColor: "rgba(10, 30, 20, 0.3)"
  },
  tabButton: {
    fontSize: "16px",
    padding: "8px 16px",
    fontWeight: "600",
    margin: "0 5px",
    backgroundColor: "transparent",
    color: "white",
    borderRadius: "20px",
  },
  activeTab: {
    backgroundColor: "#0CF2A0 !important",
    color: "#111111 !important",
    boxShadow: "0 4px 8px rgba(12, 242, 160, 0.3) !important"
  }
};

function ProjectTabs({ children, allProjects, webProjects, mobileProjects, uiuxProjects }) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div style={customStyles.tabs}>
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <ScrollArea>
          <TabsList className="mb-3 gap-1" style={customStyles.tabsList}>
            <TabsTrigger
              value="all"
              className="rounded-full data-[state=active]:shadow-sm"
              style={{
                ...customStyles.tabButton,
                ...(activeTab === "all" ? customStyles.activeTab : {})
              }}
            >
              <OverviewIcon />
              Tous les projets
            </TabsTrigger>
            <TabsTrigger
              value="web"
              className="rounded-full data-[state=active]:shadow-sm"
              style={{
                ...customStyles.tabButton,
                ...(activeTab === "web" ? customStyles.activeTab : {})
              }}
            >
              <WebsiteIcon />
              Web
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="rounded-full data-[state=active]:shadow-sm"
              style={{
                ...customStyles.tabButton,
                ...(activeTab === "mobile" ? customStyles.activeTab : {})
              }}
            >
              <MobileIcon />
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value="uiux"
              className="rounded-full data-[state=active]:shadow-sm"
              style={{
                ...customStyles.tabButton,
                ...(activeTab === "uiux" ? customStyles.activeTab : {})
              }}
            >
              <DesignIcon />
              UI/UX
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <TabsContent value="all">
          {allProjects}
        </TabsContent>
        <TabsContent value="web">
          {webProjects}
        </TabsContent>
        <TabsContent value="mobile">
          {mobileProjects}
        </TabsContent>
        <TabsContent value="uiux">
          {uiuxProjects}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProjectTabs; 