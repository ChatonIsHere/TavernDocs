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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`RespawnBeaconController`](/mod/game-api/types/game-other-namespaces/respawnbeaconcontroller)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onmodelchanged" /><code>{"void OnModelChanged("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | <span className="api-desc">Called with the new respawn system model.</span> |
