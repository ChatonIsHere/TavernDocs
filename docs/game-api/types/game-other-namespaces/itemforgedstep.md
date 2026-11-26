---
title: "ItemForgedStep"
description: "Micro tutorial step that completes when the player finishes forging one of the listed items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemForgedStep

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Micro tutorial step that completes when the player finishes forging one of the listed items.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerEventStep`](/game-api/types/game-other-namespaces/playereventstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemForgedStep()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-requiredeventtypes" /><code>{"private static readonly Type[] requiredEventTypes"}</code> | Backing array for `RequiredPlayerEventTypes`. |
| <Link id="m-validforgeditems" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"> validForgedItems"}</code> | Prefabs that count as a valid forged result. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requiredplayereventtypes" /><code>{"override IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> | Only `ItemForgedEvent`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"override bool IsCompletedByEvent("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | True for an `ItemForgedEvent` whose item hash matches a listed prefab. |
| <Link id="m-isconfigurationvalid" /><code>{"override IResult IsConfigurationValid()"}</code> | Errors if no forged items are set. |
