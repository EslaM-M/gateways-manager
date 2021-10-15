import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import React, { useState } from "react";
import IpAddressComponent from "./IpAddressComponent";
const AddGateWay = ({ open, handleClose, handleSubmit }) => {
  const [name, setName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    const data = { name, ipAddress };
    setName("");
    setIpAddress("");
    handleSubmit(data);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-add-gateway"
      aria-describedby="modal-add-gateway"
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box
        component="form"
        onSubmit={submitForm}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5" sx={{ paddingBottom: "40px" }}>
          Add New Gateway
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="gateway-name">Name</InputLabel>
            <Input
              value={name}
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              name="gateway-name"
              id="gateway-name"
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="ip-address">Ip Address</InputLabel>
            <Input
              value={ipAddress}
              name="ip-address"
              id="ip-address"
              onChange={(event) => {
                setIpAddress(event.target.value);
              }}
              inputComponent={IpAddressComponent}
            />
          </FormControl>
        </Box>

        <Button
          disabled={!name || !ipAddress}
          type="submit"
          sx={{ marginTop: "30px" }}
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default AddGateWay;
