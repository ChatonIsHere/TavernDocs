---
title: "BasicActiveAction<TAgent, TSettings>"
description: "Base for a running creature action that has a settings object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicActiveAction&lt;TAgent, TSettings&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for a running creature action that has a settings object. Instances are pooled and reused by `BasicAction`, so reset your state in `OnStart`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<TAgent>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent)
- **Derived types** [`ActiveAttackDirectionReact`](/mod/game-api/types/alta-intelligence/activeattackdirectionreact), [`ActiveCircleReposition`](/mod/game-api/types/alta-intelligence/activecirclereposition), [`ActiveCircleTarget`](/mod/game-api/types/alta-intelligence/activecircletarget), [`ActiveCrawl`](/mod/game-api/types/alta-intelligence/activecrawl), [`ActiveDelayEnterSet`](/mod/game-api/types/alta-intelligence/activedelayenterset), [`ActiveDeleted`](/mod/game-api/types/alta-intelligence/activedeleted), [`ActiveDisabled`](/mod/game-api/types/alta-intelligence/activedisabled), [`ActiveEat`](/mod/game-api/types/alta-intelligence/activeeat), [`ActiveFaceTarget`](/mod/game-api/types/alta-intelligence/activefacetarget), [`ActiveIdle`](/mod/game-api/types/alta-intelligence/activeidle), [`ActiveJumpAt`](/mod/game-api/types/alta-intelligence/activejumpat), [`ActiveNavigation<TThis, TAgent, TSettings>`](/mod/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings), [`ActiveRegainControl`](/mod/game-api/types/alta-intelligence/activeregaincontrol), [`ActiveSchmeecheeFlee`](/mod/game-api/types/alta-intelligence/activeschmeecheeflee), [`ActiveSchmeecheeFlip`](/mod/game-api/types/alta-intelligence/activeschmeecheeflip), [`ActiveSchmeecheePlant`](/mod/game-api/types/alta-intelligence/activeschmeecheeplant), [`ActiveSchmeecheePlay`](/mod/game-api/types/alta-intelligence/activeschmeecheeplay), [`ActiveSwapActionSet`](/mod/game-api/types/alta-intelligence/activeswapactionset), [`ActiveThreaten`](/mod/game-api/types/alta-intelligence/activethreaten), [`AgentRollUpInPlace`](/mod/game-api/types/alta-intelligence/agentrollupinplace), [`BasicActiveAgentMoveCloser<T>`](/mod/game-api/types/alta-intelligence/basicactiveagentmovecloser-t), [`ActiveCatch`](/mod/game-api/types/alta-intelligence/activecatch), [`ActiveDig`](/mod/game-api/types/alta-intelligence/activedig), [`ActiveDodge`](/mod/game-api/types/alta-intelligence/activedodge), [`ActiveEmerge`](/mod/game-api/types/alta-intelligence/activeemerge), [`ActiveMeleeAttack`](/mod/game-api/types/alta-intelligence/activemeleeattack), [`ActiveSpin`](/mod/game-api/types/alta-intelligence/activespin), [`ActiveSpit`](/mod/game-api/types/alta-intelligence/activespit)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicActiveAction()"}</code> | Creates a `BasicActiveAction` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"TSettings Settings { get; set; }"}</code> | The settings this action runs with; set by the `BasicAction` that created it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<TAgent, TActive, TSettings> GetAction<TActive>(TSettings settings, bool isUsingTarget)"}</code> | Makes a `BasicAction` that starts this active action type with the given settings, optionally using the agent's target. |
