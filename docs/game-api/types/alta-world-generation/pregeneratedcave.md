---
title: "PregeneratedCave"
description: "Fixed layers in an asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PregeneratedCave

A **class** in `Root.Township`, `Alta.Caves`.

Fixed layers in an asset.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`Layer`](/game-api/types/alta-world-generation/pregeneratedcave-layer)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PregeneratedCave()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baker" /><code>{"private GameObject baker"}</code> |  |
| <Link id="m-layers" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/pregeneratedcave-layer">{"PregeneratedCave.Layer"}</Link>{"> layers"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-seed" /><code>{"private int seed"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-seed-2" /><code>{"int Seed { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(int index, "}<Link to="/game-api/types/alta-world-generation/pregeneratedcave-layer">{"PregeneratedCave.Layer"}</Link>{" layer)"}</code> |  |
| <Link id="m-get" /><code><Link to="/game-api/types/alta-world-generation/pregeneratedcave-layer">{"PregeneratedCave.Layer"}</Link>{" Get(int index)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PregeneratedCave`:

[`CaveLayerManager.pregenerated`](/game-api/types/alta-world-generation/cavelayermanager#m-pregenerated), [`CaveLayerManager.Pregenerated`](/game-api/types/alta-world-generation/cavelayermanager#m-pregenerated-2).
