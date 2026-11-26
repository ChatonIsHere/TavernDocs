---
title: "DockObjectTask"
description: "Game task asset (Dock Object channel) that counts docking a pickup, filtered by item, dock settings, dock prefab and whether the player docked it themselves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockObjectTask

A **class** in `Root.Township`, the global namespace.

Game task asset (Dock Object channel) that counts docking a pickup, filtered by item, dock settings, dock prefab and whether the player docked it themselves.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`HashSetAction<DockObjectTaskArgument>`](/mod/game-api/types/global-e-h/hashsetaction-t)
- **Nested types** [`Filters`](/mod/game-api/types/global-c-d/dockobjecttask-filters)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockObjectTask()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockprefabs" /><code>{"private List<uint> dockPrefabs"}</code> | <span className="api-desc">Network prefab hashes of the docks that count.</span> |
| <Link id="m-dockprefabshashes" /><code>{"private HashSet<uint> dockPrefabsHashes"}</code> | <span className="api-desc">Lookup set built from `dockPrefabs`.</span> |
| <Link id="m-filters" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/dockobjecttask-filters">{"DockObjectTask.Filters"}</Link>{" filters"}</code> | <span className="api-desc">Flags choosing whether docks by the player themselves, by others, or both count. Defaults to both.</span> |
| <Link id="m-possibledocks" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> possibleDocks"}</code> | <span className="api-desc">Dock settings assets that count.</span> |
| <Link id="m-targetdockshash" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> targetDocksHash"}</code> | <span className="api-desc">Lookup set built from `possibleDocks`.</span> |
| <Link id="m-targetitems" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"> targetItems"}</code> | <span className="api-desc">Items whose docking counts.</span> |
| <Link id="m-targetitemshash" /><code>{"private HashSet<uint> targetItemsHash"}</code> | <span className="api-desc">Lookup set of item hashes built from `targetItems`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Always `GameActionChannel.DockObject`, so the task only listens for dock events.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | <span className="api-desc">Copies the serialized item, dock settings and dock prefab lists into the lookup hash sets.</span> |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/mod/game-api/types/global-c-d/dockobjecttaskargument">{"DockObjectTaskArgument"}</Link>{" argument)"}</code> | <span className="api-desc">True when the docked item, dock settings and dock prefab pass their filters (empty lists probably accept anything) and the self/others filter allows it.</span> |
