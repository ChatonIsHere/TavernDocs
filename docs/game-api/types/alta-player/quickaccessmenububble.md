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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ScaleLerpPooledObject`](/game-api/types/global-s/scalelerppooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"QuickAccessMenuBubble()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activebubblematerial" /><code>{"private Material activeBubbleMaterial"}</code> |
| <Link id="m-activebubblematerialandroid" /><code>{"private Material activeBubbleMaterialAndroid"}</code> |
| <Link id="m-activeprefab" /><code>{"private GameObject activePrefab"}</code> |
| <Link id="m-animatingscale" /><code>{"private float animatingScale"}</code> |
| <Link id="m-bubblerenderer" /><code>{"private Renderer bubbleRenderer"}</code> |
| <Link id="m-content" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" content"}</code> |
| <Link id="m-headingtext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" headingText"}</code> |
| <Link id="m-inactivebubblematerial" /><code>{"private Material inactiveBubbleMaterial"}</code> |
| <Link id="m-inactivebubblematerialandroid" /><code>{"private Material inactiveBubbleMaterialAndroid"}</code> |
| <Link id="m-isbubbleselected" /><code>{"private bool isBubbleSelected"}</code> |
| <Link id="m-scaleanimationspeed" /><code>{"private float scaleAnimationSpeed"}</code> |
| <Link id="m-selectedscale" /><code>{"private float selectedScale"}</code> |
| <Link id="m-unselectedscale" /><code>{"private float unselectedScale"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/game-api/types/alta-player/quickaccessmenucontroller">{"QuickAccessMenuController"}</Link>{" Controller { get; private set; }"}</code> | The quick access menu controller that owns this bubble. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; }"}</code> | Whether the bubble's action can be used now. |
| <Link id="m-nestinglevel" /><code>{"int NestingLevel { get; }"}</code> | How many parent bubbles this one is nested under. |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" Parent { get; set; }"}</code> | The bubble this one opened from, or null. |
| <Link id="m-isalwaysupdating" /><code>{"protected override bool IsAlwaysUpdating { get; }"}</code> | Always true, so the bubble keeps turning to face the player. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-markselected" /><code>{"void MarkSelected()"}</code> | Highlights the bubble (grows it) and shows its title, if the action is usable. |
| <Link id="m-playsfx" /><code>{"bool PlaySfx()"}</code> | Whether the default selection sound should play. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Closes the action, clears the parent and returns the bubble to the pool. |
| <Link id="m-run" /><code>{"bool Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Runs the action if usable; returns whether it has a run effect. |
| <Link id="m-unmarkselected" /><code>{"void UnmarkSelected()"}</code> | Shrinks the bubble back and clears the title. |
| <Link id="m-updatecontent" /><code>{"void UpdateContent("}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" content, "}<Link to="/game-api/types/alta-player/quickaccessmenucontroller">{"QuickAccessMenuController"}</Link>{" controller)"}</code> | Fills the bubble with an action: name, preview object, material, and opens the action. |
| <Link id="m-fadefinished" /><code>{"protected override void FadeFinished()"}</code> | Destroys the action's preview object when the bubble has faded out. |
| <Link id="m-updatelerp" /><code>{"protected override void UpdateLerp()"}</code> | Turns the bubble to face the local player's head, then updates its scale. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-updateactive" /><code>{"private void UpdateActive(bool isActive)"}</code> |
| <Link id="m-updatetitledisplay" /><code>{"private void UpdateTitleDisplay(bool showTitle)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `QuickAccessMenuBubble`:

[`NestingMenuAction.CheckClose`](/game-api/types/alta-player/nestingmenuaction#m-checkclose), [`NestingMenuAction.currentBubble`](/game-api/types/alta-player/nestingmenuaction#m-currentbubble), [`NestingMenuAction.MarkSelected`](/game-api/types/alta-player/nestingmenuaction#m-markselected), [`NestingMenuAction.spawnedBubbles`](/game-api/types/alta-player/nestingmenuaction#m-spawnedbubbles), [`QuickAccessMenuAction.MarkSelected`](/game-api/types/alta-player/quickaccessmenuaction#m-markselected), [`QuickAccessMenuController.AddNested`](/game-api/types/alta-player/quickaccessmenucontroller#m-addnested), [`QuickAccessMenuController.cachedClosestMenu`](/game-api/types/alta-player/quickaccessmenucontroller#m-cachedclosestmenu), [`QuickAccessMenuController.ClosestMenuHasChanged`](/game-api/types/alta-player/quickaccessmenucontroller#m-closestmenuhaschanged), [`QuickAccessMenuController.newBubbleMarked`](/game-api/types/alta-player/quickaccessmenucontroller#m-newbubblemarked), [`QuickAccessMenuController.RemoveNested`](/game-api/types/alta-player/quickaccessmenucontroller#m-removenested), [`QuickAccessMenuController.spawnedMenus`](/game-api/types/alta-player/quickaccessmenucontroller#m-spawnedmenus), [`QuickAccessMenuController.UpdateMarkClosestMenu`](/game-api/types/alta-player/quickaccessmenucontroller#m-updatemarkclosestmenu), [`QuickAccessMenuSettings.PlaySelectMenuEffects`](/game-api/types/alta-player/quickaccessmenusettings#m-playselectmenueffects), [`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.Invoke`](/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent#m-invoke).
