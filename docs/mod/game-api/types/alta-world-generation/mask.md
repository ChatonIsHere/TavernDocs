---
title: "Mask"
description: "Cave generator part that sets cells to a fail value wherever another plugin's layer is on the wrong side of a threshold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Mask

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that sets cells to a fail value wherever another plugin's layer is on the wrong side of a threshold.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`MaskInstance`](/mod/game-api/types/alta-world-generation/maskinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Mask()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fail" /><code>{"private float fail"}</code> | <span className="api-desc">Backing field for `Fail`.</span> |
| <Link id="m-ismorethan" /><code>{"private bool isMoreThan"}</code> | <span className="api-desc">Backing field for `IsMoreThan`.</span> |
| <Link id="m-mask" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" mask"}</code> | <span className="api-desc">Backing field for `MaskPlugin`.</span> |
| <Link id="m-maskthreshold" /><code>{"private float maskThreshold"}</code> | <span className="api-desc">Backing field for `MaskThreshold`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fail-2" /><code>{"float Fail { get; }"}</code> | <span className="api-desc">Value written to masked-out cells.</span> |
| <Link id="m-ismorethan-2" /><code>{"bool IsMoreThan { get; }"}</code> | <span className="api-desc">When true (the default), cells pass where the mask is at or above the threshold. When false, they pass where it is below.</span> |
| <Link id="m-maskplugin" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" MaskPlugin { get; }"}</code> | <span className="api-desc">The plugin whose layer is read as the mask.</span> |
| <Link id="m-maskthreshold-2" /><code>{"float MaskThreshold { get; }"}</code> | <span className="api-desc">Mask value that decides pass or fail (default 1).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `MaskInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `Mask`:

<div className="api-used-in">

[`MaskInstance.MaskInstance`](/mod/game-api/types/alta-world-generation/maskinstance#m-ctor).

</div>
