---
title: "BaseLightsController"
description: "abstract class BaseLightsController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseLightsController

An **abstract class** in `Root.Township`, `Alta.Lighting`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`AndroidLightsController`](/game-api/types/alta-world/androidlightscontroller), [`PCLightsController`](/game-api/types/alta-world/pclightscontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BaseLightsController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activelights" /><code>{"protected HashSet<"}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{"> activeLights"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activelights-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{"> ActiveLights { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlight" /><code>{"virtual void AddLight("}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> |  |
| <Link id="m-removelight" /><code>{"virtual void RemoveLight("}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" light)"}</code> |  |
| <Link id="m-ondisabled" /><code>{"protected virtual void OnDisabled()"}</code> |  |
| <Link id="m-onenabled" /><code>{"protected virtual void OnEnabled()"}</code> |  |
| <Link id="m-update-2" /><code>{"protected abstract void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BaseLightsController`:

[`PlatformLight.lightsController`](/game-api/types/alta-world/platformlight#m-lightscontroller), [`PlatformLight.LightsController`](/game-api/types/alta-world/platformlight#m-lightscontroller-2).
