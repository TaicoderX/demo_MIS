
import Card from "@mui/material/Card";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
import linearGradient from 'assets/theme/functions/linearGradient';
// Images
// import profile1 from "assets/images/profile-1.png";
import profile1 from "assets/images/xemay1.jpg";

import profile2 from "assets/images/xemay2.jpg";
import profile3 from "assets/images/xemay3.jpg";
import profile4 from "assets/images/xemay4.jpg";
// Vision UI Dashboard React components
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/employee/components/Header";
import colors from 'assets/theme/base/colors';
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import { useState } from "react";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Invoices from "layouts/billing/components/Invoices";
import Table from "examples/Tables/Table";
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Overview() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  return (
    <DashboardLayout>
      <Header tabValue={tabValue} handleSetTabValue={handleSetTabValue} />
      {tabValue === 0 && (
        <Grid container spacing={3} mb="30px" mt>
          <Grid item xs={12} xl={12}>
            <Card>
              <VuiBox display="flex" flexDirection="column" height="100%">
                <VuiBox display="flex" flexDirection="column" mb="24px">
                  <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                    Xe dùng để cho thuê
                  </VuiTypography>
                </VuiBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile1}
                      title="Xe máy Airblade 2021 - 12C1 123.45"
                      description="Lần bảo dưỡng gần nhất: 20/10/2023"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Cho thuê",
                        label2: "Sửa thông tin",
                      }}

                      distance="324 km"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile2}
                      title="Xe máy cup 50cc - 12A1 456.23"
                      description="Lần bảo dưỡng gần nhất: 17/09/2023"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Cho thuê",
                        label2: "Sửa thông tin",
                      }}

                      distance="600 km"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile3}
                      title="Xe honda f5 2024 - 12B1 789.12"
                      description="Lần bảo dưỡng gần nhất: 12/10/2023"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Cho thuê",
                        label2: "Sửa thông tin",
                      }}

                      distance="150 km"
                    />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      image={profile4}
                      title="Xe máy Airblade 2024 - 22C2 789.56"
                      description="Lần bảo dưỡng gần nhất: 05/11/2023"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Cho thuê",
                        label2: "Sửa thông tin",
                      }}

                      distance="290 km"
                    />
                  </Grid>

                </Grid>
              </VuiBox>
            </Card>
          </Grid>
        </Grid>
      )}

      {tabValue === 1 && (
        <><Grid container spacing={3} mb="30px" mt>
          <Grid item xs={12} xl={12}>
            <Card>
              <VuiBox display="flex" flexDirection="column" height="100%">
                <VuiBox display="flex" flexDirection="column" mb="24px">
                  <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                    Xe đang cho thuê
                  </VuiTypography>
                </VuiBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={1}
                      image={profile1}
                      title="Xe máy Airblade 2021 - 12C1 123.45"
                      description="0h 58min (10:20 - 20/10/2023)"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Liên hệ",
                        label2: "Vị trí",
                      }}

                      distance="324 km" />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={1}
                      image={profile2}
                      title="Xe máy cup 50cc - 12A1 456.23"
                      description="2h 18min (10:00 - 20/12/2023)"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Liên hệ",
                        label2: "Vị trí",
                      }}

                      distance="600 km" />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={1}
                      image={profile3}
                      title="Xe honda f5 2024 - 12B1 789.12"
                      description="0h 32min (10:00 - 20/10/2023)"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Liên hệ",
                        label2: "Vị trí",
                      }}

                      distance="290 km" />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={1}
                      image={profile4}
                      title="Xe máy Airblade 2024 - 22C2 789.56"
                      description="0h 23min (10:06 - 20/10/2023)"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Liên hệ",
                        label2: "Vị trí",
                      }}
                      distance="290 km" />
                  </Grid>
                </Grid>
              </VuiBox>
            </Card>
          </Grid>
        </Grid><VuiBox my={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <BillingInformation />
              </Grid>
              <Grid item xs={12} md={5}>
                <Invoices />
              </Grid>
            </Grid>
          </VuiBox></>
      )}

      {tabValue === 2 && (
        <><Grid container spacing={3} mb="30px" mt>
          <Grid item xs={12} xl={12}>
            <Card>
              <VuiBox display="flex" flexDirection="column" height="100%">
                <VuiBox display="flex" flexDirection="column" mb="24px">
                  <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                    Xe cần bảo dưỡng
                  </VuiTypography>
                </VuiBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={2}
                      image={profile1}
                      title="Xe máy Airblade 2024 - 22C2 789.56"
                      description="Xe cần bảo dưỡng sau 1000km"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Bảo dưỡng",
                        label2: "Lên lịch",
                      }}
                      percent="90"
                      distance="324 km" />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={2}
                      image={profile2}
                      title="Xe máy Airblade 2024 - 22C2 789.56"
                      description="Xe bị hư thắng trước"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Bảo dưỡng",
                        label2: "Lên lịch",
                      }}
                      percent="89"

                      distance="600 km" />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={2}
                      image={profile3}
                      title="Xe máy Airblade 2024 - 22C2 789.56"
                      description="Xe bị hư đèn pha"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Bảo dưỡng",
                        label2: "Lên lịch",
                      }}
                      percent="75"
                      distance="290 km" />
                  </Grid>
                  <Grid item xs={12} md={3} xl={3}>
                    <DefaultProjectCard
                      isWorking={2}
                      image={profile4}
                      title="Xe máy Airblade 2024 - 22C2 789.56"
                      description="Xe bị hư đèn hậu trái"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "white",
                        label: "Bảo dưỡng",
                        label2: "Lên lịch",
                      }}
                      percent="95"
                      distance="290 km" />
                  </Grid>
                </Grid>
              </VuiBox>
            </Card>
          </Grid>
        </Grid>
        <Card>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center">
              <VuiTypography variant="lg" color="white">
                Lịch sử bảo dưỡng
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) => `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) => `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={prCols} rows={prRows} />
            </VuiBox>
          </Card></>
      )}

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
