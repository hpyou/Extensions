[{"Owner":"DigiHz Data","Date":"2016-04-05T11:53:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt seams that all particleSystems in a .babylon scene file is automaticly started.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tParticleSystem.Parse _eq_ function (parsedParticleSystem_co_ scene_co_ rootUrl) {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tparticleSystem.start()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.......\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is great_co_ BUT.....sometimes we do NOT want all the particleSystems to start when the scene loads!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo we should add an option to the particleSystem_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn function ParticleSystem(name_co_ capacity_co_ scene_co_ customEffect) {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis.autoStart _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(true as default value_co_ but the user can set this to false and then this particleSystem will not start when the scene is loaded_co_ the user want to start this particleSystem manually later in his code.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn ParticleSystem.prototype.serialize _eq_ function () {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tserializationObject.autoStart _eq_ this.autoStart_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t......\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn ParticleSystem.Parse _eq_ function (parsedParticleSystem_co_ scene_co_ rootUrl) {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tparticleSystem.autoStart _eq_ parsedParticleSystem.autoStart_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif (particleSystem.autoStart){\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    particleSystem.start()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-04-05T12:27:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think it_t_s a great idea ! Do you mind creating a PR about it ? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-04-05T12:39:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIgnore/delete my post_co_ here.  I thought I had an easier answer_co_ but then I woke up and noticed that the topic was about particle systems that are instantiated by .babylon file imports.  At first_co_ I thought we were talking about local particle systems.  Sorry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI WAS thinking...  hey... _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?12_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/?12_lt_/a_gt_ ... just include/discard line 68 for full control.  But noooo...  Wingnut_co_ that_t_s not the subject.  (Wingnut runs for more coffee and some duct tape for his mouth.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-04-05T12:49:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_strong_gt_Temechon_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do not know how to actually do a PR. I am nt a member on github. But hopefully _lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Fforum%252F28-questions-answers%252F%253Fpage%253D2%2526listResort%253D1%2526csrfKey%253D7d3f2a07a613b6fc5eff585092abcd03_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ title_eq__qt_Go to RaananW_t_s profile_qt_ rel_eq__qt__qt__gt_RaananW_lt_/a_gt_  or _lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Fforum%252F28-questions-answers%252F%253Fpage%253D2%2526listResort%253D1%2526csrfKey%253D7d3f2a07a613b6fc5eff585092abcd03_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ title_eq__qt_Go to Deltakosh_t_s profile_qt_ rel_eq__qt__qt__gt_Deltakosh_lt_/a_gt_ will do a proper PR about this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Wingnut_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes you missed the whole idea _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tALL particleSystems autostart from a .babylon scen file when we load it!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is not allways what we want. Maybe we have 3 particleSystems in the scene_co_ but we only want 1 of them to autostart when the scene loads_co_ the other two we want to start manuall in the code.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-04-05T13:41:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe this tutorial can help you create your first PR _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_a href_eq__qt_http_dd_//pixelcodr.com/tutos/contribute/contribute.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//pixelcodr.com/tutos/contribute/contribute.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-04-05T13:54:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you Temechon_co_ i check that link a bit deeper when i get time.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-04-07T17:11:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Fforum%252F28-questions-answers%252F%253Fpage%253D2%2526listResort%253D1%2526csrfKey%253D7d3f2a07a613b6fc5eff585092abcd03_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt_ title_eq__qt_Go to RaananW_t_s profile_qt__gt_RaananW_lt_/a_gt_  or _lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Fforum%252F28-questions-answers%252F%253Fpage%253D2%2526listResort%253D1%2526csrfKey%253D7d3f2a07a613b6fc5eff585092abcd03_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt_ title_eq__qt_Go to Deltakosh_t_s profile_qt__gt_Deltakosh_lt_/a_gt_ have anything to say about this?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-04-08T06:31:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo prevent breaking changes I would have introduced a _qt_preventAutoStart_qt_ variable. Then if it is set the parse method won_t_t start the system. This way we don_t_t need to change all previous scene files to oxide auto start.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I like it a lot! I can do that later today.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-04-08T15:06:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thello RaananW.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ i do think twice before i do any suggestions here_co_ and when i do my suggestions_co_ i try to benefit all of us users of BJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_preventAutoStart_qt_ sounds good to me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-11-11T06:49:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tFYI... preventAutoStart works great... If you are using the Current BabylonExporter.Entititesyou will need to add it to the .cs class. Or wait for the PR that exposes preventAutoStart to the external exporters like 3ds max and unity3d\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]