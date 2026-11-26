---
title: "LinearPartClonerData"
description: "Save data for LinearPartCloner: how many parts it has spawned."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinearPartClonerData

A **class** in `Root.Township`, the global namespace.

Save data for `LinearPartCloner`: how many parts it has spawned.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NewSaveData<LinearPartCloner, LinearPartClonerData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LinearPartCloner`](/mod/game-api/types/global-i-l/linearpartcloner), [`LinearPartClonerData`](/mod/game-api/types/global-i-l/linearpartclonerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinearPartClonerData()"}</code> | Creates a `LinearPartClonerData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int count"}</code> | Number of cloned parts (default 1). |

## Used in

Members of other types that take, return or hold a `LinearPartClonerData`:

[`LinearPartCloner.saveData`](/mod/game-api/types/global-i-l/linearpartcloner#m-savedata).
