---
title: "AnalyticalButton"
description: "A button pressed by the local player's fingertips, worked out geometrically each frame instead of with physics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticalButton

A **class** in `Root.Township`, the global namespace.

A button pressed by the local player's fingertips, worked out geometrically each frame instead of with physics. Client side.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IPreventAtlasing`](/mod/game-api/types/alta-utilities/ipreventatlasing)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticalButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>39 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> | <span className="api-desc">Shader ID of `_Color`.</span> |
| <Link id="m-activebuttons" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{"> activeButtons"}</code> | <span className="api-desc">Every button being updated for fingertip presses.</span> |
| <Link id="m-activebuttonscache" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{"> activeButtonsCache"}</code> | <span className="api-desc">Scratch copy of `activeButtons` used while iterating.</span> |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | <span className="api-desc">Colour when usable, if colour changing is on.</span> |
| <Link id="m-activematerial" /><code>{"private Material activeMaterial"}</code> | <span className="api-desc">Material when usable, if colour changing is off.</span> |
| <Link id="m-androidbuttonrenderer" /><code>{"private Renderer androidButtonRenderer"}</code> | <span className="api-desc">Second button renderer kept out of atlasing; kept from an older field name.</span> |
| <Link id="m-buttoncollider" /><code>{"private Collider buttonCollider"}</code> | <span className="api-desc">Collider that moves as the button is pushed and is tested against the fingertips. Backing field for `ButtonCollider`.</span> |
| <Link id="m-buttonrenderer" /><code>{"private Renderer buttonRenderer"}</code> | <span className="api-desc">Renderer whose colour or material shows whether the button is usable. Backing field for `ButtonRenderer`.</span> |
| <Link id="m-delay" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" delay"}</code> | <span className="api-desc">Scheduled call that ends the enable delay.</span> |
| <Link id="m-enabledelay" /><code>{"private float enableDelay"}</code> | <span className="api-desc">Seconds after enabling before the button can be pressed.</span> |
| <Link id="m-freeaxis" /><code>{"private Vector.Axis freeAxis"}</code> | <span className="api-desc">Local axis the button collider slides along when pushed.</span> |
| <Link id="m-hasdelayedonce" /><code>{"private bool hasDelayedOnce"}</code> | <span className="api-desc">Set after the first enable delay, for `isEnableDelayOnlyOnTheFirstTime`.</span> |
| <Link id="m-inactivecolor" /><code>{"private Color inActiveColor"}</code> | <span className="api-desc">Colour when not usable, if colour changing is on.</span> |
| <Link id="m-inactivematerial" /><code>{"private Material inactiveMaterial"}</code> | <span className="api-desc">Material when not usable, if colour changing is off.</span> |
| <Link id="m-isactiveatallscales" /><code>{"private bool isActiveAtAllScales"}</code> | <span className="api-desc">Lets the button fire even when its world scale is 0.9 or less; otherwise small (shrunk) buttons don't fire.</span> |
| <Link id="m-ischangingcoloronenable" /><code>{"private bool isChangingColorOnEnable"}</code> | <span className="api-desc">Shows usable state by colour; when off, by swapping materials.</span> |
| <Link id="m-isdelaying" /><code>{"private bool isDelaying"}</code> | <span className="api-desc">True while waiting out the enable delay.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Whether the button can be used. Backing field for `IsEnabled`.</span> |
| <Link id="m-isenabledelayonlyonthefirsttime" /><code>{"private bool isEnableDelayOnlyOnTheFirstTime"}</code> | <span className="api-desc">Only applies the enable delay the first time the button is enabled.</span> |
| <Link id="m-isfree" /><code>{"private bool isFree"}</code> | <span className="api-desc">Set once no fingertip overlaps the button after enabling, so a finger already inside can't press it.</span> |
| <Link id="m-isignoringdelay" /><code>{"private bool isIgnoringDelay"}</code> | <span className="api-desc">Stops `OnEnable` from restarting the delay while the button enables itself.</span> |
| <Link id="m-isphysicallypressed" /><code>{"private bool isPhysicallyPressed"}</code> | <span className="api-desc">Whether the button is pushed past the press threshold and not yet back past release.</span> |
| <Link id="m-isplayingdefaultsounds" /><code>{"private bool isPlayingDefaultSounds"}</code> | <span className="api-desc">Plays the default button sounds when no custom sound is set.</span> |
| <Link id="m-isplayingsounds" /><code>{"private bool isPlayingSounds"}</code> | <span className="api-desc">Whether pressing and releasing play sounds.</span> |
| <Link id="m-lastlefttriangle" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" lastLeftTriangle"}</code> | <span className="api-desc">Fingertip triangle of the left hand from the last update.</span> |
| <Link id="m-lastrighttriangle" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" lastRightTriangle"}</code> | <span className="api-desc">Fingertip triangle of the right hand from the last update.</span> |
| <Link id="m-maxdepth" /><code>{"private float maxDepth"}</code> | <span className="api-desc">Collider position along the free axis when the button is fully out.</span> |
| <Link id="m-mindepth" /><code>{"private float minDepth"}</code> | <span className="api-desc">Collider position along the free axis when the button is fully pushed in.</span> |
| <Link id="m-onbecameactive" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onBecameActive"}</code> | <span className="api-desc">Event raised when the button finishes its enable animation.</span> |
| <Link id="m-onfinishedframe" /><code>{"private static Action onFinishedFrame"}</code> | <span className="api-desc">One-shot callback run after all buttons update in a frame; nothing sets it in this build.</span> |
| <Link id="m-pressed" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> | <span className="api-desc">Event raised on press; exposed as `Pressed`.</span> |
| <Link id="m-pressedsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" pressedSound"}</code> | <span className="api-desc">Custom sound for pressing.</span> |
| <Link id="m-pressspeed" /><code>{"private float pressSpeed"}</code> | <span className="api-desc">Not used in this build.</span> |
| <Link id="m-pressthreshold" /><code>{"private float pressThreshold"}</code> | <span className="api-desc">How far pushed (0 to 1) the button must be to count as pressed.</span> |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | <span className="api-desc">Property block used to set the button colour.</span> |
| <Link id="m-released" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" released"}</code> | <span className="api-desc">Event raised on release; exposed as `Released`.</span> |
| <Link id="m-releasedsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" releasedSound"}</code> | <span className="api-desc">Custom sound for releasing.</span> |
| <Link id="m-releasethreshold" /><code>{"private float releaseThreshold"}</code> | <span className="api-desc">Pushed amount (0 to 1) below which a pressed button releases.</span> |
| <Link id="m-updatebuttons" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateButtons"}</code> | <span className="api-desc">Handle of the shared `UpdateButtons` late update; removed when no buttons are tracked.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttoncollider-2" /><code>{"Collider ButtonCollider { get; }"}</code> | <span className="api-desc">The moving part of the button, pushed in by the fingers.</span> |
| <Link id="m-buttonrenderer-2" /><code>{"Renderer ButtonRenderer { get; }"}</code> | <span className="api-desc">Renderer recoloured or re-materialed when enabled or disabled.</span> |
| <Link id="m-holdbuttonpresses" /><code>{"static bool HoldButtonPresses { get; set; }"}</code> | <span className="api-desc">Static: while true every button stays up and shows as inactive.</span> |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether it can be pressed. Setting it updates the collider, visuals and position.</span> |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | <span className="api-desc">True while pressed.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pressed-2" /><code>{"event Action Pressed"}</code> | <span className="api-desc">Fired when pushed in.</span> |
| <Link id="m-released-2" /><code>{"event Action Released"}</code> | <span className="api-desc">Fired when let out.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setstateinternal" /><code>{"void SetStateInternal(bool state)"}</code> | <span className="api-desc">Sets `State` directly without firing events.</span> |

<details className="api-private">
<summary>19 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonenableanimation" /><code>{"private IEnumerator ButtonEnableAnimation() (iterator)"}</code> | <span className="api-desc">Coroutine after the enable delay: slides the button out to its rest depth, raises `onBecameActive` and starts tracking it.</span> |
| <Link id="m-changevisuals" /><code>{"private void ChangeVisuals(bool isActive)"}</code> | <span className="api-desc">Shows the button as usable or not, by colour through a property block or by swapping materials.</span> |
| <Link id="m-checkintersection" /><code>{"private static bool CheckIntersection("}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" triangle, Matrix4x4 matrix, Bounds bounds)"}</code> | <span className="api-desc">Tests whether a fingertip triangle overlaps the button collider's box, using a separating axis test.</span> |
| <Link id="m-enddelay" /><code>{"private void EndDelay()"}</code> | <span className="api-desc">Ends the enable delay and plays the enable animation if the button is enabled.</span> |
| <Link id="m-getclampedvector" /><code>{"private Vector3 GetClampedVector(Vector3 original, out float progress)"}</code> | <span className="api-desc">Clamps a local position to the button's travel along its free axis and returns how far pressed it is.</span> |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> | <span className="api-desc">Keeps the button renderers out of texture atlasing so their colour can change.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops tracking the button.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts the enable delay if one is set, otherwise starts tracking the button for fingertip presses.</span> |
| <Link id="m-onpressed" /><code>{"private void OnPressed()"}</code> | <span className="api-desc">Sets `State`, raises `Pressed` and plays the pressed sound (custom or default).</span> |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> | <span className="api-desc">Clears `State`, raises `Released` and plays the released sound (custom or default).</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Keeps `minDepth` no greater than `maxDepth` and fills `activeMaterial` from the renderer.</span> |
| <Link id="m-progressvector" /><code>{"private Vector3 ProgressVector(float position, out float progress)"}</code> | <span className="api-desc">Like `GetClampedVector` but from a single depth value along the free axis.</span> |
| <Link id="m-startdelay" /><code>{"private void StartDelay()"}</code> | <span className="api-desc">Disables the button and schedules `EndDelay` after `enableDelay` seconds.</span> |
| <Link id="m-testvector" /><code>{"private static bool TestVector(Vector3 vector, "}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" triangle, Vector3 extents)"}</code> | <span className="api-desc">One separating axis check of a triangle against a box's extents.</span> |
| <Link id="m-updatebuttons-2" /><code>{"private static void UpdateButtons()"}</code> | <span className="api-desc">Late update for all tracked buttons: gets the local player's fingertip triangles and updates each button.</span> |
| <Link id="m-updateenabledelay" /><code>{"private void UpdateEnableDelay()"}</code> | <span className="api-desc">Older per-frame version of the enable animation. Not called in this build.</span> |
| <Link id="m-updateusablestatus" /><code>{"private void UpdateUsableStatus()"}</code> | <span className="api-desc">Applies enabled and delay state to visuals, collider and component, and resets the button's depth.</span> |
| <Link id="m-updatewithtriangle" /><code>{"private void UpdateWithTriangle("}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" rightTriangle, "}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" leftTriangle)"}</code> | <span className="api-desc">Moves the button along its axis so the fingertips don't overlap it and fires press or release on the thresholds.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AnalyticalButton`:

<div className="api-used-in">

[`AnalyticalButtonGroupAutoEnabler.buttons`](/mod/game-api/types/global-a-b/analyticalbuttongroupautoenabler#m-buttons), [`PicoLoginController.loginButton`](/mod/game-api/types/game-other-namespaces/picologincontroller#m-loginbutton), [`AccessibilitySeatedStandingBoard.seatedButton`](/mod/game-api/types/game-other-namespaces/accessibilityseatedstandingboard#m-seatedbutton), [`AccessibilitySeatedStandingBoard.standingButton`](/mod/game-api/types/game-other-namespaces/accessibilityseatedstandingboard#m-standingbutton), [`NumericalWidget.buttonPrefab`](/mod/game-api/types/global-m-o/numericalwidget#m-buttonprefab).

</div>
