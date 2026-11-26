---
title: "SetPiece"
description: "class SetPiece in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetPiece

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<SetPieceSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SetPieceSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SetPieceSaveData`](/game-api/types/global-s/setpiecesavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SetPiece()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-data" /><code>{"private "}<Link to="/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" data"}</code> |
| <Link id="m-olddata" /><code>{"private "}<Link to="/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" oldData"}</code> |
| <Link id="m-savemode" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-clearpieceineditor" /><code>{"void ClearPieceInEditor()"}</code> |
| <Link id="m-ghostpieceforeditor" /><code>{"void GhostPieceForEditor()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-storepieceineditor" /><code>{"void StorePieceInEditor()"}</code> |
| <Link id="m-storepieceineditorwithoutdestroy" /><code>{"void StorePieceInEditorWithoutDestroy()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addedtochunk" /><code>{"private void AddedToChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-applyghostingeffecttorenderer" /><code>{"private static GameObject ApplyGhostingEffectToRenderer(Renderer renderer)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-preparenetworkprefabsavemode" /><code>{"private void PrepareNetworkPrefabSaveMode()"}</code> |
| <Link id="m-save" /><code>{"private void Save()"}</code> |
| <Link id="m-updatecomponentdatareference" /><code>{"private void UpdateComponentDataReference()"}</code> |

</details>
