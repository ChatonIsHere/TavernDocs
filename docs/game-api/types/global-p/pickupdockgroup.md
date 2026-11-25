---
title: "PickupDockGroup"
description: "A group of pickup docks on one object, so they can be handled together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockGroup

A **class** in `Root.Township`, no namespace.

A group of pickup docks on one object, so they can be handled together.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ComponentGroup<PickupDock>`](/game-api/types/global-c-d/componentgroup-t)
- **Derived types** [`CharacterDockManager`](/game-api/types/alta-items/characterdockmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockGroup()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroyallcontent" /><code>{"void DestroyAllContent()"}</code> | Destroys everything docked in every dock of the group. |

## Used in

Members of other types that take, return or hold a `PickupDockGroup`:

[`PlayerCharacter.backDocks`](/game-api/types/alta-player/playercharacter#m-backdocks), [`PlayerCharacter.BackDocks`](/game-api/types/alta-player/playercharacter#m-backdocks-2), [`PlayerCharacter.beltDocks`](/game-api/types/alta-player/playercharacter#m-beltdocks), [`PlayerCharacter.BeltDocks`](/game-api/types/alta-player/playercharacter#m-beltdocks-2), [`CraftedDocks.docks`](/game-api/types/alta-items/crafteddocks#m-docks), [`LootModule.group`](/game-api/types/alta-world-generation/lootmodule#m-group), [`LootModule.Group`](/game-api/types/alta-world-generation/lootmodule#m-group-2), [`PresetLootModule.group`](/game-api/types/alta-world-generation/presetlootmodule#m-group), [`PresetLootModule.Group`](/game-api/types/alta-world-generation/presetlootmodule#m-group-2), [`PresetLootSet.Spawn`](/game-api/types/alta-world-generation/presetlootset#m-spawn), [`PositionRestrictor.ClientDeregister`](/game-api/types/alta-items/positionrestrictor#m-clientderegister-2), [`PositionRestrictor.ClientRegister`](/game-api/types/alta-items/positionrestrictor#m-clientregister-2), [`PositionRestrictor.Deregister`](/game-api/types/alta-items/positionrestrictor#m-deregister), [`PositionRestrictor.Register`](/game-api/types/alta-items/positionrestrictor#m-register).
