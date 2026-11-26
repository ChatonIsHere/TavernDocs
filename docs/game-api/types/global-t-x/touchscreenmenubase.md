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
| <Link id="m-ctor" /><code>{"TouchScreenMenuBase()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dimensions" /><code>{"protected Vector2 dimensions"}</code> | Size of the screen area. |
| <Link id="m-instantiatedsuggestionkeys" /><code>{"protected readonly Dictionary<KeyCode, "}<Link to="/game-api/types/global-i-l/ilabeledtouchscreenbutton">{"ILabeledTouchScreenButton"}</Link>{"> instantiatedSuggestionKeys"}</code> | Extra labelled keys by key code, also mapped as buttons. |

<details>
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activebuttonpress" /><code>{"private "}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{" activeButtonPress"}</code> | With multi-touch off, the one button now pressed. |
| <Link id="m-alwaysshowbuttons" /><code>{"private bool alwaysShowButtons"}</code> | If true, the buttons stay visible; else they only show while a finger is close. |
| <Link id="m-baserect" /><code>{"private Rect baseRect"}</code> | Screen area that covers every mapped button, in local space. |
| <Link id="m-buttonpresscache" /><code>{"private readonly List<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> buttonPressCache"}</code> | Reused list of buttons to press this frame. |
| <Link id="m-buttonsparent" /><code>{"private GameObject buttonsParent"}</code> | Object holding the buttons; turned on and off to show them. |
| <Link id="m-canvastransform" /><code>{"private Transform canvasTransform"}</code> | Transform used to measure finger distance; set to the buttons parent. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Set each frame when a finger is close, to show the buttons. |
| <Link id="m-ismultitouch" /><code>{"private bool isMultiTouch"}</code> | Whether several buttons can be pressed at once. |
| <Link id="m-issetuplocal" /><code>{"private bool isSetupLocal"}</code> | Set once `Setup` has run for the local player with fingertips. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mindistancetorendersquared" /><code>{"private float minDistanceToRenderSquared"}</code> | Squared distance a fingertip must be within for touches to count and buttons to show. |
| <Link id="m-onscreenreleasedeffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onScreenReleasedEffects"}</code> | Effects played at a button's position when it is released. |
| <Link id="m-onscreentoucheffects" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onScreenTouchEffects"}</code> | Effects played at the fingertip when the screen is touched. |
| <Link id="m-setuponstart" /><code>{"private bool setupOnStart"}</code> | Serialized option. Not read in this class. |
| <Link id="m-torelease" /><code>{"private HashSet<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> toRelease"}</code> | Buttons to check for release this frame. |
| <Link id="m-touched" /><code>{"private HashSet<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> touched"}</code> | Buttons pressed this frame, so they aren't released. |
| <Link id="m-touchhaptic" /><code>{"private float touchHaptic"}</code> | Haptic strength sent to the hand on a touch. |
| <Link id="m-touchinputs" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{"[] touchInputs"}</code> | Touch trackers for the right and left fingertips. |
| <Link id="m-touchreleasethreshold" /><code>{"private float touchReleaseThreshold"}</code> | Distance from the screen a finger must pull back to end a touch. |
| <Link id="m-touchthreshold" /><code>{"private float touchThreshold"}</code> | Distance from the screen within which a finger starts a touch. |
| <Link id="m-triggereffectsonbuttontouchonly" /><code>{"private bool triggerEffectsOnButtonTouchOnly"}</code> | If true, touch and release effects only play when a button is hit. |
| <Link id="m-updatetouch" /><code>{"private Coroutine updateTouch"}</code> | Running touch update coroutine, or null. |

</details>

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
| <Link id="m-ondrawgizmos" /><code>{"protected virtual void OnDrawGizmos()"}</code> | Draws the screen area and touch depth. |
| <Link id="m-posttouchcalculation" /><code>{"protected virtual void PostTouchCalculation()"}</code> | Hook run after each frame's presses and releases. |
| <Link id="m-pretouchcalculation" /><code>{"protected virtual void PreTouchCalculation()"}</code> | Hook run before each frame's presses; clears the touched and release lists. |
| <Link id="m-setupforlocal" /><code>{"protected virtual void SetupForLocal()"}</code> | Hook run at the end of local setup. |
| <Link id="m-updatetouchwithbuttons" /><code>{"protected virtual void UpdateTouchWithButtons("}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | Hook run for each finger after its press is processed. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isbuttonvalid" /><code>{"private bool IsButtonValid(KeyValuePair<"}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{", Rect> buttonPair, "}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | True if the button is enabled, active, allowed under the multi-touch rule and contains the touch. |
| <Link id="m-isfirstpressinbounds" /><code>{"private bool IsFirstPressInBounds("}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | True if the touch just started and is inside the screen's button area. |
| <Link id="m-mapkey" /><code>{"private void MapKey(Matrix4x4 matrix, "}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{" button, ref Vector2 min, ref Vector2 max)"}</code> | Works out a button's rectangle on the screen and grows the overall bounds to fit it. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the touch update coroutine. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Restarts the touch update coroutine if the screen was set up for the local player. |
| <Link id="m-processbuttonpress" /><code>{"private void ProcessButtonPress("}<Link to="/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | On a new touch inside the screen, presses every button under the finger and plays the haptic and touch effects. |
| <Link id="m-updatebuttonpresses" /><code>{"private void UpdateButtonPresses()"}</code> | Updates each free hand's finger touch, presses buttons, raises swipes and notes if a finger is close. |
| <Link id="m-updatebuttonreleases" /><code>{"private void UpdateButtonReleases()"}</code> | Releases pressed buttons no finger is still touching and plays the release effects. |
| <Link id="m-updatetouch-2" /><code>{"private IEnumerator UpdateTouch() (iterator)"}</code> | Coroutine run at the end of each frame: handles presses and releases and shows or hides the buttons. |
| <Link id="m-validatemultitouch" /><code>{"private bool ValidateMultiTouch("}<Link to="/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{" button)"}</code> | With multi-touch off, only the button already being pressed counts. |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenMenuBase`:

[`GymnasiumTeleportTablet.touchScreen`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet#m-touchscreen), [`SocialTablet.touchScreen`](/game-api/types/global-s/socialtablet#m-touchscreen).
