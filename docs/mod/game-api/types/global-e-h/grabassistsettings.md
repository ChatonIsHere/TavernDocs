---
title: "GrabAssistSettings"
description: "Global settings for grab assist, which searches a short path from the hand to find an item to grab and draws the path and target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistSettings

A **class** in `Root.Township`, the global namespace.

Global settings for grab assist, which searches a short path from the hand to find an item to grab and draws the path and target. Get it with `GlobalSettings<GrabAssistSettings>.Instance`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<GrabAssistSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`GrabAssistSettings`](/mod/game-api/types/global-e-h/grabassistsettings)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabAssistSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assistgrabdirection" /><code>{"private Vector3 assistGrabDirection"}</code> | <span className="api-desc">Backing field for `AssistGrabDirection`: the hand-relative direction the assist points.</span> |
| <Link id="m-assistlength" /><code>{"private float assistLength"}</code> | <span className="api-desc">Backing field for `AssistLength`: the assist reach, scaled by how far down the hand points.</span> |
| <Link id="m-assistpathmaterial" /><code>{"private Material assistPathMaterial"}</code> | <span className="api-desc">Path indicator material on non-Android platforms.</span> |
| <Link id="m-assistpathmaterialandroid" /><code>{"private Material assistPathMaterialAndroid"}</code> | <span className="api-desc">Path indicator material on Android.</span> |
| <Link id="m-assistpathmesh" /><code>{"private Mesh assistPathMesh"}</code> | <span className="api-desc">Path indicator mesh on non-Android platforms.</span> |
| <Link id="m-assistpathmeshandroid" /><code>{"private Mesh assistPathMeshAndroid"}</code> | <span className="api-desc">Path indicator mesh on Android.</span> |
| <Link id="m-assisttargetmaterial" /><code>{"private Material assistTargetMaterial"}</code> | <span className="api-desc">Backing field for `AssistTargetMaterial`.</span> |
| <Link id="m-assisttargetmesh" /><code>{"private Mesh assistTargetMesh"}</code> | <span className="api-desc">Backing field for `AssistTargetMesh`.</span> |
| <Link id="m-assisttargetnotfoundmaterial" /><code>{"private Material assistTargetNotFoundMaterial"}</code> | <span className="api-desc">Backing field for `TargetNotFoundMaterial`.</span> |
| <Link id="m-detectionradius" /><code>{"private float detectionRadius"}</code> | <span className="api-desc">Backing field for `DetectionRadius`.</span> |
| <Link id="m-foundtargetcolor" /><code>{"private Color foundTargetColor"}</code> | <span className="api-desc">Backing field for `FoundTargetColor`.</span> |
| <Link id="m-maximumanglefromdowntobeactivedot" /><code>{"private float maximumAngleFromDownToBeActiveDot"}</code> | <span className="api-desc">Backing field for `MaximumAngleFromDownToBeActiveDot`, stored as a dot product from an angle.</span> |
| <Link id="m-notargetcolor" /><code>{"private Color noTargetColor"}</code> | <span className="api-desc">Backing field for `NoTargetColor`.</span> |
| <Link id="m-obstaclelayermask" /><code>{"private LayerMask obstacleLayerMask"}</code> | <span className="api-desc">Backing field for `ObstacleLayerMask`.</span> |
| <Link id="m-pathindicatorscale" /><code>{"private Vector3 pathIndicatorScale"}</code> | <span className="api-desc">Backing field for `PathIndicatorScale`.</span> |
| <Link id="m-pathinterval" /><code>{"private float pathInterval"}</code> | <span className="api-desc">Backing field for `PathInterval`: spacing between path indicators and the minimum assist length.</span> |
| <Link id="m-smoothdamptime" /><code>{"private float smoothDampTime"}</code> | <span className="api-desc">Backing field for `SmoothDampTime`.</span> |
| <Link id="m-startdelay" /><code>{"private float startDelay"}</code> | <span className="api-desc">Backing field for `StartDelay`: seconds before the assist becomes active.</span> |
| <Link id="m-targetindicatorscale" /><code>{"private Vector3 targetIndicatorScale"}</code> | <span className="api-desc">Backing field for `TargetIndicatorScale`.</span> |
| <Link id="m-targetindicatorscalecurve" /><code>{"private AnimationCurve targetIndicatorScaleCurve"}</code> | <span className="api-desc">Backing field for `TargetIndicatorScaleCurve`.</span> |
| <Link id="m-verticalpower" /><code>{"private float verticalPower"}</code> | <span className="api-desc">Backing field for `VerticalPower`: exponent on the downward direction when working out assist length.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-assistgrabdirection-2" /><code>{"Vector3 AssistGrabDirection { get; }"}</code> | <span className="api-desc">Local direction from the hand the assist searches along (mirrored for the right hand).</span> |
| <Link id="m-assistlength-2" /><code>{"float AssistLength { get; }"}</code> | <span className="api-desc">Longest search distance, reduced as the direction points less downward.</span> |
| <Link id="m-assistpathmaterial-2" /><code>{"Material AssistPathMaterial { get; }"}</code> | <span className="api-desc">Material for the path indicator (an Android version on Android).</span> |
| <Link id="m-assistpathmesh-2" /><code>{"Mesh AssistPathMesh { get; }"}</code> | <span className="api-desc">Mesh for the path indicator (an Android version on Android).</span> |
| <Link id="m-assisttargetmaterial-2" /><code>{"Material AssistTargetMaterial { get; }"}</code> | <span className="api-desc">Material for the target indicator when a target is found.</span> |
| <Link id="m-assisttargetmesh-2" /><code>{"Mesh AssistTargetMesh { get; }"}</code> | <span className="api-desc">Mesh for the target indicator.</span> |
| <Link id="m-detectionradius-2" /><code>{"float DetectionRadius { get; }"}</code> | <span className="api-desc">Radius of the sphere cast used to find targets.</span> |
| <Link id="m-foundtargetcolor-2" /><code>{"Color FoundTargetColor { get; }"}</code> | <span className="api-desc">Path colour when a target is found.</span> |
| <Link id="m-maximumanglefromdowntobeactivedot-2" /><code>{"float MaximumAngleFromDownToBeActiveDot { get; }"}</code> | <span className="api-desc">The search direction must be at least this close to straight down (as a dot product) for the assist to run.</span> |
| <Link id="m-notargetcolor-2" /><code>{"Color NoTargetColor { get; }"}</code> | <span className="api-desc">Path colour when nothing is found.</span> |
| <Link id="m-obstaclelayermask-2" /><code>{"LayerMask ObstacleLayerMask { get; }"}</code> | <span className="api-desc">Layers that block the search.</span> |
| <Link id="m-pathindicatorscale-2" /><code>{"Vector3 PathIndicatorScale { get; }"}</code> | <span className="api-desc">Scale of each path indicator mesh.</span> |
| <Link id="m-pathinterval-2" /><code>{"float PathInterval { get; }"}</code> | <span className="api-desc">Spacing between path indicator meshes, and the shortest search length.</span> |
| <Link id="m-smoothdamptime-2" /><code>{"float SmoothDampTime { get; }"}</code> | <span className="api-desc">Smoothing time for the path indicator's movement.</span> |
| <Link id="m-startdelay-2" /><code>{"float StartDelay { get; }"}</code> | <span className="api-desc">Delay before the assist starts searching.</span> |
| <Link id="m-targetindicatorscale-2" /><code>{"Vector3 TargetIndicatorScale { get; }"}</code> | <span className="api-desc">Scale of the target indicator.</span> |
| <Link id="m-targetindicatorscalecurve-2" /><code>{"AnimationCurve TargetIndicatorScaleCurve { get; }"}</code> | <span className="api-desc">Curve animating the target indicator's scale.</span> |
| <Link id="m-targetnotfoundmaterial" /><code>{"Material TargetNotFoundMaterial { get; }"}</code> | <span className="api-desc">Material for the target indicator when nothing is found.</span> |
| <Link id="m-verticalpower-2" /><code>{"float VerticalPower { get; }"}</code> | <span className="api-desc">Power applied to the direction's downward part when working out the search length.</span> |

## Used in

Members of other types that take, return or hold a `GrabAssistSettings`:

<div className="api-used-in">

[`GrabAssistController.Settings`](/mod/game-api/types/global-e-h/grabassistcontroller#m-settings), [`GrabAssistView.Settings`](/mod/game-api/types/global-e-h/grabassistview#m-settings).

</div>
