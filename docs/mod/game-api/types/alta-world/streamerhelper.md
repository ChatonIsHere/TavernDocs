---
title: "StreamerHelper"
description: "Helpers for writing and reading prefabs in chunk saves (hash, position, rotation, scale, then the prefab's own data), with guards for broken positions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StreamerHelper

A **static class** in `Root.Township`, `Alta.Chunks`.

Helpers for writing and reading prefabs in chunk saves (hash, position, rotation, scale, then the prefab's own data), with guards for broken positions.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cappositiony" /><code>{"const int CapPositionY"}</code> | Height (-15000) below which a saved object counts as fallen out of the world. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delaydestroy" /><code>{"static IEnumerator DelayDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity) (iterator)"}</code> | At end of frame, sends the entity to its last holder's postbox if a player held it, otherwise destroys it. |
| <Link id="m-loadsetuprecursive" /><code>{"static void LoadSetupRecursive("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Runs `LoadSetup` on every `ISavableFull` component of the entity and its children, children first. |
| <Link id="m-serializeempty" /><code>{"static void SerializeEmpty("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Writes an empty prefab entry (hash 0). |
| <Link id="m-serializeprefab" /><code>{"static void SerializePrefab("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Saves or loads one prefab. On save, a NaN or below `CapPositionY` object is dropped from the save and destroyed or posted. |
| <Link id="m-writepositionlessprefab" /><code>{"static void WritePositionlessPrefab("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes a prefab with a zero position, identity rotation and scale 1. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-posttoplayer" /><code>{"private static async void PostToPlayer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, int playerId)"}</code> | Pushes the entity into a player's postbox and logs a warning. |

</details>
