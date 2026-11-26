---
title: "PrefabInPositionStep"
description: "Micro tutorial step that completes when one of the listed prefabs enters a PrefabInPositionObserver in its dynamic content."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabInPositionStep

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Micro tutorial step that completes when one of the listed prefabs enters a `PrefabInPositionObserver` in its dynamic content.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerEventStep`](/game-api/types/game-other-namespaces/playereventstep)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PrefabInPositionStep()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-requiredeventtypes" /><code>{"private static readonly Type[] requiredEventTypes"}</code> | Backing array for `RequiredPlayerEventTypes`. |
| <Link id="m-validprefabs" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] validPrefabs"}</code> | Prefabs that complete the step when placed in the trigger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requiredplayereventtypes" /><code>{"override IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> | Only `PrefabInPositionEvent`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"override bool IsCompletedByEvent("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | True for a `PrefabInPositionEvent` whose prefab hash matches a listed prefab. |
| <Link id="m-isconfigurationvalid" /><code>{"override IResult IsConfigurationValid()"}</code> | Checks dynamic content and prefabs. The prefab check is inverted, so a filled list reports an error. |
