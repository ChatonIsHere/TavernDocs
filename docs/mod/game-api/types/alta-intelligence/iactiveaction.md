---
title: "IActiveAction"
description: "A creature action that is running right now, started from an IAction for one agent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IActiveAction

An **interface** in `Root.Township`, `Alta.Intelligence`.

A creature action that is running right now, started from an `IAction` for one agent. Raises `Finished` or `Cancelled` once, when it ends.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`BasicActiveAction<TAgent>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent), [`IBasicActiveAction<TAgent>`](/mod/game-api/types/alta-intelligence/ibasicactiveaction-intagent)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code><Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" Action { get; }"}</code> | The action this was started from. |
| <Link id="m-editorduration" /><code>{"float EditorDuration { get; }"}</code> | The duration set for the action, including the agent's base action duration. For display. |
| <Link id="m-generaltopic" /><code><Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" GeneralTopic { get; }"}</code> | The agent running the action. |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; }"}</code> | True once the action has finished or been cancelled. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cancelled" /><code>{"event "}<Link to="/mod/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Cancelled"}</code> | Raised when the action is cancelled. |
| <Link id="m-finished" /><code>{"event "}<Link to="/mod/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Finished"}</code> | Raised when the action completes normally. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | Stops the action early and raises `Cancelled` if it had not ended yet. |
| <Link id="m-update" /><code>{"void Update(bool hasTarget)"}</code> | Called by the agent while the action runs, with whether it has a target. |

## Used in

Members of other types that take, return or hold a `IActiveAction`:

[`Action<TAgent>.Start`](/mod/game-api/types/alta-intelligence/action-tagent#m-start), [`ActionComponent.HandleUsed`](/mod/game-api/types/alta-intelligence/actioncomponent#m-handleused), [`ActionFinishedHandler.BeginInvoke`](/mod/game-api/types/alta-intelligence/actionfinishedhandler#m-begininvoke), [`ActionFinishedHandler.Invoke`](/mod/game-api/types/alta-intelligence/actionfinishedhandler#m-invoke), [`ActionSettingsUsedHandler.BeginInvoke`](/mod/game-api/types/alta-intelligence/actionsettingsusedhandler#m-begininvoke), [`ActionSettingsUsedHandler.Invoke`](/mod/game-api/types/alta-intelligence/actionsettingsusedhandler#m-invoke), [`ActiveAttackDirectionReact.FinishedOrCanceled`](/mod/game-api/types/alta-intelligence/activeattackdirectionreact#m-finishedorcanceled), [`ActiveCircleReposition.FinishOrCancel`](/mod/game-api/types/alta-intelligence/activecirclereposition#m-finishorcancel), [`ActiveCircleTarget.Clean`](/mod/game-api/types/alta-intelligence/activecircletarget#m-clean), [`ActiveCrawl.CancelAction`](/mod/game-api/types/alta-intelligence/activecrawl#m-cancelaction), [`ActiveDelayEnterSet.OnFinished`](/mod/game-api/types/alta-intelligence/activedelayenterset#m-onfinished), [`ActiveIdle.OnFinished`](/mod/game-api/types/alta-intelligence/activeidle#m-onfinished), [`ActiveJumpAt.HandleFinished`](/mod/game-api/types/alta-intelligence/activejumpat#m-handlefinished), [`ActiveNavigation<TThis, TAgent, TSettings>.Stop`](/mod/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings#m-stop), [`ActiveNest.HandleCancelled`](/mod/game-api/types/alta-intelligence/activenest#m-handlecancelled), [`ActiveRegainControl.OnFinished`](/mod/game-api/types/alta-intelligence/activeregaincontrol#m-onfinished), [`ActiveSchmeecheePlant.OnFinished`](/mod/game-api/types/alta-intelligence/activeschmeecheeplant#m-onfinished), [`ActiveThreaten.HandleCancelled`](/mod/game-api/types/alta-intelligence/activethreaten#m-handlecancelled), [`ActiveThreaten.HandleFinished`](/mod/game-api/types/alta-intelligence/activethreaten#m-handlefinished), [`Agent.ActiveAction`](/mod/game-api/types/alta-intelligence/agent#m-activeaction), [`Agent.ActiveActionFinished`](/mod/game-api/types/alta-intelligence/agent#m-activeactionfinished), [`Agent.FireChannelEvent`](/mod/game-api/types/alta-intelligence/agent#m-firechannelevent), [`AgentRollUpInPlace.OnFinished`](/mod/game-api/types/alta-intelligence/agentrollupinplace#m-onfinished), [`AgentRollUpInPlace.TerminateUpdate`](/mod/game-api/types/alta-intelligence/agentrollupinplace#m-terminateupdate), [`AiHook<T>.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/aihook-t#m-finishedorcancelled), [`AiHook<T>.Used`](/mod/game-api/types/alta-intelligence/aihook-t#m-used), [`AnimatedBoolAiHook.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/animatedboolaihook#m-finishedorcancelled), [`AnimatedBoolAiHook.Used`](/mod/game-api/types/alta-intelligence/animatedboolaihook#m-used), [`AnimatedFloatAiHook.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/animatedfloataihook#m-finishedorcancelled), [`AnimatedFloatAiHook.Used`](/mod/game-api/types/alta-intelligence/animatedfloataihook#m-used), [`AnimatedFloatTransitionAiHook.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-finishedorcancelled), [`AnimatedFloatTransitionAiHook.Used`](/mod/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-used), [`AnimatedLayerAiHook.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/animatedlayeraihook#m-finishedorcancelled), [`AnimatedLayerAiHook.Used`](/mod/game-api/types/alta-intelligence/animatedlayeraihook#m-used), [`AnimatedTriggerAiHook.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/animatedtriggeraihook#m-finishedorcancelled), [`AnimatedTriggerAiHook.Trigger`](/mod/game-api/types/alta-intelligence/animatedtriggeraihook#m-trigger), [`AnimatedTriggerAiHook.Used`](/mod/game-api/types/alta-intelligence/animatedtriggeraihook#m-used), [`AttackDirectionReactAIHook.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/attackdirectionreactaihook#m-finishedorcancelled), [`AttackDirectionReactAIHook.Used`](/mod/game-api/types/alta-intelligence/attackdirectionreactaihook#m-used), [`BasicAction<TAgent, TActive, TSettings>.Pool`](/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings#m-pool), [`BasicAction<TAgent, TActive, TSettings>.Start`](/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings#m-start), [`EventChannelAiHook.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/eventchannelaihook#m-finishedorcancelled), [`EventChannelAiHook.Used`](/mod/game-api/types/alta-intelligence/eventchannelaihook#m-used), [`EventChannelTimedAiHook.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/eventchanneltimedaihook#m-finishedorcancelled), [`EventChannelTimedAiHook.Used`](/mod/game-api/types/alta-intelligence/eventchanneltimedaihook#m-used), [`EventChannelTimedAiHook.Delay.Cancel`](/mod/game-api/types/alta-intelligence/eventchanneltimedaihook-delay#m-cancel), [`EventChannelTimedAiHook.Delay.entries`](/mod/game-api/types/alta-intelligence/eventchanneltimedaihook-delay#m-entries), [`EventChannelTimedAiHook.Delay.Start`](/mod/game-api/types/alta-intelligence/eventchanneltimedaihook-delay#m-start), [`FixedStatChangeHook.AffectOnEnd`](/mod/game-api/types/alta-intelligence/fixedstatchangehook#m-affectonend), [`FixedStatChangeHook.AffectOnStart`](/mod/game-api/types/alta-intelligence/fixedstatchangehook#m-affectonstart), [`IAction<TAgent>.Start`](/mod/game-api/types/alta-intelligence/iaction-intagent#m-start), [`IActionSettings.HandleUsed`](/mod/game-api/types/alta-intelligence/iactionsettings#m-handleused), [`IAgent.ActiveAction`](/mod/game-api/types/alta-intelligence/iagent#m-activeaction), [`IAgent.FireChannelEvent`](/mod/game-api/types/alta-intelligence/iagent#m-firechannelevent), [`ProgressStatChangeHook.AffectOnEnd`](/mod/game-api/types/alta-intelligence/progressstatchangehook#m-affectonend), [`ProgressStatChangeHook.AffectOnStart`](/mod/game-api/types/alta-intelligence/progressstatchangehook#m-affectonstart), [`StatChangeHook.AffectOnEnd`](/mod/game-api/types/alta-intelligence/statchangehook#m-affectonend), [`StatChangeHook.AffectOnStart`](/mod/game-api/types/alta-intelligence/statchangehook#m-affectonstart), [`StatChangeHook.FinishedOrCancelled`](/mod/game-api/types/alta-intelligence/statchangehook#m-finishedorcancelled), [`StatChangeHook.Used`](/mod/game-api/types/alta-intelligence/statchangehook#m-used) and 2 more.
