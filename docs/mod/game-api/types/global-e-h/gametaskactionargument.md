---
title: "GameTaskActionArgument"
description: "Describes one action a player did, reported to GameTaskManager to update GameAction counts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTaskActionArgument

A **class** in `Root.Township`, the global namespace.

Describes one action a player did, reported to `GameTaskManager` to update `GameAction` counts. Subclasses add details and pick a channel.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Derived types** [`DestroyActionArgument`](/mod/game-api/types/global-c-d/destroyactionargument), [`DockObjectTaskArgument`](/mod/game-api/types/global-c-d/dockobjecttaskargument), [`EatingAmountArgument`](/mod/game-api/types/global-e-h/eatingamountargument), [`FinishSpawnProjectTaskArgument`](/mod/game-api/types/global-e-h/finishspawnprojecttaskargument), [`HandTouchTaskArgument`](/mod/game-api/types/global-e-h/handtouchtaskargument), [`MaxValueTaskArgument`](/mod/game-api/types/global-m-o/maxvaluetaskargument), [`SpecificCraftTaskArgument`](/mod/game-api/types/global-s/specificcrafttaskargument), [`SpecificSpawnItemTaskArgument`](/mod/game-api/types/global-s/specificspawnitemtaskargument), [`TransferAmountArgument`](/mod/game-api/types/global-t-x/transferamountargument)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameTaskActionArgument()"}</code> | <span className="api-desc">Creates a `GameTaskActionArgument` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-default" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" Default"}</code> | <span className="api-desc">Shared plain argument with a count of 1.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"virtual "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | <span className="api-desc">The action channel. `General` for the base class.</span> |
| <Link id="m-count" /><code>{"int Count { get; protected set; }"}</code> | <span className="api-desc">How many times the action happened. Default 1.</span> |

## Used in

Members of other types that take, return or hold a `GameTaskActionArgument`:

<div className="api-used-in">

[`CustomArgumentGameAction<T>.IsValid`](/mod/game-api/types/global-c-d/customargumentgameaction-t#m-isvalid), [`GameAction.IsValid`](/mod/game-api/types/global-e-h/gameaction#m-isvalid), [`GameActionStat.IsValid`](/mod/game-api/types/global-e-h/gameactionstat#m-isvalid), [`GameTaskManager.ActionExecuted`](/mod/game-api/types/global-e-h/gametaskmanager#m-actionexecuted), [`GameTaskManager.InternalActionExecute`](/mod/game-api/types/global-e-h/gametaskmanager#m-internalactionexecute), [`HashSetAction<T>.IsValid`](/mod/game-api/types/global-e-h/hashsetaction-t#m-isvalid).

</div>
