import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import PlusIcon from "../../assets/icon-plus.svg";
import {containerSize} from "../../system/constants.ts";

const textItems = [
  {
    title: "Partnership Enrollment",
    description: [
      {
        main: "Step 1 Registration: ",
        text: "Begin by registering your interest through our online platform. Provide basic details about your auto repair shop, and one of our representatives will contact you to discuss the next steps.",
      },
      {
        main: "Step 2 Choose Your Partnership Level: ",
        text: "Based on your needs, you can select between our Premium or Standard partnership levels. Premium partners receive enhanced support, including direct client flow from our website and priority access to tools and resources.",
      },
    ],
  },
  {
    title: "Training and Certification",
    description: [
      {
        main: "Comprehensive Training: ",
        text: "Once enrolled, your team will gain access to our specialized training programs. These courses cover everything from basic EV technology to advanced diagnostics, Tesla drive unit maintenance, battery management systems, and EV safety protocols.",
      },
      {
        main: "Certification: ",
        text: "Upon completion of the training, your team members will receive industry-recognized certifications, validating their expertise in EV servicing.",
      },
    ],
  },
  {
    title: "Access to Tools and Resources",
    description: [
      {
        main: "Tesla Labor Times: ",
        text: "As a partner, you’ll have exclusive access to Tesla Labor Times, providing you with accurate repair times for various Tesla models. This tool is crucial for optimizing your service efficiency.",
      },
      {
        main: "Specialized Diagnostic Equipment: ",
        text: "We equip your shop with state-of-the-art diagnostic tools tailored for EVs, ensuring that you have everything needed to deliver top-notch service.",
      },
    ],
  },
  {
    title: "Ongoing Support and Consulting",
    description: [
      {
        main: "Remote Services: ",
        text: "Our experts are available for remote diagnostics, programming, and consulting services. Whether you need help troubleshooting a specific issue or advice on optimizing your operations, we’re here to support you.",
      },
      {
        main: "Continuous Learning: ",
        text: "The EV industry is rapidly evolving, and so are our training programs. Partners have ongoing access to updated courses and resources to stay ahead of the curve.",
      },
    ],
  },
  {
    title: "Marketing and Client Acquisition",
    description: [
      {
        main: "Marketing Support: ",
        text: "As part of our partnership, we provide targeted marketing campaigns to attract EV owners to your shop. Premium partners benefit from direct client referrals through our website.",
      },
      {
        main: "Online Presence: ",
        text: "Your shop will be featured on the EVSREPUBLIC website, increasing your visibility and helping you reach a broader audience.",
      },
    ],
  },
  {
    title: "Join the EV Revolution",
    description: [
      {
        main: "",
        text: "Join our partnership program today. Our team is here to guide you every step of the way. With us, you’ll have the support, training, and resources to grow your business and thrive in the emerging EV market.",
      },
      {
        main: "",
        text: "Take the first step towards becoming a leader in EV servicing: ",
      },
    ],
  },
];

const SectionHowItWorks = () => (
  <Box
    id="howItWorks"
    sx={{
      pt: {xl: 4, lg: 0},
      color: "white",
      bgcolor: "#06090a",
      pb: 10,
    }}
  >
    <Container maxWidth={containerSize}>
      <Grid container spacing={4} sx={{pt: 12, mb: 12}}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="primary"
            sx={{fontSize: 48, lineHeight: "51px", fontWeight: 400}}
          >
            How it works
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {textItems.map((item, index) => (
            <Accordion key={index} sx={{mb: 4, pb: 2}}>
              <AccordionSummary
                expandIcon={<PlusIcon />}
                aria-controls={item.title}
                id={item.title}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 22,
                    lineHeight: "31px",
                    gap: 3,
                  }}
                >
                  <Typography variant="h5" component="div" color="primary">
                    0{index + 1}
                  </Typography>
                  {item.title}
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{pt: 0}}>
                <List sx={{mb: 2}}>
                  {item.description.map((text, index) => (
                    <ListItem
                      key={index}
                      sx={{display: "block", mb: 1, p: "0 0 0 20px"}}
                    >
                      <Typography component="span">{text.main}</Typography>
                      <Typography component="span" color="text.secondary">
                        {text.text}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Box>
);
export default SectionHowItWorks;