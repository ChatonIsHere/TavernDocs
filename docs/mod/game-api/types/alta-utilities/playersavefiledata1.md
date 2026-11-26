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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerSaveFileData1()"}</code> | <span className="api-desc">Creates a `PlayerSaveFileData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-home" /><code>{"Vector3 home"}</code> | <span className="api-desc">Saved home position.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Saved player position.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pathandtowerboundscentre" /><code>{"private readonly Vector3 pathAndTowerBoundsCentre"}</code> | <span className="api-desc">Centre of the old path and tower area that migration clears.</span> |
| <Link id="m-pathandtowerboundssize" /><code>{"private readonly Vector3 pathAndTowerBoundsSize"}</code> | <span className="api-desc">Size of the old path and tower area that migration clears.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the current `PlayerSaveFileData`. A home inside the old path and tower bounds moves to a random respawn point, and a position there moves to home.</span> |
