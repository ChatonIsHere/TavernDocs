---
title: "InGameInspectorWheel"
description: "A physical selection wheel on the debug InGameInspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspectorWheel

A **class** in `Root.Township`, no namespace.

A physical selection wheel on the debug `InGameInspector`. It snaps its hinge to evenly spaced points and plays a click as the selected point changes.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InGameInspectorWheel()"}</code> |

## Fields

<details>
<summary>26 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglespersection" /><code>{"private float anglesPerSection"}</code> | Degrees between snap points. Only set in `OnDrawGizmos` here. |
| <Link id="m-debugicon" /><code>{"private Transform debugIcon"}</code> | Inspector-assigned transform for debugging icons. Not used in this code. |
| <Link id="m-debugindex" /><code>{"private int debugIndex"}</code> | Inspector-assigned debug index. Not used in this code. |
| <Link id="m-dissapearingpointindex" /><code>{"private int dissapearingPointIndex"}</code> | Index of the snap point opposite the selection. |
| <Link id="m-dissappearingangle" /><code>{"private float dissappearingAngle"}</code> | Angle opposite the selection arrow. |
| <Link id="m-handleinteractors" /><code>{"private int handleInteractors"}</code> | How many hands hold the wheel's handles. |
| <Link id="m-handles" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] handles"}</code> | Grab points that turn the wheel. |
| <Link id="m-hinge" /><code>{"private Rigidbody hinge"}</code> | Rigidbody of the wheel that spins on its hinge. |
| <Link id="m-iconmaterial" /><code>{"private Material iconMaterial"}</code> | Material for the wheel icons. Not used in this code. |
| <Link id="m-iconparent" /><code>{"private Transform iconParent"}</code> | Parent for the wheel icons. Not used in this code. |
| <Link id="m-iconradius" /><code>{"private float iconRadius"}</code> | Distance of the snap points from the wheel centre, used by the gizmos. |
| <Link id="m-iconsize" /><code>{"private float iconSize"}</code> | Size of the wheel icons. Not used in this code. |
| <Link id="m-iconxoffset" /><code>{"private float iconXOffset"}</code> | Sideways offset of the snap point gizmos. |
| <Link id="m-inspector" /><code>{"private "}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector"}</code> | The `InGameInspector` this wheel belongs to. |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | `FixedUpdate` does nothing until this is true. Nothing in this code sets it, so the snapping never runs. |
| <Link id="m-isplayingsounds" /><code>{"private bool isPlayingSounds"}</code> | Whether to play the wheel click when the selection changes. |
| <Link id="m-issnappingtopoints" /><code>{"private bool isSnappingToPoints"}</code> | Whether the wheel is pulled towards the nearest snap point. |
| <Link id="m-minangledifference" /><code>{"private float minAngleDifference"}</code> | Within this many degrees of a point, and below `minVelocity`, the wheel stops. |
| <Link id="m-minvelocity" /><code>{"private float minVelocity"}</code> | Angular speed under which the wheel may stop on a point. |
| <Link id="m-numberofsnappoints" /><code>{"private int numberOfSnapPoints"}</code> | How many points the wheel snaps to. |
| <Link id="m-points" /><code>{"private int[] points"}</code> | Not used in this code. |
| <Link id="m-rotationeffect" /><code>{"private AnimationCurve rotationEffect"}</code> | Curve of snap pull strength against distance from the point, as a share of a section. |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> | Scales the snap pull. |
| <Link id="m-selectionangle" /><code>{"private float selectionAngle"}</code> | Current wheel angle under the selection arrow. |
| <Link id="m-selectionarrow" /><code>{"private Transform selectionArrow"}</code> | Fixed marker whose position on the wheel picks the selected point. |
| <Link id="m-selectionpointindex" /><code>{"private int selectionPointIndex"}</code> | Index of the selected snap point. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isinteractedwith" /><code>{"bool IsInteractedWith { get; }"}</code> | True while any of the wheel's handles is held. |

## Methods

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateselectionangle" /><code>{"private void CalculateSelectionAngle()"}</code> | Works out the wheel angle under the selection arrow, and the angle opposite it. |
| <Link id="m-converttopositiveangle" /><code>{"private void ConvertToPositiveAngle(ref float angle)"}</code> | Adds 360 to an angle until it is no lower than minus half a section. |
| <Link id="m-drawsphereatangle" /><code>{"private void DrawSphereAtAngle(float angle, float xOffset)"}</code> | Editor gizmo helper: draws a small sphere on the wheel rim at an angle. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Once initialized, updates the selection and pushes the hinge towards the nearest snap point, stopping it when close and slow. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Destroys the handle objects along with the wheel. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops counting handle grabs. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor only: draws the snap points, selected point and opposite point as coloured spheres. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts counting grabs and releases on each handle. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Keeps `numberOfSnapPoints` from going below zero. |
| <Link id="m-removeinteractedwith" /><code>{"private void RemoveInteractedWith("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Counts one handle released. |
| <Link id="m-setinteractedwith" /><code>{"private void SetInteractedWith("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Counts one handle grabbed. |
| <Link id="m-setselectionpoint" /><code>{"private void SetSelectionPoint()"}</code> | Picks the snap point nearest the arrow, plays the wheel sound when it changes, and tracks the opposite point. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Finds the `InGameInspector` in the parents. |

</details>
