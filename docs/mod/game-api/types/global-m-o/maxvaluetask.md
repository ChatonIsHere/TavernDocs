---
title: "MaxValueTask"
description: "Game task asset (Game Tasks/Max Value Object) that keeps the highest value it has been sent, on the MaxCount channel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaxValueTask

A **class** in `Root.Township`, the global namespace.

Game task asset (`Game Tasks/Max Value Object`) that keeps the highest value it has been sent, on the `MaxCount` channel.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`CustomArgumentGameAction<MaxValueTaskArgument>`](/mod/game-api/types/global-c-d/customargumentgameaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaxValueTask()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">Always `MaxCount`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivenewvalue" /><code>{"override int ReceiveNewValue(int currentValue, int newValue)"}</code> | <span className="api-desc">Returns the larger of the current and new value.</span> |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/mod/game-api/types/global-m-o/maxvaluetaskargument">{"MaxValueTaskArgument"}</Link>{" argument)"}</code> | <span className="api-desc">Always true.</span> |
