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
| <Link id="m-ctor" /><code>{"Pointer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>58 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | <span className="api-desc">Shader id of the `_Progress` property, used to show charge progress.</span> |
| <Link id="m-tintcolor" /><code>{"private readonly int _TintColor"}</code> | <span className="api-desc">Shader id of the `_TintColor` property, used for valid or invalid colour.</span> |
| <Link id="m-arcgravity" /><code>{"private float arcGravity"}</code> | <span className="api-desc">Gravity used to bend the arc (default 9.8), scaled by player size.</span> |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | <span className="api-desc">Material the teleporter arc and target are copied from.</span> |
| <Link id="m-basematerialandroid" /><code>{"private Material baseMaterialAndroid"}</code> | <span className="api-desc">Android version of `baseMaterial`. Not read in this build.</span> |
| <Link id="m-baserotationlerp" /><code>{"private float baseRotationLerp"}</code> | <span className="api-desc">Base lerp for turning the target to the new surface normal.</span> |
| <Link id="m-blockagemask" /><code>{"private LayerMask blockageMask"}</code> | <span className="api-desc">Layers that stop the arc without being standable.</span> |
| <Link id="m-climbingoffset" /><code>{"private Vector2 climbingOffset"}</code> | <span className="api-desc">Offset for climb teleports. Not read in this class.</span> |
| <Link id="m-currentvalidcolor" /><code>{"private Color currentValidColor"}</code> | <span className="api-desc">Valid arc colour in use, changed by hunger level.</span> |
| <Link id="m-distancerotationlerp" /><code>{"private float distanceRotationLerp"}</code> | <span className="api-desc">Extra rotation lerp per unit the target moved this frame.</span> |
| <Link id="m-fadedalpha" /><code>{"private float fadedAlpha"}</code> | <span className="api-desc">Arc alpha at full fade.</span> |
| <Link id="m-fadeendangle" /><code>{"private float fadeEndAngle"}</code> | <span className="api-desc">Aim pitch at which the arc is fully faded and no longer traced (default 60).</span> |
| <Link id="m-fadestartangle" /><code>{"private float fadeStartAngle"}</code> | <span className="api-desc">Aim pitch at which the arc starts to fade (default 45).</span> |
| <Link id="m-hungerdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" hungerDefinition"}</code> | <span className="api-desc">Hunger stat whose level picks the arc colour.</span> |
| <Link id="m-hungermaterials" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pointer-hungermaterial">{"Pointer.HungerMaterial"}</Link>{"[] hungerMaterials"}</code> | <span className="api-desc">Arc colours per hunger level.</span> |
| <Link id="m-hungermaterialset" /><code>{"private Dictionary<int, Color> hungerMaterialSet"}</code> | <span className="api-desc">Hunger level to arc colour lookup, built in `Start`.</span> |
| <Link id="m-intervalobjects" /><code>{"private Renderer[] intervalObjects"}</code> | <span className="api-desc">Spawned arc piece renderers.</span> |
| <Link id="m-intervalpoints" /><code>{"private Vector3[] intervalPoints"}</code> | <span className="api-desc">Arc points from the last trace.</span> |
| <Link id="m-intervalprefab" /><code>{"private Renderer intervalPrefab"}</code> | <span className="api-desc">Prefab for one arc piece.</span> |
| <Link id="m-intervalprefabandroid" /><code>{"private Renderer intervalPrefabAndroid"}</code> | <span className="api-desc">Android version of `intervalPrefab`. Not read in this build.</span> |
| <Link id="m-intervalstoskip" /><code>{"private int intervalsToSkip"}</code> | <span className="api-desc">Number of arc points near the hand that aren't shown.</span> |
| <Link id="m-intervaltime" /><code>{"private float intervalTime"}</code> | <span className="api-desc">Time step between arc points (default 0.2).</span> |
| <Link id="m-invalidcolor" /><code>{"private Color invalidColor"}</code> | <span className="api-desc">Arc colour when the spot can't be teleported to.</span> |
| <Link id="m-islimitingteleportradius" /><code>{"private bool isLimitingTeleportRadius"}</code> | <span className="api-desc">Backing field for `IsLimitingTeleportRadius`.</span> |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> | <span className="api-desc">Whether the current landing spot is valid.</span> |
| <Link id="m-lastactiveinteval" /><code>{"private int lastActiveInteval"}</code> | <span className="api-desc">Index of the last arc piece shown, from the previous frame.</span> |
| <Link id="m-lastvalid" /><code>{"private bool lastValid"}</code> | <span className="api-desc">`isValid` from the previous frame, for detecting changes.</span> |
| <Link id="m-limitradiussquared" /><code>{"private float limitRadiusSquared"}</code> | <span className="api-desc">Backing field for `LimitRadiusSquared`.</span> |
| <Link id="m-maxangleforclimbteleport" /><code>{"private float maxAngleForClimbTeleport"}</code> | <span className="api-desc">Dot limit for climb teleports. Not read in this class.</span> |
| <Link id="m-maxangleforteleport" /><code>{"private float maxAngleForTeleport"}</code> | <span className="api-desc">Steepest surface, in degrees, the player can teleport onto (default 30).</span> |
| <Link id="m-maxdistancedown" /><code>{"private float maxDistanceDown"}</code> | <span className="api-desc">Furthest drop below the hand a valid landing can be, scaled by player size.</span> |
| <Link id="m-maxdistanceup" /><code>{"private float maxDistanceUp"}</code> | <span className="api-desc">Highest rise above the hand a valid landing can be, scaled by player size.</span> |
| <Link id="m-maximumintervals" /><code>{"private int maximumIntervals"}</code> | <span className="api-desc">Most arc points traced (default 100).</span> |
| <Link id="m-minimumtime" /><code>{"private float minimumTime"}</code> | <span className="api-desc">Seconds the pointer must be held before a teleport is valid. Below 0 means no wait.</span> |
| <Link id="m-minimumvelocity" /><code>{"private float minimumVelocity"}</code> | <span className="api-desc">Lowest arc speed.</span> |
| <Link id="m-oldnormal" /><code>{"private Vector3 oldNormal"}</code> | <span className="api-desc">Target normal from the previous frame, for smoothing.</span> |
| <Link id="m-oldposition" /><code>{"private Vector3 oldPosition"}</code> | <span className="api-desc">Target position from the previous frame, for smoothing.</span> |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> | <span className="api-desc">Transform the arc starts from and the pieces are parented to.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The player this pointer belongs to.</span> |
| <Link id="m-playerpersonalspace" /><code>{"private LayerMask playerPersonalSpace"}</code> | <span className="api-desc">Layer of other players' personal space. The arc slides off it to land beside them.</span> |
| <Link id="m-positionlerp" /><code>{"private float positionLerp"}</code> | <span className="api-desc">Lerp for moving the target to the new spot.</span> |
| <Link id="m-previoushit" /><code>{"private RaycastHit previousHit"}</code> | <span className="api-desc">Hit from the last trace, exposed as `Hit`.</span> |
| <Link id="m-readyeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" readyEffect"}</code> | <span className="api-desc">Pooled effect shown when the charge completes.</span> |
| <Link id="m-readyeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" readyEffectDefinition"}</code> | <span className="api-desc">Pool definition for the ready effect.</span> |
| <Link id="m-readyeffectdefinitionandroid" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" readyEffectDefinitionAndroid"}</code> | <span className="api-desc">Android version of `readyEffectDefinition`. Not read in this build.</span> |
| <Link id="m-standablemask" /><code>{"private LayerMask standableMask"}</code> | <span className="api-desc">Layers the player can land on, unless the current unlock overrides teleport layers.</span> |
| <Link id="m-targetobject" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" targetObject"}</code> | <span className="api-desc">Spawned landing target.</span> |
| <Link id="m-targetprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" targetPrefab"}</code> | <span className="api-desc">Prefab for the landing target.</span> |
| <Link id="m-targetprefabandroid" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" targetPrefabAndroid"}</code> | <span className="api-desc">Android version of `targetPrefab`. Not read in this build.</span> |
| <Link id="m-teleportawaretriggermask" /><code>{"private LayerMask teleportAwareTriggerMask"}</code> | <span className="api-desc">Layers checked for teleport aware triggers along the arc.</span> |
| <Link id="m-teleportdistancemultiplierwhileholding" /><code>{"private float teleportDistanceMultiplierWhileHolding"}</code> | <span className="api-desc">Arc speed multiplier while the hand holds something (default 0.5).</span> |
| <Link id="m-teleportermaterial" /><code>{"private Material teleporterMaterial"}</code> | <span className="api-desc">Material copy for the arc and target, tinted each frame.</span> |
| <Link id="m-triggerspassedthrough" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-i-l/iteleportawaretrigger">{"ITeleportAwareTrigger"}</Link>{"> triggersPassedThrough"}</code> | <span className="api-desc">Backing field for `TriggersPassedThrough`.</span> |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> | <span className="api-desc">Player's unlock manager, checked for teleport layer overrides.</span> |
| <Link id="m-validcolor" /><code>{"private Color validColor"}</code> | <span className="api-desc">Arc colour for a valid spot when hunger doesn't change it.</span> |
| <Link id="m-velocitycurve" /><code>{"private AnimationCurve velocityCurve"}</code> | <span className="api-desc">Arc speed over seconds held. Longer holds reach further.</span> |
| <Link id="m-velocitytime" /><code>{"private float velocityTime"}</code> | <span className="api-desc">Seconds the pointer has been active, used for arc speed and charge.</span> |
| <Link id="m-wasready" /><code>{"private bool wasReady"}</code> | <span className="api-desc">Whether the ready effect has played for this charge.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"RaycastHit Hit { get; }"}</code> | <span className="api-desc">The raycast hit where the arc landed last frame.</span> |
| <Link id="m-isagedenough" /><code>{"bool IsAgedEnough { get; }"}</code> | <span className="api-desc">True once the arc has been held for at least the minimum time.</span> |
| <Link id="m-islimitingteleportradius-2" /><code>{"bool IsLimitingTeleportRadius { get; set; }"}</code> | <span className="api-desc">When true, targets farther than `LimitRadiusSquared` from `LimitCenter` are invalid.</span> |
| <Link id="m-istargetshowing" /><code>{"bool IsTargetShowing { get; set; }"}</code> | <span className="api-desc">Whether the landing target marker is drawn. True by default.</span> |
| <Link id="m-isvalidteleport" /><code>{"bool IsValidTeleport { get; }"}</code> | <span className="api-desc">True if the current landing spot is valid and the arc has been held long enough.</span> |
| <Link id="m-limitcenter" /><code>{"Vector3 LimitCenter { get; set; }"}</code> | <span className="api-desc">Centre for the teleport radius limit. Character customization sets it to its own position.</span> |
| <Link id="m-limitradiussquared-2" /><code>{"float LimitRadiusSquared { get; set; }"}</code> | <span className="api-desc">Squared radius for the teleport limit.</span> |
| <Link id="m-overridevelocitycurve" /><code>{"AnimationCurve OverrideVelocityCurve { get; set; }"}</code> | <span className="api-desc">Settable velocity curve. Not read anywhere in this build; the arc uses its own curve.</span> |
| <Link id="m-standablemask-2" /><code>{"LayerMask StandableMask { get; }"}</code> | <span className="api-desc">Layers the player can teleport onto. The current unlock can override it.</span> |
| <Link id="m-triggerspassedthrough-2" /><code>{"HashSet<"}<Link to="/mod/game-api/types/global-i-l/iteleportawaretrigger">{"ITeleportAwareTrigger"}</Link>{"> TriggersPassedThrough { get; }"}</code> | <span className="api-desc">Teleport-aware triggers the arc passed through this frame.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxdottoteleport" /><code>{"private float MaxDotToTeleport { get; set; }"}</code> | <span className="api-desc">Lowest surface normal y a landing spot may have, worked out from `maxAngleForTeleport`.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-p/pointereventhandler">{"PointerEventHandler"}</Link>{" TargetChanged"}</code> | <span className="api-desc">Raised when the landing collider or its validity changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Makes the arc material and reads the max teleport angle and the player's unlock manager.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"private Vector3 GetPosition(float time, Vector3 forward, float velocity)"}</code> | <span className="api-desc">Offset along the teleport arc at a given time, from the aim direction, speed and gravity, scaled by player size.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Each frame, traces the teleport arc, checks whether the landing spot is valid, places the arc pieces and target, and raises `TargetChanged`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the teleporter material copy.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Hides the arc, target and ready effect, resets the charge time and raises `TargetChanged` with no target.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws a line down from the pointer, coloured by whether the ground below could be teleported to.</span> |
| <Link id="m-ontargetchanged" /><code>{"private void OnTargetChanged(Collider collider, bool isValid)"}</code> | <span className="api-desc">Raises `TargetChanged`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Sets up hunger colours and spawns the arc pieces and target object under the origin.</span> |
| <Link id="m-tryfindteleportawaretriggers" /><code>{"private void TryFindTeleportAwareTriggers(Vector3 oldPoint, Vector3 newPoint, LayerMask mask, RaycastHit hit)"}</code> | <span className="api-desc">Adds any teleport aware trigger crossed by one arc segment to `TriggersPassedThrough`.</span> |
| <Link id="m-updatehunger" /><code>{"private void UpdateHunger("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Picks the valid arc colour for the player's current hunger level.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Pointer`:

<div className="api-used-in">

[`PointerEventHandler.BeginInvoke`](/mod/game-api/types/global-p/pointereventhandler#m-begininvoke), [`PointerEventHandler.Invoke`](/mod/game-api/types/global-p/pointereventhandler#m-invoke), [`Teleporter.pointer`](/mod/game-api/types/global-t-x/teleporter#m-pointer), [`Teleporter.TargetChanged`](/mod/game-api/types/global-t-x/teleporter#m-targetchanged).

</div>
