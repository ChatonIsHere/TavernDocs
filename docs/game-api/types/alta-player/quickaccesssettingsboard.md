---
title: "QuickAccessSettingsBoard"
description: "class QuickAccessSettingsBoard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessSettingsBoard

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ScaleLerpPooledObject`](/game-api/types/global-s/scalelerppooledobject), [`IQuickAccessSettingsBoard`](/game-api/types/alta-player/iquickaccesssettingsboard)
- **Nested types** [`SettingsControl`](/game-api/types/alta-player/quickaccesssettingsboard-settingscontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickAccessSettingsBoard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |  |
| <Link id="m-activesettings" /><code>{"private List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeSettings"}</code> |  |
| <Link id="m-animatingparent" /><code>{"private Transform animatingParent"}</code> |  |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |  |
| <Link id="m-currentpannel" /><code>{"private int currentPannel"}</code> |  |
| <Link id="m-distancebetweensettings" /><code>{"private float distanceBetweenSettings"}</code> |  |
| <Link id="m-distancetodespawnsquared" /><code>{"private float distanceToDespawnSquared"}</code> |  |
| <Link id="m-isanimating" /><code>{"private bool isAnimating"}</code> |  |
| <Link id="m-material" /><code>{"private Material material"}</code> |  |
| <Link id="m-pagebuttons" /><code>{"private GameObject[] pageButtons"}</code> |  |
| <Link id="m-pannelcount" /><code>{"private int pannelCount"}</code> |  |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |  |
| <Link id="m-pulldownboardheightdown" /><code>{"private float pullDownBoardHeightDown"}</code> |  |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings"}</code> |  |
| <Link id="m-settingsinpanel" /><code>{"private int settingsInPanel"}</code> |  |
| <Link id="m-settingsparent" /><code>{"private Transform settingsParent"}</code> |  |
| <Link id="m-settingsperboard" /><code>{"private int settingsPerBoard"}</code> |  |
| <Link id="m-settingstodisplay" /><code>{"private List<"}<Link to="/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"> settingsToDisplay"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-distancedisabled" /><code>{"event Action DistanceDisabled"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-nextpanel" /><code>{"void NextPanel()"}</code> |  |
| <Link id="m-previouspanel" /><code>{"void PreviousPanel()"}</code> |  |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings)"}</code> |  |
| <Link id="m-animatemovement" /><code>{"private IEnumerator AnimateMovement(bool isShowing, Action onFinished = null) (iterator)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-checkdistance" /><code>{"private void CheckDistance()"}</code> |  |
| <Link id="m-hidesettingcontrol" /><code>{"private void HideSettingControl(float position, ref float distance)"}</code> |  |
| <Link id="m-openpanel" /><code>{"private void OpenPanel()"}</code> |  |
| <Link id="m-showsettingcontrol" /><code>{"private void ShowSettingControl(float position, ref float distance)"}</code> |  |
