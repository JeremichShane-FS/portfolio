let copyright = document.getElementById("footer__text");
let year = new Date().getFullYear();
let url = "https://www.shanejeremich.com";
let submitBtn = document.getElementById("btn");

copyright.innerHTML = `&copy; Copyright ${year} | 
  <a href=${url} target="_blank">Shane Jeremich</a>
  <p>Interfaces and Usability | October 22nd, 2023</p>`;

submitBtn.addEventListener("click", e => e.preventDefault());
