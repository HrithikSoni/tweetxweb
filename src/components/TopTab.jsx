import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AllInbox } from "@mui/icons-material";
import colors from "../utils/colors";

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TopTab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: colors.themeColor,
            },
          }}
        >
          <Tab
            icon={<AllInbox />}
            iconPosition="start"
            label="Posts"
            {...a11yProps(0)}
            sx={{
              marginRight: "10rem",
              "&.Mui-selected": { color: colors.themeColor },
              textTransform: "none",
            }}
          />
          <Tab
            icon={<AllInbox />}
            iconPosition="start"
            label="Followers"
            {...a11yProps(1)}
            sx={{
              marginRight: "10rem",
              "&.Mui-selected": { color: colors.themeColor },
              textTransform: "none",
            }}
          />
          <Tab
            icon={<AllInbox />}
            iconPosition="start"
            label="Following"
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": { color: colors.themeColor },
              textTransform: "none",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {props.postsPage}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {props.followersPage}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {props.followingPage}
      </CustomTabPanel>
    </Box>
  );
}
