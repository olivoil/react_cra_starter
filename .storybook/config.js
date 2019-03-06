import "../src/bootstrap";
import { configure, addDecorator } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import withStory from "src/utils/withStory";
import centered from "@storybook/addon-centered/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withSmartKnobs } from "storybook-addon-smart-knobs";

addDecorator(
  withOptions({
    name: "Corvalent Web",
    url: "https://github.com/rocksauce/corvalent-web"
  })
);
addDecorator(withStory);
addDecorator(centered);
addDecorator(withSmartKnobs);
addDecorator(withKnobs);
addDecorator(withInfo());

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  const req = require.context("../src", true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
