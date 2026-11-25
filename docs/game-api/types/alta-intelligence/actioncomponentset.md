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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActionComponentSet()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-actionset" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{"> actionSet"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getactionset" /><code><Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<T> GetActionSet<T>()"}</code> | Builds an action set from the child action components. Its cache only works for the base `Agent` type, so it usually rebuilds each call. |

## Used in

Members of other types that take, return or hold a `ActionComponentSet`:

[`Agent.UseActionComponentSet`](/game-api/types/alta-intelligence/agent#m-useactioncomponentset), [`Agent<TThis>.actionComponentSets`](/game-api/types/alta-intelligence/agent-tthis#m-actioncomponentsets), [`Agent<TThis>.UseActionComponentSet`](/game-api/types/alta-intelligence/agent-tthis#m-useactioncomponentset), [`AgentCrawlSettings.recoverFromFalling`](/game-api/types/alta-intelligence/agentcrawlsettings#m-recoverfromfalling), [`AgentCrawlSettings.RecoverFromFalling`](/game-api/types/alta-intelligence/agentcrawlsettings#m-recoverfromfalling-2), [`AgentDelayEnterSetSettings.exitTo`](/game-api/types/alta-intelligence/agentdelayentersetsettings#m-exitto), [`AgentDelayEnterSetSettings.ExitTo`](/game-api/types/alta-intelligence/agentdelayentersetsettings#m-exitto-2), [`AgentRegainControlSettings.exitTo`](/game-api/types/alta-intelligence/agentregaincontrolsettings#m-exitto), [`AgentRegainControlSettings.ExitTo`](/game-api/types/alta-intelligence/agentregaincontrolsettings#m-exitto-2), [`AgentRollUpInPlaceSettings.exitTo`](/game-api/types/alta-intelligence/agentrollupinplacesettings#m-exitto), [`AgentRollUpInPlaceSettings.ExitTo`](/game-api/types/alta-intelligence/agentrollupinplacesettings#m-exitto-2), [`AgentSwapActionSetSettings.set`](/game-api/types/alta-intelligence/agentswapactionsetsettings#m-set), [`AgentSwapActionSetSettings.Set`](/game-api/types/alta-intelligence/agentswapactionsetsettings#m-set-2), [`AgentThreatenSettings.changeTo`](/game-api/types/alta-intelligence/agentthreatensettings#m-changeto), [`AgentThreatenSettings.ChangeTo`](/game-api/types/alta-intelligence/agentthreatensettings#m-changeto-2), [`Babu.passiveActions`](/game-api/types/alta-intelligence/babu#m-passiveactions), [`DeathFern.passiveActions`](/game-api/types/alta-intelligence/deathfern#m-passiveactions), [`DeathFern.passiveActionSetMap`](/game-api/types/alta-intelligence/deathfern#m-passiveactionsetmap), [`Dragonfly.passiveActions`](/game-api/types/alta-intelligence/dragonfly#m-passiveactions), [`Dragonfly.passiveActionSetMap`](/game-api/types/alta-intelligence/dragonfly#m-passiveactionsetmap), [`FireBug.emergeActionSet`](/game-api/types/alta-intelligence/firebug#m-emergeactionset), [`FireBug.loseControlActionSet`](/game-api/types/alta-intelligence/firebug#m-losecontrolactionset), [`FireBug.regainControlActionSet`](/game-api/types/alta-intelligence/firebug#m-regaincontrolactionset), [`Gotera.passiveActions`](/game-api/types/alta-intelligence/gotera#m-passiveactions), [`Gotera.passiveActionSetMap`](/game-api/types/alta-intelligence/gotera#m-passiveactionsetmap), [`GreaterGotera.passiveActions`](/game-api/types/alta-intelligence/greatergotera#m-passiveactions), [`GreaterGotera.passiveActionSetMap`](/game-api/types/alta-intelligence/greatergotera#m-passiveactionsetmap), [`IAgent.UseActionComponentSet`](/game-api/types/alta-intelligence/iagent#m-useactioncomponentset), [`Phantom.passiveActions`](/game-api/types/alta-intelligence/phantom#m-passiveactions), [`Phantom.passiveActionSetMap`](/game-api/types/alta-intelligence/phantom#m-passiveactionsetmap), [`Schmeechee.passiveActions`](/game-api/types/alta-intelligence/schmeechee#m-passiveactions), [`Schmeechee.passiveActionSetMap`](/game-api/types/alta-intelligence/schmeechee#m-passiveactionsetmap), [`Spriggull.passiveActions`](/game-api/types/alta-intelligence/spriggull#m-passiveactions), [`Turabada.passiveActions`](/game-api/types/alta-intelligence/turabada#m-passiveactions), [`Turabada.passiveActionSetMap`](/game-api/types/alta-intelligence/turabada#m-passiveactionsetmap), [`Wyrm.burrowedActions`](/game-api/types/alta-intelligence/wyrm#m-burrowedactions), [`Wyrm.BurrowedActions`](/game-api/types/alta-intelligence/wyrm#m-burrowedactions-2), [`Wyrm.emergedActions`](/game-api/types/alta-intelligence/wyrm#m-emergedactions), [`Wyrm.EmergedActions`](/game-api/types/alta-intelligence/wyrm#m-emergedactions-2).
