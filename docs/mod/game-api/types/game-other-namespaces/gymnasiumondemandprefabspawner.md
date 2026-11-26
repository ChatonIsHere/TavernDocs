---
title: "GymnasiumOnDemandPrefabSpawner"
description: "Board of buttons in the feature test gymnasium, one per configured prefab plus Destroy All."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumOnDemandPrefabSpawner

A **class** in `Root.Township`, `ATT.FeatureTestGymnasium`.

Board of buttons in the feature test gymnasium, one per configured prefab plus Destroy All. Server spawns the prefabs in a spawn area; the button layout syncs to clients.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GymnasiumOnDemandPrefabSpawnerData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GymnasiumOnDemandPrefabSpawnerData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GymnasiumOnDemandPrefabSpawnerData`](/mod/game-api/types/global-e-h/gymnasiumondemandprefabspawnerdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumOnDemandPrefabSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backgroundsize" /><code>{"private Vector3 backgroundSize"}</code> | <span className="api-desc">Size of the board background, used for the button layout.</span> |
| <Link id="m-board" /><code>{"private Transform board"}</code> | <span className="api-desc">Transform the buttons are placed on.</span> |
| <Link id="m-buttonprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" buttonPrefab"}</code> | <span className="api-desc">Labelled button prefab.</span> |
| <Link id="m-buttonprefabsize" /><code>{"private Vector3 buttonPrefabSize"}</code> | <span className="api-desc">Size of one button, used for the layout.</span> |
| <Link id="m-prefabstospawn" /><code>{"private uint[] prefabsToSpawn"}</code> | <span className="api-desc">Network prefab hashes to make buttons for.</span> |
| <Link id="m-spawnarea" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnarea">{"SpawnArea"}</Link>{" spawnArea"}</code> | <span className="api-desc">Area spawned prefabs are placed in.</span> |
| <Link id="m-spawnednetworkprefabs" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> spawnedNetworkPrefabs"}</code> | <span className="api-desc">Entities this board has spawned, for Destroy All.</span> |
| <Link id="m-syncbuttonsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncButtonSetup"}</code> | <span className="api-desc">Sync for the button setup.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the button setup sync.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/global-e-h/gymnasiumondemandprefabspawnerdata">{"GymnasiumOnDemandPrefabSpawnerData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Loads the prefab list and board position from save, and builds the buttons.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the button setup to the new player.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/global-e-h/gymnasiumondemandprefabspawnerdata">{"GymnasiumOnDemandPrefabSpawnerData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Saves the board position and prefab list.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" CreateButton(Vector3 position, float scale)"}</code> | <span className="api-desc">Instantiates a button on the board at a position and scale.</span> |
| <Link id="m-destroynetworkprefabs" /><code>{"private void DestroyNetworkPrefabs()"}</code> | <span className="api-desc">Server: destroys everything this board has spawned.</span> |
| <Link id="m-setupbutton" /><code>{"private void SetupButton("}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" button, Action action, string label)"}</code> | <span className="api-desc">Server: hooks the button's action. Client: sets its label.</span> |
| <Link id="m-setupspawnbuttons" /><code>{"private void SetupSpawnButtons()"}</code> | <span className="api-desc">Lays out one button per prefab, named after it, plus a Destroy All button.</span> |
| <Link id="m-spawnnetworkprefabwithid" /><code>{"private void SpawnNetworkPrefabWithId(uint networkPrefabId)"}</code> | <span className="api-desc">Spawns the prefab at a random point in the spawn area and tracks it.</span> |
| <Link id="m-syncbuttonsetup-2" /><code>{"private void SyncButtonSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the prefab list and board position; clients rebuild the buttons from it.</span> |

</details>
