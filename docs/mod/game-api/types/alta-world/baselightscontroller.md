---
title: "BaseLightsController"
description: "Base for the platform light controllers (PC and Android) that manage the active PlatformLights and tick while any are active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseLightsController

An **abstract class** in `Root.Township`, `Alta.Lighting`.

Base for the platform light controllers (PC and Android) that manage the active `PlatformLight`s and tick while any are active.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Derived types** [`AndroidLightsController`](/mod/game-api/types/alta-world/androidlightscontroller), [`PCLightsController`](/mod/game-api/types/alta-world/pclightscontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BaseLightsController()"}</code> | <span className="api-desc">Creates a `BaseLightsController` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activelights" /><code>{"protected HashSet<"}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{"> activeLights"}</code> | <span className="api-desc">Backing set of active lights.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Registered update method; added when the first light is added and removed when the last one goes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activelights-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{"> ActiveLights { get; }"}</code> | <span className="api-desc">The lights currently registered.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlight" /><code>{"virtual void AddLight("}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> | <span className="api-desc">Registers a light. The first one starts the update and calls `OnEnabled`.</span> |
| <Link id="m-removelight" /><code>{"virtual void RemoveLight("}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> | <span className="api-desc">Unregisters a light. When none are left it stops the update and calls `OnDisabled`.</span> |
| <Link id="m-ondisabled" /><code>{"protected virtual void OnDisabled()"}</code> | <span className="api-desc">Called when the last light is removed.</span> |
| <Link id="m-onenabled" /><code>{"protected virtual void OnEnabled()"}</code> | <span className="api-desc">Called when the first light is added.</span> |
| <Link id="m-update-2" /><code>{"protected abstract void Update()"}</code> | <span className="api-desc">Called each frame while there are active lights.</span> |

## Used in

Members of other types that take, return or hold a `BaseLightsController`:

<div className="api-used-in">

[`PlatformLight.lightsController`](/mod/game-api/types/alta-world/platformlight#m-lightscontroller), [`PlatformLight.LightsController`](/mod/game-api/types/alta-world/platformlight#m-lightscontroller-2).

</div>
