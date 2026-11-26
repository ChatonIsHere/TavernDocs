---
title: "PipelineResultAttribute"
description: "Attribute on an ObjectPipeline field that states which types the pipeline should produce, such as GameObject or NetworkPrefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PipelineResultAttribute

A **class** in `Root.Township`, the global namespace.

Attribute on an `ObjectPipeline` field that states which types the pipeline should produce, such as `GameObject` or `NetworkPrefab`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `Attribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PipelineResultAttribute(params Type[] types)"}</code> | Creates a `PipelineResultAttribute` from `types`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-types" /><code>{"IEnumerable<Type> Types { get; }"}</code> | The result types the pipeline field expects. |
