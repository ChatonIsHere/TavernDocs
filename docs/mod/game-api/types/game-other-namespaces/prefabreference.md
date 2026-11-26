---
title: "PrefabReference"
description: "Serializable wrapper around a GameObject prefab that converts to GameObject implicitly."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabReference

A **struct** in `Root.Township`, `ATT`.

Serializable wrapper around a GameObject prefab that converts to `GameObject` implicitly.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-standaloneprefab" /><code>{"private GameObject standalonePrefab"}</code> | Serialized prefab reference. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"private GameObject Prefab { get; }"}</code> | The wrapped prefab. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static GameObject op_Implicit("}<Link to="/mod/game-api/types/game-other-namespaces/prefabreference">{"PrefabReference"}</Link>{" reference)"}</code> | Converts the reference to its prefab GameObject. |
