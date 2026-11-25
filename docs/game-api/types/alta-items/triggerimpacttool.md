---
title: "TriggerImpactTool"
description: "class TriggerImpactTool in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerImpactTool

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ImpactTool`](/game-api/types/alta-items/impacttool)
- **Nested types** [`DelayedHit`](/game-api/types/alta-items/triggerimpacttool-delayedhit)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerImpactTool()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-forcedcontact" /><code>{"private LayerMask forcedContact"}</code> |  |
| <Link id="m-framehits" /><code>{"private List<"}<Link to="/game-api/types/alta-items/triggerimpacttool-delayedhit">{"TriggerImpactTool.DelayedHit"}</Link>{"> frameHits"}</code> |  |
| <Link id="m-hithealthobjects" /><code>{"private HashSet<"}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{"> hitHealthObjects"}</code> |  |
| <Link id="m-hitrigidbodies" /><code>{"private HashSet<Rigidbody> hitRigidBodies"}</code> |  |
| <Link id="m-ignore" /><code>{"private List<"}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"> ignore"}</code> |  |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |  |
| <Link id="m-ishittingonceperhealthobject" /><code>{"private bool isHittingOncePerHealthObject"}</code> |  |
| <Link id="m-islockedforframe" /><code>{"private bool isLockedForFrame"}</code> |  |
| <Link id="m-physicsposition" /><code>{"private Vector3 physicsPosition"}</code> |  |
| <Link id="m-thiscollider" /><code>{"private Collider thisCollider"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"bool IsActive { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-rundelayedhits" /><code>{"private void RunDelayedHits()"}</code> |  |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> |  |

## Used in

Members of other types that take, return or hold a `TriggerImpactTool`:

[`SmallProjectile.triggerImpactTool`](/game-api/types/global-s/smallprojectile#m-triggerimpacttool).
