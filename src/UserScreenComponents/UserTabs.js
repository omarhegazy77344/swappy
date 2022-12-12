import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UserTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="user-tab-link" label="My Account" {...a11yProps(0)} />
          <Tab className="user-tab-link" label="My Ads" {...a11yProps(1)} />
          <Tab className="user-tab-link" label="Billing & Address" {...a11yProps(2)} />
          <Tab className="user-tab-link" label="Preferences" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>

          <div className="margin-y-2">

            <form>

              <h2 className="margin-bottom-3">My Account</h2>

              <div className="row margin-bottom-2">
                <div className="col-lg">
                  <label>First Name</label>
                  <input type="text" name="firstName" id="firstName" className="input-underline" value="Ammar" disabled></input>
                </div>
                <div className="col-lg">
                  <label>Last Name</label>
                  <input type="text" name="Last Name" id="Last Name" className="input-underline" value="Afridi" disabled></input>
                </div>
                <div className="col-lg">
                  <label>Email</label>
                  <input type="email" name="email" id="email" className="input-underline" value="ammar.afridi95@gmail.com" disabled></input>
                </div>
              </div>

              <div className="row margin-bottom-2">
                <div className="col-lg-4">
                  <label>Phone Number</label>
                  <input type="text" name="firstName" id="firstName" className="input-underline" value="+971506045355" disabled></input>
                </div>
              </div>

            </form>

            <div className="row col-lg-4">
              <div className="col-lg">
                <button className="btn btn-primary w-100" type="submit">Update Info</button>
              </div>
              <div className="col-lg">
                <button className="btn btn-primary-outline w-100" type="submit">Log Out</button>
              </div>
            </div>

          </div>

      </TabPanel>

      <TabPanel value={value} index={1}>

      <form className="col-lg-12 margin-y-2">
        <h2 className="margin-bottom-3">My Ads</h2>
        <p>No ads created.</p>
      </form>

      </TabPanel>

      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

    </Box>
  );
}