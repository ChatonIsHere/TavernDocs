---
title: "BubbleInspectorFieldAttribute"
description: "Marks a field or property to show in the in-game bubble inspector, read by BubbleInspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BubbleInspectorFieldAttribute

A **class** in `Root.Township`, the global namespace.

Marks a field or property to show in the in-game bubble inspector, read by `BubbleInspector`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BubbleInspectorFieldAttribute("}<Link to="/mod/game-api/types/global-i-l/interactiontype">{"InteractionType"}</Link>{" interaction = 0)"}</code> | <span className="api-desc">Creates a `BubbleInspectorFieldAttribute` from `interaction`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interaction" /><code><Link to="/mod/game-api/types/global-i-l/interactiontype">{"InteractionType"}</Link>{" Interaction { get; }"}</code> | <span className="api-desc">How the value can be interacted with in the bubble (`InteractionType.None` by default).</span> |
