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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ModificationArguments(uint objectHash, bool isModified)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismodified" /><code>{"private bool isModified"}</code> | Backing field for `IsModified`. |
| <Link id="m-objecthash" /><code>{"private uint objectHash"}</code> | Backing field for `ObjectHash`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismodified-2" /><code>{"bool IsModified { get; }"}</code> | Whether the object is now modified. |
| <Link id="m-objecthash-2" /><code>{"uint ObjectHash { get; }"}</code> | Hash that identifies the static object. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the hash and flag on the stream. |

## Used in

Members of other types that take, return or hold a `ModificationArguments`:

[`ModifiableStaticManager.syncModification`](/game-api/types/alta-networking/modifiablestaticmanager#m-syncmodification), [`ModifiableStaticManager.SyncModification`](/game-api/types/alta-networking/modifiablestaticmanager#m-syncmodification-2).
