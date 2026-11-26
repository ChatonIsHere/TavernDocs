---
title: "Agent"
description: "Base for creature AI on a networked creature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Agent

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for creature AI on a networked creature. On the server it registers with `AgentUpdater`, picks actions through its action decider and tracks who hurt it. Concrete creatures derive from `Agent<TThis>`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Target`](/game-api/types/alta-intelligence/target), [`IAgentDebugger`](/game-api/types/alta-intelligence/iagentdebugger), [`ILinkedAgent`](/game-api/types/alta-intelligence/ilinkedagent), [`IAgent`](/game-api/types/alta-intelligence/iagent), [`ITarget`](/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`ActiveAttackDirectionReact`](/game-api/types/alta-intelligence/activeattackdirectionreact), [`ActiveCircleReposition`](/game-api/types/alta-intelligence/activecirclereposition), [`ActiveCircleTarget`](/game-api/types/alta-intelligence/activecircletarget), [`ActiveCrawl`](/game-api/types/alta-intelligence/activecrawl), [`ActiveDelayEnterSet`](/game-api/types/alta-intelligence/activedelayenterset), [`ActiveDeleted`](/game-api/types/alta-intelligence/activedeleted), [`ActiveDisabled`](/game-api/types/alta-intelligence/activedisabled), [`ActiveDistanceFromTarget`](/game-api/types/alta-intelligence/activedistancefromtarget), [`ActiveFaceTarget`](/game-api/types/alta-intelligence/activefacetarget), [`ActiveFollow`](/game-api/types/alta-intelligence/activefollow), [`ActiveIdle`](/game-api/types/alta-intelligence/activeidle), [`ActiveInteractApproach`](/game-api/types/alta-intelligence/activeinteractapproach), [`ActiveJumpAt`](/game-api/types/alta-intelligence/activejumpat), [`ActiveNest`](/game-api/types/alta-intelligence/activenest), [`ActiveRegainControl`](/game-api/types/alta-intelligence/activeregaincontrol), [`ActiveSwapActionSet`](/game-api/types/alta-intelligence/activeswapactionset), [`ActiveThreaten`](/game-api/types/alta-intelligence/activethreaten), [`ActiveWander`](/game-api/types/alta-intelligence/activewander), [`Agent<TThis>`](/game-api/types/alta-intelligence/agent-tthis), [`AgentRollUpInPlace`](/game-api/types/alta-intelligence/agentrollupinplace), [`BasicActiveAgentMoveCloser<T>`](/game-api/types/alta-intelligence/basicactiveagentmovecloser-t)
- **Nested types** [`ChannelEvent`](/game-api/types/alta-intelligence/agent-channelevent)
- **Attributes** `SelectionBase`
- **Documented in** [Agent](/game-api/creatures/agent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected Agent()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collectors" /><code>{"protected HashSet<"}<Link to="/game-api/types/alta-intelligence/targetcollector">{"TargetCollector"}</Link>{"> collectors"}</code> | Protected: target collectors added with `AddCollector`. |
| <Link id="m-hurtkeys" /><code>{"protected HashSet<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> hurtKeys"}</code> | Protected: the attackers currently tracked in `Hurt`. |
| <Link id="m-ishurtaddingtarget" /><code>{"protected bool isHurtAddingTarget"}</code> | Protected: when true (default), being hurt adds the attacker as a target, and removes it when the hurt fades. |

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionstarttime" /><code>{"private float actionStartTime"}</code> | Time the current action started. Used by `ActionDuration` and `NextUpdateProgress`. |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> | Backing field for `NetworkAnimator`. |
| <Link id="m-channelevents" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent-channelevent">{"Agent.ChannelEvent"}</Link>{"[] channelEvents"}</code> | Backing field for `ChannelEvents`: Unity events fired by actions on each hook channel, optionally networked. |
| <Link id="m-collision" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" collision"}</code> | Backing field for `Collision`. |
| <Link id="m-director" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/director">{"Director"}</Link>{" director"}</code> | Backing field for `Director`. |
| <Link id="m-eventmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/agent-channelevent">{"Agent.ChannelEvent"}</Link>{"> eventMap"}</code> | Channel to event lookup built in `Initialize`. Clients only get networked channels. |
| <Link id="m-haswalker" /><code>{"private bool hasWalker"}</code> | Backing field for `HasWalker`, set in `OnValidate` when a walker is assigned. |
| <Link id="m-hurtreducepersecond" /><code>{"private float hurtReducePerSecond"}</code> | How fast hurt values per attacker fade. 0.1 per second by default. |
| <Link id="m-ignoretimers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", TimeSpan> ignoreTimers"}</code> | Targets that `RemoveTarget` told the agent to ignore, with the time the ignore ends. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Backing field for `IsEnabled`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-nextupdate" /><code>{"private float nextUpdate"}</code> | Time of the next action re-pick. Set to max for actions that can't be cancelled, 0 when an action ends. |
| <Link id="m-providedtargets" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> providedTargets"}</code> | Targets added through `AddTarget`. Hurt targets not in here are dropped when their hurt fades. |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | Backing field for `Rigidbody`. |
| <Link id="m-syncevent" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncEvent"}</code> | Method sync the server uses to send networked channel events to clients. |
| <Link id="m-tempremoving" /><code>{"private static List<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> tempRemoving"}</code> | Shared scratch list used by `UpdateHurt`. |
| <Link id="m-updateinterval" /><code>{"private float updateInterval"}</code> | Backing field for `UpdateInterval`: seconds between action re-picks. 0.1 by default. |
| <Link id="m-walker" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" walker"}</code> | Backing field for `Walker`, the pathfinding walker. Its object is off until the AI initializes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionduration" /><code>{"float ActionDuration { get; }"}</code> | Seconds since the current action started. |
| <Link id="m-activeaction" /><code><Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" ActiveAction { get; protected set; }"}</code> | The running action instance, or null when idle. |
| <Link id="m-channelevents-2" /><code><Link to="/game-api/types/alta-intelligence/agent-channelevent">{"Agent.ChannelEvent"}</Link>{"[] ChannelEvents { get; }"}</code> | UnityEvents per hook channel that actions fire, optionally networked to clients. |
| <Link id="m-collision-2" /><code><Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" Collision { get; }"}</code> | The collider group for the creature's body. |
| <Link id="m-creationtime" /><code>{"float CreationTime { get; private set; }"}</code> | Server: `Time.time` when the agent was set up on the server. |
| <Link id="m-director-2" /><code><Link to="/game-api/types/alta-intelligence/director">{"Director"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/director">{"Director"}</Link>{" { get; }"}</code> | The `Director` set on the prefab. |
| <Link id="m-generalactiondecider" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/iactiondecider">{"IActionDecider"}</Link>{" GeneralActionDecider { get; }"}</code> | The decider that scores possible actions and targets. |
| <Link id="m-hastarget" /><code>{"bool HasTarget { get; private set; }"}</code> | True while the current action uses a target and that target still exists. |
| <Link id="m-haswalker-2" /><code>{"bool HasWalker { get; }"}</code> | Whether a pathfinding `Walker` is set on the prefab. |
| <Link id="m-hurt" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> Hurt { get; }"}</code> | How much each attacker has hurt this agent, as a fraction of max health. Fades over time. |
| <Link id="m-isacting" /><code>{"bool IsActing { get; private set; }"}</code> | True while an action is running. |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | Server: turning it off cancels the current action and disables the walker; on picks a new action. |
| <Link id="m-networkanimator" /><code><Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" { get; }"}</code> | The networked animator for the creature. |
| <Link id="m-nextupdateprogress" /><code>{"float NextUpdateProgress { get; }"}</code> | How far through the current decision interval the agent is, 0 to 1. |
| <Link id="m-populationitem" /><code><Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" { get; private set; }"}</code> | Server: the `PopulationItem` on the prefab root, if it came from a population. |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> | The creature's rigidbody. |
| <Link id="m-selected" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" Selected { get; set; }"}</code> | Static: the agent picked for debugging. Nothing sets it in this build. |
| <Link id="m-target" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> | The target of the current action. |
| <Link id="m-updateinterval-2" /><code>{"float UpdateInterval { get; }"}</code> | Seconds between decision checks (default 0.1). Actions that can't be cancelled skip checks until done. |
| <Link id="m-walker-2" /><code><Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" { get; }"}</code> | The pathfinding `Walker`, if any. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-ilinkedagent-node" /><code>{"private LinkedListNode<"}<Link to="/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{"> Alta.Intelligence.ILinkedAgent.Node { get; set; }"}</code> | This agent's node in the `AgentUpdater` list. |
| <Link id="m-alta-intelligence-ilinkedagent-priority" /><code>{"private int Alta.Intelligence.ILinkedAgent.Priority { get; set; }"}</code> | Update priority set by `AgentUpdater`. Gizmos colour agents by it. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-noactionfound" /><code>{"event Action NoActionFound"}</code> | Raised when the decider finds no action to start. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcollector" /><code>{"void AddCollector("}<Link to="/game-api/types/alta-intelligence/targetcollector">{"TargetCollector"}</Link>{" collector)"}</code> | Registers a target collector. They are force-updated each time the agent picks a new action. |
| <Link id="m-addtarget" /><code>{"bool AddTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Server: gives the decider a target to consider. False if it is the agent itself, already added or still in an ignore timer. |
| <Link id="m-cancelcurrentaction" /><code>{"void CancelCurrentAction()"}</code> | Cancels the running action, if any. |
| <Link id="m-doaction" /><code>{"abstract void DoAction("}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" action, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Starts a given action component against a target, skipping the decider. |
| <Link id="m-firechannelevent" /><code>{"void FireChannelEvent("}<Link to="/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> | Runs the event on a hook channel. The server also sends networked ones to clients in the chunk. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up event syncing and maps the channel events (only networked ones on clients). |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: records creation time, finds the `PopulationItem`, starts the AI and registers with `AgentUpdater` if alive. |
| <Link id="m-removetarget" /><code>{"bool RemoveTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float duration = -1)"}</code> | Server: removes a target, or with a duration, ignores it for that many seconds. Attackers in `Hurt` stay. |
| <Link id="m-useactioncomponentset" /><code>{"abstract void UseActionComponentSet("}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set)"}</code> | Switches the decider to a different set of possible actions. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Virtual Unity `Awake`. In `Agent<TThis>` it counts spawned agents and turns the walker off until the AI starts. |
| <Link id="m-changeaction" /><code>{"protected abstract bool ChangeAction()"}</code> | Protected: picks and starts the best action. Called when the update interval is up. |
| <Link id="m-initializeai" /><code>{"protected virtual void InitializeAi()"}</code> | Protected: sets up the AI on the server. `Agent<TThis>` creates the action decider and turns on the walker. |
| <Link id="m-internalrestartcurrentaction" /><code>{"protected bool InternalRestartCurrentAction()"}</code> | Protected: restarts timing for the current action without starting it again. |
| <Link id="m-internalstartaction" /><code>{"protected bool InternalStartAction<T>("}<Link to="/game-api/types/alta-intelligence/iactiontarget">{"IActionTarget"}</Link>{" actionTarget, "}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<T> action, T thisAgent)"}</code> | Protected: starts an action and hooks its finish. Raises `NoActionFound` when given none. |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | Server: on death, stops updating the agent and cancels its action. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Updates `HasWalker` from whether a walker is set. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeactionfinished" /><code>{"private void ActiveActionFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Clears the active action when it finishes or is cancelled, so the agent picks a new one on its next update. |
| <Link id="m-checkchange" /><code>{"private bool Alta.Intelligence.ILinkedAgent.CheckChange()"}</code> | Called by `AgentUpdater`: picks a new action once the update interval has passed, if enabled. |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Server: deregisters from `AgentUpdater` and cancels the active action when the entity is destroyed. |
| <Link id="m-healthchanged" /><code>{"private void HealthChanged("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" damage)"}</code> | Server: when the agent takes damage from a wielder, adds that target to `Hurt` and probably to the decider's targets. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws a small cube coloured by update priority. |
| <Link id="m-syncevent-2" /><code>{"private void SyncEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int eventIndex)"}</code> | Method sync handler: remote clients fire the channel event the server sent. |
| <Link id="m-updateagent" /><code>{"private void Alta.Intelligence.ILinkedAgent.UpdateAgent()"}</code> | Called by `AgentUpdater` each update: decays hurt, checks the target still exists and updates the active action. |
| <Link id="m-updatehurt" /><code>{"private void UpdateHurt()"}</code> | Lowers each hurt value by `hurtReducePerSecond` and forgets targets that hit 0 or no longer exist. |

</details>

## Used in

Members of other types that take, return or hold a `Agent`:

[`ActionComponentSet.actionSet`](/game-api/types/alta-intelligence/actioncomponentset#m-actionset), [`ActiveIdle.GetAction`](/game-api/types/alta-intelligence/activeidle#m-getaction), [`ActiveSchmeecheePlant.GetAction`](/game-api/types/alta-intelligence/activeschmeecheeplant#m-getaction), [`Chance.Evaluate`](/game-api/types/alta-intelligence/chance#m-evaluate), [`FaceTarget.agent`](/game-api/types/alta-intelligence/facetarget#m-agent), [`FailTargetOperation.Evaluate`](/game-api/types/alta-intelligence/failtargetoperation#m-evaluate), [`Formula<T>.Evaluate`](/game-api/types/alta-intelligence/formula-t#m-evaluate-2), [`Grounded.Evaluate`](/game-api/types/alta-intelligence/grounded#m-evaluate), [`InverseLerpSenseSelf.Evaluate`](/game-api/types/alta-intelligence/inverselerpsenseself#m-evaluate), [`InverseLerpSenseTarget.Evaluate`](/game-api/types/alta-intelligence/inverselerpsensetarget#m-evaluate), [`Lifetime.Evaluate`](/game-api/types/alta-intelligence/lifetime#m-evaluate), [`PickupAgent.agent`](/game-api/types/alta-intelligence/pickupagent#m-agent), [`ProjectileShooter.agent`](/game-api/types/alta-intelligence/projectileshooter#m-agent), [`RaycastGrounded.Evaluate`](/game-api/types/alta-intelligence/raycastgrounded#m-evaluate), [`RepeatIfHasTarget.agent`](/game-api/types/alta-intelligence/repeatifhastarget#m-agent), [`RotateToTargetWorldXZ.agent`](/game-api/types/alta-intelligence/rotatetotargetworldxz#m-agent), [`RVOBlockedValue.Evaluate`](/game-api/types/alta-intelligence/rvoblockedvalue#m-evaluate), [`SameTarget.Evaluate`](/game-api/types/alta-intelligence/sametarget#m-evaluate), [`Schmeechee.Operation.Evaluate`](/game-api/types/alta-intelligence/schmeechee-operation#m-evaluate), [`StatValue.Evaluate`](/game-api/types/alta-intelligence/statvalue#m-evaluate), [`TargetCollector.agent`](/game-api/types/alta-intelligence/targetcollector#m-agent), [`TargetCollector.Agent`](/game-api/types/alta-intelligence/targetcollector#m-agent-2), [`TargetOperation.Evaluate`](/game-api/types/alta-intelligence/targetoperation#m-evaluate), [`VelocityLimit.Evaluate`](/game-api/types/alta-intelligence/velocitylimit#m-evaluate), [`IndependentWalker.baseTopic`](/game-api/types/alta-intelligence/independentwalker#m-basetopic), [`EruptAreaAttack.agent`](/game-api/types/global-e-h/eruptareaattack#m-agent).
