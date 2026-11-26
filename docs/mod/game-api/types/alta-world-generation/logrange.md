---
title: "LogRange"
description: "Debug cave generator part that logs the minimum, maximum and average value of a chunk's layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogRange

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Debug cave generator part that logs the minimum, maximum and average value of a chunk's layer. It doesn't change the layer.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`LogRangeInstance`](/mod/game-api/types/alta-world-generation/lograngeinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogRange()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `LogRangeInstance` that logs the values.</span> |

## Used in

Members of other types that take, return or hold a `LogRange`:

<div className="api-used-in">

[`LogRangeInstance.LogRangeInstance`](/mod/game-api/types/alta-world-generation/lograngeinstance#m-ctor).

</div>
