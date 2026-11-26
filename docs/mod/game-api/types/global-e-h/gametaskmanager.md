---
title: "GameTaskManager"
description: "Singleton behind achievements, action stats and micro tutorial completion."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameTaskManager

A **class** in `Root.Township`, the global namespace.

Singleton behind achievements, action stats and micro tutorial completion. The server keeps a tracker per player loaded from Alta's achievement service and syncs completed flags to that player. See the Other systems guide.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IAutoSave`](/mod/game-api/types/global-i-l/iautosave)
- **Nested types** [`ProgressFlagSync`](/mod/game-api/types/global-e-h/gametaskmanager-progressflagsync)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems#gametaskmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameTaskManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionstatmap" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/global-e-h/gameactionchannel">{"GameActionChannel"}</Link>{", List<"}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{">> actionStatMap"}</code> | <span className="api-desc">Server: `GameAction` lists by channel, for the actions valid in the current scene.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-playertrackers" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/global-p/playertracker">{"PlayerTracker"}</Link>{"> playerTrackers"}</code> | <span className="api-desc">Server: progress tracker per connected player, loaded from the web API on connect.</span> |
| <Link id="m-syncinitialize" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncInitialize"}</code> | <span className="api-desc">Method sync that sends a player all their completed flags on connect.</span> |
| <Link id="m-syncprogressflagstatus" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncProgressFlagStatus"}</code> | <span className="api-desc">Method sync that sends a single completed flag.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/gametaskmanager">{"GameTaskManager"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The manager in the scene. Extra copies destroy themselves.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-receivedsync" /><code>{"static event Action ReceivedSync"}</code> | <span className="api-desc">Client: raised after the initial list of completed flags arrives.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-actionexecuted" /><code>{"static void ActionExecuted("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> | <span className="api-desc">Reports a player action. Updates every matching game action for that player; errors are logged, not thrown.</span> |
| <Link id="m-clearachievementforplayer" /><code>{"void ClearAchievementForPlayer(int userId, "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Server: un-completes an achievement for a user id and resets its target stat, locally and in the achievement service.</span> |
| <Link id="m-clearactionstatforplayer" /><code>{"void ClearActionStatForPlayer(int userId, "}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" action)"}</code> | <span className="api-desc">Server: sets one action stat to 0 for a user id, locally and in the achievement service.</span> |
| <Link id="m-clearallachievementsforplayer" /><code>{"void ClearAllAchievementsForPlayer(int userIdentifier)"}</code> | <span className="api-desc">Server: resets every stat and achievement for a user id, online or not.</span> |
| <Link id="m-incrementforplayer" /><code>{"void IncrementForPlayer("}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" gameTask, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: adds 1 to a game action's value for a player who has a tracker.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the initial flag sync and the single flag update sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Maps game actions valid for this scene by channel and hooks every achievement's completion. Registers for autosave.</span> |
| <Link id="m-isachievementcompletedbyplayer" /><code>{"static bool IsAchievementCompletedByPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Whether a player has the achievement. Clients only know about the local player.</span> |
| <Link id="m-isachievementlocallycompleted" /><code>{"static bool IsAchievementLocallyCompleted("}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Whether the local player has the achievement.</span> |
| <Link id="m-istutorialcompletedbyplayer" /><code>{"static bool IsTutorialCompletedByPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" tutorialSettings)"}</code> | <span className="api-desc">Whether a player has finished a micro tutorial. Clients only know about the local player.</span> |
| <Link id="m-onconnected" /><code>{"override async void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: loads the player's stats and achievements from the achievement service, then makes a tracker and syncs. No tracker if that fails.</span> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the player's progress to the achievement service.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autosave" /><code>{"private void IAutoSave.AutoSave()"}</code> | <span className="api-desc">Server: sends every connected player's task progress to the web API on autosave.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance`, or destroys itself if one already exists.</span> |
| <Link id="m-finishsync" /><code>{"private static void FinishSync()"}</code> | <span className="api-desc">Raises `ReceivedSync` once a client has read its completed flags.</span> |
| <Link id="m-internalactionexecute" /><code>{"private void InternalActionExecute("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-e-h/gametaskactionargument">{"GameTaskActionArgument"}</Link>{" argument)"}</code> | <span className="api-desc">Server: feeds an action to every `GameAction` on its channel that accepts it, updating the player's value.</span> |
| <Link id="m-isprogressflaglocallycompleted" /><code>{"private static bool IsProgressFlagLocallyCompleted("}<Link to="/mod/game-api/types/global-p/playerprogressflag">{"PlayerProgressFlag"}</Link>{" flag)"}</code> | <span className="api-desc">Client: checks the synced completed set. Server: checks the tracker of `Player.Current`.</span> |
| <Link id="m-localcompletedachievement" /><code>{"private void LocalCompletedAchievement("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Plays the achievement effect if the player is local and the achievement shows one.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears `Instance` if it was this one.</span> |
| <Link id="m-onplayercompletedachievement" /><code>{"private void OnPlayerCompletedAchievement("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Server: records a newly completed achievement, plays its effect for a local player and sends it to the player and web API.</span> |
| <Link id="m-onplayercompletedtutorial" /><code>{"private void OnPlayerCompletedTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" tutorialSettings)"}</code> | <span className="api-desc">Server: records a completed micro tutorial and syncs it. Not hooked to anything in this file.</span> |
| <Link id="m-syncplayercompletedprogressflagitem" /><code>{"private void SyncPlayerCompletedProgressFlagItem("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/hashedgeneralvalue">{"HashedGeneralValue"}</Link>{" hashedValue)"}</code> | <span className="api-desc">Server: sends a completed flag's hash to the player and marks it completed in the web API.</span> |
| <Link id="m-syncprogressflagstatus-2" /><code>{"private void SyncProgressFlagStatus("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint flagHash)"}</code> | <span className="api-desc">Sends one completed flag hash. Client: marks the achievement or tutorial complete when received.</span> |
| <Link id="m-updateforplayer" /><code>{"private void UpdateForPlayer("}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" stat, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, float value)"}</code> | <span className="api-desc">Sets a player's tracked value for a `GameAction`. Hooked to each action's `ValueUpdate`.</span> |

</details>
