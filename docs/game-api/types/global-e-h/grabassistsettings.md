---
title: "GrabAssistSettings"
description: "Global settings for grab assist, which searches a short path from the hand to find an item to grab and draws the path and target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistSettings

A **class** in `Root.Township`, no namespace.

Global settings for grab assist, which searches a short path from the hand to find an item to grab and draws the path and target. Get it with `GlobalSettings<GrabAssistSettings>.Instance`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<GrabAssistSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`GrabAssistSettings`](/game-api/types/global-e-h/grabassistsettings)
- **Attributes** `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GrabAssistSettings()"}</code> |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-assistgrabdirection" /><code>{"private Vector3 assistGrabDirection"}</code> |
| <Link id="m-assistlength" /><code>{"private float assistLength"}</code> |
| <Link id="m-assistpathmaterial" /><code>{"private Material assistPathMaterial"}</code> |
| <Link id="m-assistpathmaterialandroid" /><code>{"private Material assistPathMaterialAndroid"}</code> |
| <Link id="m-assistpathmesh" /><code>{"private Mesh assistPathMesh"}</code> |
| <Link id="m-assistpathmeshandroid" /><code>{"private Mesh assistPathMeshAndroid"}</code> |
| <Link id="m-assisttargetmaterial" /><code>{"private Material assistTargetMaterial"}</code> |
| <Link id="m-assisttargetmesh" /><code>{"private Mesh assistTargetMesh"}</code> |
| <Link id="m-assisttargetnotfoundmaterial" /><code>{"private Material assistTargetNotFoundMaterial"}</code> |
| <Link id="m-detectionradius" /><code>{"private float detectionRadius"}</code> |
| <Link id="m-foundtargetcolor" /><code>{"private Color foundTargetColor"}</code> |
| <Link id="m-maximumanglefromdowntobeactivedot" /><code>{"private float maximumAngleFromDownToBeActiveDot"}</code> |
| <Link id="m-notargetcolor" /><code>{"private Color noTargetColor"}</code> |
| <Link id="m-obstaclelayermask" /><code>{"private LayerMask obstacleLayerMask"}</code> |
| <Link id="m-pathindicatorscale" /><code>{"private Vector3 pathIndicatorScale"}</code> |
| <Link id="m-pathinterval" /><code>{"private float pathInterval"}</code> |
| <Link id="m-smoothdamptime" /><code>{"private float smoothDampTime"}</code> |
| <Link id="m-startdelay" /><code>{"private float startDelay"}</code> |
| <Link id="m-targetindicatorscale" /><code>{"private Vector3 targetIndicatorScale"}</code> |
| <Link id="m-targetindicatorscalecurve" /><code>{"private AnimationCurve targetIndicatorScaleCurve"}</code> |
| <Link id="m-verticalpower" /><code>{"private float verticalPower"}</code> |

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

[`GrabAssistController.Settings`](/game-api/types/global-e-h/grabassistcontroller#m-settings), [`GrabAssistView.Settings`](/game-api/types/global-e-h/grabassistview#m-settings).
