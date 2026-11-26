---
title: "TimeManager"
description: "Saves and loads the world's time of day and applies the server's time speed setting to Timeline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeManager

A **class** in `Root.Township`, the global namespace.

Saves and loads the world's time of day and applies the server's time speed setting to `Timeline`. One per scene, reached through the static `instance`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<TimeManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TimeManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TimeManagerSaveData`](/mod/game-api/types/global-t-x/timemanagersavedata)
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment#timemanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/timemanager">{"TimeManager"}</Link>{" instance"}</code> | <span className="api-desc">The active time manager.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Server: applies the time speed setting now and whenever the server config changes (skipped for entity identifier 1 or lower).</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `instance`, or destroys itself if another exists.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Server: stops listening to server config changes.</span> |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings(Settings settings)"}</code> | <span className="api-desc">Server: sets `Timeline.Instance.TimeSpeed` from the server's `TimeSpeedMultiplier`.</span> |

</details>
