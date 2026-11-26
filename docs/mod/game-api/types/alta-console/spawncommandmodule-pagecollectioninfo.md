---
title: "SpawnCommandModule.PageCollectionInfo"
description: "A row in the page collection list console command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnCommandModule.PageCollectionInfo

A **class** in `Root.Township`, `Alta.Console.Commands`.

A row in the page collection list console command.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`SpawnCommandModule`](/mod/game-api/types/alta-console/spawncommandmodule)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PageCollectionInfo()"}</code> | Creates a `SpawnCommandModule.PageCollectionInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | The collection's description. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The collection's asset name. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/spawncommandmodule-pagecollectioninfo">{"SpawnCommandModule.PageCollectionInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection)"}</code> | Builds the row from a `PageCollection`. |

## Used in

Members of other types that take, return or hold a `PageCollectionInfo`:

[`SpawnCommandModule.Pages.List`](/mod/game-api/types/alta-console/spawncommandmodule-pages#m-list).
