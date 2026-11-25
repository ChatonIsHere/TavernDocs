---
title: "Wyrm"
description: "A wyrm lives underground. Its body and colliders are hidden until it emerges. It has no walker: it turns its body in place toward its target."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Wyrm

A **class** in `Root.Township`, `Alta.Intelligence`.

A wyrm lives underground. Its body and colliders are hidden until it emerges. It has no walker: it turns its body in place toward its target.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Wyrm>`](/game-api/types/alta-intelligence/agent-tthis)
- **Derived types** [`Wyrm`](/game-api/types/alta-intelligence/wyrm), [`ActiveCatch`](/game-api/types/alta-intelligence/activecatch), [`ActiveDig`](/game-api/types/alta-intelligence/activedig), [`ActiveDodge`](/game-api/types/alta-intelligence/activedodge), [`ActiveEmerge`](/game-api/types/alta-intelligence/activeemerge), [`ActiveMeleeAttack`](/game-api/types/alta-intelligence/activemeleeattack), [`ActiveSpin`](/game-api/types/alta-intelligence/activespin), [`ActiveSpit`](/game-api/types/alta-intelligence/activespit)
- **Documented in** [Common creatures](/game-api/creatures/common-creatures#wyrm), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Wyrm()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-body" /><code>{"private Transform body"}</code> |  |
| <Link id="m-burrowedactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" burrowedActions"}</code> |  |
| <Link id="m-emergedactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" emergedActions"}</code> |  |
| <Link id="m-head" /><code>{"private Transform head"}</code> |  |
| <Link id="m-impactors" /><code>{"private "}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"[] impactors"}</code> |  |
| <Link id="m-killedanimatorboolean" /><code>{"private string killedAnimatorBoolean"}</code> |  |
| <Link id="m-killedanimatortrigger" /><code>{"private string killedAnimatorTrigger"}</code> |  |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> |  |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> |  |
| <Link id="m-syncgameobjects" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncGameObjects"}</code> |  |
| <Link id="m-wasidle" /><code>{"private bool wasIdle"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; }"}</code> |  |
| <Link id="m-burrowedpossibilityset" /><code><Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{"> BurrowedPossibilitySet { get; set; }"}</code> |  |
| <Link id="m-emergedpossibilityset" /><code><Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{"> EmergedPossibilitySet { get; set; }"}</code> |  |
| <Link id="m-flurrychance" /><code>{"float FlurryChance { get; set; }"}</code> |  |
| <Link id="m-idlestart" /><code>{"float IdleStart { get; private set; }"}</code> |  |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> |  |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> |  |
| <Link id="m-burrowedactions-2" /><code>{"protected static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{">> BurrowedActions { get; private set; }"}</code> |  |
| <Link id="m-emergedactions-2" /><code>{"protected static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/wyrm">{"Wyrm"}</Link>{">> EmergedActions { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks() (iterator)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-rotatetotarget" /><code>{"void RotateToTarget(float speedMultiplier = 1)"}</code> |  |
| <Link id="m-setgameobjectsactive" /><code>{"void SetGameObjectsActive(bool isActive)"}</code> |  |
| <Link id="m-useburrowedactions" /><code>{"void UseBurrowedActions()"}</code> |  |
| <Link id="m-useemergedactions" /><code>{"void UseEmergedActions()"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-changeaction" /><code>{"protected override bool ChangeAction()"}</code> |  |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> |  |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> |  |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> |  |
| <Link id="m-syncgameobjects-2" /><code>{"private void SyncGameObjects("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool value)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Wyrm`:

[`ActiveCatch.GetAction`](/game-api/types/alta-intelligence/activecatch#m-getaction), [`ActiveDig.GetAction`](/game-api/types/alta-intelligence/activedig#m-getaction), [`ActiveDodge.GetAction`](/game-api/types/alta-intelligence/activedodge#m-getaction), [`ActiveEmerge.GetAction`](/game-api/types/alta-intelligence/activeemerge#m-getaction), [`ActiveMeleeAttack.GetAction`](/game-api/types/alta-intelligence/activemeleeattack#m-getaction), [`ActiveSpin.GetAction`](/game-api/types/alta-intelligence/activespin#m-getaction), [`ActiveSpit.GetAction`](/game-api/types/alta-intelligence/activespit#m-getaction).
