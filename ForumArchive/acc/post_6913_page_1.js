[{"Owner":"Dad72","Date":"2014-06-03T13:51:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Since the last update of babylon_co_ I get an error on this line that I did not previously have._lt_/div_gt__lt_br_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__lt_br_gt_\nthis._effect.setMatrix(_qt_groundMatrix_qt__co_ this.groundTexture._computeTextureMatrix())_sm__lt_/pre_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-03T14:14:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not a bug this tome_co_ I renamed this function which was private to a public one_dd_ getTextureMatrix_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-03T14:27:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah ok. I did not know. Thanks for the information_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-03T14:38:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have replace _computeTextureMatrix() _eq_&gt_sm_ _lt_span style_eq__qt_color_dd_#282828_sm__qt__gt__lt_span style_eq__qt_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_getTextureMatrix()_lt_/span_gt__lt_/span_gt__lt_br_gt_ _lt_br_gt_But the terrain is given a 0. I have more mountain and river... try the WorlMonger 1.12.  I use the material of WorldMonger + StandardMaterial merged_dd__lt_br_gt_ _lt_br_gt_I load my terrian like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_ground _eq_ BABYLON.Mesh.CreateGround(_qt_myGround_qt__co_ 500_co_ 500_co_ 200_co_ scene_co_ true)_sm_this.meshGround.setVerticesData(BABYLON.VertexBuffer.PositionKind_co_ $.parseJSON(this.savedPosition)_co_ true)_sm_this.meshGround.setVerticesData(BABYLON.VertexBuffer.NormalKind_co_ $.parseJSON(this.savedNormal)_co_ true)_sm_this.meshGround.setVerticesData(BABYLON.VertexBuffer.UVKind_co_ $.parseJSON(this.savedUvs))_sm_ground.material _eq_ new WORLDCASTOR.GroundMaterial(_qt_Material_myGround_qt__co_ scene_co_ Light)_sm_ _lt_/pre_gt__lt_p_gt_var Position and var Normal ans var savedUvs her recover from a file_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-03T17:07:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do not understand your problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-03T17:17:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_quand je charge le terrain avec ce changement_co_ il est plat maintenant. je n_t_est plus de rivière_co_ de montagne... tout est plat. si je charge une ancienne version de la 1.12 tout est ok._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-03T17:29:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you try with the last version I posted on github?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-03T17:36:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_No sorry DK is the same thing._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-03T18:38:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And there is no error in the console?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-03T18:53:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have _dd__lt_br_gt_ _lt_br_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_span style_eq__qt_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm__qt__gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_Uncaught TypeError_dd_ Cannot set property _t_innerHTML_t_ of null_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_span style_eq__qt_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm__qt__gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_in _lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#545454_sm__qt__gt__lt_span style_eq__qt_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm__qt__gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_VM10977_dd_1_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_br_gt_ _lt_br_gt_I have no such file_lt_br_gt_ _lt_br_gt_Otherwise I test this_dd_ _lt_strong_gt_it works_co__lt_/strong_gt__lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_ground _eq_ BABYLON.Mesh.CreateGroundFromHeightMap(_qt_myGround_qt__co_ _qt_Data/Textures/Terrain/heightMap/heightMapShaderEditor.png_qt__co_ 200_co_ 200_co_ 145_co_ 0_co_ 20_co_ scene_co_ true)_sm_ground.material _eq_ new WORLDCASTOR.GroundMaterial(_qt_Material_myGround_qt__co_ scene_co_ Light)_sm__lt_/pre_gt__lt_p_gt_ _lt_br_gt_but this_co_ the_lt_strong_gt_ ground is flat_lt_/strong_gt_._lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_ground _eq_ BABYLON.Mesh.CreateGround(_qt_myGround_qt__co_ 500_co_ 500_co_ 200_co_ scene_co_ true)_sm_this.meshGround.setVerticesData(BABYLON.VertexBuffer.PositionKind_co_ $.parseJSON(this.savedPosition)_co_ true)_sm_this.meshGround.setVerticesData(BABYLON.VertexBuffer.NormalKind_co_ $.parseJSON(this.savedNormal)_co_ true)_sm_this.meshGround.setVerticesData(BABYLON.VertexBuffer.UVKind_co_ $.parseJSON(this.savedUvs))_sm_ground.material _eq_ new WORLDCASTOR.GroundMaterial(_qt_Material_myGround_qt__co_ scene_co_ Light)_sm__lt_/pre_gt__lt_p_gt_may be a because of_dd_  setVerticesData()_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-03T19:59:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_could you isolate that in a small project so that I can test?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-03T20:18:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll try to do it in the evening._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-03T21:00:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I updated my version of worldmonger with 1.12 and I have no issue _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-03T21:34:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok. I took exactly the same worldmonger demo_co_ but I change by calling a file _lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_    // Grounds Version Defaut\t/*    var ground _eq_ BABYLON.Mesh.CreateGroundFromHeightMap(_qt_ground_qt__co_ _qt_Assets/heightMap.png_qt__co_ 100_co_ 100_co_ 100_co_ 0_co_ 12_co_ scene_co_ true)_sm_    var groundMaterial _eq_ new WORLDMONGER.GroundMaterial(_qt_ground_qt__co_ scene_co_ sun)_sm_    ground.material _eq_ groundMaterial_sm_    ground.position.y _eq_ -2.0_sm_\t*/    // Grounds Version modified (Loading has sailed from a file)\tvar ground_sm_\t$.ajaxSetup({ async_dd_ false})_sm_\t$.ajax({ url_dd__qt_Open_terrain.fonction.php_qt__co_ type_dd__t_POST_t__co_\t\tsuccess_dd_function(data){\t\t\t\t\t\t\t\tdata _eq_ data.split(_qt__sm__qt_)_sm_\t\t\tvar savedPosition _eq_ data[0]_sm_\t\t\tvar savedNormal _eq_ data[1]_sm_\t\t\tvar Mysubdivision _eq_ data[2]_sm_\t\t\tvar MydimX _eq_ data[3]_sm_\t\t\tvar MydimY _eq_ data[4]_sm_\t\t\t\t\t\t\tground _eq_ BABYLON.Mesh.CreateGround(_qt_ground_qt__co_ parseInt(MydimX)_co_ parseInt(MydimY)_co_ parseInt(Mysubdivision)_co_ scene_co_ true)_sm_\t\t\tground.setVerticesData($.parseJSON(savedPosition)_co_ BABYLON.VertexBuffer.PositionKind_co_ true)_sm_\t\t\tground.setVerticesData($.parseJSON(savedNormal)_co_ BABYLON.VertexBuffer.NormalKind_co_ true)_sm_\t\t\t\tground.material _eq_ new WORLDMONGER.GroundMaterial(_qt_Material_ground_qt__co_ scene_co_ sun)_sm_\t\t\tground.position.y _eq_ -3.0_sm_\t\t\tground.isPickable _eq_ false_sm_\t\t}\t})_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-03T23:12:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This one is also my fault!!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m so sorry about that. This is EXACTLY why I do not want to change a published API_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ here is the reason_dd__lt_/p_gt__lt_div_gt_ - **Breaking changes**_lt_/div_gt__lt_div_gt_ - ```Mesh.setVerticesData``` signature is now_dd_ (kind_co_ values_co_ updatable) instead of (values_co_ kind_co_ updatable) in order to be consistent with ```Mesh.updateVerticesData```_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-03T23:29:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes. This works. I had read and I forget to change it._lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_There is no of problem DK_co_ be not sorry. you made a really works great on babylon. Your engine is the best one out there for webgl. I have test many of engine and it_t_s yours engine I_t_m most loyal.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-03T23:37:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thank you very much_co_ but I promise to stop changing public API _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-03T23:49:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If the change is important... is not a problem for me. You can make a list of the changes in signature in an ads for example put post it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]