---
title: "DurabilitySettings"
description: "Scriptable object with an item's durability rules: either a chance to break or a starting durability, and how damage converts to wear."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilitySettings

A **class** in `Root.Township`, the global namespace.

Scriptable object with an item's durability rules: either a chance to break or a starting durability, and how damage converts to wear.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`PopupScriptableObject`](/mod/game-api/types/global-p/popupscriptableobject)
- **Derived types** [`DurabilitySettings.Create`](/mod/game-api/types/global-c-d/durabilitysettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/durabilitysettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilitySettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damageconversion" /><code>{"private float damageConversion"}</code> | <span className="api-desc">Backing field for `DamageConversion`.</span> |
| <Link id="m-durability" /><code>{"private float durability"}</code> | <span className="api-desc">Backing field for `Durability`.</span> |
| <Link id="m-ischancebaseddurability" /><code>{"private bool isChanceBasedDurability"}</code> | <span className="api-desc">Backing field for `IsChanceBasedDurability`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-damageconversion-2" /><code>{"float DamageConversion { get; }"}</code> | <span className="api-desc">Multiplier from damage taken to durability lost. Defaults to 1.</span> |
| <Link id="m-durability-2" /><code>{"float Durability { get; }"}</code> | <span className="api-desc">Chance to break when `IsChanceBasedDurability` is on, otherwise the starting durability. Defaults to 0.5.</span> |
| <Link id="m-ischancebaseddurability-2" /><code>{"bool IsChanceBasedDurability { get; }"}</code> | <span className="api-desc">When true, the item breaks by chance instead of wearing down.</span> |
| <Link id="m-subfolder" /><code>{"override string SubFolder { get; }"}</code> | <span className="api-desc">Puts these assets under "Items/" in the popup asset picker.</span> |

## Used in

Members of other types that take, return or hold a `DurabilitySettings`:

<div className="api-used-in">

[`DurabilityModule.durabilitySettings`](/mod/game-api/types/global-c-d/durabilitymodule#m-durabilitysettings).

</div>
