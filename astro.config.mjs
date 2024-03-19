import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // ...s
  // site: "jabreu96.github.io",
  // base: "/astro-portfolio",
  publicDir: './public',
  postcss: [tailwind('./tailwind.config.js')
    // ...
  ],

  integrations: [tailwind(), react()]
});

// export default {
//   // ...
//   postcss: [
//     tailwind('./tailwind.config.js'),
//     // ...
//   ],
// };