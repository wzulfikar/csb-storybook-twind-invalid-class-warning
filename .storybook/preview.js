import "@storybook/addon-actions/register";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

// This will silent the warning because we passed the `cancelable: true`
window.addEventListener("warning", (event) => {
  // prevent default console.warn(`[<code>] <message>: <detail>`) logging
  event.preventDefault();

  const warning = event.detail;

  // Uncomment to show the actual warning
  // console.warn("actual warning:", warning);
});

// Install twind
import { install, defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
install(defineConfig({ presets: [presetTailwind()] }));

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
