document.getElementById("introBtn").addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById("intro").classList.remove("displayNone");
  document.getElementById("mainSection").classList.add("displayNone");
});

document.getElementById("workBtn").addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById("work").classList.remove("displayNone");
  document.getElementById("mainSection").classList.add("displayNone");
});

document.getElementById("aboutBtn").addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById("about").classList.remove("displayNone");
  document.getElementById("mainSection").classList.add("displayNone");
});

document.getElementById("contactBtn").addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById("contact").classList.remove("displayNone");
  document.getElementById("mainSection").classList.add("displayNone");
});

const mmm = document.querySelectorAll("section.tabSection>a>i").forEach(el => el.addEventListener('click', (e) => {
  e.preventDefault();
  e.target.parentElement.parentElement.classList.add("displayNone");
  document.getElementById("mainSection").classList.remove("displayNone");
}));
