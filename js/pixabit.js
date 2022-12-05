var API_KEY = '2688634-9b098bc1ac94906f65d7c83e7';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
});

const mi_fecha = new Date();
document.getElementById('year').innerHTML = mi_fecha.getFullYear();