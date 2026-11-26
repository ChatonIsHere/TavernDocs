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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`StreamingSettings`](/mod/game-api/types/alta-world-generation/streamingsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecialLayer()"}</code> | <span className="api-desc">Creates a `StreamingSettings.SpecialLayer` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-layer" /><code>{"int layer"}</code> | <span className="api-desc">Index of the cave layer.</span> |
| <Link id="m-prefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Prefab spawned for that layer.</span> |

## Used in

Members of other types that take, return or hold a `SpecialLayer`:

<div className="api-used-in">

[`StreamingSettings.specialLayers`](/mod/game-api/types/alta-world-generation/streamingsettings#m-speciallayers), [`StreamingSettings.SpecialLayers`](/mod/game-api/types/alta-world-generation/streamingsettings#m-speciallayers-2).

</div>
