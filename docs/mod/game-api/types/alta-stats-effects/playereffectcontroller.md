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
| <Link id="m-ctor" /><code>{"PlayerEffectController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> | Backing field for `Player`. |
| <Link id="m-remoteteleporteffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-stats-effects/playereffectcontroller-playereffectteleportinformation">{"PlayerEffectController.PlayerEffectTeleportInformation"}</Link>{"> remoteTeleportEffect"}</code> | Method sync for teleport messages (`EntityMessageType.TeleportRequest`). |
| <Link id="m-teleporteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleportEffect"}</code> | Pooled visual effect spawned where a teleport happens. Not spawned on headless builds. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code><Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Player { get; }"}</code> | The `PlayerCharacter` this controller belongs to. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-playerrepositioned" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{"> PlayerRepositioned"}</code> | Raised on the local player after the server teleports them, with the teleport type. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-teleport" /><code>{"override void Teleport(Vector3 position, float strength, "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType = 0)"}</code> | Local player: teleports to the position (with a cooldown) and tells others. Server on a remote player: tells that player to teleport. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `PlayerCharacter` on the entity and waits for entity initialization. |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Creates the method sync used to send teleport messages once the entity is set up. |
| <Link id="m-networkteleport" /><code>{"private void NetworkTeleport("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-stats-effects/playereffectcontroller-playereffectteleportinformation">{"PlayerEffectController.PlayerEffectTeleportInformation"}</Link>{" teleportInformation)"}</code> | Handles a teleport message: moves the local player if told to, spawns the visual effect, and on the server relays the owner's message to nearby chunks. |

</details>
