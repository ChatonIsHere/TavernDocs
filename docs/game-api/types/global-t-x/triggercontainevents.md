---
title: "TriggerContainEvents"
description: "Fires an event when the first collider enters its trigger and another when the last one leaves, with an optional layer filter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerContainEvents

A **class** in `Root.Township`, no namespace.

Fires an event when the first collider enters its trigger and another when the last one leaves, with an optional layer filter.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerContainEvents()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containedcolliders" /><code>{"private HashSet<Collider> containedColliders"}</code> | Colliders currently inside the trigger. |
| <Link id="m-haslayerfilter" /><code>{"private bool hasLayerFilter"}</code> | Whether `layerFilter` is applied. |
| <Link id="m-layerfilter" /><code>{"private LayerMask layerFilter"}</code> | Layers that count. Empty means every layer. |
| <Link id="m-onempty" /><code>{"private UnityEvent onEmpty"}</code> | Event fired when the last collider leaves. |
| <Link id="m-onenter" /><code>{"private UnityEvent onEnter"}</code> | Event fired when the first collider enters. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Turns the layer filter on only if a mask is set. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Clears the contained colliders and fires `onEmpty` if any were inside. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Adds a matching collider and fires `onEnter` if it is the first one. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Removes a matching collider and fires `onEmpty` if none are left. |

</details>
