window.onload = () => {

     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            
            //camarillo 
            //34.227979, -119.053633

            //camarillo skatepark
            //34.230076, -119.029070
            
            //paul changes should show up
            //lat: 34.100962,
            //lng: -118.252322
            name: 'Magnemite',
            location: {
                lat: 34.227979,
                lng: -119.053633
            }

        }
        /*,
        {
            
          
            name: 'Magnemite',
            location: {
                lat: 34.230076,
                lng: -119.029070
            }

        }
        */

    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        console.log('latitude:' + latitude);

        var model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');
        
        //model.setAttribute('rotation', '0 180 0');
        //model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            console.log("loaded");
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });


        scene.appendChild(model);
        document.querySelector('a-entity').flushToDOM();
        



    });
}