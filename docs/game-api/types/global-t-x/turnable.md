---
title: "Turnable"
description: "class Turnable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Turnable

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ICircle`](/game-api/types/global-i-l/icircle)
- **Derived types** [`Belt`](/game-api/types/global-a-b/belt), [`Gear`](/game-api/types/global-e-h/gear)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Turnable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connected" /><code>{"protected List<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> connected"}</code> |  |
| <Link id="m-friction" /><code>{"private float friction"}</code> |  |
| <Link id="m-iscurrentflipped" /><code>{"private bool isCurrentFlipped"}</code> |  |
| <Link id="m-isdebug" /><code>{"private bool isDebug"}</code> |  |
| <Link id="m-mass" /><code>{"private float mass"}</code> |  |
| <Link id="m-radius" /><code>{"protected float radius"}</code> |  |
| <Link id="m-speed" /><code>{"private float speed"}</code> |  |
| <Link id="m-torque" /><code>{"private float torque"}</code> |  |
| <Link id="m-turning" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> turning"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connected-2" /><code>{"List<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> Connected { get; }"}</code> |  |
| <Link id="m-face" /><code>{"Vector3 Face { get; }"}</code> |  |
| <Link id="m-momentofinertia" /><code>{"float MomentOfInertia { get; }"}</code> |  |
| <Link id="m-motor" /><code><Link to="/game-api/types/global-m-o/motor">{"Motor"}</Link>{" "}<Link to="/game-api/types/global-m-o/motor">{"Motor"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> |  |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> |  |
| <Link id="m-speed-2" /><code>{"float Speed { get; }"}</code> |  |
| <Link id="m-torque-2" /><code>{"float Torque { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-branchupdate" /><code>{"virtual void BranchUpdate("}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" from, ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped = false)"}</code> |  |
| <Link id="m-updatewithsystemtorque" /><code>{"virtual void UpdateWithSystemTorque(float torquePerMoi)"}</code> |  |
| <Link id="m-applyfrictionandmotor" /><code>{"protected virtual void ApplyFrictionAndMotor()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-branchtoconnected" /><code>{"protected virtual void BranchToConnected(ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-rotate" /><code>{"protected virtual void Rotate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Turnable`:

[`Belt.BranchToConnected`](/game-api/types/global-a-b/belt#m-branchtoconnected), [`Belt.BranchUpdate`](/game-api/types/global-a-b/belt#m-branchupdate), [`Belt.exterior`](/game-api/types/global-a-b/belt#m-exterior), [`Motor.calculatingCluster`](/game-api/types/global-m-o/motor#m-calculatingcluster), [`Motor.Turnable`](/game-api/types/global-m-o/motor#m-turnable).
