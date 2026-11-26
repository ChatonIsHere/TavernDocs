---
title: "EmbedArguments"
description: "Network state of an Embeddable item: whether it is stuck in something and where, or its scale when free."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbedArguments

A **class** in `Root.Township`, the global namespace.

Network state of an `Embeddable` item: whether it is stuck in something and where, or its scale when free.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbedArguments(bool isEmbedded, Vector3 embedPosition, Quaternion embedRotation, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" connected, int rigidbodyIndex, float scale)"}</code> | Creates an `EmbedArguments` with default values. |
| <Link id="m-ctor-2" /><code>{"EmbedArguments()"}</code> | Creates an `EmbedArguments` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hasother" /><code>{"bool hasOther"}</code> | True when embedded in another entity rather than the world. |
| <Link id="m-isembedded" /><code>{"bool isEmbedded"}</code> | True when the item is stuck in something. |
| <Link id="m-other" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" other"}</code> | The entity it is embedded in, if any. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Embed position. |
| <Link id="m-rigidbodyindex" /><code>{"int rigidbodyIndex"}</code> | Which rigidbody of the other entity it is attached to. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Embed rotation. |
| <Link id="m-scale" /><code>{"float scale"}</code> | The item's scale. Only sent when not embedded. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the state on a network stream. |

## Used in

Members of other types that take, return or hold a `EmbedArguments`:

[`Embeddable.GetSyncArgs`](/mod/game-api/types/global-e-h/embeddable#m-getsyncargs), [`Embeddable.syncEmbed`](/mod/game-api/types/global-e-h/embeddable#m-syncembed), [`Embeddable.SyncEmbed`](/mod/game-api/types/global-e-h/embeddable#m-syncembed-2).
