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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`HashedGeneralValue<PlayerSaveData>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PlayerSaveData`](/mod/game-api/types/alta-utilities/playersavedata), [`PlayerSaveData.Create`](/mod/game-api/types/alta-utilities/playersavedata-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-utilities/playersavedata-create)
- **Documented in** [Saving](/mod/game-api/networking/saving)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerSaveData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialsetupbytes" /><code>{"private int initialSetupBytes"}</code> | <span className="api-desc">Length in bytes of the stored setup data.</span> |
| <Link id="m-initialsetupdata" /><code>{"private uint[] initialSetupData"}</code> | <span className="api-desc">The stored prefab data for the starting player.</span> |
| <Link id="m-versioning" /><code>{"private uint[] versioning"}</code> | <span className="api-desc">Chunk versioning the data was saved with.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrent" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/playersavedata">{"PlayerSaveData"}</Link>{" GetCurrent()"}</code> | <span className="api-desc">The asset named after the server's `InitialPlayerInventory` setting, or null when the setting is `None` or no server is running.</span> |
| <Link id="m-populate" /><code>{"void Populate("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Copies the stored prefab data, byte count and versioning into a player save.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Only calls the base.</span> |
