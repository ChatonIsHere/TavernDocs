---
title: "DockPageTask"
description: "Game task asset (Township Tale/Game Tasks/Dock Page) that counts when a page item is docked into one of the chosen docks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockPageTask

A **class** in `Root.Township`, `Alta.Pages`.

Game task asset (Township Tale/Game Tasks/Dock Page) that counts when a page item is docked into one of the chosen docks.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`HashSetAction<DockObjectTaskArgument>`](/game-api/types/global-e-h/hashsetaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockPageTask()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockprefabs" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> dockPrefabs"}</code> | Dock prefabs that count; empty means any dock. |
| <Link id="m-dockprefabshashes" /><code>{"private HashSet<uint> dockPrefabsHashes"}</code> | Hashes of `dockPrefabs`, filled in `Initialize`. |
| <Link id="m-targetpages" /><code>{"private List<Object> targetPages"}</code> | Pages (any `IPageBasis` asset) that count; empty means any page. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Listens on the `DockObject` game action channel. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | Builds `dockPrefabsHashes` from the dock prefab list. |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-c-d/dockobjecttaskargument">{"DockObjectTaskArgument"}</Link>{" argument)"}</code> | True when the docked item is a page or duplicate page, the dock passes the dock filter, and the page matches `targetPages` if any are set. |
