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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalCommunalStorageValues()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availabledata" /><code>{"private List<"}<Link to="/game-api/types/alta-items/storagedata">{"StorageData"}</Link>{"> availableData"}</code> | Stored quantities shared by item and physical material. |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-items/globalcommunalstoragevaluesdata">{"GlobalCommunalStorageValuesData"}</Link>{" data"}</code> | The loaded save data, or null if there was no file. |
| <Link id="m-file" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file"}</code> | The save file. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-items/globalcommunalstoragevalues">{"GlobalCommunalStorageValues"}</Link>{" instance"}</code> | The single instance the static methods use. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-readingtask" /><code>{"private Task readingTask"}</code> | The file read in progress; the static methods wait for it first. |
| <Link id="m-uniquestorages" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{", int> uniqueStorages"}</code> | Stored quantities for unique storages, by identifier. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override async void Initialize()"}</code> | Server: sets up the lists, hooks the wipe-finished event and reads the save file. |
| <Link id="m-load" /><code>{"static async Task<int> Load("}<Link to="/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{" identifier)"}</code> | Takes and returns the stored quantity for an identifier or item, removing it and saving the file. Returns 0 if none. |
| <Link id="m-load-2" /><code>{"static async Task<int> Load("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" docked)"}</code> | Takes and returns the stored quantity for an identifier or item, removing it and saving the file. Returns 0 if none. |
| <Link id="m-save" /><code>{"static async void Save("}<Link to="/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{" identifier, int quantity)"}</code> | Records a quantity in memory, by unique identifier or added to the matching item and material. Written on `FinishWipe`. |
| <Link id="m-save-2" /><code>{"static async void Save("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" docked, int quantity)"}</code> | Records a quantity in memory, by unique identifier or added to the matching item and material. Written on `FinishWipe`. |
| <Link id="m-wipe" /><code>{"static async Task Wipe()"}</code> | Deletes the save file and clears everything. Used by the `wipe-storage` command. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores this as the static instance. |
| <Link id="m-finishwipe" /><code>{"private void FinishWipe()"}</code> | After a wipe, writes everything collected during the wipe to the save file. |
| <Link id="m-loadcontent" /><code>{"private async Task LoadContent()"}</code> | Reads the save file into the shared item list and the per-identifier quantities. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the wipe-finished event. |
| <Link id="m-savetofile" /><code>{"private void SaveToFile()"}</code> | Writes the current data to the save file. |

</details>
