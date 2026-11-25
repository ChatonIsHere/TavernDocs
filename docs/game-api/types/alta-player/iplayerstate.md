---
title: "IPlayerState"
description: "interface IPlayerState in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerState

An **interface** in `Root.Township`, `Alta.PlayerStates`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`PlayerStateBase`](/game-api/types/alta-player/playerstatebase)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alltransitions" /><code><Link to="/game-api/types/alta-player/alltransitions">{"AllTransitions"}</Link>{" "}<Link to="/game-api/types/alta-player/alltransitions">{"AllTransitions"}</Link>{" { get; }"}</code> |  |
| <Link id="m-basestate" /><code><Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" BaseState { get; set; }"}</code> |  |
| <Link id="m-decorator" /><code><Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" Decorator { get; set; }"}</code> |  |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> |  |
| <Link id="m-isdecorated" /><code>{"bool IsDecorated { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> |  |
| <Link id="m-player" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-settings" /><code><Link to="/game-api/types/alta-player/iplayerstatesettings">{"IPlayerStateSettings"}</Link>{" Settings { get; }"}</code> |  |
| <Link id="m-statemanager" /><code><Link to="/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" StateManager { get; set; }"}</code> |  |
| <Link id="m-statetype" /><code><Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" StateType { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate()"}</code> |  |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> |  |
| <Link id="m-decorate" /><code>{"void Decorate("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> |  |
| <Link id="m-editordrawinspectorgui" /><code>{"void EditorDrawInspectorGUI()"}</code> |  |
| <Link id="m-requeststatechange" /><code>{"void RequestStateChange("}<Link to="/game-api/types/alta-player/playerstatetype">{"PlayerStateType"}</Link>{" destinationStateType)"}</code> |  |
| <Link id="m-serializedisk" /><code>{"void SerializeDisk("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializetoremote" /><code>{"void SerializeToRemote("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncstateenter" /><code>{"void SyncStateEnter("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncstateleave" /><code>{"void SyncStateLeave("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-undecorate" /><code>{"void Undecorate("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" baseState, "}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" decorator)"}</code> |  |
| <Link id="m-validatestateactivation" /><code>{"bool ValidateStateActivation(bool isDuringLoading)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPlayerState`:

[`IPlayerStateFactory.CreateNewPlayerState`](/game-api/types/alta-player/iplayerstatefactory#m-createnewplayerstate), [`PlayerStateBase.BaseState`](/game-api/types/alta-player/playerstatebase#m-basestate), [`PlayerStateBase.Decorate`](/game-api/types/alta-player/playerstatebase#m-decorate), [`PlayerStateBase.Decorator`](/game-api/types/alta-player/playerstatebase#m-decorator), [`PlayerStateBase.OnDecorated`](/game-api/types/alta-player/playerstatebase#m-ondecorated), [`PlayerStateBase.OnDecoratedRemote`](/game-api/types/alta-player/playerstatebase#m-ondecoratedremote), [`PlayerStateBase.OnUndecorated`](/game-api/types/alta-player/playerstatebase#m-onundecorated), [`PlayerStateBase.OnUndecoratedRemote`](/game-api/types/alta-player/playerstatebase#m-onundecoratedremote), [`PlayerStateBase.Undecorate`](/game-api/types/alta-player/playerstatebase#m-undecorate), [`PlayerStateFactory.CreateNewPlayerState`](/game-api/types/alta-player/playerstatefactory#m-createnewplayerstate), [`PlayerStateFactory.FindStateOfType`](/game-api/types/alta-player/playerstatefactory#m-findstateoftype), [`PlayerStateHandler.BeginInvoke`](/game-api/types/alta-player/playerstatehandler#m-begininvoke), [`PlayerStateHandler.Invoke`](/game-api/types/alta-player/playerstatehandler#m-invoke), [`PlayerStateManager.currentState`](/game-api/types/alta-player/playerstatemanager#m-currentstate), [`PlayerStateManager.CurrentState`](/game-api/types/alta-player/playerstatemanager#m-currentstate-2), [`PlayerStateManager.DeactivateCurrentStateAndFindCommonBase`](/game-api/types/alta-player/playerstatemanager#m-deactivatecurrentstateandfindcommonbase), [`PlayerStateManager.EnterNewState`](/game-api/types/alta-player/playerstatemanager#m-enternewstate), [`PlayerStateManager.GetCurrentStateOrBase`](/game-api/types/alta-player/playerstatemanager#m-getcurrentstateorbase), [`PlayerStateManager.GetSyncStreamForLeavingState`](/game-api/types/alta-player/playerstatemanager#m-getsyncstreamforleavingstate), [`PlayerStateManager.LoadFromStream`](/game-api/types/alta-player/playerstatemanager#m-loadfromstream), [`PlayerStateManager.SerializeStateToDisk`](/game-api/types/alta-player/playerstatemanager#m-serializestatetodisk), [`PlayerStateManager.SerializeStateToRemote`](/game-api/types/alta-player/playerstatemanager#m-serializestatetoremote), [`PlayerStateManager.SetState`](/game-api/types/alta-player/playerstatemanager#m-setstate-2), [`PlayerStateManager.WriteToStream`](/game-api/types/alta-player/playerstatemanager#m-writetostream), [`PlayingState.OnDecorated`](/game-api/types/alta-player/playingstate#m-ondecorated), [`PlayingState.OnDecoratedRemote`](/game-api/types/alta-player/playingstate#m-ondecoratedremote), [`PlayingState.OnUndecorated`](/game-api/types/alta-player/playingstate#m-onundecorated), [`PlayingState.OnUndecoratedRemote`](/game-api/types/alta-player/playingstate#m-onundecoratedremote), [`RemoteStateTransitionsManager.RemoteStateTransitionsManager`](/game-api/types/alta-player/remotestatetransitionsmanager#m-ctor), [`StateTransitionsManager.ClearAllTransitions`](/game-api/types/alta-player/statetransitionsmanager#m-clearalltransitions), [`StateTransitionsManager.parentState`](/game-api/types/alta-player/statetransitionsmanager#m-parentstate), [`StateTransitionsManager.StateTransitionsManager`](/game-api/types/alta-player/statetransitionsmanager#m-ctor), [`CombatToCombatTransition.TransitionToDestinationState`](/game-api/types/alta-player/combattocombattransition#m-transitiontodestinationstate), [`DeadToPlayingTransition.DestinationPreActivationCallback`](/game-api/types/alta-player/deadtoplayingtransition#m-destinationpreactivationcallback), [`DownedToDeadTransition.DestinationPreActivationCallback`](/game-api/types/alta-player/downedtodeadtransition#m-destinationpreactivationcallback), [`IPlayerStateTransition.SourceState`](/game-api/types/alta-player/iplayerstatetransition#m-sourcestate), [`PlayingToCustomizationTransition.TransitionToDestinationState`](/game-api/types/alta-player/playingtocustomizationtransition#m-transitiontodestinationstate), [`PlayingToDeadTransition.DestinationPreActivationCallback`](/game-api/types/alta-player/playingtodeadtransition#m-destinationpreactivationcallback), [`PlayingToDownedTransition.DestinationPreActivationCallback`](/game-api/types/alta-player/playingtodownedtransition#m-destinationpreactivationcallback), [`StateTransition<TFrom, TTo>.Alta.PlayerStates.Transitions.IPlayerStateTransition.SourceState`](/game-api/types/alta-player/statetransition-tfrom-tto#m-alta-playerstates-transitions-iplayerstatetransition-sourcestate), [`StateTransition<TFrom, TTo>.DestinationPreActivationCallback`](/game-api/types/alta-player/statetransition-tfrom-tto#m-destinationpreactivationcallback), [`StateTransition<TFrom, TTo>.OnTransitionComplete`](/game-api/types/alta-player/statetransition-tfrom-tto#m-ontransitioncomplete), [`StateTransition<TFrom, TTo>.sourceState`](/game-api/types/alta-player/statetransition-tfrom-tto#m-sourcestate), [`StateTransition<TFrom, TTo>.SourceState`](/game-api/types/alta-player/statetransition-tfrom-tto#m-sourcestate-2), [`StateTransition<TFrom, TTo>.TransitionToDestinationState`](/game-api/types/alta-player/statetransition-tfrom-tto#m-transitiontodestinationstate), [`EquipmentModeQuickAccess.UpdateState`](/game-api/types/alta-player/equipmentmodequickaccess#m-updatestate), [`ReturnToMainMenuAction.ShouldBeValid`](/game-api/types/alta-player/returntomainmenuaction#m-shouldbevalid-2), [`ReturnToMainMenuAction.UpdateState`](/game-api/types/alta-player/returntomainmenuaction#m-updatestate), [`StatBarVisibilityGroup.CheckCombatState`](/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-checkcombatstate), [`StatBarVisibilityGroup.CheckDownedState`](/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-checkdownedstate), [`StatBarVisibilityGroup.OnStateActivated`](/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-onstateactivated), [`StatBarVisibilityGroup.OnStateDeactivated`](/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-onstatedeactivated), [`PlayerUnlockAnalytics.CanSendChallengeEvent`](/game-api/types/game-other-namespaces/playerunlockanalytics#m-cansendchallengeevent), [`PlayerUnlockAnalytics.SendChallengeExitEvent`](/game-api/types/game-other-namespaces/playerunlockanalytics#m-sendchallengeexitevent), [`PlayerUnlockAnalytics.SendChallengeStartEvent`](/game-api/types/game-other-namespaces/playerunlockanalytics#m-sendchallengestartevent), [`DiscordController.StateChanged`](/game-api/types/global-c-d/discordcontroller#m-statechanged), [`Player.HandleStateActivation`](/game-api/types/global-p/player#m-handlestateactivation), [`Player.HandleStateDeactivation`](/game-api/types/global-p/player#m-handlestatedeactivation), [`TrialLogic.StateChange`](/game-api/types/global-t-x/triallogic#m-statechange).
