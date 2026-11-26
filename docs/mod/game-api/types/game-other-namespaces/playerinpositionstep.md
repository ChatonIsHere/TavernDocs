---
title: "PlayerInPositionStep"
description: "Micro tutorial step that completes when a PlayerInPositionObserver in its dynamic content reports the player in place."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInPositionStep

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Micro tutorial step that completes when a `PlayerInPositionObserver` in its dynamic content reports the player in place.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerEventStep`](/mod/game-api/types/game-other-namespaces/playereventstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInPositionStep()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-requiredeventtypes" /><code>{"private static readonly Type[] requiredEventTypes"}</code> | Backing array for `RequiredPlayerEventTypes`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requiredplayereventtypes" /><code>{"override IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> | Only `PlayerInPositionEvent`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"override bool IsCompletedByEvent("}<Link to="/mod/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | True for any `PlayerInPositionEvent`. |
| <Link id="m-isconfigurationvalid" /><code>{"override IResult IsConfigurationValid()"}</code> | Errors if the step has no dynamic content. |
