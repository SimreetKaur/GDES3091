console.log("test");

$(function (){
      $().timelinr({
            orientation: 'vertical',
            containerDiv: '#timeline',
    		datesDiv: '#dates',
    		datesSelectedClass: 'selected',
    		datesSpeed: 'normal',
    		issuesDiv: '#issues',
    		issuesSelectedClass: 'selected',
            issuesSpeed: 500,
            datesSpeed: 100,
            arrowKeys: 'true',
            startAt: 1,


      }

            )
})

var map = L.map('mapid').setView([43, -80], 5);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ackHnqB3QZCwl7wrDSM9', {
	attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
	}).addTo(map);

var marker = L.marker([43.670950, -79.341590]).addTo(map);
marker.bindPopup("<b>Shromani Sikh Society</b><br>269 Pape Avenue, Toronto").openPopup();

var marker = L.marker([45.338720, -75.703600]).addTo(map);
marker.bindPopup("<b>Ottawa Sikh Society</b><br>25 Gurdwara Road, Ottawa").openPopup();

var marker = L.marker([42.976360, -81.161450]).addTo(map);
marker.bindPopup("<b>London Sikh Society</b><br>37 Clarke Road, London").openPopup();

var marker = L.marker([46.522099, -80.953033]).addTo(map);
marker.bindPopup("<b>Sikh Cultural Centre</b><br>Sudbury, Ontario").openPopup();

var marker = L.marker([42.277140, -82.890080]).addTo(map);
marker.bindPopup("<b>Sikh Cultural Society of Metropolitan Windsor</b><br>7955 County Rd 42, Windsor").openPopup();

var marker = L.marker([42.277140, -82.890080]).addTo(map);
marker.bindPopup("<b>Ontario Khalsa Darbar</b><br>7080 Dixie Road, Mississauga").openPopup();

var marker = L.marker([43.180520, -80.248720]).addTo(map);
marker.bindPopup("<b>Sikh Association of Brantford</b><br>483 Park Road, Brantford").openPopup();

var marker = L.marker([43.708660, -79.651230]).addTo(map);
marker.bindPopup("<b>Sri Guru Singh Sabha</b><br>7280 Airport Road, Malton, Mississauga").openPopup();

var marker = L.marker([39.618910, -85.203090]).addTo(map);
marker.bindPopup("<b>Golden Triangle Sikh Association</b><br>2070 Snyder’s Road, Kitchener").openPopup();

var marker = L.marker([43.667250, -79.393540]).addTo(map);
marker.bindPopup("<b>First Nagar Keertan of Ontario</b><br>Downtown, Toronto").openPopup();

