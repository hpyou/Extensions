[{"Owner":"Hazardus","Date":"2015-09-28T22:55:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m having a little trouble with actions_co_ animations_co_ and callbacks. It looks like there isn_t_t a native way to accomplish what I_t_m after_co_ but I wanted to check with the experts before I continue._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_What I_t_m trying to accomplish_dd__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_ul_gt__lt_li_gt_I want to execute an action which fires a function (callback) before and after the animation._lt_/li_gt__lt_/ul_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_I can accomplish the _qt_before_qt_ callback_lt_/strong_gt_ by creating using CombineAction_co_ but it appears the onAnimationEnd is out of my scope.. Specifically in this 1st case I_t_ve encountered_co_ I_t_m using the InterpolateValueAction - which appears to create an Animation for me (while giving me no option to inject the onAnimationEnd callback)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I looked around in _lt_em_gt_Animatable _lt_/em_gt_but it doesn_t_t seem like it is what I need either. I thought maybe I could access the animations array of the mesh but alas_co_ it_t_s empty until the action is invoked. _lt_strong_gt_Is there a native way I_t_m missing?_lt_/strong_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-28T23:20:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Hazardus_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_a playground would be nice so that everbyody know what and how exactly you want to do it. InterpolateValueAction doesn_t_t seem to have a callback function for animation end_co_ but I know scene.beginAnimation has it_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/07._Animations#parameters-for-scenebeginanimation_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/07._Animations#parameters-for-scenebeginanimation_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.2/Scene#beginanimation-target-from-to-loop-speedratio-onanimationend-animatable-rarr-animatable-classes-2-2-animatable-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.2/Scene#beginanimation-target-from-to-loop-speedratio-onanimationend-animatable-rarr-animatable-classes-2-2-animatable-_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe there is another way to achieve what you want while using beginAnimation (maybe with the ExecuteCodeAction)? Anyhow_co_ a playground that shows what you have so far might greatly help _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hazardus","Date":"2015-09-29T00:02:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sure. Here is what I have so far_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2JO9B_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2JO9B_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-29T07:30:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ you could do something like that_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2JO9B%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2JO9B#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This uses the _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ExecuteCodeAction and _lt_/span_gt_is some more code than you had before_co_ but seems to work. Maybe somebody else has a better idea or knows how to do the same with less code (maybe with using the _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_InterpolateValueAction)._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Let me know if that helped _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hazardus","Date":"2015-09-29T20:00:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmm.. I like it! I suppose InterpolateValueAction is the only one that has duration (except maybe playSoundAction)_co_ and the rest are instant (start/stop _eq_ same point in time)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It gives more control over the Animation itself_co_ which is also a plus. Being able to pass a callback would be nice_co_ but this is much better than what I was (reluctantly) considering_dd_ modifying the native function or using a Timeout._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co_ iiceman!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-29T20:31:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You are welcome _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Don_t_t forget to show us what you created when you are done!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_dd_ if it answers your question you can flag the thread as answered_co_ too._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hazardus","Date":"2015-09-29T20:47:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_98726_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17505_qt_ data-ipsquote-username_eq__qt_iiceman_qt_ data-cite_eq__qt_iiceman_qt_ data-ipsquote-timestamp_eq__qt_1443558661_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_You are welcome _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Don_t_t forget to show us what you created when you are done!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_dd_ if it answers your question you can flag the thread as answered_co_ too._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sure - it will be a while longer before I can_co_ but I_t_ll definitely share this neat little project when it_t_s done!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_By the way.. _lt_/em_gt_the _qt_Animatable_qt_ page in the docs leads to a 404 (which I _lt_em_gt_love_lt_/em_gt_ - _qt_working on my machine_qt_ hehehe). From what I gather it_t_s rarely used and just happens to be in the source code_co_ but I_t_d love to know for sure when/how/why to use this. ( the link_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/page.php?p_eq_25171_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/page.php?p_eq_25171_lt_/a_gt_ ) _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-30T07:54:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Where did you find that link? I somehow can_t_t find it... _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_or did somebody already fix this?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-09-30T07:56:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here is the correct link _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.2/Animatable_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.2/Animatable_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-30T14:21:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I just realized that the interpolateValueAction uses beginDirectAnimation wich is pretty much the same as _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_beginAnimation (they both can have that needed callback). So it would be easy to add a callback parameter to the interpolateValueAction_co_ right? Or is there a reason that the interpolateValueAction didn_t_t get that callback parameter?_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_(note to myself_dd_ learn typescript to be able to create pull requests for those simple things that even I could do to get my name on the contributor list _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hazardus","Date":"2015-10-01T03:19:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_98811_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17505_qt_ data-ipsquote-username_eq__qt_iiceman_qt_ data-cite_eq__qt_iiceman_qt_ data-ipsquote-timestamp_eq__qt_1443622861_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_is there a reason that the interpolateValueAction didn_t_t get that callback parameter?_lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wondered that myself. The same goes for BABYLON.Animation.CreateAndStartAnimation - why not 1 more parameter for simplicity? Getting to that much needed onAnimationEnd is a bit of a hassle_co_ though as Ice pointed out it can be done._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As for where I found the link_co_ it_t_s actually on the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/07._Animations_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/07._Animations_lt_/a_gt_ page under ( _lt_strong_gt_Parameters for scene.beginAnimation_lt_/strong_gt_ ). I couldn_t_t seem to find a way to edit the docs and fix it myself._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was really hoping the link would be a doc page. I_t_ve checked out Animatable in the classes section and the source code_co_ but it_t_s still a bit of a mystery to me. I haven_t_t had a chance to mess around with it just yet._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-01T17:04:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello here is the doc to update the doc _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/16365-contributing-to-documentation-101/_qt__gt_http_dd_//www.html5gamedevs.com/topic/16365-contributing-to-documentation-101/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-01T17:21:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And BOOOM _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_New constructor for InterpolateAction_dd__lt_/p_gt__lt_p_gt_constructor(triggerOptions_dd_ any_co_ target_dd_ any_co_ public propertyPath_dd_ string_co_ public value_dd_ any_co_ public duration_dd_ number _eq_ 1000_co_ condition?_dd_ Condition_co_ public stopOtherAnimations?_dd_ boolean_co_ public onInterpolationDone?_dd_ () _eq_&gt_sm_ void) {_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_new signature for CreateAndStartAnimation_dd__lt_/p_gt__lt_div_gt_public static CreateAndStartAnimation(name_dd_ string_co_ mesh_dd_ AbstractMesh_co_ targetProperty_dd_ string_co_  framePerSecond_dd_ number_co_ totalFrame_dd_ number_co_ from_dd_ any_co_ to_dd_ any_co_ loopMode?_dd_ number_co_ easingFunction?_dd_ EasingFunction_co_ onAnimationEnd?_dd_ () _eq_&gt_sm_ void)_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]