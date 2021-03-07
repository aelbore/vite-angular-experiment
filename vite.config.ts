import { defineConfig, Plugin } from 'vite'
import { ngcPlugin, Options } from 'rollup-plugin-ngc'

function ngVitePlugin(options?: Options) {
  /// @ts-nocheck
  /// @ts-ignore
  const plugin: Plugin = {
    ...ngcPlugin({ ...options, rootDir: './src' }),
    async handleHotUpdate({ server, file}) {
      const module = server.moduleGraph.getModulesByFile(file);
      return Array.from(module);
    },
    name: "vite-plugin-angular"
  };
  return plugin;
}

export default defineConfig({
  plugins: [ ngVitePlugin() ]
})