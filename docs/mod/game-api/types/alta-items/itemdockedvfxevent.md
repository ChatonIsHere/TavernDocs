---
title: "ItemDockedVfxEvent"
description: "Plays a pooled effect at a spawn point when items are docked into or undocked from a dock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemDockedVfxEvent

A **class** in `Root.Township`, `Alta.Inventory`.

Plays a pooled effect at a spawn point when items are docked into or undocked from a dock.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`AbstractDockEvents`](/mod/game-api/types/alta-items/abstractdockevents)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemDockedVfxEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnplay" /><code>{"private bool btnPlay"}</code> | Inspector button that plays the first-docked effect. |
| <Link id="m-firstitemdockedvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" firstItemDockedVfx"}</code> | Effect for the first item docked. |
| <Link id="m-itemdockedvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" itemDockedVfx"}</code> | Effect for each item docked. |
| <Link id="m-itemundockedvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" itemUndockedVfx"}</code> | Effect for each item undocked. |
| <Link id="m-lastitemdockedvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" lastItemDockedVfx"}</code> | Effect for the last item undocked. |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | Where effects are spawned. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-firstdocked" /><code>{"protected override void FirstDocked()"}</code> | Plays `firstItemDockedVfx`. |
| <Link id="m-itemdocked" /><code>{"protected override void ItemDocked()"}</code> | Plays `itemDockedVfx`. |
| <Link id="m-itemundocked" /><code>{"protected override void ItemUndocked()"}</code> | Plays `itemUndockedVfx`. |
| <Link id="m-lastundocked" /><code>{"protected override void LastUndocked()"}</code> | Plays `lastItemDockedVfx` (despite the name, on the last undock). |
| <Link id="m-playeffect" /><code>{"protected virtual void PlayEffect("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" vfx)"}</code> | Spawns the given pooled effect at `spawnPoint`, if set. |
