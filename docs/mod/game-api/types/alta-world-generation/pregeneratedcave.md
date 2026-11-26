---
title: "PregeneratedCave"
description: "An asset holding baked cave meshes, one per layer, with the seed they were made from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PregeneratedCave

A **class** in `Root.Township`, `Alta.Caves`.

An asset holding baked cave meshes, one per layer, with the seed they were made from. `CaveLayerManager` has one as `Pregenerated`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`Layer`](/mod/game-api/types/alta-world-generation/pregeneratedcave-layer)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PregeneratedCave()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baker" /><code>{"private GameObject baker"}</code> | <span className="api-desc">Serialized object, probably used when baking. Not read in this class.</span> |
| <Link id="m-layers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/pregeneratedcave-layer">{"PregeneratedCave.Layer"}</Link>{"> layers"}</code> | <span className="api-desc">Private: the baked layers, each holding one mesh.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Private: logger. Not used in this build.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Backing field for `Seed`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-seed-2" /><code>{"int Seed { get; set; }"}</code> | <span className="api-desc">The seed the cave was generated from.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(int index, "}<Link to="/mod/game-api/types/alta-world-generation/pregeneratedcave-layer">{"PregeneratedCave.Layer"}</Link>{" layer)"}</code> | <span className="api-desc">Stores a layer at an index, padding the list with nulls if needed.</span> |
| <Link id="m-get" /><code><Link to="/mod/game-api/types/alta-world-generation/pregeneratedcave-layer">{"PregeneratedCave.Layer"}</Link>{" Get(int index)"}</code> | <span className="api-desc">Returns the layer at an index, or null past the end.</span> |

## Used in

Members of other types that take, return or hold a `PregeneratedCave`:

<div className="api-used-in">

[`CaveLayerManager.pregenerated`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-pregenerated), [`CaveLayerManager.Pregenerated`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-pregenerated-2).

</div>
