---
title: "EquipmentReference.EquipmentChangedHandler"
description: "Handler for EquipmentReference.Changed, called with the new armour definition when Equipment is set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentReference.EquipmentChangedHandler

A **delegate** in `Root.Township`, `Alta.Impact`.

Handler for `EquipmentReference.Changed`, called with the new armour definition when `Equipment` is set.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`EquipmentReference`](/game-api/types/alta-items/equipmentreference)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" equipment, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" equipment)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `EquipmentChangedHandler`:

[`EquipmentReference.Changed`](/game-api/types/alta-items/equipmentreference#m-changed).
