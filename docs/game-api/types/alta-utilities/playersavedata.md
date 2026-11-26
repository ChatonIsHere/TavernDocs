---
title: "PlayerSaveData"
description: "Asset holding a starting player save (prefab data, byte count and chunk versioning)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSaveData

A **class** in `Root.Township`, `Alta.Utilities`.

Asset holding a starting player save (prefab data, byte count and chunk versioning). The server's `InitialPlayerInventory` setting picks one by name.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`HashedGeneralValue<PlayerSaveData>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PlayerSaveData`](/game-api/types/alta-utilities/playersavedata), [`PlayerSaveData.Create`](/game-api/types/alta-utilities/playersavedata-create)
- **Nested types** [`Create`](/game-api/types/alta-utilities/playersavedata-create)
- **Documented in** [Saving](/game-api/networking/saving)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerSaveData()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialsetupbytes" /><code>{"private int initialSetupBytes"}</code> | Length in bytes of the stored setup data. |
| <Link id="m-initialsetupdata" /><code>{"private uint[] initialSetupData"}</code> | The stored prefab data for the starting player. |
| <Link id="m-versioning" /><code>{"private uint[] versioning"}</code> | Chunk versioning the data was saved with. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrent" /><code>{"static "}<Link to="/game-api/types/alta-utilities/playersavedata">{"PlayerSaveData"}</Link>{" GetCurrent()"}</code> | The asset named after the server's `InitialPlayerInventory` setting, or null when the setting is `None` or no server is running. |
| <Link id="m-populate" /><code>{"void Populate("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Copies the stored prefab data, byte count and versioning into a player save. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Only calls the base. |
