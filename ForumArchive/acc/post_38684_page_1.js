[{"Owner":"HoloLite","Date":"2018-07-06T17:48:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter updating from alpha9 to 11_co_ I noticed the following API changes in bjs on_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\taction manager\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tshadow generators.\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tHere are the compile errors_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ERROR in ClientApp/app/VkCore/Vk.ts(414_co_38)_dd_ error TS2551_dd_ Property _t__actionManagers_t_ does not exist on type _t_Scene_t_. Did you mean _t_actionManager_t_?\nClientApp/app/VkCore/Vk.ts(704_co_20)_dd_ error TS2551_dd_ Property _t__actionManagers_t_ does not exist on type _t_Scene_t_. Did you mean _t_actionManager_t_?\nClientApp/app/scenes/CityExplorer.ts(691_co_192)_dd_ error TS2339_dd_ Property _t_shadowGenerators_t_ does not exist on type _t_AssetContainer_t_._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWould someone know what_t_s the new replacement api should be ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-07-06T17:55:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_br /_gt_\n\tBtw_co_ upon looking at my codes deeper_co_ those references are not critical and I could safely remove them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am guessing though that there are some changes in the action manager and shadow in bjs. Right? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-06T18:18:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell we moved some _ properties to public ones (like _actionManagers to actionManagers_co_ etc..)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo yes they changed. But as they were starting with _qt___qt_ they are not considered part of the public API and should not be used _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Only public ones should be used_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-07-06T18:49:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGot it. Thanks for the explanations. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]