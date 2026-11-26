---
title: "NonClimbable"
description: "Marks a collider as not climbable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonClimbable

A **class** in `Root.Township`, the global namespace.

Marks a collider as not climbable. Grabbing it either does nothing or holds then releases, depending on `climbFailBehaviour`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`, [`IClimbable`](/mod/game-api/types/global-i-l/iclimbable), [`IIgnoreColliderFlattening`](/mod/game-api/types/global-i-l/iignorecolliderflattening), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit)
- **Nested types** [`ClimbFailBehaviour`](/mod/game-api/types/global-m-o/nonclimbable-climbfailbehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NonClimbable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-climbfailbehaviour" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/nonclimbable-climbfailbehaviour">{"NonClimbable.ClimbFailBehaviour"}</Link>{" climbFailBehaviour"}</code> | <span className="api-desc">Ignored (can't grab at all) or ReleaseAfterHold (grab, then let go).</span> |

</details>

## Properties

<details className="api-private">
<summary>9 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iclimbable-canclimb" /><code>{"private bool IClimbable.CanClimb { get; }"}</code> | <span className="api-desc">False when set to Ignored, so hands can't grab; true for ReleaseAfterHold.</span> |
| <Link id="m-iclimbable-canmove" /><code>{"private bool IClimbable.CanMove { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-iclimbable-curentpressure" /><code>{"private Vector3 IClimbable.CurentPressure { get; }"}</code> | <span className="api-desc">Always zero.</span> |
| <Link id="m-iclimbable-currentpressureratio" /><code>{"private float IClimbable.CurrentPressureRatio { get; }"}</code> | <span className="api-desc">Always 0.</span> |
| <Link id="m-iclimbable-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" IClimbable.Entity { get; }"}</code> | <span className="api-desc">Always null.</span> |
| <Link id="m-iclimbable-grippriority" /><code>{"private float IClimbable.GripPriority { get; }"}</code> | <span className="api-desc">Lowest possible priority, so any other climbable wins.</span> |
| <Link id="m-iclimbable-maximumpressure" /><code>{"private float IClimbable.MaximumPressure { get; }"}</code> | <span className="api-desc">Always 0.</span> |
| <Link id="m-iclimbable-oldpressureratio" /><code>{"private float IClimbable.OldPressureRatio { get; }"}</code> | <span className="api-desc">Always 0.</span> |
| <Link id="m-iclimbable-releasesimmediately" /><code>{"private bool IClimbable.ReleasesImmediately { get; }"}</code> | <span className="api-desc">Always true.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-break" /><code>{"event Action Break"}</code> | <span className="api-desc">Raised when a hand presses on it, to make the grip let go.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applypressure" /><code>{"private bool IClimbable.ApplyPressure(Vector3 pressure)"}</code> | <span className="api-desc">Raises `Break` and returns false, so the grip lets go.</span> |
| <Link id="m-getgravityboost" /><code>{"private float IClimbable.GetGravityBoost(Vector3 normal)"}</code> | <span className="api-desc">Always 0.</span> |

</details>
