---
title: "NetworkEntityParent"
description: "class NetworkEntityParent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityParent

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`NetworkPrefab`](/game-api/types/alta-networking/networkprefab), [`NetworkScene`](/game-api/types/alta-networking/networkscene)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkEntityParent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-embeddedentities" /><code>{"protected List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> embeddedEntities"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-nextsceneentityid" /><code>{"private int nextSceneEntityId"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-embedded" /><code>{"List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Embedded { get; }"}</code> |  |
| <Link id="m-isembeddedupdated" /><code>{"bool IsEmbeddedUpdated { get; set; }"}</code> |  |
| <Link id="m-nextembeddedentityid" /><code>{"private int NextEmbeddedEntityId { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"virtual void OnValidate()"}</code> |  |
| <Link id="m-registerembeddedentity" /><code>{"void RegisterEmbeddedEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-findduplicatehashes" /><code>{"protected void FindDuplicateHashes()"}</code> |  |
| <Link id="m-updateentityembeddedids" /><code>{"protected virtual void UpdateEntityEmbeddedIds()"}</code> |  |
