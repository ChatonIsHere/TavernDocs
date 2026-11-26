---
title: "IRespawnBeaconView"
description: "A view that shows a respawn shrine's state and is updated when the shrine model changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnBeaconView

An **interface** in `Root.Township`, `ATT.Respawn`.

A view that shows a respawn shrine's state and is updated when the shrine model changes.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`RespawnBeaconView`](/game-api/types/game-other-namespaces/respawnbeaconview)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-init" /><code>{"void Init("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" settings)"}</code> | Gives the view the respawn system settings. |
| <Link id="m-onmodelchanged" /><code>{"void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnshrinemodel">{"IRespawnShrineModel"}</Link>{" model)"}</code> | Called with the shrine's model when it changes. |

## Used in

Members of other types that take, return or hold a `IRespawnBeaconView`:

[`RespawnBeaconController.respawnBeaconViews`](/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-respawnbeaconviews).
