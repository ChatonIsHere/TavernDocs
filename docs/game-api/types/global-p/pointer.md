---
title: "Pointer"
description: "The teleport arc on a hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pointer

A **class** in `Root.Township`, no namespace.

The teleport arc on a hand. Each frame it traces a curved arc from the hand, finds where it lands and whether the player may teleport there, and draws the arc and target. Client, local player.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)
- **Nested types** [`HungerMaterial`](/game-api/types/global-p/pointer-hungermaterial)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pointer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> |  |
| <Link id="m-tintcolor" /><code>{"private readonly int _TintColor"}</code> |  |
| <Link id="m-arcgravity" /><code>{"private float arcGravity"}</code> |  |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> |  |
| <Link id="m-basematerialandroid" /><code>{"private Material baseMaterialAndroid"}</code> |  |
| <Link id="m-baserotationlerp" /><code>{"private float baseRotationLerp"}</code> |  |
| <Link id="m-blockagemask" /><code>{"private LayerMask blockageMask"}</code> |  |
| <Link id="m-climbingoffset" /><code>{"private Vector2 climbingOffset"}</code> |  |
| <Link id="m-currentvalidcolor" /><code>{"private Color currentValidColor"}</code> |  |
| <Link id="m-distancerotationlerp" /><code>{"private float distanceRotationLerp"}</code> |  |
| <Link id="m-fadedalpha" /><code>{"private float fadedAlpha"}</code> |  |
| <Link id="m-fadeendangle" /><code>{"private float fadeEndAngle"}</code> |  |
| <Link id="m-fadestartangle" /><code>{"private float fadeStartAngle"}</code> |  |
| <Link id="m-hungerdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" hungerDefinition"}</code> |  |
| <Link id="m-hungermaterials" /><code>{"private "}<Link to="/game-api/types/global-p/pointer-hungermaterial">{"Pointer.HungerMaterial"}</Link>{"[] hungerMaterials"}</code> |  |
| <Link id="m-hungermaterialset" /><code>{"private Dictionary<int, Color> hungerMaterialSet"}</code> |  |
| <Link id="m-intervalobjects" /><code>{"private Renderer[] intervalObjects"}</code> |  |
| <Link id="m-intervalpoints" /><code>{"private Vector3[] intervalPoints"}</code> |  |
| <Link id="m-intervalprefab" /><code>{"private Renderer intervalPrefab"}</code> |  |
| <Link id="m-intervalprefabandroid" /><code>{"private Renderer intervalPrefabAndroid"}</code> |  |
| <Link id="m-intervalstoskip" /><code>{"private int intervalsToSkip"}</code> |  |
| <Link id="m-intervaltime" /><code>{"private float intervalTime"}</code> |  |
| <Link id="m-invalidcolor" /><code>{"private Color invalidColor"}</code> |  |
| <Link id="m-islimitingteleportradius" /><code>{"private bool isLimitingTeleportRadius"}</code> |  |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> |  |
| <Link id="m-lastactiveinteval" /><code>{"private int lastActiveInteval"}</code> |  |
| <Link id="m-lastvalid" /><code>{"private bool lastValid"}</code> |  |
| <Link id="m-limitradiussquared" /><code>{"private float limitRadiusSquared"}</code> |  |
| <Link id="m-maxangleforclimbteleport" /><code>{"private float maxAngleForClimbTeleport"}</code> |  |
| <Link id="m-maxangleforteleport" /><code>{"private float maxAngleForTeleport"}</code> |  |
| <Link id="m-maxdistancedown" /><code>{"private float maxDistanceDown"}</code> |  |
| <Link id="m-maxdistanceup" /><code>{"private float maxDistanceUp"}</code> |  |
| <Link id="m-maximumintervals" /><code>{"private int maximumIntervals"}</code> |  |
| <Link id="m-minimumtime" /><code>{"private float minimumTime"}</code> |  |
| <Link id="m-minimumvelocity" /><code>{"private float minimumVelocity"}</code> |  |
| <Link id="m-oldnormal" /><code>{"private Vector3 oldNormal"}</code> |  |
| <Link id="m-oldposition" /><code>{"private Vector3 oldPosition"}</code> |  |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> |  |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |  |
| <Link id="m-playerpersonalspace" /><code>{"private LayerMask playerPersonalSpace"}</code> |  |
| <Link id="m-positionlerp" /><code>{"private float positionLerp"}</code> |  |
| <Link id="m-previoushit" /><code>{"private RaycastHit previousHit"}</code> |  |
| <Link id="m-readyeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" readyEffect"}</code> |  |
| <Link id="m-readyeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" readyEffectDefinition"}</code> |  |
| <Link id="m-readyeffectdefinitionandroid" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" readyEffectDefinitionAndroid"}</code> |  |
| <Link id="m-standablemask" /><code>{"private LayerMask standableMask"}</code> |  |
| <Link id="m-targetobject" /><code>{"private "}<Link to="/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" targetObject"}</code> |  |
| <Link id="m-targetprefab" /><code>{"private "}<Link to="/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" targetPrefab"}</code> |  |
| <Link id="m-targetprefabandroid" /><code>{"private "}<Link to="/game-api/types/global-m-o/materialgroup">{"MaterialGroup"}</Link>{" targetPrefabAndroid"}</code> |  |
| <Link id="m-teleportawaretriggermask" /><code>{"private LayerMask teleportAwareTriggerMask"}</code> |  |
| <Link id="m-teleportdistancemultiplierwhileholding" /><code>{"private float teleportDistanceMultiplierWhileHolding"}</code> |  |
| <Link id="m-teleportermaterial" /><code>{"private Material teleporterMaterial"}</code> |  |
| <Link id="m-triggerspassedthrough" /><code>{"private HashSet<"}<Link to="/game-api/types/global-i-l/iteleportawaretrigger">{"ITeleportAwareTrigger"}</Link>{"> triggersPassedThrough"}</code> |  |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" unlockManager"}</code> |  |
| <Link id="m-validcolor" /><code>{"private Color validColor"}</code> |  |
| <Link id="m-velocitycurve" /><code>{"private AnimationCurve velocityCurve"}</code> |  |
| <Link id="m-velocitytime" /><code>{"private float velocityTime"}</code> |  |
| <Link id="m-wasready" /><code>{"private bool wasReady"}</code> |  |

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
| <Link id="m-triggerspassedthrough-2" /><code>{"HashSet<"}<Link to="/game-api/types/global-i-l/iteleportawaretrigger">{"ITeleportAwareTrigger"}</Link>{"> TriggersPassedThrough { get; }"}</code> | Teleport-aware triggers the arc passed through this frame. |
| <Link id="m-maxdottoteleport" /><code>{"private float MaxDotToTeleport { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/game-api/types/global-p/pointereventhandler">{"PointerEventHandler"}</Link>{" TargetChanged"}</code> | Raised when the landing collider or its validity changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Makes the arc material and reads the max teleport angle and the player's unlock manager. |
| <Link id="m-getposition" /><code>{"private Vector3 GetPosition(float time, Vector3 forward, float velocity)"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-ontargetchanged" /><code>{"private void OnTargetChanged(Collider collider, bool isValid)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-tryfindteleportawaretriggers" /><code>{"private void TryFindTeleportAwareTriggers(Vector3 oldPoint, Vector3 newPoint, LayerMask mask, RaycastHit hit)"}</code> |  |
| <Link id="m-updatehunger" /><code>{"private void UpdateHunger("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Pointer`:

[`PointerEventHandler.BeginInvoke`](/game-api/types/global-p/pointereventhandler#m-begininvoke), [`PointerEventHandler.Invoke`](/game-api/types/global-p/pointereventhandler#m-invoke), [`Teleporter.pointer`](/game-api/types/global-t-x/teleporter#m-pointer), [`Teleporter.TargetChanged`](/game-api/types/global-t-x/teleporter#m-targetchanged).
