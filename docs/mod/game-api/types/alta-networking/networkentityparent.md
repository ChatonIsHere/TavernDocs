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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`NetworkPrefab`](/mod/game-api/types/alta-networking/networkprefab), [`NetworkScene`](/mod/game-api/types/alta-networking/networkscene)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityParent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-embeddedentities" /><code>{"protected List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities"}</code> | <span className="api-desc">The child network entities embedded in this one, indexed by their embedded id. Backs `Embedded`.</span> |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nextsceneentityid" /><code>{"private int nextSceneEntityId"}</code> | <span className="api-desc">Counter behind `NextEmbeddedEntityId`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Embedded { get; }"}</code> | <span className="api-desc">Child entities embedded in this prefab or scene. An entity's `EmbeddedId` is its index here.</span> |
| <Link id="m-isembeddedupdated" /><code>{"bool IsEmbeddedUpdated { get; set; }"}</code> | <span className="api-desc">Set once embedded ids are assigned, so play mode doesn't redo it.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nextembeddedentityid" /><code>{"private int NextEmbeddedEntityId { get; }"}</code> | <span className="api-desc">Returns the next embedded id and increments it. Not called anywhere.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"virtual void OnValidate()"}</code> | <span className="api-desc">Editor only: refreshes embedded ids and walks child entities whose nearest parent is this one.</span> |
| <Link id="m-registerembeddedentity" /><code>{"void RegisterEmbeddedEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Empty in this build, so `OnValidate` doesn't actually add anything.</span> |
| <Link id="m-findduplicatehashes" /><code>{"protected void FindDuplicateHashes()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-updateentityembeddedids" /><code>{"protected virtual void UpdateEntityEmbeddedIds()"}</code> | <span className="api-desc">Removes null or self entries from the list and sets each entity's `EmbeddedId` to its index.</span> |
