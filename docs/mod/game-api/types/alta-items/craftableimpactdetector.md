---
title: "CraftableImpactDetector"
description: "A CraftableImpactDetectorBase that only accepts collisions from its registered tool when the contact is on one of its own colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftableImpactDetector

A **class** in `Root.Township`, `Alta.Impact`.

A `CraftableImpactDetectorBase` that only accepts collisions from its registered tool when the contact is on one of its own colliders.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`CraftableImpactDetectorBase`](/mod/game-api/types/alta-items/craftableimpactdetectorbase)
- **Derived types** [`SparkImpactDetector`](/mod/game-api/types/alta-items/sparkimpactdetector)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CraftableImpactDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-validatecontatpoint" /><code>{"protected override bool ValidateContatPoint(ContactPoint point)"}</code> | <span className="api-desc">True when the contact's own collider belongs to this detector (its nearest parent `ImpactDetector` is this one).</span> |
