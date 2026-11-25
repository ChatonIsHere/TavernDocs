---
title: "AdditionalStaticContent"
description: "class AdditionalStaticContent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AdditionalStaticContent

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<AdditionalStaticContentSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<AdditionalStaticContentSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IAdditionalStaticContent`](/game-api/types/global-i-l/iadditionalstaticcontent)
- **Derived types** [`AdditionalStaticContentSaveData`](/game-api/types/global-a-b/additionalstaticcontentsavedata)
- **Nested types** [`StaticContent`](/game-api/types/global-a-b/additionalstaticcontent-staticcontent)
- **Attributes** `DisallowMultipleComponent`, `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AdditionalStaticContent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isbaking" /><code>{"static bool IsBaking"}</code> |  |
| <Link id="m-mtransform" /><code>{"private Transform mTransform"}</code> |  |
| <Link id="m-needstoinstantiate" /><code>{"private bool needsToInstantiate"}</code> |  |
| <Link id="m-staticcontent" /><code>{"private "}<Link to="/game-api/types/global-a-b/additionalstaticcontent-staticcontent">{"AdditionalStaticContent.StaticContent"}</Link>{"[] staticContent"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-instantiatecontent" /><code>{"void InstantiateContent(Transform parent, HideFlags hideFlags = 0)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-instantiatecontenteditor" /><code>{"private void InstantiateContentEditor()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
