---
title: "AnalyticalButton"
description: "class AnalyticalButton in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticalButton

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`, [`IPreventAtlasing`](/game-api/types/alta-utilities/ipreventatlasing)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticalButton()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> |  |
| <Link id="m-activebuttons" /><code>{"private static HashSet<"}<Link to="/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{"> activeButtons"}</code> |  |
| <Link id="m-activebuttonscache" /><code>{"private static List<"}<Link to="/game-api/types/global-a-b/analyticalbutton">{"AnalyticalButton"}</Link>{"> activeButtonsCache"}</code> |  |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> |  |
| <Link id="m-activematerial" /><code>{"private Material activeMaterial"}</code> |  |
| <Link id="m-androidbuttonrenderer" /><code>{"private Renderer androidButtonRenderer"}</code> |  |
| <Link id="m-buttoncollider" /><code>{"private Collider buttonCollider"}</code> |  |
| <Link id="m-buttonrenderer" /><code>{"private Renderer buttonRenderer"}</code> |  |
| <Link id="m-delay" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" delay"}</code> |  |
| <Link id="m-enabledelay" /><code>{"private float enableDelay"}</code> |  |
| <Link id="m-freeaxis" /><code>{"private Vector.Axis freeAxis"}</code> |  |
| <Link id="m-hasdelayedonce" /><code>{"private bool hasDelayedOnce"}</code> |  |
| <Link id="m-inactivecolor" /><code>{"private Color inActiveColor"}</code> |  |
| <Link id="m-inactivematerial" /><code>{"private Material inactiveMaterial"}</code> |  |
| <Link id="m-isactiveatallscales" /><code>{"private bool isActiveAtAllScales"}</code> |  |
| <Link id="m-ischangingcoloronenable" /><code>{"private bool isChangingColorOnEnable"}</code> |  |
| <Link id="m-isdelaying" /><code>{"private bool isDelaying"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-isenabledelayonlyonthefirsttime" /><code>{"private bool isEnableDelayOnlyOnTheFirstTime"}</code> |  |
| <Link id="m-isfree" /><code>{"private bool isFree"}</code> |  |
| <Link id="m-isignoringdelay" /><code>{"private bool isIgnoringDelay"}</code> |  |
| <Link id="m-isphysicallypressed" /><code>{"private bool isPhysicallyPressed"}</code> |  |
| <Link id="m-isplayingdefaultsounds" /><code>{"private bool isPlayingDefaultSounds"}</code> |  |
| <Link id="m-isplayingsounds" /><code>{"private bool isPlayingSounds"}</code> |  |
| <Link id="m-lastlefttriangle" /><code>{"private "}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" lastLeftTriangle"}</code> |  |
| <Link id="m-lastrighttriangle" /><code>{"private "}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" lastRightTriangle"}</code> |  |
| <Link id="m-maxdepth" /><code>{"private float maxDepth"}</code> |  |
| <Link id="m-mindepth" /><code>{"private float minDepth"}</code> |  |
| <Link id="m-onbecameactive" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onBecameActive"}</code> |  |
| <Link id="m-onfinishedframe" /><code>{"private static Action onFinishedFrame"}</code> |  |
| <Link id="m-pressed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> |  |
| <Link id="m-pressedsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" pressedSound"}</code> |  |
| <Link id="m-pressspeed" /><code>{"private float pressSpeed"}</code> |  |
| <Link id="m-pressthreshold" /><code>{"private float pressThreshold"}</code> |  |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> |  |
| <Link id="m-released" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" released"}</code> |  |
| <Link id="m-releasedsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" releasedSound"}</code> |  |
| <Link id="m-releasethreshold" /><code>{"private float releaseThreshold"}</code> |  |
| <Link id="m-updatebuttons" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateButtons"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttoncollider-2" /><code>{"Collider ButtonCollider { get; }"}</code> |  |
| <Link id="m-buttonrenderer-2" /><code>{"Renderer ButtonRenderer { get; }"}</code> |  |
| <Link id="m-holdbuttonpresses" /><code>{"static bool HoldButtonPresses { get; set; }"}</code> |  |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> |  |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pressed-2" /><code>{"event Action Pressed"}</code> |  |
| <Link id="m-released-2" /><code>{"event Action Released"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setstateinternal" /><code>{"void SetStateInternal(bool state)"}</code> |  |
| <Link id="m-buttonenableanimation" /><code>{"private IEnumerator ButtonEnableAnimation() (iterator)"}</code> |  |
| <Link id="m-changevisuals" /><code>{"private void ChangeVisuals(bool isActive)"}</code> |  |
| <Link id="m-checkintersection" /><code>{"private static bool CheckIntersection("}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" triangle, Matrix4x4 matrix, Bounds bounds)"}</code> |  |
| <Link id="m-enddelay" /><code>{"private void EndDelay()"}</code> |  |
| <Link id="m-getclampedvector" /><code>{"private Vector3 GetClampedVector(Vector3 original, out float progress)"}</code> |  |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onpressed" /><code>{"private void OnPressed()"}</code> |  |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-progressvector" /><code>{"private Vector3 ProgressVector(float position, out float progress)"}</code> |  |
| <Link id="m-startdelay" /><code>{"private void StartDelay()"}</code> |  |
| <Link id="m-testvector" /><code>{"private static bool TestVector(Vector3 vector, "}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" triangle, Vector3 extents)"}</code> |  |
| <Link id="m-updatebuttons-2" /><code>{"private static void UpdateButtons()"}</code> |  |
| <Link id="m-updateenabledelay" /><code>{"private void UpdateEnableDelay()"}</code> |  |
| <Link id="m-updateusablestatus" /><code>{"private void UpdateUsableStatus()"}</code> |  |
| <Link id="m-updatewithtriangle" /><code>{"private void UpdateWithTriangle("}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" rightTriangle, "}<Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" leftTriangle)"}</code> |  |

## Used in

Members of other types that take, return or hold a `AnalyticalButton`:

[`AnalyticalButtonGroupAutoEnabler.buttons`](/game-api/types/global-a-b/analyticalbuttongroupautoenabler#m-buttons), [`PicoLoginController.loginButton`](/game-api/types/game-other-namespaces/picologincontroller#m-loginbutton), [`AccessibilitySeatedStandingBoard.seatedButton`](/game-api/types/game-other-namespaces/accessibilityseatedstandingboard#m-seatedbutton), [`AccessibilitySeatedStandingBoard.standingButton`](/game-api/types/game-other-namespaces/accessibilityseatedstandingboard#m-standingbutton), [`NumericalWidget.buttonPrefab`](/game-api/types/global-m-o/numericalwidget#m-buttonprefab).
