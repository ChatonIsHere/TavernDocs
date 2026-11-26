---
title: "Agent<TThis>"
description: "Base for a creature AI that picks actions from an ActionDecider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Agent&lt;TThis&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for a creature AI that picks actions from an `ActionDecider`. The AI runs only on the server: it is initialized in `InitializeAsServer` and updated by `AgentUpdater`. Concrete creatures such as `Wyrm` pass themselves as `TThis`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent`](/game-api/types/alta-intelligence/agent)
- **Derived types** [`Babu`](/game-api/types/alta-intelligence/babu), [`DeathFern`](/game-api/types/alta-intelligence/deathfern), [`Dragonfly`](/game-api/types/alta-intelligence/dragonfly), [`FireBug`](/game-api/types/alta-intelligence/firebug), [`Gotera`](/game-api/types/alta-intelligence/gotera), [`GreaterGotera`](/game-api/types/alta-intelligence/greatergotera), [`Phantom`](/game-api/types/alta-intelligence/phantom), [`Schmeechee`](/game-api/types/alta-intelligence/schmeechee), [`Spriggull`](/game-api/types/alta-intelligence/spriggull), [`Turabada`](/game-api/types/alta-intelligence/turabada), [`Wyrm`](/game-api/types/alta-intelligence/wyrm)
- **Documented in** [Agent](/game-api/creatures/agent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Agent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actioncomponentsets" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<TThis>> actionComponentSets"}</code> | Cache of action sets built from each `ActionComponentSet` this creature has used. |
| <Link id="m-actions" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TThis>> actions"}</code> | Cache of actions built from each `ActionComponent` started directly on this creature. |
| <Link id="m-currentaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> currentAction"}</code> | The action and target the creature is running now. `Target` reads from it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actiondecider" /><code><Link to="/game-api/types/alta-intelligence/actiondecider-tagent">{"ActionDecider"}</Link>{"<TThis> "}<Link to="/game-api/types/alta-intelligence/actiondecider-tagent">{"ActionDecider"}</Link>{" { get; private set; }"}</code> | Picks the best action and target from the current possibility set. Created in `InitializeAi`. |
| <Link id="m-generalactiondecider" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/iactiondecider">{"IActionDecider"}</Link>{" GeneralActionDecider { get; }"}</code> | The action decider, as the non-generic interface. |
| <Link id="m-isstaticinitialized" /><code>{"static bool IsStaticInitialized { get; private set; }"}</code> | True once `InitializeStatic` has run for this agent type. |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> | Number of agents of this type alive in the scene. |
| <Link id="m-target" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> | The current action's target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-doaction" /><code>{"override void DoAction("}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" action, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Starts a specific action component against a target. |
| <Link id="m-previewaction" /><code>{"void PreviewAction("}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> newAction)"}</code> | Starts the given action straight away. |
| <Link id="m-useactioncomponentset" /><code>{"override void UseActionComponentSet("}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set)"}</code> | Switches the decider to the actions from the given set, caching the built set. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Counts the spawn and keeps the pathfinding walker off until the AI starts. |
| <Link id="m-changeaction" /><code>{"protected override bool ChangeAction()"}</code> | Updates target collectors and starts the best action that beats the current one's cancel priority and weighting. |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | Server: runs `InitializeStatic` once per type, turns on the walker and creates the action decider. |
| <Link id="m-initializestatic" /><code>{"protected virtual void InitializeStatic()"}</code> | Hook for shared setup, run once per agent type on the first spawn. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Lowers `SpawnedCount`. |
| <Link id="m-startaction" /><code>{"protected bool StartAction("}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> newAction)"}</code> | Cancels the current action and starts a new one, or restarts it if it is the same action and target. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getbestaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> GetBestAction(int minimumPriority, float minimumWeighting)"}</code> | Asks the `ActionDecider` for the best action above the given cancel priority and weighting. |

</details>
