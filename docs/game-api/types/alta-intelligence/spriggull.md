---
title: "Spriggull"
description: "It decides every 0.5 s, slower than other creatures (0.1 s). Its sets live in the \"Spriggull AI\" prefab:"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Spriggull

A **class** in `Root.Township`, `Alta.Intelligence`.

It decides every 0.5 s, slower than other creatures (0.1 s). Its sets live in the "Spriggull AI" prefab:

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Spriggull>`](/game-api/types/alta-intelligence/agent-tthis), [`IJumpAttacker`](/game-api/types/alta-intelligence/ijumpattacker), [`IInteractAgent`](/game-api/types/alta-intelligence/iinteractagent), [`IAgent`](/game-api/types/alta-intelligence/iagent), [`ITarget`](/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`Spriggull`](/game-api/types/alta-intelligence/spriggull)
- **Documented in** [Common creatures](/game-api/creatures/common-creatures#spriggull), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Spriggull()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-beak" /><code>{"private "}<Link to="/game-api/types/alta-items/fixedimpactor">{"FixedImpactor"}</Link>{" beak"}</code> |  |
| <Link id="m-body" /><code>{"private Transform body"}</code> |  |
| <Link id="m-flailaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" flailAction"}</code> |  |
| <Link id="m-flailingaction" /><code>{"private static "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/spriggull">{"Spriggull"}</Link>{"> flailingAction"}</code> |  |
| <Link id="m-interactor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> |  |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; }"}</code> |  |
| <Link id="m-idlestart" /><code>{"float IdleStart { get; private set; }"}</code> |  |
| <Link id="m-interactor-2" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> |  |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> |  |
| <Link id="m-passiveactions-2" /><code>{"protected static "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/spriggull">{"Spriggull"}</Link>{"> PassiveActions { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginflail" /><code>{"void BeginFlail(float strength)"}</code> |  |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> |  |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> |  |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> |  |
| <Link id="m-setjumping" /><code>{"private void Alta.Intelligence.IJumpAttacker.SetJumping(bool isJumping)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Spriggull`:

[`SpriggullFlail.spriggull`](/game-api/types/alta-intelligence/spriggullflail#m-spriggull).
