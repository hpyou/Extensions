[{"Owner":"Nabroski","Date":"2016-12-09T22:07:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154431_qt_ data-ipsquote-contentid_eq__qt_26886_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481291289_qt_ data-ipsquote-userid_eq__qt_8101_qt_ data-ipsquote-username_eq__qt_Convergence_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t47 minutes ago_co_ Convergence said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I_t_m working on performance now.. If you have a minute_co_ you can try to see if disabling render targets helps (click the FPS meter to open the babylon debug layer_co_ then uncheck render targets). But I_t_ll get a more rigorously optimized version out soon with a settings dialog to disable and enable certain options.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHmm_co_ what FPS are you getting for this link? _lt_a href_eq__qt_http_dd_//misc.blicky.net/c2/?id_eq_1&amp_sm_highfps_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//misc.blicky.net/c2/?id_eq_1&amp_sm_highfps_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ that_t_s it!  60fps with your link_co_ but also a lot of error msg_dd__lt_br /_gt_\n\tI was in a bad attitude this morning_co_ so nevermind me. _lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/log-citygen.JPG.3aa246b6c41fb2b0c62857ae49365492.JPG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_10660_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/log-citygen.thumb.JPG.67d1de8d07ebbb482254a2abdf8d1a7e.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_log-citygen.JPG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-10T03:37:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOther option_dd_ you can keep your shadows but set the rendertexture to render only once (or only when you want to update the texture)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLike generator.getShadowMap().refreshRate _eq_ BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2016-12-10T04:00:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154532_qt_ data-ipsquote-contentid_eq__qt_26886_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481321244_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYes_co_ that_t_s it!  60fps with your link_co_ but also a lot of error msg_dd__lt_br /_gt_\n\t\t\tI was in a bad attitude this morning_co_ so nevermind me. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo worries_sm_ hope its better now. Yikes_co_ that might just be a network error (I can_t_t seem to reproduce it)_sm_ would a refresh (or two) help?\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154558_qt_ data-ipsquote-contentid_eq__qt_26886_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481341062_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t25 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOther option_dd_ you can keep your shadows but set the rendertexture to render only once (or only when you want to update the texture)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tLike generator.getShadowMap().refreshRate _eq_ BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you_sm_ I tried setting it to 0 or 10 or so (sorry numbers are easier to remember than long constants)_co_ however if I set it to anything other than 1 it starts to flicker badly _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-10T07:12:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh Ok_co_ i_t_m sorry - its again only me. You are using babylonjs 2.3 and im on chrome 56 with webgl 2.0 many things will break_co_ it_t_s a expected behavior. Its a dev build of chrome (im a devloper) til it hit the marked you can run your website at least for 1year. then probably you just have to change the babylonjs version. so its not a big deal_lt_br /_gt__lt_br /_gt_\n\ti think _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ already make good plans to kick complicity backward compatibility in 2.6 babylonjs i look at_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/previous%20releases/babylon.1.11.js_qt_ rel_eq__qt_external nofollow_qt__gt_ babylonjs 1.0.1_lt_/a_gt_ on github_co_  back to the roots! yeah! _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8101-convergence/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8101_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8101-convergence/_qt_ rel_eq__qt__qt__gt_@Convergence_lt_/a_gt__lt_br /_gt_\n\tYour website runs wonderful (60pfs) with a common browser installed on my system! Great Work. Good Luck! _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-12-10T10:02:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tand maybe is there a way to not compute the shadows each frame_co_ as the only main light source is the sun and the sun doesn_t_t really move each frame_co_ does it ? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-11T02:01:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt will flicker if meshes in the shadows are moving. But I was thinking about using one shadowmap for the building (and keep it with renderOnce) and one for moving objects only\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-12-12T19:11:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWoaw_co_ that_t_s so crazily impressive !!! Totally awsome_co_ man\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2016-12-13T02:15:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_154670_qt_ data-ipsquote-contentid_eq__qt_26886_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481421695_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/11/2016 at 10_dd_01 AM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt will flicker if meshes in the shadows are moving. But I was thinking about using one shadowmap for the building (and keep it with renderOnce) and one for moving objects only\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tGood to know _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s a clever suggestion_sm_ unfortunately when tried_co_ it seems incompatible with BitOfGold_t_s function of manipulating the shadowGenerator_t_s matrix to adapt to one single mesh that scales with the camera radius. But the solution will probably involve renderOnce somehow..\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-13T17:13:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt should work (and you can also make the BitOfGold_t_s update optional)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]