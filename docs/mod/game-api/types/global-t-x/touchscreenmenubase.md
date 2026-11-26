---
title: "TouchScreenMenuBase"
description: "Base for an in-world touch screen that the local player's fingertips press: maps child buttons to screen rectangles, presses and releases them, and reports..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenMenuBase

A **class** in `Root.Township`, the global namespace.

Base for an in-world touch screen that the local player's fingertips press: maps child buttons to screen rectangles, presses and releases them, and reports swipes. Client side; call `Setup` with true for the local player.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`TouchScreenMenu`](/mod/game-api/types/alta-customization/touchscreenmenu), [`TouchScreenKeyboard`](/mod/game-api/types/global-t-x/touchscreenkeyboard)
- **Nested types** [`TouchInput`](/mod/game-api/types/global-t-x/touchscreenmenubase-touchinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenMenuBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-dimensions" /><code>{"protected Vector2 dimensions"}</code> | <span className="api-desc">Size of the screen area.</span> |
| <Link id="m-instantiatedsuggestionkeys" /><code>{"protected readonly Dictionary<KeyCode, "}<Link to="/mod/game-api/types/global-i-l/ilabeledtouchscreenbutton">{"ILabeledTouchScreenButton"}</Link>{"> instantiatedSuggestionKeys"}</code> | <span className="api-desc">Extra labelled keys by key code, also mapped as buttons.</span> |

<details className="api-private">
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activebuttonpress" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{" activeButtonPress"}</code> | <span className="api-desc">With multi-touch off, the one button now pressed.</span> |
| <Link id="m-alwaysshowbuttons" /><code>{"private bool alwaysShowButtons"}</code> | <span className="api-desc">If true, the buttons stay visible; else they only show while a finger is close.</span> |
| <Link id="m-baserect" /><code>{"private Rect baseRect"}</code> | <span className="api-desc">Screen area that covers every mapped button, in local space.</span> |
| <Link id="m-buttonpresscache" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> buttonPressCache"}</code> | <span className="api-desc">Reused list of buttons to press this frame.</span> |
| <Link id="m-buttonsparent" /><code>{"private GameObject buttonsParent"}</code> | <span className="api-desc">Object holding the buttons; turned on and off to show them.</span> |
| <Link id="m-canvastransform" /><code>{"private Transform canvasTransform"}</code> | <span className="api-desc">Transform used to measure finger distance; set to the buttons parent.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Set each frame when a finger is close, to show the buttons.</span> |
| <Link id="m-ismultitouch" /><code>{"private bool isMultiTouch"}</code> | <span className="api-desc">Whether several buttons can be pressed at once.</span> |
| <Link id="m-issetuplocal" /><code>{"private bool isSetupLocal"}</code> | <span className="api-desc">Set once `Setup` has run for the local player with fingertips.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mindistancetorendersquared" /><code>{"private float minDistanceToRenderSquared"}</code> | <span className="api-desc">Squared distance a fingertip must be within for touches to count and buttons to show.</span> |
| <Link id="m-onscreenreleasedeffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onScreenReleasedEffects"}</code> | <span className="api-desc">Effects played at a button's position when it is released.</span> |
| <Link id="m-onscreentoucheffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onScreenTouchEffects"}</code> | <span className="api-desc">Effects played at the fingertip when the screen is touched.</span> |
| <Link id="m-setuponstart" /><code>{"private bool setupOnStart"}</code> | <span className="api-desc">Serialized option. Not read in this class.</span> |
| <Link id="m-torelease" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> toRelease"}</code> | <span className="api-desc">Buttons to check for release this frame.</span> |
| <Link id="m-touched" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> touched"}</code> | <span className="api-desc">Buttons pressed this frame, so they aren't released.</span> |
| <Link id="m-touchhaptic" /><code>{"private float touchHaptic"}</code> | <span className="api-desc">Haptic strength sent to the hand on a touch.</span> |
| <Link id="m-touchinputs" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{"[] touchInputs"}</code> | <span className="api-desc">Touch trackers for the right and left fingertips.</span> |
| <Link id="m-touchreleasethreshold" /><code>{"private float touchReleaseThreshold"}</code> | <span className="api-desc">Distance from the screen a finger must pull back to end a touch.</span> |
| <Link id="m-touchthreshold" /><code>{"private float touchThreshold"}</code> | <span className="api-desc">Distance from the screen within which a finger starts a touch.</span> |
| <Link id="m-triggereffectsonbuttontouchonly" /><code>{"private bool triggerEffectsOnButtonTouchOnly"}</code> | <span className="api-desc">If true, touch and release effects only play when a button is hit.</span> |
| <Link id="m-updatetouch" /><code>{"private Coroutine updateTouch"}</code> | <span className="api-desc">Running touch update coroutine, or null.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatedbuttons" /><code>{"virtual List<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> InstantiatedButtons { get; set; }"}</code> | <span className="api-desc">Buttons on the screen. Filled from the buttons parent if empty when mapping.</span> |
| <Link id="m-buttonmap" /><code>{"protected Dictionary<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{", Rect> ButtonMap { get; }"}</code> | <span className="api-desc">Each button's rectangle in the screen's local space.</span> |
| <Link id="m-buttonsparent-2" /><code>{"protected Transform ButtonsParent { get; }"}</code> | <span className="api-desc">Parent of the buttons; shown only while a finger is close unless always shown.</span> |
| <Link id="m-isscreenfree" /><code>{"protected virtual bool IsScreenFree { get; }"}</code> | <span className="api-desc">Whether touches are processed. True by default.</span> |
| <Link id="m-offset" /><code>{"protected virtual Vector2 Offset { get; set; }"}</code> | <span className="api-desc">Offset for subclasses.</span> |
| <Link id="m-touchreleasethreshold-2" /><code>{"protected float TouchReleaseThreshold { get; }"}</code> | <span className="api-desc">Distance from the screen at which a touch ends.</span> |
| <Link id="m-touchthreshold-2" /><code>{"protected float TouchThreshold { get; }"}</code> | <span className="api-desc">Distance from the screen at which a touch starts.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-swipeexecuted" /><code>{"event Action<Vector2> SwipeExecuted"}</code> | <span className="api-desc">Raised with the swipe vector when a touch that hit no button ends.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-mapbuttons" /><code>{"void MapButtons()"}</code> | <span className="api-desc">Rebuilds the button rectangles and the screen bounds from the button positions and sizes.</span> |
| <Link id="m-setup" /><code>{"void Setup(bool isLocal)"}</code> | <span className="api-desc">For the local player, maps buttons and starts tracking both fingertips; hides the buttons unless always shown.</span> |
| <Link id="m-disablebuttons" /><code>{"protected void DisableButtons()"}</code> | <span className="api-desc">Hides the buttons.</span> |
| <Link id="m-enablebuttons" /><code>{"protected void EnableButtons()"}</code> | <span className="api-desc">Shows the buttons if a finger is close.</span> |
| <Link id="m-ondrawgizmos" /><code>{"protected virtual void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the screen area and touch depth.</span> |
| <Link id="m-posttouchcalculation" /><code>{"protected virtual void PostTouchCalculation()"}</code> | <span className="api-desc">Hook run after each frame's presses and releases.</span> |
| <Link id="m-pretouchcalculation" /><code>{"protected virtual void PreTouchCalculation()"}</code> | <span className="api-desc">Hook run before each frame's presses; clears the touched and release lists.</span> |
| <Link id="m-setupforlocal" /><code>{"protected virtual void SetupForLocal()"}</code> | <span className="api-desc">Hook run at the end of local setup.</span> |
| <Link id="m-updatetouchwithbuttons" /><code>{"protected virtual void UpdateTouchWithButtons("}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | <span className="api-desc">Hook run for each finger after its press is processed.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isbuttonvalid" /><code>{"private bool IsButtonValid(KeyValuePair<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{", Rect> buttonPair, "}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | <span className="api-desc">True if the button is enabled, active, allowed under the multi-touch rule and contains the touch.</span> |
| <Link id="m-isfirstpressinbounds" /><code>{"private bool IsFirstPressInBounds("}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | <span className="api-desc">True if the touch just started and is inside the screen's button area.</span> |
| <Link id="m-mapkey" /><code>{"private void MapKey(Matrix4x4 matrix, "}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{" button, ref Vector2 min, ref Vector2 max)"}</code> | <span className="api-desc">Works out a button's rectangle on the screen and grows the overall bounds to fit it.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops the touch update coroutine.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Restarts the touch update coroutine if the screen was set up for the local player.</span> |
| <Link id="m-processbuttonpress" /><code>{"private void ProcessButtonPress("}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | <span className="api-desc">On a new touch inside the screen, presses every button under the finger and plays the haptic and touch effects.</span> |
| <Link id="m-updatebuttonpresses" /><code>{"private void UpdateButtonPresses()"}</code> | <span className="api-desc">Updates each free hand's finger touch, presses buttons, raises swipes and notes if a finger is close.</span> |
| <Link id="m-updatebuttonreleases" /><code>{"private void UpdateButtonReleases()"}</code> | <span className="api-desc">Releases pressed buttons no finger is still touching and plays the release effects.</span> |
| <Link id="m-updatetouch-2" /><code>{"private IEnumerator UpdateTouch() (iterator)"}</code> | <span className="api-desc">Coroutine run at the end of each frame: handles presses and releases and shows or hides the buttons.</span> |
| <Link id="m-validatemultitouch" /><code>{"private bool ValidateMultiTouch("}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{" button)"}</code> | <span className="api-desc">With multi-touch off, only the button already being pressed counts.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenMenuBase`:

<div className="api-used-in">

[`GymnasiumTeleportTablet.touchScreen`](/mod/game-api/types/game-other-namespaces/gymnasiumteleporttablet#m-touchscreen), [`SocialTablet.touchScreen`](/mod/game-api/types/global-s/socialtablet#m-touchscreen).

</div>
