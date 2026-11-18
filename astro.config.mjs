import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://amirhosein-fahimi.vercel.app',
  output: 'static',
  integrations: [icon()],
});
