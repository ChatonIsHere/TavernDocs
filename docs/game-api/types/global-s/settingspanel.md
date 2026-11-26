---
title: "SettingsPanel"
description: "In-world settings board that slides down when a lever is pulled and shows that lever's board, then slides back up when every lever is off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsPanel

A **class** in `Root.Township`, no namespace.

In-world settings board that slides down when a lever is pulled and shows that lever's board, then slides back up when every lever is off. Client side.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`SettingsPanelConfiguration`](/game-api/types/global-s/settingspanel-settingspanelconfiguration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationprogress" /><code>{"private float animationProgress"}</code> | Current slide position, 0 up to 1 down. |
| <Link id="m-currentpanel" /><code>{"private "}<Link to="/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{" currentPanel"}</code> | Board and lever pair now shown. |
| <Link id="m-currentslideanimation" /><code>{"private Coroutine currentSlideAnimation"}</code> | Running slide coroutine, or null. |
| <Link id="m-currentswitchanimation" /><code>{"private Coroutine currentSwitchAnimation"}</code> | Running board switch coroutine, or null. |
| <Link id="m-descriptionpanel" /><code>{"private "}<Link to="/game-api/types/global-s/settingdescriptionpanel">{"SettingDescriptionPanel"}</Link>{" descriptionPanel"}</code> | Backing field for `DescriptionPanel`. |
| <Link id="m-isslidingdowntest" /><code>{"private bool isSlidingDownTest"}</code> | Inspector button to test sliding down. |
| <Link id="m-isslidinguptest" /><code>{"private bool isSlidingUpTest"}</code> | Inspector button to test sliding up. |
| <Link id="m-panels" /><code>{"private "}<Link to="/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{"[] panels"}</code> | Each board with the lever that opens it. |
| <Link id="m-paneltransform" /><code>{"private Transform panelTransform"}</code> | Transform moved up and down. |
| <Link id="m-slideanimation" /><code>{"private AnimationCurve slideAnimation"}</code> | Curve from slide progress to the panel's local height. |
| <Link id="m-slideduration" /><code>{"private float slideDuration"}</code> | How long a full slide takes, in seconds. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-descriptionpanel-2" /><code><Link to="/game-api/types/global-s/settingdescriptionpanel">{"SettingDescriptionPanel"}</Link>{" DescriptionPanel { get; }"}</code> | The description panel boards use to show the hovered setting. |
| <Link id="m-isdown" /><code>{"bool IsDown { get; private set; }"}</code> | True once the panel has finished sliding down. False while moving. |
| <Link id="m-isup" /><code>{"bool IsUp { get; private set; }"}</code> | True once the panel has finished sliding up. False while moving. |

## Methods

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleleverchanged" /><code>{"private void HandleLeverChanged("}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever, int oldValue, int newValue)"}</code> | Lever handler: pulling a lever turns the others off and switches to its board; once all levers are off the panel slides up. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: runs the test slide and switch buttons and previews `animationProgress`. |
| <Link id="m-positionpanel" /><code>{"private void PositionPanel(float progress)"}</code> | Sets the panel's local height from `slideAnimation` at the given progress. |
| <Link id="m-slide" /><code>{"private IEnumerator Slide(float targetProgress) (iterator)"}</code> | Coroutine that moves the panel to fully up (0) or down (1) over `slideDuration`, then updates `IsUp` and `IsDown`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Puts the panel up, hides every board and subscribes to each lever. |
| <Link id="m-startslidedown" /><code>{"private void StartSlideDown()"}</code> | Starts sliding the panel down, replacing any slide in progress. |
| <Link id="m-startslideup" /><code>{"private void StartSlideUp()"}</code> | Starts sliding the panel up, replacing any slide in progress. |
| <Link id="m-switchtoboard" /><code>{"private void SwitchToBoard("}<Link to="/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{" panel)"}</code> | Shows the given board: slides down if it's already current, else slides up, swaps boards and slides down again. |
| <Link id="m-switchtoboardcoroutine" /><code>{"private IEnumerator SwitchToBoardCoroutine("}<Link to="/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{" panel) (iterator)"}</code> | Waits for the current slide, hides the old board, shows the new one and slides down. |

</details>

## Used in

Members of other types that take, return or hold a `SettingsPanel`:

[`MenuGameSetting<T>.settingsPanel`](/game-api/types/alta-menus/menugamesetting-t#m-settingspanel), [`MenuGameSetting<T>.SettingsPanel`](/game-api/types/alta-menus/menugamesetting-t#m-settingspanel-2).
