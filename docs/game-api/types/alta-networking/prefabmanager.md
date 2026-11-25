---
title: "PrefabManager"
description: "It loads every NetworkPrefab under Resources/Network Prefabs the first time anything asks, into a private Dictionary<uint, NetworkPrefab>."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabManager

A **static class** in `Root.Township`, `Alta.Networking`.

It loads every `NetworkPrefab` under `Resources/Network Prefabs` the first time anything asks, into a private `Dictionary<uint, NetworkPrefab>`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Documented in** [Prefabs and prefab hashes](/game-api/world/prefabs#prefabmanager)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-prefabmap" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> prefabMap"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-allprefabs" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> AllPrefabs { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-exists" /><code>{"static bool Exists(uint hash)"}</code> |
| <Link id="m-getprefab" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" GetPrefab(uint hash)"}</code> |
| <Link id="m-getprefab-2" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" GetPrefab(string name)"}</code> |
| <Link id="m-preparespawnsetups" /><code>{"static void PrepareSpawnSetups()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addtoprefabmap" /><code>{"private static void AddToPrefabMap("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs)"}</code> |
| <Link id="m-findprefabsoutoffolder" /><code>{"private static void FindPrefabsOutOfFolder("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs)"}</code> |
| <Link id="m-removeallmaterialsandmeshesonprefabs" /><code>{"private static void RemoveAllMaterialsAndMeshesOnPrefabs()"}</code> |
| <Link id="m-validateallembeddedhashes" /><code>{"private static void ValidateAllEmbeddedHashes("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs)"}</code> |

</details>
