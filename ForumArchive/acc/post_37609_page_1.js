[{"Owner":"guzuomuse","Date":"2018-05-13T05:17:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi_co_i want to the import mesh has the same default settings with the built-in mesh( like_dd_Babylon.Mesh.createSphere.createCylinder....)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thow to do that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor now the imported mesh from blender is gray whereas the build-in mesh is white here is the screen picture_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18257_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/p1.png.a5927e6f7a2cc82b977f327ff66bde10.png_qt_ alt_eq__qt_p1.png.a5927e6f7a2cc82b977f327ff66bde10.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe gray mesh is imported from blender_co_and the withe one is created with the built-in Babylon.Mesh.createCylinder.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti want to make the gray has the same default setting with the white one. how to do that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"guzuomuse","Date":"2018-05-13T05:20:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti have console that white one .it_t_s material is undefined_co_but why it has white color?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"guzuomuse","Date":"2018-05-13T05:30:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti know how to set diffuse_co_specular emissive colors...but what i want to know is that how can i make the mesh has the default setting (white color) without apply any material like the built-in created mesh?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-05-13T11:44:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_qt_Mesh.material.dispose()_qt_ or _qt_Mesh.material _eq_ null_qt_ should do the trick.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"guzuomuse","Date":"2018-05-14T02:43:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt__co_thanks for your reply but it it doesn_t_t work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-05-14T08:24:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31360-guzuomuse/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31360_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31360-guzuomuse/_qt_ rel_eq__qt__qt__gt_@guzuomuse_lt_/a_gt__dd_ have a look at this PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1V53AS_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1V53AS_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_co_ we_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tcreate a cylinder\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tappend the scene exported from blender\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tapply the material on the cylinder to the imported mesh\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tdispose (remove) the cylinder\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tBe aware that when you import or append a scene exported from Blender_co_ it will also include the lighting and (I think) the environment too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt really helps people to understand your problem if you create a playground.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]