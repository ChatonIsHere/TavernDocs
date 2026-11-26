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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Action<TAgent>`](/mod/game-api/types/alta-intelligence/action-tagent)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicAction(TSettings settings)"}</code> | <span className="api-desc">Creates a `BasicAction` from `settings`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activepool" /><code>{"private Stack<TActive> activePool"}</code> | <span className="api-desc">Pool of active action objects reused by `Start`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-generalsettings" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/iactionsettings">{"IActionSettings"}</Link>{" GeneralSettings { get; }"}</code> | <span className="api-desc">The settings as `IActionSettings`.</span> |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">The settings' `name`.</span> |
| <Link id="m-settings" /><code>{"TSettings Settings { get; private set; }"}</code> | <span className="api-desc">The typed settings this action was made with.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" Start(TAgent agent)"}</code> | <span className="api-desc">Takes a pooled active action (or makes one), starts it on the agent, calls the settings' `HandleUsed` and returns it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pool" /><code>{"private void Pool("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Returns a finished or cancelled active action to `activePool`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BasicAction&lt;TAgent, TActive, TSettings>`:

<div className="api-used-in">

[`ActiveIdle.GetAction`](/mod/game-api/types/alta-intelligence/activeidle#m-getaction), [`ActiveSchmeecheePlant.GetAction`](/mod/game-api/types/alta-intelligence/activeschmeecheeplant#m-getaction), [`BasicActiveAction<TAgent, TSettings>.GetAction`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings#m-getaction), [`ActiveCatch.GetAction`](/mod/game-api/types/alta-intelligence/activecatch#m-getaction), [`ActiveDig.GetAction`](/mod/game-api/types/alta-intelligence/activedig#m-getaction), [`ActiveDodge.GetAction`](/mod/game-api/types/alta-intelligence/activedodge#m-getaction), [`ActiveEmerge.GetAction`](/mod/game-api/types/alta-intelligence/activeemerge#m-getaction), [`ActiveMeleeAttack.GetAction`](/mod/game-api/types/alta-intelligence/activemeleeattack#m-getaction), [`ActiveSpin.GetAction`](/mod/game-api/types/alta-intelligence/activespin#m-getaction), [`ActiveSpit.GetAction`](/mod/game-api/types/alta-intelligence/activespit#m-getaction).

</div>
