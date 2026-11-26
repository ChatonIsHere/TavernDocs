---
title: "IAction"
description: "One thing an AI creature can do, as used by the action decider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAction

An **interface** in `Root.Township`, `Alta.Intelligence`.

One thing an AI creature can do, as used by the action decider. Its lists of target operations score the action, and `IAction<TAgent>.Start` begins it on an agent.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Derived types** [`Action<TAgent>`](/mod/game-api/types/alta-intelligence/action-tagent), [`IAction<TAgent>`](/mod/game-api/types/alta-intelligence/iaction-intagent)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-calculatebasepreferred" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBasePreferred { get; }"}</code> | Operations that add to or take from the action's score, without a target. Each result is weighted and summed. |
| <Link id="m-calculatebaserequired" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateBaseRequired { get; }"}</code> | Operations that must pass without a target. A negative result rules the action out; others multiply its score. |
| <Link id="m-calculatetargetpreferred" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetPreferred { get; }"}</code> | Like `CalculateBasePreferred`, but scored against each possible target. |
| <Link id="m-calculatetargetrequired" /><code>{"List<"}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> CalculateTargetRequired { get; }"}</code> | Like `CalculateBaseRequired`, but checked against each possible target. |
| <Link id="m-generalsettings" /><code><Link to="/mod/game-api/types/alta-intelligence/iactionsettings">{"IActionSettings"}</Link>{" GeneralSettings { get; }"}</code> | Shared settings such as cancel priority and whether the action can be cancelled. |
| <Link id="m-isusingtarget" /><code>{"bool IsUsingTarget { get; }"}</code> | Whether the action is aimed at a target. |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> | Starting score for the action before operations are applied. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The action's name. |

## Used in

Members of other types that take, return or hold a `IAction`:

[`ActionComponent.action`](/mod/game-api/types/alta-intelligence/actioncomponent#m-action), [`ActionComponent.GetAction`](/mod/game-api/types/alta-intelligence/actioncomponent#m-getaction), [`ActionComponent.GetStaticAction`](/mod/game-api/types/alta-intelligence/actioncomponent#m-getstaticaction), [`ActiveNest.GetAction`](/mod/game-api/types/alta-intelligence/activenest#m-getaction), [`ActiveSwapActionSet.GetAction`](/mod/game-api/types/alta-intelligence/activeswapactionset#m-getaction), [`AgentAttackDirectionReactSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentattackdirectionreactsettings#m-getaction), [`AgentCircleCloserSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentcircleclosersettings#m-getaction), [`AgentCircleRepositionSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentcirclerepositionsettings#m-getaction), [`AgentCircleTargetSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentcircletargetsettings#m-getaction), [`AgentCrawlSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentcrawlsettings#m-getaction), [`AgentDelayEnterSetSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentdelayentersetsettings#m-getaction), [`AgentDeletedSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentdeletedsettings#m-getaction), [`AgentDisabledSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentdisabledsettings#m-getaction), [`AgentDistanceFromTargetSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentdistancefromtargetsettings#m-getaction), [`AgentEatSettings.GetAction`](/mod/game-api/types/alta-intelligence/agenteatsettings#m-getaction), [`AgentFaceTargetSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentfacetargetsettings#m-getaction), [`AgentFollowSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentfollowsettings#m-getaction), [`AgentIdleSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentidlesettings#m-getaction), [`AgentInteractApproachSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentinteractapproachsettings#m-getaction), [`AgentJumpAtSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentjumpatsettings#m-getaction), [`AgentMoveCloserSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentmoveclosersettings#m-getaction), [`AgentNestSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentnestsettings#m-getaction), [`AgentRegainControlSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentregaincontrolsettings#m-getaction), [`AgentRollUpInPlaceSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentrollupinplacesettings#m-getaction), [`AgentSwapActionSetSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentswapactionsetsettings#m-getaction), [`AgentThreatenSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentthreatensettings#m-getaction), [`AgentWanderSettings.GetAction`](/mod/game-api/types/alta-intelligence/agentwandersettings#m-getaction), [`BasicActiveAction<TAgent>.Action`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent#m-action), [`BasicActiveAction<TAgent>.Start`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent#m-start), [`IActiveAction.Action`](/mod/game-api/types/alta-intelligence/iactiveaction#m-action), [`IBasicActiveAction<TAgent>.Start`](/mod/game-api/types/alta-intelligence/ibasicactiveaction-intagent#m-start), [`SchmeecheeFleeSettings.GetAction`](/mod/game-api/types/alta-intelligence/schmeecheefleesettings#m-getaction), [`SchmeecheeFlipSettings.GetAction`](/mod/game-api/types/alta-intelligence/schmeecheeflipsettings#m-getaction), [`SchmeecheePlantSettings.GetAction`](/mod/game-api/types/alta-intelligence/schmeecheeplantsettings#m-getaction), [`SchmeecheePlaySettings.GetAction`](/mod/game-api/types/alta-intelligence/schmeecheeplaysettings#m-getaction), [`TargetResult.Result.Action`](/mod/game-api/types/alta-intelligence/targetresult-result#m-action), [`WyrmCatchSettings.GetAction`](/mod/game-api/types/alta-intelligence/wyrmcatchsettings#m-getaction), [`WyrmDigSettings.GetAction`](/mod/game-api/types/alta-intelligence/wyrmdigsettings#m-getaction), [`WyrmDodgeSettings.GetAction`](/mod/game-api/types/alta-intelligence/wyrmdodgesettings#m-getaction), [`WyrmEmergeSettings.GetAction`](/mod/game-api/types/alta-intelligence/wyrmemergesettings#m-getaction), [`WyrmMeleeSettings.GetAction`](/mod/game-api/types/alta-intelligence/wyrmmeleesettings#m-getaction), [`WyrmSpinSettings.GetAction`](/mod/game-api/types/alta-intelligence/wyrmspinsettings#m-getaction), [`WyrmSpitSettings.GetAction`](/mod/game-api/types/alta-intelligence/wyrmspitsettings#m-getaction).
