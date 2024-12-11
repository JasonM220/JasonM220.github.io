import React, { useState } from "react";
import { Tabs } from "@mui/material";
import ProjectDetails from "./ProjectDetails";
import { StyledContainer, StyledTab } from "./styled";
import gameImage from "./imgs/game.png";
import tranquility from "./imgs/tranquility.png";
import network from "./imgs/image.png";

interface Project {
  title: string;
  description: string;
  image?: string;
  imageLink?: string;
}

const ProjectTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Define the projects array with type
  const projects: Project[] = [
    {
      title: "2D Platformer Game",
      description:
        "A dynamic and engaging 2D platformer game built using Godot and GDScript. Players navigate through challenging levels filled with enemies and obstacles, utilizing unique attack and defense mechanics, such as deflecting bullets. The game includes a checkpoint system to save progress and a visually appealing pixel-art style.",
      image: gameImage,
      imageLink: "https://github.com/JasonM220/game-project",
    },
    {
      title: "Tranquility",
      description:
        "A mobile application designed to enhance your meditation experience by providing features such as" +
        "customizable timers, progress tracking, and detailed logs of your meditation sessions. Built using Kotlin and" +
        "Jetpack Compose, the app offers a modern, intuitive user interface tailored for seamless navigation." +
        "Firebase integration powers real-time data storage and retrieval, enabling users to access their meditation history" +
        "across devices. It also inclues an AI meditation assistant for any other help needed.",
      image: tranquility,
      imageLink: "https://github.com/JasonM220/AppDev2-Project",
    },
    {
      title: "Website Vulnerability Scanner",
      description:
        "Developed a Website Vulnerability Scanner using Python, Selenium, and Tkinter to identify potential security issues in web applications. The tool features a graphical user interface and performs the following checks:" +
        "insecure cookies detection, open directory listing, outdated software identification, open ports scanning.",
      image: network,
      imageLink: "https://github.com/JasonM220/vulnerability-scanner",
    },
  ];

  return (
    <StyledContainer>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="fullWidth"
        TabIndicatorProps={{
          sx: {
            bgcolor: "white",
            width: "50px",
          },
        }}
        sx={{
          backgroundColor: "gray",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      >
        <StyledTab label="Game" />
        <StyledTab label="Tranquility" />
        <StyledTab label="Vulnerability Scanner" />
      </Tabs>

      <ProjectDetails
        title={projects[selectedTab].title}
        description={projects[selectedTab].description}
        image={projects[selectedTab].image}
        imageLink={projects[selectedTab].imageLink}
      />
    </StyledContainer>
  );
};

export default ProjectTabs;
