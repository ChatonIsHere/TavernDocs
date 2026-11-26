---
title: "TeleportDefinitionNetworkMessenger"
description: "Network entity behaviour that syncs teleport start and end effects for its TeleportDefinitions, so other players see the origin and destination visuals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportDefinitionNetworkMessenger

A **class** in `Root.Township`, the global namespace.

Network entity behaviour that syncs teleport start and end effects for its `TeleportDefinition`s, so other players see the origin and destination visuals.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`TeleportDefinitionPositionPair`](/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportDefinitionNetworkMessenger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncteleportfrom" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair">{"TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"}</Link>{"> syncTeleportFrom"}</code> | <span className="api-desc">Sync message for origin effects.</span> |
| <Link id="m-syncteleportto" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair">{"TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"}</Link>{"> syncTeleportTo"}</code> | <span className="api-desc">Sync message for destination effects.</span> |
| <Link id="m-teleportdefinitions" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/teleportdefinition">{"TeleportDefinition"}</Link>{"[] teleportDefinitions"}</code> | <span className="api-desc">Teleport definitions this messenger serves; messages refer to them by index.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Links each teleport definition to this messenger and sets up the two sync messages.</span> |
| <Link id="m-teleportfrom" /><code>{"void TeleportFrom("}<Link to="/mod/game-api/types/global-t-x/teleportdefinition">{"TeleportDefinition"}</Link>{" teleportDefinition, Vector3 startPosition)"}</code> | <span className="api-desc">Sends the origin effect for a teleport definition at a position to the chunks.</span> |
| <Link id="m-teleportto" /><code>{"void TeleportTo("}<Link to="/mod/game-api/types/global-t-x/teleportdefinition">{"TeleportDefinition"}</Link>{" teleportDefinition, Vector3 endPosition)"}</code> | <span className="api-desc">Sends the destination effect for a teleport definition at a position to the chunks.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncteleportfrom-2" /><code>{"private void SyncTeleportFrom("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair">{"TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"}</Link>{" pair)"}</code> | <span className="api-desc">Reads or writes a definition index and position; remote clients play that definition's origin effect there.</span> |
| <Link id="m-syncteleportto-2" /><code>{"private void SyncTeleportTo("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair">{"TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"}</Link>{" pair)"}</code> | <span className="api-desc">Reads or writes a definition index and position; remote clients play that definition's destination effect there.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TeleportDefinitionNetworkMessenger`:

<div className="api-used-in">

[`TeleportDefinition.SetupDefinition`](/mod/game-api/types/global-t-x/teleportdefinition#m-setupdefinition), [`TeleportDefinition.teleportMessenger`](/mod/game-api/types/global-t-x/teleportdefinition#m-teleportmessenger).

</div>
