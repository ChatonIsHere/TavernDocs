---
title: "ModificationArguments"
description: "Message payload ModifiableStaticManager sends to chunks when a static scene object's modified state changes: the object's hash and whether it is modified."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModificationArguments

A **struct** in `Root.Township`, `Alta.Networking`.

Message payload `ModifiableStaticManager` sends to chunks when a static scene object's modified state changes: the object's hash and whether it is modified.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModificationArguments(uint objectHash, bool isModified)"}</code> | <span className="api-desc">Creates a `ModificationArguments` from `objectHash` and `isModified`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismodified" /><code>{"private bool isModified"}</code> | <span className="api-desc">Backing field for `IsModified`.</span> |
| <Link id="m-objecthash" /><code>{"private uint objectHash"}</code> | <span className="api-desc">Backing field for `ObjectHash`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismodified-2" /><code>{"bool IsModified { get; }"}</code> | <span className="api-desc">Whether the object is now modified.</span> |
| <Link id="m-objecthash-2" /><code>{"uint ObjectHash { get; }"}</code> | <span className="api-desc">Hash that identifies the static object.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the hash and flag on the stream.</span> |

## Used in

Members of other types that take, return or hold a `ModificationArguments`:

<div className="api-used-in">

[`ModifiableStaticManager.syncModification`](/mod/game-api/types/alta-networking/modifiablestaticmanager#m-syncmodification), [`ModifiableStaticManager.SyncModification`](/mod/game-api/types/alta-networking/modifiablestaticmanager#m-syncmodification-2).

</div>
