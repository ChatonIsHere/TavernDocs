---
title: "ModifiableAdditionalStaticContent"
description: "Network entity that adds a ModifiableStaticObject on top of the baked static world and lets it be modified or restored."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifiableAdditionalStaticContent

A **class** in `Root.Township`, the global namespace.

Network entity that adds a `ModifiableStaticObject` on top of the baked static world and lets it be modified or restored. Saves its hash and whether it is created at runtime.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ModifiableAdditionalStaticContentSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ModifiableAdditionalStaticContentSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IAdditionalStaticContent`](/mod/game-api/types/global-i-l/iadditionalstaticcontent)
- **Derived types** [`ModifiableAdditionalStaticContentSaveData`](/mod/game-api/types/global-m-o/modifiableadditionalstaticcontentsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableAdditionalStaticContent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/modifiablestaticobject">{"ModifiableStaticObject"}</Link>{" basePrefab"}</code> | Prefab of the modifiable static object to create. |
| <Link id="m-instantiated" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/modifiablestaticobject">{"ModifiableStaticObject"}</Link>{" instantiated"}</code> | Meant to hold the created instance, but nothing assigns it in this build, so modify and restore do nothing for runtime-created content. |
| <Link id="m-issettingtounmodifiedoninitialize" /><code>{"private bool isSettingToUnmodifiedOnInitialize"}</code> | If true, the server restores the content when the entity is first set up. |
| <Link id="m-modifiablehash" /><code>{"private uint modifiableHash"}</code> | Hash that ties this content to its modification state. Filled in when saved in the editor. |
| <Link id="m-mtransform" /><code>{"private Transform mTransform"}</code> | Backing field for `Transform`. |
| <Link id="m-needstoinstantiate" /><code>{"private bool needsToInstantiate"}</code> | True if the content is created at runtime rather than baked in. Set to false when saved in the editor. |
| <Link id="m-syncinstantiate" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncInstantiate"}</code> | Method sync used to tell clients to create the content. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | Cached transform of this object. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the instantiate sync and creates the content, except on Android. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: restores the content to unmodified if `isSettingToUnmodifiedOnInitialize` is set. |
| <Link id="m-instantiatecontent" /><code>{"void InstantiateContent(Transform parent, HideFlags hideFlags = 0)"}</code> | Creates the base prefab under a parent and gives it this entity's modifiable hash. |
| <Link id="m-modify" /><code>{"void Modify()"}</code> | Marks the content as modified, through `ModifiableStaticManager` if it was baked in, or on the created instance otherwise. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | On a simple server, tells a joining player to create the content if it is runtime-created. |
| <Link id="m-unmodify" /><code>{"void Unmodify()"}</code> | Restores the content to unmodified, through `ModifiableStaticManager` or on the created instance. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncinstantiate-2" /><code>{"private void SyncInstantiate("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Message handler: remote clients create the content when they receive it. |

</details>
