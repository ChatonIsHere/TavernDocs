---
title: "PrefabLODSettings"
description: "Asset holding a last LOD distance and a list of network prefabs to leave out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabLODSettings

A **class** in `Root.Township`, the global namespace.

Asset holding a last LOD distance and a list of network prefabs to leave out. Nothing in this build reads it.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabLODSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filteredout" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> filteredOut"}</code> | <span className="api-desc">Backing field for `FilteredOut`.</span> |
| <Link id="m-lastlod" /><code>{"private float lastLOD"}</code> | <span className="api-desc">Backing field for `LastLOD`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-filteredout-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> FilteredOut { get; }"}</code> | <span className="api-desc">Network prefabs that are left out.</span> |
| <Link id="m-lastlod-2" /><code>{"float LastLOD { get; set; }"}</code> | <span className="api-desc">Last LOD value.</span> |
