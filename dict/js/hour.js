const data = document.querySelector("#data_number");
if(data){
  const itemYear = document.querySelector("#itemYear");
  const itemMonth = document.querySelector("#itemMonth");
  const itemDays = document.querySelector("#itemDays");
  timeend = new Date(parseInt(itemYear.textContent),parseInt(itemMonth.textContent - 1),parseInt(itemDays.textContent));
  function time() {
    today = new Date();
    today = Math.floor((timeend - today) / 1000);
    tsec = today % 60;
    today = Math.floor(today / 60);
    if (tsec < 10) tsec = "0" + tsec;
    tmin = today % 60;
    today = Math.floor(today / 60);
    if (tmin < 10) tmin = "0" + tmin;
    thour = today % 24;
    today = Math.floor(today / 24);
    parseInt(document.querySelector(".timer__days").innerHTML = today);
    parseInt(document.querySelector(".timer__hours").innerHTML = thour);
    parseInt(document.querySelector(".timer__minutes").innerHTML = tmin);
  }
  window.setTimeout(time(), 1000);
}