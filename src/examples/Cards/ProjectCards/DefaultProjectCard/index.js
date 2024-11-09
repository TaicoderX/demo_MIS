
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiAvatar from "components/VuiAvatar";
import colors from 'assets/theme/base/colors';
import LineChart from 'examples/Charts/LineCharts/LineChart';
import { lineChartDataProfile2 } from 'variables/charts';
import { lineChartOptionsProfile2 } from 'variables/charts';
import Grid from "@mui/material/Grid";
// import VuiBox from "components/VuiBox";
import linearGradient from 'assets/theme/functions/linearGradient';
import WhiteLightning from 'assets/images/shapes/white-lightning.svg';
import carProfile from 'assets/images/shapes/car-profile.svg';


function DefaultProjectCard({ image, label, title, description, action, authors, distance, isWorking, percent }) {
  const { gradients, info } = colors;
  const { cardContent } = gradients;
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <VuiAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { dark }, functions: { rgba } }) => ({
          border: `${borderWidth[2]} solid ${rgba(dark.focus, 0.5)}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <VuiBox
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <VuiBox
        component="img"
        src={image}
        mb="8px"
        borderRadius="15px"
        sx={({ breakpoints }) => ({
          [breakpoints.up("xl")]: {
            height: "200px",
          },
        })}
      />

      <VuiBox
        sx={({ breakpoints }) => ({
          [breakpoints.only("xl")]: {
            minHeight: "200px",
          },
        })}
      >
        {isWorking === 1 ?
          (<Grid item xs={12} md={12} xl={12} xxl={12}>
            <VuiBox
              display='flex'
              p='18px'
              alignItems='center'
              sx={{
                background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px',
              }}>
              <VuiBox display='flex' flexDirection='column' mr='auto'>
                <VuiTypography color='text' variant='caption' fontWeight='medium' mb='2px'>
                  Consumption
                </VuiTypography>
                <VuiTypography
                  color='white'
                  variant='h4'
                  fontWeight='bold'
                  sx={({ breakpoints }) => ({
                    [breakpoints.only('xl')]: {
                      fontSize: '20px'
                    }
                  })}>
                  0.1L/km
                </VuiTypography>
              </VuiBox>
              <VuiBox
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{
                  background: info.main,
                  borderRadius: '12px',
                  width: '56px',
                  height: '56px'
                }}>
                <VuiBox component='img' src={WhiteLightning} />
              </VuiBox>
            </VuiBox>
          </Grid>)
          :
          isWorking === 2 ?
            (<Grid item xs={12} md={12} xl={12} xxl={12}>
              <VuiBox
                display='flex'
                p='18px'
                alignItems='center'
                sx={{
                  background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                  minHeight: '110px',
                  borderRadius: '20px'
                }}>
                <VuiBox display='flex' flexDirection='column' mr='auto'>
                  <VuiTypography color='text' variant='caption' fontWeight='medium' mb='2px'>
                    Health
                  </VuiTypography>
                  <VuiTypography
                    color='white'
                    variant='h4'
                    fontWeight='bold'
                    sx={({ breakpoints }) => ({
                      [breakpoints.only('xl')]: {
                        fontSize: '20px'
                      }
                    })}>
                    {percent}%
                  </VuiTypography>
                </VuiBox>
                <VuiBox
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  sx={{
                    background: info.main,
                    borderRadius: '12px',
                    width: '56px',
                    height: '56px'
                  }}>
                  <VuiBox component='img' src={carProfile} />
                </VuiBox>
              </VuiBox>
            </Grid>)
            :
            (<Grid item xs={12} md={12} xl={12} xxl={12}>
              <VuiBox
                display='flex'

                alignItems='center'
                sx={{
                  background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                  borderRadius: '20px'
                }}>
                <VuiBox display='flex' flexDirection='column' mr='auto'>
                  <VuiTypography color='text' variant='caption' fontWeight='medium' mb='2px' ml='5px'
                    sx={{
                      whiteSpace: 'nowrap'
                    }}
                  >
                    This Month
                  </VuiTypography>
                  <VuiTypography
                    color='white'
                    variant='h4'
                    fontWeight='bold'
                    ml='10px'
                    sx={({ breakpoints }) => ({
                      [breakpoints.only('xl')]: {
                        fontSize: '12px'
                      }
                    })}>
                    {distance}
                  </VuiTypography>
                </VuiBox>
                <VuiBox sx={{ maxHeight: '75px' }}>
                  <LineChart
                    lineChartData={lineChartDataProfile2}
                    lineChartOptions={lineChartOptionsProfile2}
                  />
                </VuiBox>
              </VuiBox>
            </Grid>)}
        <VuiBox>
          <VuiTypography variant="xxs" color="text" fontWeight="medium" textTransform="capitalize">
            {label}
          </VuiTypography>
        </VuiBox>
        <VuiBox mb={1}>
          {action.type === "internal" ? (
            <VuiTypography
              component={Link}
              to={action.route}
              variant="h5"
              color="white"
              textTransform="capitalize"
            >
              {title}
            </VuiTypography>
          ) : (
            <VuiTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              color="white"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </VuiTypography>
          )}
        </VuiBox>
        <VuiBox mb={3} lineHeight={0}>
          {/* <VuiTypography color='white' variant='lg' fontWeight='bold' mb='2px' mt='18px'>
            {description}
          </VuiTypography> */}
          <VuiTypography variant="button" fontWeight="regular" color="text">
            {description}
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" justifyContent="space-between" alignItems="center">

          <VuiButton
            // component={Link}
            // to={action.route}
            variant="outlined"
            size="small"
            color='success'
          >
            {action.label}
          </VuiButton>

          <VuiButton
            // component={Link}
            // to={action.route}
            variant="outlined"
            size="small"
            color='info'
          >
            {action.label2}
          </VuiButton>

          {/* <VuiBox display="flex">{renderAuthors}</VuiBox> */}
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "white",
      "text",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProjectCard;
