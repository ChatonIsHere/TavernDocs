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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerEventStep`](/mod/game-api/types/game-other-namespaces/playereventstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabInPositionStep()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-requiredeventtypes" /><code>{"private static readonly Type[] requiredEventTypes"}</code> | <span className="api-desc">Backing array for `RequiredPlayerEventTypes`.</span> |
| <Link id="m-validprefabs" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] validPrefabs"}</code> | <span className="api-desc">Prefabs that complete the step when placed in the trigger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requiredplayereventtypes" /><code>{"override IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> | <span className="api-desc">Only `PrefabInPositionEvent`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"override bool IsCompletedByEvent("}<Link to="/mod/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | <span className="api-desc">True for a `PrefabInPositionEvent` whose prefab hash matches a listed prefab.</span> |
| <Link id="m-isconfigurationvalid" /><code>{"override IResult IsConfigurationValid()"}</code> | <span className="api-desc">Checks dynamic content and prefabs. The prefab check is inverted, so a filled list reports an error.</span> |
