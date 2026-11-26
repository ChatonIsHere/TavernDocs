---
title: "PrefabManager"
description: "Static lookup of every NetworkPrefab by hash, loaded from the Network Prefabs resources folder on first use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabManager

A **static class** in `Root.Township`, `Alta.Networking`.

Static lookup of every `NetworkPrefab` by hash, loaded from the `Network Prefabs` resources folder on first use. Use `GetPrefab` to find a prefab to spawn.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Documented in** [Prefabs and prefab hashes](/game-api/world/prefabs#prefabmanager)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-prefabmap" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> prefabMap"}</code> | Prefabs by hash, or null until loaded. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allprefabs" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> AllPrefabs { get; }"}</code> | Every loaded prefab. Throws if nothing has loaded the map yet, so call `PrepareSpawnSetups` first. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"static bool Exists(uint hash)"}</code> | Whether a prefab with this hash exists. |
| <Link id="m-getprefab" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" GetPrefab(uint hash)"}</code> | Finds a prefab by hash, or by string: the hash as text, or the lowercase name with or without spaces. The string is not lowercased for you. |
| <Link id="m-getprefab-2" /><code>{"static "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" GetPrefab(string name)"}</code> | Finds a prefab by hash, or by string: the hash as text, or the lowercase name with or without spaces. The string is not lowercased for you. |
| <Link id="m-preparespawnsetups" /><code>{"static void PrepareSpawnSetups()"}</code> | Loads all network prefabs once and, on headless builds, strips their meshes, materials, lights and cameras. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtoprefabmap" /><code>{"private static void AddToPrefabMap("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs)"}</code> | Adds prefabs to the map by hash, logging an error for any duplicate hash. |
| <Link id="m-findprefabsoutoffolder" /><code>{"private static void FindPrefabsOutOfFolder("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs)"}</code> | Empty. |
| <Link id="m-removeallmaterialsandmeshesonprefabs" /><code>{"private static void RemoveAllMaterialsAndMeshesOnPrefabs()"}</code> | Headless: clears and disables renderers, meshes, lights and cameras on all resource prefabs to save memory. |
| <Link id="m-validateallembeddedhashes" /><code>{"private static void ValidateAllEmbeddedHashes("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs)"}</code> | Checks each prefab's embedded entity hashes; not called here. |

</details>
