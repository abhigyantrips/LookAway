import { os, events } from "@neutralinojs/lib";

export async function setupTray() {
	if (!window.NL_ARGS) {
		console.log("Tray setup skipped, not running in Neutralinojs environment.");
		return;
	};

	await os.setTray({
		icon: "/resources/icons/icon.png",
		menuItems: [
			{
				id: "show",
				text: "Show",
			},
			{
				id: "reset",
				text: "Reset",
			},
			{
				id: "quit",
				text: "Quit",
			}
		]
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