$(function(){
    var slider = $('#slider_control'),
        map_reso = $('#map_reso'),
        map_city = $('#map_city'),
        map_city_height = map_city.height(),

        // Handle slider animation
        transition_maps = function(){
            var x = slider.val(),
                // Exponentially adjust opacity
                opacity = Math.log(1+(Math.exp(1)-1)*x/100)

            map_city.css('opacity', 1-opacity);
            map_reso.css('opacity',   opacity);
        },
        init_maps = function(){
            transition_maps();
            // Unhide the maps
            $('.map').css('visibility', 'visible');
        }
    
    // Map to slider moving event
    slider.on('change', transition_maps);
    init_maps();
});
