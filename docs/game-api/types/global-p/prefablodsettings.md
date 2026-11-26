---
title: "PrefabLODSettings"
description: "Asset holding a last LOD distance and a list of network prefabs to leave out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabLODSettings

A **class** in `Root.Township`, no namespace.

Asset holding a last LOD distance and a list of network prefabs to leave out. Nothing in this build reads it.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabLODSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filteredout" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> filteredOut"}</code> | Backing field for `FilteredOut`. |
| <Link id="m-lastlod" /><code>{"private float lastLOD"}</code> | Backing field for `LastLOD`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-filteredout-2" /><code>{"List<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> FilteredOut { get; }"}</code> | Network prefabs that are left out. |
| <Link id="m-lastlod-2" /><code>{"float LastLOD { get; set; }"}</code> | Last LOD value. |
