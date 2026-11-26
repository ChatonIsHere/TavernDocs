---
title: "DockObjectTask"
description: "Game task asset (Dock Object channel) that counts docking a pickup, filtered by item, dock settings, dock prefab and whether the player docked it themselves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockObjectTask

A **class** in `Root.Township`, no namespace.

Game task asset (Dock Object channel) that counts docking a pickup, filtered by item, dock settings, dock prefab and whether the player docked it themselves.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`HashSetAction<DockObjectTaskArgument>`](/game-api/types/global-e-h/hashsetaction-t)
- **Nested types** [`Filters`](/game-api/types/global-c-d/dockobjecttask-filters)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DockObjectTask()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockprefabs" /><code>{"private List<uint> dockPrefabs"}</code> | Network prefab hashes of the docks that count. |
| <Link id="m-dockprefabshashes" /><code>{"private HashSet<uint> dockPrefabsHashes"}</code> | Lookup set built from `dockPrefabs`. |
| <Link id="m-filters" /><code>{"private "}<Link to="/game-api/types/global-c-d/dockobjecttask-filters">{"DockObjectTask.Filters"}</Link>{" filters"}</code> | Flags choosing whether docks by the player themselves, by others, or both count. Defaults to both. |
| <Link id="m-possibledocks" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> possibleDocks"}</code> | Dock settings assets that count. |
| <Link id="m-targetdockshash" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> targetDocksHash"}</code> | Lookup set built from `possibleDocks`. |
| <Link id="m-targetitems" /><code>{"private List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> targetItems"}</code> | Items whose docking counts. |
| <Link id="m-targetitemshash" /><code>{"private HashSet<uint> targetItemsHash"}</code> | Lookup set of item hashes built from `targetItems`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.DockObject`, so the task only listens for dock events. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | Copies the serialized item, dock settings and dock prefab lists into the lookup hash sets. |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-c-d/dockobjecttaskargument">{"DockObjectTaskArgument"}</Link>{" argument)"}</code> | True when the docked item, dock settings and dock prefab pass their filters (empty lists probably accept anything) and the self/others filter allows it. |
