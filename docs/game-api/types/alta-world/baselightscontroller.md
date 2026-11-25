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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`AndroidLightsController`](/game-api/types/alta-world/androidlightscontroller), [`PCLightsController`](/game-api/types/alta-world/pclightscontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected BaseLightsController()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activelights" /><code>{"protected HashSet<"}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{"> activeLights"}</code> | Backing set of active lights. |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activelights-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{"> ActiveLights { get; }"}</code> | The lights currently registered. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlight" /><code>{"virtual void AddLight("}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> | Registers a light. The first one starts the update and calls `OnEnabled`. |
| <Link id="m-removelight" /><code>{"virtual void RemoveLight("}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> | Unregisters a light. When none are left it stops the update and calls `OnDisabled`. |
| <Link id="m-ondisabled" /><code>{"protected virtual void OnDisabled()"}</code> | Called when the last light is removed. |
| <Link id="m-onenabled" /><code>{"protected virtual void OnEnabled()"}</code> | Called when the first light is added. |
| <Link id="m-update-2" /><code>{"protected abstract void Update()"}</code> | Called each frame while there are active lights. |

## Used in

Members of other types that take, return or hold a `BaseLightsController`:

[`PlatformLight.lightsController`](/game-api/types/alta-world/platformlight#m-lightscontroller), [`PlatformLight.LightsController`](/game-api/types/alta-world/platformlight#m-lightscontroller-2).
