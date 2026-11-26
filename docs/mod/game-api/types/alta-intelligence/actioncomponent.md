---
title: "ActionComponent"
description: "Base for a creature action set up as a component on a creature's AI prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionComponent

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base for a creature action set up as a component on a creature's AI prefab. Holds the weighting and cancel rules, and builds the action with target operations found in child objects named Base Required, Base Preferred, Target Required and Target Preferred.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`, [`IActionSettings`](/mod/game-api/types/alta-intelligence/iactionsettings)
- **Derived types** [`AgentDelayEnterSetSettings`](/mod/game-api/types/alta-intelligence/agentdelayentersetsettings), [`AgentDeletedSettings`](/mod/game-api/types/alta-intelligence/agentdeletedsettings), [`AgentDisabledSettings`](/mod/game-api/types/alta-intelligence/agentdisabledsettings), [`AgentEatSettings`](/mod/game-api/types/alta-intelligence/agenteatsettings), [`AgentFaceTargetSettings`](/mod/game-api/types/alta-intelligence/agentfacetargetsettings), [`AgentMoveCloserSettings`](/mod/game-api/types/alta-intelligence/agentmoveclosersettings), [`AgentNavigationSettings`](/mod/game-api/types/alta-intelligence/agentnavigationsettings), [`AgentRollUpInPlaceSettings`](/mod/game-api/types/alta-intelligence/agentrollupinplacesettings), [`AgentSwapActionSetSettings`](/mod/game-api/types/alta-intelligence/agentswapactionsetsettings), [`AiHook`](/mod/game-api/types/alta-intelligence/aihook), [`RandomTimedActionComponent`](/mod/game-api/types/alta-intelligence/randomtimedactioncomponent), [`SchmeecheeFleeSettings`](/mod/game-api/types/alta-intelligence/schmeecheefleesettings), [`SchmeecheeFlipSettings`](/mod/game-api/types/alta-intelligence/schmeecheeflipsettings), [`SchmeecheePlaySettings`](/mod/game-api/types/alta-intelligence/schmeecheeplaysettings), [`TimedActionComponent`](/mod/game-api/types/alta-intelligence/timedactioncomponent), [`WyrmSpinSettings`](/mod/game-api/types/alta-intelligence/wyrmspinsettings)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions#actioncomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ActionComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" action"}</code> | <span className="api-desc">The action built by `GetStaticAction`, cached so every agent shares it.</span> |
| <Link id="m-baseweightingmultiplier" /><code>{"private float baseWeightingMultiplier"}</code> | <span className="api-desc">Base part of `Multiplier`. 1 by default.</span> |
| <Link id="m-cancancelselfwithsametarget" /><code>{"private bool canCancelSelfWithSameTarget"}</code> | <span className="api-desc">Backing field for `CanCancelSelfWithSameTarget`. If false, picking the same action and target restarts it instead.</span> |
| <Link id="m-cancelpriority" /><code>{"private int cancelPriority"}</code> | <span className="api-desc">Backing field for `CancelPriority`.</span> |
| <Link id="m-extrarandommultiplier" /><code>{"private float extraRandomMultiplier"}</code> | <span className="api-desc">When above 0, a random amount up to this is added to `Multiplier` each time it is read.</span> |
| <Link id="m-isaddingbasepreferred" /><code>{"private bool isAddingBasePreferred"}</code> | <span className="api-desc">Editor button that adds a "Base Preferred" child object.</span> |
| <Link id="m-isaddingbaserequired" /><code>{"private bool isAddingBaseRequired"}</code> | <span className="api-desc">Editor button that adds a "Base Required" child object.</span> |
| <Link id="m-isaddingtargetpreferred" /><code>{"private bool isAddingTargetPreferred"}</code> | <span className="api-desc">Editor button that adds a "Target Preferred" child object.</span> |
| <Link id="m-isaddingtargetrequired" /><code>{"private bool isAddingTargetRequired"}</code> | <span className="api-desc">Editor button that adds a "Target Required" child object.</span> |
| <Link id="m-iscancellable" /><code>{"private bool isCancellable"}</code> | <span className="api-desc">Backing field for `IsCancellable`. Agents don't re-pick while running an action that can't be cancelled.</span> |
| <Link id="m-isused" /><code>{"private bool isUsed"}</code> | <span className="api-desc">Set the first time the action is used, when the `IAiHook` components on it are initialized.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-minimumcancelpriority" /><code>{"private int minimumCancelPriority"}</code> | <span className="api-desc">Backing field for `MinimumCancelPriority`: lowest priority a new action needs to replace this one.</span> |
| <Link id="m-minimumcancelweighting" /><code>{"private float minimumCancelWeighting"}</code> | <span className="api-desc">Backing field for `MinimumCancelWeighting`: lowest weighting a new action needs to replace this one.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cancancelselfwithsametarget-2" /><code>{"bool CanCancelSelfWithSameTarget { get; }"}</code> | <span className="api-desc">If false, choosing this same action on the same target again restarts it instead of cancelling and starting fresh.</span> |
| <Link id="m-cancelpriority-2" /><code>{"int CancelPriority { get; }"}</code> | <span className="api-desc">This action is only considered while another runs if its priority is at least the running action's `MinimumCancelPriority`.</span> |
| <Link id="m-iscancellable-2" /><code>{"bool IsCancellable { get; }"}</code> | <span className="api-desc">If false, the agent does not re-decide while this action runs; it waits for it to finish.</span> |
| <Link id="m-minimumcancelpriority-2" /><code>{"int MinimumCancelPriority { get; }"}</code> | <span className="api-desc">While this action runs, other actions need at least this `CancelPriority` to replace it.</span> |
| <Link id="m-minimumcancelweighting-2" /><code>{"float MinimumCancelWeighting { get; }"}</code> | <span className="api-desc">While this action runs, a replacement needs at least this weighting.</span> |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> | <span className="api-desc">Weighting multiplier for choosing this action: the base value plus a random extra each time it is read, if set.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-used" /><code>{"event "}<Link to="/mod/game-api/types/alta-intelligence/actionsettingsusedhandler">{"ActionSettingsUsedHandler"}</Link>{" Used"}</code> | <span className="api-desc">Raised each time an active action of this component starts.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getstaticaction" /><code><Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetStaticAction()"}</code> | <span className="api-desc">Builds the action once (with its target operations from the named child objects) and returns the cached one after that.</span> |
| <Link id="m-handleused" /><code>{"void HandleUsed("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Called each time the action starts. On first use it initializes `IAiHook` components on the object, then raises `Used`.</span> |
| <Link id="m-getaction" /><code>{"protected abstract "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Subclasses create the `IAction` for this component here.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Empty editor hook for subclasses.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addchildrento" /><code>{"private void AddChildrenTo(string childName, List<"}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> operations)"}</code> | <span className="api-desc">Adds the target operations from a named child object (such as "Base Required") to one of the action's operation lists.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ActionComponent`:

<div className="api-used-in">

[`Agent.DoAction`](/mod/game-api/types/alta-intelligence/agent#m-doaction), [`Agent<TThis>.actions`](/mod/game-api/types/alta-intelligence/agent-tthis#m-actions), [`Agent<TThis>.DoAction`](/mod/game-api/types/alta-intelligence/agent-tthis#m-doaction), [`AgentInteractApproachSettings.canReach`](/mod/game-api/types/alta-intelligence/agentinteractapproachsettings#m-canreach), [`AgentInteractApproachSettings.CanReach`](/mod/game-api/types/alta-intelligence/agentinteractapproachsettings#m-canreach-2), [`AgentInteractApproachSettings.cantReach`](/mod/game-api/types/alta-intelligence/agentinteractapproachsettings#m-cantreach), [`AgentInteractApproachSettings.CantReach`](/mod/game-api/types/alta-intelligence/agentinteractapproachsettings#m-cantreach-2), [`Babu.stunnedAction`](/mod/game-api/types/alta-intelligence/babu#m-stunnedaction), [`Dragonfly.stunnedAction`](/mod/game-api/types/alta-intelligence/dragonfly#m-stunnedaction), [`Dragonfly.stunnedActionMap`](/mod/game-api/types/alta-intelligence/dragonfly#m-stunnedactionmap), [`Gotera.stunnedAction`](/mod/game-api/types/alta-intelligence/gotera#m-stunnedaction), [`Gotera.stunnedActionMap`](/mod/game-api/types/alta-intelligence/gotera#m-stunnedactionmap), [`GreaterGotera.stunnedAction`](/mod/game-api/types/alta-intelligence/greatergotera#m-stunnedaction), [`GreaterGotera.stunnedActionMap`](/mod/game-api/types/alta-intelligence/greatergotera#m-stunnedactionmap), [`IAgent.DoAction`](/mod/game-api/types/alta-intelligence/iagent#m-doaction), [`Phantom.actionTargetMap`](/mod/game-api/types/alta-intelligence/phantom#m-actiontargetmap), [`Phantom.deMaterializeAction`](/mod/game-api/types/alta-intelligence/phantom#m-dematerializeaction), [`Phantom.materializeAction`](/mod/game-api/types/alta-intelligence/phantom#m-materializeaction), [`Phantom.materializedHitAction`](/mod/game-api/types/alta-intelligence/phantom#m-materializedhitaction), [`PickupAgent.pickedUpActionComponent`](/mod/game-api/types/alta-intelligence/pickupagent#m-pickedupactioncomponent), [`Spriggull.flailAction`](/mod/game-api/types/alta-intelligence/spriggull#m-flailaction), [`Turabada.stunnedAction`](/mod/game-api/types/alta-intelligence/turabada#m-stunnedaction), [`Turabada.stunnedActionMap`](/mod/game-api/types/alta-intelligence/turabada#m-stunnedactionmap).

</div>
