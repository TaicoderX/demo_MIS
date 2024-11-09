/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="18px"
        sx={({ breakpoints }) => ({
          [breakpoints.down("lg")]: {
            flexDirection: "column",
          },
        })}
      >
        <VuiTypography
          variant="lg"
          fontWeight="bold"
          textTransform="capitalize"
          color="white"
          sx={({ breakpoints }) => ({
            [breakpoints.only("sm")]: {
              mb: "6px",
            },
          })}
        >
          Kiến nghị của khách hàng
        </VuiTypography>
        <VuiBox display="flex" alignItems="flex-start">
          <VuiBox color="white" mr="6px" lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </VuiBox>
          <VuiTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <VuiBox mb={2}>
          <VuiTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="uppercase"
          >
            newest
          </VuiTypography>
        </VuiBox>
        <VuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="warning"
            icon="arrow_downward"
            name="Nguyễn Thành Tài"
            description="
            Chất lượng dịch vụ không tốt, mong muốn cải thiện -
            27 March 2020, at 12:30 PM
            "
            value="kiểm tra"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Nguyễn Phương Tài"
            description="Nhân viên phục vụ nhiệt tình - 27 March 2020, at 04:30 AM"
            value="kiểm tra"
          />
          <Transaction
            color="error"
            icon="priority_high"
            name="Anh Minh"
            description="Xe đang chạy bị mất thắng trước - 26 March 2020, at 05:00 AM"
            color_val="warning"
            value="xử lý"
          />
        </VuiBox>
        <VuiBox mt={1} mb={2}>
          <VuiTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="uppercase"
          >
            yesterday
          </VuiTypography>
        </VuiBox>
        <VuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Nguyễn A"
            description="26 March 2020, at 13:45 PM"
            value="kiểm tra"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Nguyễn B"
            description="26 March 2020, at 12:30 PM"
            value="kiểm tra"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Nguyễn C"
            description="26 March 2020, at 08:30 AM"
            value="kiểm tra"
          />
          
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Transactions;
