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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`, [`IActionSettings`](/game-api/types/alta-intelligence/iactionsettings)
- **Derived types** [`AgentDelayEnterSetSettings`](/game-api/types/alta-intelligence/agentdelayentersetsettings), [`AgentDeletedSettings`](/game-api/types/alta-intelligence/agentdeletedsettings), [`AgentDisabledSettings`](/game-api/types/alta-intelligence/agentdisabledsettings), [`AgentEatSettings`](/game-api/types/alta-intelligence/agenteatsettings), [`AgentFaceTargetSettings`](/game-api/types/alta-intelligence/agentfacetargetsettings), [`AgentMoveCloserSettings`](/game-api/types/alta-intelligence/agentmoveclosersettings), [`AgentNavigationSettings`](/game-api/types/alta-intelligence/agentnavigationsettings), [`AgentRollUpInPlaceSettings`](/game-api/types/alta-intelligence/agentrollupinplacesettings), [`AgentSwapActionSetSettings`](/game-api/types/alta-intelligence/agentswapactionsetsettings), [`AiHook`](/game-api/types/alta-intelligence/aihook), [`RandomTimedActionComponent`](/game-api/types/alta-intelligence/randomtimedactioncomponent), [`SchmeecheeFleeSettings`](/game-api/types/alta-intelligence/schmeecheefleesettings), [`SchmeecheeFlipSettings`](/game-api/types/alta-intelligence/schmeecheeflipsettings), [`SchmeecheePlaySettings`](/game-api/types/alta-intelligence/schmeecheeplaysettings), [`TimedActionComponent`](/game-api/types/alta-intelligence/timedactioncomponent), [`WyrmSpinSettings`](/game-api/types/alta-intelligence/wyrmspinsettings)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions#actioncomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ActionComponent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" action"}</code> | The action built by `GetStaticAction`, cached so every agent shares it. |
| <Link id="m-baseweightingmultiplier" /><code>{"private float baseWeightingMultiplier"}</code> | Base part of `Multiplier`. 1 by default. |
| <Link id="m-cancancelselfwithsametarget" /><code>{"private bool canCancelSelfWithSameTarget"}</code> | Backing field for `CanCancelSelfWithSameTarget`. If false, picking the same action and target restarts it instead. |
| <Link id="m-cancelpriority" /><code>{"private int cancelPriority"}</code> | Backing field for `CancelPriority`. |
| <Link id="m-extrarandommultiplier" /><code>{"private float extraRandomMultiplier"}</code> | When above 0, a random amount up to this is added to `Multiplier` each time it is read. |
| <Link id="m-isaddingbasepreferred" /><code>{"private bool isAddingBasePreferred"}</code> | Editor button that adds a "Base Preferred" child object. |
| <Link id="m-isaddingbaserequired" /><code>{"private bool isAddingBaseRequired"}</code> | Editor button that adds a "Base Required" child object. |
| <Link id="m-isaddingtargetpreferred" /><code>{"private bool isAddingTargetPreferred"}</code> | Editor button that adds a "Target Preferred" child object. |
| <Link id="m-isaddingtargetrequired" /><code>{"private bool isAddingTargetRequired"}</code> | Editor button that adds a "Target Required" child object. |
| <Link id="m-iscancellable" /><code>{"private bool isCancellable"}</code> | Backing field for `IsCancellable`. Agents don't re-pick while running an action that can't be cancelled. |
| <Link id="m-isused" /><code>{"private bool isUsed"}</code> | Set the first time the action is used, when the `IAiHook` components on it are initialized. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-minimumcancelpriority" /><code>{"private int minimumCancelPriority"}</code> | Backing field for `MinimumCancelPriority`: lowest priority a new action needs to replace this one. |
| <Link id="m-minimumcancelweighting" /><code>{"private float minimumCancelWeighting"}</code> | Backing field for `MinimumCancelWeighting`: lowest weighting a new action needs to replace this one. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cancancelselfwithsametarget-2" /><code>{"bool CanCancelSelfWithSameTarget { get; }"}</code> | If false, choosing this same action on the same target again restarts it instead of cancelling and starting fresh. |
| <Link id="m-cancelpriority-2" /><code>{"int CancelPriority { get; }"}</code> | This action is only considered while another runs if its priority is at least the running action's `MinimumCancelPriority`. |
| <Link id="m-iscancellable-2" /><code>{"bool IsCancellable { get; }"}</code> | If false, the agent does not re-decide while this action runs; it waits for it to finish. |
| <Link id="m-minimumcancelpriority-2" /><code>{"int MinimumCancelPriority { get; }"}</code> | While this action runs, other actions need at least this `CancelPriority` to replace it. |
| <Link id="m-minimumcancelweighting-2" /><code>{"float MinimumCancelWeighting { get; }"}</code> | While this action runs, a replacement needs at least this weighting. |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; }"}</code> | Weighting multiplier for choosing this action: the base value plus a random extra each time it is read, if set. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-used" /><code>{"event "}<Link to="/game-api/types/alta-intelligence/actionsettingsusedhandler">{"ActionSettingsUsedHandler"}</Link>{" Used"}</code> | Raised each time an active action of this component starts. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getstaticaction" /><code><Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetStaticAction()"}</code> | Builds the action once (with its target operations from the named child objects) and returns the cached one after that. |
| <Link id="m-handleused" /><code>{"void HandleUsed("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Called each time the action starts. On first use it initializes `IAiHook` components on the object, then raises `Used`. |
| <Link id="m-getaction" /><code>{"protected abstract "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Subclasses create the `IAction` for this component here. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Empty editor hook for subclasses. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addchildrento" /><code>{"private void AddChildrenTo(string childName, List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> operations)"}</code> | Adds the target operations from a named child object (such as "Base Required") to one of the action's operation lists. |

</details>

## Used in

Members of other types that take, return or hold a `ActionComponent`:

[`Agent.DoAction`](/game-api/types/alta-intelligence/agent#m-doaction), [`Agent<TThis>.actions`](/game-api/types/alta-intelligence/agent-tthis#m-actions), [`Agent<TThis>.DoAction`](/game-api/types/alta-intelligence/agent-tthis#m-doaction), [`AgentInteractApproachSettings.canReach`](/game-api/types/alta-intelligence/agentinteractapproachsettings#m-canreach), [`AgentInteractApproachSettings.CanReach`](/game-api/types/alta-intelligence/agentinteractapproachsettings#m-canreach-2), [`AgentInteractApproachSettings.cantReach`](/game-api/types/alta-intelligence/agentinteractapproachsettings#m-cantreach), [`AgentInteractApproachSettings.CantReach`](/game-api/types/alta-intelligence/agentinteractapproachsettings#m-cantreach-2), [`Babu.stunnedAction`](/game-api/types/alta-intelligence/babu#m-stunnedaction), [`Dragonfly.stunnedAction`](/game-api/types/alta-intelligence/dragonfly#m-stunnedaction), [`Dragonfly.stunnedActionMap`](/game-api/types/alta-intelligence/dragonfly#m-stunnedactionmap), [`Gotera.stunnedAction`](/game-api/types/alta-intelligence/gotera#m-stunnedaction), [`Gotera.stunnedActionMap`](/game-api/types/alta-intelligence/gotera#m-stunnedactionmap), [`GreaterGotera.stunnedAction`](/game-api/types/alta-intelligence/greatergotera#m-stunnedaction), [`GreaterGotera.stunnedActionMap`](/game-api/types/alta-intelligence/greatergotera#m-stunnedactionmap), [`IAgent.DoAction`](/game-api/types/alta-intelligence/iagent#m-doaction), [`Phantom.actionTargetMap`](/game-api/types/alta-intelligence/phantom#m-actiontargetmap), [`Phantom.deMaterializeAction`](/game-api/types/alta-intelligence/phantom#m-dematerializeaction), [`Phantom.materializeAction`](/game-api/types/alta-intelligence/phantom#m-materializeaction), [`Phantom.materializedHitAction`](/game-api/types/alta-intelligence/phantom#m-materializedhitaction), [`PickupAgent.pickedUpActionComponent`](/game-api/types/alta-intelligence/pickupagent#m-pickedupactioncomponent), [`Spriggull.flailAction`](/game-api/types/alta-intelligence/spriggull#m-flailaction), [`Turabada.stunnedAction`](/game-api/types/alta-intelligence/turabada#m-stunnedaction), [`Turabada.stunnedActionMap`](/game-api/types/alta-intelligence/turabada#m-stunnedactionmap).
