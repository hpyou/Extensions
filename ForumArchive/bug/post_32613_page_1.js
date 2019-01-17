[{"Owner":"Bob Razowsky","Date":"2017-08-28T13:46:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI noticed something weird working with reflection texture on IE10 and Microsoft Edge.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen using a single image as reflection texture_co_  I get the error _qt_Unable to compile effect_qt__co_ _qt_Invalid arguments passed to function _t_texture2D_t__qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a PG reproducing the issue _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#IRZYH%2320_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#IRZYH#20_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s working fine on Chrome and Firefox.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-28T17:39:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately this is expected. Edge/IE do not support a required extension_dd_ texture_lod. when used with a cubemap we are doing a lot of work under the hood to generate fake LODs. But this is not done when used with a 2d texture\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I recommend to stick with a cubetexture here (or use the standard material)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]