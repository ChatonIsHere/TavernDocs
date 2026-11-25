---
title: "NetworkEntityParent"
description: "Base of NetworkPrefab and NetworkScene."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityParent

A **class** in `Root.Township`, `Alta.Networking`.

Base of `NetworkPrefab` and `NetworkScene`. Holds the list of child network entities embedded in it, and gives each an `EmbeddedId` equal to its index.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`NetworkPrefab`](/game-api/types/alta-networking/networkprefab), [`NetworkScene`](/game-api/types/alta-networking/networkscene)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkEntityParent()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-embeddedentities" /><code>{"protected List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities"}</code> |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-nextsceneentityid" /><code>{"private int nextSceneEntityId"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Embedded { get; }"}</code> | Child entities embedded in this prefab or scene. An entity's `EmbeddedId` is its index here. |
| <Link id="m-isembeddedupdated" /><code>{"bool IsEmbeddedUpdated { get; set; }"}</code> | Set once embedded ids are assigned, so play mode doesn't redo it. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-nextembeddedentityid" /><code>{"private int NextEmbeddedEntityId { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"virtual void OnValidate()"}</code> | Editor only: refreshes embedded ids and walks child entities whose nearest parent is this one. |
| <Link id="m-registerembeddedentity" /><code>{"void RegisterEmbeddedEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Empty in this build, so `OnValidate` doesn't actually add anything. |
| <Link id="m-findduplicatehashes" /><code>{"protected void FindDuplicateHashes()"}</code> | Empty in this build. |
| <Link id="m-updateentityembeddedids" /><code>{"protected virtual void UpdateEntityEmbeddedIds()"}</code> | Removes null or self entries from the list and sets each entity's `EmbeddedId` to its index. |
