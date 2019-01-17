[{"Owner":"dbawel","Date":"2015-08-31T05:02:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a scene which allows you to paint on 3D objects.  In addition to painting on 3D objects_co_ I need to add a function in which you can load an existing texture_co_ and paint on the already textured object directly.  In the link below_co_ you_t_ll see a sphere which you can paint directly onto - if you want to change the brush color_co_ click the color icons on the right side of the interface.  The rest of the interface is not yet connected to any functions.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You_t_ll also see a plane in the scene which is rendered white - although I have applied a MultiMaterial containing 3 materials onto this plane object_sm_ one which has a color value of white (1_co_1_co_1)_co_ a second material which has a texture applied to it_co_ and a 3rd material which has the same dynamic texture applied to the sphere which allows you to paint on the sphere.  I_t_m pushing all 3 materials into a single MultiMaterial _qt_var multimat_qt__co_ but only the first material with the color value of (1_co_1_co_1) is rendered.  The dynamic material is functioning on the plane_co_ as you can paint on the plane directly (with no result on the plane) since it shares the same dynamic material as the sphere_co_ and you_t_ll see the paint appear on the sphere when painting on the plane._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The link to this scene is_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.qedsoft.com/DEMOS2014/creative_drawing_v1/index.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Below is a portion of the script which is used for the scene elements which are having issues.  The code below is not useful for testing or building a playground scene_co_ as it is a small portion of just one java script to define the app.  The code containing the multi-material for the plane is placed between two long lines of _qt_//_qt_ remarks which are repeated numerous times to make the problematic code easier to locate in the script_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_function init3d (scene_co_ canvas) {_lt_/div_gt__lt_div_gt_    //var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 0_co_ 10_co_ BABYLON.Vector3.Zero()_co_ scene)_sm__lt_/div_gt__lt_div_gt_   // var light _eq_ new BABYLON.PointLight(_qt_Omni0_qt__co_ new BABYLON.Vector3(-17.6_co_ 18.8_co_ -49.9)_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    //camera _eq_ new BABYLON.FreeCamera(_qt_camera1_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -15)_co_ scene)_sm__lt_/div_gt__lt_div_gt_    //camera.setTarget(BABYLON.Vector3.Zero())_sm_    _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ Math.PI / 2_co_ 1.55_co_ -10_co_ BABYLON.Vector3.Zero()_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    //camera.setPosition(new BABYLON.Vector3(-15_co_ 3_co_ 0))_sm__lt_/div_gt__lt_div_gt_    //camera.attachControl(canvas_co_ true)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    // Skybox_lt_/div_gt__lt_div_gt_    var skybox _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_ 200.0_co_ scene)_sm__lt_/div_gt__lt_div_gt_    var skyboxMaterial _eq_ new BABYLON.StandardMaterial(_qt_skyBox_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_    skyboxMaterial.backFaceCulling _eq_ false_sm__lt_/div_gt__lt_div_gt_    skyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_./skybox/TropicalSunnyDay_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_    skyboxMaterial.reflectionTexture.coordinatesMode _eq_ BABYLON.Texture.SKYBOX_MODE_sm__lt_/div_gt__lt_div_gt_    skyboxMaterial.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_/div_gt__lt_div_gt_    skyboxMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_/div_gt__lt_div_gt_    skybox.material _eq_ skyboxMaterial_sm__lt_/div_gt__lt_div_gt_    skybox.layerMask _eq_ 1_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    // This creates a light_co_ aiming 0_co_1_co_0 - to the sky (non-mesh)_lt_/div_gt__lt_div_gt_    var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm__lt_/div_gt__lt_div_gt_    light.intensity _eq_ 0.7_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    // light for video screen_lt_/div_gt__lt_div_gt_    var light1 _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(0_co_ 80_co_ -80)_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_///////////////////////////////////////////////////////////////////////////////////////////////////////_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_var groundTexture _eq_ new BABYLON.DynamicTexture(_qt_dynamic texture_qt__co_ 512_co_ scene_co_ true)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_var dynamicMaterial _eq_ new BABYLON.StandardMaterial(_t_mat_t__co_ scene)_sm__lt_/div_gt__lt_div_gt_dynamicMaterial.diffuseTexture _eq_ groundTexture_sm__lt_/div_gt__lt_div_gt_dynamicMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_/div_gt__lt_div_gt_dynamicMaterial.backFaceCulling _eq_ false_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    // Create sphere_lt_/div_gt__lt_div_gt_    var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 5_co_ scene)_sm__lt_/div_gt__lt_div_gt_    sphere.material _eq_ dynamicMaterial_sm__lt_/div_gt__lt_div_gt_    sphere.rotation.x _eq_ -Math.PI / 2_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    // Move the sphere upward 1/2 its height_lt_/div_gt__lt_div_gt_    sphere.position.y _eq_ 1_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    // Create ground_lt_/div_gt__lt_div_gt_    var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 10_co_ 10_co_ 2_co_ scene)_sm__lt_/div_gt__lt_div_gt_    ground.position _eq_ new BABYLON.Vector3(-200_co_0_co_0)_sm__lt_/div_gt__lt_div_gt_    ground.material _eq_ dynamicMaterial_sm__lt_/div_gt__lt_div_gt_    ground.visibility _eq_ 0_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    var material0 _eq_ new BABYLON.StandardMaterial(_qt_mat0_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_    material0.diffuseColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    var material1 _eq_ new BABYLON.StandardMaterial(_qt_mat1_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_    material1.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 1)_sm__lt_/div_gt__lt_div_gt_    material1.diffuseTexture _eq_ new BABYLON.Texture(_qt_./textures/video_screen_512.png_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    var material2 _eq_ new BABYLON.StandardMaterial(_qt_mat2_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_    material2.diffuseTexture _eq_ groundTexture_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    var multimat _eq_ new BABYLON.MultiMaterial(_qt_multi_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_    multimat.subMaterials.push(material0)_sm__lt_/div_gt__lt_div_gt_    multimat.subMaterials.push(material1)_sm__lt_/div_gt__lt_div_gt_    multimat.subMaterials.push(material2)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    //Creation of a video plane_lt_/div_gt__lt_div_gt_    var plane _eq_ BABYLON.Mesh.CreatePlane(_qt_plane_qt__co_ _qt_10_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_    plane.position _eq_ new BABYLON.Vector3(0_co_0.1_co_0)_sm__lt_/div_gt__lt_div_gt_    plane.scaling _eq_ new BABYLON.Vector3(.95_co_0.5_co_1)_sm__lt_/div_gt__lt_div_gt_    plane.visibility _eq_ 1_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    plane.material _eq_ multimat_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_///////////////////////////////////////////////////////////////////////////////////////////////////////_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_var clearColor _eq_ _qt_#555555_qt__sm__lt_/div_gt__lt_div_gt_var font _eq_ _qt_bold 70px Segoe UI_qt__sm__lt_/div_gt__lt_div_gt_var invertY _eq_ true_sm__lt_/div_gt__lt_div_gt_var text _eq_ _qt_test_qt__sm__lt_/div_gt__lt_div_gt_var color _eq_ _qt_white_qt__lt_/div_gt__lt_div_gt_var x _eq_ 10_sm__lt_/div_gt__lt_div_gt_var y _eq_ 80_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_var context _eq_ groundTexture._context_sm__lt_/div_gt__lt_div_gt_var size _eq_ groundTexture.getSize()_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    if (clearColor) {_lt_/div_gt__lt_div_gt_context.fillStyle _eq_ clearColor_sm__lt_/div_gt__lt_div_gt_context.fillRect(0_co_ 0_co_ size.width_co_ size.height)_sm__lt_/div_gt__lt_div_gt_}_lt_/div_gt__lt_div_gt_     _lt_/div_gt__lt_div_gt_groundTexture.update(invertY)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_If anyone can help me with the correct code to get the multi-material to function correctly where I can display the _qt_video_screen_512.png_qt_ texture and also paint directly on the plane_co_ it would be much appriciated.  _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_FYI - If I remove the material which is set as _qt_var material0_qt_ from the script and from the MultiMaterial (this is the material which has the color value of (1_co_1_co_1))_co_ then the material which is set as _qt_var material1_qt_ containing the _qt_video_screen_512.png_qt_ texture appears correctly on the plane._lt_/div_gt__lt_div_gt_In addition_co_ if I switch the order of the materials I_t_m pushing to the MultiMaterial where material2 is pushed before material1_co_ then only the dynamic texture is displayed_co_ and I can paint directly onto the plane. ( _qt_var material1_qt_ containing the _qt_video_screen_512.png_qt_ texture is not displayed.) An example of this code is below_dd__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_br_gt__lt_div_gt_    var multimat _eq_ new BABYLON.MultiMaterial(_qt_multi_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_    multimat.subMaterials.push(material2)_sm__lt_/div_gt__lt_div_gt_    multimat.subMaterials.push(material1)_sm__lt_/div_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Thanks_co__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_DB_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-08-31T15:20:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I did a quick text search for _t_submesh_t_ in this script_co_ &amp_sm_ did not find any being created.  I am only going on my Blender exporter work_co_ but there needs to be a sub mesh for each material in the multi-material.  There is one sub mesh of the entire mesh created automatically.  If there are no sub meshes added_co_ which specify the _lt_span style_eq__qt_font-family_dd_Monaco_sm_font-size_dd_11px_sm__qt__gt_materialIndex_co_ verticesStart_co_ indexStart_co_ verticesCount_co_ indexCount_lt_/span_gt__co_ then only the first one is probably going to be used._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-31T18:37:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Lol this is unhelpful to share all the code like this_dd_) _lt_/p_gt__lt_p_gt_Two options_dd_ _lt_/p_gt__lt_p_gt_- Share a repro case on a server somewhere which references to babylon.max.js (to avoid debugging with minified version _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt__lt_p_gt_- Create a repro on the Playground_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Guess which one is my favorite _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-08-31T21:32:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Deltakosh - Posting this large section of the script is not what I would have preferred either_co_ however I included the entire script in the post_co_ as the problem might very well have been in the functions with which I_t_m using dynamic textures to draw on objects -  along with the addition of the bGUI extension for the interface - which I cannot reproduce in the playground_co_ along with the dozens of other textures used for the interface. Otherwise_co_ I would much rather submit a playground scene scaled down to expose the problem specifically.  It_t_s just that this scene is a bit too compex for the playground to reproduce all of the associated factors which might be contributing to the problem.  However_co_ with the advice JCP provided_co_ I_t_ll edit the original post now_co_ and remove most of the script which due to JCPalmers response identifies that the issue is definately due to my not defining submeshes for the MultiMaterials to be attached._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@JCPalmer - I_t_m not very familiar with MultiMaterials - and specifically their use with dynamic textures.  But your advice is very helpful_co_ as you are correct_sm_ this is the reason why I_t_m receiving the rendering result which is only rendering the first material pushed on the plane - as MultiMaterials do require submeshes to render_co_ otherwise only the first material pushed to the MultiMaterial will be rendered.  With this info and recalling that submeshes are required to define for MultiMaterials_co_ I need to test if an entire mesh can be defined and redifined as a submesh to be able to apply several materials to the entire object_co_ and not only a defined section (submesh) of the object for each material.  Thank you for bringing this info to my attention_co_ as it is definately the root of the problem._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-31T23:50:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I totally understand but in this case you should share a running sample (if you can_dd_))_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-09-01T00:28:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi DK_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The link in the beginning of the post is a running example_co_ with all of the code in the original post - excluding the .html and .css files_co_ as well as the extensions and the tons of textures as you can see just in the interface.  This is another reason why it wasn_t_t practical to create a playgound scene initially_co_ as there are so many required assets such as textures that it would be a huge undertaking.  I_t_ve since then edited out much of the script_co_ and left only the section addressing the materials just for reference._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t have a solution to what I_t_m attempting_co_ however_co_ I will most likely mark this solved by JCPalmer as the problem is definately that I don_t_t have submeshes defined on my object.  But I_t_ll leave it unsolved for the time being in case someone might have enough experience specific to my scene to offer up an actual working solution.  If there is that person out there who has the specific experience which might bring a solution_co_ they can open the scripts in the javascript console. But I also hope to find a solution myself this evening with the relaization that the problem is due to submeshes.  So there_t_s no need to try and build some kind of replication now_co_ as I basically know what to do.  I wouldn_t_t even know where to begin to attempt to replicate in the playground anyway._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But thanks for all of your attention to this.  I hope to have the multi-user real-time version of this fully funtioning and posted on the forum by Thursday - finally -  if all goes as planned now._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-01T03:29:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh sorry I did not see it_dd_( my bad!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]