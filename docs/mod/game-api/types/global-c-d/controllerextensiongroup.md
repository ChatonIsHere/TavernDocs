---
title: "ControllerExtensionGroup"
description: "A ComponentGroup of ControllerExtensions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerExtensionGroup

A **class** in `Root.Township`, the global namespace.

A `ComponentGroup` of `ControllerExtension`s. `Controller` instantiates these groups to add extensions to a hand.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`ComponentGroup<ControllerExtension>`](/mod/game-api/types/global-c-d/componentgroup-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerExtensionGroup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Used in

Members of other types that take, return or hold a `ControllerExtensionGroup`:

[`Controller.AddExtension`](/mod/game-api/types/global-c-d/controller#m-addextension), [`Controller.CreateExtensionObject`](/mod/game-api/types/global-c-d/controller#m-createextensionobject), [`Controller.extensionsGroup`](/mod/game-api/types/global-c-d/controller#m-extensionsgroup), [`Controller.localExtensionsGroup`](/mod/game-api/types/global-c-d/controller#m-localextensionsgroup).
