import React from 'react';
import { Card, Stack } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import { FaEllipsisH } from 'react-icons/fa';
import linearGradient from 'assets/theme/functions/linearGradient';
import CircularProgress from '@mui/material/CircularProgress';

function SafetyOverview() {
  const { info, gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card
      sx={{
        height: '100%',
        background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg)
      }}>
      <VuiBox sx={{ width: '100%' }}>
        <VuiBox
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{ width: '100%', position: 'relative' }}
          mb='40px'
        >
          {/* Chữ được căn giữa */}
          <VuiTypography
            variant='lg'
            color='white'
            fontWeight='bold'
            sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          >
            Đánh giá độ an toàn
          </VuiTypography>

          {/* Biểu tượng ở bên phải */}
          <VuiBox
            display='flex'
            justifyContent='center'
            alignItems='center'
            bgColor='#22234B'
            sx={{ width: '37px', height: '37px', cursor: 'pointer', borderRadius: '12px', marginLeft: 'auto' }}
          >
            <FaEllipsisH color={info.main} size='18px' />
          </VuiBox>
        </VuiBox>


        <VuiBox display="flex" justifyContent="flex-start" alignItems="center" gap="24px">
          {/* Thông tin số lượng xe */}
          <Stack
            direction='column'
            spacing='20px'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ml: 5 // Di chuyển gần hơn với % An Toàn
            }}>
            <VuiBox
              display='flex'
              width='220px'
              p='20px 22px'
              flexDirection='column'
              textAlign="center"
              alignItems="center"
              sx={{
                background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px'
              }}>
              <VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
                Xe đã bảo trì
              </VuiTypography>
              <VuiTypography color='white' variant='lg' fontWeight='bold'>
                450/500
              </VuiTypography>
            </VuiBox>
            <VuiBox
              display='flex'
              width='220px'
              p='20px 22px'
              flexDirection='column'
              textAlign="center"
              alignItems="center"
              sx={{
                background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px'
              }}>
              <VuiTypography color='text' variant='button' fontWeight='regular' mb='5px'>
                Tổng số xe
              </VuiTypography>
              <VuiTypography color='white' variant='lg' fontWeight='bold'>
                500
              </VuiTypography>
            </VuiBox>
          </Stack>

          {/* Phần hiển thị % an toàn */}
          <VuiBox sx={{ position: 'relative', display: 'inline-flex', ml: "16px" }}>
            <CircularProgress
              variant='determinate'
              value={(4500 / 5000) * 100}
              size={200}
              color='success'
            />
            <VuiBox
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <VuiBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <VuiTypography color='text' variant='button' mb='4px'>
                  % An Toàn
                </VuiTypography>
                <VuiTypography color='white' variant='d5' fontWeight='bold' mb='4px'>
                  90%
                </VuiTypography>
                <VuiTypography color='text' variant='button'>
                  Điểm An Toàn
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default SafetyOverview;
