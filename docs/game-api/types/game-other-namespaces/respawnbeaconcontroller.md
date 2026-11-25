---
title: "RespawnBeaconController"
description: "class RespawnBeaconController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnBeaconController

A **class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IRespawnBeaconController`](/game-api/types/game-other-namespaces/irespawnbeaconcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnBeaconController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-respawnbeaconviews" /><code>{"private Dictionary<Guid, "}<Link to="/game-api/types/game-other-namespaces/irespawnbeaconview">{"IRespawnBeaconView"}</Link>{"> respawnBeaconViews"}</code> |  |
| <Link id="m-respawnsystem" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" respawnSystem"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onmodelchanged" /><code>{"void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> |  |
| <Link id="m-inject" /><code>{"private void Inject("}<Link to="/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" respawnSystem)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-spawnallbeaconviews" /><code>{"private void SpawnAllBeaconViews("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> |  |
| <Link id="m-spawnbeaconviewforshrine" /><code>{"private void SpawnBeaconViewForShrine(Guid shrineId)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
