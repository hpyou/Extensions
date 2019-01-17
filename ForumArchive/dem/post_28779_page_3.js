[{"Owner":"jerome","Date":"2017-03-22T17:35:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ll complete the last part of the code before the end of the week (hope so). Then I will write the documentation... painful work because_co_ although the API is quite simple_co_ there_t_s much to explain.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-23T15:43:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMaybe I was too optimistic by saying I could finish by the end of this week _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ I just can_t_t have a working function getHeightAt(x _co_z)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2017-03-23T16:46:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_168413_qt_ data-ipsquote-contentid_eq__qt_28779_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1490283813_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t54 minutes ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMaybe I was too optimistic by saying I could finish by the end of this week _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ I just can_t_t have a working function getHeightAt(x _co_z)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tKeep at it!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTerrain is a tricky topic but you_t_re smart so I_t_m sure you will get it _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCould you make an example with the terrain view distance of about 1km? I_t_d love to see how this performs on larger scenes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-24T15:47:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat would a terrain be without some collision detection features ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the first working prototype of _lt_em_gt_terrain.getHeightFromMap(x _co_z)_lt_/em_gt_ in action _dd_ _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/terrain.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/terrain.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot yet documented (*)_co_ but already working _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/DynamicTerrain/dist_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/DynamicTerrain/dist_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(*) Actually all the methods are documented in code comments_co_ so if you generate a doc from the code_co_ you can already get the API documentation.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-27T18:59:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tToday_t_s extension repo update is a complete reimplementation of the internal geometry update_co_ faster than the standard ribbon update because it deals only with low level float32 arrays directly instead of BJS objects (vectors3_co_ colors4_co_ etc) and it embbeds within the same loop the terrain computation_co_ the mesh geometry computation and its bounding box computation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo one loop instead of three.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe legacy ribbon object_co_ provided in the BJS core_co_ was also a bit improved to morph quickly_co_ GC and optimizer-wise.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ I still need to add two or three more little and useful methods for the user_co_ like returning the terrain normal at the coordinates (x_co_ z) or a boolean to check if the world coordinates (x_co_ z) are currently also in the terrain (both almost done)_co_ before starting to write some documentation and code some examples.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe toy will be released very soon _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-28T15:13:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfirst version completed and on-line _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/DynamicTerrain_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/DynamicTerrain_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnow it_t_s doc writing and example coding time for me ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-28T17:02:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe best part _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-28T17:15:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\taaarg\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-29T09:52:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tdoc started _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-30T14:12:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tsome first examples to understand the terrain _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-31T15:03:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tdoc half done at this time\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsame URL\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-04-03T14:39:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmore doc again and more examples _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill in progress but already usable/readable _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-04-07T17:09:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCool!_lt_br /_gt_\n\tI started experimenting with this_co_ but I think I still not get LODLimits._lt_br /_gt__lt_br /_gt_\n\tI would like a terrain like this_dd__lt_br /_gt__lt_br /_gt_\n\t- near_co_ lod 0_co_ 128x128 meters_co_ 0.5m/texel (the resolution of the heightmap_co_ and the material splatmap. 256x256 quads)_lt_br /_gt_\n\t- far_co_ lod 1 1024x1024 meters_co_ 4m/texel (this is like 1/8 resolution. 256x256 quads)_lt_br /_gt_\n\t- environment (mountains)_co_ lod 2 10240x10240 meters_co_ 20m/texel (1/40 resolution. 512x512 quads) Edit_dd_ It can be 1/32 resolution_co_ it does not matter really._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tHow can I do this?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-04-07T17:39:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthe full height map would be 20480x20480_co_ and that_t_s about 3.4G in memory (just the heightmap)_co_ so that_t_s impossible to download and have in memory._lt_br /_gt_\n\tI_t_m thinking of some kind of patch loading._lt_br /_gt_\n\tNow I_t_m using two groundheightmaps_co_ one is 10kmx10km 512x512_co_ one is 1280x1280m 256x256.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-04-07T19:06:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m off this next week_co_ I_t_ll tell you when I_t_m back\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe main idea is this one _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe initial LOD is the factor between the terrain quads and the map quads _eq_&gt_sm_ 1 (default) means 1 terrain quad matches 1 map quad\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2 means 1 terrain quad matches 2 map quads on X axis and 2 map quads on Z axis_co_ so 4 map quads\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3 means 1 terrain quad matches 9 (3 x 3) map quads_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand so on\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen you set a LODLimit_co_ this means that the terrain quads under this limit around the terrain perimeter have their LOD factor incremented\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLODLimits _eq_ [2]   _eq_&gt_sm_ consider the 2 rows and columns of quads around the terrain... they have their LOD factor equal incremented from the initial one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the initial LOD is 1 (default)_co_ their LOD factor is 2... In this case_co_ the central terrain quads match each 1 map quad and the perimetric terrain quad (under 2 rows/columns) match each 4 (2 x 2) map quads.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe this picture can help to understand _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_terrainLOD.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_587_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/terrainLOD.png.fc3f7c86ca845ec0f44c927fbcfefa36.png_qt_ width_eq__qt_1000_qt_ data-fileid_eq__qt_11932_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIn this example_co_ the LODLimits is visibly [6_co_ 4]. Have a look only at the squared quads from one terrain corner.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t6 quads  from the edge in totla have a LOD factor higher than the central ones\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand from these 6_co_ 4 have again a LOD higher\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe terrain doesn_t_t know any measurement but only map quads. It can fit 1_co_ 4_co_ 9_co_ 16_co_ etc map quads (for the squared quads_co_ the others are automatically computed)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]