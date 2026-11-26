---
title: "TimeManager"
description: "Saves and loads the world's time of day and applies the server's time speed setting to Timeline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimeManager

A **class** in `Root.Township`, no namespace.

Saves and loads the world's time of day and applies the server's time speed setting to `Timeline`. One per scene, reached through the static `instance`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<TimeManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TimeManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TimeManagerSaveData`](/game-api/types/global-t-x/timemanagersavedata)
- **Documented in** [Time and environment](/game-api/world/time-and-environment#timemanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimeManager()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-t-x/timemanager">{"TimeManager"}</Link>{" instance"}</code> | The active time manager. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: applies the time speed setting now and whenever the server config changes (skipped for entity identifier 1 or lower). |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `instance`, or destroys itself if another exists. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Server: stops listening to server config changes. |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings(Settings settings)"}</code> | Server: sets `Timeline.Instance.TimeSpeed` from the server's `TimeSpeedMultiplier`. |

</details>
