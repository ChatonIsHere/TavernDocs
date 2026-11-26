---
title: "Blur"
description: "Cave generator part that blurs one Y slice of a layer with a 3 by 3 weighted average."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Blur

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that blurs one Y slice of a layer with a 3 by 3 weighted average. The outer ring of cells is left as it was.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`BlurInstance`](/mod/game-api/types/alta-world-generation/blurinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Blur()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | <span className="api-desc">Backing field for `YIndex`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | <span className="api-desc">Which Y slice of the layer is blurred.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `BlurInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `Blur`:

<div className="api-used-in">

[`BlurInstance.BlurInstance`](/mod/game-api/types/alta-world-generation/blurinstance#m-ctor).

</div>
