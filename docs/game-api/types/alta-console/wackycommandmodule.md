---
title: "WackyCommandModule"
description: "Console module wacky: odd fix-up and debug commands the code itself calls \"not necessarily safe/functional\", such as replacing broken entities, mass..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WackyCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `wacky`: odd fix-up and debug commands the code itself calls "not necessarily safe/functional", such as replacing broken entities, mass destroys and cleaning offline player saves. Play mode only.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`ChunkData`](/game-api/types/alta-console/wackycommandmodule-chunkdata), [`ChunkLootData`](/game-api/types/alta-console/wackycommandmodule-chunklootdata), [`LootData`](/game-api/types/alta-console/wackycommandmodule-lootdata)
- **Attributes** `PlayOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-owloot" /><code>{"static async Task<string> OWLoot()"}</code> | Server: `wacky ow-loot` force-loads a hardcoded list of overworld chunks and adds loot modules back to chests found at hardcoded positions. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chiseldeck" /><code>{"private static void ChiselDeck()"}</code> | Server: `wacky chisel-deck` respawns the chiselling deck from its prefab and destroys the old one. |
| <Link id="m-cleanplayerbody" /><code>{"private static async Task CleanPlayerBody("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" player)"}</code> | Server: `wacky cleanplayerbody` clears the cosmetic and state data in an offline player's save. |
| <Link id="m-cleanplayerstate" /><code>{"private static async Task CleanPlayerState("}<Link to="/game-api/types/global-t-x/userinfoaccess">{"UserInfoAccess"}</Link>{" player)"}</code> | Server: `wacky cleanplayerstate` clears the state data in an offline player's save. |
| <Link id="m-destroy" /><code>{"private static void Destroy(uint id)"}</code> | Server: `wacky destroy` destroys an entity by ID if it is an unparented prefab root. |
| <Link id="m-destroyall" /><code>{"private static void DestroyAll("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Server: `wacky destroyall` destroys every instance of a prefab in the scene. |
| <Link id="m-destroybase" /><code>{"private static void DestroyBase("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] chunks = null)"}</code> | Server: `wacky destroy-free` destroys instances of a prefab with no chunking parent, in all loaded objects or only the given chunks. |
| <Link id="m-inputscale" /><code>{"private static void InputScale(float scale)"}</code> | Client: `wacky inputscale` sets the local player's `InputScaler` scale. |
| <Link id="m-replace" /><code>{"private static void Replace()"}</code> | Server: `wacky replace` (by ID) or `wacky replace-selected` respawns an entity from its prefab at the same spot and destroys the old one. |
| <Link id="m-replace-2" /><code>{"private static void Replace(uint id)"}</code> | Server: `wacky replace` (by ID) or `wacky replace-selected` respawns an entity from its prefab at the same spot and destroys the old one. |
| <Link id="m-replaceentity" /><code>{"private static void ReplaceEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Respawns a prefab root entity fresh (without generating) at its position and rotation, then destroys the original. |
| <Link id="m-setvolume" /><code>{"private static void Setvolume(float local, float remote)"}</code> | Client: `wacky setvolume` sets local and remote volume through `ScaledLerpFollow.SetVolume`. |
| <Link id="m-smelter" /><code>{"private static void Smelter()"}</code> | Server: `wacky smelter` respawns the smelter in place under the mould rack's restrictor, undocks its contents and destroys the old one. |
| <Link id="m-unveilmap" /><code>{"private static void UnveilMap("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: `wacky marcopolo` discovers every piece of every map for a player. |

</details>
