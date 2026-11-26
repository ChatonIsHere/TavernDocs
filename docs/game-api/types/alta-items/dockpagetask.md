---
title: "DockPageTask"
description: "class DockPageTask in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockPageTask

A **class** in `Root.Township`, `Alta.Pages`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`HashSetAction<DockObjectTaskArgument>`](/game-api/types/global-e-h/hashsetaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DockPageTask()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-dockprefabs" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> dockPrefabs"}</code> |
| <Link id="m-dockprefabshashes" /><code>{"private HashSet<uint> dockPrefabsHashes"}</code> |
| <Link id="m-targetpages" /><code>{"private List<Object> targetPages"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-c-d/dockobjecttaskargument">{"DockObjectTaskArgument"}</Link>{" argument)"}</code> |
