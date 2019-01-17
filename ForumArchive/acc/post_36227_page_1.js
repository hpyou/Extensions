[{"Owner":"HoloLite","Date":"2018-03-08T23:29:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis question is for _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using the insider preview build of HoloLens (official build) and able to run the aframe samples webvr using Edge on the HoloLens.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe babylonjs won_t_t run though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote that there is a newer version of build HoloLens (unofficial one) where one confirmed babylonjs can run fine. (Unfortunately I did not bring my HoloLens at the summit to receive the update).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess my question is why is it that on this older build only aframe can run but not Babylon ? This older Edge certainly supports webvr.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthough this is not webxr yet_co_ it_t_s pretty exciting to see webvr app can run on the HoloLens now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-03-09T01:54:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUpon further check_co_ webvr.info says the browser does not support webvr. It_t_s weird aframe managed to get it working. Anyway_co_ this thread is moot point now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-09T11:03:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t really have a factual answer to that_co_ but my assumption would be - specifications are different. We currently support webvr 1.1_co_ it might have supported 1.0 (which_co_ despite the miner-version upgrade it actually a major change in the API).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-09T16:40:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI guess Raanan is right as I see no other reasons why we could not support WebVR in Hololens if AFrame manages to do it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-03-09T17:06:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think he_t_s right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I did a little test by checking the navigator.getVRDisplays and this returns null_co_ which means no webvr 1.1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe navigator.getVRDevices also returns null_co_ which probably means this is even pre webvr 1.0 ? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-09T17:10:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think so. I don_t_t understand how AFrame does that\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-03-09T17:14:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is kinda mystery _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]