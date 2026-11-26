---
title: "ToggleChildrenActive"
description: "A tiny component whose ToggleActive flips every direct child on or off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleChildrenActive

A **class** in `Root.Township`, the global namespace.

A tiny component whose `ToggleActive` flips every direct child on or off. Meant to be called from a Unity event.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleChildrenActive()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggleactive" /><code>{"void ToggleActive()"}</code> | <span className="api-desc">Flips the active state of each direct child of this transform.</span> |
