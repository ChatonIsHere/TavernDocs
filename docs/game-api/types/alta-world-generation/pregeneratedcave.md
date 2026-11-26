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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`Layer`](/game-api/types/alta-world-generation/pregeneratedcave-layer)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PregeneratedCave()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baker" /><code>{"private GameObject baker"}</code> | Serialized object, probably used when baking. Not read in this class. |
| <Link id="m-layers" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/pregeneratedcave-layer">{"PregeneratedCave.Layer"}</Link>{"> layers"}</code> | Private: the baked layers, each holding one mesh. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Private: logger. Not used in this build. |
| <Link id="m-seed" /><code>{"private int seed"}</code> | Backing field for `Seed`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-seed-2" /><code>{"int Seed { get; set; }"}</code> | The seed the cave was generated from. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(int index, "}<Link to="/game-api/types/alta-world-generation/pregeneratedcave-layer">{"PregeneratedCave.Layer"}</Link>{" layer)"}</code> | Stores a layer at an index, padding the list with nulls if needed. |
| <Link id="m-get" /><code><Link to="/game-api/types/alta-world-generation/pregeneratedcave-layer">{"PregeneratedCave.Layer"}</Link>{" Get(int index)"}</code> | Returns the layer at an index, or null past the end. |

## Used in

Members of other types that take, return or hold a `PregeneratedCave`:

[`CaveLayerManager.pregenerated`](/game-api/types/alta-world-generation/cavelayermanager#m-pregenerated), [`CaveLayerManager.Pregenerated`](/game-api/types/alta-world-generation/cavelayermanager#m-pregenerated-2).
