---
title: "ClimberSettings"
description: "Global settings for an older climbing setup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimberSettings

A **class** in `Root.Township`, no namespace.

Global settings for an older climbing setup. Nothing else in this build reads it; climbing now uses `ClimbingSettings` through `ClimbingHandler`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<ClimberSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ClimberSettings`](/game-api/types/global-c-d/climbersettings)
- **Nested types** [`Raycast`](/game-api/types/global-c-d/climbersettings-raycast)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimberSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gripaccess" /><code><Link to="/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" gripAccess"}</code> | Debug info display for grip. |
| <Link id="m-raycasts" /><code><Link to="/game-api/types/global-c-d/climbersettings-raycast">{"ClimberSettings.Raycast"}</Link>{"[] raycasts"}</code> | Backing field for `Raycasts`. |
| <Link id="m-strengthaccessleft" /><code><Link to="/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" strengthAccessLeft"}</code> | Debug info display for left hand strength. |
| <Link id="m-strengthaccessright" /><code><Link to="/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" strengthAccessRight"}</code> | Debug info display for right hand strength. |

<details>
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetightgriplayer" /><code>{"private int activeTightGripLayer"}</code> | Layer index for a tight grip, probably. No other code reads this settings asset. |
| <Link id="m-breakdistancesquared" /><code>{"private float breakDistanceSquared"}</code> | Squared hand distance at which a grip breaks, probably. |
| <Link id="m-climbingfriction" /><code>{"private float climbingFriction"}</code> | Friction while climbing. |
| <Link id="m-climbingheight" /><code>{"private float climbingHeight"}</code> | Body height while climbing. |
| <Link id="m-climbingmask" /><code>{"private LayerMask climbingMask"}</code> | Layers that can be climbed. |
| <Link id="m-climbingstepheight" /><code>{"private float climbingStepHeight"}</code> | Character step height while climbing. |
| <Link id="m-climbvelocitymultiplier" /><code>{"private float climbVelocityMultiplier"}</code> | Scale for climbing velocity. |
| <Link id="m-cornerangledotgrip" /><code>{"private AnimationCurve cornerAngleDotGrip"}</code> | Curve for grip at corners by angle dot product. |
| <Link id="m-cornerdotgrip" /><code>{"private AnimationCurve cornerDotGrip"}</code> | Curve for grip at corners by dot product. |
| <Link id="m-defaultclimbable" /><code>{"private "}<Link to="/game-api/types/global-c-d/climbable">{"Climbable"}</Link>{" defaultClimbable"}</code> | Climbable used when a surface has none. |
| <Link id="m-downgripoffsety" /><code>{"private float downGripOffsetY"}</code> | Vertical grip offset when pulling down. |
| <Link id="m-downgripoffsetz" /><code>{"private float downGripOffsetZ"}</code> | Forward grip offset when pulling down. |
| <Link id="m-griphapticduration" /><code>{"private float gripHapticDuration"}</code> | Haptic length used by `GetHapticOverUpwardAlignment`. |
| <Link id="m-gripmultiplier" /><code>{"private float gripMultiplier"}</code> | Scales the result of `GetGripStrengthMultiplier`. |
| <Link id="m-gripoverdistance" /><code>{"private AnimationCurve gripOverDistance"}</code> | Curve from hand offset length to upward grip, blended by verticality. |
| <Link id="m-gripoververticality" /><code>{"private AnimationCurve gripOverVerticality"}</code> | Curve from hand offset direction (y) to how much grip is kept regardless of distance. |
| <Link id="m-hapticstrengthoverdistance" /><code>{"private AnimationCurve hapticStrengthOverDistance"}</code> | Curve from distance to haptic strength. |
| <Link id="m-hapticstrengthoverupwardalignment" /><code>{"private AnimationCurve hapticStrengthOverUpwardAlignment"}</code> | Curve from upward alignment to haptic strength. |
| <Link id="m-isrequiringclimbable" /><code>{"private bool isRequiringClimbable"}</code> | Whether a surface needs a `Climbable` to be climbed, probably. |
| <Link id="m-lowermultiplier" /><code>{"private float lowerMultiplier"}</code> | Multiplier for enabling gravity while lowering yourself. |
| <Link id="m-mindistancetoapplyforcesquared" /><code>{"private float minDistanceToApplyForceSquared"}</code> | Squared hand movement below which no climbing force is applied, probably. |
| <Link id="m-strengthoverdistance" /><code>{"private AnimationCurve strengthOverDistance"}</code> | Curve from hand offset length to grip strength, blended by verticality. |
| <Link id="m-upgripoffsety" /><code>{"private float upGripOffsetY"}</code> | Vertical grip offset when pulling up. |
| <Link id="m-upgripoffsetz" /><code>{"private float upGripOffsetZ"}</code> | Forward grip offset when pulling up. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetightgriplayer-2" /><code>{"int ActiveTightGripLayer { get; }"}</code> | Layer index for tight grip checks. |
| <Link id="m-breakdistancesquared-2" /><code>{"float BreakDistanceSquared { get; }"}</code> | Squared distance at which a grip breaks. |
| <Link id="m-climbingfriction-2" /><code>{"float ClimbingFriction { get; }"}</code> | Friction while climbing. |
| <Link id="m-climbingheight-2" /><code>{"float ClimbingHeight { get; }"}</code> | Height used for climbing checks. |
| <Link id="m-climbingmask-2" /><code>{"LayerMask ClimbingMask { get; }"}</code> | Layers that can be climbed. |
| <Link id="m-climbingstepheight-2" /><code>{"float ClimbingStepHeight { get; }"}</code> | Step height while climbing. |
| <Link id="m-climbvelocitymultiplier-2" /><code>{"float ClimbVelocityMultiplier { get; }"}</code> | Multiplier on climbing velocity. |
| <Link id="m-cornerangledotgrip-2" /><code>{"AnimationCurve CornerAngleDotGrip { get; }"}</code> | Curve of grip strength against corner angle. |
| <Link id="m-cornerdotgrip-2" /><code>{"AnimationCurve CornerDotGrip { get; }"}</code> | Curve of grip strength against corner alignment. |
| <Link id="m-defaultclimbable-2" /><code><Link to="/game-api/types/global-c-d/climbable">{"Climbable"}</Link>{" DefaultClimbable { get; }"}</code> | Climbable used for colliders that have none. |
| <Link id="m-downgripoffsety-2" /><code>{"float DownGripOffsetY { get; }"}</code> | Vertical grip offset when gripping downwards. |
| <Link id="m-downgripoffsetz-2" /><code>{"float DownGripOffsetZ { get; }"}</code> | Forward grip offset when gripping downwards. |
| <Link id="m-gripmultiplier-2" /><code>{"float GripMultiplier { get; }"}</code> | Overall grip strength multiplier. |
| <Link id="m-isrequiringclimbable-2" /><code>{"bool IsRequiringClimbable { get; }"}</code> | Whether only objects with a climbable can be climbed. |
| <Link id="m-lowermultiplier-2" /><code>{"float LowerMultiplier { get; }"}</code> | Multiplier for enabling gravity while lowering oneself. |
| <Link id="m-mindistancetoapplyforcesquared-2" /><code>{"float MinDistanceToApplyForceSquared { get; }"}</code> | Squared distance below which no climbing force is applied. |
| <Link id="m-raycasts-2" /><code><Link to="/game-api/types/global-c-d/climbersettings-raycast">{"ClimberSettings.Raycast"}</Link>{"[] Raycasts { get; }"}</code> | Ray start and end points used for climbing checks. |
| <Link id="m-upgripoffsety-2" /><code>{"float UpGripOffsetY { get; }"}</code> | Vertical grip offset when gripping upwards. |
| <Link id="m-upgripoffsetz-2" /><code>{"float UpGripOffsetZ { get; }"}</code> | Forward grip offset when gripping upwards. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getgripstrengthmultiplier" /><code>{"float GetGripStrengthMultiplier("}<Link to="/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" offset)"}</code> | Grip strength for a hand offset, from verticality and distance curves, times `GripMultiplier`. |
| <Link id="m-gethapticoverupwardalignment" /><code>{"void GetHapticOverUpwardAlignment("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, float upwardAlignment)"}</code> | Plays a haptic on the controller scaled by how upward the grip is. |
| <Link id="m-gethapticstrengthoverdistance" /><code>{"void GetHapticStrengthOverDistance("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, float distance)"}</code> | Plays a haptic on the controller scaled by grip distance. |
| <Link id="m-getupwardgripmultiplier" /><code>{"float GetUpwardGripMultiplier("}<Link to="/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" offset)"}</code> | Upward grip factor for a hand offset, from verticality and distance curves. |
