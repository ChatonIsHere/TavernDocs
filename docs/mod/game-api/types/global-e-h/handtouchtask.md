---
title: "HandTouchTask"
description: "Game task action that completes when a player touches one of the listed prefabs with a hand (raised by HandHoverPoint)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandTouchTask

A **class** in `Root.Township`, the global namespace.

Game task action that completes when a player touches one of the listed prefabs with a hand (raised by `HandHoverPoint`).

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`CustomArgumentGameAction<HandTouchTaskArgument>`](/mod/game-api/types/global-c-d/customargumentgameaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandTouchTask()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targethashes" /><code>{"private List<uint> targetHashes"}</code> | <span className="api-desc">Prefab hashes that count for this task.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Always `GameActionChannel.HandTouch`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/mod/game-api/types/global-e-h/handtouchtaskargument">{"HandTouchTaskArgument"}</Link>{" argument)"}</code> | <span className="api-desc">True if the touched prefab hash is in `targetHashes`.</span> |
