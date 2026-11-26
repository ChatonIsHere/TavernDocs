---
title: "TeleportDefinition"
description: "Asset that teleports a player with origin and destination effects, used by climbing tower teleporter nodes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportDefinition

A **class** in `Root.Township`, no namespace.

Asset that teleports a player with origin and destination effects, used by climbing tower teleporter nodes. Effects are sent to other clients through a `TeleportDefinitionNetworkMessenger`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaybetweenoriginanddestinationvfx" /><code>{"private float delayBetweenOriginAndDestinationVfx"}</code> | Seconds between the origin effect and moving the player. |
| <Link id="m-teleportdestinationvfx" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleportDestinationVfx"}</code> | Pooled effect played where the player arrives. Optional. |
| <Link id="m-teleportmessenger" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportdefinitionnetworkmessenger">{"TeleportDefinitionNetworkMessenger"}</Link>{" teleportMessenger"}</code> | Network messenger set by `SetupDefinition`, used to send the effects to other players. Null until set. |
| <Link id="m-teleportoriginvfx" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleportOriginVfx"}</code> | Pooled effect played where the player leaves from. Optional. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playdestinationvfx" /><code>{"void PlayDestinationVfx(Vector3 position)"}</code> | Spawns the destination effect at a position. Does nothing on a headless server. |
| <Link id="m-playoriginvfx" /><code>{"void PlayOriginVfx(Vector3 position)"}</code> | Spawns the origin effect at a position. Does nothing on a headless server. |
| <Link id="m-setupdefinition" /><code>{"void SetupDefinition("}<Link to="/game-api/types/global-t-x/teleportdefinitionnetworkmessenger">{"TeleportDefinitionNetworkMessenger"}</Link>{" newTeleportMessenger)"}</code> | Stores the network messenger. Called by `TeleportDefinitionNetworkMessenger.Initialize`. |
| <Link id="m-teleportplayerandrotateto" /><code>{"async void TeleportPlayerAndRotateTo("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | Plays the origin effect, waits the set delay, moves the player and faces them, then plays the destination effect. Effects are synced to chunks. |
| <Link id="m-teleportplayerto" /><code>{"async void TeleportPlayerTo("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 destinationPosition)"}</code> | Same as `TeleportPlayerAndRotateTo` with the player facing world forward. |

## Used in

Members of other types that take, return or hold a `TeleportDefinition`:

[`ClimbingTowerTeleporterNode.teleportDefinition`](/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-teleportdefinition), [`TeleportDefinitionNetworkMessenger.teleportDefinitions`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-teleportdefinitions), [`TeleportDefinitionNetworkMessenger.TeleportFrom`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-teleportfrom), [`TeleportDefinitionNetworkMessenger.TeleportTo`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-teleportto).
