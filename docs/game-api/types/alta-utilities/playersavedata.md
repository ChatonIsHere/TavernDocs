---
title: "PlayerSaveData"
description: "The starting inventory for new players (InitialPlayerInventory in the settings picks which)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSaveData

A **class** in `Root.Township`, `Alta.Utilities`.

The starting inventory for new players (`InitialPlayerInventory` in the settings picks which).

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`HashedGeneralValue<PlayerSaveData>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PlayerSaveData`](/game-api/types/alta-utilities/playersavedata), [`PlayerSaveData.Create`](/game-api/types/alta-utilities/playersavedata-create)
- **Nested types** [`Create`](/game-api/types/alta-utilities/playersavedata-create)
- **Documented in** [Saving](/game-api/networking/saving)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-initialsetupbytes" /><code>{"private int initialSetupBytes"}</code> |  |
| <Link id="m-initialsetupdata" /><code>{"private uint[] initialSetupData"}</code> |  |
| <Link id="m-versioning" /><code>{"private uint[] versioning"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrent" /><code>{"static "}<Link to="/game-api/types/alta-utilities/playersavedata">{"PlayerSaveData"}</Link>{" GetCurrent()"}</code> |  |
| <Link id="m-populate" /><code>{"void Populate("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
