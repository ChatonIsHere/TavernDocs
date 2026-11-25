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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`BasicActiveAction<TAgent>`](/game-api/types/alta-intelligence/basicactiveaction-tagent), [`IBasicActiveAction<TAgent>`](/game-api/types/alta-intelligence/ibasicactiveaction-intagent)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code><Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" Action { get; }"}</code> | The action this was started from. |
| <Link id="m-editorduration" /><code>{"float EditorDuration { get; }"}</code> | The duration set for the action, including the agent's base action duration. For display. |
| <Link id="m-generaltopic" /><code><Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" GeneralTopic { get; }"}</code> | The agent running the action. |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; }"}</code> | True once the action has finished or been cancelled. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cancelled" /><code>{"event "}<Link to="/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Cancelled"}</code> | Raised when the action is cancelled. |
| <Link id="m-finished" /><code>{"event "}<Link to="/game-api/types/alta-intelligence/actionfinishedhandler">{"ActionFinishedHandler"}</Link>{" Finished"}</code> | Raised when the action completes normally. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | Stops the action early and raises `Cancelled` if it had not ended yet. |
| <Link id="m-update" /><code>{"void Update(bool hasTarget)"}</code> | Called by the agent while the action runs, with whether it has a target. |

## Used in

Members of other types that take, return or hold a `IActiveAction`:

[`Action<TAgent>.Start`](/game-api/types/alta-intelligence/action-tagent#m-start), [`ActionComponent.HandleUsed`](/game-api/types/alta-intelligence/actioncomponent#m-handleused), [`ActionFinishedHandler.BeginInvoke`](/game-api/types/alta-intelligence/actionfinishedhandler#m-begininvoke), [`ActionFinishedHandler.Invoke`](/game-api/types/alta-intelligence/actionfinishedhandler#m-invoke), [`ActionSettingsUsedHandler.BeginInvoke`](/game-api/types/alta-intelligence/actionsettingsusedhandler#m-begininvoke), [`ActionSettingsUsedHandler.Invoke`](/game-api/types/alta-intelligence/actionsettingsusedhandler#m-invoke), [`ActiveAttackDirectionReact.FinishedOrCanceled`](/game-api/types/alta-intelligence/activeattackdirectionreact#m-finishedorcanceled), [`ActiveCircleReposition.FinishOrCancel`](/game-api/types/alta-intelligence/activecirclereposition#m-finishorcancel), [`ActiveCircleTarget.Clean`](/game-api/types/alta-intelligence/activecircletarget#m-clean), [`ActiveCrawl.CancelAction`](/game-api/types/alta-intelligence/activecrawl#m-cancelaction), [`ActiveDelayEnterSet.OnFinished`](/game-api/types/alta-intelligence/activedelayenterset#m-onfinished), [`ActiveIdle.OnFinished`](/game-api/types/alta-intelligence/activeidle#m-onfinished), [`ActiveJumpAt.HandleFinished`](/game-api/types/alta-intelligence/activejumpat#m-handlefinished), [`ActiveNavigation<TThis, TAgent, TSettings>.Stop`](/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings#m-stop), [`ActiveNest.HandleCancelled`](/game-api/types/alta-intelligence/activenest#m-handlecancelled), [`ActiveRegainControl.OnFinished`](/game-api/types/alta-intelligence/activeregaincontrol#m-onfinished), [`ActiveSchmeecheePlant.OnFinished`](/game-api/types/alta-intelligence/activeschmeecheeplant#m-onfinished), [`ActiveThreaten.HandleCancelled`](/game-api/types/alta-intelligence/activethreaten#m-handlecancelled), [`ActiveThreaten.HandleFinished`](/game-api/types/alta-intelligence/activethreaten#m-handlefinished), [`Agent.ActiveAction`](/game-api/types/alta-intelligence/agent#m-activeaction), [`Agent.ActiveActionFinished`](/game-api/types/alta-intelligence/agent#m-activeactionfinished), [`Agent.FireChannelEvent`](/game-api/types/alta-intelligence/agent#m-firechannelevent), [`AgentRollUpInPlace.OnFinished`](/game-api/types/alta-intelligence/agentrollupinplace#m-onfinished), [`AgentRollUpInPlace.TerminateUpdate`](/game-api/types/alta-intelligence/agentrollupinplace#m-terminateupdate), [`AiHook<T>.FinishedOrCancelled`](/game-api/types/alta-intelligence/aihook-t#m-finishedorcancelled), [`AiHook<T>.Used`](/game-api/types/alta-intelligence/aihook-t#m-used), [`AnimatedBoolAiHook.FinishedOrCancelled`](/game-api/types/alta-intelligence/animatedboolaihook#m-finishedorcancelled), [`AnimatedBoolAiHook.Used`](/game-api/types/alta-intelligence/animatedboolaihook#m-used), [`AnimatedFloatAiHook.FinishedOrCancelled`](/game-api/types/alta-intelligence/animatedfloataihook#m-finishedorcancelled), [`AnimatedFloatAiHook.Used`](/game-api/types/alta-intelligence/animatedfloataihook#m-used), [`AnimatedFloatTransitionAiHook.FinishedOrCancelled`](/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-finishedorcancelled), [`AnimatedFloatTransitionAiHook.Used`](/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-used), [`AnimatedLayerAiHook.FinishedOrCancelled`](/game-api/types/alta-intelligence/animatedlayeraihook#m-finishedorcancelled), [`AnimatedLayerAiHook.Used`](/game-api/types/alta-intelligence/animatedlayeraihook#m-used), [`AnimatedTriggerAiHook.FinishedOrCancelled`](/game-api/types/alta-intelligence/animatedtriggeraihook#m-finishedorcancelled), [`AnimatedTriggerAiHook.Trigger`](/game-api/types/alta-intelligence/animatedtriggeraihook#m-trigger), [`AnimatedTriggerAiHook.Used`](/game-api/types/alta-intelligence/animatedtriggeraihook#m-used), [`AttackDirectionReactAIHook.FinishedOrCancelled`](/game-api/types/alta-intelligence/attackdirectionreactaihook#m-finishedorcancelled), [`AttackDirectionReactAIHook.Used`](/game-api/types/alta-intelligence/attackdirectionreactaihook#m-used), [`BasicAction<TAgent, TActive, TSettings>.Pool`](/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings#m-pool), [`BasicAction<TAgent, TActive, TSettings>.Start`](/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings#m-start), [`EventChannelAiHook.FinishedOrCancelled`](/game-api/types/alta-intelligence/eventchannelaihook#m-finishedorcancelled), [`EventChannelAiHook.Used`](/game-api/types/alta-intelligence/eventchannelaihook#m-used), [`EventChannelTimedAiHook.FinishedOrCancelled`](/game-api/types/alta-intelligence/eventchanneltimedaihook#m-finishedorcancelled), [`EventChannelTimedAiHook.Used`](/game-api/types/alta-intelligence/eventchanneltimedaihook#m-used), [`EventChannelTimedAiHook.Delay.Cancel`](/game-api/types/alta-intelligence/eventchanneltimedaihook-delay#m-cancel), [`EventChannelTimedAiHook.Delay.entries`](/game-api/types/alta-intelligence/eventchanneltimedaihook-delay#m-entries), [`EventChannelTimedAiHook.Delay.Start`](/game-api/types/alta-intelligence/eventchanneltimedaihook-delay#m-start), [`FixedStatChangeHook.AffectOnEnd`](/game-api/types/alta-intelligence/fixedstatchangehook#m-affectonend), [`FixedStatChangeHook.AffectOnStart`](/game-api/types/alta-intelligence/fixedstatchangehook#m-affectonstart), [`IAction<TAgent>.Start`](/game-api/types/alta-intelligence/iaction-intagent#m-start), [`IActionSettings.HandleUsed`](/game-api/types/alta-intelligence/iactionsettings#m-handleused), [`IAgent.ActiveAction`](/game-api/types/alta-intelligence/iagent#m-activeaction), [`IAgent.FireChannelEvent`](/game-api/types/alta-intelligence/iagent#m-firechannelevent), [`ProgressStatChangeHook.AffectOnEnd`](/game-api/types/alta-intelligence/progressstatchangehook#m-affectonend), [`ProgressStatChangeHook.AffectOnStart`](/game-api/types/alta-intelligence/progressstatchangehook#m-affectonstart), [`StatChangeHook.AffectOnEnd`](/game-api/types/alta-intelligence/statchangehook#m-affectonend), [`StatChangeHook.AffectOnStart`](/game-api/types/alta-intelligence/statchangehook#m-affectonstart), [`StatChangeHook.FinishedOrCancelled`](/game-api/types/alta-intelligence/statchangehook#m-finishedorcancelled), [`StatChangeHook.Used`](/game-api/types/alta-intelligence/statchangehook#m-used) and 2 more.
