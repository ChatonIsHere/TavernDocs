---
title: "AdditionalStaticContent"
description: "Network entity component that instantiates a list of static prefabs under itself."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AdditionalStaticContent

A **class** in `Root.Township`, the global namespace.

Network entity component that instantiates a list of static prefabs under itself. Clients spawn them from a sync; the server spawns them when asked, for example in micro tutorial dynamic content.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<AdditionalStaticContentSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<AdditionalStaticContentSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IAdditionalStaticContent`](/mod/game-api/types/global-i-l/iadditionalstaticcontent)
- **Derived types** [`AdditionalStaticContentSaveData`](/mod/game-api/types/global-a-b/additionalstaticcontentsavedata)
- **Nested types** [`StaticContent`](/mod/game-api/types/global-a-b/additionalstaticcontent-staticcontent)
- **Attributes** `DisallowMultipleComponent`, `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AdditionalStaticContent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isbaking" /><code>{"static bool IsBaking"}</code> | Static flag set during baking, which stops the editor gizmo preview. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mtransform" /><code>{"private Transform mTransform"}</code> | Backing field for `Transform`. |
| <Link id="m-needstoinstantiate" /><code>{"private bool needsToInstantiate"}</code> | Whether clients should spawn the content. Saved. |
| <Link id="m-staticcontent" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/additionalstaticcontent-staticcontent">{"AdditionalStaticContent.StaticContent"}</Link>{"[] staticContent"}</code> | The prefabs to spawn, with their local transforms. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the content flag. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | Cached transform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the method sync for the content flag. |
| <Link id="m-instantiatecontent" /><code>{"void InstantiateContent(Transform parent, HideFlags hideFlags = 0)"}</code> | Instantiates every configured prefab under the parent with its local position, rotation and scale. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the content flag to the joining player. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatecontenteditor" /><code>{"private void InstantiateContentEditor()"}</code> | Empty in this build. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor preview hook. Does nothing in this build. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync body for `needsToInstantiate`. Clients and local test spawn the content when the flag is set. |

</details>
