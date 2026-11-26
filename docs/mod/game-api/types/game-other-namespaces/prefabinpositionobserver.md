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
| <Link id="m-ctor" /><code>{"PrefabInPositionObserver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-domain" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/domain">{"Domain"}</Link>{" domain"}</code> | The parent tutorial domain, found on first trigger. |
| <Link id="m-eventbus" /><code>{"private static IEventBus eventBus"}</code> | Backing field for `EventBus`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-logprefix" /><code>{"private const string LogPrefix"}</code> | Prefix for log lines. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-eventbus-2" /><code>{"private static IEventBus EventBus { get; }"}</code> | The township event bus, fetched lazily and shared by all observers. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Server: finds the entering collider's `NetworkPrefab` and broadcasts the event for the domain's player. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Disables the component on clients. |

</details>
