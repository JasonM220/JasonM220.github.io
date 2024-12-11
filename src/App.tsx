import backgroundImage from "./assets/background5.jpg";
import "devicon/devicon.min.css";

import "./App.css";
import { AppBar, Toolbar, Typography, Box, Button, Link } from "@mui/material";
import ProjectTabs from "./ProjectTabs/projectTabs";
import IconList from "./iconList/IconList";

function App() {
  const appBarHeight = "64px";

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Jason Maucieri</Typography>

            <a
              href="https://www.linkedin.com/in/jasonmaucieri"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", color: "inherit" }}
            >
              <i
                className={`devicon-linkedin-plain`}
                style={{
                  fontSize: "20px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              ></i>
            </a>

            <a
              href="https://github.com/JasonM220"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", color: "inherit" }}
            >
              <i
                className={`devicon-github-plain`}
                style={{
                  fontSize: "20px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              ></i>
            </a>
          </Box>

          <Box>
            <Button color="inherit" href="#about-me">
              About Me
            </Button>
            <Button color="inherit" href="#projects">
              Projects
            </Button>
            <Button color="inherit" href="#contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <Box textAlign={"right"} paddingTop={15} paddingRight={5}>
          <Typography textAlign={"right"} variant="h2">
            JASON MAUCIERI
          </Typography>
          <Typography>COMPUTER SCIENCE STUDENT</Typography>
        </Box>
      </Box>

      <Box
        id="about-me"
        sx={{
          paddingTop: 3,
          paddingBottom: 5,
          paddingRight: 10,
          paddingLeft: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ marginTop: appBarHeight, textAlign: "center" }}
          variant="h4"
        >
          About Me
        </Typography>
        <Box
          sx={{
            display: "flex",
            maxWidth: "700px",
            alignSelf: "center",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ mt: 2 }}>
            I am a student at John Abbott in my last year of Computer Science,
            passionate about all things programming and software development. I
            have proffesional experience in full stack web development using
            React.js and Next.js and look forward to learning new things in the
            field.
          </Typography>

          <IconList />
        </Box>
      </Box>

      <Box
        id="projects"
        sx={{
          paddingTop: 3,
          paddingBottom: 5,
          paddingRight: 10,
          paddingLeft: 10,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginTop: appBarHeight, textAlign: "center" }}
        >
          Projects
        </Typography>

        <ProjectTabs />
      </Box>

      <Box
        id="contact"
        sx={{
          padding: 5,
          borderRadius: 5,
          textAlign: "center",
          margin: "0 auto",
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 3,
            color: "#333",
          }}
        >
          Contact
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            fontSize: "18px",
            color: "#555",
          }}
        >
          Feel free to reach out to me via email or LinkedIn. I’d love to hear
          from you!
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {/* Email */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: 2,
              backgroundColor: "white",
              borderRadius: 5,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <i
              className="devicon-mail-plain"
              style={{ fontSize: "24px", color: "#555" }}
            ></i>
            <Link
              href="mailto:jasonmaucieri1@gmail.com"
              sx={{
                fontSize: "16px",
                color: "#555",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              jasonmaucieri1@gmail.com
            </Link>
          </Box>

          {/* LinkedIn */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: 2,
              backgroundColor: "white",
              borderRadius: 5,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
          >
            <i
              className="devicon-linkedin-plain"
              style={{ fontSize: "24px", color: "#0077b5" }}
            ></i>
            <Link
              href="https://www.linkedin.com/in/jasonmaucieri/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: "16px",
                color: "#0077b5",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Reach me on LinkedIn
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
