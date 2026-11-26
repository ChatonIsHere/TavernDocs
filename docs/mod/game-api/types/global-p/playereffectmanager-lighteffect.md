---
title: "PlayerEffectManager.LightEffect"
description: "Wraps the pooled light shown while a player's body is burning."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.LightEffect

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Wraps the pooled light shown while a player's body is burning.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/mod/game-api/types/global-p/playereffectmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightEffect("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Creates a `PlayerEffectManager.LightEffect` from `pooledObject`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-light" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light"}</code> | The platform light on the pooled object. |
| <Link id="m-pooledobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject"}</code> | The pooled object holding the light. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-intensity" /><code>{"float Intensity { get; set; }"}</code> | The light's intensity. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"void Release()"}</code> | Returns the light to its pool. |

## Used in

Members of other types that take, return or hold a `LightEffect`:

[`PlayerEffectManager.lightEffect`](/mod/game-api/types/global-p/playereffectmanager#m-lighteffect).
