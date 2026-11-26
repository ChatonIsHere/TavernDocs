---
title: "SpecificCraftTask"
description: "Game task asset that counts crafting where a given item goes into a given slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecificCraftTask

A **class** in `Root.Township`, no namespace.

Game task asset that counts crafting where a given item goes into a given slot. An empty prefab list matches anything.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`HashSetAction<SpecificCraftTaskArgument>`](/game-api/types/global-e-h/hashsetaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecificCraftTask()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-insertprefabhashes" /><code>{"private HashSet<uint> insertPrefabHashes"}</code> | Hashes of `insertPrefabs`. |
| <Link id="m-insertprefabs" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> insertPrefabs"}</code> | Items that count when inserted. Empty means any. |
| <Link id="m-slotprefabhashes" /><code>{"private HashSet<uint> slotPrefabHashes"}</code> | Hashes of `slotPrefabs`. |
| <Link id="m-slotprefabs" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> slotPrefabs"}</code> | Slot prefabs that count. Empty means any. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Listens on the `CraftItem` game action channel. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | Builds the hash sets from the prefab lists. |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-s/specificcrafttaskargument">{"SpecificCraftTaskArgument"}</Link>{" argument)"}</code> | True when the slot's prefab and the inserted item's prefab both pass their lists. |
