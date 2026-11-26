---
title: "Motor"
description: "Drives a Turnable mechanism toward a top speed with a set torque."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Motor

A **class** in `Root.Township`, no namespace.

Drives a `Turnable` mechanism toward a top speed with a set torque. Each frame it solves the whole connected cluster of turnables once and spreads the torque over them.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Motor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatingcluster" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> calculatingCluster"}</code> | Shared set reused to collect the connected turnables each update. |
| <Link id="m-lastframe" /><code>{"private int lastFrame"}</code> | Frame last handled, so the cluster is only solved once per frame. |
| <Link id="m-maximummotorspeed" /><code>{"private float maximumMotorSpeed"}</code> | Target speed, scaled by the turnable's moment of inertia. |
| <Link id="m-motortorque" /><code>{"private float motorTorque"}</code> | Backing field for `Torque` (default 10). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-torque" /><code>{"float Torque { get; set; }"}</code> | The motor's torque. Can be changed at runtime. |
| <Link id="m-turnable" /><code><Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" "}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" { get; private set; }"}</code> | The turnable this motor drives. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifytorque" /><code>{"void ModifyTorque(ref float torque)"}</code> | Adds motor torque toward the top speed, limited to `motorTorque` per second. Marks this frame as handled. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `Turnable` on the same object and sets itself as its motor. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Once per frame: walks the connected turnables, totals torque and inertia, and applies torque per inertia to each. Jammed clusters get no torque. |

</details>

## Used in

Members of other types that take, return or hold a `Motor`:

[`RopeGrab.ropeBeltMotor`](/game-api/types/global-q-r/ropegrab#m-ropebeltmotor), [`Turnable.Motor`](/game-api/types/global-t-x/turnable#m-motor).
