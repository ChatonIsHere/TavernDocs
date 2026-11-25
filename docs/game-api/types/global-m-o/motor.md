---
title: "Motor"
description: "class Motor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Motor

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Motor()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-calculatingcluster" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{"> calculatingCluster"}</code> |  |
| <Link id="m-lastframe" /><code>{"private int lastFrame"}</code> |  |
| <Link id="m-maximummotorspeed" /><code>{"private float maximumMotorSpeed"}</code> |  |
| <Link id="m-motortorque" /><code>{"private float motorTorque"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-torque" /><code>{"float Torque { get; set; }"}</code> |  |
| <Link id="m-turnable" /><code><Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" "}<Link to="/game-api/types/global-t-x/turnable">{"Turnable"}</Link>{" { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifytorque" /><code>{"void ModifyTorque(ref float torque)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Motor`:

[`RopeGrab.ropeBeltMotor`](/game-api/types/global-q-r/ropegrab#m-ropebeltmotor), [`Turnable.Motor`](/game-api/types/global-t-x/turnable#m-motor).
