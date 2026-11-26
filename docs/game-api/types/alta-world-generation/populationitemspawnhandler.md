---
title: "PopulationItemSpawnHandler"
description: "Handler for PopulationSample.NewEntitySpawned: called with the population and the entity it just spawned."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationItemSpawnHandler

A **delegate** in `Root.Township`, `Alta.Populations`.

Handler for `PopulationSample.NewEntitySpawned`: called with the population and the entity it just spawned.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MulticastDelegate`
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationItemSpawnHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" population, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newItem, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" population, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newItem)"}</code> |

## Used in

Members of other types that take, return or hold a `PopulationItemSpawnHandler`:

[`PopulationSample.NewEntitySpawned`](/game-api/types/alta-world-generation/populationsample#m-newentityspawned).
