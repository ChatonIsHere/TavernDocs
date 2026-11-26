---
title: "PlayerEffectController"
description: "The player's EffectHandler."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectController

A **class** in `Root.Township`, `Alta.Alchemy`.

The player's `EffectHandler`. Adds networked teleporting: it moves the local player and shows the teleport effect for everyone nearby. Both sides; a component on the player prefab.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectHandler`](/mod/game-api/types/alta-stats-effects/effecthandler)
- **Nested types** [`PlayerEffectTeleportInformation`](/mod/game-api/types/alta-stats-effects/playereffectcontroller-playereffectteleportinformation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEffectController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | <span className="api-desc">Backing field for `Player`.</span> |
| <Link id="m-remoteteleporteffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-stats-effects/playereffectcontroller-playereffectteleportinformation">{"PlayerEffectController.PlayerEffectTeleportInformation"}</Link>{"> remoteTeleportEffect"}</code> | <span className="api-desc">Method sync for teleport messages (`EntityMessageType.TeleportRequest`).</span> |
| <Link id="m-teleporteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleportEffect"}</code> | <span className="api-desc">Pooled visual effect spawned where a teleport happens. Not spawned on headless builds.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code><Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Player { get; }"}</code> | <span className="api-desc">The `PlayerCharacter` this controller belongs to.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-playerrepositioned" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{"> PlayerRepositioned"}</code> | <span className="api-desc">Raised on the local player after the server teleports them, with the teleport type.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-teleport" /><code>{"override void Teleport(Vector3 position, float strength, "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType = 0)"}</code> | <span className="api-desc">Local player: teleports to the position (with a cooldown) and tells others. Server on a remote player: tells that player to teleport.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the `PlayerCharacter` on the entity and waits for entity initialization.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Creates the method sync used to send teleport messages once the entity is set up.</span> |
| <Link id="m-networkteleport" /><code>{"private void NetworkTeleport("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-stats-effects/playereffectcontroller-playereffectteleportinformation">{"PlayerEffectController.PlayerEffectTeleportInformation"}</Link>{" teleportInformation)"}</code> | <span className="api-desc">Handles a teleport message: moves the local player if told to, spawns the visual effect, and on the server relays the owner's message to nearby chunks.</span> |

</details>
