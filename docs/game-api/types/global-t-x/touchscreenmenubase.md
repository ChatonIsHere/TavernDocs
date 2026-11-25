---
title: "TouchScreenMenuBase"
description: "Base for an in-world touch screen that the local player's fingertips press: maps child buttons to screen rectangles, presses and releases them, and reports..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenMenuBase

A **class** in `Root.Township`, no namespace.

Base for an in-world touch screen that the local player's fingertips press: maps child buttons to screen rectangles, presses and releases them, and reports swipes. Client side; call `Setup` with true for the local player.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`TouchScreenMenu`](/game-api/types/alta-customization/touchscreenmenu), [`TouchScreenKeyboard`](/game-api/types/global-t-x/touchscreenkeyboard)
- **Nested types** [`TouchInput`](/game-api/types/global-t-x/touchscreenmenubase-touchinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenMenuBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activebuttonpress" /><code>{"private "}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{" activeButtonPress"}</code> |  |
| <Link id="m-alwaysshowbuttons" /><code>{"private bool alwaysShowButtons"}</code> |  |
| <Link id="m-baserect" /><code>{"private Rect baseRect"}</code> |  |
| <Link id="m-buttonpresscache" /><code>{"private readonly List<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> buttonPressCache"}</code> |  |
| <Link id="m-buttonsparent" /><code>{"private GameObject buttonsParent"}</code> |  |
| <Link id="m-canvastransform" /><code>{"private Transform canvasTransform"}</code> |  |
| <Link id="m-dimensions" /><code>{"protected Vector2 dimensions"}</code> | Size of the screen area. |
| <Link id="m-instantiatedsuggestionkeys" /><code>{"protected readonly Dictionary<KeyCode, "}<Link to="/game-api/types/global-i-l/ilabeledtouchscreenbutton">{"ILabeledTouchScreenButton"}</Link>{"> instantiatedSuggestionKeys"}</code> | Extra labelled keys by key code, also mapped as buttons. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-ismultitouch" /><code>{"private bool isMultiTouch"}</code> |  |
| <Link id="m-issetuplocal" /><code>{"private bool isSetupLocal"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-mindistancetorendersquared" /><code>{"private float minDistanceToRenderSquared"}</code> |  |
| <Link id="m-onscreenreleasedeffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onScreenReleasedEffects"}</code> |  |
| <Link id="m-onscreentoucheffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onScreenTouchEffects"}</code> |  |
| <Link id="m-setuponstart" /><code>{"private bool setupOnStart"}</code> |  |
| <Link id="m-torelease" /><code>{"private HashSet<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> toRelease"}</code> |  |
| <Link id="m-touched" /><code>{"private HashSet<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> touched"}</code> |  |
| <Link id="m-touchhaptic" /><code>{"private float touchHaptic"}</code> |  |
| <Link id="m-touchinputs" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{"[] touchInputs"}</code> |  |
| <Link id="m-touchreleasethreshold" /><code>{"private float touchReleaseThreshold"}</code> |  |
| <Link id="m-touchthreshold" /><code>{"private float touchThreshold"}</code> |  |
| <Link id="m-triggereffectsonbuttontouchonly" /><code>{"private bool triggerEffectsOnButtonTouchOnly"}</code> |  |
| <Link id="m-updatetouch" /><code>{"private Coroutine updateTouch"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedbuttons" /><code>{"virtual List<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> InstantiatedButtons { get; set; }"}</code> | Buttons on the screen. Filled from the buttons parent if empty when mapping. |
| <Link id="m-buttonmap" /><code>{"protected Dictionary<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{", Rect> ButtonMap { get; }"}</code> | Each button's rectangle in the screen's local space. |
| <Link id="m-buttonsparent-2" /><code>{"protected Transform ButtonsParent { get; }"}</code> | Parent of the buttons; shown only while a finger is close unless always shown. |
| <Link id="m-isscreenfree" /><code>{"protected virtual bool IsScreenFree { get; }"}</code> | Whether touches are processed. True by default. |
| <Link id="m-offset" /><code>{"protected virtual Vector2 Offset { get; set; }"}</code> | Offset for subclasses. |
| <Link id="m-touchreleasethreshold-2" /><code>{"protected float TouchReleaseThreshold { get; }"}</code> | Distance from the screen at which a touch ends. |
| <Link id="m-touchthreshold-2" /><code>{"protected float TouchThreshold { get; }"}</code> | Distance from the screen at which a touch starts. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-swipeexecuted" /><code>{"event Action<Vector2> SwipeExecuted"}</code> | Raised with the swipe vector when a touch that hit no button ends. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-mapbuttons" /><code>{"void MapButtons()"}</code> | Rebuilds the button rectangles and the screen bounds from the button positions and sizes. |
| <Link id="m-setup" /><code>{"void Setup(bool isLocal)"}</code> | For the local player, maps buttons and starts tracking both fingertips; hides the buttons unless always shown. |
| <Link id="m-disablebuttons" /><code>{"protected void DisableButtons()"}</code> | Hides the buttons. |
| <Link id="m-enablebuttons" /><code>{"protected void EnableButtons()"}</code> | Shows the buttons if a finger is close. |
| <Link id="m-isbuttonvalid" /><code>{"private bool IsButtonValid(KeyValuePair<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{", Rect> buttonPair, "}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> |  |
| <Link id="m-isfirstpressinbounds" /><code>{"private bool IsFirstPressInBounds("}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> |  |
| <Link id="m-mapkey" /><code>{"private void MapKey(Matrix4x4 matrix, "}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{" button, ref Vector2 min, ref Vector2 max)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"protected virtual void OnDrawGizmos()"}</code> | Draws the screen area and touch depth. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-posttouchcalculation" /><code>{"protected virtual void PostTouchCalculation()"}</code> | Hook run after each frame's presses and releases. |
| <Link id="m-pretouchcalculation" /><code>{"protected virtual void PreTouchCalculation()"}</code> | Hook run before each frame's presses; clears the touched and release lists. |
| <Link id="m-processbuttonpress" /><code>{"private void ProcessButtonPress("}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> |  |
| <Link id="m-setupforlocal" /><code>{"protected virtual void SetupForLocal()"}</code> | Hook run at the end of local setup. |
| <Link id="m-updatebuttonpresses" /><code>{"private void UpdateButtonPresses()"}</code> |  |
| <Link id="m-updatebuttonreleases" /><code>{"private void UpdateButtonReleases()"}</code> |  |
| <Link id="m-updatetouch-2" /><code>{"private IEnumerator UpdateTouch() (iterator)"}</code> |  |
| <Link id="m-updatetouchwithbuttons" /><code>{"protected virtual void UpdateTouchWithButtons("}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | Hook run for each finger after its press is processed. |
| <Link id="m-validatemultitouch" /><code>{"private bool ValidateMultiTouch("}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{" button)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TouchScreenMenuBase`:

[`GymnasiumTeleportTablet.touchScreen`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet#m-touchscreen), [`SocialTablet.touchScreen`](/game-api/types/global-s/socialtablet#m-touchscreen).
