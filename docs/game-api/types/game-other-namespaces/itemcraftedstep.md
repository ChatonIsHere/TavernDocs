---
title: "ItemCraftedStep"
description: "Micro tutorial step that completes when the player crafts an item using one of the listed crafting parts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemCraftedStep

A **class** in `Root.Township`, `ATT.MicroTutorial.Steps`.

Micro tutorial step that completes when the player crafts an item using one of the listed crafting parts.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerEventStep`](/game-api/types/game-other-namespaces/playereventstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemCraftedStep()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingparts" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> craftingParts"}</code> | Parts that count; crafting anything that uses one completes the step. |
| <Link id="m-requiredeventtypes" /><code>{"private static readonly Type[] requiredEventTypes"}</code> | Backing array for `RequiredPlayerEventTypes`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requiredplayereventtypes" /><code>{"override IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> | Only `ItemCraftedEvent`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"override bool IsCompletedByEvent("}<Link to="/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | True for an `ItemCraftedEvent` with more than one part where any part hash matches a listed part. |
| <Link id="m-isconfigurationvalid" /><code>{"override IResult IsConfigurationValid()"}</code> | Errors if no crafting parts are set. |
