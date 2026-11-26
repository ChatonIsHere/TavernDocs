---
title: "MouldSaveData1"
description: "Old save data (version 1) for Mould, migrated to MouldSaveData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldSaveData1

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save data (version 1) for `Mould`, migrated to `MouldSaveData`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MouldSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" definition"}</code> | Saved mould definition. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to version 2 with the same definition and unlimited uses. |
