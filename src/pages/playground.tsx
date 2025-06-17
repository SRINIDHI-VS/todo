import type { ChangeEventHandler } from "react";
import { useState } from "react";

import {
  Button,
  Checkbox,
  Icon,
  IconButton,
  Input,
  Modal,
  Radio,
  Select,
} from "@/templates";
import { Typography } from "@/templates/Typography";

const Playground = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState<any>(null);
  const [dropdownValue, setDropdownValue] = useState<null | number>(null);
  const [inputText, setInputText] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const handleCheckBoxClick: ChangeEventHandler = () => {
    setChecked((s) => !s);
  };

  const handleRadioClick: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <div>
      <Typography>Regular P no props</Typography>
      <Typography variant="d1">
        D1 Display Headings 36/44px (1.22x) This line checks for spacing
        settings like leading and tracking.
      </Typography>
      <Typography variant="d2">
        D2 Display Headings 48/56 px (1.16x) This line checks for spacing
        settings like leading and tracking.
      </Typography>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="labelbig">label big</Typography>
      <Typography variant="labelsmall" className="text-emerald-400">
        labelsmall with added class text-emerald-400
      </Typography>
      <Typography variant="plarge">plarge</Typography>
      <Typography variant="pregular">preguls</Typography>
      <Typography variant="psmall">psmall</Typography>
      <Typography variant="psmaller">psmaller</Typography>
      <Typography variant="h2" as="h1">
        variant h2 , as = h1
      </Typography>
      <hr />
      <hr />
      <hr />
      <h2>Checkboxes</h2>
      <div style={{ backgroundColor: "orangered" }}>
        <Checkbox
          checked={checked}
          onChange={handleCheckBoxClick}
          label="small"
          size="sm"
        />
        <br />
        <Checkbox
          checked={checked}
          onChange={handleCheckBoxClick}
          label="medium (default)"
          size="md"
        />
        <br />
        <Checkbox
          checked={checked}
          onChange={handleCheckBoxClick}
          label="large"
          size="lg"
        />
        <Checkbox
          checked={checked}
          onChange={handleCheckBoxClick}
          label="component is inline-flex by default"
          size="lg"
        />
        <br />
        <Checkbox
          checked={checked}
          disabled
          onChange={handleCheckBoxClick}
          label="disabled"
          size="lg"
        />
      </div>

      <h2>Radio (checked not controlled)</h2>

      <div style={{ backgroundColor: "lime" }}>
        <Radio
          value="small value"
          name="demo-1"
          // checked={checked}
          onChange={handleRadioClick}
          label="small"
          size="sm"
        />
        <br />
        <Radio
          value="mediummmm"
          name="demo-1"
          // checked={checked}
          onChange={handleRadioClick}
          label="medium (default)"
          size="md"
        />
        <br />
        <Radio
          value="laaarge"
          name="demo-1"
          // checked={checked}
          onChange={handleRadioClick}
          label="large"
          size="lg"
        />
        <Radio
          value="test"
          name="demo-1"
          // checked={checked}
          onChange={handleRadioClick}
          label="component is inline-flex by default"
          size="lg"
        />
        <br />
        <Radio
          value="something"
          name="demo-1"
          // checked={checked}
          disabled
          onChange={handleRadioClick}
          label="disabled"
          size="lg"
        />
        <p style={{ color: "black" }}>
          selected option: {radioValue ?? "null"}
        </p>
        <input type="datetime-local" />
      </div>

      {/* <div style={{ backgroundColor: '#7d72e1' }}>
        <h3>Radio group</h3>
        <Radio
          checked={checked}
          onChange={handleCheckBoxClick}
          label="medium (default)"
          size="md"
        />
        <Radio
          checked={checked}
          onChange={handleCheckBoxClick}
          label="medium (default)"
          size="md"
        />
      </div> */}
      <hr />
      <hr />
      <hr />
      <h3>MUI</h3>
      {/* <Button variant="contained">Button</Button> */}
      {/* <Button variant="outlined" className="text-orange-400">
        button with text-orange-400
      </Button> */}

      <Modal open={modalOpen} onClose={() => setModalOpen((s) => !s)}>
        <div className="bg-rose-600">
          <Typography id="modal-modal-title">Text in a modal</Typography>
          <Typography id="modal-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </div>
      </Modal>
      <Button
        className="p-2"
        variant="primary"
        onClick={() => setModalOpen(true)}
      >
        Open modal
      </Button>

      <h2>Dropdown</h2>

      <div className="bg-orange-400 pb-96">
        <Select
          onChange={(e, v) => console.log(v)}
          defaultValue={20}
          options={[
            { value: 0, label: "red" },
            { value: 1, label: "yellow" },
            { value: 2, label: "pink" },
            { value: 3, label: "blue" },
            { value: 4, label: "green" },
            { value: 5, label: "yellow" },
          ]}
        />
        <h3>Controlled Select</h3>
        <Select
          onChange={(e, v) => setDropdownValue(v)}
          defaultValue={20}
          value={dropdownValue}
          options={[
            { value: 0, label: "red" },
            { value: 1, label: "yellow" },
            { value: 2, label: "pink" },
            { value: 3, label: "blue" },
            { value: 4, label: "green" },
            { value: 5, label: "yellow" },
          ]}
        />
        value: {dropdownValue}
      </div>
      <h2>Icons</h2>
      <div className="flex items-center text-yellow-300">
        <Icon alt="first" src="/assets/icons.svg#arrow-down-24" size="lg" />
        <Icon alt="first" src="/assets/icons.svg#arrow-down-20" size="sm" />
        <Icon alt="first" src="/assets/icons.svg#checkmark-24" size="lg" />
        <Icon alt="first" src="/assets/icons.svg#checkmark-20" size="sm" />
      </div>

      <div className="mt-2 flex items-center text-fuchsia-500">
        <Icon alt="first" src="/assets/icons.svg#arrow-down-24" size="lg" />
        <Icon alt="first" src="/assets/icons.svg#arrow-down-20" size="sm" />
      </div>

      <div className="mt-2 flex items-center text-pink-600">
        <Icon alt="first" src="/assets/icons.svg#checkmark-24" size="lg" />
        <Icon alt="first" src="/assets/icons.svg#checkmark-20" size="sm" />
      </div>
      <hr />
      <h2>Icon Buttons</h2>
      <div className="flex items-center gap-2 text-yellow-300">
        <IconButton
          onClick={() => console.log("icon button click")}
          alt="first"
          src="/assets/icons.svg#close-24"
          size="lg"
        />
        <IconButton
          onClick={() => console.log("icon button click")}
          alt="first"
          src="/assets/icons.svg#close-20"
          size="sm"
        />
      </div>

      <h2>Icon Buttons disabled</h2>
      <div className="flex items-center gap-2 text-yellow-300">
        <IconButton
          onClick={() => console.log("icon button click")}
          disabled
          alt="first"
          src="/assets/icons.svg#close-24"
          size="lg"
        />
        <IconButton
          onClick={() => console.log("icon button click")}
          alt="first"
          src="/assets/icons.svg#close-20"
          size="sm"
          disabled
          disabledClassName="text-gray-600"
        />
      </div>
      <hr />
      <h2>Button variants</h2>
      <div className="flex items-center gap-2 py-4">
        <Button onClick={() => {}}>No Props (primary)</Button>
        <Button variant="secondary" onClick={() => {}}>
          secondary
        </Button>
        <Button variant="tertiary" onClick={() => {}}>
          tertiary
        </Button>
      </div>
      <h2>Button Sizes</h2>
      <div className="flex items-center gap-2 py-4">
        <Button size="sm" onClick={() => null}>
          small
        </Button>
        <Button onClick={() => null}>medium (default)</Button>
        <Button size="lg" onClick={() => null}>
          large
        </Button>
      </div>
      <h2>Inputs</h2>
      <div className="flex items-center gap-2 py-4">
        <Input
          size="sm"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          type="text"
          iconButtonSrc="/assets/icons.svg#close-24"
          onIconButtonClick={() => setInputText("")}
        />

        <Input
          label="this is a label"
          size="lg"
          onChange={(e) => console.log(e.target.value)}
          type="text"
        />
      </div>
    </div>
  );
};

export default Playground;
