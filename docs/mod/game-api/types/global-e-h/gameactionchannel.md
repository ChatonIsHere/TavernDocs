---
title: "GameActionChannel"
description: "Channel a game action is filed under, such as destroying, crafting, repairing, docking, spawning, transferring or eating."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameActionChannel

An **enum** in `Root.Township`, the global namespace.

Channel a game action is filed under, such as destroying, crafting, repairing, docking, spawning, transferring or eating.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Values

| Member |
| --- |
| <Link id="m-craftitem" /><code>{"CraftItem = 1"}</code> |
| <Link id="m-destroyobject" /><code>{"DestroyObject = 0"}</code> |
| <Link id="m-dockobject" /><code>{"DockObject = 5"}</code> |
| <Link id="m-eatamount" /><code>{"EatAmount = 9"}</code> |
| <Link id="m-finishrepair" /><code>{"FinishRepair = 2"}</code> |
| <Link id="m-general" /><code>{"General = 3"}</code> |
| <Link id="m-handtouch" /><code>{"HandTouch = 4"}</code> |
| <Link id="m-maxcount" /><code>{"MaxCount = 6"}</code> |
| <Link id="m-spawnitem" /><code>{"SpawnItem = 7"}</code> |
| <Link id="m-transferamount" /><code>{"TransferAmount = 8"}</code> |

## Used in

Members of other types that take, return or hold a `GameActionChannel`:

[`DockPageTask.Channel`](/mod/game-api/types/alta-items/dockpagetask#m-channel), [`DestroyActionArgument.Channel`](/mod/game-api/types/global-c-d/destroyactionargument#m-channel), [`DestroyHealthObjectTask.Channel`](/mod/game-api/types/global-c-d/destroyhealthobjecttask#m-channel), [`DockObjectTask.Channel`](/mod/game-api/types/global-c-d/dockobjecttask#m-channel), [`DockObjectTaskArgument.Channel`](/mod/game-api/types/global-c-d/dockobjecttaskargument#m-channel), [`EatAmountTask.Channel`](/mod/game-api/types/global-e-h/eatamounttask#m-channel), [`EatingAmountArgument.Channel`](/mod/game-api/types/global-e-h/eatingamountargument#m-channel), [`FinishSpawnProjectTask.Channel`](/mod/game-api/types/global-e-h/finishspawnprojecttask#m-channel), [`FinishSpawnProjectTaskArgument.Channel`](/mod/game-api/types/global-e-h/finishspawnprojecttaskargument#m-channel), [`GameAction.Channel`](/mod/game-api/types/global-e-h/gameaction#m-channel), [`GameActionStat.Channel`](/mod/game-api/types/global-e-h/gameactionstat#m-channel), [`GameTaskActionArgument.Channel`](/mod/game-api/types/global-e-h/gametaskactionargument#m-channel), [`GameTaskManager.actionStatMap`](/mod/game-api/types/global-e-h/gametaskmanager#m-actionstatmap), [`HandTouchTask.Channel`](/mod/game-api/types/global-e-h/handtouchtask#m-channel), [`HandTouchTaskArgument.Channel`](/mod/game-api/types/global-e-h/handtouchtaskargument#m-channel), [`MaxValueTask.Channel`](/mod/game-api/types/global-m-o/maxvaluetask#m-channel), [`MaxValueTaskArgument.Channel`](/mod/game-api/types/global-m-o/maxvaluetaskargument#m-channel), [`SpecificCraftTask.Channel`](/mod/game-api/types/global-s/specificcrafttask#m-channel), [`SpecificCraftTaskArgument.Channel`](/mod/game-api/types/global-s/specificcrafttaskargument#m-channel), [`SpecificSpawnItemTask.Channel`](/mod/game-api/types/global-s/specificspawnitemtask#m-channel), [`SpecificSpawnItemTaskArgument.Channel`](/mod/game-api/types/global-s/specificspawnitemtaskargument#m-channel), [`TransferAmountArgument.Channel`](/mod/game-api/types/global-t-x/transferamountargument#m-channel), [`TransferAmountTask.Channel`](/mod/game-api/types/global-t-x/transferamounttask#m-channel).
