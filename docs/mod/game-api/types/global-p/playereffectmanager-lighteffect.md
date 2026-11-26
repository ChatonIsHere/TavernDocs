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
| <Link id="m-ctor" /><code>{"LightEffect("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Creates a `PlayerEffectManager.LightEffect` from `pooledObject`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-light" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light"}</code> | <span className="api-desc">The platform light on the pooled object.</span> |
| <Link id="m-pooledobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject"}</code> | <span className="api-desc">The pooled object holding the light.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-intensity" /><code>{"float Intensity { get; set; }"}</code> | <span className="api-desc">The light's intensity.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"void Release()"}</code> | <span className="api-desc">Returns the light to its pool.</span> |

## Used in

Members of other types that take, return or hold a `LightEffect`:

<div className="api-used-in">

[`PlayerEffectManager.lightEffect`](/mod/game-api/types/global-p/playereffectmanager#m-lighteffect).

</div>
