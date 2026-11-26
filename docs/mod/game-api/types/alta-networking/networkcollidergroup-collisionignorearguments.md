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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Nested in** [`NetworkColliderGroup`](/mod/game-api/types/alta-networking/networkcollidergroup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CollisionIgnoreArguments("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" otherEntity, bool isIgnoring)"}</code> | <span className="api-desc">Creates a `NetworkColliderGroup.CollisionIgnoreArguments` from `otherEntity` and `isIgnoring`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isignoring" /><code>{"private bool isIgnoring"}</code> | <span className="api-desc">Backing field for `IsIgnoring`.</span> |
| <Link id="m-otheridentifier" /><code>{"private uint otherIdentifier"}</code> | <span className="api-desc">Backing field for `OtherIdentifier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isignoring-2" /><code>{"bool IsIgnoring { get; }"}</code> | <span className="api-desc">Whether collisions should be ignored (true) or restored (false).</span> |
| <Link id="m-otheridentifier-2" /><code>{"uint OtherIdentifier { get; }"}</code> | <span className="api-desc">Network identifier of the other entity.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the entity identifier and flag on the stream.</span> |

## Used in

Members of other types that take, return or hold a `CollisionIgnoreArguments`:

<div className="api-used-in">

[`NetworkColliderGroup.NetworkIgnoreCollision`](/mod/game-api/types/alta-networking/networkcollidergroup#m-networkignorecollision), [`NetworkColliderGroup.syncIgnore`](/mod/game-api/types/alta-networking/networkcollidergroup#m-syncignore).

</div>
