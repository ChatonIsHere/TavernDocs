---
title: "TriggerEnterEvents"
description: "Passes Unity trigger enter and exit callbacks on as events carrying the collider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerEnterEvents

A **class** in `Root.Township`, the global namespace.

Passes Unity trigger enter and exit callbacks on as events carrying the collider.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ColliderEvent`](/mod/game-api/types/global-t-x/triggerenterevents-colliderevent), [`ColliderUnityEvent`](/mod/game-api/types/global-t-x/triggerenterevents-colliderunityevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerEnterEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/triggerenterevents-colliderevent">{"TriggerEnterEvents.ColliderEvent"}</Link>{" onTriggerEnter"}</code> | <span className="api-desc">Event fired for each collider that enters.</span> |
| <Link id="m-ontriggerexit" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/triggerenterevents-colliderevent">{"TriggerEnterEvents.ColliderEvent"}</Link>{" onTriggerExit"}</code> | <span className="api-desc">Event fired for each collider that leaves.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter-2" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Invokes `onTriggerEnter` with the entering collider.</span> |
| <Link id="m-ontriggerexit-2" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Invokes `onTriggerExit` with the leaving collider.</span> |

</details>
