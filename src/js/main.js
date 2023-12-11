const formUrl = document.querySelector("form.url");



formUrl.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = formUrl.querySelector("input").value;

    if(!url) {
      alert("Please enter a URL");
        return;
    }

    sessionStorage.setItem("url", url);
    return window.location.assign("qrcode.html");

});
