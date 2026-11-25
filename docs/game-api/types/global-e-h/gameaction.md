---
title: "GameAction"
description: "abstract class GameAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameAction

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`HashedGeneralValue<GameAction>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`CustomArgumentGameAction<T>`](/game-api/types/global-c-d/customargumentgameaction-t), [`GameAction`](/game-api/types/global-e-h/gameaction), [`GameActionStat`](/game-api/types/global-e-h/gameactionstat)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected GameAction()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-stattype" /><code>{"private "}<Link to="/game-api/types/global-s/stattype">{"StatType"}</Link>{" statType"}</code> |  |
| <Link id="m-targetsceneindex" /><code>{"private int targetSceneIndex"}</code> |  |
| <Link id="m-targetsceneindexes" /><code>{"private int[] targetSceneIndexes"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-channel" /><code>{"abstract "}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{" Channel { get; }"}</code> |  |
| <Link id="m-stattype-2" /><code><Link to="/game-api/types/global-s/stattype">{"StatType"}</Link>{" "}<Link to="/game-api/types/global-s/stattype">{"StatType"}</Link>{" { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-incrementvalue" /><code>{"event "}<Link to="/game-api/types/global-i-l/incrementstat">{"IncrementStat"}</Link>{" IncrementValue"}</code> |  |
| <Link id="m-valueupdate" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatestat">{"UpdateStat"}</Link>{" ValueUpdate"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-incrementforplayer" /><code>{"void IncrementForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-isvalid" /><code>{"abstract bool IsValid("}<Link to="/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> |  |
| <Link id="m-receivenewvalue" /><code>{"virtual int ReceiveNewValue(int currentValue, int newValue)"}</code> |  |
| <Link id="m-updateforplayer" /><code>{"void UpdateForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int value)"}</code> |  |
| <Link id="m-updateforplayer-2" /><code>{"void UpdateForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, float value)"}</code> |  |
| <Link id="m-validatescene" /><code>{"bool ValidateScene(int sceneIndex)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GameAction`:

[`DeadStateSettings.diedAction`](/game-api/types/alta-player/deadstatesettings#m-diedaction), [`DeadStateSettings.DiedAction`](/game-api/types/alta-player/deadstatesettings#m-diedaction-2), [`CustomizationStateSettings.finishCustomizationAction`](/game-api/types/game-other-namespaces/customizationstatesettings#m-finishcustomizationaction), [`CustomizationStateSettings.FinishCustomizationAction`](/game-api/types/game-other-namespaces/customizationstatesettings#m-finishcustomizationaction-2), [`GameTaskManager.actionStatMap`](/game-api/types/global-e-h/gametaskmanager#m-actionstatmap), [`GameTaskManager.ClearActionStatForPlayer`](/game-api/types/global-e-h/gametaskmanager#m-clearactionstatforplayer), [`GameTaskManager.IncrementForPlayer`](/game-api/types/global-e-h/gametaskmanager#m-incrementforplayer), [`GameTaskManager.UpdateForPlayer`](/game-api/types/global-e-h/gametaskmanager#m-updateforplayer), [`IncrementStat.BeginInvoke`](/game-api/types/global-i-l/incrementstat#m-begininvoke), [`IncrementStat.Invoke`](/game-api/types/global-i-l/incrementstat#m-invoke), [`PlayerTracker.CurrentActions`](/game-api/types/global-p/playertracker#m-currentactions), [`PlayerTracker.GetValue`](/game-api/types/global-p/playertracker#m-getvalue), [`PlayerTracker.statActions`](/game-api/types/global-p/playertracker#m-statactions), [`PlayerTracker.UpdateValue`](/game-api/types/global-p/playertracker#m-updatevalue), [`ProgressionSettings.levelUpAction`](/game-api/types/global-p/progressionsettings#m-levelupaction), [`ProgressionSettings.LevelUpAction`](/game-api/types/global-p/progressionsettings#m-levelupaction-2), [`StatReachedAchievement.targetStat`](/game-api/types/global-s/statreachedachievement#m-targetstat), [`StatReachedAchievement.TargetStat`](/game-api/types/global-s/statreachedachievement#m-targetstat-2), [`StatReachedAchievement.UpdateValue`](/game-api/types/global-s/statreachedachievement#m-updatevalue), [`UpdateStat.BeginInvoke`](/game-api/types/global-t-x/updatestat#m-begininvoke), [`UpdateStat.Invoke`](/game-api/types/global-t-x/updatestat#m-invoke).
