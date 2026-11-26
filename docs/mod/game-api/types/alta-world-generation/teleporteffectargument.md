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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportEffectArgument(bool isDeparture, int layer, Vector3 position, uint teleportingPlayer)"}</code> | <span className="api-desc">Creates a `TeleportEffectArgument` from `isDeparture`, `layer`, `position` and `teleportingPlayer`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isdeparture" /><code>{"bool isDeparture"}</code> | <span className="api-desc">True for the effect where the player leaves, false for where they arrive.</span> |
| <Link id="m-layer" /><code>{"int layer"}</code> | <span className="api-desc">Destination layer; 0 is the surface, anything else a cave. Picks the cave or surface effect.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Where to play the effect: the player's feet on departure, the destination on arrival.</span> |
| <Link id="m-teleportingplayer" /><code>{"uint teleportingPlayer"}</code> | <span className="api-desc">Id of the player being teleported.</span> |

## Used in

Members of other types that take, return or hold a `TeleportEffectArgument`:

<div className="api-used-in">

[`CaveTeleporterManager.DelayTeleport`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-delayteleport), [`CaveTeleporterManager.syncEffect`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect), [`CaveTeleporterManager.SyncEffect`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect-2), [`CaveTeleportSettings.PlayEffects`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-playeffects).

</div>
