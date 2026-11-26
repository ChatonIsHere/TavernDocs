---
title: "DurabilitySettings"
description: "Scriptable object with an item's durability rules: either a chance to break or a starting durability, and how damage converts to wear."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilitySettings

A **class** in `Root.Township`, no namespace.

Scriptable object with an item's durability rules: either a chance to break or a starting durability, and how damage converts to wear.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`PopupScriptableObject`](/game-api/types/global-p/popupscriptableobject)
- **Derived types** [`DurabilitySettings.Create`](/game-api/types/global-c-d/durabilitysettings-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/durabilitysettings-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DurabilitySettings()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damageconversion" /><code>{"private float damageConversion"}</code> | Backing field for `DamageConversion`. |
| <Link id="m-durability" /><code>{"private float durability"}</code> | Backing field for `Durability`. |
| <Link id="m-ischancebaseddurability" /><code>{"private bool isChanceBasedDurability"}</code> | Backing field for `IsChanceBasedDurability`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-damageconversion-2" /><code>{"float DamageConversion { get; }"}</code> | Multiplier from damage taken to durability lost. Defaults to 1. |
| <Link id="m-durability-2" /><code>{"float Durability { get; }"}</code> | Chance to break when `IsChanceBasedDurability` is on, otherwise the starting durability. Defaults to 0.5. |
| <Link id="m-ischancebaseddurability-2" /><code>{"bool IsChanceBasedDurability { get; }"}</code> | When true, the item breaks by chance instead of wearing down. |
| <Link id="m-subfolder" /><code>{"override string SubFolder { get; }"}</code> | Puts these assets under "Items/" in the popup asset picker. |

## Used in

Members of other types that take, return or hold a `DurabilitySettings`:

[`DurabilityModule.durabilitySettings`](/game-api/types/global-c-d/durabilitymodule#m-durabilitysettings).
