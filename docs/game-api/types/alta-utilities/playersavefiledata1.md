---
title: "PlayerSaveFileData1"
description: "Version 1 of the saved player position and home."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSaveFileData1

A **class** in `Root.Township`, `Alta.Utilities`.

Version 1 of the saved player position and home. Migrating moves anyone inside the old path and tower area to a respawn point.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerSaveFileData1()"}</code> | Creates a `PlayerSaveFileData1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-home" /><code>{"Vector3 home"}</code> | Saved home position. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Saved player position. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pathandtowerboundscentre" /><code>{"private readonly Vector3 pathAndTowerBoundsCentre"}</code> | Centre of the old path and tower area that migration clears. |
| <Link id="m-pathandtowerboundssize" /><code>{"private readonly Vector3 pathAndTowerBoundsSize"}</code> | Size of the old path and tower area that migration clears. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current `PlayerSaveFileData`. A home inside the old path and tower bounds moves to a random respawn point, and a position there moves to home. |
