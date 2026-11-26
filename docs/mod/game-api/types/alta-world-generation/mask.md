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
| <Link id="m-ctor" /><code>{"Mask()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fail" /><code>{"private float fail"}</code> | Backing field for `Fail`. |
| <Link id="m-ismorethan" /><code>{"private bool isMoreThan"}</code> | Backing field for `IsMoreThan`. |
| <Link id="m-mask" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" mask"}</code> | Backing field for `MaskPlugin`. |
| <Link id="m-maskthreshold" /><code>{"private float maskThreshold"}</code> | Backing field for `MaskThreshold`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fail-2" /><code>{"float Fail { get; }"}</code> | Value written to masked-out cells. |
| <Link id="m-ismorethan-2" /><code>{"bool IsMoreThan { get; }"}</code> | When true (the default), cells pass where the mask is at or above the threshold. When false, they pass where it is below. |
| <Link id="m-maskplugin" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" MaskPlugin { get; }"}</code> | The plugin whose layer is read as the mask. |
| <Link id="m-maskthreshold-2" /><code>{"float MaskThreshold { get; }"}</code> | Mask value that decides pass or fail (default 1). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | Creates the `MaskInstance` that does the work. |

## Used in

Members of other types that take, return or hold a `Mask`:

[`MaskInstance.MaskInstance`](/mod/game-api/types/alta-world-generation/maskinstance#m-ctor).
