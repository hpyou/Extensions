[{"Owner":"Bladetrick","Date":"2018-07-02T15:31:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI looked through the documentation but wasn_t_t quite sure if I missed how I might load textures for my model.   Perhaps I could do this using the TextureAssetTask or ImageAssetTask?  Basically_co_ I was wondering if there was a way to accomplish this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMesh(_qt_space_frig_qt__co_ _qt_Assets/_qt__co_ _qt_gate.babylon_qt__co_ scene_co_ function (newMeshes_co_ particleSystems) {\n                meshPlayer _eq_ newMeshes[0]_sm_\n                meshPlayer.position.y _eq_ 2_sm_\n                //meshPlayer.receiveShadows _eq_ true_sm_\n                //shadowGenerator.getShadowMap().renderList.push(meshPlayer)_sm_\n\n                meshPlayer.checkCollisions _eq_ true_sm_\n                meshPlayer.ellipsoid _eq_ new BABYLON.Vector3(1_co_ 1_co_ 1)_sm_\n                meshPlayer.ellipsoidOffset _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm_\n\n                meshPlayer.scaling.x _eq_ meshPlayer.scaling.y _eq_ meshPlayer.scaling.z _eq_ 0.3_sm_\n\n                meshPlayer.material.diffuseTexture _eq_ shipTexture_sm_\n                meshPlayer.material.bumpTexture _eq_ new BABYLON.Texture(_t_Assets/gate_bump.png_t__co_ scene)_sm_\n                meshPlayer.material.specularTexture _eq_ new BABYLON.Texture(_t_Assets/gate_specular.png_t__co_ scene)_sm_\n                meshPlayer.material.emissiveTexture _eq_ new BABYLON.Texture(_t_Assets/gate_illumination.png_t__co_ scene)_sm_\n            })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tusing the AssetsManager.  Are there any playground samples readily available?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for the assistance!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-07-02T15:35:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs the doc not enough precise for your needs? _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_assetsmanager_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_assetsmanager_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd about your example_co_ if you use a 3D modeler to export your _lt_em_gt_.babylon_lt_/em_gt_ file_co_ the simpliest way is to directly apply your textures on your materials_co_ they will be loaded by default.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-07-02T15:36:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIgnore me!  I found this right after I posted _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#SXEV7%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#SXEV7#1_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_thank you for your time_co_ though_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-07-02T16:00:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou made me playing with the assets manager  _lt_span class_eq__qt_ipsEmoji_qt__gt_😄_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI put my playground here in case someones wants to see how to disable the loading screen for the assetsManager (useful for unlucky people with shitty internet connections)_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#R6F9BC%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#R6F9BC#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(the info is on the doc anyway)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-07-02T18:05:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou beat me to it! I guess I don_t_t need to build a PG scene now._lt_span class_eq__qt_ipsEmoji_qt__gt_😀_lt_/span_gt_ But perhaps this code snippet will provide an example just loading images_co__co__co_ or whatever you wish.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    var loader _eq_ new BABYLON.AssetsManager(scene)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt_\n\t\t\t//Load textures for GUI_lt_br /_gt_\n\t\t\t    var toLoad _eq_ [_lt_br /_gt_\n\t\t\t        {name _dd_ _qt_bgnd_color_qt__co_ src _dd_ _qt_./textures/bgnd_color.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_color_picker_qt__co_ src _dd_ _qt_./textures/color_picker.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_brush_size_icon_qt__co_ src _dd_ _qt_./textures/brush_size_icon.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_increase_brush_qt__co_ src _dd_ _qt_./textures/increase_brush.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_decrease_brush_qt__co_ src _dd_ _qt_./textures/decrease_brush.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_eraser_qt__co_ src _dd_ _qt_./textures/eraser.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_video_slate_qt__co_ src _dd_ _qt_./textures/video_slate.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_button_d_qt__co_ src _dd_ _qt_./textures/3d_icon.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_frame_start_qt__co_ src _dd_ _qt_./textures/frame_start.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_frame_end_qt__co_ src _dd_ _qt_./textures/frame_end.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_video_pause_qt__co_ src _dd_ _qt_./textures/video_pause.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_video_play_qt__co_ src _dd_ _qt_./textures/video_play.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_button_play_qt__co_ src _dd_ _qt_./textures/button_play.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_button_pause_qt__co_ src _dd_ _qt_./textures/button_pause.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_button_rev_qt__co_ src _dd_ _qt_./textures/button_rev.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_button_fwd_qt__co_ src _dd_ _qt_./textures/button_fwd.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_button_notes_qt__co_ src _dd_ _qt_./textures/session_notes.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_button_slider1_qt__co_ src _dd_ _qt_./textures/slider1.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_button_slider2_qt__co_ src _dd_ _qt_./textures/slider2.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_admin_button_qt__co_ src _dd_ _qt_./textures/admin_button.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_console_button_qt__co_ src _dd_ _qt_./textures/console_button.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_s_notes_button_qt__co_ src _dd_ _qt_./textures/s_notes.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_m_list_button_qt__co_ src _dd_ _qt_./textures/m_list.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_login_button_qt__co_ src _dd_ _qt_./textures/login_button.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_about_button_qt__co_ src _dd_ _qt_./textures/about_button.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_erase_all_qt__co_ src _dd_ _qt_./textures/erase_all_button.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_brush_size_qt__co_ src _dd_ _qt_./textures/brush_size.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_undo_icon_qt__co_ src _dd_ _qt_./textures/undo_icon.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_redo_icon_qt__co_ src _dd_ _qt_./textures/redo_icon.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_dummy_image_qt__co_ src _dd_ _qt_./textures/dummy_image.png_qt_ }_co__lt_br /_gt_\n\t\t\t        {name _dd_ _qt_dummy_image_2_qt__co_ src _dd_ _qt_./textures/dummy_image_2.png_qt_ }_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    ]_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    toLoad.forEach(function(obj) {_lt_br /_gt_\n\t\t\t        var img _eq_ loader.addTextureTask(obj.name_co_ obj.src)_sm__lt_br /_gt_\n\t\t\t        img.onSuccess _eq_ function(t) {_lt_br /_gt_\n\t\t\t            assets[t.name] _eq_ t.texture_sm__lt_br /_gt_\n\t\t\t        }_sm__lt_br /_gt_\n\t\t\t    })_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    loader.onFinish _eq_ function() {\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t//ACTIONS/EVENTS HERE\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t   }_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_ helped me on this forum 3 years ago now... he helped me allot with managing assets and GUI elements using his bGUI.js extension._lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2018-07-02T23:57:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ Thanks this was useful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt inspired me to play around (probably a bit too much) with what you posted and I came up with the following TS which (I think) allows generic asset loading and eliminates excess typing and redundancy (folder path and asset type to load are derived from filename). I need to test this thoroughly yet but it might be useful to some. Maybe others can expand on it.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let assetsManager _eq_ new BABYLON.AssetsManager(this._scene)_sm_\nlet assetsToLoad _eq_ [\n    { name_dd_ _qt_bgnd_color_qt__co_      filename_dd_ _qt_bgnd_color.png_qt_ }_co_\n    { name_dd_ _qt_color_picker_qt__co_    filename_dd_ _qt_color_picker.png_qt_ }_co_\n    { name_dd_ _qt_brush_size_icon_qt__co_ filename_dd_ _qt_brush_size_icon.png_qt_ }_co_\n    { name_dd_ _qt_increase_brush_qt__co_  filename_dd_ _qt_increase_brush.png_qt_ }_co_\n    { name_dd_ _qt_decrease_brush_qt__co_  filename_dd_ _qt_decrease_brush.png_qt_ }_co_\n]_sm_\nlet assets _eq_ []_sm_\nassetsToLoad.forEach((obj) _eq_&gt_sm_ {\n    let assetTask_sm_\n    let fileExtension _eq_ obj.filename.split(_t_._t_).pop().toLowerCase()_sm_\n    switch(fileExtension) {\n        case _qt_png_qt__dd_\n        case _qt_jpg_qt__dd_\n        case _qt_jpeg_qt__dd_\n        case _qt_gif_qt__dd_\n            assetTask _eq_ assetsManager.addTextureTask(obj.name_co_ _t_./images/_t_ + obj.filename)_sm_\n            break_sm_\n        case _qt_dds_qt__dd_\n            assetTask _eq_ assetsManager.addCubeTextureTask(obj.name_co_ _t_./images/_t_ + obj.filename)_sm_\n            break_sm_\n        case _qt_hdr_qt__dd_\n            assetTask _eq_ assetsManager.addHDRCubeTextureTask(obj.name_co_ _t_./images/_t_ + obj.filename_co_ 512)_sm_\n            break_sm_\n        case _qt_mp3_qt__dd_\n        case _qt_wav_qt__dd_\n            assetTask _eq_ assetsManager.addBinaryFileTask(obj.name_co_ _t_./sounds/_t_ + obj.filename)_sm_\n            break_sm_\n        case _qt_babylon_qt__dd_\n        case _qt_gltf_qt__dd_\n        case _qt_obj_qt__dd_\n            assetTask _eq_ assetsManager.addMeshTask(obj.name_co_ _qt__qt__co_ _qt__qt__co_ _t_./models/_t_ + obj.filename)\n            break_sm_\n        case _qt_json_qt__dd_\n        case _qt_txt_qt__dd_\n            assetTask _eq_ assetsManager.addTextFileTask(obj.name_co_ _t_./data/_t_ + obj.filename)_sm_\n            break_sm_\n        default_dd_\n            console.log(_t_Error loading asset _qt__t_ + obj.name + _t__qt_. Unrecognized file extension _qt__t_ + fileExtension + _t__qt__t_)_sm_\n            break_sm_\n    }\n    assetTask.onSuccess _eq_ (task) _eq_&gt_sm_ {\n        switch(task.constructor) {\n            case BABYLON.TextureAssetTask_dd_\n            case BABYLON.CubeTextureAssetTask_dd_\n            case BABYLON.HDRCubeTextureAssetTask_dd_\n                assets[task.name] _eq_ task.texture_sm_\n                break_sm_\n            case BABYLON.BinaryFileAssetTask_dd_\n                assets[task.name] _eq_ task.data_sm_\n                break_sm_\n            case BABYLON.MeshAssetTask_dd_\n                assets[task.name] _eq_ task.loadedMeshes_sm_\n                break_sm_\n            case BABYLON.TextFileAssetTask_dd_\n                assets[task.name] _eq_ task.text_sm_\n                break_sm_\n            default_dd_\n                console.log(_t_Error loading asset _qt__t_ + task.name + _t__qt_. Unrecognized AssetManager task type._t_)_sm_\n                break_sm_\n        }\n    }_sm_\n    assetTask.onError _eq_ (task_co_ message_co_ exception) _eq_&gt_sm_ {\n        console.log(message_co_ exception)_sm_\n    }_sm_\n})_sm_\nassetsManager.onProgress _eq_ (remainingCount_co_ totalCount_co_ lastFinishedTask) _eq_&gt_sm_ {\n    this._engine.loadingUIText _eq_ _t_Loaded _t_ + remainingCount + _t_ of _t_ + totalCount + _t_ assets._t__sm_\n}_sm_\nassetsManager.onFinish _eq_ () _eq_&gt_sm_ {\n    // ACTIONS/EVENTS HERE\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-07-03T14:44:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22801-inteja/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22801_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22801-inteja/_qt_ rel_eq__qt__qt__gt_@inteja_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCertainly another approach to solve specific needs. I should have conformed my sample to ES6 before posting_sm_ I just didn_t_t have time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-07-03T18:12:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thaha_co_ love this community..  I thought it was over and came back cause i saw the extra posts.  Amazing stuff_co_ guys.  Thank you all.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-03T23:09:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe never give up _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]