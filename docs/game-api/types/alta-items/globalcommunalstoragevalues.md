---
title: "GlobalCommunalStorageValues"
description: "class GlobalCommunalStorageValues in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalCommunalStorageValues

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalCommunalStorageValues()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-availabledata" /><code>{"private List<"}<Link to="/game-api/types/alta-items/storagedata">{"StorageData"}</Link>{"> availableData"}</code> |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/alta-items/globalcommunalstoragevaluesdata">{"GlobalCommunalStorageValuesData"}</Link>{" data"}</code> |
| <Link id="m-file" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file"}</code> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-items/globalcommunalstoragevalues">{"GlobalCommunalStorageValues"}</Link>{" instance"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-readingtask" /><code>{"private Task readingTask"}</code> |
| <Link id="m-uniquestorages" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{", int> uniqueStorages"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override async void Initialize()"}</code> |
| <Link id="m-load" /><code>{"static async Task<int> Load("}<Link to="/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{" identifier)"}</code> |
| <Link id="m-load-2" /><code>{"static async Task<int> Load("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" docked)"}</code> |
| <Link id="m-save" /><code>{"static async void Save("}<Link to="/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{" identifier, int quantity)"}</code> |
| <Link id="m-save-2" /><code>{"static async void Save("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" docked, int quantity)"}</code> |
| <Link id="m-wipe" /><code>{"static async Task Wipe()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-finishwipe" /><code>{"private void FinishWipe()"}</code> |
| <Link id="m-loadcontent" /><code>{"private async Task LoadContent()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-savetofile" /><code>{"private void SaveToFile()"}</code> |

</details>
