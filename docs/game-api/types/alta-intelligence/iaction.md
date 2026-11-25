---
title: "IAction"
description: "interface IAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAction

An **interface** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Derived types** [`Action<TAgent>`](/game-api/types/alta-intelligence/action-tagent), [`IAction<TAgent>`](/game-api/types/alta-intelligence/iaction-intagent)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-calculatebasepreferred" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBasePreferred { get; }"}</code> |  |
| <Link id="m-calculatebaserequired" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBaseRequired { get; }"}</code> |  |
| <Link id="m-calculatetargetpreferred" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetPreferred { get; }"}</code> |  |
| <Link id="m-calculatetargetrequired" /><code>{"List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetRequired { get; }"}</code> |  |
| <Link id="m-generalsettings" /><code><Link to="/game-api/types/alta-intelligence/iactionsettings">{"IActionSettings"}</Link>{" GeneralSettings { get; }"}</code> |  |
| <Link id="m-isusingtarget" /><code>{"bool IsUsingTarget { get; }"}</code> |  |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `IAction`:

[`ActionComponent.action`](/game-api/types/alta-intelligence/actioncomponent#m-action), [`ActionComponent.GetAction`](/game-api/types/alta-intelligence/actioncomponent#m-getaction), [`ActionComponent.GetStaticAction`](/game-api/types/alta-intelligence/actioncomponent#m-getstaticaction), [`ActiveNest.GetAction`](/game-api/types/alta-intelligence/activenest#m-getaction), [`ActiveSwapActionSet.GetAction`](/game-api/types/alta-intelligence/activeswapactionset#m-getaction), [`AgentAttackDirectionReactSettings.GetAction`](/game-api/types/alta-intelligence/agentattackdirectionreactsettings#m-getaction), [`AgentCircleCloserSettings.GetAction`](/game-api/types/alta-intelligence/agentcircleclosersettings#m-getaction), [`AgentCircleRepositionSettings.GetAction`](/game-api/types/alta-intelligence/agentcirclerepositionsettings#m-getaction), [`AgentCircleTargetSettings.GetAction`](/game-api/types/alta-intelligence/agentcircletargetsettings#m-getaction), [`AgentCrawlSettings.GetAction`](/game-api/types/alta-intelligence/agentcrawlsettings#m-getaction), [`AgentDelayEnterSetSettings.GetAction`](/game-api/types/alta-intelligence/agentdelayentersetsettings#m-getaction), [`AgentDeletedSettings.GetAction`](/game-api/types/alta-intelligence/agentdeletedsettings#m-getaction), [`AgentDisabledSettings.GetAction`](/game-api/types/alta-intelligence/agentdisabledsettings#m-getaction), [`AgentDistanceFromTargetSettings.GetAction`](/game-api/types/alta-intelligence/agentdistancefromtargetsettings#m-getaction), [`AgentEatSettings.GetAction`](/game-api/types/alta-intelligence/agenteatsettings#m-getaction), [`AgentFaceTargetSettings.GetAction`](/game-api/types/alta-intelligence/agentfacetargetsettings#m-getaction), [`AgentFollowSettings.GetAction`](/game-api/types/alta-intelligence/agentfollowsettings#m-getaction), [`AgentIdleSettings.GetAction`](/game-api/types/alta-intelligence/agentidlesettings#m-getaction), [`AgentInteractApproachSettings.GetAction`](/game-api/types/alta-intelligence/agentinteractapproachsettings#m-getaction), [`AgentJumpAtSettings.GetAction`](/game-api/types/alta-intelligence/agentjumpatsettings#m-getaction), [`AgentMoveCloserSettings.GetAction`](/game-api/types/alta-intelligence/agentmoveclosersettings#m-getaction), [`AgentNestSettings.GetAction`](/game-api/types/alta-intelligence/agentnestsettings#m-getaction), [`AgentRegainControlSettings.GetAction`](/game-api/types/alta-intelligence/agentregaincontrolsettings#m-getaction), [`AgentRollUpInPlaceSettings.GetAction`](/game-api/types/alta-intelligence/agentrollupinplacesettings#m-getaction), [`AgentSwapActionSetSettings.GetAction`](/game-api/types/alta-intelligence/agentswapactionsetsettings#m-getaction), [`AgentThreatenSettings.GetAction`](/game-api/types/alta-intelligence/agentthreatensettings#m-getaction), [`AgentWanderSettings.GetAction`](/game-api/types/alta-intelligence/agentwandersettings#m-getaction), [`BasicActiveAction<TAgent>.Action`](/game-api/types/alta-intelligence/basicactiveaction-tagent#m-action), [`BasicActiveAction<TAgent>.Start`](/game-api/types/alta-intelligence/basicactiveaction-tagent#m-start), [`IActiveAction.Action`](/game-api/types/alta-intelligence/iactiveaction#m-action), [`IBasicActiveAction<TAgent>.Start`](/game-api/types/alta-intelligence/ibasicactiveaction-intagent#m-start), [`SchmeecheeFleeSettings.GetAction`](/game-api/types/alta-intelligence/schmeecheefleesettings#m-getaction), [`SchmeecheeFlipSettings.GetAction`](/game-api/types/alta-intelligence/schmeecheeflipsettings#m-getaction), [`SchmeecheePlantSettings.GetAction`](/game-api/types/alta-intelligence/schmeecheeplantsettings#m-getaction), [`SchmeecheePlaySettings.GetAction`](/game-api/types/alta-intelligence/schmeecheeplaysettings#m-getaction), [`TargetResult.Result.Action`](/game-api/types/alta-intelligence/targetresult-result#m-action), [`WyrmCatchSettings.GetAction`](/game-api/types/alta-intelligence/wyrmcatchsettings#m-getaction), [`WyrmDigSettings.GetAction`](/game-api/types/alta-intelligence/wyrmdigsettings#m-getaction), [`WyrmDodgeSettings.GetAction`](/game-api/types/alta-intelligence/wyrmdodgesettings#m-getaction), [`WyrmEmergeSettings.GetAction`](/game-api/types/alta-intelligence/wyrmemergesettings#m-getaction), [`WyrmMeleeSettings.GetAction`](/game-api/types/alta-intelligence/wyrmmeleesettings#m-getaction), [`WyrmSpinSettings.GetAction`](/game-api/types/alta-intelligence/wyrmspinsettings#m-getaction), [`WyrmSpitSettings.GetAction`](/game-api/types/alta-intelligence/wyrmspitsettings#m-getaction).
