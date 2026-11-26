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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent`](/mod/game-api/types/alta-intelligence/agent)
- **Derived types** [`Babu`](/mod/game-api/types/alta-intelligence/babu), [`DeathFern`](/mod/game-api/types/alta-intelligence/deathfern), [`Dragonfly`](/mod/game-api/types/alta-intelligence/dragonfly), [`FireBug`](/mod/game-api/types/alta-intelligence/firebug), [`Gotera`](/mod/game-api/types/alta-intelligence/gotera), [`GreaterGotera`](/mod/game-api/types/alta-intelligence/greatergotera), [`Phantom`](/mod/game-api/types/alta-intelligence/phantom), [`Schmeechee`](/mod/game-api/types/alta-intelligence/schmeechee), [`Spriggull`](/mod/game-api/types/alta-intelligence/spriggull), [`Turabada`](/mod/game-api/types/alta-intelligence/turabada), [`Wyrm`](/mod/game-api/types/alta-intelligence/wyrm)
- **Documented in** [Agent](/mod/game-api/creatures/agent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Agent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actioncomponentsets" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<TThis>> actionComponentSets"}</code> | <span className="api-desc">Cache of action sets built from each `ActionComponentSet` this creature has used.</span> |
| <Link id="m-actions" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/iaction-intagent">{"IAction"}</Link>{"<TThis>> actions"}</code> | <span className="api-desc">Cache of actions built from each `ActionComponent` started directly on this creature.</span> |
| <Link id="m-currentaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> currentAction"}</code> | <span className="api-desc">The action and target the creature is running now. `Target` reads from it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actiondecider" /><code><Link to="/mod/game-api/types/alta-intelligence/actiondecider-tagent">{"ActionDecider"}</Link>{"<TThis> "}<Link to="/mod/game-api/types/alta-intelligence/actiondecider-tagent">{"ActionDecider"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Picks the best action and target from the current possibility set. Created in `InitializeAi`.</span> |
| <Link id="m-generalactiondecider" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/iactiondecider">{"IActionDecider"}</Link>{" GeneralActionDecider { get; }"}</code> | <span className="api-desc">The action decider, as the non-generic interface.</span> |
| <Link id="m-isstaticinitialized" /><code>{"static bool IsStaticInitialized { get; private set; }"}</code> | <span className="api-desc">True once `InitializeStatic` has run for this agent type.</span> |
| <Link id="m-spawnedcount" /><code>{"static int SpawnedCount { get; private set; }"}</code> | <span className="api-desc">Number of agents of this type alive in the scene.</span> |
| <Link id="m-target" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" Target { get; }"}</code> | <span className="api-desc">The current action's target.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-doaction" /><code>{"override void DoAction("}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" action, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Starts a specific action component against a target.</span> |
| <Link id="m-previewaction" /><code>{"void PreviewAction("}<Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> newAction)"}</code> | <span className="api-desc">Starts the given action straight away.</span> |
| <Link id="m-useactioncomponentset" /><code>{"override void UseActionComponentSet("}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" set)"}</code> | <span className="api-desc">Switches the decider to the actions from the given set, caching the built set.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Counts the spawn and keeps the pathfinding walker off until the AI starts.</span> |
| <Link id="m-changeaction" /><code>{"protected override bool ChangeAction()"}</code> | <span className="api-desc">Updates target collectors and starts the best action that beats the current one's cancel priority and weighting.</span> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | <span className="api-desc">Server: runs `InitializeStatic` once per type, turns on the walker and creates the action decider.</span> |
| <Link id="m-initializestatic" /><code>{"protected virtual void InitializeStatic()"}</code> | <span className="api-desc">Hook for shared setup, run once per agent type on the first spawn.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Lowers `SpawnedCount`.</span> |
| <Link id="m-startaction" /><code>{"protected bool StartAction("}<Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> newAction)"}</code> | <span className="api-desc">Cancels the current action and starts a new one, or restarts it if it is the same action and target.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getbestaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TThis> GetBestAction(int minimumPriority, float minimumWeighting)"}</code> | <span className="api-desc">Asks the `ActionDecider` for the best action above the given cancel priority and weighting.</span> |

</details>
