[{"Owner":"agmcleod","Date":"2014-12-21T20:22:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ me again._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Working on a top down game_dd_ _lt_a href_eq__qt_http_dd_//projects.agmprojects.com/topdown/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//projects.agmprojects.com/topdown/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_After clicking Tap to Start_co_ you should be able to click in a space_co_ and the little cube in the center will follow. It_t_s moving fine_co_ but doesn_t_t collide into other cubes or the walls on the edge. I have the collisionsEnabled on the scene_co_ checkCollisions on each mesh_co_ and added ellipsoid to the player &amp_sm_ other cubes to be safe. Any ideas what I am missing?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s the source if it_t_s easier_dd_ _lt_a href_eq__qt_https_dd_//github.com/agmcleod/wrathofthecube_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/agmcleod/wrathofthecube_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-21T20:49:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I feel that the player cube does not come into collision with other cubes as they are on top of the player._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_It is quite difficult to verify your scene with a lot of code to analyze._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Trying to do a scene with the bare minimum by removing everything that is not necessary to analyze your code more easily._lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this.mesh.position.y _eq_ 2.5_sm_ // try higher values ​​here_lt_/pre_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2014-12-21T20:59:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nope_co_ they all sit on the ground _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can add a #debug to the URL in the scene &amp_sm_ refresh. Disables movement controls and initializes with the freecam instead. Can move around and see they all have an equal bottom._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-21T21:04:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_65268_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_11232_qt_ data-ipsquote-username_eq__qt_agmcleod_qt_ data-cite_eq__qt_agmcleod_qt_ data-ipsquote-timestamp_eq__qt_1419195567_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Can add a #debug to the URL in the scene &amp_sm_ refresh. Disables movement controls and initializes with the freecam instead. Can move around and see they all have an equal bottom._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ but it does not withdraw the amount of code you have written. but this can help_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2014-12-21T21:08:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_locally i tried having the player constantly moveWithCollisions 0.2x 0.2z_co_ and yeah it hit a box_co_ and shifted not 100% under_co_ but maybe had 1/4 of the box still sticking up after. So the collision is definitely happening_co_ just not the response I_t_m looking for._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Adding checkCollisions _eq_ true to the ground plane (realized that_t_s not in the CreateGround code of the engine)_co_ it works much better. Getting some really weird slow velocities though when approaching boxes_co_ like it_t_s lagging. But then when i move around some more_co_ it moves smoothly_co_ and goes right up to the edge of the box._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-21T21:11:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here I have a scene  that works with collisions that also uses _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_moveWithCollisions_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_source_dd_ _lt_a href_eq__qt_http_dd_//www.castorengine.com/babylon/moveCharacter/Scene.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.castorengine.com/babylon/moveCharacter/Scene.js_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_scene_dd_ _lt_a href_eq__qt_http_dd_//www.castorengine.com/babylon/moveCharacter/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.castorengine.com/babylon/moveCharacter/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_try add _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_mesh_lt_/span_gt_.ellipsoidOffset _lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt__eq__lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt_new_lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(121_co_93_co_163)_sm__qt__gt_BABYLON.Vector3_lt_/span_gt_(_lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm__qt__gt_0_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm__qt__gt_1.0_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm__qt__gt_0_lt_/span_gt_)_sm__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2014-12-21T21:21:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Works a little better. I have it moving towards a corner when debug mode is on. Oddly though it moves up its Y coordinate once getting close to the corner. No meshes aside from the ground underneath the cube. I can force correct the y coordinate (as it should always be 0.5)_co_ but not sure if that_t_s really ideal._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]