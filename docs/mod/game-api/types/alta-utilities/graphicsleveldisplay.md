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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GraphicsLevelDisplay()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | <span className="api-desc">Label `Graphics Level`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | <span className="api-desc">Only shown when an `OptimizationManager` exists.</span> |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | <span className="api-desc">`OptimizationManager.instance.CurrentLevel` as text.</span> |
