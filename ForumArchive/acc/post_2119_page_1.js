[{"Owner":"reddozen","Date":"2013-11-13T12:44:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What is the unit of measure for the coordinate system in Babylon? I_t_m trying to convert and scale from unreal engine_co_ and I know that 16uu _eq_ 1ft._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-13T14:18:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_There is no unit of measure per se. Once you created a mesh (let_t_s say a box)_co_ you determine your own unit because every mesh is relative to others_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you see what I mean?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2013-11-13T14:41:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do_co_ but I_t_m not sure how I can properly convert a scene from one engine to another without being able to convert between the units because scale and location will be altered._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1ft_co_1ft_co_1ft is much different from 1m_co_1m_co_1m_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Overall_co_ my goal is to combine several unreal scenes into a single Babylon scene. I want to be able to define a local coordinate systems within the bounding boxes of the terrain surfaces so I_t_m not working with huge global positions_co_ and I can more easily compartmentalize the huge scene. I doubt there_t_s a current way to do this_co_ but it doesn_t_t hurt to ask. Either way_co_ my first step is to be able to convert from unreal to Babylon. We_t_re currently exporting to an OBJ file for the raw models_co_ but then cloning everything as needed to save memory since some objects are repeated 20~30 times._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-13T19:15:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you can for instance consider that your reference is 1unit_eq_1m for babylon. With this reference_co_ you can scale all the imported scene_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2013-11-13T20:48:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ll give this a try tonight. Pulling my hair out trying to get this scene to behave without duplicating all the map objects as _qt_unique_qt_ items and wasting resources._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-14T07:18:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Why do you need to duplicate objects?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2013-11-15T12:37:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_the same tree for example is used 5~6 times on the map_co_ and some training dummies are used about 10 times. Those are just a couple examples. These are pretty big scenes with around 1000 items per map._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-15T14:46:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You could use the mesh.clone() function to avoid duplicating resources_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2013-11-15T23:48:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s what I_t_m using_co_ and that_t_s why i_t_m having a hard time because I have to make sure the coordinates all line up. I could obviously bake all the items and their duplicates into the OBJ files to make things easier_co_ but I don_t_t want to waste the resources._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-16T12:35:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Agree_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yuccai","Date":"2014-06-20T11:01:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If we consider that 1 unit _eq_ 1 meter_co_ is it coherent with the physic engine and the light calculation?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yuccai","Date":"2014-06-20T11:13:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For instance in Blender we can set the modeling unit to meters_co_ if we export the scene to Babylon_co_ will the calculations be ok?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-20T13:28:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Babylon has no unit of measure. The unit are what you want_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2015-01-24T21:53:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_43512_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_2119_qt_ data-ipsquote-username_eq__qt_yuccai_qt_ data-cite_eq__qt_yuccai_qt_ data-ipsquote-timestamp_eq__qt_1403262064_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If we consider that 1 unit _eq_ 1 meter_co_ is it coherent with the physic engine and the light calculation?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For physics engine you may want to be careful with gravity value since it must be coherent with your unit. 9.81 is correct if your unit is meter otherwise you have to convert 9.81 to the right value. If 1 unit _eq_ 1 cm then gravity should be set to 981._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]