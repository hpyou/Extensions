[{"Owner":"JCPalmer","Date":"2015-04-26T17:59:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I was trying to merge the individual _qt_Letter_qt_ meshes of a _qt_Label_qt_ into a single Mesh sub-class of Letter.  I made changes to Mesh.MergeMeshes to handle optionally doing it to a sub-class_co_ &amp_sm_ allowed a mesh in the source array to be null (I use this for space characters)._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_/** * Merge the array of meshes into a single mesh for performance reasons. * @param {Array&lt_sm_Mesh&gt_sm_} meshes - The vertices source.  They should all be of the same material.  Entries can empty * @param {boolean} disposeSource - When true (default)_co_ dispose of the vertices from the source meshes * @param {boolean} allow32BitsIndices - When the sum of the vertices &gt_sm_ 64k_co_ this must be set to true. * @param {Mesh} meshSubclass - When set_co_ vertices inserted into this Mesh.  Meshes can then be merged into a Mesh sub-class. */public static MergeMeshes(meshes_dd_ Array&lt_sm_Mesh&gt_sm__co_ disposeSource _eq_ true_co_ allow32BitsIndices?_dd_ boolean_co_ meshSubclass?_dd_ Mesh)_dd_ Mesh {    if (!allow32BitsIndices) {        var totalVertices _eq_ 0_sm_        // Counting vertices        for (var index _eq_ 0_sm_ index &lt_sm_ meshes.length_sm_ index++) {            if (meshes[index]){                totalVertices +_eq_ meshes[index].getTotalVertices()_sm_                if (totalVertices &gt_sm_ 65536) {                    Tools.Warn(_qt_Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices _eq_ true to use 32 bits indices_qt_)_sm_                    return null_sm_                }            }        }    }    // Merge    var vertexData      _dd_ VertexData_sm_    var otherVertexData _dd_ VertexData_sm_    var source _dd_ Mesh_sm_    for (index _eq_ 0_sm_ index &lt_sm_ meshes.length_sm_ index++) {        if (meshes[index]){            otherVertexData _eq_ VertexData.ExtractFromMesh(meshes[index]_co_ true)_sm_            otherVertexData.transform(meshes[index].getWorldMatrix())_sm_                            if (vertexData){                vertexData.merge(otherVertexData)_sm_            }else{                vertexData _eq_ otherVertexData_sm_                source _eq_ meshes[index]_sm_            }        }    }    if (!meshSubclass){        meshSubclass _eq_ new Mesh(source.name + _qt__merged_qt__co_ source.getScene())_sm_    }    vertexData.applyToMesh(meshSubclass)_sm_    // Setting properties    meshSubclass.material _eq_ source.material_sm_    meshSubclass.checkCollisions _eq_ source.checkCollisions_sm_    // Cleaning    if (disposeSource) {        for (index _eq_ 0_sm_ index &lt_sm_ meshes.length_sm_ index++) {            if (meshes[index]){                meshes[index].dispose()_sm_            }        }    }    return meshSubclass_sm_}_lt_/pre_gt__lt_p_gt_Because I am also using clones_co_ &amp_sm_ the merge process uses transforms_co_ I had to change how getVerticesData optionally works (and plumbing of the in between function calls for this in Geometry_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_public getVerticesData(kind_dd_ string_co_ copyWhenShared? _dd_ boolean)_dd_ number[] {    var vertexBuffer _eq_ this.getVertexBuffer(kind)_sm_    if (!vertexBuffer) {        return null_sm_    }    var orig _eq_ vertexBuffer.getData()_sm_    if (!copyWhenShared || this._meshes.length _eq__eq__eq_ 1){        return orig_sm_    }else{        var len _eq_ orig.length_sm_        var copy _eq_ []_sm_        for (var i _eq_ 0_sm_ i &lt_sm_ len_sm_ i++){            copy.push(orig[i])_sm_        }        return copy_sm_    }}_lt_/pre_gt__lt_p_gt_I call MergeMeshes in the Label class_co_ with allow32BitIndices false here_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_/** * @override */public _layout(widthConstraint _dd_ number_co_ heightConstraint _dd_ number)_dd_ void {    var mergeLater _eq_ !Label.NO_MERGING &amp_sm_&amp_sm_ !this._prohibitMerging &amp_sm_&amp_sm_ this.getSubPanels().length &gt_sm_ 1_sm_                // always run super_t_s _layout at least once with individual Letters    super._layout(widthConstraint_co_ heightConstraint)_sm_                if (mergeLater){        var merged _eq_ new Letter(this.name + _qt_-merged_qt__co_ DialogSys._scene)_sm_        BABYLON.Mesh.MergeMeshes(this.getSubPanels()_co_ true_co_ false_co_ merged)_sm_        if (merged.getTotalVertices() &gt_sm_ 0){            this.removeAll()_sm_            this.addSubPanel(merged)_sm_            super._layout(widthConstraint_co_ heightConstraint)_sm_                        }else console.log(_qt_merge failed- _qt_ + this.name)_sm_     } }_lt_/pre_gt__lt_p_gt_It runs_co_ and some of the Display is shown_co_ but I get 32 of the above errors in the titles.  Any clues?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-26T22:01:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Based on the error_co_ this sounds like the index buffer has values that are greater than the current number of vertices in vertex buffer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This should be handled by this line_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.mesh.vertexData.ts#L169_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.mesh.vertexData.ts#L169_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-27T08:40:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_how many times did I get this message when designing ribbons and side orientation ... ? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  quite an overdose !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_Conlose.log_lt_/em_gt__co_ _lt_em_gt_indices.length_lt_/em_gt__co_ _lt_em_gt_positions.length_lt_/em_gt_ and _lt_em_gt_multiply/divide by 3_lt_/em_gt_ were my only friends to debug this just before the _lt_em_gt_applyToMesh()_lt_/em_gt_ call._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-27T16:18:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks_co_ for the area of concern.  I started this morning by having a static counter of # of Labels merged so far and limit I kept upping.  It worked up to a Label with the letters _qt_LCD_qt_.  I put the _qt_L_qt_ in Label that merged earlier to see what would happen.  No errors._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Beginning to suspect that I did not get all the changes necessary to merge clones_co_ so I hacked TOB and generated a font2D.js that never generates clones.  No errors with no limits as to how many Labels to merge._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_No sure where to look_co_ but my test is way to big.  Need to come up with a Panel much smaller_co_ but still shows the error._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]