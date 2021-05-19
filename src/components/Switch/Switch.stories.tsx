import React from "react";
import { ReSwitch } from "./Switch";

export default {
  title: "Switch",
  component: ReSwitch,
  argTypes: {
    background: { control: "color" },
  },
};

export const Example = () => {
  return <ReSwitch />;
};

// export const Primary: React.VFC<{}> = () => <Button primary>Button</Button>;
