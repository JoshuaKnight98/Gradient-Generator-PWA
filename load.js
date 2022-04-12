if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("rEGISTRO EXITOSO"))
    .catch((err) => console.log("ERROR AL REGISTRAR", err));
}