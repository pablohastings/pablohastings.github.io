//window.onload = () => {

     
//};

function setUp() {
    let places = staticLoadPlaces();
    renderPlaces(places);
}

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 34.100962,
                lng: -118.252322,
            }

        }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        console.log('latitude:' + latitude);

        var model = document.createElement('a-entity');
        /*
        model.setAttribute('gps-entity-place', 'latitude: ${latitude}; longitude: ${longitude};');
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');
        */
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            console.log("loaded");
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });


//var box = document.createElement('a-box');
//document.querySelector('a-scene').appendChild(box);
//box.setAttribute('position', {x: 0, y: 10, z: -10});

        scene.appendChild(model);
        



    });
}

setUp();