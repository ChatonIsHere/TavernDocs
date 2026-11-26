---
title: "PooledMenuSettings"
description: "Pooled settings control on a quick access settings board, wrapping a MenuGameSetting and an optional pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledMenuSettings

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Pooled settings control on a quick access settings board, wrapping a `MenuGameSetting` and an optional pickup.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PooledMenuSettings()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-menugamesetting" /><code>{"private "}<Link to="/game-api/types/alta-menus/menugamesetting">{"MenuGameSetting"}</Link>{" menuGameSetting"}</code> | The setting control. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Optional pickup on the control, dropped on release. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Force drops the pickup and returns the control to its pool. |
| <Link id="m-setsettings" /><code>{"void SetSettings("}<Link to="/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{" setting)"}</code> | Points the control at a setting. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Marks the pickup's entity as initialised, so it works without the network. |

</details>
