---
title: "DamagePopup"
description: "The pooled floating text that shows damage numbers, scaled and rounded by the PickupTypeSettings popup multiplier and precision."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamagePopup

A **class** in `Root.Township`, `Alta.Utilities`.

The pooled floating text that shows damage numbers, scaled and rounded by the `PickupTypeSettings` popup multiplier and precision.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`TextPopup`](/game-api/types/alta-utilities/textpopup)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamagePopup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> | Damage below this releases the popup back to the pool. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float damage, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" impactChannel)"}</code> | Shows a damage number in the channel's (or a given) colour, or "base + extra" when there's extra damage. Releases the popup below `minValue`. |
| <Link id="m-updatevalue-2" /><code>{"void UpdateValue(float baseDamage, float additionalDamage, "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" impactChannel)"}</code> | Shows a damage number in the channel's (or a given) colour, or "base + extra" when there's extra damage. Releases the popup below `minValue`. |
| <Link id="m-updatevalue-3" /><code>{"void UpdateValue(float damage, Color color)"}</code> | Shows a damage number in the channel's (or a given) colour, or "base + extra" when there's extra damage. Releases the popup below `minValue`. |
