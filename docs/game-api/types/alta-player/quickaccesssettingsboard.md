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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ScaleLerpPooledObject`](/game-api/types/global-s/scalelerppooledobject), [`IQuickAccessSettingsBoard`](/game-api/types/alta-player/iquickaccesssettingsboard)
- **Nested types** [`SettingsControl`](/game-api/types/alta-player/quickaccesssettingsboard-settingscontrol)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"QuickAccessSettingsBoard()"}</code> |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property ID for the board material's reveal progress. |
| <Link id="m-activesettings" /><code>{"private List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeSettings"}</code> | Controls currently shown. |
| <Link id="m-animatingparent" /><code>{"private Transform animatingParent"}</code> | Transform moved up and down by the animation. |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Seconds the slide takes. |
| <Link id="m-currentpannel" /><code>{"private int currentPannel"}</code> | Index of the shown page. |
| <Link id="m-distancebetweensettings" /><code>{"private float distanceBetweenSettings"}</code> | Vertical gap between controls. |
| <Link id="m-distancetodespawnsquared" /><code>{"private float distanceToDespawnSquared"}</code> | Squared walk-away distance for `CheckDistance` (25, so 5 m). |
| <Link id="m-isanimating" /><code>{"private bool isAnimating"}</code> | True while sliding; page changes are ignored then. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The shared board material driven by the animation. |
| <Link id="m-pagebuttons" /><code>{"private GameObject[] pageButtons"}</code> | Next and previous page buttons, shown only with more than one page. |
| <Link id="m-pannelcount" /><code>{"private int pannelCount"}</code> | Number of pages. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | World position where the board was set up, used by the distance check. |
| <Link id="m-pulldownboardheightdown" /><code>{"private float pullDownBoardHeightDown"}</code> | Local Y the board slides down to when shown. |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | Renderers that share the board material. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings"}</code> | The settings menu action that opened the board. |
| <Link id="m-settingsinpanel" /><code>{"private int settingsInPanel"}</code> | Number of controls on the page being shown. |
| <Link id="m-settingsparent" /><code>{"private Transform settingsParent"}</code> | Where the controls are spawned. |
| <Link id="m-settingsperboard" /><code>{"private int settingsPerBoard"}</code> | Settings per page. |
| <Link id="m-settingstodisplay" /><code>{"private List<"}<Link to="/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"> settingsToDisplay"}</code> | The valid settings to show, across all pages. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The board's transform. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-distancedisabled" /><code>{"event Action DistanceDisabled"}</code> | Raised when the player walks away from the board; the settings menu action uses it to drop the board. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-nextpanel" /><code>{"void NextPanel()"}</code> | Hides the current page and shows the next, wrapping round. Ignored while animating. |
| <Link id="m-previouspanel" /><code>{"void PreviousPanel()"}</code> | Hides the current page and shows the previous, wrapping round. Ignored while animating. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Plays the hide animation, then returns the board to its pool. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings)"}</code> | Loads the valid settings from the menu action, works out pages, shows page buttons if there are several and opens the first page. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Makes one tracked material copy and shares it across all the board's renderers. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatemovement" /><code>{"private IEnumerator AnimateMovement(bool isShowing, Action onFinished = null) (iterator)"}</code> | Coroutine that slides the board down (adding controls as it goes) or up (removing them), fading the material's `_Progress`. |
| <Link id="m-checkdistance" /><code>{"private void CheckDistance()"}</code> | Raises `DistanceDisabled` if the player's head is further than `distanceToDespawnSquared` from where the board opened. Nothing in this class calls it. |
| <Link id="m-hidesettingcontrol" /><code>{"private void HideSettingControl(float position, ref float distance)"}</code> | Per animation step when hiding: releases the bottom control once the board passes it. |
| <Link id="m-openpanel" /><code>{"private void OpenPanel()"}</code> | Starts the show animation for the current page. |
| <Link id="m-showsettingcontrol" /><code>{"private void ShowSettingControl(float position, ref float distance)"}</code> | Per animation step when showing: spawns the next pooled control once the board has moved far enough. |

</details>
