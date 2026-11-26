---
title: "PickupDockGroup"
description: "A group of pickup docks on one object, so they can be handled together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockGroup

A **class** in `Root.Township`, the global namespace.

A group of pickup docks on one object, so they can be handled together.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`ComponentGroup<PickupDock>`](/mod/game-api/types/global-c-d/componentgroup-t)
- **Derived types** [`CharacterDockManager`](/mod/game-api/types/alta-items/characterdockmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroyallcontent" /><code>{"void DestroyAllContent()"}</code> | <span className="api-desc">Destroys everything docked in every dock of the group.</span> |

## Used in

Members of other types that take, return or hold a `PickupDockGroup`:

<div className="api-used-in">

[`PlayerCharacter.backDocks`](/mod/game-api/types/alta-player/playercharacter#m-backdocks), [`PlayerCharacter.BackDocks`](/mod/game-api/types/alta-player/playercharacter#m-backdocks-2), [`PlayerCharacter.beltDocks`](/mod/game-api/types/alta-player/playercharacter#m-beltdocks), [`PlayerCharacter.BeltDocks`](/mod/game-api/types/alta-player/playercharacter#m-beltdocks-2), [`CraftedDocks.docks`](/mod/game-api/types/alta-items/crafteddocks#m-docks), [`LootModule.group`](/mod/game-api/types/alta-world-generation/lootmodule#m-group), [`LootModule.Group`](/mod/game-api/types/alta-world-generation/lootmodule#m-group-2), [`PresetLootModule.group`](/mod/game-api/types/alta-world-generation/presetlootmodule#m-group), [`PresetLootModule.Group`](/mod/game-api/types/alta-world-generation/presetlootmodule#m-group-2), [`PresetLootSet.Spawn`](/mod/game-api/types/alta-world-generation/presetlootset#m-spawn), [`PositionRestrictor.ClientDeregister`](/mod/game-api/types/alta-items/positionrestrictor#m-clientderegister-2), [`PositionRestrictor.ClientRegister`](/mod/game-api/types/alta-items/positionrestrictor#m-clientregister-2), [`PositionRestrictor.Deregister`](/mod/game-api/types/alta-items/positionrestrictor#m-deregister), [`PositionRestrictor.Register`](/mod/game-api/types/alta-items/positionrestrictor#m-register).

</div>
