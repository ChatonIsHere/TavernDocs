---
title: "CopyPart"
description: "Cave generator part that copies every cell from another plugin's layer into this one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CopyPart

A **class** in `Root.Township`, `Alta.Caves.PluginParts`.

Cave generator part that copies every cell from another plugin's layer into this one. Logs an error if this layer is bigger than the source.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapGeneratorPart`](/mod/game-api/types/alta-world-generation/mapgeneratorpart)
- **Derived types** [`CopyPartInstance`](/mod/game-api/types/alta-world-generation/copypartinstance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CopyPart()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" from"}</code> | <span className="api-desc">Backing field for `From`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-from-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" From { get; }"}</code> | <span className="api-desc">The plugin whose layer is copied. When unset, the part's own plugin is used.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinstance" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{" GetInstance("}<Link to="/mod/game-api/types/alta-world-generation/plugininstance">{"PluginInstance"}</Link>{" plugin)"}</code> | <span className="api-desc">Creates the `CopyPartInstance` that does the work.</span> |

## Used in

Members of other types that take, return or hold a `CopyPart`:

<div className="api-used-in">

[`CopyPartInstance.CopyPartInstance`](/mod/game-api/types/alta-world-generation/copypartinstance#m-ctor).

</div>
