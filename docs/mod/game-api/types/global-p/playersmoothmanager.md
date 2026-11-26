---
title: "PlayerSmoothManager"
description: "Network entity that syncs the server's player smoothing level to clients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSmoothManager

A **class** in `Root.Township`, the global namespace.

Network entity that syncs the server's player smoothing level to clients. `PlayerLocomotionController` listens to `SettingChanged`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerSmoothManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-syncsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSettings"}</code> | <span className="api-desc">Method sync used to send the level.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settingindex" /><code>{"static int SettingIndex { get; private set; }"}</code> | <span className="api-desc">Current player smoothing level (static, 0 by default).</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-settingchanged" /><code>{"static event Action<int> SettingChanged"}</code> | <span className="api-desc">Static event raised with the new smoothing level on either side.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the settings sync message.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: reads the smoothing level from server settings and watches for changes.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the level to a joining player if it isn't 0.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Server: stops watching server settings.</span> |
| <Link id="m-settingsupdated" /><code>{"private void SettingsUpdated(Settings settings)"}</code> | <span className="api-desc">Server: on a settings change, updates the level and sends it to all chunks if it changed.</span> |
| <Link id="m-syncsettings-2" /><code>{"private void SyncSettings("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the level. On clients, stores it and raises `SettingChanged`.</span> |

</details>
