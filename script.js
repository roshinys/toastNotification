var btn = document.getElementById("btn");
var container = document.getElementById("container");

btn.addEventListener("click", () => {
  var notif = document.createElement("div");
  notif.className = "toast";
  notif.innerText = "This is a toast notification";
  container.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);
});
