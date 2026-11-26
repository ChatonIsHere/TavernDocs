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
| <Link id="m-ctor" /><code>{"ItemDockedVfxEvent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnplay" /><code>{"private bool btnPlay"}</code> | <span className="api-desc">Inspector button that plays the first-docked effect.</span> |
| <Link id="m-firstitemdockedvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" firstItemDockedVfx"}</code> | <span className="api-desc">Effect for the first item docked.</span> |
| <Link id="m-itemdockedvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" itemDockedVfx"}</code> | <span className="api-desc">Effect for each item docked.</span> |
| <Link id="m-itemundockedvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" itemUndockedVfx"}</code> | <span className="api-desc">Effect for each item undocked.</span> |
| <Link id="m-lastitemdockedvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" lastItemDockedVfx"}</code> | <span className="api-desc">Effect for the last item undocked.</span> |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | <span className="api-desc">Where effects are spawned.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-firstdocked" /><code>{"protected override void FirstDocked()"}</code> | <span className="api-desc">Plays `firstItemDockedVfx`.</span> |
| <Link id="m-itemdocked" /><code>{"protected override void ItemDocked()"}</code> | <span className="api-desc">Plays `itemDockedVfx`.</span> |
| <Link id="m-itemundocked" /><code>{"protected override void ItemUndocked()"}</code> | <span className="api-desc">Plays `itemUndockedVfx`.</span> |
| <Link id="m-lastundocked" /><code>{"protected override void LastUndocked()"}</code> | <span className="api-desc">Plays `lastItemDockedVfx` (despite the name, on the last undock).</span> |
| <Link id="m-playeffect" /><code>{"protected virtual void PlayEffect("}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" vfx)"}</code> | <span className="api-desc">Spawns the given pooled effect at `spawnPoint`, if set.</span> |
