---
title: "PrefabInPositionObserver"
description: "Trigger placed in a step's dynamic content."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabInPositionObserver

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Trigger placed in a step's dynamic content. Server: broadcasts `PrefabInPositionEvent` for the domain's player when a network prefab enters it.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabInPositionObserver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-domain" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain"}</code> | <span className="api-desc">The parent tutorial domain, found on first trigger.</span> |
| <Link id="m-eventbus" /><code>{"private static IEventBus eventBus"}</code> | <span className="api-desc">Backing field for `EventBus`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-logprefix" /><code>{"private const string LogPrefix"}</code> | <span className="api-desc">Prefix for log lines.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventbus-2" /><code>{"private static IEventBus EventBus { get; }"}</code> | <span className="api-desc">The township event bus, fetched lazily and shared by all observers.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Server: finds the entering collider's `NetworkPrefab` and broadcasts the event for the domain's player.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Disables the component on clients.</span> |

</details>
