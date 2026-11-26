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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`TextPopup`](/mod/game-api/types/alta-utilities/textpopup)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamagePopup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minvalue" /><code>{"private float minValue"}</code> | <span className="api-desc">Damage below this releases the popup back to the pool.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float damage, "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" impactChannel)"}</code> | <span className="api-desc">Shows a damage number in the channel's (or a given) colour, or "base + extra" when there's extra damage. Releases the popup below `minValue`.</span> |
| <Link id="m-updatevalue-2" /><code>{"void UpdateValue(float baseDamage, float additionalDamage, "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{" impactChannel)"}</code> | <span className="api-desc">Shows a damage number in the channel's (or a given) colour, or "base + extra" when there's extra damage. Releases the popup below `minValue`.</span> |
| <Link id="m-updatevalue-3" /><code>{"void UpdateValue(float damage, Color color)"}</code> | <span className="api-desc">Shows a damage number in the channel's (or a given) colour, or "base + extra" when there's extra damage. Releases the popup below `minValue`.</span> |
