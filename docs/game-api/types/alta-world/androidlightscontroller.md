---
title: "AndroidLightsController"
description: "class AndroidLightsController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AndroidLightsController

A **class** in `Root.Township`, `Alta.Lighting`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`BaseLightsController`](/game-api/types/alta-world/baselightscontroller)
- **Nested types** [`SortedLight`](/game-api/types/alta-world/androidlightscontroller-sortedlight)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AndroidLightsController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-customlight" /><code>{"private static readonly int _CustomLight"}</code> |  |
| <Link id="m-buffer" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{"> buffer"}</code> |  |
| <Link id="m-empty" /><code>{"private Vector4 empty"}</code> |  |
| <Link id="m-shaderarray" /><code>{"private Vector4[] shaderArray"}</code> |  |
| <Link id="m-sorter" /><code>{"private "}<Link to="/game-api/types/alta-world/lightsorter-t">{"LightSorter"}</Link>{"<"}<Link to="/game-api/types/alta-world/androidlightscontroller-sortedlight">{"AndroidLightsController.SortedLight"}</Link>{"> sorter"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisabled" /><code>{"protected override void OnDisabled()"}</code> |  |
| <Link id="m-populatearray" /><code>{"private void PopulateArray(int offset)"}</code> |  |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> |  |
