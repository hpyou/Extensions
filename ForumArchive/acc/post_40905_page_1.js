[{"Owner":"brean","Date":"2018-10-27T21:05:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am building a openstreetmap-integration to Babylon.js and I like to only load tiles that need to be shown and dispose tiles that are not visible anymore.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo do that I need some way to figure out what tiles are in the view. I already found BABYLON.Vector3.Unproject which I could feed with the screen width/height divided by 2 in all directions to calculate the dimensions of the viewport in babylon coordinates.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI only manage to get this working when the camera is directly in front of the screen_co_ so I need to figure out how the distance from the camera to the screen can be used_co_ see_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ZFXWSF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#ZFXWSF_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Can anyone tell me how I get the dimensions of the viewport at a cirtain distance in babylon coordinates?_lt_/strong_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ssaket","Date":"2018-10-28T05:04:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_233029_qt_ data-ipsquote-contentid_eq__qt_40905_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1540674314_qt_ data-ipsquote-userid_eq__qt_13421_qt_ data-ipsquote-username_eq__qt_brean_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ brean said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI am building a openstreetmap-integration to Babylon.js and I like to only load tiles that need to be shown and dispose tiles that are not visible anymore._lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHello.. this seems like a LOD problem (_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_lod_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_use_lod_lt_/a_gt_)_co_ but based on your post_co_  you can also try isInFrustum method._lt_br /_gt_\n\tFew PGs that are already available _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#12D0ST%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#12D0ST#1_lt_/a_gt__co_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#050P3M%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#050P3M#1_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tEDIT_dd_ If I am not wrong_co_ then viewport would be constant irrespective of camera_t_s movement.. but again_co_ I am not sure. Maybe someone from core team should be able to answer. _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brean","Date":"2018-10-29T09:27:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey ssaket_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ that is helpful_co_ this way I can check which tiles to dispose_co_ thank you!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I still don_t_t know how many tiles to load at the beginning. I could just create one tile in the middle of the screen_co_ then add neighbouring tiles in all directions_co_ check if they are in the frustum_co_ if so load the map texture and then check their neighbors but maybe there is a better way to do that_sm_ get the width/height directly and calculate how many tiles to load from?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brean","Date":"2018-10-29T14:33:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI ended up using this_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#050P3M%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#050P3M#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(its using frustrum to check if tiles are visible)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]