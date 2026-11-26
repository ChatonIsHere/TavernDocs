---
title: "GameAction"
description: "Asset for a tracked player action (docking an item, destroying something and so on) that feeds tasks and achievements."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameAction

An **abstract class** in `Root.Township`, the global namespace.

Asset for a tracked player action (docking an item, destroying something and so on) that feeds tasks and achievements. Server: `GameTaskManager` collects the ones valid for the current scene and counts them per player.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`HashedGeneralValue<GameAction>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`CustomArgumentGameAction<T>`](/mod/game-api/types/global-c-d/customargumentgameaction-t), [`GameAction`](/mod/game-api/types/global-e-h/gameaction), [`GameActionStat`](/mod/game-api/types/global-e-h/gameactionstat)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GameAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stattype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/stattype">{"StatType"}</Link>{" statType"}</code> | Backing field for `StatType`. |
| <Link id="m-targetsceneindex" /><code>{"private int targetSceneIndex"}</code> | Single scene index (-1 for all scenes). Not read anywhere; `ValidateScene` uses `targetSceneIndexes`. |
| <Link id="m-targetsceneindexes" /><code>{"private int[] targetSceneIndexes"}</code> | Scene indexes the action counts in. Empty means every scene. Read by `ValidateScene`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"abstract "}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> | Which kind of action this listens for. Only actions reported on this channel are checked. |
| <Link id="m-stattype-2" /><code><Link to="/mod/game-api/types/global-s/stattype">{"StatType"}</Link>{" "}<Link to="/mod/game-api/types/global-s/stattype">{"StatType"}</Link>{" { get; }"}</code> | The kind of stat this action tracks. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-incrementvalue" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/incrementstat">{"IncrementStat"}</Link>{" IncrementValue"}</code> | Raised by `IncrementForPlayer`. The task manager listens to it. |
| <Link id="m-valueupdate" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/updatestat">{"UpdateStat"}</Link>{" ValueUpdate"}</code> | Raised by `UpdateForPlayer`. The task manager listens to it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-incrementforplayer" /><code>{"void IncrementForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Adds one to this action's count for a player. |
| <Link id="m-isvalid" /><code>{"abstract bool IsValid("}<Link to="/mod/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> | Whether a reported action argument counts for this action. |
| <Link id="m-receivenewvalue" /><code>{"virtual int ReceiveNewValue(int currentValue, int newValue)"}</code> | Combines the current count with a new one. Adds them by default. |
| <Link id="m-updateforplayer" /><code>{"void UpdateForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int value)"}</code> | Sets this action's value for a player. |
| <Link id="m-updateforplayer-2" /><code>{"void UpdateForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, float value)"}</code> | Sets this action's value for a player. |
| <Link id="m-validatescene" /><code>{"bool ValidateScene(int sceneIndex)"}</code> | True if the action applies in the given scene index. An empty scene list means every scene. |

## Used in

Members of other types that take, return or hold a `GameAction`:

[`DeadStateSettings.diedAction`](/mod/game-api/types/alta-player/deadstatesettings#m-diedaction), [`DeadStateSettings.DiedAction`](/mod/game-api/types/alta-player/deadstatesettings#m-diedaction-2), [`CustomizationStateSettings.finishCustomizationAction`](/mod/game-api/types/game-other-namespaces/customizationstatesettings#m-finishcustomizationaction), [`CustomizationStateSettings.FinishCustomizationAction`](/mod/game-api/types/game-other-namespaces/customizationstatesettings#m-finishcustomizationaction-2), [`GameTaskManager.actionStatMap`](/mod/game-api/types/global-e-h/gametaskmanager#m-actionstatmap), [`GameTaskManager.ClearActionStatForPlayer`](/mod/game-api/types/global-e-h/gametaskmanager#m-clearactionstatforplayer), [`GameTaskManager.IncrementForPlayer`](/mod/game-api/types/global-e-h/gametaskmanager#m-incrementforplayer), [`GameTaskManager.UpdateForPlayer`](/mod/game-api/types/global-e-h/gametaskmanager#m-updateforplayer), [`IncrementStat.BeginInvoke`](/mod/game-api/types/global-i-l/incrementstat#m-begininvoke), [`IncrementStat.Invoke`](/mod/game-api/types/global-i-l/incrementstat#m-invoke), [`PlayerTracker.CurrentActions`](/mod/game-api/types/global-p/playertracker#m-currentactions), [`PlayerTracker.GetValue`](/mod/game-api/types/global-p/playertracker#m-getvalue), [`PlayerTracker.statActions`](/mod/game-api/types/global-p/playertracker#m-statactions), [`PlayerTracker.UpdateValue`](/mod/game-api/types/global-p/playertracker#m-updatevalue), [`ProgressionSettings.levelUpAction`](/mod/game-api/types/global-p/progressionsettings#m-levelupaction), [`ProgressionSettings.LevelUpAction`](/mod/game-api/types/global-p/progressionsettings#m-levelupaction-2), [`StatReachedAchievement.targetStat`](/mod/game-api/types/global-s/statreachedachievement#m-targetstat), [`StatReachedAchievement.TargetStat`](/mod/game-api/types/global-s/statreachedachievement#m-targetstat-2), [`StatReachedAchievement.UpdateValue`](/mod/game-api/types/global-s/statreachedachievement#m-updatevalue), [`UpdateStat.BeginInvoke`](/mod/game-api/types/global-t-x/updatestat#m-begininvoke), [`UpdateStat.Invoke`](/mod/game-api/types/global-t-x/updatestat#m-invoke).
