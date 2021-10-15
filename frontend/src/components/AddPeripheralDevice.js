import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Modal,
  Typography,
  Switch,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import React, { useEffect, useState } from "react";
const AddPeripheralDevice = ({
  open,
  handleClose,
  handleSubmit,
  initialData,
}) => {
  const [vendor, setVendor] = useState("");
  const [status, setStatus] = useState(true);
  const submitForm = (event) => {
    event.preventDefault();
    const data = {
      vendor,
      status: status ? "online" : "offline",
      id: initialData?._id,
    };
    setVendor("");
    setStatus(true);
    handleSubmit(data);
  };

  useEffect(() => {
    setVendor(initialData.vendor);
    setStatus(initialData.status === "online" ? true : false);
  }, [initialData]);
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
          Add New PeripheralDevice
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr" },
            gap: 4,
          }}
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="gateway-name">Vendor Name</InputLabel>
            <Input
              value={vendor}
              placeholder="Vendor Name"
              onChange={(event) => {
                setVendor(event.target.value);
              }}
              name="gateway-name"
              id="gateway-name"
            />
          </FormControl>
          <FormControlLabel
            control={
              <Switch
                inputProps={{ "aria-label": "controlled" }}
                checked={status}
                onChange={(event) => {
                  setStatus(event.target.checked);
                }}
              />
            }
            label="Status (Online/Offline)"
          />
        </Box>

        <Button
          disabled={!vendor}
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

export default AddPeripheralDevice;
