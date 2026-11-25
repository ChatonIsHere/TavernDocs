---
title: "Agent"
description: "The AI parts run on the server only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Agent

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

The AI parts run on the server only.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Target`](/game-api/types/alta-intelligence/target), [`IAgentDebugger`](/game-api/types/alta-intelligence/iagentdebugger), [`ILinkedAgent`](/game-api/types/alta-intelligence/ilinkedagent), [`IAgent`](/game-api/types/alta-intelligence/iagent), [`ITarget`](/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`ActiveAttackDirectionReact`](/game-api/types/alta-intelligence/activeattackdirectionreact), [`ActiveCircleReposition`](/game-api/types/alta-intelligence/activecirclereposition), [`ActiveCircleTarget`](/game-api/types/alta-intelligence/activecircletarget), [`ActiveCrawl`](/game-api/types/alta-intelligence/activecrawl), [`ActiveDelayEnterSet`](/game-api/types/alta-intelligence/activedelayenterset), [`ActiveDeleted`](/game-api/types/alta-intelligence/activedeleted), [`ActiveDisabled`](/game-api/types/alta-intelligence/activedisabled), [`ActiveDistanceFromTarget`](/game-api/types/alta-intelligence/activedistancefromtarget), [`ActiveFaceTarget`](/game-api/types/alta-intelligence/activefacetarget), [`ActiveFollow`](/game-api/types/alta-intelligence/activefollow), [`ActiveIdle`](/game-api/types/alta-intelligence/activeidle), [`ActiveInteractApproach`](/game-api/types/alta-intelligence/activeinteractapproach), [`ActiveJumpAt`](/game-api/types/alta-intelligence/activejumpat), [`ActiveNest`](/game-api/types/alta-intelligence/activenest), [`ActiveRegainControl`](/game-api/types/alta-intelligence/activeregaincontrol), [`ActiveSwapActionSet`](/game-api/types/alta-intelligence/activeswapactionset), [`ActiveThreaten`](/game-api/types/alta-intelligence/activethreaten), [`ActiveWander`](/game-api/types/alta-intelligence/activewander), [`Agent<TThis>`](/game-api/types/alta-intelligence/agent-tthis), [`AgentRollUpInPlace`](/game-api/types/alta-intelligence/agentrollupinplace), [`BasicActiveAgentMoveCloser<T>`](/game-api/types/alta-intelligence/basicactiveagentmovecloser-t)
- **Nested types** [`ChannelEvent`](/game-api/types/alta-intelligence/agent-channelevent)
- **Attributes** `SelectionBase`
- **Documented in** [Agent](/game-api/creatures/agent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Agent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actionstarttime" /><code>{"private float actionStartTime"}</code> |  |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> |  |
| <Link id="m-channelevents" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent-channelevent">{"Agent.ChannelEvent"}</Link>{"[] channelEvents"}</code> |  |
| <Link id="m-collectors" /><code>{"protected HashSet<"}<Link to="/game-api/types/alta-intelligence/targetcollector">{"TargetCollector"}</Link>{"> collectors"}</code> |  |
| <Link id="m-collision" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" collision"}</code> |  |
| <Link id="m-director" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/director">{"Director"}</Link>{" director"}</code> |  |
| <Link id="m-eventmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/agent-channelevent">{"Agent.ChannelEvent"}</Link>{"> eventMap"}</code> |  |
| <Link id="m-haswalker" /><code>{"private bool hasWalker"}</code> |  |
| <Link id="m-hurtkeys" /><code>{"protected HashSet<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> hurtKeys"}</code> |  |
| <Link id="m-hurtreducepersecond" /><code>{"private float hurtReducePerSecond"}</code> |  |
| <Link id="m-ignoretimers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", TimeSpan> ignoreTimers"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-ishurtaddingtarget" /><code>{"protected bool isHurtAddingTarget"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-nextupdate" /><code>{"private float nextUpdate"}</code> |  |
| <Link id="m-providedtargets" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> providedTargets"}</code> |  |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |  |
| <Link id="m-syncevent" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncEvent"}</code> |  |
| <Link id="m-tempremoving" /><code>{"private static List<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> tempRemoving"}</code> |  |
| <Link id="m-updateinterval" /><code>{"private float updateInterval"}</code> |  |
| <Link id="m-walker" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" walker"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actionduration" /><code>{"float ActionDuration { get; }"}</code> |  |
| <Link id="m-activeaction" /><code><Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" ActiveAction { get; protected set; }"}</code> |  |
| <Link id="m-channelevents-2" /><code><Link to="/game-api/types/alta-intelligence/agent-channelevent">{"Agent.ChannelEvent"}</Link>{"[] ChannelEvents { get; }"}</code> |  |
| <Link id="m-collision-2" /><code><Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" Collision { get; }"}</code> |  |
| <Link id="m-creationtime" /><code>{"float CreationTime { get; private set; }"}</code> |  |
| <Link id="m-director-2" /><code><Link to="/game-api/types/alta-intelligence/director">{"Director"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/director">{"Director"}</Link>{" { get; }"}</code> |  |
| <Link id="m-generalactiondecider" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/iactiondecider">{"IActionDecider"}</Link>{" GeneralActionDecider { get; }"}</code> |  |
| <Link id="m-hastarget" /><code>{"bool HasTarget { get; private set; }"}</code> |  |
| <Link id="m-haswalker-2" /><code>{"bool HasWalker { get; }"}</code> |  |
| <Link id="m-hurt" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> Hurt { get; }"}</code> |  |
| <Link id="m-isacting" /><code>{"bool IsActing { get; private set; }"}</code> |  |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> |  |
| <Link id="m-networkanimator" /><code><Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" { get; }"}</code> |  |
| <Link id="m-nextupdateprogress" /><code>{"float NextUpdateProgress { get; }"}</code> |  |
| <Link id="m-populationitem" /><code><Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> |  |
| <Link id="m-selected" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" Selected { get; set; }"}</code> |  |
| <Link id="m-target" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> |  |
| <Link id="m-updateinterval-2" /><code>{"float UpdateInterval { get; }"}</code> |  |
| <Link id="m-walker-2" /><code><Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" { get; }"}</code> |  |
| <Link id="m-alta-intelligence-ilinkedagent-node" /><code>{"private LinkedListNode<"}<Link to="/game-api/types/alta-intelligence/ilinkedagent">{"ILinkedAgent"}</Link>{"> Alta.Intelligence.ILinkedAgent.Node { get; set; }"}</code> |  |
| <Link id="m-alta-intelligence-ilinkedagent-priority" /><code>{"private int Alta.Intelligence.ILinkedAgent.Priority { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-noactionfound" /><code>{"event Action NoActionFound"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcollector" /><code>{"void AddCollector("}<Link to="/game-api/types/alta-intelligence/targetcollector">{"TargetCollector"}</Link>{" collector)"}</code> |  |
| <Link id="m-addtarget" /><code>{"bool AddTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-cancelcurrentaction" /><code>{"void CancelCurrentAction()"}</code> |  |
| <Link id="m-doaction" /><code>{"abstract void DoAction("}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" action, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-firechannelevent" /><code>{"void FireChannelEvent("}<Link to="/game-api/types/alta-intelligence/hookeventchannel">{"HookEventChannel"}</Link>{" channel, "}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" action)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-removetarget" /><code>{"bool RemoveTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float duration = -1)"}</code> |  |
| <Link id="m-useactioncomponentset" /><code>{"abstract void UseActionComponentSet("}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set)"}</code> |  |
| <Link id="m-activeactionfinished" /><code>{"private void ActiveActionFinished("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-changeaction" /><code>{"protected abstract bool ChangeAction()"}</code> |  |
| <Link id="m-checkchange" /><code>{"private bool Alta.Intelligence.ILinkedAgent.CheckChange()"}</code> |  |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-healthchanged" /><code>{"private void HealthChanged("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" damage)"}</code> |  |
| <Link id="m-initializeai" /><code>{"protected virtual void InitializeAi()"}</code> |  |
| <Link id="m-internalrestartcurrentaction" /><code>{"protected bool InternalRestartCurrentAction()"}</code> |  |
| <Link id="m-internalstartaction" /><code>{"protected bool InternalStartAction<T>("}<Link to="/game-api/types/alta-intelligence/iactiontarget">{"IActionTarget"}</Link>{" actionTarget, "}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<T> action, T thisAgent)"}</code> |  |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-syncevent-2" /><code>{"private void SyncEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int eventIndex)"}</code> |  |
| <Link id="m-updateagent" /><code>{"private void Alta.Intelligence.ILinkedAgent.UpdateAgent()"}</code> |  |
| <Link id="m-updatehurt" /><code>{"private void UpdateHurt()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Agent`:

[`ActionComponentSet.actionSet`](/game-api/types/alta-intelligence/actioncomponentset#m-actionset), [`ActiveIdle.GetAction`](/game-api/types/alta-intelligence/activeidle#m-getaction), [`ActiveSchmeecheePlant.GetAction`](/game-api/types/alta-intelligence/activeschmeecheeplant#m-getaction), [`Chance.Evaluate`](/game-api/types/alta-intelligence/chance#m-evaluate), [`FaceTarget.agent`](/game-api/types/alta-intelligence/facetarget#m-agent), [`FailTargetOperation.Evaluate`](/game-api/types/alta-intelligence/failtargetoperation#m-evaluate), [`Formula<T>.Evaluate`](/game-api/types/alta-intelligence/formula-t#m-evaluate-2), [`Grounded.Evaluate`](/game-api/types/alta-intelligence/grounded#m-evaluate), [`InverseLerpSenseSelf.Evaluate`](/game-api/types/alta-intelligence/inverselerpsenseself#m-evaluate), [`InverseLerpSenseTarget.Evaluate`](/game-api/types/alta-intelligence/inverselerpsensetarget#m-evaluate), [`Lifetime.Evaluate`](/game-api/types/alta-intelligence/lifetime#m-evaluate), [`PickupAgent.agent`](/game-api/types/alta-intelligence/pickupagent#m-agent), [`ProjectileShooter.agent`](/game-api/types/alta-intelligence/projectileshooter#m-agent), [`RaycastGrounded.Evaluate`](/game-api/types/alta-intelligence/raycastgrounded#m-evaluate), [`RepeatIfHasTarget.agent`](/game-api/types/alta-intelligence/repeatifhastarget#m-agent), [`RotateToTargetWorldXZ.agent`](/game-api/types/alta-intelligence/rotatetotargetworldxz#m-agent), [`RVOBlockedValue.Evaluate`](/game-api/types/alta-intelligence/rvoblockedvalue#m-evaluate), [`SameTarget.Evaluate`](/game-api/types/alta-intelligence/sametarget#m-evaluate), [`Schmeechee.Operation.Evaluate`](/game-api/types/alta-intelligence/schmeechee-operation#m-evaluate), [`StatValue.Evaluate`](/game-api/types/alta-intelligence/statvalue#m-evaluate), [`TargetCollector.agent`](/game-api/types/alta-intelligence/targetcollector#m-agent), [`TargetCollector.Agent`](/game-api/types/alta-intelligence/targetcollector#m-agent-2), [`TargetOperation.Evaluate`](/game-api/types/alta-intelligence/targetoperation#m-evaluate), [`VelocityLimit.Evaluate`](/game-api/types/alta-intelligence/velocitylimit#m-evaluate), [`IndependentWalker.baseTopic`](/game-api/types/alta-intelligence/independentwalker#m-basetopic), [`EruptAreaAttack.agent`](/game-api/types/global-e-h/eruptareaattack#m-agent).
