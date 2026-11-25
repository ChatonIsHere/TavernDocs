---
title: "Turnable"
description: "A gear or wheel in a simple torque network: connected turnables share torque, alternate direction, and jam if the loop doesn't fit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Turnable

A **class** in `Root.Township`, no namespace.

A gear or wheel in a simple torque network: connected turnables share torque, alternate direction, and jam if the loop doesn't fit. Driven by a `Motor`; `Belt` is a subclass.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ICircle`](/game-api/types/global-i-l/icircle)
- **Derived types** [`Belt`](/game-api/types/global-a-b/belt), [`Gear`](/game-api/types/global-e-h/gear)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Turnable()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connected" /><code>{"protected List<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> connected"}</code> | Backing list for `Connected`. |
| <Link id="m-radius" /><code>{"protected float radius"}</code> | Backing value for `Radius`. |

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-friction" /><code>{"private float friction"}</code> |
| <Link id="m-iscurrentflipped" /><code>{"private bool isCurrentFlipped"}</code> |
| <Link id="m-isdebug" /><code>{"private bool isDebug"}</code> |
| <Link id="m-mass" /><code>{"private float mass"}</code> |
| <Link id="m-speed" /><code>{"private float speed"}</code> |
| <Link id="m-torque" /><code>{"private float torque"}</code> |
| <Link id="m-turning" /><code>{"private List<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> turning"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connected-2" /><code>{"List<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> Connected { get; }"}</code> | Turnables meshed with this one. |
| <Link id="m-face" /><code>{"Vector3 Face { get; }"}</code> | Local forward direction. |
| <Link id="m-momentofinertia" /><code>{"float MomentOfInertia { get; }"}</code> | Mass times radius squared over 2. |
| <Link id="m-motor" /><code><Link to="/game-api/types/global-m-o/motor">{"Motor"}</Link>{" "}<Link to="/game-api/types/global-m-o/motor">{"Motor"}</Link>{" { get; set; }"}</code> | Motor driving this turnable, if any. |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | Local position. |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | Radius of the turnable. |
| <Link id="m-speed-2" /><code>{"float Speed { get; }"}</code> | Torque divided by moment of inertia. |
| <Link id="m-torque-2" /><code>{"float Torque { get; set; }"}</code> | Current torque. Settable. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-branchupdate" /><code>{"virtual void BranchUpdate("}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" from, ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped = false)"}</code> | Adds this turnable's torque and inertia to the cluster totals and walks on; marks the cluster jammed if reached again in the other direction. |
| <Link id="m-updatewithsystemtorque" /><code>{"virtual void UpdateWithSystemTorque(float torquePerMoi)"}</code> | Sets this turnable's torque from the cluster's shared value and turns it. |
| <Link id="m-applyfrictionandmotor" /><code>{"protected virtual void ApplyFrictionAndMotor()"}</code> | Reduces torque by friction, then lets the motor change it. With no friction (or no torque) the torque is reset to 0 first. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Sets the starting torque from the inspector speed. |
| <Link id="m-branchtoconnected" /><code>{"protected virtual void BranchToConnected(ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped)"}</code> | Passes the update on to every connected turnable with the direction flipped. |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> | Draws the radius and lines to connected turnables. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Keeps mass above 0 and resets torque from speed. |
| <Link id="m-rotate" /><code>{"protected virtual void Rotate()"}</code> | Turns the transform around local forward by speed times delta time. |

## Used in

Members of other types that take, return or hold a `Turnable`:

[`Belt.BranchToConnected`](/game-api/types/global-a-b/belt#m-branchtoconnected), [`Belt.BranchUpdate`](/game-api/types/global-a-b/belt#m-branchupdate), [`Belt.exterior`](/game-api/types/global-a-b/belt#m-exterior), [`Motor.calculatingCluster`](/game-api/types/global-m-o/motor#m-calculatingcluster), [`Motor.Turnable`](/game-api/types/global-m-o/motor#m-turnable).
