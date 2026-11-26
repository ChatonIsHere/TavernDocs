---
title: "Pointer"
description: "The teleport arc on a hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pointer

A **class** in `Root.Township`, the global namespace.

The teleport arc on a hand. Each frame it traces a curved arc from the hand, finds where it lands and whether the player may teleport there, and draws the arc and target. Client, local player.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`ControllerExtension`](/mod/game-api/types/global-c-d/controllerextension)
- **Nested types** [`HungerMaterial`](/mod/game-api/types/global-p/pointer-hungermaterial)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pointer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>58 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | Shader id of the `_Progress` property, used to show charge progress. |
| <Link id="m-tintcolor" /><code>{"private readonly int _TintColor"}</code> | Shader id of the `_TintColor` property, used for valid or invalid colour. |
| <Link id="m-arcgravity" /><code>{"private float arcGravity"}</code> | Gravity used to bend the arc (default 9.8), scaled by player size. |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | Material the teleporter arc and target are copied from. |
| <Link id="m-basematerialandroid" /><code>{"private Material baseMaterialAndroid"}</code> | Android version of `baseMaterial`. Not read in this build. |
| <Link id="m-baserotationlerp" /><code>{"private float baseRotationLerp"}</code> | Base lerp for turning the target to the new surface normal. |
| <Link id="m-blockagemask" /><code>{"private LayerMask blockageMask"}</code> | Layers that stop the arc without being standable. |
| <Link id="m-climbingoffset" /><code>{"private Vector2 climbingOffset"}</code> | Offset for climb teleports. Not read in this class. |
| <Link id="m-currentvalidcolor" /><code>{"private Color currentValidColor"}</code> | Valid arc colour in use, changed by hunger level. |
| <Link id="m-distancerotationlerp" /><code>{"private float distanceRotationLerp"}</code> | Extra rotation lerp per unit the target moved this frame. |
| <Link id="m-fadedalpha" /><code>{"private float fadedAlpha"}</code> | Arc alpha at full fade. |
| <Link id="m-fadeendangle" /><code>{"private float fadeEndAngle"}</code> | Aim pitch at which the arc is fully faded and no longer traced (default 60). |
| <Link id="m-fadestartangle" /><code>{"private float fadeStartAngle"}</code> | Aim pitch at which the arc starts to fade (default 45). |
| <Link id="m-hungerdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" hungerDefinition"}</code> | Hunger stat whose level picks the arc colour. |
| <Link id="m-hungermaterials" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pointer-hungermaterial">{"Pointer.HungerMaterial"}</Link>{"[] hungerMaterials"}</code> | Arc colours per hunger level. |
| <Link id="m-hungermaterialset" /><code>{"private Dictionary<int, Color> hungerMaterialSet"}</code> | Hunger level to arc colour lookup, built in `Start`. |
| <Link id="m-intervalobjects" /><code>{"private Renderer[] intervalObjects"}</code> | Spawned arc piece renderers. |
| <Link id="m-intervalpoints" /><code>{"private Vector3[] intervalPoints"}</code> | Arc points from the last trace. |
| <Link id="m-intervalprefab" /><code>{"private Renderer intervalPrefab"}</code> | Prefab for one arc piece. |
| <Link id="m-intervalprefabandroid" /><code>{"private Renderer intervalPrefabAndroid"}</code> | Android version of `intervalPrefab`. Not read in this build. |
| <Link id="m-intervalstoskip" /><code>{"private int intervalsToSkip"}</code> | Number of arc points near the hand that aren't shown. |
| <Link id="m-intervaltime" /><code>{"private float intervalTime"}</code> | Time step between arc points (default 0.2). |
| <Link id="m-invalidcolor" /><code>{"private Color invalidColor"}</code> | Arc colour when the spot can't be teleported to. |
| <Link id="m-islimitingteleportradius" /><code>{"private bool isLimitingTeleportRadius"}</code> | Backing field for `IsLimitingTeleportRadius`. |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> | Whether the current landing spot is valid. |
| <Link id="m-lastactiveinteval" /><code>{"private int lastActiveInteval"}</code> | Index of the last arc piece shown, from the previous frame. |
| <Link id="m-lastvalid" /><code>{"private bool lastValid"}</code> | `isValid` from the previous frame, for detecting changes. |
| <Link id="m-limitradiussquared" /><code>{"private float limitRadiusSquared"}</code> | Backing field for `LimitRadiusSquared`. |
| <Link id="m-maxangleforclimbteleport" /><code>{"private float maxAngleForClimbTeleport"}</code> | Dot limit for climb teleports. Not read in this class. |
| <Link id="m-maxangleforteleport" /><code>{"private float maxAngleForTeleport"}</code> | Steepest surface, in degrees, the player can teleport onto (default 30). |
| <Link id="m-maxdistancedown" /><code>{"private float maxDistanceDown"}</code> | Furthest drop below the hand a valid landing can be, scaled by player size. |
| <Link id="m-maxdistanceup" /><code>{"private float maxDistanceUp"}</code> | Highest rise above the hand a valid landing can be, scaled by player size. |
| <Link id="m-maximumintervals" /><code>{"private int maximumIntervals"}</code> | Most arc points traced (default 100). |
| <Link id="m-minimumtime" /><code>{"private float minimumTime"}</code> | Seconds the pointer must be held before a teleport is valid. Below 0 means no wait. |
| <Link id="m-minimumvelocity" /><code>{"private float minimumVelocity"}</code> | Lowest arc speed. |
| <Link id="m-oldnormal" /><code>{"private Vector3 oldNormal"}</code> | Target normal from the previous frame, for smoothing. |
| <Link id="m-oldposition" /><code>{"private Vector3 oldPosition"}</code> | Target position from the previous frame, for smoothing. |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> | Transform the arc starts from and the pieces are parented to. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The player this pointer belongs to. |
| <Link id="m-playerpersonalspace" /><code>{"private LayerMask playerPersonalSpace"}</code> | Layer of other players' personal space. The arc slides off it to land beside them. |
| <Link id="m-positionlerp" /><code>{"private float positionLerp"}</code> | Lerp for moving the target to the new spot. |
| <Link id="m-previoushit" /><code>{"private RaycastHit previousHit"}</code> | Hit from the last trace, exposed as `Hit`. |
| <Link id="m-readyeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" readyEffect"}</code> | Pooled effect shown when the charge completes. |
| <Link id="m-readyeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" readyEffectDefinition"}</code> | Pool definition for the ready effect. |
| <Link id="m-readyeffectdefinitionandroid" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" readyEffectDefinitionAndroid"}</code> | Android version of `readyEffectDefinition`. Not read in this build. |
| <Link id="m-standablemask" /><code>{"private LayerMask standableMask"}</code> | Layers the player can land on, unless the current unlock overrides teleport layers. |
| <Link id="m-targetobject" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" targetObject"}</code> | Spawned landing target. |
| <Link id="m-targetprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" targetPrefab"}</code> | Prefab for the landing target. |
| <Link id="m-targetprefabandroid" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" targetPrefabAndroid"}</code> | Android version of `targetPrefab`. Not read in this build. |
| <Link id="m-teleportawaretriggermask" /><code>{"private LayerMask teleportAwareTriggerMask"}</code> | Layers checked for teleport aware triggers along the arc. |
| <Link id="m-teleportdistancemultiplierwhileholding" /><code>{"private float teleportDistanceMultiplierWhileHolding"}</code> | Arc speed multiplier while the hand holds something (default 0.5). |
| <Link id="m-teleportermaterial" /><code>{"private Material teleporterMaterial"}</code> | Material copy for the arc and target, tinted each frame. |
| <Link id="m-triggerspassedthrough" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-i-l/iteleportawaretrigger">{"ITeleportAwareTrigger"}</Link>{"> triggersPassedThrough"}</code> | Backing field for `TriggersPassedThrough`. |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> | Player's unlock manager, checked for teleport layer overrides. |
| <Link id="m-validcolor" /><code>{"private Color validColor"}</code> | Arc colour for a valid spot when hunger doesn't change it. |
| <Link id="m-velocitycurve" /><code>{"private AnimationCurve velocityCurve"}</code> | Arc speed over seconds held. Longer holds reach further. |
| <Link id="m-velocitytime" /><code>{"private float velocityTime"}</code> | Seconds the pointer has been active, used for arc speed and charge. |
| <Link id="m-wasready" /><code>{"private bool wasReady"}</code> | Whether the ready effect has played for this charge. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"RaycastHit Hit { get; }"}</code> | The raycast hit where the arc landed last frame. |
| <Link id="m-isagedenough" /><code>{"bool IsAgedEnough { get; }"}</code> | True once the arc has been held for at least the minimum time. |
| <Link id="m-islimitingteleportradius-2" /><code>{"bool IsLimitingTeleportRadius { get; set; }"}</code> | When true, targets farther than `LimitRadiusSquared` from `LimitCenter` are invalid. |
| <Link id="m-istargetshowing" /><code>{"bool IsTargetShowing { get; set; }"}</code> | Whether the landing target marker is drawn. True by default. |
| <Link id="m-isvalidteleport" /><code>{"bool IsValidTeleport { get; }"}</code> | True if the current landing spot is valid and the arc has been held long enough. |
| <Link id="m-limitcenter" /><code>{"Vector3 LimitCenter { get; set; }"}</code> | Centre for the teleport radius limit. Character customization sets it to its own position. |
| <Link id="m-limitradiussquared-2" /><code>{"float LimitRadiusSquared { get; set; }"}</code> | Squared radius for the teleport limit. |
| <Link id="m-overridevelocitycurve" /><code>{"AnimationCurve OverrideVelocityCurve { get; set; }"}</code> | Settable velocity curve. Not read anywhere in this build; the arc uses its own curve. |
| <Link id="m-standablemask-2" /><code>{"LayerMask StandableMask { get; }"}</code> | Layers the player can teleport onto. The current unlock can override it. |
| <Link id="m-triggerspassedthrough-2" /><code>{"HashSet<"}<Link to="/mod/game-api/types/global-i-l/iteleportawaretrigger">{"ITeleportAwareTrigger"}</Link>{"> TriggersPassedThrough { get; }"}</code> | Teleport-aware triggers the arc passed through this frame. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxdottoteleport" /><code>{"private float MaxDotToTeleport { get; set; }"}</code> | Lowest surface normal y a landing spot may have, worked out from `maxAngleForTeleport`. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-p/pointereventhandler">{"PointerEventHandler"}</Link>{" TargetChanged"}</code> | Raised when the landing collider or its validity changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Makes the arc material and reads the max teleport angle and the player's unlock manager. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"private Vector3 GetPosition(float time, Vector3 forward, float velocity)"}</code> | Offset along the teleport arc at a given time, from the aim direction, speed and gravity, scaled by player size. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Each frame, traces the teleport arc, checks whether the landing spot is valid, places the arc pieces and target, and raises `TargetChanged`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the teleporter material copy. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Hides the arc, target and ready effect, resets the charge time and raises `TargetChanged` with no target. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws a line down from the pointer, coloured by whether the ground below could be teleported to. |
| <Link id="m-ontargetchanged" /><code>{"private void OnTargetChanged(Collider collider, bool isValid)"}</code> | Raises `TargetChanged`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Sets up hunger colours and spawns the arc pieces and target object under the origin. |
| <Link id="m-tryfindteleportawaretriggers" /><code>{"private void TryFindTeleportAwareTriggers(Vector3 oldPoint, Vector3 newPoint, LayerMask mask, RaycastHit hit)"}</code> | Adds any teleport aware trigger crossed by one arc segment to `TriggersPassedThrough`. |
| <Link id="m-updatehunger" /><code>{"private void UpdateHunger("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Picks the valid arc colour for the player's current hunger level. |

</details>

## Used in

Members of other types that take, return or hold a `Pointer`:

[`PointerEventHandler.BeginInvoke`](/mod/game-api/types/global-p/pointereventhandler#m-begininvoke), [`PointerEventHandler.Invoke`](/mod/game-api/types/global-p/pointereventhandler#m-invoke), [`Teleporter.pointer`](/mod/game-api/types/global-t-x/teleporter#m-pointer), [`Teleporter.TargetChanged`](/mod/game-api/types/global-t-x/teleporter#m-targetchanged).
