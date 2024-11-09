import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Dữ liệu hình ảnh và biểu tượng
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";

// Component đại diện cho thông tin nhân viên
function Manager({ image, name, email }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          {email}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

// Component đại diện cho thông tin địa điểm và doanh thu
function Location({ location, revenue }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {location}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        Doanh thu: ${revenue}
      </VuiTypography>
    </VuiBox>
  );
}

export default {
  columns: [
    { name: "Manager", align: "left" },
    { name: "Location", align: "left" },
    { name: "Status", align: "center" },
    { name: "Employed", align: "center" },
    { name: "Action", align: "center" },
  ],

  rows: [
    {
      Manager: <Manager image={avatar1} name="Esthera Jackson" email="esthera@company.com" />,
      Location: <Location location="Vũng Tàu" revenue="5,000" />,
      Status: (
        <VuiBadge
          variant="standard"
          badgeContent="Online"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          23/04/18
        </VuiTypography>
      ),
      Action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      Manager: <Manager image={avatar2} name="Alexa Liras" email="alexa@company.com" />,
      Location: <Location location="Phú Quốc" revenue="4,200" />,
      Status: (
        <VuiBadge
          variant="standard"
          badgeContent="Offline"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          11/01/19
        </VuiTypography>
      ),
      Action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      Manager: <Manager image={avatar3} name="Laurent Michael" email="laurent@company.com" />,
      Location: <Location location="Đà Lạt" revenue="3,800" />,
      Status: (
        <VuiBadge
          variant="standard"
          badgeContent="Online"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          19/09/17
        </VuiTypography>
      ),
      Action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      Manager: <Manager image={avatar4} name="Freduardo Hill" email="freduardo@company.com" />,
      Location: <Location location="TP. Hồ Chí Minh" revenue="7,500" />,
      Status: (
        <VuiBadge
          variant="standard"
          badgeContent="Online"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          24/12/08
        </VuiTypography>
      ),
      Action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      Manager: <Manager image={avatar5} name="Daniel Thomas" email="daniel@company.com" />,
      Location: <Location location="Nha Trang" revenue="6,000" />,
      Status: (
        <VuiBadge
          variant="standard"
          badgeContent="Offline"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          04/10/21
        </VuiTypography>
      ),
      Action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
    {
      Manager: <Manager image={avatar6} name="Mark Wilson" email="mark@company.com" />,
      Location: <Location location="Côn Đảo" revenue="2,500" />,
      Status: (
        <VuiBadge
          variant="standard"
          badgeContent="Offline"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Employed: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          14/09/20
        </VuiTypography>
      ),
      Action: (
        <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Edit
        </VuiTypography>
      ),
    },
  ],
};
