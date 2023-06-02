const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// This event fires when the browser has detected that a website can be installed as a PWA
window.addEventListener("beforeinstallprompt", (event) => {
  // prevents default behavior of event, which is to show a generic installation prompt
  event.preventDefault();
  //   makes install button (with id `butInstall`) visible and changes its text to `Install!`.
  butInstall.style.visibility = "visible";
  butInstall.textContent = "install";
});

// TODO: Implement a click event handler on the `butInstall` element
// adds an event listener to install button (with id `butInstall`) for the click event that fires when the user clicks the button.
butInstall.addEventListener("click", async (event) => {
  // calls `prompt()` method of event object, which shows a prompt asking user if they want to install app. waits for promise returnded by prompt method to resolve
  event.prompt();
  //   disables install button and changes its text to `Installed!`.
  butInstall.setAttribute("disabled", true);
  butInstall.textContent = "Installed!";
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("✨✨✨ ", " App Installed!", event);
});
