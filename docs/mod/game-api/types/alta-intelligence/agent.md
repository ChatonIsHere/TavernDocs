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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Target`](/mod/game-api/types/alta-intelligence/target), [`IAgentDebugger`](/mod/game-api/types/alta-intelligence/iagentdebugger), [`ILinkedAgent`](/mod/game-api/types/alta-intelligence/ilinkedagent), [`IAgent`](/mod/game-api/types/alta-intelligence/iagent), [`ITarget`](/mod/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`ActiveAttackDirectionReact`](/mod/game-api/types/alta-intelligence/activeattackdirectionreact), [`ActiveCircleReposition`](/mod/game-api/types/alta-intelligence/activecirclereposition), [`ActiveCircleTarget`](/mod/game-api/types/alta-intelligence/activecircletarget), [`ActiveCrawl`](/mod/game-api/types/alta-intelligence/activecrawl), [`ActiveDelayEnterSet`](/mod/game-api/types/alta-intelligence/activedelayenterset), [`ActiveDeleted`](/mod/game-api/types/alta-intelligence/activedeleted), [`ActiveDisabled`](/mod/game-api/types/alta-intelligence/activedisabled), [`ActiveDistanceFromTarget`](/mod/game-api/types/alta-intelligence/activedistancefromtarget), [`ActiveFaceTarget`](/mod/game-api/types/alta-intelligence/activefacetarget), [`ActiveFollow`](/mod/game-api/types/alta-intelligence/activefollow), [`ActiveIdle`](/mod/game-api/types/alta-intelligence/activeidle), [`ActiveInteractApproach`](/mod/game-api/types/alta-intelligence/activeinteractapproach), [`ActiveJumpAt`](/mod/game-api/types/alta-intelligence/activejumpat), [`ActiveNest`](/mod/game-api/types/alta-intelligence/activenest), [`ActiveRegainControl`](/mod/game-api/types/alta-intelligence/activeregaincontrol), [`ActiveSwapActionSet`](/mod/game-api/types/alta-intelligence/activeswapactionset), [`ActiveThreaten`](/mod/game-api/types/alta-intelligence/activethreaten), [`ActiveWander`](/mod/game-api/types/alta-intelligence/activewander), [`Agent<TThis>`](/mod/game-api/types/alta-intelligence/agent-tthis), [`AgentRollUpInPlace`](/mod/game-api/types/alta-intelligence/agentrollupinplace), [`BasicActiveAgentMoveCloser<T>`](/mod/game-api/types/alta-intelligence/basicactiveagentmovecloser-t)
- **Nested types** [`ChannelEvent`](/mod/game-api/types/alta-intelligence/agent-channelevent)
- **Attributes** `SelectionBase`
- **Documented in** [Agent](/mod/game-api/creatures/agent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Agent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collectors" /><code>{"protected HashSet<"}<Link to="/mod/game-api/types/alta-intelligence/targetcollector">{"TargetCollector"}</Link>{"> collectors"}</code> | <span className="api-desc">Protected: target collectors added with `AddCollector`.</span> |
| <Link id="m-hurtkeys" /><code>{"protected HashSet<"}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> hurtKeys"}</code> | <span className="api-desc">Protected: the attackers currently tracked in `Hurt`.</span> |
| <Link id="m-ishurtaddingtarget" /><code>{"protected bool isHurtAddingTarget"}</code> | <span className="api-desc">Protected: when true (default), being hurt adds the attacker as a target, and removes it when the hurt fades.</span> |

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionstarttime" /><code>{"private float actionStartTime"}</code> | <span className="api-desc">Time the current action started. Used by `ActionDuration` and `NextUpdateProgress`.</span> |
| <Link id="m-animator" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> | <span className="api-desc">Backing field for `NetworkAnimator`.</span> |
| <Link id="m-channelevents" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent-channelevent">{"Agent.ChannelEvent"}</Link>{"[] channelEvents"}</code> | <span className="api-desc">Backing field for `ChannelEvents`: Unity events fired by actions on each hook channel, optionally networked.</span> |
| <Link id="m-collision" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" collision"}</code> | <span className="api-desc">Backing field for `Collision`.</span> |
| <Link id="m-director" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/director">{"Director"}</Link>{" director"}</code> | <span className="api-desc">Backing field for `Director`.</span> |
| <Link id="m-eventmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/agent-channelevent">{"Agent.ChannelEvent"}</Link>{"> eventMap"}</code> | <span className="api-desc">Channel to event lookup built in `Initialize`. Clients only get networked channels.</span> |
| <Link id="m-haswalker" /><code>{"private bool hasWalker"}</code> | <span className="api-desc">Backing field for `HasWalker`, set in `OnValidate` when a walker is assigned.</span> |
| <Link id="m-hurtreducepersecond" /><code>{"private float hurtReducePerSecond"}</code> | <span className="api-desc">How fast hurt values per attacker fade. 0.1 per second by default.</span> |
| <Link id="m-ignoretimers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", TimeSpan> ignoreTimers"}</code> | <span className="api-desc">Targets that `RemoveTarget` told the agent to ignore, with the time the ignore ends.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Backing field for `IsEnabled`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-nextupdate" /><code>{"private float nextUpdate"}</code> | <span className="api-desc">Time of the next action re-pick. Set to max for actions that can't be cancelled, 0 when an action ends.</span> |
| <Link id="m-providedtargets" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> providedTargets"}</code> | <span className="api-desc">Targets added through `AddTarget`. Hurt targets not in here are dropped when their hurt fades.</span> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | <span className="api-desc">Backing field for `Rigidbody`.</span> |
| <Link id="m-syncevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncEvent"}</code> | <span className="api-desc">Method sync the server uses to send networked channel events to clients.</span> |
| <Link id="m-tempremoving" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> tempRemoving"}</code> | <span className="api-desc">Shared scratch list used by `UpdateHurt`.</span> |
| <Link id="m-updateinterval" /><code>{"private float updateInterval"}</code> | <span className="api-desc">Backing field for `UpdateInterval`: seconds between action re-picks. 0.1 by default.</span> |
| <Link id="m-walker" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" walker"}</code> | <span className="api-desc">Backing field for `Walker`, the pathfinding walker. Its object is off until the AI initializes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionduration" /><code>{"float ActionDuration { get; }"}</code> | <span className="api-desc">Seconds since the current action started.</span> |
| <Link id="m-activeaction" /><code><Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" ActiveAction { get; protected set; }"}</code> | <span className="api-desc">The running action instance, or null when idle.</span> |
| <Link id="m-channelevents-2" /><code><Link to="/mod/game-api/types/alta-intelligence/agent-channelevent">{"Agent.ChannelEvent"}</Link>{"[] ChannelEvents { get; }"}</code> | <span className="api-desc">UnityEvents per hook channel that actions fire, optionally networked to clients.</span> |
| <Link id="m-collision-2" /><code><Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" Collision { get; }"}</code> | <span className="api-desc">The collider group for the creature's body.</span> |
| <Link id="m-creationtime" /><code>{"float CreationTime { get; private set; }"}</code> | <span className="api-desc">Server: `Time.time` when the agent was set up on the server.</span> |
| <Link id="m-director-2" /><code><Link to="/mod/game-api/types/alta-intelligence/director">{"Director"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/director">{"Director"}</Link>{" { get; }"}</code> | <span className="api-desc">The `Director` set on the prefab.</span> |
| <Link id="m-generalactiondecider" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-intelligence/iactiondecider">{"IActionDecider"}</Link>{" GeneralActionDecider { get; }"}</code> | <span className="api-desc">The decider that scores possible actions and targets.</span> |
| <Link id="m-hastarget" /><code>{"bool HasTarget { get; private set; }"}</code> | <span className="api-desc">True while the current action uses a target and that target still exists.</span> |
| <Link id="m-haswalker-2" /><code>{"bool HasWalker { get; }"}</code> | <span className="api-desc">Whether a pathfinding `Walker` is set on the prefab.</span> |
| <Link id="m-hurt" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> Hurt { get; }"}</code> | <span className="api-desc">How much each attacker has hurt this agent, as a fraction of max health. Fades over time.</span> |
| <Link id="m-isacting" /><code>{"bool IsActing { get; private set; }"}</code> | <span className="api-desc">True while an action is running.</span> |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Server: turning it off cancels the current action and disables the walker; on picks a new action.</span> |
| <Link id="m-networkanimator" /><code><Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" { get; }"}</code> | <span className="api-desc">The networked animator for the creature.</span> |
| <Link id="m-nextupdateprogress" /><code>{"float NextUpdateProgress { get; }"}</code> | <span className="api-desc">How far through the current decision interval the agent is, 0 to 1.</span> |
| <Link id="m-populationitem" /><code><Link to="/mod/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Server: the `PopulationItem` on the prefab root, if it came from a population.</span> |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> | <span className="api-desc">The creature's rigidbody.</span> |
| <Link id="m-selected" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" Selected { get; set; }"}</code> | <span className="api-desc">Static: the agent picked for debugging. Nothing sets it in this build.</span> |
| <Link id="m-target" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> | <span className="api-desc">The target of the current action.</span> |
| <Link id="m-updateinterval-2" /><code>{"float UpdateInterval { get; }"}</code> | <span className="api-desc">Seconds between decision checks (default 0.1). Actions that can't be cancelled skip checks until done.</span> |
| <Link id="m-walker-2" /><code><Link to="/mod/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" { get; }"}</code> | <span className="api-desc">The pathfinding `Walker`, if any.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-ilinkedagent-node" /><code>{"private LinkedListNode<"}<Link to="/mod/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{"> Alta.Intelligence.ILinkedAgent.Node { get; set; }"}</code> | <span className="api-desc">This agent's node in the `AgentUpdater` list.</span> |
| <Link id="m-alta-intelligence-ilinkedagent-priority" /><code>{"private int Alta.Intelligence.ILinkedAgent.Priority { get; set; }"}</code> | <span className="api-desc">Update priority set by `AgentUpdater`. Gizmos colour agents by it.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-noactionfound" /><code>{"event Action NoActionFound"}</code> | <span className="api-desc">Raised when the decider finds no action to start.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcollector" /><code>{"void AddCollector("}<Link to="/mod/game-api/types/alta-intelligence/targetcollector">{"TargetCollector"}</Link>{" collector)"}</code> | <span className="api-desc">Registers a target collector. They are force-updated each time the agent picks a new action.</span> |
| <Link id="m-addtarget" /><code>{"bool AddTarget("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Server: gives the decider a target to consider. False if it is the agent itself, already added or still in an ignore timer.</span> |
| <Link id="m-cancelcurrentaction" /><code>{"void CancelCurrentAction()"}</code> | <span className="api-desc">Cancels the running action, if any.</span> |
| <Link id="m-doaction" /><code>{"abstract void DoAction("}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" action, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Starts a given action component against a target, skipping the decider.</span> |
| <Link id="m-firechannelevent" /><code>{"void FireChannelEvent("}<Link to="/mod/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" channel, "}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> | <span className="api-desc">Runs the event on a hook channel. The server also sends networked ones to clients in the chunk.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up event syncing and maps the channel events (only networked ones on clients).</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: records creation time, finds the `PopulationItem`, starts the AI and registers with `AgentUpdater` if alive.</span> |
| <Link id="m-removetarget" /><code>{"bool RemoveTarget("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float duration = -1)"}</code> | <span className="api-desc">Server: removes a target, or with a duration, ignores it for that many seconds. Attackers in `Hurt` stay.</span> |
| <Link id="m-useactioncomponentset" /><code>{"abstract void UseActionComponentSet("}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set)"}</code> | <span className="api-desc">Switches the decider to a different set of possible actions.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Virtual Unity `Awake`. In `Agent<TThis>` it counts spawned agents and turns the walker off until the AI starts.</span> |
| <Link id="m-changeaction" /><code>{"protected abstract bool ChangeAction()"}</code> | <span className="api-desc">Protected: picks and starts the best action. Called when the update interval is up.</span> |
| <Link id="m-initializeai" /><code>{"protected virtual void InitializeAi()"}</code> | <span className="api-desc">Protected: sets up the AI on the server. `Agent<TThis>` creates the action decider and turns on the walker.</span> |
| <Link id="m-internalrestartcurrentaction" /><code>{"protected bool InternalRestartCurrentAction()"}</code> | <span className="api-desc">Protected: restarts timing for the current action without starting it again.</span> |
| <Link id="m-internalstartaction" /><code>{"protected bool InternalStartAction<T>("}<Link to="/mod/game-api/types/alta-intelligence/iactiontarget">{"IActionTarget"}</Link>{" actionTarget, "}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<T> action, T thisAgent)"}</code> | <span className="api-desc">Protected: starts an action and hooks its finish. Raises `NoActionFound` when given none.</span> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | <span className="api-desc">Server: on death, stops updating the agent and cancels its action.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Updates `HasWalker` from whether a walker is set.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeactionfinished" /><code>{"private void ActiveActionFinished("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Clears the active action when it finishes or is cancelled, so the agent picks a new one on its next update.</span> |
| <Link id="m-checkchange" /><code>{"private bool Alta.Intelligence.ILinkedAgent.CheckChange()"}</code> | <span className="api-desc">Called by `AgentUpdater`: picks a new action once the update interval has passed, if enabled.</span> |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Server: deregisters from `AgentUpdater` and cancels the active action when the entity is destroyed.</span> |
| <Link id="m-healthchanged" /><code>{"private void HealthChanged("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" damage)"}</code> | <span className="api-desc">Server: when the agent takes damage from a wielder, adds that target to `Hurt` and probably to the decider's targets.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws a small cube coloured by update priority.</span> |
| <Link id="m-syncevent-2" /><code>{"private void SyncEvent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int eventIndex)"}</code> | <span className="api-desc">Method sync handler: remote clients fire the channel event the server sent.</span> |
| <Link id="m-updateagent" /><code>{"private void Alta.Intelligence.ILinkedAgent.UpdateAgent()"}</code> | <span className="api-desc">Called by `AgentUpdater` each update: decays hurt, checks the target still exists and updates the active action.</span> |
| <Link id="m-updatehurt" /><code>{"private void UpdateHurt()"}</code> | <span className="api-desc">Lowers each hurt value by `hurtReducePerSecond` and forgets targets that hit 0 or no longer exist.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Agent`:

<div className="api-used-in">

[`ActionComponentSet.actionSet`](/mod/game-api/types/alta-intelligence/actioncomponentset#m-actionset), [`ActiveIdle.GetAction`](/mod/game-api/types/alta-intelligence/activeidle#m-getaction), [`ActiveSchmeecheePlant.GetAction`](/mod/game-api/types/alta-intelligence/activeschmeecheeplant#m-getaction), [`Chance.Evaluate`](/mod/game-api/types/alta-intelligence/chance#m-evaluate), [`FaceTarget.agent`](/mod/game-api/types/alta-intelligence/facetarget#m-agent), [`FailTargetOperation.Evaluate`](/mod/game-api/types/alta-intelligence/failtargetoperation#m-evaluate), [`Formula<T>.Evaluate`](/mod/game-api/types/alta-intelligence/formula-t#m-evaluate-2), [`Grounded.Evaluate`](/mod/game-api/types/alta-intelligence/grounded#m-evaluate), [`InverseLerpSenseSelf.Evaluate`](/mod/game-api/types/alta-intelligence/inverselerpsenseself#m-evaluate), [`InverseLerpSenseTarget.Evaluate`](/mod/game-api/types/alta-intelligence/inverselerpsensetarget#m-evaluate), [`Lifetime.Evaluate`](/mod/game-api/types/alta-intelligence/lifetime#m-evaluate), [`PickupAgent.agent`](/mod/game-api/types/alta-intelligence/pickupagent#m-agent), [`ProjectileShooter.agent`](/mod/game-api/types/alta-intelligence/projectileshooter#m-agent), [`RaycastGrounded.Evaluate`](/mod/game-api/types/alta-intelligence/raycastgrounded#m-evaluate), [`RepeatIfHasTarget.agent`](/mod/game-api/types/alta-intelligence/repeatifhastarget#m-agent), [`RotateToTargetWorldXZ.agent`](/mod/game-api/types/alta-intelligence/rotatetotargetworldxz#m-agent), [`RVOBlockedValue.Evaluate`](/mod/game-api/types/alta-intelligence/rvoblockedvalue#m-evaluate), [`SameTarget.Evaluate`](/mod/game-api/types/alta-intelligence/sametarget#m-evaluate), [`Schmeechee.Operation.Evaluate`](/mod/game-api/types/alta-intelligence/schmeechee-operation#m-evaluate), [`StatValue.Evaluate`](/mod/game-api/types/alta-intelligence/statvalue#m-evaluate), [`TargetCollector.agent`](/mod/game-api/types/alta-intelligence/targetcollector#m-agent), [`TargetCollector.Agent`](/mod/game-api/types/alta-intelligence/targetcollector#m-agent-2), [`TargetOperation.Evaluate`](/mod/game-api/types/alta-intelligence/targetoperation#m-evaluate), [`VelocityLimit.Evaluate`](/mod/game-api/types/alta-intelligence/velocitylimit#m-evaluate), [`IndependentWalker.baseTopic`](/mod/game-api/types/alta-intelligence/independentwalker#m-basetopic), [`EruptAreaAttack.agent`](/mod/game-api/types/global-e-h/eruptareaattack#m-agent).

</div>
