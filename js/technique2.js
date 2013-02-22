$(document).ready(function(){
    var btn_play     = $('#button_play'),
        btn_reset    = $('#button_reset'),
        map_reso_top = $('#map_reso_top'),
        map_reso_btm = $('#map_reso_btm'),
        map_reso_end = $('#map_reso_end'),
        map_city = $('#map_city'),
        map_city_height = map_city.height(),

        // Animate between maps
        transition_start = function(e){
            e.preventDefault();

            map_city.css('opacity', opacity_city);
            map_reso.css('opacity', opacity_reso);
        },

        // Reset animation
        transition_reset = function(){
            e.preventDefault();
        },

        init_maps = function(){
            // Unhide the maps
            $('.map').css('visibility', 'visible');
        }
    
    // Map to slider moving event
    btn_play.on('click', transition_start);
    btn_reset.on('click', transition_reset);
    init_maps();
});
