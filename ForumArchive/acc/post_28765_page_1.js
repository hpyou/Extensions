[{"Owner":"BeanstalkBlue","Date":"2017-03-01T00:22:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen I am fullscreen the canvas is not 100% height even though my CSS makes it that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I resize the window the canvas height_dd_width is always 2_dd_1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid I set code that makes this happen somewhere that I forgot? I searched everywhere but can_t_t figure this one out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems like my code is the same as the babylon website Demo code_co_ so I dont understand _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSee attached images_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/fullscreen-resize-error.png.c6795584c0c1f7ce60d03ef942b6f28a.png_qt_ data-fileid_eq__qt_11837_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_fullscreen-resize-error.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11837_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/fullscreen-resize-error.thumb.png.bb87eab9667ef488efb67d5bf783a9ab.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/small-screen-resize-wrong-aspect.png.7fb465f43a94f3cbfb1cc362600b7135.png_qt_ data-fileid_eq__qt_11838_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_small-screen-resize-wrong-aspect.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11838_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/small-screen-resize-wrong-aspect.thumb.png.aa0d769a9f92e7049802c46edb617f4f.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-01T00:41:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou canvas and your body and your html have all to be at 100%/100% (something like that_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/index.css#L1_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/index.css#L1_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOther question_dd_ which element do you use when calling setFullscreen?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BeanstalkBlue","Date":"2017-03-01T01:36:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm_co_ I have that. When calling fullscreen I press F11 in my browser.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut as you can see from screenshot #2 above_co_ the canvas also resizes when I open the inspector_co_ and it doesn_t_t fill the screen_co_ it stays at exactly 2.0 aspect ratio. (You can also see I have width_dd_100% and height_dd_100% in my #renderCanvas CSS. I copied the Babylon Demo CSS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo matter what size I make the window_co_ the canvas is 2_dd_1 aspect ratio (height _eq_ 2*width).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there maybe code that I wrote that controls this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BeanstalkBlue","Date":"2017-03-01T02:54:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe CSS and the problem I describe can be seen in the app here_dd_ _lt_a href_eq__qt_https_dd_//scarlet6.com/pre-alpha/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//scarlet6.com/pre-alpha/_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-01T05:00:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tJust add a style to the div containing the canvas and set height_dd_100%\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BeanstalkBlue","Date":"2017-03-01T05:13:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ haha. Embarassing. I was setting height on the canvas but not on the parent div.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks as usual _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]