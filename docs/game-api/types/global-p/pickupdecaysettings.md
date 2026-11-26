---
title: "PickupDecaySettings"
description: "Decay settings asset for pickups, adding rules for crafted and kinematic pickups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDecaySettings

A **class** in `Root.Township`, no namespace.

Decay settings asset for pickups, adding rules for crafted and kinematic pickups. Read by `PickupDecay`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`DecaySettings`](/game-api/types/global-c-d/decaysettings)
- **Derived types** [`PickupDecaySettings.Create`](/game-api/types/global-p/pickupdecaysettings-create)
- **Nested types** [`Create`](/game-api/types/global-p/pickupdecaysettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDecaySettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-candecaywhencrafted" /><code>{"private bool canDecayWhenCrafted"}</code> | Backing field for `CanDecayWhenCrafted`. |
| <Link id="m-candecaywhenkinematic" /><code>{"private bool canDecayWhenKinematic"}</code> | Backing field for `CanDecayWhenKinematic`. |
| <Link id="m-crafteddecaytimemultiplier" /><code>{"private float craftedDecayTimeMultiplier"}</code> | Backing field for `CraftedDecayTimeMultiplier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-candecaywhencrafted-2" /><code>{"bool CanDecayWhenCrafted { get; }"}</code> | If false, pickups that are crafted don't decay. |
| <Link id="m-candecaywhenkinematic-2" /><code>{"bool CanDecayWhenKinematic { get; }"}</code> | If false, pickups don't decay while their rigidbody is kinematic. |
| <Link id="m-crafteddecaytimemultiplier-2" /><code>{"float CraftedDecayTimeMultiplier { get; }"}</code> | Multiplier on decay time for crafted pickups, when they are allowed to decay. |

## Used in

Members of other types that take, return or hold a `PickupDecaySettings`:

[`PickupDecay.PickuDecaySettings`](/game-api/types/global-p/pickupdecay#m-pickudecaysettings).
