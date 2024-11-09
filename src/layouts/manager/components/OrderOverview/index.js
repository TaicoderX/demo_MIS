// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card className="h-100">
      {/* <VuiBox mb={3}>
        <Grid container spacing="18px">
          <Grid item xs={12} lg={6} xl={3}>
            <SatisfactionRate />
          </Grid>
        </Grid>
      </VuiBox> */}
      <VuiBox mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Tổng quan xe đã được cho thuê
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <VuiTypography variant="button" color="text" fontWeight="medium" mr="2px">
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <TimelineItem
          title="Xe tay ga Honda Air Blade"
          dateTime="01 NOV 10:30 AM"
          description="Người thuê: Nguyễn Văn A, CCCD: 012345678901"
        />
        <TimelineItem
          title="Xe số Yamaha Sirius"
          dateTime="02 NOV 1:15 PM"
          description="Người thuê: Trần Thị B, CCCD: 987654321012"
        />
        <TimelineItem
          title="Xe côn Exciter 150"
          dateTime="05 NOV 4:45 PM"
          description="Người thuê: Lê Văn C, CCCD: 123456789123"
        />
        <TimelineItem
          title="Xe tay ga SH Mode"
          dateTime="10 NOV 8:00 AM"
          description="Người thuê: Phạm Thị D, CCCD: 456789123456"
        />
        <TimelineItem
          title="Xe tay ga SH Mode"
          dateTime="10 NOV 8:00 AM"
          description="Người thuê: Phạm Thị D, CCCD: 456789123456"
        />
      </VuiBox>
    </Card>
  );
}

export default OrdersOverview;
