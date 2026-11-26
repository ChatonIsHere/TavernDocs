---
title: "SettingsPanel"
description: "In-world settings board that slides down when a lever is pulled and shows that lever's board, then slides back up when every lever is off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsPanel

A **class** in `Root.Township`, the global namespace.

In-world settings board that slides down when a lever is pulled and shows that lever's board, then slides back up when every lever is off. Client side.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`SettingsPanelConfiguration`](/mod/game-api/types/global-s/settingspanel-settingspanelconfiguration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationprogress" /><code>{"private float animationProgress"}</code> | <span className="api-desc">Current slide position, 0 up to 1 down.</span> |
| <Link id="m-currentpanel" /><code>{"private "}<Link to="/mod/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{" currentPanel"}</code> | <span className="api-desc">Board and lever pair now shown.</span> |
| <Link id="m-currentslideanimation" /><code>{"private Coroutine currentSlideAnimation"}</code> | <span className="api-desc">Running slide coroutine, or null.</span> |
| <Link id="m-currentswitchanimation" /><code>{"private Coroutine currentSwitchAnimation"}</code> | <span className="api-desc">Running board switch coroutine, or null.</span> |
| <Link id="m-descriptionpanel" /><code>{"private "}<Link to="/mod/game-api/types/global-s/settingdescriptionpanel">{"SettingDescriptionPanel"}</Link>{" descriptionPanel"}</code> | <span className="api-desc">Backing field for `DescriptionPanel`.</span> |
| <Link id="m-isslidingdowntest" /><code>{"private bool isSlidingDownTest"}</code> | <span className="api-desc">Inspector button to test sliding down.</span> |
| <Link id="m-isslidinguptest" /><code>{"private bool isSlidingUpTest"}</code> | <span className="api-desc">Inspector button to test sliding up.</span> |
| <Link id="m-panels" /><code>{"private "}<Link to="/mod/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{"[] panels"}</code> | <span className="api-desc">Each board with the lever that opens it.</span> |
| <Link id="m-paneltransform" /><code>{"private Transform panelTransform"}</code> | <span className="api-desc">Transform moved up and down.</span> |
| <Link id="m-slideanimation" /><code>{"private AnimationCurve slideAnimation"}</code> | <span className="api-desc">Curve from slide progress to the panel's local height.</span> |
| <Link id="m-slideduration" /><code>{"private float slideDuration"}</code> | <span className="api-desc">How long a full slide takes, in seconds.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-descriptionpanel-2" /><code><Link to="/mod/game-api/types/global-s/settingdescriptionpanel">{"SettingDescriptionPanel"}</Link>{" DescriptionPanel { get; }"}</code> | <span className="api-desc">The description panel boards use to show the hovered setting.</span> |
| <Link id="m-isdown" /><code>{"bool IsDown { get; private set; }"}</code> | <span className="api-desc">True once the panel has finished sliding down. False while moving.</span> |
| <Link id="m-isup" /><code>{"bool IsUp { get; private set; }"}</code> | <span className="api-desc">True once the panel has finished sliding up. False while moving.</span> |

## Methods

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleleverchanged" /><code>{"private void HandleLeverChanged("}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever, int oldValue, int newValue)"}</code> | <span className="api-desc">Lever handler: pulling a lever turns the others off and switches to its board; once all levers are off the panel slides up.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: runs the test slide and switch buttons and previews `animationProgress`.</span> |
| <Link id="m-positionpanel" /><code>{"private void PositionPanel(float progress)"}</code> | <span className="api-desc">Sets the panel's local height from `slideAnimation` at the given progress.</span> |
| <Link id="m-slide" /><code>{"private IEnumerator Slide(float targetProgress) (iterator)"}</code> | <span className="api-desc">Coroutine that moves the panel to fully up (0) or down (1) over `slideDuration`, then updates `IsUp` and `IsDown`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Puts the panel up, hides every board and subscribes to each lever.</span> |
| <Link id="m-startslidedown" /><code>{"private void StartSlideDown()"}</code> | <span className="api-desc">Starts sliding the panel down, replacing any slide in progress.</span> |
| <Link id="m-startslideup" /><code>{"private void StartSlideUp()"}</code> | <span className="api-desc">Starts sliding the panel up, replacing any slide in progress.</span> |
| <Link id="m-switchtoboard" /><code>{"private void SwitchToBoard("}<Link to="/mod/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{" panel)"}</code> | <span className="api-desc">Shows the given board: slides down if it's already current, else slides up, swaps boards and slides down again.</span> |
| <Link id="m-switchtoboardcoroutine" /><code>{"private IEnumerator SwitchToBoardCoroutine("}<Link to="/mod/game-api/types/global-s/settingspanel-settingspanelconfiguration">{"SettingsPanel.SettingsPanelConfiguration"}</Link>{" panel) (iterator)"}</code> | <span className="api-desc">Waits for the current slide, hides the old board, shows the new one and slides down.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SettingsPanel`:

<div className="api-used-in">

[`MenuGameSetting<T>.settingsPanel`](/mod/game-api/types/alta-menus/menugamesetting-t#m-settingspanel), [`MenuGameSetting<T>.SettingsPanel`](/mod/game-api/types/alta-menus/menugamesetting-t#m-settingspanel-2).

</div>
