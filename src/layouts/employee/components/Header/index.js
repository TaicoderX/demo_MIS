import AppBar from "@mui/material/AppBar";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
// Images
import burceMars from "assets/images/avatar-simmmple.png";
// Vision UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";
import VuiAvatar from "components/VuiAvatar";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
// Vision UI Dashboard React icons
import { IoCube } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
// Vision UI Dashboard React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";

function Header({ tabValue, handleSetTabValue }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.lg
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, []);

  return (
    <VuiBox position="relative">
      <DashboardNavbar light />
      <Card sx={{ px: 3, mt: 2 }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={1.7} lg={1.5} xl={1.2} xxl={0.8} display="flex">
            <VuiAvatar src={burceMars} alt="profile-image" variant="rounded" size="xl" shadow="sm" />
          </Grid>
          <Grid item xs={12} md={4.3} lg={4} xl={3.8} xxl={7}>
            <VuiBox height="100%" mt={0.5} lineHeight={1} display="flex" flexDirection="column">
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Mark Johnson
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                mark@simmmple.com
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6.5} xl={6} xxl={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent", display: "flex", justifyContent: "flex-end" }}
              >
                <Tab label="XE MÁY" icon={<IoCube color="white" size="16px" />} />
                <Tab label="LỊCH SỬ THUÊ XE" icon={<IoDocument color="white" size="16px" />} />
                <Tab label="BẢO TRÌ" icon={<IoBuild color="white" size="16px" />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </VuiBox>
  );
}

export default Header;
