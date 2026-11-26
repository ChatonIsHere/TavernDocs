---
title: "UnchunkedEffectPlayer"
description: "Lets an effect object leave normal chunking: on the server it stops being saved and moves to the global chunk whenever it has no parent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnchunkedEffectPlayer

A **class** in `Root.Township`, the global namespace.

Lets an effect object leave normal chunking: on the server it stops being saved and moves to the global chunk whenever it has no parent.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnchunkedEffectPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onplay" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" onPlay"}</code> | <span className="api-desc">Position event fired by `Play`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gounchunked" /><code>{"void GoUnchunked()"}</code> | <span className="api-desc">Server: marks the prefab as not saved, moves the entity to the global chunk if it has no chunking parent, and watches parent changes.</span> |
| <Link id="m-play" /><code>{"void Play()"}</code> | <span className="api-desc">Invokes `onPlay` with this object's position.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateparent" /><code>{"private void UpdateParent("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" oldParent, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newParent)"}</code> | <span className="api-desc">Moves the entity back to the global chunk when it loses its parent.</span> |

</details>
