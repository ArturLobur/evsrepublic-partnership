
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";





export default function HowItWorks () {
    return (
        <Box
            id="howItWorks"
            sx={{
                pt: {xs: 4, sm: 12},
                pb: {xs: 8, sm: 16},
                color: "white",
                bgcolor: "#06090a",
            }}
        >
            <Container
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: {xs: 3, sm: 6},
                }}
            >
                <Box
                    sx={{
                        width: {sm: "100%", md: "60%"},
                        textAlign: {sm: "left", md: "center"},
                    }}
                >
                    <Typography
                        textAlign="center"
                        variant="h1"
                        sx={{
                            fontSize: "clamp(3rem, 10vw, 4rem)",
                            color: (theme) =>
                                theme.palette.mode === "light"
                                    ? "primary.main"
                                    : "primary.light",
                        }}
                    >
                        HOW IT WORKS

                    </Typography>
                </Box>

                <Typography component="div" style={{ lineHeight: 1.6 }}>
                    <h2>1. Partnership Enrollment</h2>
                    <ul>
                        <li>
                            <strong>Step 1: Registration:</strong> Begin by registering your interest through our online platform. Provide basic details about your auto repair shop, and one of our representatives will contact you to discuss the next steps.
                        </li>
                        <li>
                            <strong>Step 2: Choose Your Partnership Level:</strong> Based on your needs, you can select between our Premium or Standard partnership levels. Premium partners receive enhanced support, including direct client flow from our website and priority access to tools and resources.
                        </li>
                    </ul>

                    <h2>2. Training and Certification</h2>
                    <ul>
                        <li>
                            <strong>Comprehensive Training:</strong> Once enrolled, your team will gain access to our specialized training programs. These courses cover everything from basic EV technology to advanced diagnostics, Tesla drive unit maintenance, battery management systems, and EV safety protocols.
                        </li>
                        <li>
                            <strong>Certification:</strong> Upon completion of the training, your team members will receive industry-recognized certifications, validating their expertise in EV servicing.
                        </li>
                    </ul>

                    <h2>3. Access to Tools and Resources</h2>
                    <ul>
                        <li>
                            <strong>Tesla Labor Times:</strong> As a partner, you’ll have exclusive access to Tesla Labor Times, providing you with accurate repair times for various Tesla models. This tool is crucial for optimizing your service efficiency.
                        </li>
                        <li>
                            <strong>Specialized Diagnostic Equipment:</strong> We equip your shop with state-of-the-art diagnostic tools tailored for EVs, ensuring that you have everything needed to deliver top-notch service.
                        </li>
                    </ul>

                    <h2>4. Ongoing Support and Consulting</h2>
                    <ul>
                        <li>
                            <strong>Remote Services:</strong> Our experts are available for remote diagnostics, programming, and consulting services. Whether you need help troubleshooting a specific issue or advice on optimizing your operations, we’re here to support you.
                        </li>
                        <li>
                            <strong>Continuous Learning:</strong> The EV industry is rapidly evolving, and so are our training programs. Partners have ongoing access to updated courses and resources to stay ahead of the curve.
                        </li>
                    </ul>

                    <h2>5. Marketing and Client Acquisition</h2>
                    <ul>
                        <li>
                            <strong>Marketing Support:</strong> As part of our partnership, we provide targeted marketing campaigns to attract EV owners to your shop. Premium partners benefit from direct client referrals through our website.
                        </li>
                        <li>
                            <strong>Online Presence:</strong> Your shop will be featured on the EVSREPUBLIC website, increasing your visibility and helping you reach a broader audience.
                        </li>
                    </ul>

                    <h2>6. Join the EV Revolution</h2>
                    <ul>
                        <li>
                            <strong>Step 1: Start Your Journey:</strong> Take the first step towards becoming a leader in EV servicing by joining our partnership program today. Our team is here to guide you every step of the way.
                        </li>
                        <li>
                            <strong>Step 2: Grow and Thrive:</strong> With EVSREPUBLIC, you’ll have the support, training, and resources to grow your business and thrive in the emerging EV market.
                        </li>
                    </ul>
                </Typography>





            </Container>
        </Box>
    );
}