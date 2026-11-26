---
title: "PickupTypeSetting"
description: "Base settings asset for one pickup joint type, looked up from PickupTypeSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupTypeSetting

An **abstract class** in `Root.Township`, no namespace.

Base settings asset for one pickup joint type, looked up from `PickupTypeSettings`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`OverridableSettings`](/game-api/types/global-m-o/overridablesettings)
- **Derived types** [`VelocityPickupSettings`](/game-api/types/global-t-x/velocitypickupsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PickupTypeSetting()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" type"}</code> | Backing field for `Type`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type-2" /><code><Link to="/game-api/types/global-p/pickupjointtype">{"PickUpJointType"}</Link>{" Type { get; }"}</code> | The joint type these settings are for. |

## Used in

Members of other types that take, return or hold a `PickupTypeSetting`:

[`PickupTypeSettings.pickupSettings`](/game-api/types/global-p/pickuptypesettings#m-pickupsettings), [`PickupTypeSettings.pickupTypeSettings`](/game-api/types/global-p/pickuptypesettings#m-pickuptypesettings).
