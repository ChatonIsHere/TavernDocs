---
title: "GameTaskActionArgument"
description: "Describes one action a player did, reported to GameTaskManager to update GameAction counts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTaskActionArgument

A **class** in `Root.Township`, no namespace.

Describes one action a player did, reported to `GameTaskManager` to update `GameAction` counts. Subclasses add details and pick a channel.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Derived types** [`DestroyActionArgument`](/game-api/types/global-c-d/destroyactionargument), [`DockObjectTaskArgument`](/game-api/types/global-c-d/dockobjecttaskargument), [`EatingAmountArgument`](/game-api/types/global-e-h/eatingamountargument), [`FinishSpawnProjectTaskArgument`](/game-api/types/global-e-h/finishspawnprojecttaskargument), [`HandTouchTaskArgument`](/game-api/types/global-e-h/handtouchtaskargument), [`MaxValueTaskArgument`](/game-api/types/global-m-o/maxvaluetaskargument), [`SpecificCraftTaskArgument`](/game-api/types/global-s/specificcrafttaskargument), [`SpecificSpawnItemTaskArgument`](/game-api/types/global-s/specificspawnitemtaskargument), [`TransferAmountArgument`](/game-api/types/global-t-x/transferamountargument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameTaskActionArgument()"}</code> | Creates a `GameTaskActionArgument` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-default" /><code>{"static "}<Link to="/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" Default"}</code> | Shared plain argument with a count of 1. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"virtual "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | The action channel. `General` for the base class. |
| <Link id="m-count" /><code>{"int Count { get; protected set; }"}</code> | How many times the action happened. Default 1. |

## Used in

Members of other types that take, return or hold a `GameTaskActionArgument`:

[`CustomArgumentGameAction<T>.IsValid`](/game-api/types/global-c-d/customargumentgameaction-t#m-isvalid), [`GameAction.IsValid`](/game-api/types/global-e-h/gameaction#m-isvalid), [`GameActionStat.IsValid`](/game-api/types/global-e-h/gameactionstat#m-isvalid), [`GameTaskManager.ActionExecuted`](/game-api/types/global-e-h/gametaskmanager#m-actionexecuted), [`GameTaskManager.InternalActionExecute`](/game-api/types/global-e-h/gametaskmanager#m-internalactionexecute), [`HashSetAction<T>.IsValid`](/game-api/types/global-e-h/hashsetaction-t#m-isvalid).
