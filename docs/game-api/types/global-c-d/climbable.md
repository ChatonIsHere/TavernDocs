---
title: "Climbable"
description: "class Climbable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Climbable

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IClimbable`](/game-api/types/global-i-l/iclimbable)
- **Derived types** [`DebugClimbable`](/game-api/types/global-c-d/debugclimbable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Climbable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canmove" /><code>{"private bool canMove"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-grippriority" /><code>{"private float gripPriority"}</code> |  |
| <Link id="m-lasttime" /><code>{"private float lastTime"}</code> |  |
| <Link id="m-maximumpressure" /><code>{"private float maximumPressure"}</code> |  |
| <Link id="m-oldpressuremagnitude" /><code>{"private float oldPressureMagnitude"}</code> |  |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |  |
| <Link id="m-totalpressure" /><code>{"private Vector3 totalPressure"}</code> |  |
| <Link id="m-totalpressuremagnitude" /><code>{"private float totalPressureMagnitude"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canclimb" /><code>{"bool CanClimb { get; }"}</code> |  |
| <Link id="m-canmove-2" /><code>{"bool CanMove { get; }"}</code> |  |
| <Link id="m-curentpressure" /><code>{"Vector3 CurentPressure { get; }"}</code> |  |
| <Link id="m-currentpressureratio" /><code>{"float CurrentPressureRatio { get; }"}</code> |  |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-grippriority-2" /><code>{"float GripPriority { get; protected set; }"}</code> |  |
| <Link id="m-maximumpressure-2" /><code>{"float MaximumPressure { get; }"}</code> |  |
| <Link id="m-oldpressureratio" /><code>{"float OldPressureRatio { get; }"}</code> |  |
| <Link id="m-releasesimmediately" /><code>{"bool ReleasesImmediately { get; }"}</code> |  |
| <Link id="m-fadetime" /><code>{"private float FadeTime { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"virtual bool ApplyPressure(Vector3 pressure)"}</code> |  |
| <Link id="m-getgravityboost" /><code>{"virtual float GetGravityBoost(Vector3 normal)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Climbable`:

[`ClimberSettings.defaultClimbable`](/game-api/types/global-c-d/climbersettings#m-defaultclimbable), [`ClimberSettings.DefaultClimbable`](/game-api/types/global-c-d/climbersettings#m-defaultclimbable-2).
