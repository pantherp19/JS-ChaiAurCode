console.log("hello");

document.addEventListener("keypress", (e) => {
  document.querySelector(".key").innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>key num</th>
  </tr>
  <tr>
    <td>${e.key == " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`;
});
