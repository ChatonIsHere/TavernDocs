---
title: "BasicActiveAction<TAgent, TSettings>"
description: "abstract class BasicActiveAction<TAgent, TSettings> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicActiveAction&lt;TAgent, TSettings&gt;

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<TAgent>`](/game-api/types/alta-intelligence/basicactiveaction-tagent)
- **Derived types** [`ActiveAttackDirectionReact`](/game-api/types/alta-intelligence/activeattackdirectionreact), [`ActiveCircleReposition`](/game-api/types/alta-intelligence/activecirclereposition), [`ActiveCircleTarget`](/game-api/types/alta-intelligence/activecircletarget), [`ActiveCrawl`](/game-api/types/alta-intelligence/activecrawl), [`ActiveDelayEnterSet`](/game-api/types/alta-intelligence/activedelayenterset), [`ActiveDeleted`](/game-api/types/alta-intelligence/activedeleted), [`ActiveDisabled`](/game-api/types/alta-intelligence/activedisabled), [`ActiveEat`](/game-api/types/alta-intelligence/activeeat), [`ActiveFaceTarget`](/game-api/types/alta-intelligence/activefacetarget), [`ActiveIdle`](/game-api/types/alta-intelligence/activeidle), [`ActiveJumpAt`](/game-api/types/alta-intelligence/activejumpat), [`ActiveNavigation<TThis, TAgent, TSettings>`](/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings), [`ActiveRegainControl`](/game-api/types/alta-intelligence/activeregaincontrol), [`ActiveSchmeecheeFlee`](/game-api/types/alta-intelligence/activeschmeecheeflee), [`ActiveSchmeecheeFlip`](/game-api/types/alta-intelligence/activeschmeecheeflip), [`ActiveSchmeecheePlant`](/game-api/types/alta-intelligence/activeschmeecheeplant), [`ActiveSchmeecheePlay`](/game-api/types/alta-intelligence/activeschmeecheeplay), [`ActiveSwapActionSet`](/game-api/types/alta-intelligence/activeswapactionset), [`ActiveThreaten`](/game-api/types/alta-intelligence/activethreaten), [`AgentRollUpInPlace`](/game-api/types/alta-intelligence/agentrollupinplace), [`BasicActiveAgentMoveCloser<T>`](/game-api/types/alta-intelligence/basicactiveagentmovecloser-t), [`ActiveCatch`](/game-api/types/alta-intelligence/activecatch), [`ActiveDig`](/game-api/types/alta-intelligence/activedig), [`ActiveDodge`](/game-api/types/alta-intelligence/activedodge), [`ActiveEmerge`](/game-api/types/alta-intelligence/activeemerge), [`ActiveMeleeAttack`](/game-api/types/alta-intelligence/activemeleeattack), [`ActiveSpin`](/game-api/types/alta-intelligence/activespin), [`ActiveSpit`](/game-api/types/alta-intelligence/activespit)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BasicActiveAction()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"TSettings Settings { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings">{"BasicAction"}</Link>{"<TAgent, TActive, TSettings> GetAction<TActive>(TSettings settings, bool isUsingTarget)"}</code> |  |
