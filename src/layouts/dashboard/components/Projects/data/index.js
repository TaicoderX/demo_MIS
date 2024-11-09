// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt={name}
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "location", align: "left" },
      { name: "revenue", align: "center" },
      { name: "employees", align: "left" },
      { name: "vehiclesRented", align: "center" },
    ],

    rows: [
      {
        location: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Vũng Tàu
            </VuiTypography>
          </VuiBox>
        ),
        revenue: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $5,000
          </VuiTypography>
        ),
        employees: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar2, "Romina Hadid"],
              [avatar3, "Alexander Smith"],
            ])}
          </VuiBox>
        ),
        vehiclesRented: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        location: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Phú Quốc
            </VuiTypography>
          </VuiBox>
        ),
        revenue: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $4,200
          </VuiTypography>
        ),
        employees: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar2, "Romina Hadid"],
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
        vehiclesRented: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              70%
            </VuiTypography>
            <VuiProgress value={70} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        location: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Đà Lạt
            </VuiTypography>
          </VuiBox>
        ),
        revenue: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $3,800
          </VuiTypography>
        ),
        employees: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar3, "Alexander Smith"],
            ])}
          </VuiBox>
        ),
        vehiclesRented: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              60%
            </VuiTypography>
            <VuiProgress value={60} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        location: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              TP. Hồ Chí Minh
            </VuiTypography>
          </VuiBox>
        ),
        revenue: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $7,500
          </VuiTypography>
        ),
        employees: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar4, "Jessica Doe"],
              [avatar3, "Alexander Smith"],
              [avatar2, "Romina Hadid"],
              [avatar1, "Ryan Tompson"],
            ])}
          </VuiBox>
        ),
        vehiclesRented: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              90%
            </VuiTypography>
            <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        location: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Nha Trang
            </VuiTypography>
          </VuiBox>
        ),
        revenue: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $6,000
          </VuiTypography>
        ),
        employees: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar4, "Jessica Doe"]])}
          </VuiBox>
        ),
        vehiclesRented: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              75%
            </VuiTypography>
            <VuiProgress value={75} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        location: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Côn Đảo
            </VuiTypography>
          </VuiBox>
        ),
        revenue: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $2,500
          </VuiTypography>
        ),
        employees: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
        vehiclesRented: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              50%
            </VuiTypography>
            <VuiProgress value={50} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        location: (
          <VuiBox display="flex" alignItems="center">
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Cần Thơ
            </VuiTypography>
          </VuiBox>
        ),
        revenue: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $5,000
          </VuiTypography>
        ),
        employees: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar4, "Jessica Doe"],
              [avatar3, "Alexander Smith"],
              [avatar2, "Romina Hadid"],
              [avatar1, "Ryan Tompson"],
            ])}
          </VuiBox>
        ),
        vehiclesRented: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              95%
            </VuiTypography>
            <VuiProgress value={95} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
    ],
  };
}
