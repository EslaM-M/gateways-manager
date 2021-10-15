import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";

import { useGateways } from "../hooks/useGateway";
import { Box, Button } from "@mui/material";
import AddGateWay from "../components/AddGateWay";
import { addGateWay } from "../apis/gateway";
import { withRouter } from "react-router";

const Gateway = ({ history }) => {
  const { data, refetch } = useGateways();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async (data) => {
    await addGateWay(data);
    refetch();
    setOpen(false);
  };
  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          margin: "0px 20px",
        }}
      >
        <Button
          variant="contained"
          onClick={handleOpen}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
        <AddGateWay
          open={open}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>IpAddress</TableCell>
            <TableCell>SerialNumber</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell>Updated at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              hover
              onClick={(event) => {
                event.preventDefault();
                history.push(`/${row._id}`);
              }}
              key={row._id}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.ipAddress}</TableCell>
              <TableCell>{row.serialNumber}</TableCell>
              <TableCell>
                {format(new Date(row.createdAt), "dd:MMM:yyyy")}
              </TableCell>
              <TableCell>
                {format(new Date(row.updatedAt), "dd:MMM:yyyy")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const GatewayWithRouter = withRouter(Gateway);
export default GatewayWithRouter;
