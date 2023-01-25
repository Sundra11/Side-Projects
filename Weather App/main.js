window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);

            lang = position.coords.latitude;
            lat = position.coords.latitude;

            const api = `ab87c58afa3f493e8eb80435221706`;
        })
    }
});