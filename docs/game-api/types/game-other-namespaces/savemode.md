---
title: "SaveMode"
description: "How a spawned instance is saved when its chunk saves or unloads: Base (on its own), Child (inside its chunking parent), Ignore (not saved), Player or..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SaveMode

An **enum** in `Root.Township`, `ATT.Saving`.

How a spawned instance is saved when its chunk saves or unloads: `Base` (on its own), `Child` (inside its chunking parent), `Ignore` (not saved), `Player` or `Creature` (destroyed on unload, never saved). See the Prefabs guide.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Documented in** [Prefabs and prefab hashes](/game-api/world/prefabs#savemode)

## Values

| Member |
| --- |
| <Link id="m-base" /><code>{"Base = 0"}</code> |
| <Link id="m-child" /><code>{"Child = 1"}</code> |
| <Link id="m-creature" /><code>{"Creature = 4"}</code> |
| <Link id="m-ignore" /><code>{"Ignore = 2"}</code> |
| <Link id="m-player" /><code>{"Player = 3"}</code> |

## Used in

Members of other types that take, return or hold a `SaveMode`:

[`PlayerCharacter.SaveMode`](/game-api/types/alta-player/playercharacter#m-savemode), [`NetworkPrefab.SaveMode`](/game-api/types/alta-networking/networkprefab#m-savemode), [`Interactable.BaseSaveMode`](/game-api/types/global-i-l/interactable#m-basesavemode), [`PlayerController.SaveMode`](/game-api/types/global-p/playercontroller#m-savemode), [`PositionedNetworkPrefab.saveMode`](/game-api/types/global-p/positionednetworkprefab#m-savemode), [`SerializedSavedDynamicObject.Load`](/game-api/types/global-s/serializedsaveddynamicobject#m-load), [`SerializedSavedDynamicObject.LoadInto`](/game-api/types/global-s/serializedsaveddynamicobject#m-loadinto), [`SerializedSavedDynamicObject.SpawnFromString`](/game-api/types/global-s/serializedsaveddynamicobject#m-spawnfromstring), [`SetPiece.saveMode`](/game-api/types/global-s/setpiece#m-savemode), [`SpawnHelper.Spawn`](/game-api/types/global-s/spawnhelper#m-spawn).
