import React from "react";
import { Box, Typography } from "@mui/material";

interface ProjectDetailsProps {
  title: string;
  description: string;
  image?: string;
  imageLink?: string; 
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  image,
  imageLink,
}) => {
  return (
    <Box
      sx={{
        mt: 3,
        padding: 3,
        paddingLeft: 20,
        paddingRight: 20,
        display: "flex",
        justifyContent: "space-between",
        minHeight: "400px",
      }}
    >
      <Box sx={{ maxWidth: "400px" }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </Box>
      {image ? (
        <a href={imageLink} target="_blank" rel="noopener noreferrer">
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              mt: 2,
              width: "auto",
              height: "100%",
              maxHeight: "300px",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </a>
      ) : null}
    </Box>
  );
};

export default ProjectDetails;
