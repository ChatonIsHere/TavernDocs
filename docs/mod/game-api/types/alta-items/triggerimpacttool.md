---
title: "TriggerImpactTool"
description: "An ImpactTool that hits through a trigger collider instead of physics collisions, working out a contact point itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerImpactTool

A **class** in `Root.Township`, `Alta.Impact`.

An `ImpactTool` that hits through a trigger collider instead of physics collisions, working out a contact point itself. Used for swings and other hits that should not push things.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ImpactTool`](/mod/game-api/types/alta-items/impacttool)
- **Nested types** [`DelayedHit`](/mod/game-api/types/alta-items/triggerimpacttool-delayedhit)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerImpactTool()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcedcontact" /><code>{"private LayerMask forcedContact"}</code> | Layers that always get a blunt hit even without a pickup or detector, like terrain. |
| <Link id="m-framehits" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/triggerimpacttool-delayedhit">{"TriggerImpactTool.DelayedHit"}</Link>{"> frameHits"}</code> | Hits queued this frame, applied one frame later by `RunDelayedHits`. |
| <Link id="m-hithealthobjects" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{"> hitHealthObjects"}</code> | Health objects already hit, when `isHittingOncePerHealthObject` is on. |
| <Link id="m-hitrigidbodies" /><code>{"private HashSet<Rigidbody> hitRigidBodies"}</code> | Rigidbodies already hit since the tool was last activated. |
| <Link id="m-ignore" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"> ignore"}</code> | Detectors this tool never hits. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Backing field for `IsActive`. |
| <Link id="m-ishittingonceperhealthobject" /><code>{"private bool isHittingOncePerHealthObject"}</code> | When on, the tool hits each health object only once, even through several colliders. |
| <Link id="m-islockedforframe" /><code>{"private bool isLockedForFrame"}</code> | Set after a fully blocking hit; further trigger entries are ignored until the queued hits run. |
| <Link id="m-physicsposition" /><code>{"private Vector3 physicsPosition"}</code> | The tool's position from the last fixed update. |
| <Link id="m-thiscollider" /><code>{"private Collider thisCollider"}</code> | The tool's trigger collider. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered fixed update for `UpdatePosition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"bool IsActive { get; set; }"}</code> | Turns the trigger collider and position tracking on or off; turning it on or off forgets what was already hit. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> | Works out a contact point for a pickup, detector or forced-contact layer, generates the hit and queues it for the detectors. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Sets `IsActive` and `enabled` from whether the trigger collider starts enabled. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Sets `IsActive` to false. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Sets `IsActive` to true. |
| <Link id="m-rundelayedhits" /><code>{"private void RunDelayedHits()"}</code> | Applies this frame's queued hits to their detectors and unlocks the tool. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | Fixed update that records the tool's last position, used as the hit origin. |

</details>

## Used in

Members of other types that take, return or hold a `TriggerImpactTool`:

[`SmallProjectile.triggerImpactTool`](/mod/game-api/types/global-s/smallprojectile#m-triggerimpacttool).
