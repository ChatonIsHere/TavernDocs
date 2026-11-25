---
title: "PlayerEffectController"
description: "class PlayerEffectController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectController

A **class** in `Root.Township`, `Alta.Alchemy`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`EffectHandler`](/game-api/types/alta-stats-effects/effecthandler)
- **Nested types** [`PlayerEffectTeleportInformation`](/game-api/types/alta-stats-effects/playereffectcontroller-playereffectteleportinformation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerEffectController()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" player"}</code> |
| <Link id="m-remoteteleporteffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-stats-effects/playereffectcontroller-playereffectteleportinformation">{"PlayerEffectController.PlayerEffectTeleportInformation"}</Link>{"> remoteTeleportEffect"}</code> |
| <Link id="m-teleporteffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleportEffect"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-player-2" /><code><Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Player { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-playerrepositioned" /><code>{"event Action<"}<Link to="/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{"> PlayerRepositioned"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-teleport" /><code>{"override void Teleport(Vector3 position, float strength, "}<Link to="/game-api/types/alta-stats-effects/effecthandler-teleporttype">{"EffectHandler.TeleportType"}</Link>{" teleportType = 0)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-networkteleport" /><code>{"private void NetworkTeleport("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-stats-effects/playereffectcontroller-playereffectteleportinformation">{"PlayerEffectController.PlayerEffectTeleportInformation"}</Link>{" teleportInformation)"}</code> |

</details>
