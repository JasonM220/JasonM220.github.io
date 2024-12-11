import React from "react";
import { Tooltip } from "@mui/material"; // Import Tooltip from Material-UI

const IconList: React.FC = () => {
  // Define the projects array with type
  const icons: { name: string; className: string }[] = [
    { name: "React", className: "react" },
    { name: "JavaScript", className: "javascript" },
    { name: "TypeScript", className: "typescript" },
    { name: "HTML5", className: "html5" },
    { name: "CSS3", className: "css3" },
    { name: "Node.js", className: "nodejs" },
    { name: "Python", className: "python" },
    { name: "C#", className: "csharp" },
    { name: "Kotlin", className: "kotlin" },
    { name: "PostgreSQL", className: "postgresql" },
    { name: "SQL Server", className: "microsoftsqlserver" },
    { name: "Godot", className: "godot" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        justifyItems: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {icons.map((icon) => {
        return (
          <Tooltip key={icon.name} title={icon.name} arrow>
            <i
              className={`devicon-${icon.className}-plain colored`}
              style={{ fontSize: "60px", cursor: "pointer" }}
            ></i>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default IconList;
