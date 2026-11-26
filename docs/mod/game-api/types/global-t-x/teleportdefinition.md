---
title: "TeleportDefinition"
description: "Asset that teleports a player with origin and destination effects, used by climbing tower teleporter nodes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportDefinition

A **class** in `Root.Township`, the global namespace.

Asset that teleports a player with origin and destination effects, used by climbing tower teleporter nodes. Effects are sent to other clients through a `TeleportDefinitionNetworkMessenger`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaybetweenoriginanddestinationvfx" /><code>{"private float delayBetweenOriginAndDestinationVfx"}</code> | <span className="api-desc">Seconds between the origin effect and moving the player.</span> |
| <Link id="m-teleportdestinationvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleportDestinationVfx"}</code> | <span className="api-desc">Pooled effect played where the player arrives. Optional.</span> |
| <Link id="m-teleportmessenger" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger">{"TeleportDefinitionNetworkMessenger"}</Link>{" teleportMessenger"}</code> | <span className="api-desc">Network messenger set by `SetupDefinition`, used to send the effects to other players. Null until set.</span> |
| <Link id="m-teleportoriginvfx" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleportOriginVfx"}</code> | <span className="api-desc">Pooled effect played where the player leaves from. Optional.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playdestinationvfx" /><code>{"void PlayDestinationVfx(Vector3 position)"}</code> | <span className="api-desc">Spawns the destination effect at a position. Does nothing on a headless server.</span> |
| <Link id="m-playoriginvfx" /><code>{"void PlayOriginVfx(Vector3 position)"}</code> | <span className="api-desc">Spawns the origin effect at a position. Does nothing on a headless server.</span> |
| <Link id="m-setupdefinition" /><code>{"void SetupDefinition("}<Link to="/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger">{"TeleportDefinitionNetworkMessenger"}</Link>{" newTeleportMessenger)"}</code> | <span className="api-desc">Stores the network messenger. Called by `TeleportDefinitionNetworkMessenger.Initialize`.</span> |
| <Link id="m-teleportplayerandrotateto" /><code>{"async void TeleportPlayerAndRotateTo("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" target)"}</code> | <span className="api-desc">Plays the origin effect, waits the set delay, moves the player and faces them, then plays the destination effect. Effects are synced to chunks.</span> |
| <Link id="m-teleportplayerto" /><code>{"async void TeleportPlayerTo("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 destinationPosition)"}</code> | <span className="api-desc">Same as `TeleportPlayerAndRotateTo` with the player facing world forward.</span> |

## Used in

Members of other types that take, return or hold a `TeleportDefinition`:

<div className="api-used-in">

[`ClimbingTowerTeleporterNode.teleportDefinition`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-teleportdefinition), [`TeleportDefinitionNetworkMessenger.teleportDefinitions`](/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-teleportdefinitions), [`TeleportDefinitionNetworkMessenger.TeleportFrom`](/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-teleportfrom), [`TeleportDefinitionNetworkMessenger.TeleportTo`](/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-teleportto).

</div>
