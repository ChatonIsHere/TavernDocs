---
title: "GlobalPagesManager"
description: "Server: records which pages (by provider and hash) have been added to the world, starting with every collection's initial pages, and saves that list."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPagesManager

A **class** in `Root.Township`, `Alta.Pages`.

Server: records which pages (by provider and hash) have been added to the world, starting with every collection's initial pages, and saves that list. Singleton `GlobalPagesManager.Instance`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GlobalPagesManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GlobalPagesManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GlobalPagesManagerSaveData`](/mod/game-api/types/alta-items/globalpagesmanagersavedata)
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books#globalpagesmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalPagesManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedpages" /><code>{"private HashSet<ValueTuple<int, uint>> addedPages"}</code> | Backing set for `AddedPages`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-addedpages-2" /><code>{"IEnumerable<ValueTuple<int, uint>> AddedPages { get; }"}</code> | All recorded pages as provider and hash pairs. |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/globalpagesmanager">{"GlobalPagesManager"}</Link>{" Instance { get; private set; }"}</code> | The active manager. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pageadded" /><code>{"event Action<ValueTuple<int, uint>> PageAdded"}</code> | Raised on the server when a new page is recorded. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpage" /><code>{"void AddPage("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" data)"}</code> | Server: records a page as added and raises `PageAdded` if it was new. |
| <Link id="m-addpage-2" /><code>{"void AddPage(int providerID, uint hash)"}</code> | Server: records a page as added and raises `PageAdded` if it was new. |
| <Link id="m-dissolvepage" /><code>{"void DissolvePage("}<Link to="/mod/game-api/types/alta-items/paperpageinstance">{"PaperPageInstance"}</Link>{" paper, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Plays the dissolving page effect for a paper page, moving toward the front of the player. |
| <Link id="m-dissolvepage-2" /><code>{"void DissolvePage("}<Link to="/mod/game-api/types/alta-items/paperpageinstance">{"PaperPageInstance"}</Link>{" paper, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Plays the dissolving page effect for a paper page, moving toward the front of the player. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: if nothing was loaded, fills the list with every page collection's initial pages. |
| <Link id="m-isnew" /><code>{"static bool IsNew(int providerID, uint pageHash)"}</code> | True when the page has not been recorded yet. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance`, or destroys itself if another one exists. |

</details>
