---
title: "BasicAction<TAgent, TActive, TSettings>"
description: "An Action<TAgent> that runs a TActive with settings TSettings, reusing finished or cancelled instances from a pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicAction&lt;TAgent, TActive, TSettings&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

An `Action<TAgent>` that runs a `TActive` with settings `TSettings`, reusing finished or cancelled instances from a pool.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Action<TAgent>`](/game-api/types/alta-intelligence/action-tagent)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BasicAction(TSettings settings)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-activepool" /><code>{"private Stack<TActive> activePool"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-generalsettings" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/iactionsettings">{"IActionSettings"}</Link>{" GeneralSettings { get; }"}</code> | The settings as `IActionSettings`. |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | The settings' `name`. |
| <Link id="m-settings" /><code>{"TSettings Settings { get; private set; }"}</code> | The typed settings this action was made with. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" Start(TAgent agent)"}</code> | Takes a pooled active action (or makes one), starts it on the agent, calls the settings' `HandleUsed` and returns it. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-pool" /><code>{"private void Pool("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `BasicAction&lt;TAgent, TActive, TSettings>`:

[`ActiveIdle.GetAction`](/game-api/types/alta-intelligence/activeidle#m-getaction), [`ActiveSchmeecheePlant.GetAction`](/game-api/types/alta-intelligence/activeschmeecheeplant#m-getaction), [`BasicActiveAction<TAgent, TSettings>.GetAction`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings#m-getaction), [`ActiveCatch.GetAction`](/game-api/types/alta-intelligence/activecatch#m-getaction), [`ActiveDig.GetAction`](/game-api/types/alta-intelligence/activedig#m-getaction), [`ActiveDodge.GetAction`](/game-api/types/alta-intelligence/activedodge#m-getaction), [`ActiveEmerge.GetAction`](/game-api/types/alta-intelligence/activeemerge#m-getaction), [`ActiveMeleeAttack.GetAction`](/game-api/types/alta-intelligence/activemeleeattack#m-getaction), [`ActiveSpin.GetAction`](/game-api/types/alta-intelligence/activespin#m-getaction), [`ActiveSpit.GetAction`](/game-api/types/alta-intelligence/activespit#m-getaction).
