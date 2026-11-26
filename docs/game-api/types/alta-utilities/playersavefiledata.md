---
title: "PlayerSaveFileData"
description: "Basic save data inside a PlayerSave: the player's last position and home point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSaveFileData

A **class** in `Root.Township`, `Alta.Utilities`.

Basic save data inside a `PlayerSave`: the player's last position and home point.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`BasicSaveData<PlayerSaveFileData>`](/game-api/types/global-a-b/basicsavedata-tdata)
- **Derived types** [`PlayerSaveFileData`](/game-api/types/alta-utilities/playersavefiledata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerSaveFileData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-home" /><code>{"Vector3 home"}</code> | The player's saved home (respawn) position. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | The player's last saved world position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyto" /><code>{"protected override void CopyTo("}<Link to="/game-api/types/alta-utilities/playersavefiledata">{"PlayerSaveFileData"}</Link>{" target)"}</code> | Copies position and home into another instance. |

## Used in

Members of other types that take, return or hold a `PlayerSaveFileData`:

[`PlayerSave.Data`](/game-api/types/alta-utilities/playersave#m-data), [`PlayerSave.saveData`](/game-api/types/alta-utilities/playersave#m-savedata).
