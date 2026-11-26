---
title: "TeleportEffectArgument"
description: "What the server sends to the chunk when a player uses a cave teleporter, so clients play the depart or arrive effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportEffectArgument

A **struct** in `Root.Township`, `Alta.Caves`.

What the server sends to the chunk when a player uses a cave teleporter, so clients play the depart or arrive effect.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TeleportEffectArgument(bool isDeparture, int layer, Vector3 position, uint teleportingPlayer)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isdeparture" /><code>{"bool isDeparture"}</code> | True for the effect where the player leaves, false for where they arrive. |
| <Link id="m-layer" /><code>{"int layer"}</code> | Destination layer; 0 is the surface, anything else a cave. Picks the cave or surface effect. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Where to play the effect: the player's feet on departure, the destination on arrival. |
| <Link id="m-teleportingplayer" /><code>{"uint teleportingPlayer"}</code> | Id of the player being teleported. |

## Used in

Members of other types that take, return or hold a `TeleportEffectArgument`:

[`CaveTeleporterManager.DelayTeleport`](/game-api/types/alta-world-generation/caveteleportermanager#m-delayteleport), [`CaveTeleporterManager.syncEffect`](/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect), [`CaveTeleporterManager.SyncEffect`](/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect-2), [`CaveTeleportSettings.PlayEffects`](/game-api/types/alta-world-generation/caveteleportsettings#m-playeffects).
