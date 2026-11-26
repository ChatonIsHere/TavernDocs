---
title: "PlayerSaveFileData2"
description: "Version 2 of the saved player position and home."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSaveFileData2

A **class** in `Root.Township`, `Alta.Utilities`.

Version 2 of the saved player position and home. Migrating moves anyone out of four old areas to the original spawn point.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerSaveFileData2()"}</code> | Creates a `PlayerSaveFileData2` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-home" /><code>{"Vector3 home"}</code> | Saved home position. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Saved player position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current `PlayerSaveFileData`. A home inside one of four old 96 by 96 areas moves to the original spawn point, and a position there moves to home. |
