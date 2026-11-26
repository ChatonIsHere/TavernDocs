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
| <Link id="m-ctor" /><code>{"AdditionalStaticContent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isbaking" /><code>{"static bool IsBaking"}</code> | <span className="api-desc">Static flag set during baking, which stops the editor gizmo preview.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mtransform" /><code>{"private Transform mTransform"}</code> | <span className="api-desc">Backing field for `Transform`.</span> |
| <Link id="m-needstoinstantiate" /><code>{"private bool needsToInstantiate"}</code> | <span className="api-desc">Whether clients should spawn the content. Saved.</span> |
| <Link id="m-staticcontent" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/additionalstaticcontent-staticcontent">{"AdditionalStaticContent.StaticContent"}</Link>{"[] staticContent"}</code> | <span className="api-desc">The prefabs to spawn, with their local transforms.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the content flag.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">Cached transform.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the method sync for the content flag.</span> |
| <Link id="m-instantiatecontent" /><code>{"void InstantiateContent(Transform parent, HideFlags hideFlags = 0)"}</code> | <span className="api-desc">Instantiates every configured prefab under the parent with its local position, rotation and scale.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the content flag to the joining player.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatecontenteditor" /><code>{"private void InstantiateContentEditor()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor preview hook. Does nothing in this build.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync body for `needsToInstantiate`. Clients and local test spawn the content when the flag is set.</span> |

</details>
