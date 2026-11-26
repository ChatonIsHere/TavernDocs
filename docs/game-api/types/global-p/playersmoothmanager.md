---
title: "PlayerSmoothManager"
description: "Network entity that syncs the server's player smoothing level to clients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSmoothManager

A **class** in `Root.Township`, no namespace.

Network entity that syncs the server's player smoothing level to clients. `PlayerLocomotionController` listens to `SettingChanged`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerSmoothManager()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-syncsettings" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSettings"}</code> | Method sync used to send the level. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingindex" /><code>{"static int SettingIndex { get; private set; }"}</code> | Current player smoothing level (static, 0 by default). |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-settingchanged" /><code>{"static event Action<int> SettingChanged"}</code> | Static event raised with the new smoothing level on either side. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the settings sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: reads the smoothing level from server settings and watches for changes. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the level to a joining player if it isn't 0. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Server: stops watching server settings. |
| <Link id="m-settingsupdated" /><code>{"private void SettingsUpdated(Settings settings)"}</code> | Server: on a settings change, updates the level and sends it to all chunks if it changed. |
| <Link id="m-syncsettings-2" /><code>{"private void SyncSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the level. On clients, stores it and raises `SettingChanged`. |

</details>
