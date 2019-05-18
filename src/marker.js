import mapboxgl from 'mapbox-gl';
function markerCreator(category,coordsArr){
let link ="http://i.imgur.com/WbMOfMl.png";
    switch(category){
        case "hotel": 
        link = "http://i.imgur.com/D9574Cu.png";
        break;
        case "activities":
        link="http://i.imgur.com/WbMOfMl.png";
        break;
        case "restaurants":
        link="http://i.imgur.com/cqR6pUI.png";
        break;
    }
    let newDiv = document.createElement("div");
newDiv.style.width = '32px';
newDiv.style.height = '39px';
newDiv.style.backgroundImage = `url(${link})`;
return new mapboxgl.Marker(newDiv).setLngLat(coordsArr);// this is a merker obj
}



export default markerCreator;
