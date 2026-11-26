---
title: "PickupDecaySettings"
description: "Decay settings asset for pickups, adding rules for crafted and kinematic pickups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDecaySettings

A **class** in `Root.Township`, the global namespace.

Decay settings asset for pickups, adding rules for crafted and kinematic pickups. Read by `PickupDecay`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`DecaySettings`](/mod/game-api/types/global-c-d/decaysettings)
- **Derived types** [`PickupDecaySettings.Create`](/mod/game-api/types/global-p/pickupdecaysettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/pickupdecaysettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDecaySettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-candecaywhencrafted" /><code>{"private bool canDecayWhenCrafted"}</code> | <span className="api-desc">Backing field for `CanDecayWhenCrafted`.</span> |
| <Link id="m-candecaywhenkinematic" /><code>{"private bool canDecayWhenKinematic"}</code> | <span className="api-desc">Backing field for `CanDecayWhenKinematic`.</span> |
| <Link id="m-crafteddecaytimemultiplier" /><code>{"private float craftedDecayTimeMultiplier"}</code> | <span className="api-desc">Backing field for `CraftedDecayTimeMultiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-candecaywhencrafted-2" /><code>{"bool CanDecayWhenCrafted { get; }"}</code> | <span className="api-desc">If false, pickups that are crafted don't decay.</span> |
| <Link id="m-candecaywhenkinematic-2" /><code>{"bool CanDecayWhenKinematic { get; }"}</code> | <span className="api-desc">If false, pickups don't decay while their rigidbody is kinematic.</span> |
| <Link id="m-crafteddecaytimemultiplier-2" /><code>{"float CraftedDecayTimeMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on decay time for crafted pickups, when they are allowed to decay.</span> |

## Used in

Members of other types that take, return or hold a `PickupDecaySettings`:

<div className="api-used-in">

[`PickupDecay.PickuDecaySettings`](/mod/game-api/types/global-p/pickupdecay#m-pickudecaysettings).

</div>
