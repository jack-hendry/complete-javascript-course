'use strict';

// prettier-ignore

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// var map = L.map('map').setView([51.505, -0.09], 13);
let lat;
let lng;
let coords;
let map;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // The user's latitude and longitude are in position.coords.latitude and position.coords.longitude
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    lat = position.coords.latitude;
    lng = position.coords.longitude;

    coords = [lat, lng];
    console.log(lat, lng);
    map = L.map('map').setView(coords, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on('click', function (mapEvent) {
      // map = mapEvent;

      const { lat, lng } = mapEvent.latlng;
      // form.classList.remove('hidden');
      // inputDistance.focus();

      L.marker([lat,lng]).addTo(map).bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',

        })
      ).setPopupContent('Workout').openPopup();

      form.classList.remove('hidden');
      inputDistance.focus();
    });
    
  });


  
}



// console.log(map)
