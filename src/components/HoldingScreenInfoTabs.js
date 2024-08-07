import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CommitHistory from './CommitHistory';
import MissionStatement from "./MissionStatement";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={"tab-panel"}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <div className={"tab-panel-internal"}>
        <Box hidden={value !== index} sx={{ p: 3 }}>
          <Typography
            component={"div"}>
            {children}
          </Typography>
        </Box>
      </div>
      <style>{`.tab-panel { height: 80%; overflow: scroll;}`}</style>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// TODO: add another effect to handle all children loading states and only show the tabs when all children are loaded
const HoldingScreenInfo = ({ loadingCallback }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'none', width: '100%'}}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          sx={{bgcolor:'none'}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="holding screen info tabs"
        >
          <Tab label="Mission" {...a11yProps(0)} />
          <Tab label="Progress" {...a11yProps(1)} />
          <Tab disabled={true} label="About Us" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} sx={{width: '100%', height: '100%'}}>
          <MissionStatement />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} sx={{width: '100%', height: '100%'}}>
          <CommitHistory loadingCallback={loadingCallback}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} sx={{width: '100%', height: '100%'}}>
          <p>Coming soon...</p>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default HoldingScreenInfo;
