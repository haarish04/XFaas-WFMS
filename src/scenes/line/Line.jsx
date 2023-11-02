import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import LineChart from "../../components/LineChart";

const CustomButton = styled(Button)({
  background: "white",
  color: "blue",
  "&:hover": {
    background: "white"
  },
});

const Line = ({ invocationId }) => {
  const [showLineChart, setShowLineChart] = useState(false);

  const handleClick = () => {
    setShowLineChart(true);
  };

  return (
    <Box m="10px">
      <CustomButton variant="contained" onClick={handleClick}>
        Invocations
      </CustomButton>
      {showLineChart && (
        <Box height="45vh" width="40vw">
          <LineChart invocationId={invocationId} />
        </Box>
      )}
    </Box>
  );
};

export default Line;
