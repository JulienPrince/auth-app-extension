# Component PluginAuth

**Compatible with Quasar UI v2 and Vue 3**.

# Component PluginAuth

> Short description of the component

# Usage

## Quasar CLI project

Install the [App Extension](../app-extension).

**OR**:

Create and register a boot file:

```js
import Vue from "vue";
import Plugin from "quasar-ui-plugin.auth/src/index.js";

Vue.use(Plugin);
```

**OR**:

```html
<script>
  import { Component as PluginAuth } from "quasar-ui-plugin.auth/src/index.js";

  export default {
    components: {
      PluginAuth,
    },
  };
</script>
```

## Vue CLI project

```js
import Vue from "vue";
import Plugin from "quasar-ui-plugin.auth/src/index.js";

Vue.use(Plugin);
```

**OR**:

```html
<script>
  import { Component as PluginAuth } from "quasar-ui-plugin.auth/src/index.js";

  export default {
    components: {
      PluginAuth,
    },
  };
</script>
```

## UMD variant

Exports `window.pluginAuth`.

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link
    href="https://cdn.jsdelivr.net/npm/quasar-ui-plugin.auth/dist/index.min.css"
    rel="stylesheet"
    type="text/css"
  />
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/quasar-ui-plugin.auth/dist/index.umd.min.js"></script>
</body>
```

If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):

```html
<link
  href="https://cdn.jsdelivr.net/npm/quasar-ui-plugin.auth/dist/index.rtl.min.css"
  rel="stylesheet"
  type="text/css"
/>
```

# Setup

```bash
$ yarn
```

# Developing

```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

# Adding Testing Components

in the `ui/dev/src/pages` you can add Vue files to test your component/directive. When using `yarn dev` to build the UI, any pages in that location will automatically be picked up by dynamic routing and added to the test page.

# License

MIT (c) BriceIndrianarison <brice@sowellapp.com>
