---
title: "NamedProgressBar"
description: "Progress bar that writes its value to a shader property you name, instead of the default one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NamedProgressBar

A **class** in `Root.Township`, the global namespace.

Progress bar that writes its value to a shader property you name, instead of the default one.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`ProgressBar`](/mod/game-api/types/global-p/progressbar)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NamedProgressBar()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-variableid" /><code>{"private int variableID"}</code> | <span className="api-desc">Backing field for `ProgressVariable`.</span> |
| <Link id="m-variablename" /><code>{"private string variableName"}</code> | <span className="api-desc">Shader property name, `_Progress` by default.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-progressvariable" /><code>{"override int ProgressVariable { get; }"}</code> | <span className="api-desc">Shader property ID the progress is written to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Refreshes the shader property ID when edited.</span> |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> | <span className="api-desc">Looks up the shader property ID from `variableName`.</span> |
