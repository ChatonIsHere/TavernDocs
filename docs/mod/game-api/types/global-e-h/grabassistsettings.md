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
| <Link id="m-ctor" /><code>{"GrabAssistSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assistgrabdirection" /><code>{"private Vector3 assistGrabDirection"}</code> | Backing field for `AssistGrabDirection`: the hand-relative direction the assist points. |
| <Link id="m-assistlength" /><code>{"private float assistLength"}</code> | Backing field for `AssistLength`: the assist reach, scaled by how far down the hand points. |
| <Link id="m-assistpathmaterial" /><code>{"private Material assistPathMaterial"}</code> | Path indicator material on non-Android platforms. |
| <Link id="m-assistpathmaterialandroid" /><code>{"private Material assistPathMaterialAndroid"}</code> | Path indicator material on Android. |
| <Link id="m-assistpathmesh" /><code>{"private Mesh assistPathMesh"}</code> | Path indicator mesh on non-Android platforms. |
| <Link id="m-assistpathmeshandroid" /><code>{"private Mesh assistPathMeshAndroid"}</code> | Path indicator mesh on Android. |
| <Link id="m-assisttargetmaterial" /><code>{"private Material assistTargetMaterial"}</code> | Backing field for `AssistTargetMaterial`. |
| <Link id="m-assisttargetmesh" /><code>{"private Mesh assistTargetMesh"}</code> | Backing field for `AssistTargetMesh`. |
| <Link id="m-assisttargetnotfoundmaterial" /><code>{"private Material assistTargetNotFoundMaterial"}</code> | Backing field for `TargetNotFoundMaterial`. |
| <Link id="m-detectionradius" /><code>{"private float detectionRadius"}</code> | Backing field for `DetectionRadius`. |
| <Link id="m-foundtargetcolor" /><code>{"private Color foundTargetColor"}</code> | Backing field for `FoundTargetColor`. |
| <Link id="m-maximumanglefromdowntobeactivedot" /><code>{"private float maximumAngleFromDownToBeActiveDot"}</code> | Backing field for `MaximumAngleFromDownToBeActiveDot`, stored as a dot product from an angle. |
| <Link id="m-notargetcolor" /><code>{"private Color noTargetColor"}</code> | Backing field for `NoTargetColor`. |
| <Link id="m-obstaclelayermask" /><code>{"private LayerMask obstacleLayerMask"}</code> | Backing field for `ObstacleLayerMask`. |
| <Link id="m-pathindicatorscale" /><code>{"private Vector3 pathIndicatorScale"}</code> | Backing field for `PathIndicatorScale`. |
| <Link id="m-pathinterval" /><code>{"private float pathInterval"}</code> | Backing field for `PathInterval`: spacing between path indicators and the minimum assist length. |
| <Link id="m-smoothdamptime" /><code>{"private float smoothDampTime"}</code> | Backing field for `SmoothDampTime`. |
| <Link id="m-startdelay" /><code>{"private float startDelay"}</code> | Backing field for `StartDelay`: seconds before the assist becomes active. |
| <Link id="m-targetindicatorscale" /><code>{"private Vector3 targetIndicatorScale"}</code> | Backing field for `TargetIndicatorScale`. |
| <Link id="m-targetindicatorscalecurve" /><code>{"private AnimationCurve targetIndicatorScaleCurve"}</code> | Backing field for `TargetIndicatorScaleCurve`. |
| <Link id="m-verticalpower" /><code>{"private float verticalPower"}</code> | Backing field for `VerticalPower`: exponent on the downward direction when working out assist length. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-assistgrabdirection-2" /><code>{"Vector3 AssistGrabDirection { get; }"}</code> | Local direction from the hand the assist searches along (mirrored for the right hand). |
| <Link id="m-assistlength-2" /><code>{"float AssistLength { get; }"}</code> | Longest search distance, reduced as the direction points less downward. |
| <Link id="m-assistpathmaterial-2" /><code>{"Material AssistPathMaterial { get; }"}</code> | Material for the path indicator (an Android version on Android). |
| <Link id="m-assistpathmesh-2" /><code>{"Mesh AssistPathMesh { get; }"}</code> | Mesh for the path indicator (an Android version on Android). |
| <Link id="m-assisttargetmaterial-2" /><code>{"Material AssistTargetMaterial { get; }"}</code> | Material for the target indicator when a target is found. |
| <Link id="m-assisttargetmesh-2" /><code>{"Mesh AssistTargetMesh { get; }"}</code> | Mesh for the target indicator. |
| <Link id="m-detectionradius-2" /><code>{"float DetectionRadius { get; }"}</code> | Radius of the sphere cast used to find targets. |
| <Link id="m-foundtargetcolor-2" /><code>{"Color FoundTargetColor { get; }"}</code> | Path colour when a target is found. |
| <Link id="m-maximumanglefromdowntobeactivedot-2" /><code>{"float MaximumAngleFromDownToBeActiveDot { get; }"}</code> | The search direction must be at least this close to straight down (as a dot product) for the assist to run. |
| <Link id="m-notargetcolor-2" /><code>{"Color NoTargetColor { get; }"}</code> | Path colour when nothing is found. |
| <Link id="m-obstaclelayermask-2" /><code>{"LayerMask ObstacleLayerMask { get; }"}</code> | Layers that block the search. |
| <Link id="m-pathindicatorscale-2" /><code>{"Vector3 PathIndicatorScale { get; }"}</code> | Scale of each path indicator mesh. |
| <Link id="m-pathinterval-2" /><code>{"float PathInterval { get; }"}</code> | Spacing between path indicator meshes, and the shortest search length. |
| <Link id="m-smoothdamptime-2" /><code>{"float SmoothDampTime { get; }"}</code> | Smoothing time for the path indicator's movement. |
| <Link id="m-startdelay-2" /><code>{"float StartDelay { get; }"}</code> | Delay before the assist starts searching. |
| <Link id="m-targetindicatorscale-2" /><code>{"Vector3 TargetIndicatorScale { get; }"}</code> | Scale of the target indicator. |
| <Link id="m-targetindicatorscalecurve-2" /><code>{"AnimationCurve TargetIndicatorScaleCurve { get; }"}</code> | Curve animating the target indicator's scale. |
| <Link id="m-targetnotfoundmaterial" /><code>{"Material TargetNotFoundMaterial { get; }"}</code> | Material for the target indicator when nothing is found. |
| <Link id="m-verticalpower-2" /><code>{"float VerticalPower { get; }"}</code> | Power applied to the direction's downward part when working out the search length. |

## Used in

Members of other types that take, return or hold a `GrabAssistSettings`:

[`GrabAssistController.Settings`](/mod/game-api/types/global-e-h/grabassistcontroller#m-settings), [`GrabAssistView.Settings`](/mod/game-api/types/global-e-h/grabassistview#m-settings).
