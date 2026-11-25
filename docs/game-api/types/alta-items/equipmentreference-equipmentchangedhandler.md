---
title: "EquipmentReference.EquipmentChangedHandler"
description: "delegate EquipmentReference.EquipmentChangedHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentReference.EquipmentChangedHandler

A **delegate** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`EquipmentReference`](/game-api/types/alta-items/equipmentreference)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentChangedHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" equipment, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-items/armordefinition">{"ArmorDefinition"}</Link>{" equipment)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EquipmentChangedHandler`:

[`EquipmentReference.Changed`](/game-api/types/alta-items/equipmentreference#m-changed).
