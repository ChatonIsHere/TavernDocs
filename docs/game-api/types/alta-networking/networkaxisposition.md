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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkAxisValue`](/game-api/types/alta-networking/networkaxisvalue)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkAxisPosition()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximumvalue" /><code>{"private float maximumValue"}</code> | Backing field for `MaximumValue` (default 1). |
| <Link id="m-minimumvalue" /><code>{"private float minimumValue"}</code> | Backing field for `MinimumValue`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"protected override float CurrentValue { get; }"}</code> | The local position projected on the axis. |
| <Link id="m-maximumvalue-2" /><code>{"protected override float MaximumValue { get; }"}</code> | Upper limit of the synced range. |
| <Link id="m-minimumvalue-2" /><code>{"protected override float MinimumValue { get; }"}</code> | Lower limit of the synced range. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyvalue" /><code>{"protected override void ApplyValue(float value)"}</code> | Sets the local position to the axis times the value. |
| <Link id="m-getdifference" /><code>{"protected override float GetDifference(float currentValue, float value)"}</code> | Absolute difference between two values. |
| <Link id="m-lerptovalue" /><code>{"protected override float LerpToValue(float value, float lerpValue)"}</code> | Lerps from the current value toward the target. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the range of movement as a line. |

</details>
