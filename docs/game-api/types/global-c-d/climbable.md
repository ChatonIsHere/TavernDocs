---
title: "Climbable"
description: "Marks a surface players can climb."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Climbable

A **class** in `Root.Township`, no namespace.

Marks a surface players can climb. Hands add pressure each physics step, and the grip breaks if it goes over the maximum.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IClimbable`](/game-api/types/global-i-l/iclimbable)
- **Derived types** [`DebugClimbable`](/game-api/types/global-c-d/debugclimbable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Climbable()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-canmove" /><code>{"private bool canMove"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-grippriority" /><code>{"private float gripPriority"}</code> |
| <Link id="m-lasttime" /><code>{"private float lastTime"}</code> |
| <Link id="m-maximumpressure" /><code>{"private float maximumPressure"}</code> |
| <Link id="m-oldpressuremagnitude" /><code>{"private float oldPressureMagnitude"}</code> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |
| <Link id="m-totalpressure" /><code>{"private Vector3 totalPressure"}</code> |
| <Link id="m-totalpressuremagnitude" /><code>{"private float totalPressureMagnitude"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canclimb" /><code>{"bool CanClimb { get; }"}</code> | Always true. |
| <Link id="m-canmove-2" /><code>{"bool CanMove { get; }"}</code> | Whether the surface can move, set in the inspector. |
| <Link id="m-curentpressure" /><code>{"Vector3 CurentPressure { get; }"}</code> | This step's total pressure, fading out soon after hands stop pushing. |
| <Link id="m-currentpressureratio" /><code>{"float CurrentPressureRatio { get; }"}</code> | This step's pressure as a share of the maximum. |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity the climbable belongs to. |
| <Link id="m-grippriority-2" /><code>{"float GripPriority { get; protected set; }"}</code> | Priority over other grips the hand overlaps. -1 (ungrabbable) while its Rigidbody is non-kinematic. |
| <Link id="m-maximumpressure-2" /><code>{"float MaximumPressure { get; }"}</code> | Pressure that breaks the grip. -1 means it never breaks. |
| <Link id="m-oldpressureratio" /><code>{"float OldPressureRatio { get; }"}</code> | Last step's pressure as a share of the maximum. |
| <Link id="m-releasesimmediately" /><code>{"bool ReleasesImmediately { get; }"}</code> | Always false. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-fadetime" /><code>{"private float FadeTime { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> | Raised when pressure goes over `MaximumPressure`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"virtual bool ApplyPressure(Vector3 pressure)"}</code> | Adds a hand's pressure for this physics step. Raises `Break` and returns false if the total goes over the maximum. |
| <Link id="m-getgravityboost" /><code>{"virtual float GetGravityBoost(Vector3 normal)"}</code> | How much the surface helps against gravity for a contact normal. The normal's Y by default. |

## Used in

Members of other types that take, return or hold a `Climbable`:

[`ClimberSettings.defaultClimbable`](/game-api/types/global-c-d/climbersettings#m-defaultclimbable), [`ClimberSettings.DefaultClimbable`](/game-api/types/global-c-d/climbersettings#m-defaultclimbable-2).
