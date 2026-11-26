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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EquipmentChangedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" equipment, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" equipment)"}</code> |

## Used in

Members of other types that take, return or hold a `EquipmentChangedHandler`:

[`EquipmentReference.Changed`](/game-api/types/alta-items/equipmentreference#m-changed).
