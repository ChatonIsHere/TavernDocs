---
title: "ActionComponentSet"
description: "A component whose children are ActionComponents; it builds the set of actions an AI agent can choose from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionComponentSet

A **class** in `Root.Township`, `Alta.Intelligence`.

A component whose children are `ActionComponent`s; it builds the set of actions an AI agent can choose from.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionComponentSet()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{"> actionSet"}</code> | <span className="api-desc">Cached action set built from the child `ActionComponent`s on first `GetActionSet` call.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getactionset" /><code><Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<T> GetActionSet<T>()"}</code> | <span className="api-desc">Builds an action set from the child action components. Its cache only works for the base `Agent` type, so it usually rebuilds each call.</span> |

## Used in

Members of other types that take, return or hold a `ActionComponentSet`:

<div className="api-used-in">

[`Agent.UseActionComponentSet`](/mod/game-api/types/alta-intelligence/agent#m-useactioncomponentset), [`Agent<TThis>.actionComponentSets`](/mod/game-api/types/alta-intelligence/agent-tthis#m-actioncomponentsets), [`Agent<TThis>.UseActionComponentSet`](/mod/game-api/types/alta-intelligence/agent-tthis#m-useactioncomponentset), [`AgentCrawlSettings.recoverFromFalling`](/mod/game-api/types/alta-intelligence/agentcrawlsettings#m-recoverfromfalling), [`AgentCrawlSettings.RecoverFromFalling`](/mod/game-api/types/alta-intelligence/agentcrawlsettings#m-recoverfromfalling-2), [`AgentDelayEnterSetSettings.exitTo`](/mod/game-api/types/alta-intelligence/agentdelayentersetsettings#m-exitto), [`AgentDelayEnterSetSettings.ExitTo`](/mod/game-api/types/alta-intelligence/agentdelayentersetsettings#m-exitto-2), [`AgentRegainControlSettings.exitTo`](/mod/game-api/types/alta-intelligence/agentregaincontrolsettings#m-exitto), [`AgentRegainControlSettings.ExitTo`](/mod/game-api/types/alta-intelligence/agentregaincontrolsettings#m-exitto-2), [`AgentRollUpInPlaceSettings.exitTo`](/mod/game-api/types/alta-intelligence/agentrollupinplacesettings#m-exitto), [`AgentRollUpInPlaceSettings.ExitTo`](/mod/game-api/types/alta-intelligence/agentrollupinplacesettings#m-exitto-2), [`AgentSwapActionSetSettings.set`](/mod/game-api/types/alta-intelligence/agentswapactionsetsettings#m-set), [`AgentSwapActionSetSettings.Set`](/mod/game-api/types/alta-intelligence/agentswapactionsetsettings#m-set-2), [`AgentThreatenSettings.changeTo`](/mod/game-api/types/alta-intelligence/agentthreatensettings#m-changeto), [`AgentThreatenSettings.ChangeTo`](/mod/game-api/types/alta-intelligence/agentthreatensettings#m-changeto-2), [`Babu.passiveActions`](/mod/game-api/types/alta-intelligence/babu#m-passiveactions), [`DeathFern.passiveActions`](/mod/game-api/types/alta-intelligence/deathfern#m-passiveactions), [`DeathFern.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/deathfern#m-passiveactionsetmap), [`Dragonfly.passiveActions`](/mod/game-api/types/alta-intelligence/dragonfly#m-passiveactions), [`Dragonfly.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/dragonfly#m-passiveactionsetmap), [`FireBug.emergeActionSet`](/mod/game-api/types/alta-intelligence/firebug#m-emergeactionset), [`FireBug.loseControlActionSet`](/mod/game-api/types/alta-intelligence/firebug#m-losecontrolactionset), [`FireBug.regainControlActionSet`](/mod/game-api/types/alta-intelligence/firebug#m-regaincontrolactionset), [`Gotera.passiveActions`](/mod/game-api/types/alta-intelligence/gotera#m-passiveactions), [`Gotera.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/gotera#m-passiveactionsetmap), [`GreaterGotera.passiveActions`](/mod/game-api/types/alta-intelligence/greatergotera#m-passiveactions), [`GreaterGotera.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/greatergotera#m-passiveactionsetmap), [`IAgent.UseActionComponentSet`](/mod/game-api/types/alta-intelligence/iagent#m-useactioncomponentset), [`Phantom.passiveActions`](/mod/game-api/types/alta-intelligence/phantom#m-passiveactions), [`Phantom.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/phantom#m-passiveactionsetmap), [`Schmeechee.passiveActions`](/mod/game-api/types/alta-intelligence/schmeechee#m-passiveactions), [`Schmeechee.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/schmeechee#m-passiveactionsetmap), [`Spriggull.passiveActions`](/mod/game-api/types/alta-intelligence/spriggull#m-passiveactions), [`Turabada.passiveActions`](/mod/game-api/types/alta-intelligence/turabada#m-passiveactions), [`Turabada.passiveActionSetMap`](/mod/game-api/types/alta-intelligence/turabada#m-passiveactionsetmap), [`Wyrm.burrowedActions`](/mod/game-api/types/alta-intelligence/wyrm#m-burrowedactions), [`Wyrm.BurrowedActions`](/mod/game-api/types/alta-intelligence/wyrm#m-burrowedactions-2), [`Wyrm.emergedActions`](/mod/game-api/types/alta-intelligence/wyrm#m-emergedactions), [`Wyrm.EmergedActions`](/mod/game-api/types/alta-intelligence/wyrm#m-emergedactions-2).

</div>
