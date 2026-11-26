---
title: "TriggerContainEvents"
description: "Fires an event when the first collider enters its trigger and another when the last one leaves, with an optional layer filter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerContainEvents

A **class** in `Root.Township`, the global namespace.

Fires an event when the first collider enters its trigger and another when the last one leaves, with an optional layer filter.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerContainEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containedcolliders" /><code>{"private HashSet<Collider> containedColliders"}</code> | <span className="api-desc">Colliders currently inside the trigger.</span> |
| <Link id="m-haslayerfilter" /><code>{"private bool hasLayerFilter"}</code> | <span className="api-desc">Whether `layerFilter` is applied.</span> |
| <Link id="m-layerfilter" /><code>{"private LayerMask layerFilter"}</code> | <span className="api-desc">Layers that count. Empty means every layer.</span> |
| <Link id="m-onempty" /><code>{"private UnityEvent onEmpty"}</code> | <span className="api-desc">Event fired when the last collider leaves.</span> |
| <Link id="m-onenter" /><code>{"private UnityEvent onEnter"}</code> | <span className="api-desc">Event fired when the first collider enters.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Turns the layer filter on only if a mask is set.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Clears the contained colliders and fires `onEmpty` if any were inside.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Adds a matching collider and fires `onEnter` if it is the first one.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Removes a matching collider and fires `onEmpty` if none are left.</span> |

</details>
