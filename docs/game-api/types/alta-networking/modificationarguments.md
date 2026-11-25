---
title: "ModificationArguments"
description: "struct ModificationArguments in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModificationArguments

A **struct** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ModificationArguments(uint objectHash, bool isModified)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-ismodified" /><code>{"private bool isModified"}</code> |
| <Link id="m-objecthash" /><code>{"private uint objectHash"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-ismodified-2" /><code>{"bool IsModified { get; }"}</code> |
| <Link id="m-objecthash-2" /><code>{"uint ObjectHash { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

## Used in

Members of other types that take, return or hold a `ModificationArguments`:

[`ModifiableStaticManager.syncModification`](/game-api/types/alta-networking/modifiablestaticmanager#m-syncmodification), [`ModifiableStaticManager.SyncModification`](/game-api/types/alta-networking/modifiablestaticmanager#m-syncmodification-2).
