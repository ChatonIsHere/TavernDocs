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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Documented in** [Prefabs and prefab hashes](/mod/game-api/world/prefabs#prefabmanager)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-prefabmap" /><code>{"private static Dictionary<uint, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> prefabMap"}</code> | <span className="api-desc">Prefabs by hash, or null until loaded.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allprefabs" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> AllPrefabs { get; }"}</code> | <span className="api-desc">Every loaded prefab. Throws if nothing has loaded the map yet, so call `PrepareSpawnSetups` first.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-exists" /><code>{"static bool Exists(uint hash)"}</code> | <span className="api-desc">Whether a prefab with this hash exists.</span> |
| <Link id="m-getprefab" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" GetPrefab(uint hash)"}</code> | <span className="api-desc">Finds a prefab by hash, or by string: the hash as text, or the lowercase name with or without spaces. The string is not lowercased for you.</span> |
| <Link id="m-getprefab-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" GetPrefab(string name)"}</code> | <span className="api-desc">Finds a prefab by hash, or by string: the hash as text, or the lowercase name with or without spaces. The string is not lowercased for you.</span> |
| <Link id="m-preparespawnsetups" /><code>{"static void PrepareSpawnSetups()"}</code> | <span className="api-desc">Loads all network prefabs once and, on headless builds, strips their meshes, materials, lights and cameras.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtoprefabmap" /><code>{"private static void AddToPrefabMap("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs)"}</code> | <span className="api-desc">Adds prefabs to the map by hash, logging an error for any duplicate hash.</span> |
| <Link id="m-findprefabsoutoffolder" /><code>{"private static void FindPrefabsOutOfFolder("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-removeallmaterialsandmeshesonprefabs" /><code>{"private static void RemoveAllMaterialsAndMeshesOnPrefabs()"}</code> | <span className="api-desc">Headless: clears and disables renderers, meshes, lights and cameras on all resource prefabs to save memory.</span> |
| <Link id="m-validateallembeddedhashes" /><code>{"private static void ValidateAllEmbeddedHashes("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs)"}</code> | <span className="api-desc">Checks each prefab's embedded entity hashes; not called here.</span> |

</details>
