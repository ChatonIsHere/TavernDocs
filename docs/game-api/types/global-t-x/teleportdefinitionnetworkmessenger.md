---
title: "TeleportDefinitionNetworkMessenger"
description: "class TeleportDefinitionNetworkMessenger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportDefinitionNetworkMessenger

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`TeleportDefinitionPositionPair`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TeleportDefinitionNetworkMessenger()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-syncteleportfrom" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair">{"TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"}</Link>{"> syncTeleportFrom"}</code> |
| <Link id="m-syncteleportto" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair">{"TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"}</Link>{"> syncTeleportTo"}</code> |
| <Link id="m-teleportdefinitions" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportdefinition">{"TeleportDefinition"}</Link>{"[] teleportDefinitions"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-teleportfrom" /><code>{"void TeleportFrom("}<Link to="/game-api/types/global-t-x/teleportdefinition">{"TeleportDefinition"}</Link>{" teleportDefinition, Vector3 startPosition)"}</code> |
| <Link id="m-teleportto" /><code>{"void TeleportTo("}<Link to="/game-api/types/global-t-x/teleportdefinition">{"TeleportDefinition"}</Link>{" teleportDefinition, Vector3 endPosition)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-syncteleportfrom-2" /><code>{"private void SyncTeleportFrom("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair">{"TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"}</Link>{" pair)"}</code> |
| <Link id="m-syncteleportto-2" /><code>{"private void SyncTeleportTo("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-t-x/teleportdefinitionnetworkmessenger-teleportdefinitionpositionpair">{"TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"}</Link>{" pair)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TeleportDefinitionNetworkMessenger`:

[`TeleportDefinition.SetupDefinition`](/game-api/types/global-t-x/teleportdefinition#m-setupdefinition), [`TeleportDefinition.teleportMessenger`](/game-api/types/global-t-x/teleportdefinition#m-teleportmessenger).
