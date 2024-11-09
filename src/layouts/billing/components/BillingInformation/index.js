import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Thông tin thuê xe
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Nguyễn Thành Tài"
            company="021421901205"
            email="123 Dương Quảng Hàm"
            vat="Xe Airblade 2021 - 12C1 123.45"
          />
          <Bill
            name="Nguyễn Phương Tài"
            company="124812482142"
            email="234 Lê Văn Lương"
            vat="Xe Sirius 2018 - 24A1 456.23"
          />
          <Bill
            name="Nguyễn Lê Dân"
            company="12512532535"
            email="72 Nguyễn Văn Linh"
            vat="Xe Wave 2015 - 34B1 789.56"
            noGutter
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default BillingInformation;
