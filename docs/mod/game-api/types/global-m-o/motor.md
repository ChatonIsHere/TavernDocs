---
title: "Motor"
description: "Drives a Turnable mechanism toward a top speed with a set torque."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Motor

A **class** in `Root.Township`, the global namespace.

Drives a `Turnable` mechanism toward a top speed with a set torque. Each frame it solves the whole connected cluster of turnables once and spreads the torque over them.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Motor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatingcluster" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> calculatingCluster"}</code> | <span className="api-desc">Shared set reused to collect the connected turnables each update.</span> |
| <Link id="m-lastframe" /><code>{"private int lastFrame"}</code> | <span className="api-desc">Frame last handled, so the cluster is only solved once per frame.</span> |
| <Link id="m-maximummotorspeed" /><code>{"private float maximumMotorSpeed"}</code> | <span className="api-desc">Target speed, scaled by the turnable's moment of inertia.</span> |
| <Link id="m-motortorque" /><code>{"private float motorTorque"}</code> | <span className="api-desc">Backing field for `Torque` (default 10).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-torque" /><code>{"float Torque { get; set; }"}</code> | <span className="api-desc">The motor's torque. Can be changed at runtime.</span> |
| <Link id="m-turnable" /><code><Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" "}<Link to="/mod/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The turnable this motor drives.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifytorque" /><code>{"void ModifyTorque(ref float torque)"}</code> | <span className="api-desc">Adds motor torque toward the top speed, limited to `motorTorque` per second. Marks this frame as handled.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the `Turnable` on the same object and sets itself as its motor.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Once per frame: walks the connected turnables, totals torque and inertia, and applies torque per inertia to each. Jammed clusters get no torque.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Motor`:

<div className="api-used-in">

[`RopeGrab.ropeBeltMotor`](/mod/game-api/types/global-q-r/ropegrab#m-ropebeltmotor), [`Turnable.Motor`](/mod/game-api/types/global-t-x/turnable#m-motor).

</div>
