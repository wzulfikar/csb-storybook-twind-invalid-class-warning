import "@storybook/addon-actions/register";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

// Install twind
import { install, defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
install(defineConfig({ presets: [presetTailwind()] }));

// This should override the warning but it didn't.
// Instead, it shows as two different warnings:
// ```
// warn: (2) ["[TWIND_INVALID_CLASS] Unknown class "sb-show-main" found.", Object]
// warn: (2) ["actual warning:", Object]
// ```
window.addEventListener("warning", (event) => {
  // prevent default console.warn(`[<code>] <message>: <detail>`) logging
  event.preventDefault();

  const warning = event.detail;

  // { message: '...', code: 'TWIND_INVALID_CLASS', detail: '<className>'}
  // { message: '...', code: 'TWIND_INVALID_CSS', detail: '<css>'}
  console.warn("actual warning:", warning);
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
