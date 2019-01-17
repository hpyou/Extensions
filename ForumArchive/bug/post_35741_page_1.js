[{"Owner":"Dad72","Date":"2018-02-16T09:18:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen we load a model with ImportMesh on a scene_co_ then we serialize the scene_co_ the images are recorded with a path to find this model (_lt_em_gt_data/meshes/_lt_/em_gt_ for exemple).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce the scene data is serialized_co_ it is saved in a babylon file that I put in the root.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when I reload this scene file later_co_ with the function _lt_em_gt_SceneLoader.Append()_lt_/em_gt_ will create me the model (is good)_co_ but go look for the image at the root where it finds the scene file instead of looking in _lt_em_gt_data/meshes/_lt_/em_gt_ .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the serialized file at the material level the path of the images is the _lt_em_gt_data/meshes/images.png_lt_/em_gt__co_ but this path is not used because it starts from the root by searching directly for the image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically_co_ there is only the name of the image taken into account and not the path from which it finds the image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the images are in the same folder as the models_co_ the serialized scene file can not be in all the models folders (logical)_co_ so it is at the root. But Append() and Load() will try to fetch the images from the root of the file what should not be done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it_t_s because it_t_s _lt_em_gt_diffuseTexture.name_lt_/em_gt_ which is loaded for texture and not _lt_em_gt_diffuseTexture.url_lt_/em_gt_ _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_17053_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/5a86a181d3000_2018-02-1610_15_16-Greenshot.jpg.16dc55db0af7695521723e641510836b.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a86a181e347d_2018-02-1610_15_16-Greenshot.thumb.jpg.0c6e0070cb167fd1ab58de8d2f2738c4.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17053_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/5a86a181e347d_2018-02-1610_15_16-Greenshot.thumb.jpg.0c6e0070cb167fd1ab58de8d2f2738c4.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-02-16T10:00:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I understand why. when importing a model with ImportMesh_co_ the images are at the root of the model_co_ so the path of the image saved in diffuseTexture.name_co_ is at the root of the model and the path in Url by the root of the site.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe image is loaded correctly from a terrain for example_co_ because in diffuseTexture.name_co_ it is the path from the root of the site that is registered at the time of serialization. But with ImportMesh_co_ it does not go that way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-16T22:23:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I get what you would like but I may need a tiny repro in the PG to do my testings\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-02-16T23:26:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do not know how to reproduce that in the PG. I use PHP to save my serialized files and put them in a directory. The PG does not allow me to do that. If I do everything from the PG_co_ I could not reproduce the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem is just that when loading a serialized scene_co_ it will look for the images in _lt_em_gt_material.diffuseTexture.name_lt_/em_gt_ instead of _lt_em_gt_material.diffuseTexture.url_lt_/em_gt_ (that_t_s a guess_co_ but the url is not taken into account)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m thinking about a PG for tomorrow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-02-17T11:49:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried to make a PG. I load a terrain with a texture and I load a model with ImportMesh. I then serialized the scene that I reload with Append.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe can see the differences in console log at the image path level (name and url) and we can see that when loading with Append_co_ it will not look for the images correctly (on the PG it works because the models is displayed in the same place_co_ ( a cache story I guess)_co_ but we can see that we have _qt_404 not found_qt_ on all the images of the model _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_5a88137699d79_2018-02-1712_34_25-Greenshot.jpg.6e12858326600018b50cbc1dbd168118.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17067_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/5a88137699d79_2018-02-1712_34_25-Greenshot.jpg.6e12858326600018b50cbc1dbd168118.jpg_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt can be seen on the image the path of of images is search from the root of the playground rather than picking them up from the url of file\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1LNWLE%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1LNWLE#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat could be useful would be to have the possibility to load the models of a scene that uses the _qt_url_qt_ rather than the _qt_name_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta property like _dd_  _lt_strong_gt_BABYLON.SceneLoader.useFullPath _eq_ true_sm__lt_/strong_gt_ for example (which would be _lt_strong_gt_false by default_lt_/strong_gt_ so that it works as currently)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks Deltakosh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-20T19:30:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk! next commit will introduce a BABYLON.Texture.UseSerializedUrlIfAny _eq_ true_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-02-20T19:34:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCool_co_ Thanks DK. I_t_ll tell you when I_t_ll try after this is commit. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-02-20T22:17:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo nothing to change. Sorry Dk. There must be something missing in the SceneLoader I suppose.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1LNWLE%2324_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1LNWLE#24_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-21T16:15:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWait I did not publish yet _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Should be up in a couple of hours\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-02-21T20:22:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes it looks good now. Thank you DK.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]