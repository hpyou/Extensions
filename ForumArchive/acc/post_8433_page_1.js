[{"Owner":"AlexB","Date":"2014-08-08T21:35:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey guys_co_ I thought I_t_d post this for anyone to use. I wrote this function for Away3D_co_ and I just ported it to TypeScript to see if it would work with Babylon. Basically_co_ you run the moveCamera function in your render loop. It takes a FreeCamera and a target mesh and follows the object around using easing. Mostly like the ArcRotate camera but it doesn_t_t have a set distance. It sets a _qt_goal_qt_ for (x_co_y_co_z) and eases to it. So you can use this to follow a character around or a ball_co_ etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ here_t_s the code in TS. If this is useful to anyone I can take the time to create a fork and submit a PR?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_module cameras {export class CameraFollow {public radius_dd_number _eq_ 12_sm_public CAMERA_SPEED _eq_ 0.05_sm_public MAX_CAMERA_SPEED_dd_number _eq_ 20_sm_public orbit_dd_number _eq_ 0_sm_public height_dd_number_eq_3_sm_constructor() {}private getRadians (degrees)_dd_number {return degrees * Math.PI / 180_sm_}public moveCamera(camera_dd_BABYLON.FreeCamera_co_ cameraTarget_dd_BABYLON.AbstractMesh) {if (!cameraTarget)return_sm_if (!camera)return_sm_var radians_dd_number _eq_ this.getRadians(cameraTarget.rotation.y - this.orbit)_sm_var targetX_dd_number _eq_ cameraTarget.position.x + Math.sin(radians) * this.radius_sm_var targetZ_dd_number _eq_ cameraTarget.position.z + Math.cos(radians) * this.radius_sm_var dx_dd_number _eq_ targetX - camera.position.x_sm_var dy_dd_number _eq_ (cameraTarget.position.y + this.height) - camera.position.y_sm_var dz_dd_number _eq_ (targetZ) - camera.position.z_sm_var vx_dd_number _eq_ dx * this.CAMERA_SPEED * 2_sm_//this is set to .05var vy_dd_number _eq_ dy * this.CAMERA_SPEED_sm_var vz_dd_number _eq_ dz * this.CAMERA_SPEED * 2_sm_if (vx &gt_sm_ this.MAX_CAMERA_SPEED || vx &lt_sm_ -this.MAX_CAMERA_SPEED) {vx _eq_ vx &lt_sm_ 1 ? -this.MAX_CAMERA_SPEED _dd_ this.MAX_CAMERA_SPEED_sm_ //max speed is 40}if (vy &gt_sm_ this.MAX_CAMERA_SPEED || vy &lt_sm_ -this.MAX_CAMERA_SPEED) {vy _eq_ vy &lt_sm_ 1 ? -this.MAX_CAMERA_SPEED _dd_ this.MAX_CAMERA_SPEED_sm_}if (vz &gt_sm_ this.MAX_CAMERA_SPEED || vz &lt_sm_ -this.MAX_CAMERA_SPEED) {vz _eq_ vz &lt_sm_ 1 ? -this.MAX_CAMERA_SPEED _dd_ this.MAX_CAMERA_SPEED_sm_}camera.position _eq_ new BABYLON.Vector3(camera.position.x + vx_co_ camera.position.y + vy_co_ camera.position.z + vz)_sm_camera.setTarget(cameraTarget.position)_sm_}}}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-08T23:02:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I added this. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/jumpkick-studios/Babylon.js/blob/master/Babylon/Cameras/babylon.followCamera.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/jumpkick-studios/Babylon.js/blob/master/Babylon/Cameras/babylon.followCamera.ts_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Usage is really simple_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_//adjust the paramsscene.activeCamera.heightOffset_eq_4_sm_ //height above the objectscene.activeCamera.rotationOffset_eq_180_sm_ // follow from the rearscene.activeCamera.radius_eq_12_sm_ // how far from the objectscene.activeCamera.cameraAcceleration_eq_0.05 // how fast to movescene.activeCamera.maxCameraSpeed_eq_20 // speed limit//follow the objectengine.runRenderLoop(function() {   scene.render()_sm_   var car_eq_scene.getMeshByName(_qt_car_qt_)_sm_   scene.activeCamera.follow(car)_sm_})_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-09T00:35:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_This feature is interesting. I tested it. Currently I use an ArcRotateCamera that follows a character._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Is it works with all cameras? (free_co_ rotate...)_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thanks for the feature._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-09T00:59:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Right now it_t_s just extending the FreeCamera. I was thinking that the problem with the ArcRotate is that it sets a certain distance from the object and sticks to it_co_ so there_t_s no easing. So if you were making a car game_co_ you wouldn_t_t want to just lock to the car or else your view would be jerky. The first example above used a composition but I was thinking it would be better as its own camera type and extending the basic free camera. I think to use with the ArcRotate you_t_d have to override some of the positioning anyway so I_t_m not sure how useful it would be there._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-08-09T04:10:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The only ask I can make is_dd_ keep it simple and remove the follow function. by default the camera._checkInputs function is called on every frame_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Other question_dd_ are you using collisions mecanism from freeCamera? if no_co_ I would prefer creating a brand new camera (but using collisions can be interesting tough_dd_))_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-09T05:30:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Deltakosh_co_ let me look at the code a little more closely tomorrow. I_t_m not using the collisions_co_ I only subclassed the freeCamera because I thought it was the right one to use. I_t_m happy to adjust_co_ but can you explain the request about the follow function? Should I move the follow invocation into the _checkInputs call? Perhaps it should use the target property you already have? Again_co_ I_t_ll take a look_co_ but any guidance you have would be great!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-08-09T16:17:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_First of all thank you for your submission _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes please move the code from follow to _checkInputs so that user should not have to call it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ (I always try to reduce the number of line of code that the user must have to use)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also using the target property could be better _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-09T16:59:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Great_co_ and you_t_re welcome. This library is just phenomenal! So I should have an update soon. I took out the follow command and made the camera subclass BABYLON.Camera_co_ removing superfluous code. Now it won_t_t check inputs anymore at all_co_ which really it shouldn_t_t. If it_t_s just trying to follow a car_co_ then you use inputs to move the car_co_ not the camera_co_ right?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I also added a _qt_target_qt_ property so the user can use it like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_camera.target_eq_myCharacter_sm__lt_/pre_gt__lt_p_gt_Then the camera just locks onto that mesh_t_s position and rotation from that point on. I just need to do some more testing and clean up the code. One question_co_ though_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I copied a lot of the code from the freeCamera class_co_ so now the code isn_t_t as DRY as it should be. Should there be some sort of other class we create that extends Camera_co_ that both freeCamera and followCamera could extend?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-08-09T17:12:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_We should _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ If there is a lot of shared code this is definitely what we have to do_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What about BABYLON.BasicCamera as name ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-09T17:22:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think that works_co_ although I_t_m not sure it_t_s very descriptive. Would you like me to integrate this?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-08-09T18:09:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_As you wish _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ This is your idea so feel free to integrate it_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But if we can keep the inheritance from freeCamera it would be even simpler. You should just have to deal with collisions right?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-09T18:27:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I wasn_t_t planning on dealing with collisions at all. Actually_co_ I_t_m not so sure how to accomplish this. So maybe I take it as far as I can and if someone wants to work with collisions they can use my version as a base?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Either way_co_ I can do the DRY stuff and then I_t_ll submit a new PR._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-08-09T18:38:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So no problem just create a new root camera with two children_dd_ freeCamera and followCamera _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ that is perfect to me_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-09T18:41:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_That would be really good if the collision could work also for the use I want to do (for test)._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_see this topic_dd_  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/8144-camerarotative-with-collisions/?p_eq_48719_qt__gt_http_dd_//www.html5gamedevs.com/topic/8144-camerarotative-with-collisions/?p_eq_48719_lt_/a_gt__lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-09T22:09:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ I think I have it working_co_ but I_t_m running into issues testing. I_t_m using PHPStorm (not Visual Studio) and if I add the two new camera files manually it works_co_ but if I build the code using Gulp_co_ I get some strange errors. I_t_m totally lost in VS2013 (installing now) but I may need some help integrating. Stay tuned._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-13T17:43:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Code is in_co_ if anyone wants to test  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Cameras/babylon.followCamera.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Cameras/babylon.followCamera.ts_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-14T12:08:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_You have some explanation and example on FollowCamera and TargetCamera. What are their differences?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Support it the Anaglyph as the freeCamera or the ArcRotateCamera? consider it you? This would be very useful._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Thanks for these new camera._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-14T15:02:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_targetCamera is really just a base class to avoid writing code twice. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_freeCamera usage has not changed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_followCamera works like this._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ var camera _eq_ new BABYLON.FollowCamera(_qt_FollowCamera_qt__co_ new BABYLON.Vector3(0_co_0_co_0)_co_ scene)_sm_        camera.heightOffset _eq_ 8_sm_ //how high up from the object to place the camera        camera.radius _eq_ 30_sm_ // how far from the object to follow        camera.rotationOffset _eq_ 180_sm_ //rotate around the object (if it_t_s imported strangely or you want to follow from the front)        camera.target _eq_ myMeshObject_sm_ //any mesh or object with a _qt_position_qt_ Vector3        scene.activeCamera _eq_ camera_sm_ //set the active camera_lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-16T11:46:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks AlexB._lt_/p_gt__lt_p_gt_\n _lt_/p_gt__lt_p_gt_\nIt works_co_ but one thing does not work well_co_ or I miss something with rotationOffset.  The camera does not turn around the object_lt_/p_gt__lt_p_gt_\n _lt_/p_gt__lt_p_gt_\n_lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1CC7UC%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1CC7UC#4_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-16T17:45:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s doing exactly what it should. The rotationOffset is the angle at which it should orient itself as the _qt_goal_qt_ rotation. So try adding some keyboard controls to move your model. Make a left/right key turn your model and change its direction. The camera should swing smoothly around and continue following_co_ still from the back. It_t_s the easing that helps this work nicely._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ETA_dd_ Maybe there_t_s a bug here. Doing some testing..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-08-16T18:11:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah ok_co_ I see_co_ I thought that it was the mouse that controlled the camera_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-17T00:19:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I fixed the bug and submitted a pull request. I didn_t_t realize that Babylon rotations were already in radians_co_ so my conversion formula was not correctly following the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To fix_co_ change this line_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var radians _eq_ this.getRadians(cameraTarget.rotation.y - this.rotationOffset)_sm__lt_/pre_gt__lt_p_gt_To_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var radians _eq_ this.getRadians(this.rotationOffset)+cameraTarget.rotation.y_sm__lt_/pre_gt__lt_p_gt_Now_co_ if you rotate your model_co_ the camera should follow correctly._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-08-17T01:25:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Alex... thanks for the new camera!  (And thanks for showing us how to use it_co_ too!)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Umm... I have some concerns.  I_t_m not much of a coder_co_ but_co_ _t_easing_t_ seems like it COULD be complicated.  There_t_s linear_co_ and log_co_ and ease-in and ease-out_co_ etc.  There could be lots of properties to give the user flexibility in _t_easing types_t_. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there potential for CPU slowdown while easings are finishing?  Are the easings on forked threads?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  (Just being funny.  I don_t_t think we have forking in JS.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_FollowCam is a great tool/idea_co_ and I_t_d love to see it code-tight and feature-fleshed (whatever the hell THAT means).  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now I_t_ll ask something seriously uninformed.  Can it be done without creating a new class called TargetCamera?  Maybe it CAN be done that way_co_ but it shouldn_t_t?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Again_co_ pardon my lack of programming experience_co_ especially when it comes to inheritence.  All you JS Gods probably have all these things totally under control.  I_t_m just trying to figure out if TargetCamera should be included in our cameras tutorial_co_ or if it is a special tool used (only) for FollowCamera (and thus maybe NOT included in our tutorials).  *shrug* _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_FollowCamera is DEFINITELY going into our camera tutorial.  It rocks!  (Well_co_ it probably only rocks when its target is a physics-active box that is bouncing around on a rubber-room floor.)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I bet THAT would wear-out the gimbal bearings on the FollowCamera rather quickly._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2014-08-17T01:39:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_51316_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_8433_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1408238759_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hey Alex... thanks for the new camera!  (And thanks for showing us how to use it_co_ too!)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Umm... I have some concerns.  I_t_m not much of a coder_co_ but_co_ _t_easing_t_ seems like it COULD be complicated.  There_t_s linear_co_ and log_co_ and ease-in and ease-out_co_ etc.  Is there potential for CPU slowdown while easings are finishing?  Are the easings on forked threads?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  (Just being funny.  I don_t_t think we have forking in JS.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_FollowCam is a great tool/idea_co_ and I_t_d love to see it code-tight and feature-fleshed (whatever the hell THAT means).  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now I_t_ll ask something seriously uninformed.  Can it be done without creating a new class called TargetCamera?  Maybe it CAN be done that way_co_ but it shouldn_t_t?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Again_co_ pardon my lack of programming experience_co_ especially when it comes to inheritence.  All you JS Gods probably have all these things totally under control.  I_t_m just trying to figure out if TargetCamera should be included in our cameras tutorial_co_ or if its a special tool used (only) for FollowCamera.  *shrug*  I included many other dumb comments just because I was curious.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hi Wingnut_co_ I_t_m 100% sure the code can be tightened up. I_t_ve been really busy and honestly rushed it out a bit. But to answer your questions_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Easing can definitely slow things down. I_t_m doing some basic trig functions to calculate the x and z position of the camera_co_ based on the angle of the object. If you know the angle/hypotenuse of a triangle_co_ then the opposite and adjacent are easy to figure. The only thing I can think of to optimize this is to only do these calculations where the _qt_goal_qt_ position is within a threshold of the actual position. Maybe store the previous vector and compare before doing further calculations? I just don_t_t know if this will make it better or worse _dd_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ why create the subclass? I_t_m using a lot of the code from the freeCamera_co_ and Deltakosh correctly noticed that a lot of that code wasn_t_t being used_co_ which is a bad idea. So I guess we can do two things. a) we can write a new class that duplicates some code from freeCamera (bad idea since then we have the same code in two places_co_ which means any bug fix happens twice or creates new bugs) or we make a subclass. I_t_m sure there are other approaches too_co_ but I_t_m not comfortable enough with the code base to get too radical _dd_-) Always open to suggestions!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ I *think* TargetCamera should not be included in a tutorial_co_ since it really is just a common library of code for both freeCamera and followCamera. I take it you don_t_t have an entry on the basic camera?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-08-17T14:00:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ thanks Alex... good information.  Correct_co_ the basic camera isn_t_t mentioned in the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/05-Cameras_qt_ rel_eq__qt_external nofollow_qt__gt_cameras tutorial_lt_/a_gt_.  I won_t_t plan on adding TargetCamera to the tutorial_co_ but I am not the only tutorial editor or decision maker regarding such things. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And you are certainly welcome to add things to the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/05-Cameras_qt_ rel_eq__qt_external nofollow_qt__gt_cameras tutoria_lt_/a_gt_l yourself_co_ too_co_ at any time.  Also_co_ just because the FollowCamera goes into the tutorial_co_ does not mean you/we can_t_t add features and make changes_co_ so please don_t_t feel handcuffed or rushed by anything._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s very kind of you to be open to suggestions_co_ and thanks again for ALL your good coding work and information... well done._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know if you follow the Tutorial Talk thread_co_ but we have been learning about the FollowCam with the help of some playground scenes... _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/4983-tutorial-talk/page-5#entry51249_qt__gt_starting around here_lt_/a_gt_ in the thread.  Most of MY talking there... happened before I discovered THIS thread... which answers many of my questions.  I should learn to read more... before talking_co_ eh?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]