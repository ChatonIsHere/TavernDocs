---
title: "NetworkAxisPosition"
description: "A NetworkAxisValue that syncs a transform's local position along one axis, between a minimum and maximum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkAxisPosition

A **class** in `Root.Township`, `Alta.Networking`.

A `NetworkAxisValue` that syncs a transform's local position along one axis, between a minimum and maximum.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkAxisValue`](/mod/game-api/types/alta-networking/networkaxisvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkAxisPosition()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumvalue" /><code>{"private float maximumValue"}</code> | <span className="api-desc">Backing field for `MaximumValue` (default 1).</span> |
| <Link id="m-minimumvalue" /><code>{"private float minimumValue"}</code> | <span className="api-desc">Backing field for `MinimumValue`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"protected override float CurrentValue { get; }"}</code> | <span className="api-desc">The local position projected on the axis.</span> |
| <Link id="m-maximumvalue-2" /><code>{"protected override float MaximumValue { get; }"}</code> | <span className="api-desc">Upper limit of the synced range.</span> |
| <Link id="m-minimumvalue-2" /><code>{"protected override float MinimumValue { get; }"}</code> | <span className="api-desc">Lower limit of the synced range.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyvalue" /><code>{"protected override void ApplyValue(float value)"}</code> | <span className="api-desc">Sets the local position to the axis times the value.</span> |
| <Link id="m-getdifference" /><code>{"protected override float GetDifference(float currentValue, float value)"}</code> | <span className="api-desc">Absolute difference between two values.</span> |
| <Link id="m-lerptovalue" /><code>{"protected override float LerpToValue(float value, float lerpValue)"}</code> | <span className="api-desc">Lerps from the current value toward the target.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the range of movement as a line.</span> |

</details>
