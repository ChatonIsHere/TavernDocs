---
title: "InGameInspectorWheel"
description: "A physical selection wheel on the debug InGameInspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspectorWheel

A **class** in `Root.Township`, the global namespace.

A physical selection wheel on the debug `InGameInspector`. It snaps its hinge to evenly spaced points and plays a click as the selected point changes.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InGameInspectorWheel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>26 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglespersection" /><code>{"private float anglesPerSection"}</code> | <span className="api-desc">Degrees between snap points. Only set in `OnDrawGizmos` here.</span> |
| <Link id="m-debugicon" /><code>{"private Transform debugIcon"}</code> | <span className="api-desc">Inspector-assigned transform for debugging icons. Not used in this code.</span> |
| <Link id="m-debugindex" /><code>{"private int debugIndex"}</code> | <span className="api-desc">Inspector-assigned debug index. Not used in this code.</span> |
| <Link id="m-dissapearingpointindex" /><code>{"private int dissapearingPointIndex"}</code> | <span className="api-desc">Index of the snap point opposite the selection.</span> |
| <Link id="m-dissappearingangle" /><code>{"private float dissappearingAngle"}</code> | <span className="api-desc">Angle opposite the selection arrow.</span> |
| <Link id="m-handleinteractors" /><code>{"private int handleInteractors"}</code> | <span className="api-desc">How many hands hold the wheel's handles.</span> |
| <Link id="m-handles" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] handles"}</code> | <span className="api-desc">Grab points that turn the wheel.</span> |
| <Link id="m-hinge" /><code>{"private Rigidbody hinge"}</code> | <span className="api-desc">Rigidbody of the wheel that spins on its hinge.</span> |
| <Link id="m-iconmaterial" /><code>{"private Material iconMaterial"}</code> | <span className="api-desc">Material for the wheel icons. Not used in this code.</span> |
| <Link id="m-iconparent" /><code>{"private Transform iconParent"}</code> | <span className="api-desc">Parent for the wheel icons. Not used in this code.</span> |
| <Link id="m-iconradius" /><code>{"private float iconRadius"}</code> | <span className="api-desc">Distance of the snap points from the wheel centre, used by the gizmos.</span> |
| <Link id="m-iconsize" /><code>{"private float iconSize"}</code> | <span className="api-desc">Size of the wheel icons. Not used in this code.</span> |
| <Link id="m-iconxoffset" /><code>{"private float iconXOffset"}</code> | <span className="api-desc">Sideways offset of the snap point gizmos.</span> |
| <Link id="m-inspector" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector"}</code> | <span className="api-desc">The `InGameInspector` this wheel belongs to.</span> |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | <span className="api-desc">`FixedUpdate` does nothing until this is true. Nothing in this code sets it, so the snapping never runs.</span> |
| <Link id="m-isplayingsounds" /><code>{"private bool isPlayingSounds"}</code> | <span className="api-desc">Whether to play the wheel click when the selection changes.</span> |
| <Link id="m-issnappingtopoints" /><code>{"private bool isSnappingToPoints"}</code> | <span className="api-desc">Whether the wheel is pulled towards the nearest snap point.</span> |
| <Link id="m-minangledifference" /><code>{"private float minAngleDifference"}</code> | <span className="api-desc">Within this many degrees of a point, and below `minVelocity`, the wheel stops.</span> |
| <Link id="m-minvelocity" /><code>{"private float minVelocity"}</code> | <span className="api-desc">Angular speed under which the wheel may stop on a point.</span> |
| <Link id="m-numberofsnappoints" /><code>{"private int numberOfSnapPoints"}</code> | <span className="api-desc">How many points the wheel snaps to.</span> |
| <Link id="m-points" /><code>{"private int[] points"}</code> | <span className="api-desc">Not used in this code.</span> |
| <Link id="m-rotationeffect" /><code>{"private AnimationCurve rotationEffect"}</code> | <span className="api-desc">Curve of snap pull strength against distance from the point, as a share of a section.</span> |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> | <span className="api-desc">Scales the snap pull.</span> |
| <Link id="m-selectionangle" /><code>{"private float selectionAngle"}</code> | <span className="api-desc">Current wheel angle under the selection arrow.</span> |
| <Link id="m-selectionarrow" /><code>{"private Transform selectionArrow"}</code> | <span className="api-desc">Fixed marker whose position on the wheel picks the selected point.</span> |
| <Link id="m-selectionpointindex" /><code>{"private int selectionPointIndex"}</code> | <span className="api-desc">Index of the selected snap point.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinteractedwith" /><code>{"bool IsInteractedWith { get; }"}</code> | <span className="api-desc">True while any of the wheel's handles is held.</span> |

## Methods

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateselectionangle" /><code>{"private void CalculateSelectionAngle()"}</code> | <span className="api-desc">Works out the wheel angle under the selection arrow, and the angle opposite it.</span> |
| <Link id="m-converttopositiveangle" /><code>{"private void ConvertToPositiveAngle(ref float angle)"}</code> | <span className="api-desc">Adds 360 to an angle until it is no lower than minus half a section.</span> |
| <Link id="m-drawsphereatangle" /><code>{"private void DrawSphereAtAngle(float angle, float xOffset)"}</code> | <span className="api-desc">Editor gizmo helper: draws a small sphere on the wheel rim at an angle.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Once initialized, updates the selection and pushes the hinge towards the nearest snap point, stopping it when close and slow.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Destroys the handle objects along with the wheel.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops counting handle grabs.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor only: draws the snap points, selected point and opposite point as coloured spheres.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts counting grabs and releases on each handle.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Keeps `numberOfSnapPoints` from going below zero.</span> |
| <Link id="m-removeinteractedwith" /><code>{"private void RemoveInteractedWith("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Counts one handle released.</span> |
| <Link id="m-setinteractedwith" /><code>{"private void SetInteractedWith("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Counts one handle grabbed.</span> |
| <Link id="m-setselectionpoint" /><code>{"private void SetSelectionPoint()"}</code> | <span className="api-desc">Picks the snap point nearest the arrow, plays the wheel sound when it changes, and tracks the opposite point.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Finds the `InGameInspector` in the parents.</span> |

</details>
