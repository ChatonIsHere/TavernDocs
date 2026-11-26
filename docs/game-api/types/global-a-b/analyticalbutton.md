---
title: "AnalyticalButton"
description: "A button pressed by the local player's fingertips, worked out geometrically each frame instead of with physics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticalButton

A **class** in `Root.Township`, no namespace.

A button pressed by the local player's fingertips, worked out geometrically each frame instead of with physics. Client side.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IPreventAtlasing`](/game-api/types/alta-utilities/ipreventatlasing)
- **Attributes** `SelectionBase`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnalyticalButton()"}</code> |

## Fields

<details>
<summary>39 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> | Shader ID of `_Color`. |
| <Link id="m-activebuttons" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{"> activeButtons"}</code> | Every button being updated for fingertip presses. |
| <Link id="m-activebuttonscache" /><code>{"private static List<"}<Link to="/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{"> activeButtonsCache"}</code> | Scratch copy of `activeButtons` used while iterating. |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | Colour when usable, if colour changing is on. |
| <Link id="m-activematerial" /><code>{"private Material activeMaterial"}</code> | Material when usable, if colour changing is off. |
| <Link id="m-androidbuttonrenderer" /><code>{"private Renderer androidButtonRenderer"}</code> | Second button renderer kept out of atlasing; kept from an older field name. |
| <Link id="m-buttoncollider" /><code>{"private Collider buttonCollider"}</code> | Collider that moves as the button is pushed and is tested against the fingertips. Backing field for `ButtonCollider`. |
| <Link id="m-buttonrenderer" /><code>{"private Renderer buttonRenderer"}</code> | Renderer whose colour or material shows whether the button is usable. Backing field for `ButtonRenderer`. |
| <Link id="m-delay" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" delay"}</code> | Scheduled call that ends the enable delay. |
| <Link id="m-enabledelay" /><code>{"private float enableDelay"}</code> | Seconds after enabling before the button can be pressed. |
| <Link id="m-freeaxis" /><code>{"private Vector.Axis freeAxis"}</code> | Local axis the button collider slides along when pushed. |
| <Link id="m-hasdelayedonce" /><code>{"private bool hasDelayedOnce"}</code> | Set after the first enable delay, for `isEnableDelayOnlyOnTheFirstTime`. |
| <Link id="m-inactivecolor" /><code>{"private Color inActiveColor"}</code> | Colour when not usable, if colour changing is on. |
| <Link id="m-inactivematerial" /><code>{"private Material inactiveMaterial"}</code> | Material when not usable, if colour changing is off. |
| <Link id="m-isactiveatallscales" /><code>{"private bool isActiveAtAllScales"}</code> | Lets the button fire even when its world scale is 0.9 or less; otherwise small (shrunk) buttons don't fire. |
| <Link id="m-ischangingcoloronenable" /><code>{"private bool isChangingColorOnEnable"}</code> | Shows usable state by colour; when off, by swapping materials. |
| <Link id="m-isdelaying" /><code>{"private bool isDelaying"}</code> | True while waiting out the enable delay. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Whether the button can be used. Backing field for `IsEnabled`. |
| <Link id="m-isenabledelayonlyonthefirsttime" /><code>{"private bool isEnableDelayOnlyOnTheFirstTime"}</code> | Only applies the enable delay the first time the button is enabled. |
| <Link id="m-isfree" /><code>{"private bool isFree"}</code> | Set once no fingertip overlaps the button after enabling, so a finger already inside can't press it. |
| <Link id="m-isignoringdelay" /><code>{"private bool isIgnoringDelay"}</code> | Stops `OnEnable` from restarting the delay while the button enables itself. |
| <Link id="m-isphysicallypressed" /><code>{"private bool isPhysicallyPressed"}</code> | Whether the button is pushed past the press threshold and not yet back past release. |
| <Link id="m-isplayingdefaultsounds" /><code>{"private bool isPlayingDefaultSounds"}</code> | Plays the default button sounds when no custom sound is set. |
| <Link id="m-isplayingsounds" /><code>{"private bool isPlayingSounds"}</code> | Whether pressing and releasing play sounds. |
| <Link id="m-lastlefttriangle" /><code>{"private "}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" lastLeftTriangle"}</code> | Fingertip triangle of the left hand from the last update. |
| <Link id="m-lastrighttriangle" /><code>{"private "}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" lastRightTriangle"}</code> | Fingertip triangle of the right hand from the last update. |
| <Link id="m-maxdepth" /><code>{"private float maxDepth"}</code> | Collider position along the free axis when the button is fully out. |
| <Link id="m-mindepth" /><code>{"private float minDepth"}</code> | Collider position along the free axis when the button is fully pushed in. |
| <Link id="m-onbecameactive" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onBecameActive"}</code> | Event raised when the button finishes its enable animation. |
| <Link id="m-onfinishedframe" /><code>{"private static Action onFinishedFrame"}</code> | One-shot callback run after all buttons update in a frame; nothing sets it in this build. |
| <Link id="m-pressed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> | Event raised on press; exposed as `Pressed`. |
| <Link id="m-pressedsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" pressedSound"}</code> | Custom sound for pressing. |
| <Link id="m-pressspeed" /><code>{"private float pressSpeed"}</code> | Not used in this build. |
| <Link id="m-pressthreshold" /><code>{"private float pressThreshold"}</code> | How far pushed (0 to 1) the button must be to count as pressed. |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | Property block used to set the button colour. |
| <Link id="m-released" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" released"}</code> | Event raised on release; exposed as `Released`. |
| <Link id="m-releasedsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" releasedSound"}</code> | Custom sound for releasing. |
| <Link id="m-releasethreshold" /><code>{"private float releaseThreshold"}</code> | Pushed amount (0 to 1) below which a pressed button releases. |
| <Link id="m-updatebuttons" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateButtons"}</code> | Handle of the shared `UpdateButtons` late update; removed when no buttons are tracked. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttoncollider-2" /><code>{"Collider ButtonCollider { get; }"}</code> | The moving part of the button, pushed in by the fingers. |
| <Link id="m-buttonrenderer-2" /><code>{"Renderer ButtonRenderer { get; }"}</code> | Renderer recoloured or re-materialed when enabled or disabled. |
| <Link id="m-holdbuttonpresses" /><code>{"static bool HoldButtonPresses { get; set; }"}</code> | Static: while true every button stays up and shows as inactive. |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether it can be pressed. Setting it updates the collider, visuals and position. |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | True while pressed. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pressed-2" /><code>{"event Action Pressed"}</code> | Fired when pushed in. |
| <Link id="m-released-2" /><code>{"event Action Released"}</code> | Fired when let out. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setstateinternal" /><code>{"void SetStateInternal(bool state)"}</code> | Sets `State` directly without firing events. |

<details>
<summary>19 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonenableanimation" /><code>{"private IEnumerator ButtonEnableAnimation() (iterator)"}</code> | Coroutine after the enable delay: slides the button out to its rest depth, raises `onBecameActive` and starts tracking it. |
| <Link id="m-changevisuals" /><code>{"private void ChangeVisuals(bool isActive)"}</code> | Shows the button as usable or not, by colour through a property block or by swapping materials. |
| <Link id="m-checkintersection" /><code>{"private static bool CheckIntersection("}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" triangle, Matrix4x4 matrix, Bounds bounds)"}</code> | Tests whether a fingertip triangle overlaps the button collider's box, using a separating axis test. |
| <Link id="m-enddelay" /><code>{"private void EndDelay()"}</code> | Ends the enable delay and plays the enable animation if the button is enabled. |
| <Link id="m-getclampedvector" /><code>{"private Vector3 GetClampedVector(Vector3 original, out float progress)"}</code> | Clamps a local position to the button's travel along its free axis and returns how far pressed it is. |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> | Keeps the button renderers out of texture atlasing so their colour can change. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops tracking the button. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Empty. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts the enable delay if one is set, otherwise starts tracking the button for fingertip presses. |
| <Link id="m-onpressed" /><code>{"private void OnPressed()"}</code> | Sets `State`, raises `Pressed` and plays the pressed sound (custom or default). |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> | Clears `State`, raises `Released` and plays the released sound (custom or default). |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Keeps `minDepth` no greater than `maxDepth` and fills `activeMaterial` from the renderer. |
| <Link id="m-progressvector" /><code>{"private Vector3 ProgressVector(float position, out float progress)"}</code> | Like `GetClampedVector` but from a single depth value along the free axis. |
| <Link id="m-startdelay" /><code>{"private void StartDelay()"}</code> | Disables the button and schedules `EndDelay` after `enableDelay` seconds. |
| <Link id="m-testvector" /><code>{"private static bool TestVector(Vector3 vector, "}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" triangle, Vector3 extents)"}</code> | One separating axis check of a triangle against a box's extents. |
| <Link id="m-updatebuttons-2" /><code>{"private static void UpdateButtons()"}</code> | Late update for all tracked buttons: gets the local player's fingertip triangles and updates each button. |
| <Link id="m-updateenabledelay" /><code>{"private void UpdateEnableDelay()"}</code> | Older per-frame version of the enable animation. Not called in this build. |
| <Link id="m-updateusablestatus" /><code>{"private void UpdateUsableStatus()"}</code> | Applies enabled and delay state to visuals, collider and component, and resets the button's depth. |
| <Link id="m-updatewithtriangle" /><code>{"private void UpdateWithTriangle("}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" rightTriangle, "}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" leftTriangle)"}</code> | Moves the button along its axis so the fingertips don't overlap it and fires press or release on the thresholds. |

</details>

## Used in

Members of other types that take, return or hold a `AnalyticalButton`:

[`AnalyticalButtonGroupAutoEnabler.buttons`](/game-api/types/global-a-b/analyticalbuttongroupautoenabler#m-buttons), [`PicoLoginController.loginButton`](/game-api/types/game-other-namespaces/picologincontroller#m-loginbutton), [`AccessibilitySeatedStandingBoard.seatedButton`](/game-api/types/game-other-namespaces/accessibilityseatedstandingboard#m-seatedbutton), [`AccessibilitySeatedStandingBoard.standingButton`](/game-api/types/game-other-namespaces/accessibilityseatedstandingboard#m-standingbutton), [`NumericalWidget.buttonPrefab`](/game-api/types/global-m-o/numericalwidget#m-buttonprefab).
