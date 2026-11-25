---
title: "NonClimbable"
description: "class NonClimbable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonClimbable

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`, [`IClimbable`](/game-api/types/global-i-l/iclimbable), [`IIgnoreColliderFlattening`](/game-api/types/global-i-l/iignorecolliderflattening), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)
- **Nested types** [`ClimbFailBehaviour`](/game-api/types/global-m-o/nonclimbable-climbfailbehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NonClimbable()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-climbfailbehaviour" /><code>{"private "}<Link to="/game-api/types/global-m-o/nonclimbable-climbfailbehaviour">{"NonClimbable.ClimbFailBehaviour"}</Link>{" climbFailBehaviour"}</code> |

</details>

## Properties

<details>
<summary>9 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-iclimbable-canclimb" /><code>{"private bool IClimbable.CanClimb { get; }"}</code> |
| <Link id="m-iclimbable-canmove" /><code>{"private bool IClimbable.CanMove { get; }"}</code> |
| <Link id="m-iclimbable-curentpressure" /><code>{"private Vector3 IClimbable.CurentPressure { get; }"}</code> |
| <Link id="m-iclimbable-currentpressureratio" /><code>{"private float IClimbable.CurrentPressureRatio { get; }"}</code> |
| <Link id="m-iclimbable-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" IClimbable.Entity { get; }"}</code> |
| <Link id="m-iclimbable-grippriority" /><code>{"private float IClimbable.GripPriority { get; }"}</code> |
| <Link id="m-iclimbable-maximumpressure" /><code>{"private float IClimbable.MaximumPressure { get; }"}</code> |
| <Link id="m-iclimbable-oldpressureratio" /><code>{"private float IClimbable.OldPressureRatio { get; }"}</code> |
| <Link id="m-iclimbable-releasesimmediately" /><code>{"private bool IClimbable.ReleasesImmediately { get; }"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-applypressure" /><code>{"private bool IClimbable.ApplyPressure(Vector3 pressure)"}</code> |
| <Link id="m-getgravityboost" /><code>{"private float IClimbable.GetGravityBoost(Vector3 normal)"}</code> |

</details>
