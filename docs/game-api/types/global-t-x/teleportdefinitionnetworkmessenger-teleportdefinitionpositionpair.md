---
title: "TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"
description: "Message data for a teleport effect: which teleport definition and where to play its effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message data for a teleport effect: which teleport definition and where to play its effect. Private to `TeleportDefinitionNetworkMessenger`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TeleportDefinitionNetworkMessenger`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position to play the effect at. |
| <Link id="m-teleportdefinitionindex" /><code>{"int teleportDefinitionIndex"}</code> | Index of the definition in the messenger's `teleportDefinitions` array. |

## Used in

Members of other types that take, return or hold a `TeleportDefinitionPositionPair`:

[`TeleportDefinitionNetworkMessenger.syncTeleportFrom`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-syncteleportfrom), [`TeleportDefinitionNetworkMessenger.SyncTeleportFrom`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-syncteleportfrom-2), [`TeleportDefinitionNetworkMessenger.syncTeleportTo`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-syncteleportto), [`TeleportDefinitionNetworkMessenger.SyncTeleportTo`](/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-syncteleportto-2).
