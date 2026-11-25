---
title: "Agent<TThis>"
description: "The AI parts run on the server only."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Agent&lt;TThis&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

The AI parts run on the server only.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent`](/game-api/types/alta-intelligence/agent)
- **Derived types** [`Babu`](/game-api/types/alta-intelligence/babu), [`DeathFern`](/game-api/types/alta-intelligence/deathfern), [`Dragonfly`](/game-api/types/alta-intelligence/dragonfly), [`FireBug`](/game-api/types/alta-intelligence/firebug), [`Gotera`](/game-api/types/alta-intelligence/gotera), [`GreaterGotera`](/game-api/types/alta-intelligence/greatergotera), [`Phantom`](/game-api/types/alta-intelligence/phantom), [`Schmeechee`](/game-api/types/alta-intelligence/schmeechee), [`Spriggull`](/game-api/types/alta-intelligence/spriggull), [`Turabada`](/game-api/types/alta-intelligence/turabada), [`Wyrm`](/game-api/types/alta-intelligence/wyrm)
- **Documented in** [Agent](/game-api/creatures/agent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Agent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actioncomponentsets" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<TThis>> actionComponentSets"}</code> |  |
| <Link id="m-actions" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TThis>> actions"}</code> |  |
| <Link id="m-currentaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> currentAction"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actiondecider" /><code><Link to="/game-api/types/alta-intelligence/actiondecider-tagent">{"ActionDecider"}</Link>{"<TThis> "}<Link to="/game-api/types/alta-intelligence/actiondecider-tagent">{"ActionDecider"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-generalactiondecider" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/iactiondecider">{"IActionDecider"}</Link>{" GeneralActionDecider { get; }"}</code> |  |
| <Link id="m-isstaticinitialized" /><code>{"static bool IsStaticInitialized { get; private set; }"}</code> |  |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> |  |
| <Link id="m-target" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-doaction" /><code>{"override void DoAction("}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" action, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-previewaction" /><code>{"void PreviewAction("}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> newAction)"}</code> |  |
| <Link id="m-useactioncomponentset" /><code>{"override void UseActionComponentSet("}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-changeaction" /><code>{"protected override bool ChangeAction()"}</code> |  |
| <Link id="m-getbestaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> GetBestAction(int minimumPriority, float minimumWeighting)"}</code> |  |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> |  |
| <Link id="m-initializestatic" /><code>{"protected virtual void InitializeStatic()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> |  |
| <Link id="m-startaction" /><code>{"protected bool StartAction("}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> newAction)"}</code> |  |
