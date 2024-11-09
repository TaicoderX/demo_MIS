import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";

function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "vehicle", align: "left" },
    { name: "budget", align: "left" },
    { name: "status", align: "left" },
    { name: "completion", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      vehicle: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Xe máy SH 2021 - 30K5 123.45
          </VuiTypography>
        </VuiBox>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $200
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Repairing
        </VuiTypography>
      ),
      completion: <Completion value={60} color="info" />,
      action,
    },
    {
      vehicle: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Xe số Wave 2009 - 29H1 234.56
          </VuiTypography>
        </VuiBox>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $30
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      completion: <Completion value={100} color="info" />,
      action,
    },
    {
      vehicle: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Xe máy Lead 2018 - 51B1 678.90
          </VuiTypography>
        </VuiBox>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $130
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Repairing
        </VuiTypography>
      ),
      completion: <Completion value={30} color="info" />,
      action,
    },
    {
      vehicle: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Xe số Sirius 2011 - 29H1 234.56
          </VuiTypography>
        </VuiBox>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $80
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Repairing
        </VuiTypography>
      ),
      completion: <Completion value={0} color="info" />,
      action,
    },
    {
      vehicle: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Xe máy Airblade 2021 - 12C1 123.45
          </VuiTypography>
        </VuiBox>
      ),
      budget: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $120
        </VuiTypography>
      ),
      status: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      completion: <Completion value={100} color="info" />,
      action,
    },
  ],
};
