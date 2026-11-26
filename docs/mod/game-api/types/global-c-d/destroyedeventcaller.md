---
title: "DestroyedEventCaller"
description: "Helper that lets code get a callback when a NetworkEntity's GameObject is destroyed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyedEventCaller

A **class** in `Root.Township`, the global namespace.

Helper that lets code get a callback when a `NetworkEntity`'s GameObject is destroyed. Added to the entity by `AttachTo`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DestroyedEventCaller()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity passed to the callback.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-callback" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Callback"}</code> | <span className="api-desc">Raised with the entity when it is destroyed, except while the app is quitting.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attachto" /><code>{"static void AttachTo("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" target, Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> callback)"}</code> | <span className="api-desc">Adds the component to the entity if needed and subscribes the callback.</span> |
| <Link id="m-detach" /><code>{"static void Detach("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" target, Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> callback)"}</code> | <span className="api-desc">Unsubscribes the callback.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Raises `Callback` unless the app is quitting.</span> |

</details>
