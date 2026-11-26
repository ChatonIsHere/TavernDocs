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
| <Link id="m-ctor" /><code>{"DestroyedEventCaller()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity passed to the callback. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-callback" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> Callback"}</code> | Raised with the entity when it is destroyed, except while the app is quitting. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attachto" /><code>{"static void AttachTo("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" target, Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> callback)"}</code> | Adds the component to the entity if needed and subscribes the callback. |
| <Link id="m-detach" /><code>{"static void Detach("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" target, Action<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> callback)"}</code> | Unsubscribes the callback. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Raises `Callback` unless the app is quitting. |

</details>
