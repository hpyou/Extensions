[{"Owner":"Bman84","Date":"2016-05-11T08:44:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo_co_ I am trying to make a room_co_ lit up with some lights.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI use blender v2.77a on GNU/linux_co_ blenderexporter 4.4.4 and I am testing the result in the babylonJS sandbox online.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_o_1aiffbrg81ca26dl1l6p1t9mbg0a_qt_ src_eq__qt__qt_ alt_eq__qt__qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_o_1aiffbrg81ca26dl1l6p1t9mbg0a_qt_ src_eq__qt__qt_ alt_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tl the walls have the same purple material_co_ the floor has a gray material and the two boxes have a red solid material._lt_br /_gt_\n\tThe light is a spot light_co_ under a certain angle_co_ and a larger size_co_ the light values are otherwise unchanged from default._lt_br /_gt_\n\tYou can see the the issue in the attached files_co_ the babylonresult.jpg looks crazy compared to what blender _qt_previews_qt_. The middle wall is lit on both sides_co_ even though the light is on one side only_co_ there are no shadows_co_ the rightmost wall is not lit at all and the light on the floor seems constant_co_ regardless of distance from source.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan someone please point me into a direction where I can learn of my wrongdoings?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tThe .blend_co_ .babylon and the log are also attached.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you in advance!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBorut\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/babylonresult.jpg.4e9f2467c0a0174053b6dea172e8e48d.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7609_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/babylonresult.thumb.jpg.897b1240f211b6e8a3453cb3f337d72a.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_babylonresult.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/belndermaterial.jpg.5466f943606b1dc047f732cf59e84b6b.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7610_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/belndermaterial.thumb.jpg.3da605e64e5768a702bcf30ff11c6f67.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_belndermaterial.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/blendersolid.jpg.28758a5c361a6413a5964b29824436f7.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7611_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/blendersolid.thumb.jpg.9734b28729d887ab63a207132ea97076.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_blendersolid.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_7612_qt__gt_ctest.blend_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_7613_qt__gt_ctest.babylon_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_7614_qt__gt_ctest.log_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-05-11T17:25:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry not a lot of time today.  Best guess looking the pictures (did not read the text)_co_ you have a normals / culling problem.  The inside of the cube is the backside.  If you are never going to see both the inside &amp_sm_ outside of a mesh_co_ flip your normals in Blender.\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tswitch to edit mode\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tselect all (A)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tmenu_dd_ Mesh-&gt_sm_Normals-&gt_sm_Flip Normals\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tIf you do need to see both_co_ turn off culling. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage_qt_ src_eq__qt_https_dd_//raw.githubusercontent.com/BabylonJS/Extensions/master/QueuedInterpolation/Blender/doc-assist/gameRenderSettings.png_qt_ alt_eq__qt_gameRenderSettings.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFor entire manual_co_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender_qt_ rel_eq__qt_external nofollow_qt__gt_see_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-11T18:06:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  Welcome to the forum_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21581-bman84/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21581_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21581-bman84/_qt_ rel_eq__qt__qt__gt_@Bman84_lt_/a_gt_!  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2FNT2E%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2FNT2E#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTested our spotlight _lt_em_gt_range_lt_/em_gt_ settings (lines 47-50)... working fine for spotlight falloff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tChecking bottom of bman_t_s .babylon file...\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\n_qt_lights_qt__dd_[{_qt_name_qt__dd__qt_Spot_qt__co__qt_id_qt__dd__qt_Spot_qt__co__qt_type_qt__dd_2_co__qt_position_qt__dd_[-2.7973_co_3.4862_co_-5.8656]_co__qt_direction_qt__dd_[0.433_co_-0.5_co_0.75]_co__qt_angle_qt__dd_1.3963_co__qt_exponent_qt__dd_0.3_co__qt_intensity_qt__dd_1_co__qt_diffuse_qt__dd_[1_co_1_co_1]_co__qt_specular_qt__dd_[0_co_0_co_0]}]_co_\n_qt_shadowGenerators_qt__dd_[]\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tShadowGenerator array is empty_co_ and no mention of any _qt_range_qt_ for that light.  So... yep... we got trouble... right here in River City.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Bman_co_ please look for reasons why Blender might not include those things... in its exports.  I_t_m sure JC and other pros on this subject... will comment more soon.  Again_co_ welcome_co_ Bman... and thanks for finding this issue... well done.  (Wingnut tries waving a magic wand to make it all better_co_ but it has no affect.)  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-11T19:14:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Bman84_co_ welcome to the forum_dd_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe reason there are no shadows is_co_ as Wingy points out_co_ you have not created a shadow generator and not set the properties of objects that cast and receive shadows . (See image below.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_1. Objects that cast/receive shadows _lt_/strong_gt_- Select each object then in the object properties (little blue triangle) you will find the exporter (4.5 in my case) check the appropriate boxes (A in image below). Do that for all the objects that will be involved. So floor and wall objects will _qt_receive shadows_qt__co_ middle wall/boxes will _qt_cast shadows_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. _lt_strong_gt_The Light - _lt_/strong_gt_This is the cause of the shadows and you need to create a shadow map. Select the light then chose the type of shadow map from the drop down box in the exporter properties for the light.. (B in the image below)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill look at it more later today.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/shadows.png.3eb4c98259623e2e17a815e0045ef5ab.png_qt_ data-fileid_eq__qt_7626_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_shadows.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7626_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/shadows.png.3eb4c98259623e2e17a815e0045ef5ab.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"razieh","Date":"2018-10-01T09:25:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_128121_qt_ data-ipsquote-contentid_eq__qt_22492_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1462989970_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 5/11/2016 at 8_dd_06 PM_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi guys.  Welcome to the forum_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21581-bman84/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21581_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21581-bman84/_qt_ rel_eq__qt__qt__gt_@Bman84_lt_/a_gt_!  \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2FNT2E%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2FNT2E#4_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTested our spotlight _lt_em_gt_range_lt_/em_gt_ settings (lines 47-50)... working fine for spotlight falloff.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tChecking bottom of bman_t_s .babylon file...\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_\n_lt_span_gt__qt_lights_qt__lt_/span_gt__lt_span_gt__dd__lt_/span_gt_[{_lt_span_gt__qt_name_qt__lt_/span_gt__lt_span_gt__dd__lt_span_gt__qt_Spot_qt__lt_/span_gt__lt_/span_gt__co__lt_span_gt__qt_id_qt__lt_/span_gt__lt_span_gt__dd__lt_span_gt__qt_Spot_qt__lt_/span_gt__lt_/span_gt__co__lt_span_gt__qt_type_qt__lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span_gt_2_lt_/span_gt__co__lt_span_gt__qt_position_qt__lt_/span_gt__lt_span_gt__dd__lt_/span_gt_[-_lt_span_gt_2.7973_lt_/span_gt__co__lt_span_gt_3.4862_lt_/span_gt__co_-_lt_span_gt_5.8656_lt_/span_gt_]_co__lt_span_gt__qt_direction_qt__lt_/span_gt__lt_span_gt__dd__lt_/span_gt_[_lt_span_gt_0_lt_/span_gt_._lt_span_gt_433_lt_/span_gt__co_-_lt_span_gt_0_lt_/span_gt_._lt_span_gt_5_lt_/span_gt__co__lt_span_gt_0_lt_/span_gt_._lt_span_gt_75_lt_/span_gt_]_co__lt_span_gt__qt_angle_qt__lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span_gt_1.3963_lt_/span_gt__co__lt_span_gt__qt_exponent_qt__lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span_gt_0_lt_/span_gt_._lt_span_gt_3_lt_/span_gt__co__lt_span_gt__qt_intensity_qt__lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span_gt_1_lt_/span_gt__co__lt_span_gt__qt_diffuse_qt__lt_/span_gt__lt_span_gt__dd__lt_/span_gt_[_lt_span_gt_1_lt_/span_gt__co__lt_span_gt_1_lt_/span_gt__co__lt_span_gt_1_lt_/span_gt_]_co__lt_span_gt__qt_specular_qt__lt_/span_gt__lt_span_gt__dd__lt_/span_gt_[_lt_span_gt_0_lt_/span_gt__co__lt_span_gt_0_lt_/span_gt__co__lt_span_gt_0_lt_/span_gt_]}]_co_\n_lt_span_gt__qt_shadowGenerators_qt__lt_/span_gt__lt_span_gt__dd_[]_lt_/span_gt_\n}_lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\tShadowGenerator array is empty_co_ and no mention of any _qt_range_qt_ for that light.  So... yep... we got trouble... right here in River City.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Bman_co_ please look for reasons why Blender might not include those things... in its exports.  I_t_m sure JC and other pros on this subject... will comment more soon.  Again_co_ welcome_co_ Bman... and thanks for finding this issue... well done.  (Wingnut tries waving a magic wand to make it all better_co_ but it has no affect.)  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tis it possible that we have a realistic light...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-10-01T15:11:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ see _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/37968-lamps-on-babylon-open-contest/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/37968-lamps-on-babylon-open-contest/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhether this can be expressed in a JSON (.babylon) file_co_ or further into one made by Blender is unknown.  Let us know.  Good luck.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]