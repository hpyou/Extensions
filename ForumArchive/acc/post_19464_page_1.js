[{"Owner":"G&#039;kar","Date":"2015-12-26T13:01:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi all._lt_br_gt__lt_br_gt_Continuing to test babylonJS feature/environment/..._lt_br_gt_Today get a work in progress showing shadermaterial in action._lt_br_gt_I share my work in progress (possibly helpful to other as well)_co__lt_/p_gt__lt_p_gt_and look around for hint from the _qt_gurus_qt_ reading this forum._lt_br_gt__lt_br_gt_So far_co_ I play with_dd__lt_br_gt_- shadermaterial (mainly fragment shader to get pixel color)_lt_br_gt_    vertex shader get position of vertex_co_ transfered as varying to fragment shader_lt_br_gt_    then the fragment shader use (x_co_y_co_z) position to select color according to geometric equation._lt_br_gt_- test how to embed shader code inside javascript for playground packaging_lt_br_gt_    (thanks again to Wingnut and Vousk-prod. for the help)_lt_br_gt_- uniform parameter control from javascript (render loop.or at shaderMaterial creation time)_lt_br_gt_    I get nice effect like color spot with size varying with time on the ball objects._lt_br_gt_- action event handling_dd__lt_br_gt_    capture keyboard event_co_ and mesh pick action to change dynamically shader parameters._lt_br_gt_- basic testing of dynamic texture and drawtext (background plane with text scrolling)_lt_br_gt__lt_br_gt_Scene is available here_dd__lt_br_gt_On playground_dd__lt_br_gt_    _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10BT9S%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10BT9S#0_lt_/a_gt__lt_br_gt_On my web server_dd__lt_br_gt_    _lt_a href_eq__qt_http_dd_//ip666.org/~babylonjs/bjs_demo/icosphere-shadermaterial/babylon.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//ip666.org/~babylonjs/bjs_demo/icosphere-shadermaterial/babylon.html_lt_/a_gt__lt_br_gt_    All files available in directory_lt_br_gt_    _lt_a href_eq__qt_http_dd_//ip666.org/~babylonjs/bjs_demo/icosphere-shadermaterial/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//ip666.org/~babylonjs/bjs_demo/icosphere-shadermaterial/_lt_/a_gt__lt_br_gt__lt_br_gt_I try to put the bare minimum of comment in the code to help you guy understood what if have done._lt_br_gt_Let me know your question if you are interested in more explanations._lt_/p_gt__lt_p_gt_I can elaborate more comments._lt_br_gt__lt_br_gt_So far_co_ I am quite happy with first result to get dot colorization on the mesh to get very sharp border edge._lt_br_gt_Thanks to GPU processing the xyz position at fragment shader level to define the color to use._lt_br_gt_As an example of what I didn_t_t like_co_ I put a gray ball with texture based red dot._lt_br_gt_My texture based ball drawing gets pixelated as soon as the camera get closer to the mesh surface._lt_br_gt_(my initial reason to investigate the shader material at the beginning)_lt_br_gt__lt_br_gt_Next steps_dd_ Trig a few question on strategy/optimization_dd__lt_br_gt_- multiple shader material instances ?_lt_br_gt_    Each of the 4 balls have its own shader material instantiated from same source file (.fx)_lt_br_gt_    I only change the uniform parameter to get different color or painting pattern for dot sizes._lt_br_gt_    Sounds not optimum to duplicate shader to do almost exactly the same thing._lt_br_gt_    (so far only 4 balls and simple scene_co_ so no perfo issue_co_ but later ...)_lt_br_gt_    Could it be a way to have a ball ID_co_ or other parameter (a mesh specific uniform or ???)_lt_br_gt_    to tune the behavior to get similar effect without shader duplication ?_lt_br_gt_    (can try to have a per vertex attribute_co_ that will carry needed info like a mesh ID_co__lt_br_gt_    but sound like it is a heavy cost to have that for every vertex_co_ or not ?)_lt_br_gt__lt_br_gt_-   shader material seems exclusive to standard material._lt_br_gt_    Ok_co_ I can handle my specific behavior in the shader code_co_ but_lt_br_gt_    in an ideal world_co_ I would like to hook to existing standard material_lt_br_gt_    to enjoy as well all the nice feature available in standardMaterial_lt_br_gt_    (bump_co_ specular_co_ texture map_co_ ...)_lt_br_gt_    Is there in idea/pointer/doc/example that I can investigate to find options ?_lt_br_gt_    Does any hooks exist in standard material to add my shader code or ?_lt_br_gt_    I prefer not to re-invent the wheel and brute force recode a full standard_lt_/p_gt__lt_p_gt_    material feature in my own shader._lt_br_gt__lt_br_gt_-   text drawing on ball_lt_br_gt_    I would like to have text drawn on mesh_lt_br_gt_    (like ball number_co_ for billiard application a nine or eigth ball needs this)_lt_br_gt_    Ground plane text display in the scene gives my confidence is should be achievable_lt_br_gt_    more or less easily_co_ but this rely on standard material_lt_br_gt_    (so again I would like to connect shader and standard material ?)_lt_br_gt__lt_br_gt_-   Shader material to dispatch to multiple standard material._lt_br_gt_    Another of my pending idea to follow._lt_br_gt_    I imagine it may be possible to have a shader material (skeleton like the one I put in place)_lt_br_gt_    that select among several standard material available_lt_br_gt_    (instead of providing a color as output of fragment shader_co_ may an ID of of standard material)_lt_br_gt_    OK_co_ just thinking_co_ not sure it is realistic_co_ but looking for idea to continue._lt_br_gt__lt_br_gt_My goal at the moment is to get much more realistic billiard ball rendering. Especially with light reflection_co__lt_br_gt_have dirt/scratch/chalk or any imperfections on the surface._lt_br_gt__lt_br_gt_Thanks in advance if anyone can provide ideas on how to go on ...._lt_br_gt_And thanks again to all past contributors to BJS and forums (already find lots of inputs to my questions)_lt_br_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]