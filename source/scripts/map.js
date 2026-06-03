/* global L:readonly */

const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const coffeeGoMarker = L.icon({
  iconUrl: '/icons/stack.svg#icon-map-marker',
  iconAnchor: [19, 50]
});


const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: coffeeGoMarker,
  },
);

marker.addTo(map);
