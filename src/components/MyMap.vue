<template>
    <div>
   <h3 class="text-center text-red">My Location</h3>
   <div id="map" style="height:50vh;"></div>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';

const initialMap = ref(null);

onMounted(()=> {
    initialMap.value = L.map('map').setView([38.4576951622896,  27.118622810162908], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 25, 
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initialMap.value);
    L.marker([38.455262055869646,  27.120144961657527]).addTo(initialMap.value).bindPopup("Karşıyaka İskele").openPopup();
   
});
</script>