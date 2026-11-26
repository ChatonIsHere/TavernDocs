---
title: "GlobalCommunalStorageValues"
description: "Server: keeps communal storage contents across server wipes, saved in the Global Communal Storage file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalCommunalStorageValues

A **class** in `Root.Township`, `Alta.Inventory`.

Server: keeps communal storage contents across server wipes, saved in the `Global Communal Storage` file. Static methods use a single instance set in `Awake`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalCommunalStorageValues()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availabledata" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/storagedata">{"StorageData"}</Link>{"> availableData"}</code> | <span className="api-desc">Stored quantities shared by item and physical material.</span> |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/globalcommunalstoragevaluesdata">{"GlobalCommunalStorageValuesData"}</Link>{" data"}</code> | <span className="api-desc">The loaded save data, or null if there was no file.</span> |
| <Link id="m-file" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file"}</code> | <span className="api-desc">The save file.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/alta-items/globalcommunalstoragevalues">{"GlobalCommunalStorageValues"}</Link>{" instance"}</code> | <span className="api-desc">The single instance the static methods use.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-readingtask" /><code>{"private Task readingTask"}</code> | <span className="api-desc">The file read in progress; the static methods wait for it first.</span> |
| <Link id="m-uniquestorages" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{", int> uniqueStorages"}</code> | <span className="api-desc">Stored quantities for unique storages, by identifier.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override async void Initialize()"}</code> | <span className="api-desc">Server: sets up the lists, hooks the wipe-finished event and reads the save file.</span> |
| <Link id="m-load" /><code>{"static async Task<int> Load("}<Link to="/mod/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{" identifier)"}</code> | <span className="api-desc">Takes and returns the stored quantity for an identifier or item, removing it and saving the file. Returns 0 if none.</span> |
| <Link id="m-load-2" /><code>{"static async Task<int> Load("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" docked)"}</code> | <span className="api-desc">Takes and returns the stored quantity for an identifier or item, removing it and saving the file. Returns 0 if none.</span> |
| <Link id="m-save" /><code>{"static async void Save("}<Link to="/mod/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{" identifier, int quantity)"}</code> | <span className="api-desc">Records a quantity in memory, by unique identifier or added to the matching item and material. Written on `FinishWipe`.</span> |
| <Link id="m-save-2" /><code>{"static async void Save("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" docked, int quantity)"}</code> | <span className="api-desc">Records a quantity in memory, by unique identifier or added to the matching item and material. Written on `FinishWipe`.</span> |
| <Link id="m-wipe" /><code>{"static async Task Wipe()"}</code> | <span className="api-desc">Deletes the save file and clears everything. Used by the `wipe-storage` command.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores this as the static instance.</span> |
| <Link id="m-finishwipe" /><code>{"private void FinishWipe()"}</code> | <span className="api-desc">After a wipe, writes everything collected during the wipe to the save file.</span> |
| <Link id="m-loadcontent" /><code>{"private async Task LoadContent()"}</code> | <span className="api-desc">Reads the save file into the shared item list and the per-identifier quantities.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the wipe-finished event.</span> |
| <Link id="m-savetofile" /><code>{"private void SaveToFile()"}</code> | <span className="api-desc">Writes the current data to the save file.</span> |

</details>
