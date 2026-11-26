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
| <Link id="m-cappositiony" /><code>{"const int CapPositionY"}</code> | <span className="api-desc">Height (-15000) below which a saved object counts as fallen out of the world.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delaydestroy" /><code>{"static IEnumerator DelayDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity) (iterator)"}</code> | <span className="api-desc">At end of frame, sends the entity to its last holder's postbox if a player held it, otherwise destroys it.</span> |
| <Link id="m-loadsetuprecursive" /><code>{"static void LoadSetupRecursive("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Runs `LoadSetup` on every `ISavableFull` component of the entity and its children, children first.</span> |
| <Link id="m-serializeempty" /><code>{"static void SerializeEmpty("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | <span className="api-desc">Writes an empty prefab entry (hash 0).</span> |
| <Link id="m-serializeprefab" /><code>{"static void SerializePrefab("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Saves or loads one prefab. On save, a NaN or below `CapPositionY` object is dropped from the save and destroyed or posted.</span> |
| <Link id="m-writepositionlessprefab" /><code>{"static void WritePositionlessPrefab("}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes a prefab with a zero position, identity rotation and scale 1.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-posttoplayer" /><code>{"private static async void PostToPlayer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, int playerId)"}</code> | <span className="api-desc">Pushes the entity into a player's postbox and logs a warning.</span> |

</details>
