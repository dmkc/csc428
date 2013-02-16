$(document).ready(function(){
    var slider = $('#slider_control'),
        map_reso = $('#map_reso'),
        map_city = $('#map_city'),
        map_city_height = map_city.height(),

        // Apply log to x to for exponential opacity rolloff; 0<=x<=100
        opacity_log = function(x){
            return Math.log(1+(Math.exp(1)-1)*x/100);
        },

        // Handle slider animation
        transition_maps = function(){
            var x = slider.val(),
                // Exponentially adjust opacity
                //opacity_reso = x/100,
                opacity_reso = opacity_log(x),
                opacity_city = opacity_log(100-x)


            map_city.css('opacity', opacity_city);
            map_reso.css('opacity', opacity_reso);
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
