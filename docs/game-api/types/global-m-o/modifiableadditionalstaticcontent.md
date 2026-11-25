---
title: "ModifiableAdditionalStaticContent"
description: "class ModifiableAdditionalStaticContent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifiableAdditionalStaticContent

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ModifiableAdditionalStaticContentSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ModifiableAdditionalStaticContentSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IAdditionalStaticContent`](/game-api/types/global-i-l/iadditionalstaticcontent)
- **Derived types** [`ModifiableAdditionalStaticContentSaveData`](/game-api/types/global-m-o/modifiableadditionalstaticcontentsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableAdditionalStaticContent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baseprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/modifiablestaticobject">{"ModifiableStaticObject"}</Link>{" basePrefab"}</code> |  |
| <Link id="m-instantiated" /><code>{"private "}<Link to="/game-api/types/alta-networking/modifiablestaticobject">{"ModifiableStaticObject"}</Link>{" instantiated"}</code> |  |
| <Link id="m-issettingtounmodifiedoninitialize" /><code>{"private bool isSettingToUnmodifiedOnInitialize"}</code> |  |
| <Link id="m-modifiablehash" /><code>{"private uint modifiableHash"}</code> |  |
| <Link id="m-mtransform" /><code>{"private Transform mTransform"}</code> |  |
| <Link id="m-needstoinstantiate" /><code>{"private bool needsToInstantiate"}</code> |  |
| <Link id="m-syncinstantiate" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncInstantiate"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-instantiatecontent" /><code>{"void InstantiateContent(Transform parent, HideFlags hideFlags = 0)"}</code> |  |
| <Link id="m-modify" /><code>{"void Modify()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-unmodify" /><code>{"void Unmodify()"}</code> |  |
| <Link id="m-syncinstantiate-2" /><code>{"private void SyncInstantiate("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
