import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

function TimeItem({
  textColor = 'grey',
  text = 'text',
  topLineColor = 'grey',
  renderIcon = () => <LaptopMacIcon />,
  bottomLineColor = 'grey',
  label = 'label',
  labelColor = 'grey',
  description = 'Description for the content',
  descriptionColor = 'grey',
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
        color={textColor}
      >
        {text}
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector sx={{ backgroundColor: { topLineColor } }} />
        <TimelineDot>{renderIcon()}</TimelineDot>
        <TimelineConnector sx={{ backgroundColor: { bottomLineColor } }} />
      </TimelineSeparator>

      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="div" color={labelColor}>
          {label}
        </Typography>
        <Typography
          variant="p"
          color={descriptionColor}
          sx={{ fontSize: '0.8em' }}
        >
          {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimeItem;
