import { app, events, init, window } from '@neutralinojs/lib';
import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import { setupTray } from './lib/tray';

const App: Component = () => {
  onMount(async () => {
    if (globalThis.window.NL_ARGS) {
      init();
      await setupTray();
      await window.hide();

      events.on('windowClose', () => {
        app.exit();
      })
    }
  });

  return (
    <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
  );
};

export default App;