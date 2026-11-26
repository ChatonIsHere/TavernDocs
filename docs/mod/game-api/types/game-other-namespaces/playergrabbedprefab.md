---
title: "PlayerGrabbedPrefab"
description: "Micro tutorial step that completes when the player grabs a given prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerGrabbedPrefab

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Micro tutorial step that completes when the player grabs a given prefab.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerEventStep`](/mod/game-api/types/game-other-namespaces/playereventstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerGrabbedPrefab()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefabtograb" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToGrab"}</code> | The prefab the player has to pick up. |
| <Link id="m-requiredeventtypes" /><code>{"private static readonly Type[] requiredEventTypes"}</code> | Backing array for `RequiredPlayerEventTypes`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requiredplayereventtypes" /><code>{"override IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> | Only `PlayerGrabbedPrefabEvent`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"override bool IsCompletedByEvent("}<Link to="/mod/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | True for a `PlayerGrabbedPrefabEvent` whose prefab hash matches `prefabToGrab`. |
| <Link id="m-isconfigurationvalid" /><code>{"override IResult IsConfigurationValid()"}</code> | Errors if no prefab is set. |
