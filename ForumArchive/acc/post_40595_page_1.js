[{"Owner":"wen","Date":"2018-10-12T02:45:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I am new to Babylon JS. I have successfully imported the obj file but how do I add texture to it? I tried the following codes but to no avail_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ var material _eq_ new BABYLON.StandardMaterial(_qt_goldMaterial_qt__co_ this.scene)_sm_\n    material.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/gold.jpeg_qt__co_ this.scene)_sm_\n    material.specularColor _eq_ BABYLON.Color3.Black()_sm_\n    material.emissiveColor _eq_ BABYLON.Color3.White()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ BABYLON.SceneLoader.ImportMesh(null_co_ _qt_models/_qt__co_ _qt_majahapitGold.obj_qt__co_ this.scene_co_ (meshes) _eq_&gt_sm_ {\n      \n      var room _eq_ meshes[0]_sm_\n      room.scaling _eq_ 0.001_sm_\n      room.position _eq_ new BABYLON.Vector3.Zero(0_co_ 5_co_0)\n      room.material _eq_ material_sm_\n      this.camera.radius _eq_ 3000_sm_\n\n})_sm_ _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]