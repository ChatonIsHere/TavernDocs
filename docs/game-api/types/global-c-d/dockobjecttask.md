---
title: "DockObjectTask"
description: "class DockObjectTask in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockObjectTask

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`HashSetAction<DockObjectTaskArgument>`](/game-api/types/global-e-h/hashsetaction-t)
- **Nested types** [`Filters`](/game-api/types/global-c-d/dockobjecttask-filters)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockObjectTask()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dockprefabs" /><code>{"private List<uint> dockPrefabs"}</code> |  |
| <Link id="m-dockprefabshashes" /><code>{"private HashSet<uint> dockPrefabsHashes"}</code> |  |
| <Link id="m-filters" /><code>{"private "}<Link to="/game-api/types/global-c-d/dockobjecttask-filters">{"DockObjectTask.Filters"}</Link>{" filters"}</code> |  |
| <Link id="m-possibledocks" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> possibleDocks"}</code> |  |
| <Link id="m-targetdockshash" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> targetDocksHash"}</code> |  |
| <Link id="m-targetitems" /><code>{"private List<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{"> targetItems"}</code> |  |
| <Link id="m-targetitemshash" /><code>{"private HashSet<uint> targetItemsHash"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> |  |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-c-d/dockobjecttaskargument">{"DockObjectTaskArgument"}</Link>{" argument)"}</code> |  |
