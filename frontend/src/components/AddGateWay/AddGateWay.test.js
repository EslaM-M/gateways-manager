import { render } from "@testing-library/react";
import AddGateWay from "./index";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
test("Component snapshot render correctly", () => {
  const component = render(
    <AddGateWay open={true} handleClose={() => {}} handleSubmit={() => {}} />
  );
  expect(component).toMatchSnapshot();
});

test("Component Save Button Is Disabled", () => {
  const { getByText } = render(
    <AddGateWay open={true} handleClose={() => {}} handleSubmit={() => {}} />
  );
  expect(getByText("Save")).toBeDisabled();
});

test("Component Save Button Is Enabled if the user enter the required data", async () => {
  const { queryByText, getByTestId } = render(
    <AddGateWay open={true} handleClose={() => {}} handleSubmit={() => {}} />
  );
  const ipAddress = getByTestId("ip-address");
  const Name = getByTestId("gateway-name");
  userEvent.type(ipAddress, "192.168.1.1");
  userEvent.type(Name, "Vendor Name");
  expect(queryByText("Save")).toBeEnabled();
});
