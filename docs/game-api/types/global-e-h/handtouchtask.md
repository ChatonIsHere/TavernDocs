---
title: "HandTouchTask"
description: "Game task action that completes when a player touches one of the listed prefabs with a hand (raised by HandHoverPoint)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandTouchTask

A **class** in `Root.Township`, no namespace.

Game task action that completes when a player touches one of the listed prefabs with a hand (raised by `HandHoverPoint`).

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`CustomArgumentGameAction<HandTouchTaskArgument>`](/game-api/types/global-c-d/customargumentgameaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandTouchTask()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targethashes" /><code>{"private List<uint> targetHashes"}</code> | Prefab hashes that count for this task. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `GameActionChannel.HandTouch`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-e-h/handtouchtaskargument">{"HandTouchTaskArgument"}</Link>{" argument)"}</code> | True if the touched prefab hash is in `targetHashes`. |
