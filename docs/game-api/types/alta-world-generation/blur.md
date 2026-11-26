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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`BlurInstance`](/game-api/types/alta-world-generation/blurinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Blur()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | Backing field for `YIndex`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-yindex-2" /><code>{"int YIndex { get; }"}</code> | Which Y slice of the layer is blurred. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `BlurInstance` that does the work. |

## Used in

Members of other types that take, return or hold a `Blur`:

[`BlurInstance.BlurInstance`](/game-api/types/alta-world-generation/blurinstance#m-ctor).
