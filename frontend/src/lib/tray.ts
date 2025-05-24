import { os, events } from "@neutralinojs/lib";

export async function setupTray() {
	if (!window.NL_ARGS) return;

	await os.setTray({
		icon: "/resources/icons/icon.png",
		menuItems: []
	})

	await events.on('trayMenuItemClicked', (event) => {
		switch(event.detail.id) {
		  case 'show':
			Neutralino.window.show();
			break;
		  case 'reset':
			break;
		  case 'quit':
			Neutralino.app.exit();
			break;
		}
	  });
}