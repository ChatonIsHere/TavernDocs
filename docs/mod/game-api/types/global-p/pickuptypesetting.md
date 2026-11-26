---
title: "PickupTypeSetting"
description: "Base settings asset for one pickup joint type, looked up from PickupTypeSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupTypeSetting

An **abstract class** in `Root.Township`, the global namespace.

Base settings asset for one pickup joint type, looked up from `PickupTypeSettings`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`OverridableSettings`](/mod/game-api/types/global-m-o/overridablesettings)
- **Derived types** [`VelocityPickupSettings`](/mod/game-api/types/global-t-x/velocitypickupsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PickupTypeSetting()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" type"}</code> | <span className="api-desc">Backing field for `Type`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type-2" /><code><Link to="/mod/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" Type { get; }"}</code> | <span className="api-desc">The joint type these settings are for.</span> |

## Used in

Members of other types that take, return or hold a `PickupTypeSetting`:

<div className="api-used-in">

[`PickupTypeSettings.pickupSettings`](/mod/game-api/types/global-p/pickuptypesettings#m-pickupsettings), [`PickupTypeSettings.pickupTypeSettings`](/mod/game-api/types/global-p/pickuptypesettings#m-pickuptypesettings).

</div>
