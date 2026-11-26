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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Wyrm>`](/game-api/types/alta-intelligence/agent-tthis)
- **Derived types** [`Wyrm`](/game-api/types/alta-intelligence/wyrm), [`ActiveCatch`](/game-api/types/alta-intelligence/activecatch), [`ActiveDig`](/game-api/types/alta-intelligence/activedig), [`ActiveDodge`](/game-api/types/alta-intelligence/activedodge), [`ActiveEmerge`](/game-api/types/alta-intelligence/activeemerge), [`ActiveMeleeAttack`](/game-api/types/alta-intelligence/activemeleeattack), [`ActiveSpin`](/game-api/types/alta-intelligence/activespin), [`ActiveSpit`](/game-api/types/alta-intelligence/activespit)
- **Documented in** [Common creatures](/game-api/creatures/common-creatures#wyrm), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Wyrm()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> | Backing field for `Body`: the part that's shown when emerged and turned toward the target. |
| <Link id="m-burrowedactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" burrowedActions"}</code> | Action set used while burrowed. Built once per set and shared by all wyrms. |
| <Link id="m-emergedactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" emergedActions"}</code> | Action set used while emerged. Built once per set and shared by all wyrms. |
| <Link id="m-head" /><code>{"private Transform head"}</code> | Transform used as the wyrm's `Position`. |
| <Link id="m-impactors" /><code>{"private "}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"[] impactors"}</code> | Impact generators whose current attacks `Attacks` returns. |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> | Animator bool set true on death. Defaults to `isDead`. |
| <Link id="m-killedanimatortrigger" /><code>{"private string killedAnimatorTrigger"}</code> | Animator parameter set on death. Defaults to `Killed`; it's set with `SetBool`, not as a trigger. |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | Degrees per second `RotateToTarget` turns the body, before the speed multiplier. |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> | Backing field for `SameTargetMultiplier`. Defaults to 1.2. |
| <Link id="m-syncgameobjects" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncGameObjects"}</code> | Method sync for `SyncGameObjects`, sent on connect and when the body is shown or hidden. |
| <Link id="m-wasidle" /><code>{"private bool wasIdle"}</code> | Whether the last action was idle, so `IdleStart` only resets when idling starts. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; }"}</code> | The body transform that `RotateToTarget` turns. |
| <Link id="m-burrowedpossibilityset" /><code><Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{"> BurrowedPossibilitySet { get; set; }"}</code> | Actions this wyrm can pick while underground. |
| <Link id="m-emergedpossibilityset" /><code><Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{"> EmergedPossibilitySet { get; set; }"}</code> | Actions this wyrm can pick while above ground. |
| <Link id="m-flurrychance" /><code>{"float FlurryChance { get; set; }"}</code> | Current chance of a follow-up melee flurry. Melee attacks raise it each hit and reset it to 0 when a flurry fires. |
| <Link id="m-idlestart" /><code>{"float IdleStart { get; private set; }"}</code> | Time the wyrm went idle. The dig action uses the idle time to decide when to burrow; set far in the future while busy. |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | The head's position, used as the wyrm's position for targeting. |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> | Configured weighting for keeping the same target. |
| <Link id="m-burrowedactions-2" /><code>{"protected static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{">> BurrowedActions { get; private set; }"}</code> | Shared cache of burrowed action sets, one per `ActionComponentSet` asset, across all wyrms. |
| <Link id="m-emergedactions-2" /><code>{"protected static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{">> EmergedActions { get; private set; }"}</code> | Shared cache of emerged action sets, one per `ActionComponentSet` asset, across all wyrms. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks() (iterator)"}</code> | Yields the current attack of each of the wyrm's impactors. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network message that syncs body visibility. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player whether the body is currently shown. |
| <Link id="m-rotatetotarget" /><code>{"void RotateToTarget(float speedMultiplier = 1)"}</code> | Turns the body on the horizontal plane towards the current target at the configured speed. |
| <Link id="m-setgameobjectsactive" /><code>{"void SetGameObjectsActive(bool isActive)"}</code> | Shows or hides the body and collision objects. On the server it also syncs the change to the chunk. |
| <Link id="m-useburrowedactions" /><code>{"void UseBurrowedActions()"}</code> | Switches the action decider to the burrowed set. Called when the wyrm digs. |
| <Link id="m-useemergedactions" /><code>{"void UseEmergedActions()"}</code> | Switches the action decider to the emerged set. Called when the wyrm emerges. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Turns collision off, makes its colliders ignore each other and hides the body. |
| <Link id="m-changeaction" /><code>{"protected override bool ChangeAction()"}</code> | Picks a new action and tracks `IdleStart`, so idle time counts from when it went idle. |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | Builds or reuses the burrowed and emerged action sets and starts in burrowed mode. |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | Creates the shared action set caches. |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | Turns off collision and sets the death animator parameters. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncgameobjects-2" /><code>{"private void SyncGameObjects("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool value)"}</code> | Syncs whether the wyrm's body and collision are shown; clients apply it. |

</details>

## Used in

Members of other types that take, return or hold a `Wyrm`:

[`ActiveCatch.GetAction`](/game-api/types/alta-intelligence/activecatch#m-getaction), [`ActiveDig.GetAction`](/game-api/types/alta-intelligence/activedig#m-getaction), [`ActiveDodge.GetAction`](/game-api/types/alta-intelligence/activedodge#m-getaction), [`ActiveEmerge.GetAction`](/game-api/types/alta-intelligence/activeemerge#m-getaction), [`ActiveMeleeAttack.GetAction`](/game-api/types/alta-intelligence/activemeleeattack#m-getaction), [`ActiveSpin.GetAction`](/game-api/types/alta-intelligence/activespin#m-getaction), [`ActiveSpit.GetAction`](/game-api/types/alta-intelligence/activespit#m-getaction).
