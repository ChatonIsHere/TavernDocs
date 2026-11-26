---
title: "SetPiece"
description: "A saved group of networked objects (SetPieceData) placed as one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetPiece

A **class** in `Root.Township`, the global namespace.

A saved group of networked objects (`SetPieceData`) placed as one. On the server it spawns the group as children, then frees them into the chunk and destroys itself; in the editor it can store or ghost-preview the group.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<SetPieceSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SetPieceSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SetPieceSaveData`](/mod/game-api/types/global-s/setpiecesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetPiece()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"private "}<Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" data"}</code> | <span className="api-desc">The set piece asset with the saved objects. Cleared on the server after spawning.</span> |
| <Link id="m-olddata" /><code>{"private "}<Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" oldData"}</code> | <span className="api-desc">The last `data` seen by `OnValidate`, to spot changes.</span> |
| <Link id="m-savemode" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode"}</code> | <span className="api-desc">Save mode passed when loading the objects. Default `Ignore`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearpieceineditor" /><code>{"void ClearPieceInEditor()"}</code> | <span className="api-desc">Editor: destroys all child objects.</span> |
| <Link id="m-ghostpieceforeditor" /><code>{"void GhostPieceForEditor()"}</code> | <span className="api-desc">Editor: loads the data, copies its renderers as ghosts, removes the real objects and keeps the ghosts as a preview.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: loads the stored objects into the entity, clears `data` and waits to be added to a chunk.</span> |
| <Link id="m-storepieceineditor" /><code>{"void StorePieceInEditor()"}</code> | <span className="api-desc">Editor: saves the children into the data. It destroys this component first and re-adds it with the data.</span> |
| <Link id="m-storepieceineditorwithoutdestroy" /><code>{"void StorePieceInEditorWithoutDestroy()"}</code> | <span className="api-desc">Editor: saves the children into the data and keeps the component.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedtochunk" /><code>{"private void AddedToChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Server: once in a chunk, moves every child entity out to the parent, sets them to save on their own, then scene-destroys the set piece.</span> |
| <Link id="m-applyghostingeffecttorenderer" /><code>{"private static GameObject ApplyGhostingEffectToRenderer(Renderer renderer)"}</code> | <span className="api-desc">Editor: makes a hidden, unsaved copy of a renderer with the same mesh and materials for previewing.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: refreshes the ghost preview when `data` changes, stops children from saving into the scene, and names the object after the data.</span> |
| <Link id="m-preparenetworkprefabsavemode" /><code>{"private void PrepareNetworkPrefabSaveMode()"}</code> | <span className="api-desc">Sets every child network prefab to save as a child of the set piece.</span> |
| <Link id="m-save" /><code>{"private void Save()"}</code> | <span className="api-desc">Stores the entity and its children into `data.DynamicData`.</span> |
| <Link id="m-updatecomponentdatareference" /><code>{"private void UpdateComponentDataReference()"}</code> | <span className="api-desc">Puts `data` on the object's `SetPiece`, adding one if missing.</span> |

</details>
