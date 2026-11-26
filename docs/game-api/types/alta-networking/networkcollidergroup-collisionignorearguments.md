---
title: "NetworkColliderGroup.CollisionIgnoreArguments"
description: "Message payload a NetworkColliderGroup sends to chunks to make collisions with another entity be ignored or restored."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkColliderGroup.CollisionIgnoreArguments

A **private struct** in `Root.Township`, `Alta.Networking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message payload a `NetworkColliderGroup` sends to chunks to make collisions with another entity be ignored or restored.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested in** [`NetworkColliderGroup`](/game-api/types/alta-networking/networkcollidergroup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CollisionIgnoreArguments("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" otherEntity, bool isIgnoring)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isignoring" /><code>{"private bool isIgnoring"}</code> | Backing field for `IsIgnoring`. |
| <Link id="m-otheridentifier" /><code>{"private uint otherIdentifier"}</code> | Backing field for `OtherIdentifier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isignoring-2" /><code>{"bool IsIgnoring { get; }"}</code> | Whether collisions should be ignored (true) or restored (false). |
| <Link id="m-otheridentifier-2" /><code>{"uint OtherIdentifier { get; }"}</code> | Network identifier of the other entity. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the entity identifier and flag on the stream. |

## Used in

Members of other types that take, return or hold a `CollisionIgnoreArguments`:

[`NetworkColliderGroup.NetworkIgnoreCollision`](/game-api/types/alta-networking/networkcollidergroup#m-networkignorecollision), [`NetworkColliderGroup.syncIgnore`](/game-api/types/alta-networking/networkcollidergroup#m-syncignore).
