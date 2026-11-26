---
title: "Turnable"
description: "A gear or wheel in a simple torque network: connected turnables share torque, alternate direction, and jam if the loop doesn't fit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Turnable

A **class** in `Root.Township`, the global namespace.

A gear or wheel in a simple torque network: connected turnables share torque, alternate direction, and jam if the loop doesn't fit. Driven by a `Motor`; `Belt` is a subclass.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`ICircle`](/mod/game-api/types/global-i-l/icircle)
- **Derived types** [`Belt`](/mod/game-api/types/global-a-b/belt), [`Gear`](/mod/game-api/types/global-e-h/gear)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Turnable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connected" /><code>{"protected List<"}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> connected"}</code> | <span className="api-desc">Backing list for `Connected`.</span> |
| <Link id="m-radius" /><code>{"protected float radius"}</code> | <span className="api-desc">Backing value for `Radius`.</span> |

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-friction" /><code>{"private float friction"}</code> | <span className="api-desc">Torque lost per second while turning.</span> |
| <Link id="m-iscurrentflipped" /><code>{"private bool isCurrentFlipped"}</code> | <span className="api-desc">Whether this gear turns the opposite way in the current cluster update (every other gear in a chain is flipped).</span> |
| <Link id="m-isdebug" /><code>{"private bool isDebug"}</code> | <span className="api-desc">Inspector flag that nothing reads.</span> |
| <Link id="m-mass" /><code>{"private float mass"}</code> | <span className="api-desc">Mass used for the moment of inertia (minimum 0.001).</span> |
| <Link id="m-speed" /><code>{"private float speed"}</code> | <span className="api-desc">Starting speed, turned into torque on `Awake`.</span> |
| <Link id="m-torque" /><code>{"private float torque"}</code> | <span className="api-desc">Current torque; `Speed` is this over the moment of inertia.</span> |
| <Link id="m-turning" /><code>{"private List<"}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> turning"}</code> | <span className="api-desc">Unused list in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-connected-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> Connected { get; }"}</code> | <span className="api-desc">Turnables meshed with this one.</span> |
| <Link id="m-face" /><code>{"Vector3 Face { get; }"}</code> | <span className="api-desc">Local forward direction.</span> |
| <Link id="m-momentofinertia" /><code>{"float MomentOfInertia { get; }"}</code> | <span className="api-desc">Mass times radius squared over 2.</span> |
| <Link id="m-motor" /><code><Link to="/mod/game-api/types/global-m-o/motor">{"Motor"}</Link>{" "}<Link to="/mod/game-api/types/global-m-o/motor">{"Motor"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Motor driving this turnable, if any.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Local position.</span> |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | <span className="api-desc">Radius of the turnable.</span> |
| <Link id="m-speed-2" /><code>{"float Speed { get; }"}</code> | <span className="api-desc">Torque divided by moment of inertia.</span> |
| <Link id="m-torque-2" /><code>{"float Torque { get; set; }"}</code> | <span className="api-desc">Current torque. Settable.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-branchupdate" /><code>{"virtual void BranchUpdate("}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" from, ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped = false)"}</code> | <span className="api-desc">Adds this turnable's torque and inertia to the cluster totals and walks on; marks the cluster jammed if reached again in the other direction.</span> |
| <Link id="m-updatewithsystemtorque" /><code>{"virtual void UpdateWithSystemTorque(float torquePerMoi)"}</code> | <span className="api-desc">Sets this turnable's torque from the cluster's shared value and turns it.</span> |
| <Link id="m-applyfrictionandmotor" /><code>{"protected virtual void ApplyFrictionAndMotor()"}</code> | <span className="api-desc">Reduces torque by friction, then lets the motor change it. With no friction (or no torque) the torque is reset to 0 first.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Sets the starting torque from the inspector speed.</span> |
| <Link id="m-branchtoconnected" /><code>{"protected virtual void BranchToConnected(ref float totalTorque, ref float totalMoi, HashSet<"}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> cluster, ref bool isJammed, bool isFlipped)"}</code> | <span className="api-desc">Passes the update on to every connected turnable with the direction flipped.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the radius and lines to connected turnables.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Keeps mass above 0 and resets torque from speed.</span> |
| <Link id="m-rotate" /><code>{"protected virtual void Rotate()"}</code> | <span className="api-desc">Turns the transform around local forward by speed times delta time.</span> |

## Used in

Members of other types that take, return or hold a `Turnable`:

<div className="api-used-in">

[`Belt.BranchToConnected`](/mod/game-api/types/global-a-b/belt#m-branchtoconnected), [`Belt.BranchUpdate`](/mod/game-api/types/global-a-b/belt#m-branchupdate), [`Belt.exterior`](/mod/game-api/types/global-a-b/belt#m-exterior), [`Motor.calculatingCluster`](/mod/game-api/types/global-m-o/motor#m-calculatingcluster), [`Motor.Turnable`](/mod/game-api/types/global-m-o/motor#m-turnable).

</div>
