---
title: "QuickAccessSettingsBoard"
description: "Pooled settings board opened by a settings quick access action: slides down and shows pages of setting controls, one by one as it animates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessSettingsBoard

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Pooled settings board opened by a settings quick access action: slides down and shows pages of setting controls, one by one as it animates. Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ScaleLerpPooledObject`](/mod/game-api/types/global-s/scalelerppooledobject), [`IQuickAccessSettingsBoard`](/mod/game-api/types/alta-player/iquickaccesssettingsboard)
- **Nested types** [`SettingsControl`](/mod/game-api/types/alta-player/quickaccesssettingsboard-settingscontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickAccessSettingsBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for the board material's reveal progress.</span> |
| <Link id="m-activesettings" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeSettings"}</code> | <span className="api-desc">Controls currently shown.</span> |
| <Link id="m-animatingparent" /><code>{"private Transform animatingParent"}</code> | <span className="api-desc">Transform moved up and down by the animation.</span> |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Seconds the slide takes.</span> |
| <Link id="m-currentpannel" /><code>{"private int currentPannel"}</code> | <span className="api-desc">Index of the shown page.</span> |
| <Link id="m-distancebetweensettings" /><code>{"private float distanceBetweenSettings"}</code> | <span className="api-desc">Vertical gap between controls.</span> |
| <Link id="m-distancetodespawnsquared" /><code>{"private float distanceToDespawnSquared"}</code> | <span className="api-desc">Squared walk-away distance for `CheckDistance` (25, so 5 m).</span> |
| <Link id="m-isanimating" /><code>{"private bool isAnimating"}</code> | <span className="api-desc">True while sliding; page changes are ignored then.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The shared board material driven by the animation.</span> |
| <Link id="m-pagebuttons" /><code>{"private GameObject[] pageButtons"}</code> | <span className="api-desc">Next and previous page buttons, shown only with more than one page.</span> |
| <Link id="m-pannelcount" /><code>{"private int pannelCount"}</code> | <span className="api-desc">Number of pages.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">World position where the board was set up, used by the distance check.</span> |
| <Link id="m-pulldownboardheightdown" /><code>{"private float pullDownBoardHeightDown"}</code> | <span className="api-desc">Local Y the board slides down to when shown.</span> |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | <span className="api-desc">Renderers that share the board material.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings"}</code> | <span className="api-desc">The settings menu action that opened the board.</span> |
| <Link id="m-settingsinpanel" /><code>{"private int settingsInPanel"}</code> | <span className="api-desc">Number of controls on the page being shown.</span> |
| <Link id="m-settingsparent" /><code>{"private Transform settingsParent"}</code> | <span className="api-desc">Where the controls are spawned.</span> |
| <Link id="m-settingsperboard" /><code>{"private int settingsPerBoard"}</code> | <span className="api-desc">Settings per page.</span> |
| <Link id="m-settingstodisplay" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"> settingsToDisplay"}</code> | <span className="api-desc">The valid settings to show, across all pages.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The board's transform.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-distancedisabled" /><code>{"event Action DistanceDisabled"}</code> | <span className="api-desc">Raised when the player walks away from the board; the settings menu action uses it to drop the board.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-nextpanel" /><code>{"void NextPanel()"}</code> | <span className="api-desc">Hides the current page and shows the next, wrapping round. Ignored while animating.</span> |
| <Link id="m-previouspanel" /><code>{"void PreviousPanel()"}</code> | <span className="api-desc">Hides the current page and shows the previous, wrapping round. Ignored while animating.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Plays the hide animation, then returns the board to its pool.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings)"}</code> | <span className="api-desc">Loads the valid settings from the menu action, works out pages, shows page buttons if there are several and opens the first page.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Makes one tracked material copy and shares it across all the board's renderers.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatemovement" /><code>{"private IEnumerator AnimateMovement(bool isShowing, Action onFinished = null) (iterator)"}</code> | <span className="api-desc">Coroutine that slides the board down (adding controls as it goes) or up (removing them), fading the material's `_Progress`.</span> |
| <Link id="m-checkdistance" /><code>{"private void CheckDistance()"}</code> | <span className="api-desc">Raises `DistanceDisabled` if the player's head is further than `distanceToDespawnSquared` from where the board opened. Nothing in this class calls it.</span> |
| <Link id="m-hidesettingcontrol" /><code>{"private void HideSettingControl(float position, ref float distance)"}</code> | <span className="api-desc">Per animation step when hiding: releases the bottom control once the board passes it.</span> |
| <Link id="m-openpanel" /><code>{"private void OpenPanel()"}</code> | <span className="api-desc">Starts the show animation for the current page.</span> |
| <Link id="m-showsettingcontrol" /><code>{"private void ShowSettingControl(float position, ref float distance)"}</code> | <span className="api-desc">Per animation step when showing: spawns the next pooled control once the board has moved far enough.</span> |

</details>
