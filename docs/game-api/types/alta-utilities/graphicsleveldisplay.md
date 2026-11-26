---
title: "GraphicsLevelDisplay"
description: "Live debug readout of the current graphics optimisation level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GraphicsLevelDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Live debug readout of the current graphics optimisation level.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GraphicsLevelDisplay()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | Label `Graphics Level`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | Only shown when an `OptimizationManager` exists. |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | `OptimizationManager.instance.CurrentLevel` as text. |
