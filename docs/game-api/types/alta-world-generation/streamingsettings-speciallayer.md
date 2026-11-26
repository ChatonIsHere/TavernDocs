---
title: "StreamingSettings.SpecialLayer"
description: "A cave layer that uses its own streamer prefab instead of the default cave streamer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamingSettings.SpecialLayer

A **class** in `Root.Township`, `Alta.Caves`.

A cave layer that uses its own streamer prefab instead of the default cave streamer.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`StreamingSettings`](/game-api/types/alta-world-generation/streamingsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpecialLayer()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-layer" /><code>{"int layer"}</code> | Index of the cave layer. |
| <Link id="m-prefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Prefab spawned for that layer. |

## Used in

Members of other types that take, return or hold a `SpecialLayer`:

[`StreamingSettings.specialLayers`](/game-api/types/alta-world-generation/streamingsettings#m-speciallayers), [`StreamingSettings.SpecialLayers`](/game-api/types/alta-world-generation/streamingsettings#m-speciallayers-2).
