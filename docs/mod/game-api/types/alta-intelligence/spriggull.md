---
title: "Spriggull"
description: "The spriggull creature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Spriggull

A **class** in `Root.Township`, `Alta.Intelligence`.

The spriggull creature. Runs passive actions, charges its beak while jump attacking, and flails when it takes a strong enough hit.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Spriggull>`](/mod/game-api/types/alta-intelligence/agent-tthis), [`IJumpAttacker`](/mod/game-api/types/alta-intelligence/ijumpattacker), [`IInteractAgent`](/mod/game-api/types/alta-intelligence/iinteractagent), [`IAgent`](/mod/game-api/types/alta-intelligence/iagent), [`ITarget`](/mod/game-api/types/alta-intelligence/itarget), [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`Spriggull`](/mod/game-api/types/alta-intelligence/spriggull)
- **Documented in** [Common creatures](/mod/game-api/creatures/common-creatures#spriggull), [Creature data](/mod/game-api/creatures/creature-data), [Creatures and AI](/mod/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Spriggull()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beak" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/fixedimpactor">{"FixedImpactor"}</Link>{" beak"}</code> | <span className="api-desc">The beak impactor that does damage during a jump attack.</span> |
| <Link id="m-body" /><code>{"private Transform body"}</code> | <span className="api-desc">Backing field for `Body`; also used as the agent's position.</span> |
| <Link id="m-flailaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" flailAction"}</code> | <span className="api-desc">Action component for flailing, used by `BeginFlail`.</span> |
| <Link id="m-flailingaction" /><code>{"private static "}<Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/spriggull">{"Spriggull"}</Link>{"> flailingAction"}</code> | <span className="api-desc">Shared action target for flailing, built from `flailAction` once per type.</span> |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | <span className="api-desc">Backing field for `Interactor`.</span> |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> | <span className="api-desc">Action set the spriggull chooses from, shared by all spriggulls.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-body-2" /><code>{"Transform Body { get; }"}</code> | <span className="api-desc">The body transform. Used as the creature's position.</span> |
| <Link id="m-idlestart" /><code>{"float IdleStart { get; private set; }"}</code> | <span className="api-desc">Never set in this build, so always 0.</span> |
| <Link id="m-interactor-2" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; }"}</code> | <span className="api-desc">Interactor it grabs things with, such as food it eats.</span> |
| <Link id="m-position" /><code>{"override Vector3 Position { get; }"}</code> | <span className="api-desc">The body's position.</span> |
| <Link id="m-passiveactions-2" /><code>{"protected static "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/spriggull">{"Spriggull"}</Link>{"> PassiveActions { get; private set; }"}</code> | <span className="api-desc">Shared action set it normally chooses from.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginflail" /><code>{"void BeginFlail(float strength)"}</code> | <span className="api-desc">Server: starts the flail action and lowers walking power by the hit strength.</span> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | <span className="api-desc">Starts on the passive action set.</span> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | <span className="api-desc">Builds the shared passive action set and flail action.</span> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | <span className="api-desc">Turns off its collision and (server) sets the animator's IsFlailing.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setjumping" /><code>{"private void Alta.Intelligence.IJumpAttacker.SetJumping(bool isJumping)"}</code> | <span className="api-desc">Charges the beak impactor when a jump attack starts and resets it when it ends.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Spriggull`:

<div className="api-used-in">

[`SpriggullFlail.spriggull`](/mod/game-api/types/alta-intelligence/spriggullflail#m-spriggull).

</div>
