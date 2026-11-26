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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledMenuSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-menugamesetting" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/menugamesetting">{"MenuGameSetting"}</Link>{" menuGameSetting"}</code> | <span className="api-desc">The setting control.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Optional pickup on the control, dropped on release.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Force drops the pickup and returns the control to its pool.</span> |
| <Link id="m-setsettings" /><code>{"void SetSettings("}<Link to="/mod/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{" setting)"}</code> | <span className="api-desc">Points the control at a setting.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Marks the pickup's entity as initialised, so it works without the network.</span> |

</details>
