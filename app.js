let btn = document.querySelector("#btn");

btn.addEventListener("click", searchNames);

function searchNames() {
  document.querySelector("#results").innerHTML = "";
  let text = document.querySelector("#text").value;
  const config = { headers: { Accept: "application/json" } };

  let userRes = "https://api.tvmaze.com/search/shows?q=" + text;

  axios
    .get(userRes, config)
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        let result = res.data[i].show.name;
        let child = document.createElement("ul");
        child.innerHTML = `${i + 1}` + ")   " + result;
        document.querySelector("#results").appendChild(child);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}
