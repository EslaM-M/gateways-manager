import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVert from "@mui/icons-material/MoreVert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { format } from "date-fns";

import { Box, Button, Menu, MenuItem } from "@mui/material";
import { useParams, withRouter } from "react-router";
import { usePeripheralDevices } from "../hooks/usePeripheralDevices";
import AddPeripheralDevice from "../components/AddPeripheralDevice";
import {
  addPeripheralDevices,
  deletePeripheralDevices,
  updatePeripheralDevices,
} from "../apis/peripheralDevices";

const Gateway = ({ history }) => {
  let { id } = useParams();

  const { data, refetch } = usePeripheralDevices(id);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [selectedRow, setSelectedRow] = useState(null);

  const [initialDeviceModalData, setInitialDeviceModalData] = useState({});
  const handleClose = () => {
    setInitialDeviceModalData({});
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const deleteDevice = async () => {
    setAnchorEl(null);
    const result = await deletePeripheralDevices(selectedRow);
    refetch();
  };

  const updateDevice = () => {
    const element = data.find((element) => {
      return element._id === selectedRow;
    });
    setAnchorEl(null);
    setInitialDeviceModalData({ ...element });
    setOpen(true);
  };

  const handleSubmit = async (data) => {
    if (data.id) {
      await updatePeripheralDevices({ ...data, gateway: id, id: data.id });
      setInitialDeviceModalData({});
    } else {
      await addPeripheralDevices({ ...data, gateway: id });
    }
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
        <AddPeripheralDevice
          open={open}
          initialData={initialDeviceModalData}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Vendor</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>UID</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell>Updated at</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              hover
              key={row._id}
              onClick={() => {
                setSelectedRow(row._id);
              }}
            >
              <TableCell component="th" scope="row">
                {row.vendor}
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.UID}</TableCell>
              <TableCell>
                {format(new Date(row.createdAt), "dd:MMM:yyyy")}
              </TableCell>
              <TableCell>
                {format(new Date(row.updatedAt), "dd:MMM:yyyy")}
              </TableCell>
              <TableCell>
                <Button>
                  <MoreVert
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  ></MoreVert>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={deleteDevice}>Delete</MenuItem>
                  <MenuItem onClick={updateDevice}>Update</MenuItem>
                </Menu>
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
