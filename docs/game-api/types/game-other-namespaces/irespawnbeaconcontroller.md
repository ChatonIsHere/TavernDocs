---
title: "IRespawnBeaconController"
description: "Something that updates respawn beacons when the respawn system model changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnBeaconController

An **interface** in `Root.Township`, `ATT.Respawn`.

Something that updates respawn beacons when the respawn system model changes. Implemented by `RespawnBeaconController`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`RespawnBeaconController`](/game-api/types/game-other-namespaces/respawnbeaconcontroller)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onmodelchanged" /><code>{"void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | Called with the new respawn system model. |
