---
title: "GameTaskManager"
description: "Singleton behind achievements, action stats and micro tutorial completion."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTaskManager

A **class** in `Root.Township`, no namespace.

Singleton behind achievements, action stats and micro tutorial completion. The server keeps a tracker per player loaded from Alta's achievement service and syncs completed flags to that player. See the Other systems guide.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IAutoSave`](/game-api/types/global-i-l/iautosave)
- **Nested types** [`ProgressFlagSync`](/game-api/types/global-e-h/gametaskmanager-progressflagsync)
- **Documented in** [Other systems](/game-api/game-systems/other-systems#gametaskmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameTaskManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actionstatmap" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{", List<"}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{">> actionStatMap"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-playertrackers" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/global-p/playertracker">{"PlayerTracker"}</Link>{"> playerTrackers"}</code> |  |
| <Link id="m-syncinitialize" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncInitialize"}</code> |  |
| <Link id="m-syncprogressflagstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncProgressFlagStatus"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-e-h/gametaskmanager">{"GameTaskManager"}</Link>{" Instance { get; private set; }"}</code> | The manager in the scene. Extra copies destroy themselves. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-receivedsync" /><code>{"static event Action ReceivedSync"}</code> | Client: raised after the initial list of completed flags arrives. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-actionexecuted" /><code>{"static void ActionExecuted("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> | Reports a player action. Updates every matching game action for that player; errors are logged, not thrown. |
| <Link id="m-clearachievementforplayer" /><code>{"void ClearAchievementForPlayer(int userId, "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | Server: un-completes an achievement for a user id and resets its target stat, locally and in the achievement service. |
| <Link id="m-clearactionstatforplayer" /><code>{"void ClearActionStatForPlayer(int userId, "}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" action)"}</code> | Server: sets one action stat to 0 for a user id, locally and in the achievement service. |
| <Link id="m-clearallachievementsforplayer" /><code>{"void ClearAllAchievementsForPlayer(int userIdentifier)"}</code> | Server: resets every stat and achievement for a user id, online or not. |
| <Link id="m-incrementforplayer" /><code>{"void IncrementForPlayer("}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" gameTask, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: adds 1 to a game action's value for a player who has a tracker. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the initial flag sync and the single flag update sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Maps game actions valid for this scene by channel and hooks every achievement's completion. Registers for autosave. |
| <Link id="m-isachievementcompletedbyplayer" /><code>{"static bool IsAchievementCompletedByPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | Whether a player has the achievement. Clients only know about the local player. |
| <Link id="m-isachievementlocallycompleted" /><code>{"static bool IsAchievementLocallyCompleted("}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | Whether the local player has the achievement. |
| <Link id="m-istutorialcompletedbyplayer" /><code>{"static bool IsTutorialCompletedByPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" tutorialSettings)"}</code> | Whether a player has finished a micro tutorial. Clients only know about the local player. |
| <Link id="m-onconnected" /><code>{"override async void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: loads the player's stats and achievements from the achievement service, then makes a tracker and syncs. No tracker if that fails. |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the player's progress to the achievement service. |
| <Link id="m-autosave" /><code>{"private void IAutoSave.AutoSave()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-finishsync" /><code>{"private static void FinishSync()"}</code> |  |
| <Link id="m-internalactionexecute" /><code>{"private void InternalActionExecute("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> |  |
| <Link id="m-isprogressflaglocallycompleted" /><code>{"private static bool IsProgressFlagLocallyCompleted("}<Link to="/game-api/types/global-p/playerprogressflag">{"PlayerProgressFlag"}</Link>{" flag)"}</code> |  |
| <Link id="m-localcompletedachievement" /><code>{"private void LocalCompletedAchievement("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onplayercompletedachievement" /><code>{"private void OnPlayerCompletedAchievement("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> |  |
| <Link id="m-onplayercompletedtutorial" /><code>{"private void OnPlayerCompletedTutorial("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" tutorialSettings)"}</code> |  |
| <Link id="m-syncplayercompletedprogressflagitem" /><code>{"private void SyncPlayerCompletedProgressFlagItem("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{" hashedValue)"}</code> |  |
| <Link id="m-syncprogressflagstatus-2" /><code>{"private void SyncProgressFlagStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint flagHash)"}</code> |  |
| <Link id="m-updateforplayer" /><code>{"private void UpdateForPlayer("}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" stat, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, float value)"}</code> |  |
