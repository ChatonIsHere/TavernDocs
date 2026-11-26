---
title: "NamedProgressBar"
description: "Progress bar that writes its value to a shader property you name, instead of the default one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NamedProgressBar

A **class** in `Root.Township`, no namespace.

Progress bar that writes its value to a shader property you name, instead of the default one.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`ProgressBar`](/game-api/types/global-p/progressbar)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NamedProgressBar()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-variableid" /><code>{"private int variableID"}</code> | Backing field for `ProgressVariable`. |
| <Link id="m-variablename" /><code>{"private string variableName"}</code> | Shader property name, `_Progress` by default. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-progressvariable" /><code>{"override int ProgressVariable { get; }"}</code> | Shader property ID the progress is written to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Refreshes the shader property ID when edited. |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> | Looks up the shader property ID from `variableName`. |
