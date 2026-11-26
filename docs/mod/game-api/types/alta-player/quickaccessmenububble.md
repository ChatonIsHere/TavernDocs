---
title: "QuickAccessMenuBubble"
description: "One bubble in the quick access menu, showing an action and running it when chosen."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessMenuBubble

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

One bubble in the quick access menu, showing an action and running it when chosen. A pooled object that faces the local player's head; client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ScaleLerpPooledObject`](/mod/game-api/types/global-s/scalelerppooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickAccessMenuBubble()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activebubblematerial" /><code>{"private Material activeBubbleMaterial"}</code> | <span className="api-desc">PC material for a bubble whose action can run.</span> |
| <Link id="m-activebubblematerialandroid" /><code>{"private Material activeBubbleMaterialAndroid"}</code> | <span className="api-desc">Android material for a bubble whose action can run.</span> |
| <Link id="m-activeprefab" /><code>{"private GameObject activePrefab"}</code> | <span className="api-desc">Visual prefab from the action, placed inside the bubble at 0.4 scale. Destroyed when the fade ends.</span> |
| <Link id="m-animatingscale" /><code>{"private float animatingScale"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-bubblerenderer" /><code>{"private Renderer bubbleRenderer"}</code> | <span className="api-desc">Renderer whose material shows whether the action is active.</span> |
| <Link id="m-content" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" content"}</code> | <span className="api-desc">The quick access action this bubble shows and runs.</span> |
| <Link id="m-headingtext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" headingText"}</code> | <span className="api-desc">Text renderer for a heading. Not used by this class's own code.</span> |
| <Link id="m-inactivebubblematerial" /><code>{"private Material inactiveBubbleMaterial"}</code> | <span className="api-desc">PC material for a bubble whose action can't run right now.</span> |
| <Link id="m-inactivebubblematerialandroid" /><code>{"private Material inactiveBubbleMaterialAndroid"}</code> | <span className="api-desc">Android material for a bubble whose action can't run right now.</span> |
| <Link id="m-isbubbleselected" /><code>{"private bool isBubbleSelected"}</code> | <span className="api-desc">Whether the bubble is selected, so it can reselect when the action becomes valid again.</span> |
| <Link id="m-scaleanimationspeed" /><code>{"private float scaleAnimationSpeed"}</code> | <span className="api-desc">Speed of the scale animation between selected and unselected.</span> |
| <Link id="m-selectedscale" /><code>{"private float selectedScale"}</code> | <span className="api-desc">Scale when selected (2 by default), unless the action overrides it.</span> |
| <Link id="m-unselectedscale" /><code>{"private float unselectedScale"}</code> | <span className="api-desc">Scale when not selected (1 by default).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/mod/game-api/types/alta-player/quickaccessmenucontroller">{"QuickAccessMenuController"}</Link>{" Controller { get; private set; }"}</code> | <span className="api-desc">The quick access menu controller that owns this bubble.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | <span className="api-desc">Whether the bubble's action can be used now.</span> |
| <Link id="m-nestinglevel" /><code>{"int NestingLevel { get; }"}</code> | <span className="api-desc">How many parent bubbles this one is nested under.</span> |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" Parent { get; set; }"}</code> | <span className="api-desc">The bubble this one opened from, or null.</span> |
| <Link id="m-isalwaysupdating" /><code>{"protected override bool IsAlwaysUpdating { get; }"}</code> | <span className="api-desc">Always true, so the bubble keeps turning to face the player.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-markselected" /><code>{"void MarkSelected()"}</code> | <span className="api-desc">Highlights the bubble (grows it) and shows its title, if the action is usable.</span> |
| <Link id="m-playsfx" /><code>{"bool PlaySfx()"}</code> | <span className="api-desc">Whether the default selection sound should play.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Closes the action, clears the parent and returns the bubble to the pool.</span> |
| <Link id="m-run" /><code>{"bool Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Runs the action if usable; returns whether it has a run effect.</span> |
| <Link id="m-unmarkselected" /><code>{"void UnmarkSelected()"}</code> | <span className="api-desc">Shrinks the bubble back and clears the title.</span> |
| <Link id="m-updatecontent" /><code>{"void UpdateContent("}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" content, "}<Link to="/mod/game-api/types/alta-player/quickaccessmenucontroller">{"QuickAccessMenuController"}</Link>{" controller)"}</code> | <span className="api-desc">Fills the bubble with an action: name, preview object, material, and opens the action.</span> |
| <Link id="m-fadefinished" /><code>{"protected override void FadeFinished()"}</code> | <span className="api-desc">Destroys the action's preview object when the bubble has faded out.</span> |
| <Link id="m-updatelerp" /><code>{"protected override void UpdateLerp()"}</code> | <span className="api-desc">Turns the bubble to face the local player's head, then updates its scale.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateactive" /><code>{"private void UpdateActive(bool isActive)"}</code> | <span className="api-desc">Swaps the bubble material for active or inactive (PC or Android set) and unselects it when it goes inactive.</span> |
| <Link id="m-updatetitledisplay" /><code>{"private void UpdateTitleDisplay(bool showTitle)"}</code> | <span className="api-desc">Shows the action's display name (or asset name) as the menu's centred title, or clears it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `QuickAccessMenuBubble`:

<div className="api-used-in">

[`NestingMenuAction.CheckClose`](/mod/game-api/types/alta-player/nestingmenuaction#m-checkclose), [`NestingMenuAction.currentBubble`](/mod/game-api/types/alta-player/nestingmenuaction#m-currentbubble), [`NestingMenuAction.MarkSelected`](/mod/game-api/types/alta-player/nestingmenuaction#m-markselected), [`NestingMenuAction.spawnedBubbles`](/mod/game-api/types/alta-player/nestingmenuaction#m-spawnedbubbles), [`QuickAccessMenuAction.MarkSelected`](/mod/game-api/types/alta-player/quickaccessmenuaction#m-markselected), [`QuickAccessMenuController.AddNested`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-addnested), [`QuickAccessMenuController.cachedClosestMenu`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-cachedclosestmenu), [`QuickAccessMenuController.ClosestMenuHasChanged`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-closestmenuhaschanged), [`QuickAccessMenuController.newBubbleMarked`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-newbubblemarked), [`QuickAccessMenuController.RemoveNested`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-removenested), [`QuickAccessMenuController.spawnedMenus`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-spawnedmenus), [`QuickAccessMenuController.UpdateMarkClosestMenu`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-updatemarkclosestmenu), [`QuickAccessMenuSettings.PlaySelectMenuEffects`](/mod/game-api/types/alta-player/quickaccessmenusettings#m-playselectmenueffects), [`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.Invoke`](/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent#m-invoke).

</div>
