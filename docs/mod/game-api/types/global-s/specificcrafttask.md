---
title: "SpecificCraftTask"
description: "Game task asset that counts crafting where a given item goes into a given slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificCraftTask

A **class** in `Root.Township`, the global namespace.

Game task asset that counts crafting where a given item goes into a given slot. An empty prefab list matches anything.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`HashSetAction<SpecificCraftTaskArgument>`](/mod/game-api/types/global-e-h/hashsetaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecificCraftTask()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-insertprefabhashes" /><code>{"private HashSet<uint> insertPrefabHashes"}</code> | <span className="api-desc">Hashes of `insertPrefabs`.</span> |
| <Link id="m-insertprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> insertPrefabs"}</code> | <span className="api-desc">Items that count when inserted. Empty means any.</span> |
| <Link id="m-slotprefabhashes" /><code>{"private HashSet<uint> slotPrefabHashes"}</code> | <span className="api-desc">Hashes of `slotPrefabs`.</span> |
| <Link id="m-slotprefabs" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> slotPrefabs"}</code> | <span className="api-desc">Slot prefabs that count. Empty means any.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Listens on the `CraftItem` game action channel.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | <span className="api-desc">Builds the hash sets from the prefab lists.</span> |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/mod/game-api/types/global-s/specificcrafttaskargument">{"SpecificCraftTaskArgument"}</Link>{" argument)"}</code> | <span className="api-desc">True when the slot's prefab and the inserted item's prefab both pass their lists.</span> |
