---
title: "ClimberSettings"
description: "Global settings for an older climbing setup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimberSettings

A **class** in `Root.Township`, the global namespace.

Global settings for an older climbing setup. Nothing else in this build reads it; climbing now uses `ClimbingSettings` through `ClimbingHandler`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<ClimberSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ClimberSettings`](/mod/game-api/types/global-c-d/climbersettings)
- **Nested types** [`Raycast`](/mod/game-api/types/global-c-d/climbersettings-raycast)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimberSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gripaccess" /><code><Link to="/mod/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" gripAccess"}</code> | <span className="api-desc">Debug info display for grip.</span> |
| <Link id="m-raycasts" /><code><Link to="/mod/game-api/types/global-c-d/climbersettings-raycast">{"ClimberSettings.Raycast"}</Link>{"[] raycasts"}</code> | <span className="api-desc">Backing field for `Raycasts`.</span> |
| <Link id="m-strengthaccessleft" /><code><Link to="/mod/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" strengthAccessLeft"}</code> | <span className="api-desc">Debug info display for left hand strength.</span> |
| <Link id="m-strengthaccessright" /><code><Link to="/mod/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" strengthAccessRight"}</code> | <span className="api-desc">Debug info display for right hand strength.</span> |

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetightgriplayer" /><code>{"private int activeTightGripLayer"}</code> | <span className="api-desc">Layer index for a tight grip, probably. No other code reads this settings asset.</span> |
| <Link id="m-breakdistancesquared" /><code>{"private float breakDistanceSquared"}</code> | <span className="api-desc">Squared hand distance at which a grip breaks, probably.</span> |
| <Link id="m-climbingfriction" /><code>{"private float climbingFriction"}</code> | <span className="api-desc">Friction while climbing.</span> |
| <Link id="m-climbingheight" /><code>{"private float climbingHeight"}</code> | <span className="api-desc">Body height while climbing.</span> |
| <Link id="m-climbingmask" /><code>{"private LayerMask climbingMask"}</code> | <span className="api-desc">Layers that can be climbed.</span> |
| <Link id="m-climbingstepheight" /><code>{"private float climbingStepHeight"}</code> | <span className="api-desc">Character step height while climbing.</span> |
| <Link id="m-climbvelocitymultiplier" /><code>{"private float climbVelocityMultiplier"}</code> | <span className="api-desc">Scale for climbing velocity.</span> |
| <Link id="m-cornerangledotgrip" /><code>{"private AnimationCurve cornerAngleDotGrip"}</code> | <span className="api-desc">Curve for grip at corners by angle dot product.</span> |
| <Link id="m-cornerdotgrip" /><code>{"private AnimationCurve cornerDotGrip"}</code> | <span className="api-desc">Curve for grip at corners by dot product.</span> |
| <Link id="m-defaultclimbable" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/climbable">{"Climbable"}</Link>{" defaultClimbable"}</code> | <span className="api-desc">Climbable used when a surface has none.</span> |
| <Link id="m-downgripoffsety" /><code>{"private float downGripOffsetY"}</code> | <span className="api-desc">Vertical grip offset when pulling down.</span> |
| <Link id="m-downgripoffsetz" /><code>{"private float downGripOffsetZ"}</code> | <span className="api-desc">Forward grip offset when pulling down.</span> |
| <Link id="m-griphapticduration" /><code>{"private float gripHapticDuration"}</code> | <span className="api-desc">Haptic length used by `GetHapticOverUpwardAlignment`.</span> |
| <Link id="m-gripmultiplier" /><code>{"private float gripMultiplier"}</code> | <span className="api-desc">Scales the result of `GetGripStrengthMultiplier`.</span> |
| <Link id="m-gripoverdistance" /><code>{"private AnimationCurve gripOverDistance"}</code> | <span className="api-desc">Curve from hand offset length to upward grip, blended by verticality.</span> |
| <Link id="m-gripoververticality" /><code>{"private AnimationCurve gripOverVerticality"}</code> | <span className="api-desc">Curve from hand offset direction (y) to how much grip is kept regardless of distance.</span> |
| <Link id="m-hapticstrengthoverdistance" /><code>{"private AnimationCurve hapticStrengthOverDistance"}</code> | <span className="api-desc">Curve from distance to haptic strength.</span> |
| <Link id="m-hapticstrengthoverupwardalignment" /><code>{"private AnimationCurve hapticStrengthOverUpwardAlignment"}</code> | <span className="api-desc">Curve from upward alignment to haptic strength.</span> |
| <Link id="m-isrequiringclimbable" /><code>{"private bool isRequiringClimbable"}</code> | <span className="api-desc">Whether a surface needs a `Climbable` to be climbed, probably.</span> |
| <Link id="m-lowermultiplier" /><code>{"private float lowerMultiplier"}</code> | <span className="api-desc">Multiplier for enabling gravity while lowering yourself.</span> |
| <Link id="m-mindistancetoapplyforcesquared" /><code>{"private float minDistanceToApplyForceSquared"}</code> | <span className="api-desc">Squared hand movement below which no climbing force is applied, probably.</span> |
| <Link id="m-strengthoverdistance" /><code>{"private AnimationCurve strengthOverDistance"}</code> | <span className="api-desc">Curve from hand offset length to grip strength, blended by verticality.</span> |
| <Link id="m-upgripoffsety" /><code>{"private float upGripOffsetY"}</code> | <span className="api-desc">Vertical grip offset when pulling up.</span> |
| <Link id="m-upgripoffsetz" /><code>{"private float upGripOffsetZ"}</code> | <span className="api-desc">Forward grip offset when pulling up.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetightgriplayer-2" /><code>{"int ActiveTightGripLayer { get; }"}</code> | <span className="api-desc">Layer index for tight grip checks.</span> |
| <Link id="m-breakdistancesquared-2" /><code>{"float BreakDistanceSquared { get; }"}</code> | <span className="api-desc">Squared distance at which a grip breaks.</span> |
| <Link id="m-climbingfriction-2" /><code>{"float ClimbingFriction { get; }"}</code> | <span className="api-desc">Friction while climbing.</span> |
| <Link id="m-climbingheight-2" /><code>{"float ClimbingHeight { get; }"}</code> | <span className="api-desc">Height used for climbing checks.</span> |
| <Link id="m-climbingmask-2" /><code>{"LayerMask ClimbingMask { get; }"}</code> | <span className="api-desc">Layers that can be climbed.</span> |
| <Link id="m-climbingstepheight-2" /><code>{"float ClimbingStepHeight { get; }"}</code> | <span className="api-desc">Step height while climbing.</span> |
| <Link id="m-climbvelocitymultiplier-2" /><code>{"float ClimbVelocityMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on climbing velocity.</span> |
| <Link id="m-cornerangledotgrip-2" /><code>{"AnimationCurve CornerAngleDotGrip { get; }"}</code> | <span className="api-desc">Curve of grip strength against corner angle.</span> |
| <Link id="m-cornerdotgrip-2" /><code>{"AnimationCurve CornerDotGrip { get; }"}</code> | <span className="api-desc">Curve of grip strength against corner alignment.</span> |
| <Link id="m-defaultclimbable-2" /><code><Link to="/mod/game-api/types/global-c-d/climbable">{"Climbable"}</Link>{" DefaultClimbable { get; }"}</code> | <span className="api-desc">Climbable used for colliders that have none.</span> |
| <Link id="m-downgripoffsety-2" /><code>{"float DownGripOffsetY { get; }"}</code> | <span className="api-desc">Vertical grip offset when gripping downwards.</span> |
| <Link id="m-downgripoffsetz-2" /><code>{"float DownGripOffsetZ { get; }"}</code> | <span className="api-desc">Forward grip offset when gripping downwards.</span> |
| <Link id="m-gripmultiplier-2" /><code>{"float GripMultiplier { get; }"}</code> | <span className="api-desc">Overall grip strength multiplier.</span> |
| <Link id="m-isrequiringclimbable-2" /><code>{"bool IsRequiringClimbable { get; }"}</code> | <span className="api-desc">Whether only objects with a climbable can be climbed.</span> |
| <Link id="m-lowermultiplier-2" /><code>{"float LowerMultiplier { get; }"}</code> | <span className="api-desc">Multiplier for enabling gravity while lowering oneself.</span> |
| <Link id="m-mindistancetoapplyforcesquared-2" /><code>{"float MinDistanceToApplyForceSquared { get; }"}</code> | <span className="api-desc">Squared distance below which no climbing force is applied.</span> |
| <Link id="m-raycasts-2" /><code><Link to="/mod/game-api/types/global-c-d/climbersettings-raycast">{"ClimberSettings.Raycast"}</Link>{"[] Raycasts { get; }"}</code> | <span className="api-desc">Ray start and end points used for climbing checks.</span> |
| <Link id="m-upgripoffsety-2" /><code>{"float UpGripOffsetY { get; }"}</code> | <span className="api-desc">Vertical grip offset when gripping upwards.</span> |
| <Link id="m-upgripoffsetz-2" /><code>{"float UpGripOffsetZ { get; }"}</code> | <span className="api-desc">Forward grip offset when gripping upwards.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getgripstrengthmultiplier" /><code>{"float GetGripStrengthMultiplier("}<Link to="/mod/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" offset)"}</code> | <span className="api-desc">Grip strength for a hand offset, from verticality and distance curves, times `GripMultiplier`.</span> |
| <Link id="m-gethapticoverupwardalignment" /><code>{"void GetHapticOverUpwardAlignment("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, float upwardAlignment)"}</code> | <span className="api-desc">Plays a haptic on the controller scaled by how upward the grip is.</span> |
| <Link id="m-gethapticstrengthoverdistance" /><code>{"void GetHapticStrengthOverDistance("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller, float distance)"}</code> | <span className="api-desc">Plays a haptic on the controller scaled by grip distance.</span> |
| <Link id="m-getupwardgripmultiplier" /><code>{"float GetUpwardGripMultiplier("}<Link to="/mod/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" offset)"}</code> | <span className="api-desc">Upward grip factor for a hand offset, from verticality and distance curves.</span> |
