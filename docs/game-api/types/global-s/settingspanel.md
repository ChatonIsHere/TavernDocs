---
title: "SettingsPanel"
description: "class SettingsPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsPanel

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`SettingsPanelConfiguration`](/game-api/types/global-s/settingspanel-settingspanelconfiguration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsPanel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationprogress" /><code>{"private float animationProgress"}</code> |  |
| <Link id="m-currentpanel" /><code>{"private "}<Link to="/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{" currentPanel"}</code> |  |
| <Link id="m-currentslideanimation" /><code>{"private Coroutine currentSlideAnimation"}</code> |  |
| <Link id="m-currentswitchanimation" /><code>{"private Coroutine currentSwitchAnimation"}</code> |  |
| <Link id="m-descriptionpanel" /><code>{"private "}<Link to="/game-api/types/global-s/settingdescriptionpanel">{"SettingDescriptionPanel"}</Link>{" descriptionPanel"}</code> |  |
| <Link id="m-isslidingdowntest" /><code>{"private bool isSlidingDownTest"}</code> |  |
| <Link id="m-isslidinguptest" /><code>{"private bool isSlidingUpTest"}</code> |  |
| <Link id="m-panels" /><code>{"private "}<Link to="/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{"[] panels"}</code> |  |
| <Link id="m-paneltransform" /><code>{"private Transform panelTransform"}</code> |  |
| <Link id="m-slideanimation" /><code>{"private AnimationCurve slideAnimation"}</code> |  |
| <Link id="m-slideduration" /><code>{"private float slideDuration"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-descriptionpanel-2" /><code><Link to="/game-api/types/global-s/settingdescriptionpanel">{"SettingDescriptionPanel"}</Link>{" DescriptionPanel { get; }"}</code> |  |
| <Link id="m-isdown" /><code>{"bool IsDown { get; private set; }"}</code> |  |
| <Link id="m-isup" /><code>{"bool IsUp { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleleverchanged" /><code>{"private void HandleLeverChanged("}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever, int oldValue, int newValue)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-positionpanel" /><code>{"private void PositionPanel(float progress)"}</code> |  |
| <Link id="m-slide" /><code>{"private IEnumerator Slide(float targetProgress) (iterator)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-startslidedown" /><code>{"private void StartSlideDown()"}</code> |  |
| <Link id="m-startslideup" /><code>{"private void StartSlideUp()"}</code> |  |
| <Link id="m-switchtoboard" /><code>{"private void SwitchToBoard("}<Link to="/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{" panel)"}</code> |  |
| <Link id="m-switchtoboardcoroutine" /><code>{"private IEnumerator SwitchToBoardCoroutine("}<Link to="/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{" panel) (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SettingsPanel`:

[`MenuGameSetting<T>.settingsPanel`](/game-api/types/alta-menus/menugamesetting-t#m-settingspanel), [`MenuGameSetting<T>.SettingsPanel`](/game-api/types/alta-menus/menugamesetting-t#m-settingspanel-2).
