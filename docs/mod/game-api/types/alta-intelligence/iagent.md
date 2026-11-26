---
title: "IAgent"
description: "The interface for an AI creature's brain, implemented by Agent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAgent

An **interface** in `Root.Township`, `Alta.Intelligence`.

The interface for an AI creature's brain, implemented by `Agent`. Decisions and actions run on the server; the server registers live agents with `AgentUpdater`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ITarget`](/mod/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`Agent`](/mod/game-api/types/alta-intelligence/agent), [`Babu`](/mod/game-api/types/alta-intelligence/babu), [`GreaterGotera`](/mod/game-api/types/alta-intelligence/greatergotera), [`IInteractAgent`](/mod/game-api/types/alta-intelligence/iinteractagent), [`Spriggull`](/mod/game-api/types/alta-intelligence/spriggull)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionduration" /><code>{"float ActionDuration { get; }"}</code> | <span className="api-desc">Seconds since the current action was started (or last restarted).</span> |
| <Link id="m-activeaction" /><code><Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" ActiveAction { get; }"}</code> | <span className="api-desc">The action the agent is running now, or null when idle.</span> |
| <Link id="m-collision" /><code><Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" Collision { get; }"}</code> | <span className="api-desc">The collider group for the creature's body.</span> |
| <Link id="m-creationtime" /><code>{"float CreationTime { get; }"}</code> | <span className="api-desc">Server: `Time.time` when the agent was initialised on the server.</span> |
| <Link id="m-director" /><code><Link to="/mod/game-api/types/alta-intelligence/director">{"Director"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/director">{"Director"}</Link>{" { get; }"}</code> | <span className="api-desc">The pathfinding `Director` used to walk, wander and face things.</span> |
| <Link id="m-hastarget" /><code>{"bool HasTarget { get; }"}</code> | <span className="api-desc">True when the current action uses a target and that target still exists.</span> |
| <Link id="m-haswalker" /><code>{"bool HasWalker { get; }"}</code> | <span className="api-desc">True when the prefab has a `Walker` assigned (set in the editor).</span> |
| <Link id="m-hurt" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> Hurt { get; }"}</code> | <span className="api-desc">How much each attacker has hurt this agent, as a fraction of max health. Decays over time; attackers are dropped when it reaches zero.</span> |
| <Link id="m-isacting" /><code>{"bool IsActing { get; }"}</code> | <span className="api-desc">True while an action is running.</span> |
| <Link id="m-networkanimator" /><code><Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" { get; }"}</code> | <span className="api-desc">The synced animator for the creature.</span> |
| <Link id="m-nextupdateprogress" /><code>{"float NextUpdateProgress { get; }"}</code> | <span className="api-desc">0 to 1 progress from the action start to the next time the agent re-decides.</span> |
| <Link id="m-populationitem" /><code><Link to="/mod/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" { get; }"}</code> | <span className="api-desc">Server: the `PopulationItem` on the entity's root, if it was spawned by a population.</span> |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; }"}</code> | <span className="api-desc">The creature's main rigidbody.</span> |
| <Link id="m-target" /><code><Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> | <span className="api-desc">The target of the current action.</span> |
| <Link id="m-updateinterval" /><code>{"float UpdateInterval { get; }"}</code> | <span className="api-desc">Seconds between decision checks (default 0.1). Non-cancellable actions are not re-decided until they finish.</span> |
| <Link id="m-walker" /><code><Link to="/mod/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" { get; }"}</code> | <span className="api-desc">The `Walker` component that moves the creature along paths.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtarget" /><code>{"bool AddTarget("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Server: offers a target to the action decider. Returns false if it is the agent itself, already added, or still on an ignore timer from `RemoveTarget`.</span> |
| <Link id="m-cancelcurrentaction" /><code>{"void CancelCurrentAction()"}</code> | <span className="api-desc">Cancels the running action, if any. The agent then picks a new one on its next update.</span> |
| <Link id="m-doaction" /><code>{"void DoAction("}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" action, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Starts a specific action from an `ActionComponent` against a target, replacing the current action.</span> |
| <Link id="m-firechannelevent" /><code>{"void FireChannelEvent("}<Link to="/mod/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> | <span className="api-desc">Fires the UnityEvent set up for a hook channel. On the server, channels marked networked are also sent to clients in the chunk.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Network initialisation on both sides. Sets up the sync for networked channel events.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: records creation time, finds the `PopulationItem`, builds the AI and registers with `AgentUpdater` if alive.</span> |
| <Link id="m-removetarget" /><code>{"bool RemoveTarget("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float duration)"}</code> | <span className="api-desc">Server: removes an added target. With a positive duration it instead ignores that target for that many seconds and returns false.</span> |
| <Link id="m-useactioncomponentset" /><code>{"void UseActionComponentSet("}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set)"}</code> | <span className="api-desc">Switches the set of possible actions the decider chooses from.</span> |

## Used in

Members of other types that take, return or hold a `IAgent`:

<div className="api-used-in">

[`AnimatedBoolAiHook.booleans`](/mod/game-api/types/alta-intelligence/animatedboolaihook#m-booleans), [`AnimatedFloatAiHook.booleans`](/mod/game-api/types/alta-intelligence/animatedfloataihook#m-booleans), [`AnimatedFloatTransitionAiHook.floats`](/mod/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-floats), [`AnimatedLayerAiHook.weights`](/mod/game-api/types/alta-intelligence/animatedlayeraihook#m-weights), [`AttackDirectionCore.AttackDirectionCore`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-ctor), [`AttackDirectionCore.Disable`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-disable), [`AttackDirectionCore.GetAnimation`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-getanimation), [`AttackDirectionCore.Update`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-update), [`AttackDirectionCoreSettings.GetCore`](/mod/game-api/types/alta-intelligence/attackdirectioncoresettings#m-getcore), [`AttackDirectionReactAIHook.actions`](/mod/game-api/types/alta-intelligence/attackdirectionreactaihook#m-actions), [`BasicActiveAction<TAgent>.GeneralTopic`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent#m-generaltopic), [`BasicSense.Get`](/mod/game-api/types/alta-intelligence/basicsense#m-get), [`DistanceSense.Get`](/mod/game-api/types/alta-intelligence/distancesense#m-get), [`DistanceSense.GetInverseLerp`](/mod/game-api/types/alta-intelligence/distancesense#m-getinverselerp), [`DistanceSquaredSense.Get`](/mod/game-api/types/alta-intelligence/distancesquaredsense#m-get), [`Facing2DSense.Get`](/mod/game-api/types/alta-intelligence/facing2dsense#m-get), [`Facing3DSense.Get`](/mod/game-api/types/alta-intelligence/facing3dsense#m-get), [`FixedStatChangeHook.addedExtras`](/mod/game-api/types/alta-intelligence/fixedstatchangehook#m-addedextras), [`FixedStatChangeHook.GetAffectedStat`](/mod/game-api/types/alta-intelligence/fixedstatchangehook#m-getaffectedstat), [`FixedStatChangeHook.OperateOnStat`](/mod/game-api/types/alta-intelligence/fixedstatchangehook#m-operateonstat), [`FixedStatChangeHook.RevertOperateOnStat`](/mod/game-api/types/alta-intelligence/fixedstatchangehook#m-revertoperateonstat), [`FixedStatChangeHook.SetAffectedStat`](/mod/game-api/types/alta-intelligence/fixedstatchangehook#m-setaffectedstat), [`HookAction.HookAction`](/mod/game-api/types/alta-intelligence/hookaction#m-ctor), [`HookAction.topic`](/mod/game-api/types/alta-intelligence/hookaction#m-topic), [`HurtSense.Get`](/mod/game-api/types/alta-intelligence/hurtsense#m-get), [`IActiveAction.GeneralTopic`](/mod/game-api/types/alta-intelligence/iactiveaction#m-generaltopic), [`ProgressStatChangeHook.progresses`](/mod/game-api/types/alta-intelligence/progressstatchangehook#m-progresses), [`ProgressStatChangeHook.TopicProgress.TopicProgress`](/mod/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-ctor), [`Sense.Get`](/mod/game-api/types/alta-intelligence/sense#m-get), [`Sense.GetInverseLerp`](/mod/game-api/types/alta-intelligence/sense#m-getinverselerp), [`StatChangeHook.affectedStats`](/mod/game-api/types/alta-intelligence/statchangehook#m-affectedstats), [`VelocitySense.Get`](/mod/game-api/types/alta-intelligence/velocitysense#m-get), [`ViewConeSense.Get`](/mod/game-api/types/alta-intelligence/viewconesense#m-get).

</div>
