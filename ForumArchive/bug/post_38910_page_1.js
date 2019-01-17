[{"Owner":"wade","Date":"2018-07-18T00:33:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPlease try this playground_co_ when you click on the balls_co_ they will pop_co_ and in the mean while a particle system will emit particles. This is working fine with Edge_co_ but in chrome the particle system cannot restart for the 3rd click and so forth. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd both the _started and _stop properties are set to _qt_true_qt__co_ this is strange. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_dd_ https_dd_//www.babylonjs-playground.com/#7149G4#19 \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tplayground code_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar createScene _eq_ function () {_lt_br /_gt_\n\t    var scene _eq_ new BABYLON.Scene(engine)_sm__lt_br /_gt_\n\t    scene.clearColor _eq_ BABYLON.Color3.Purple()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var camera _eq_ new BABYLON.FreeCamera(_qt_Camera_qt__co_ new BABYLON.Vector3(0_co_ 0_co_ -20)_co_ scene)_sm__lt_br /_gt_\n\t    camera.attachControl(canvas_co_ true)_sm__lt_br /_gt_\n\t    camera.checkCollisions _eq_ true_sm__lt_br /_gt_\n\t    camera.applyGravity _eq_ true_sm__lt_br /_gt_\n\t    camera.setTarget(new BABYLON.Vector3(0_co_ 0_co_ 0))_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var light _eq_ new BABYLON.DirectionalLight(_qt_dir02_qt__co_ new BABYLON.Vector3(0.2_co_ -1_co_ 0)_co_ scene)_sm__lt_br /_gt_\n\t    light.position _eq_ new BABYLON.Vector3(0_co_ 80_co_ 0)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t    // Shadows_lt_br /_gt_\n\t    var shadowGenerator _eq_ new BABYLON.ShadowGenerator(2048_co_ light)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    // Physics_lt_br /_gt_\n\t    scene.enablePhysics(null_co_ new BABYLON.CannonJSPlugin())_sm__lt_br /_gt_\n\t    scene.enablePhysics(null_co_ new BABYLON.OimoJSPlugin())_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var fountain _eq_ BABYLON.Mesh.CreateBox(_qt_foutain_qt__co_ 0.01_co_ scene)_sm__lt_br /_gt_\n\t    fountain.visibility _eq_ 0.1_sm__lt_br /_gt_\n\t    _lt_br /_gt_\n\t    var createNewSystem _eq_ function(newPosition) {_lt_br /_gt_\n\t        var particleSystem_sm__lt_br /_gt_\n\t        if (BABYLON.GPUParticleSystem.IsSupported) {_lt_br /_gt_\n\t            console.log(_qt_GPU supported!_qt_)_lt_br /_gt_\n\t            particleSystem _eq_ new BABYLON.GPUParticleSystem(_qt_particles_qt__co_ { capacity_dd_1000000 }_co_ scene)_sm__lt_br /_gt_\n\t            particleSystem.activeParticleCount _eq_ 200000_sm__lt_br /_gt_\n\t        } else {_lt_br /_gt_\n\t            particleSystem _eq_ new BABYLON.ParticleSystem(_qt_particles_qt__co_ 50000 _co_ scene)_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t    _lt_br /_gt_\n\t        particleSystem.emitRate _eq_ 10000_sm__lt_br /_gt_\n\t        particleSystem.particleEmitterType _eq_ new BABYLON.SphereParticleEmitter(1)_sm__lt_br /_gt_\n\t        particleSystem.particleTexture _eq_ new BABYLON.Texture(_qt_/textures/flare.png_qt__co_ scene)_sm__lt_br /_gt_\n\t        particleSystem.maxLifeTime _eq_ 10_sm__lt_br /_gt_\n\t        particleSystem.minSize _eq_ 0.01_sm__lt_br /_gt_\n\t        particleSystem.maxSize _eq_ 0.1_sm__lt_br /_gt_\n\t        particleSystem.emitter _eq_ fountain_sm__lt_br /_gt_\n\t    _lt_br /_gt_\n\t        //fountain.position _eq_ newPosition_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        particleSystem.disposeOnStop _eq_ false_sm__lt_br /_gt_\n\t        particleSystem.targetStopDuration _eq_ 1_sm__lt_br /_gt_\n\t        return particleSystem_sm__sm__lt_br /_gt_\n\t    }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    particleSystem _eq_ createNewSystem()_sm__lt_br /_gt_\n\t    var materialAmiga _eq_ new BABYLON.StandardMaterial(_qt_amiga_qt__co_ scene)_sm__lt_br /_gt_\n\t    materialAmiga.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/amiga.jpg_qt__co_ scene)_sm__lt_br /_gt_\n\t    materialAmiga.emissiveColor _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 0.5)_sm__lt_br /_gt_\n\t    materialAmiga.diffuseTexture.uScale _eq_ 5_sm__lt_br /_gt_\n\t    materialAmiga.diffuseTexture.vScale _eq_ 5_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var materialAmiga2 _eq_ new BABYLON.StandardMaterial(_qt_amiga_qt__co_ scene)_sm__lt_br /_gt_\n\t    materialAmiga2.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/amiga.jpg_qt__co_ scene)_sm__lt_br /_gt_\n\t    materialAmiga2.emissiveColor _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 0.5)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    // Spheres_lt_br /_gt_\n\t    var y _eq_ 0_sm__lt_br /_gt_\n\t    var particleSystems _eq_ {}_sm__lt_br /_gt_\n\t    for (var index _eq_ 0_sm_ index &lt_sm_ 100_sm_ index++) {_lt_br /_gt_\n\t        // Material_lt_br /_gt_\n\t        var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere_qt_ + index_co_ 16_co_ 3_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        sphere.material _eq_ materialAmiga_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        sphere.position _eq_ new BABYLON.Vector3(Math.random() * 20 - 10_co_ y_co_ Math.random() * 10 - 5)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        shadowGenerator.addShadowCaster(sphere)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        sphere.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(sphere_co_ BABYLON.PhysicsImpostor.SphereImpostor_co_ { mass_dd_ 1 }_co_ scene)_sm__lt_br /_gt_\n\t _lt_br /_gt_\n\t        var goToColorAction _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ light_co_ _qt_diffuse_qt__co_ BABYLON.Color3.Red()_co_ 1000_co_ null_co_ true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        var popAction _eq_ new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger_co_ () _eq_&gt_sm_ { createNewSystem() })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        sphere.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        sphere.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger_co_ (evt) _eq_&gt_sm_ { _lt_br /_gt_\n\t            evt.source.dispose()_sm__lt_br /_gt_\n\t            fountain.position _eq_ evt.source.absolutePosition_sm__lt_br /_gt_\n\t            //console.log(particleSystem)_sm__lt_br /_gt_\n\t            particleSystem.start()_sm__lt_br /_gt_\n\t        }))_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        sphere.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger_co_ sphere_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1_co_ 1_co_ 1)_co_ 150))_sm__lt_br /_gt_\n\t        sphere.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger_co_ sphere_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1.1_co_ 1.1_co_ 1.1)_co_ 150))_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        y +_eq_ 2_sm__lt_br /_gt_\n\t    }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    // Link_lt_br /_gt_\n\t    var spheres _eq_ []_sm__lt_br /_gt_\n\t    for (index _eq_ 0_sm_ index &lt_sm_ 10_sm_ index++) {_lt_br /_gt_\n\t        sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere0_qt__co_ 16_co_ 1_co_ scene)_sm__lt_br /_gt_\n\t        spheres.push(sphere)_sm__lt_br /_gt_\n\t        sphere.material _eq_ materialAmiga2_sm__lt_br /_gt_\n\t        sphere.position _eq_ new BABYLON.Vector3(Math.random() * 20 - 10_co_ y_co_ Math.random() * 10 - 5)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        shadowGenerator.addShadowCaster(sphere)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        sphere.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(sphere_co_ BABYLON.PhysicsImpostor.SphereImpostor_co_ { mass_dd_ 1 }_co_ scene)_sm__lt_br /_gt_\n\t    }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    for (index _eq_ 0_sm_ index &lt_sm_ 9_sm_ index++) {_lt_br /_gt_\n\t        spheres[index].setPhysicsLinkWith(spheres[index + 1]_co_ new BABYLON.Vector3(0_co_ 0.5_co_ 0)_co_ new BABYLON.Vector3(0_co_ -0.5_co_ 0))_sm__lt_br /_gt_\n\t    }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    // Box_lt_br /_gt_\n\t    var box0 _eq_ BABYLON.Mesh.CreateBox(_qt_Box0_qt__co_ 3_co_ scene)_sm__lt_br /_gt_\n\t    box0.position _eq_ new BABYLON.Vector3(3_co_ 30_co_ 0)_sm__lt_br /_gt_\n\t    var materialWood _eq_ new BABYLON.StandardMaterial(_qt_wood_qt__co_ scene)_sm__lt_br /_gt_\n\t    materialWood.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/crate.png_qt__co_ scene)_sm__lt_br /_gt_\n\t    materialWood.emissiveColor _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 0.5)_sm__lt_br /_gt_\n\t    box0.material _eq_ materialWood_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    shadowGenerator.addShadowCaster(box0)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    // Compound_lt_br /_gt_\n\t    var part0 _eq_ BABYLON.Mesh.CreateBox(_qt_part0_qt__co_ 3_co_ scene)_sm__lt_br /_gt_\n\t    part0.position _eq_ new BABYLON.Vector3(3_co_ 30_co_ 0)_sm__lt_br /_gt_\n\t    part0.material _eq_ materialWood_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var part1 _eq_ BABYLON.Mesh.CreateBox(_qt_part1_qt__co_ 3_co_ scene)_sm__lt_br /_gt_\n\t    part1.parent _eq_ part0_sm_ // We need a hierarchy for compound objects_lt_br /_gt_\n\t    part1.position _eq_ new BABYLON.Vector3(0_co_ 3_co_ 0)_sm__lt_br /_gt_\n\t    part1.material _eq_ materialWood_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    shadowGenerator.addShadowCaster(part0)_sm__lt_br /_gt_\n\t    shadowGenerator.addShadowCaster(part1)_sm__lt_br /_gt_\n\t    shadowGenerator.useBlurExponentialShadowMap _eq_ true_sm__lt_br /_gt_\n\t    shadowGenerator.useKernelBlur _eq_ true_sm__lt_br /_gt_\n\t    shadowGenerator.blurKernel _eq_ 32_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t    // Playground_lt_br /_gt_\n\t    var ground _eq_ BABYLON.Mesh.CreateBox(_qt_Ground_qt__co_ 1_co_ scene)_sm__lt_br /_gt_\n\t    ground.scaling _eq_ new BABYLON.Vector3(100_co_ 1_co_ 100)_sm__lt_br /_gt_\n\t    ground.position.y _eq_ -5.0_sm__lt_br /_gt_\n\t    ground.checkCollisions _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var border0 _eq_ BABYLON.Mesh.CreateBox(_qt_border0_qt__co_ 1_co_ scene)_sm__lt_br /_gt_\n\t    border0.scaling _eq_ new BABYLON.Vector3(1_co_ 100_co_ 100)_sm__lt_br /_gt_\n\t    border0.position.y _eq_ -5.0_sm__lt_br /_gt_\n\t    border0.position.x _eq_ -50.0_sm__lt_br /_gt_\n\t    border0.checkCollisions _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var border1 _eq_ BABYLON.Mesh.CreateBox(_qt_border1_qt__co_ 1_co_ scene)_sm__lt_br /_gt_\n\t    border1.scaling _eq_ new BABYLON.Vector3(1_co_ 100_co_ 100)_sm__lt_br /_gt_\n\t    border1.position.y _eq_ -5.0_sm__lt_br /_gt_\n\t    border1.position.x _eq_ 50.0_sm__lt_br /_gt_\n\t    border1.checkCollisions _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var border2 _eq_ BABYLON.Mesh.CreateBox(_qt_border2_qt__co_ 1_co_ scene)_sm__lt_br /_gt_\n\t    border2.scaling _eq_ new BABYLON.Vector3(100_co_ 100_co_ 1)_sm__lt_br /_gt_\n\t    border2.position.y _eq_ -5.0_sm__lt_br /_gt_\n\t    border2.position.z _eq_ 50.0_sm__lt_br /_gt_\n\t    border2.checkCollisions _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var border3 _eq_ BABYLON.Mesh.CreateBox(_qt_border3_qt__co_ 1_co_ scene)_sm__lt_br /_gt_\n\t    border3.scaling _eq_ new BABYLON.Vector3(100_co_ 100_co_ 1)_sm__lt_br /_gt_\n\t    border3.position.y _eq_ -5.0_sm__lt_br /_gt_\n\t    border3.position.z _eq_ -50.0_sm__lt_br /_gt_\n\t    border3.checkCollisions _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var groundMat _eq_ new BABYLON.StandardMaterial(_qt_groundMat_qt__co_ scene)_sm__lt_br /_gt_\n\t    groundMat.diffuseColor _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 0.5)_sm__lt_br /_gt_\n\t    groundMat.emissiveColor _eq_ new BABYLON.Color3(0.2_co_ 0.2_co_ 0.2)_sm__lt_br /_gt_\n\t    groundMat.backFaceCulling _eq_ false_sm__lt_br /_gt_\n\t    ground.material _eq_ groundMat_sm__lt_br /_gt_\n\t    border0.material _eq_ groundMat_sm__lt_br /_gt_\n\t    border1.material _eq_ groundMat_sm__lt_br /_gt_\n\t    border2.material _eq_ groundMat_sm__lt_br /_gt_\n\t    border3.material _eq_ groundMat_sm__lt_br /_gt_\n\t    ground.receiveShadows _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    // Physics_lt_br /_gt_\n\t    box0.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(box0_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass_dd_ 2_co_ friction_dd_ 0.4_co_ restitution_dd_ 0.3 }_co_ scene)_sm__lt_br /_gt_\n\t    ground.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(ground_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass_dd_ 0_co_ friction_dd_ 0.5_co_ restitution_dd_ 0.7 }_co_ scene)_sm__lt_br /_gt_\n\t    border0.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(border0_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass_dd_ 0 }_co_ scene)_sm__lt_br /_gt_\n\t    border1.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(border1_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass_dd_ 0 }_co_ scene)_sm__lt_br /_gt_\n\t    border2.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(border2_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass_dd_ 0 }_co_ scene)_sm__lt_br /_gt_\n\t    border3.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(border3_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass_dd_ 0 }_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    part0.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(part0_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass_dd_ 2_co_ friction_dd_ 0.4_co_ restitution_dd_ 0.3 }_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    return scene_sm__lt_br /_gt_\n\t}_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-18T15:39:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is because Chrome supports Webgl2 and thus uses the GPUParticleSystem instead of regular particles. The problem is that GPUParticleSystem needs to be disposed and recreated_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/particles#stopping-a-gpu-particle-system_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/particles#stopping-a-gpu-particle-system_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]