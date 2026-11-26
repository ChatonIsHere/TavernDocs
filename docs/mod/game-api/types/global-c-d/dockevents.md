---
title: "DockEvents"
description: "Exposes a PickupDock's docking as events you can wire in the inspector: each item in or out, the first in and the last out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockEvents

A **class** in `Root.Township`, the global namespace.

Exposes a `PickupDock`'s docking as events you can wire in the inspector: each item in or out, the first in and the last out.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`AbstractDockEvents`](/mod/game-api/types/alta-items/abstractdockevents)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-firstdocked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" firstDocked"}</code> | <span className="api-desc">Event for the first item docked.</span> |
| <Link id="m-itemdocked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" itemDocked"}</code> | <span className="api-desc">Event for each item docked.</span> |
| <Link id="m-itemundocked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" itemUndocked"}</code> | <span className="api-desc">Event for each item removed.</span> |
| <Link id="m-lastundocked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" lastUndocked"}</code> | <span className="api-desc">Event for the last item removed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-firstdocked-2" /><code>{"protected override void FirstDocked()"}</code> | <span className="api-desc">Fires `firstDocked` when the dock goes from empty to one item.</span> |
| <Link id="m-itemdocked-2" /><code>{"protected override void ItemDocked()"}</code> | <span className="api-desc">Fires `itemDocked` for every item docked.</span> |
| <Link id="m-itemundocked-2" /><code>{"protected override void ItemUndocked()"}</code> | <span className="api-desc">Fires `itemUndocked` for every item removed.</span> |
| <Link id="m-lastundocked-2" /><code>{"protected override void LastUndocked()"}</code> | <span className="api-desc">Fires `lastUndocked` when the dock becomes empty.</span> |
