---
title: "Wyrm"
description: "The wyrm creature's AI agent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Wyrm

A **class** in `Root.Township`, `Alta.Intelligence`.

The wyrm creature's AI agent. It switches between a burrowed and an emerged action set, and syncs whether its body and collision are visible. The AI runs on the server.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Wyrm>`](/mod/game-api/types/alta-intelligence/agent-tthis)
- **Derived types** [`Wyrm`](/mod/game-api/types/alta-intelligence/wyrm), [`ActiveCatch`](/mod/game-api/types/alta-intelligence/activecatch), [`ActiveDig`](/mod/game-api/types/alta-intelligence/activedig), [`ActiveDodge`](/mod/game-api/types/alta-intelligence/activedodge), [`ActiveEmerge`](/mod/game-api/types/alta-intelligence/activeemerge), [`ActiveMeleeAttack`](/mod/game-api/types/alta-intelligence/activemeleeattack), [`ActiveSpin`](/mod/game-api/types/alta-intelligence/activespin), [`ActiveSpit`](/mod/game-api/types/alta-intelligence/activespit)
- **Documented in** [Common creatures](/mod/game-api/creatures/common-creatures#wyrm), [Creature data](/mod/game-api/creatures/creature-data), [Creatures and AI](/mod/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Wyrm()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">Backing field for `Body`: the part that's shown when emerged and turned toward the target.</span> |
| <Link id="m-burrowedactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" burrowedActions"}</code> | <span className="api-desc">Action set used while burrowed. Built once per set and shared by all wyrms.</span> |
| <Link id="m-emergedactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" emergedActions"}</code> | <span className="api-desc">Action set used while emerged. Built once per set and shared by all wyrms.</span> |
| <Link id="m-head" /><code>{"private Transform head"}</code> | <span className="api-desc">Transform used as the wyrm's `Position`.</span> |
| <Link id="m-impactors" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"[] impactors"}</code> | <span className="api-desc">Impact generators whose current attacks `Attacks` returns.</span> |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> | <span className="api-desc">Animator bool set true on death. Defaults to `isDead`.</span> |
| <Link id="m-killedanimatortrigger" /><code>{"private string killedAnimatorTrigger"}</code> | <span className="api-desc">Animator parameter set on death. Defaults to `Killed`; it's set with `SetBool`, not as a trigger.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Degrees per second `RotateToTarget` turns the body, before the speed multiplier.</span> |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> | <span className="api-desc">Backing field for `SameTargetMultiplier`. Defaults to 1.2.</span> |
| <Link id="m-syncgameobjects" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncGameObjects"}</code> | <span className="api-desc">Method sync for `SyncGameObjects`, sent on connect and when the body is shown or hidden.</span> |
| <Link id="m-wasidle" /><code>{"private bool wasIdle"}</code> | <span className="api-desc">Whether the last action was idle, so `IdleStart` only resets when idling starts.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; }"}</code> | <span className="api-desc">The body transform that `RotateToTarget` turns.</span> |
| <Link id="m-burrowedpossibilityset" /><code><Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{"> BurrowedPossibilitySet { get; set; }"}</code> | <span className="api-desc">Actions this wyrm can pick while underground.</span> |
| <Link id="m-emergedpossibilityset" /><code><Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{"> EmergedPossibilitySet { get; set; }"}</code> | <span className="api-desc">Actions this wyrm can pick while above ground.</span> |
| <Link id="m-flurrychance" /><code>{"float FlurryChance { get; set; }"}</code> | <span className="api-desc">Current chance of a follow-up melee flurry. Melee attacks raise it each hit and reset it to 0 when a flurry fires.</span> |
| <Link id="m-idlestart" /><code>{"float IdleStart { get; private set; }"}</code> | <span className="api-desc">Time the wyrm went idle. The dig action uses the idle time to decide when to burrow; set far in the future while busy.</span> |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | <span className="api-desc">The head's position, used as the wyrm's position for targeting.</span> |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> | <span className="api-desc">Configured weighting for keeping the same target.</span> |
| <Link id="m-burrowedactions-2" /><code>{"protected static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{">> BurrowedActions { get; private set; }"}</code> | <span className="api-desc">Shared cache of burrowed action sets, one per `ActionComponentSet` asset, across all wyrms.</span> |
| <Link id="m-emergedactions-2" /><code>{"protected static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{">> EmergedActions { get; private set; }"}</code> | <span className="api-desc">Shared cache of emerged action sets, one per `ActionComponentSet` asset, across all wyrms.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks() (iterator)"}</code> | <span className="api-desc">Yields the current attack of each of the wyrm's impactors.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network message that syncs body visibility.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player whether the body is currently shown.</span> |
| <Link id="m-rotatetotarget" /><code>{"void RotateToTarget(float speedMultiplier = 1)"}</code> | <span className="api-desc">Turns the body on the horizontal plane towards the current target at the configured speed.</span> |
| <Link id="m-setgameobjectsactive" /><code>{"void SetGameObjectsActive(bool isActive)"}</code> | <span className="api-desc">Shows or hides the body and collision objects. On the server it also syncs the change to the chunk.</span> |
| <Link id="m-useburrowedactions" /><code>{"void UseBurrowedActions()"}</code> | <span className="api-desc">Switches the action decider to the burrowed set. Called when the wyrm digs.</span> |
| <Link id="m-useemergedactions" /><code>{"void UseEmergedActions()"}</code> | <span className="api-desc">Switches the action decider to the emerged set. Called when the wyrm emerges.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Turns collision off, makes its colliders ignore each other and hides the body.</span> |
| <Link id="m-changeaction" /><code>{"protected override bool ChangeAction()"}</code> | <span className="api-desc">Picks a new action and tracks `IdleStart`, so idle time counts from when it went idle.</span> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | <span className="api-desc">Builds or reuses the burrowed and emerged action sets and starts in burrowed mode.</span> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | <span className="api-desc">Creates the shared action set caches.</span> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | <span className="api-desc">Turns off collision and sets the death animator parameters.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncgameobjects-2" /><code>{"private void SyncGameObjects("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool value)"}</code> | <span className="api-desc">Syncs whether the wyrm's body and collision are shown; clients apply it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Wyrm`:

<div className="api-used-in">

[`ActiveCatch.GetAction`](/mod/game-api/types/alta-intelligence/activecatch#m-getaction), [`ActiveDig.GetAction`](/mod/game-api/types/alta-intelligence/activedig#m-getaction), [`ActiveDodge.GetAction`](/mod/game-api/types/alta-intelligence/activedodge#m-getaction), [`ActiveEmerge.GetAction`](/mod/game-api/types/alta-intelligence/activeemerge#m-getaction), [`ActiveMeleeAttack.GetAction`](/mod/game-api/types/alta-intelligence/activemeleeattack#m-getaction), [`ActiveSpin.GetAction`](/mod/game-api/types/alta-intelligence/activespin#m-getaction), [`ActiveSpit.GetAction`](/mod/game-api/types/alta-intelligence/activespit#m-getaction).

</div>
