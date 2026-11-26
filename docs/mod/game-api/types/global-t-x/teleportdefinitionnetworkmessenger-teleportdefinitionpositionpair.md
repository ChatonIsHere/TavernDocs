---
title: "TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair"
description: "Message data for a teleport effect: which teleport definition and where to play its effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportDefinitionNetworkMessenger.TeleportDefinitionPositionPair

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message data for a teleport effect: which teleport definition and where to play its effect. Private to `TeleportDefinitionNetworkMessenger`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TeleportDefinitionNetworkMessenger`](/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">World position to play the effect at.</span> |
| <Link id="m-teleportdefinitionindex" /><code>{"int teleportDefinitionIndex"}</code> | <span className="api-desc">Index of the definition in the messenger's `teleportDefinitions` array.</span> |

## Used in

Members of other types that take, return or hold a `TeleportDefinitionPositionPair`:

<div className="api-used-in">

[`TeleportDefinitionNetworkMessenger.syncTeleportFrom`](/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-syncteleportfrom), [`TeleportDefinitionNetworkMessenger.SyncTeleportFrom`](/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-syncteleportfrom-2), [`TeleportDefinitionNetworkMessenger.syncTeleportTo`](/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-syncteleportto), [`TeleportDefinitionNetworkMessenger.SyncTeleportTo`](/mod/game-api/types/global-t-x/teleportdefinitionnetworkmessenger#m-syncteleportto-2).

</div>
