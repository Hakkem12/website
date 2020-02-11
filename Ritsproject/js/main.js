function initmap()
{
    const loc={lat:12.864970, lng:77.655067};

    const map= new google.maps.Map(document.querySelector('.map')
    ,{
        zoom:14,
        center:loc
    });

    const maker=new google.maps.Marker({position:loc,map:map});



}