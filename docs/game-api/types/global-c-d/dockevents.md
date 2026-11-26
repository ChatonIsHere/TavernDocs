---
title: "DockEvents"
description: "Exposes a PickupDock's docking as events you can wire in the inspector: each item in or out, the first in and the last out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockEvents

A **class** in `Root.Township`, no namespace.

Exposes a `PickupDock`'s docking as events you can wire in the inspector: each item in or out, the first in and the last out.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`AbstractDockEvents`](/game-api/types/alta-items/abstractdockevents)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DockEvents()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-firstdocked" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" firstDocked"}</code> | Event for the first item docked. |
| <Link id="m-itemdocked" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" itemDocked"}</code> | Event for each item docked. |
| <Link id="m-itemundocked" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" itemUndocked"}</code> | Event for each item removed. |
| <Link id="m-lastundocked" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" lastUndocked"}</code> | Event for the last item removed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-firstdocked-2" /><code>{"protected override void FirstDocked()"}</code> | Fires `firstDocked` when the dock goes from empty to one item. |
| <Link id="m-itemdocked-2" /><code>{"protected override void ItemDocked()"}</code> | Fires `itemDocked` for every item docked. |
| <Link id="m-itemundocked-2" /><code>{"protected override void ItemUndocked()"}</code> | Fires `itemUndocked` for every item removed. |
| <Link id="m-lastundocked-2" /><code>{"protected override void LastUndocked()"}</code> | Fires `lastUndocked` when the dock becomes empty. |
