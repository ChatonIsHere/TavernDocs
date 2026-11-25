---
title: "ItemDockedVfxEvent"
description: "class ItemDockedVfxEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemDockedVfxEvent

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`AbstractDockEvents`](/game-api/types/alta-items/abstractdockevents)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ItemDockedVfxEvent()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-btnplay" /><code>{"private bool btnPlay"}</code> |
| <Link id="m-firstitemdockedvfx" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" firstItemDockedVfx"}</code> |
| <Link id="m-itemdockedvfx" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" itemDockedVfx"}</code> |
| <Link id="m-itemundockedvfx" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" itemUndockedVfx"}</code> |
| <Link id="m-lastitemdockedvfx" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" lastItemDockedVfx"}</code> |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-firstdocked" /><code>{"protected override void FirstDocked()"}</code> |
| <Link id="m-itemdocked" /><code>{"protected override void ItemDocked()"}</code> |
| <Link id="m-itemundocked" /><code>{"protected override void ItemUndocked()"}</code> |
| <Link id="m-lastundocked" /><code>{"protected override void LastUndocked()"}</code> |
| <Link id="m-playeffect" /><code>{"protected virtual void PlayEffect("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" vfx)"}</code> |
