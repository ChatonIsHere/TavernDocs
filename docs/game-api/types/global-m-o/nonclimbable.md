---
title: "NonClimbable"
description: "Marks a collider as not climbable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonClimbable

A **class** in `Root.Township`, no namespace.

Marks a collider as not climbable. Grabbing it either does nothing or holds then releases, depending on `climbFailBehaviour`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`, [`IClimbable`](/game-api/types/global-i-l/iclimbable), [`IIgnoreColliderFlattening`](/game-api/types/global-i-l/iignorecolliderflattening), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)
- **Nested types** [`ClimbFailBehaviour`](/game-api/types/global-m-o/nonclimbable-climbfailbehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NonClimbable()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-climbfailbehaviour" /><code>{"private "}<Link to="/game-api/types/global-m-o/nonclimbable-climbfailbehaviour">{"NonClimbable.ClimbFailBehaviour"}</Link>{" climbFailBehaviour"}</code> | Ignored (can't grab at all) or ReleaseAfterHold (grab, then let go). |

</details>

## Properties

<details>
<summary>9 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iclimbable-canclimb" /><code>{"private bool IClimbable.CanClimb { get; }"}</code> | False when set to Ignored, so hands can't grab; true for ReleaseAfterHold. |
| <Link id="m-iclimbable-canmove" /><code>{"private bool IClimbable.CanMove { get; }"}</code> | Always false. |
| <Link id="m-iclimbable-curentpressure" /><code>{"private Vector3 IClimbable.CurentPressure { get; }"}</code> | Always zero. |
| <Link id="m-iclimbable-currentpressureratio" /><code>{"private float IClimbable.CurrentPressureRatio { get; }"}</code> | Always 0. |
| <Link id="m-iclimbable-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" IClimbable.Entity { get; }"}</code> | Always null. |
| <Link id="m-iclimbable-grippriority" /><code>{"private float IClimbable.GripPriority { get; }"}</code> | Lowest possible priority, so any other climbable wins. |
| <Link id="m-iclimbable-maximumpressure" /><code>{"private float IClimbable.MaximumPressure { get; }"}</code> | Always 0. |
| <Link id="m-iclimbable-oldpressureratio" /><code>{"private float IClimbable.OldPressureRatio { get; }"}</code> | Always 0. |
| <Link id="m-iclimbable-releasesimmediately" /><code>{"private bool IClimbable.ReleasesImmediately { get; }"}</code> | Always true. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> | Raised when a hand presses on it, to make the grip let go. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"private bool IClimbable.ApplyPressure(Vector3 pressure)"}</code> | Raises `Break` and returns false, so the grip lets go. |
| <Link id="m-getgravityboost" /><code>{"private float IClimbable.GetGravityBoost(Vector3 normal)"}</code> | Always 0. |

</details>
