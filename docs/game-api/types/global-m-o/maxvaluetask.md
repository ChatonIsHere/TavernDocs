---
title: "MaxValueTask"
description: "Game task asset (Game Tasks/Max Value Object) that keeps the highest value it has been sent, on the MaxCount channel."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaxValueTask

A **class** in `Root.Township`, no namespace.

Game task asset (`Game Tasks/Max Value Object`) that keeps the highest value it has been sent, on the `MaxCount` channel.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`CustomArgumentGameAction<MaxValueTaskArgument>`](/game-api/types/global-c-d/customargumentgameaction-t)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MaxValueTask()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"override "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Always `MaxCount`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivenewvalue" /><code>{"override int ReceiveNewValue(int currentValue, int newValue)"}</code> | Returns the larger of the current and new value. |
| <Link id="m-isvalid" /><code>{"protected override bool IsValid("}<Link to="/game-api/types/global-m-o/maxvaluetaskargument">{"MaxValueTaskArgument"}</Link>{" argument)"}</code> | Always true. |
