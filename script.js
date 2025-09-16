function openTab(tabId) {
  let tabs = document.querySelectorAll(".tab");
  let links = document.querySelectorAll(".sidebar li");

  tabs.forEach(t => t.classList.remove("active"));
  links.forEach(l => l.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}
