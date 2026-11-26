---
title: "MouldSaveData"
description: "Save data (version 2) for Mould."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 2) for `Mould`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NewSaveData<Mould, MouldSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Mould`](/game-api/types/global-m-o/mould), [`MouldSaveData`](/game-api/types/global-m-o/mouldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MouldSaveData()"}</code> | Creates a `MouldSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" definition"}</code> | Saved mould definition, or null for a blank mould. |
| <Link id="m-usage" /><code>{"int usage"}</code> | Uses left; -1 means unlimited. |
