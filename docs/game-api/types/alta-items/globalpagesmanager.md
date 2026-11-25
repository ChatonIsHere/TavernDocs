---
title: "GlobalPagesManager"
description: "Alta.Pages.GlobalPagesManager, a NetworkEntityBehaviour singleton (GlobalPagesManager.Instance)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPagesManager

A **class** in `Root.Township`, `Alta.Pages`.

`Alta.Pages.GlobalPagesManager`, a `NetworkEntityBehaviour` singleton (`GlobalPagesManager.Instance`). The list is built and kept on the server and saved with the world.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GlobalPagesManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GlobalPagesManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GlobalPagesManagerSaveData`](/game-api/types/alta-items/globalpagesmanagersavedata)
- **Documented in** [Pages and books](/game-api/items/pages-and-books#globalpagesmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalPagesManager()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-addedpages" /><code>{"private HashSet<ValueTuple<int, uint>> addedPages"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-addedpages-2" /><code>{"IEnumerable<ValueTuple<int, uint>> AddedPages { get; }"}</code> |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-items/globalpagesmanager">{"GlobalPagesManager"}</Link>{" Instance { get; private set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-pageadded" /><code>{"event Action<ValueTuple<int, uint>> PageAdded"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-addpage" /><code>{"void AddPage("}<Link to="/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> |
| <Link id="m-addpage-2" /><code>{"void AddPage(int providerID, uint hash)"}</code> |
| <Link id="m-dissolvepage" /><code>{"void DissolvePage("}<Link to="/game-api/types/alta-items/paperpageinstance">{"PaperPageInstance"}</Link>{" paper, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-dissolvepage-2" /><code>{"void DissolvePage("}<Link to="/game-api/types/alta-items/paperpageinstance">{"PaperPageInstance"}</Link>{" paper, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-isnew" /><code>{"static bool IsNew(int providerID, uint pageHash)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |

</details>
