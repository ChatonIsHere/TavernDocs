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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerEventStep`](/mod/game-api/types/game-other-namespaces/playereventstep)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemCraftedStep()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingparts" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{"> craftingParts"}</code> | <span className="api-desc">Parts that count; crafting anything that uses one completes the step.</span> |
| <Link id="m-requiredeventtypes" /><code>{"private static readonly Type[] requiredEventTypes"}</code> | <span className="api-desc">Backing array for `RequiredPlayerEventTypes`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-requiredplayereventtypes" /><code>{"override IEnumerable<Type> RequiredPlayerEventTypes { get; }"}</code> | <span className="api-desc">Only `ItemCraftedEvent`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iscompletedbyevent" /><code>{"override bool IsCompletedByEvent("}<Link to="/mod/game-api/types/game-other-namespaces/iplayerevent">{"IPlayerEvent"}</Link>{" eventInfo)"}</code> | <span className="api-desc">True for an `ItemCraftedEvent` with more than one part where any part hash matches a listed part.</span> |
| <Link id="m-isconfigurationvalid" /><code>{"override IResult IsConfigurationValid()"}</code> | <span className="api-desc">Errors if no crafting parts are set.</span> |
