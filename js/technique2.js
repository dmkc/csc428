$(document).ready(function(){
    var container = $('#map_container'),
        btn_play  = $('#button_play'),
        btn_restart = $('#button_restart'),
        states = ['animation_0', 'animation_1', 'animation_2', 
            'animation_3', 'animation_4'],
        cur_state = 0,
        interval = undefined,

        /*
         * Begin transition.
         */
        transition_start = function(e){
            e.preventDefault();
            cur_state = 0;

            interval = setInterval(function(){
                transition_animate();
            }, 1500);
        },

        /* 
         * Animate between transitions
         */
        transition_animate = function(){
            // Done animation
            if (states.length == cur_state+1) {
                return transition_reset();
            }

            cur_state++;
            next_state = states[cur_state];
           
            container[0].classList = next_state;
        },

        /* 
         * Reset transition.
         */
        transition_reset = function(e){
            e.preventDefault();

            clearInterval(interval);
            container[0].className = "animation_0";
            return;
        },

        /* 
         * Get this party started.
         */
        init_maps = function(){
            // Unhide the maps
            $('.map').css('visibility', 'visible');
        }
    
    // Map to slider moving event
    btn_play.on('click',  transition_start);
    btn_restart.on('click', transition_reset);
    init_maps();
});
