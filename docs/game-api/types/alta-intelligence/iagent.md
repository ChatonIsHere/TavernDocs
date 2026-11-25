---
title: "IAgent"
description: "interface IAgent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAgent

An **interface** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ITarget`](/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`Agent`](/game-api/types/alta-intelligence/agent), [`Babu`](/game-api/types/alta-intelligence/babu), [`GreaterGotera`](/game-api/types/alta-intelligence/greatergotera), [`IInteractAgent`](/game-api/types/alta-intelligence/iinteractagent), [`Spriggull`](/game-api/types/alta-intelligence/spriggull)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionduration" /><code>{"float ActionDuration { get; }"}</code> |  |
| <Link id="m-activeaction" /><code><Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" ActiveAction { get; }"}</code> |  |
| <Link id="m-collision" /><code><Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" Collision { get; }"}</code> |  |
| <Link id="m-creationtime" /><code>{"float CreationTime { get; }"}</code> |  |
| <Link id="m-director" /><code><Link to="/game-api/types/alta-intelligence/director">{"Director"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/director">{"Director"}</Link>{" { get; }"}</code> |  |
| <Link id="m-hastarget" /><code>{"bool HasTarget { get; }"}</code> |  |
| <Link id="m-haswalker" /><code>{"bool HasWalker { get; }"}</code> |  |
| <Link id="m-hurt" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> Hurt { get; }"}</code> |  |
| <Link id="m-isacting" /><code>{"bool IsActing { get; }"}</code> |  |
| <Link id="m-networkanimator" /><code><Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" { get; }"}</code> |  |
| <Link id="m-nextupdateprogress" /><code>{"float NextUpdateProgress { get; }"}</code> |  |
| <Link id="m-populationitem" /><code><Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" { get; }"}</code> |  |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> |  |
| <Link id="m-target" /><code><Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> |  |
| <Link id="m-updateinterval" /><code>{"float UpdateInterval { get; }"}</code> |  |
| <Link id="m-walker" /><code><Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtarget" /><code>{"bool AddTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-cancelcurrentaction" /><code>{"void CancelCurrentAction()"}</code> |  |
| <Link id="m-doaction" /><code>{"void DoAction("}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" action, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-firechannelevent" /><code>{"void FireChannelEvent("}<Link to="/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-removetarget" /><code>{"bool RemoveTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float duration)"}</code> |  |
| <Link id="m-useactioncomponentset" /><code>{"void UseActionComponentSet("}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAgent`:

[`AnimatedBoolAiHook.booleans`](/game-api/types/alta-intelligence/animatedboolaihook#m-booleans), [`AnimatedFloatAiHook.booleans`](/game-api/types/alta-intelligence/animatedfloataihook#m-booleans), [`AnimatedFloatTransitionAiHook.floats`](/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-floats), [`AnimatedLayerAiHook.weights`](/game-api/types/alta-intelligence/animatedlayeraihook#m-weights), [`AttackDirectionCore.AttackDirectionCore`](/game-api/types/alta-intelligence/attackdirectioncore#m-ctor), [`AttackDirectionCore.Disable`](/game-api/types/alta-intelligence/attackdirectioncore#m-disable), [`AttackDirectionCore.GetAnimation`](/game-api/types/alta-intelligence/attackdirectioncore#m-getanimation), [`AttackDirectionCore.Update`](/game-api/types/alta-intelligence/attackdirectioncore#m-update), [`AttackDirectionCoreSettings.GetCore`](/game-api/types/alta-intelligence/attackdirectioncoresettings#m-getcore), [`AttackDirectionReactAIHook.actions`](/game-api/types/alta-intelligence/attackdirectionreactaihook#m-actions), [`BasicActiveAction<TAgent>.GeneralTopic`](/game-api/types/alta-intelligence/basicactiveaction-tagent#m-generaltopic), [`BasicSense.Get`](/game-api/types/alta-intelligence/basicsense#m-get), [`DistanceSense.Get`](/game-api/types/alta-intelligence/distancesense#m-get), [`DistanceSense.GetInverseLerp`](/game-api/types/alta-intelligence/distancesense#m-getinverselerp), [`DistanceSquaredSense.Get`](/game-api/types/alta-intelligence/distancesquaredsense#m-get), [`Facing2DSense.Get`](/game-api/types/alta-intelligence/facing2dsense#m-get), [`Facing3DSense.Get`](/game-api/types/alta-intelligence/facing3dsense#m-get), [`FixedStatChangeHook.addedExtras`](/game-api/types/alta-intelligence/fixedstatchangehook#m-addedextras), [`FixedStatChangeHook.GetAffectedStat`](/game-api/types/alta-intelligence/fixedstatchangehook#m-getaffectedstat), [`FixedStatChangeHook.OperateOnStat`](/game-api/types/alta-intelligence/fixedstatchangehook#m-operateonstat), [`FixedStatChangeHook.RevertOperateOnStat`](/game-api/types/alta-intelligence/fixedstatchangehook#m-revertoperateonstat), [`FixedStatChangeHook.SetAffectedStat`](/game-api/types/alta-intelligence/fixedstatchangehook#m-setaffectedstat), [`HookAction.HookAction`](/game-api/types/alta-intelligence/hookaction#m-ctor), [`HookAction.topic`](/game-api/types/alta-intelligence/hookaction#m-topic), [`HurtSense.Get`](/game-api/types/alta-intelligence/hurtsense#m-get), [`IActiveAction.GeneralTopic`](/game-api/types/alta-intelligence/iactiveaction#m-generaltopic), [`ProgressStatChangeHook.progresses`](/game-api/types/alta-intelligence/progressstatchangehook#m-progresses), [`ProgressStatChangeHook.TopicProgress.TopicProgress`](/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-ctor), [`Sense.Get`](/game-api/types/alta-intelligence/sense#m-get), [`Sense.GetInverseLerp`](/game-api/types/alta-intelligence/sense#m-getinverselerp), [`StatChangeHook.affectedStats`](/game-api/types/alta-intelligence/statchangehook#m-affectedstats), [`VelocitySense.Get`](/game-api/types/alta-intelligence/velocitysense#m-get), [`ViewConeSense.Get`](/game-api/types/alta-intelligence/viewconesense#m-get).
