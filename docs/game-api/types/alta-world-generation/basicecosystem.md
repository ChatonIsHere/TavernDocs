---
title: "BasicEcosystem"
description: "class BasicEcosystem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicEcosystem

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `RequireComponent`
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicEcosystem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-populations" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{", "}<Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{"> populations"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population)"}</code> |  |
| <Link id="m-get" /><code><Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Get("}<Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" setup)"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove("}<Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population)"}</code> |  |

## Used in

Members of other types that take, return or hold a `BasicEcosystem`:

[`ChunkEnvironment.Ecosystem`](/game-api/types/alta-world/chunkenvironment#m-ecosystem), [`ChunkEnvironment.Initialize`](/game-api/types/alta-world/chunkenvironment#m-initialize), [`LocationChunk.ecosystem`](/game-api/types/alta-world/locationchunk#m-ecosystem).
