---
title: "TransformDeltaChangeChecker"
description: "Watches a set of transforms and fires AllTransformsFrozen once none has moved or turned more than a small amount for long enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformDeltaChangeChecker

A **class** in `Root.Township`, no namespace.

Watches a set of transforms and fires `AllTransformsFrozen` once none has moved or turned more than a small amount for long enough. Probably used for pose detection.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TransformDeltaChangeChecker(IEnumerable<Transform> transformsToCheck, float maxLocalPositionDelta, float maxLocalRotationDelta, float minTimeToRegisterFreeze)"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxlocalpositiondelta" /><code>{"private float maxLocalPositionDelta"}</code> | Largest per-frame local move that still counts as still. |
| <Link id="m-maxlocalrotationdelta" /><code>{"private float maxLocalRotationDelta"}</code> | Largest per-frame local rotation in degrees that still counts as still. |
| <Link id="m-mintimetoregisterfreeze" /><code>{"private float minTimeToRegisterFreeze"}</code> | Seconds everything must stay still before the event fires. |
| <Link id="m-posefreezestarttime" /><code>{"private float poseFreezeStartTime"}</code> | Time the current still period began, or 0. |
| <Link id="m-posetriggerchecking" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" poseTriggerChecking"}</code> | The running check coroutine. |
| <Link id="m-transformsaves" /><code>{"private Dictionary<Transform, TransformSave> transformSaves"}</code> | Last saved local pose per transform. |
| <Link id="m-transformstocheck" /><code>{"private IEnumerable<Transform> transformsToCheck"}</code> | The transforms being watched. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-alltransformsfrozen" /><code>{"event Action AllTransformsFrozen"}</code> | Raised each time the transforms have stayed still for the minimum time. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startcheckingforfreeze" /><code>{"void StartCheckingForFreeze(MonoBehaviour behaviourToRunCheckingRoutineOn)"}</code> | Saves the current poses and starts the check coroutine on the given behaviour. |
| <Link id="m-stopchecking" /><code>{"void StopChecking()"}</code> | Stops the check coroutine. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforposetrigger" /><code>{"private IEnumerator CheckForPoseTrigger() (iterator)"}</code> | Coroutine that compares each frame to the last, times how long all stay still and fires the event. |
| <Link id="m-hastransformchanged" /><code>{"private bool HasTransformChanged(Transform transform)"}</code> | True if a transform moved or rotated more than the limits since the last save. Throws if it was destroyed. |
| <Link id="m-savetransforms" /><code>{"private void SaveTransforms()"}</code> | Stores each transform's local position and rotation for the next comparison. |

</details>

## Used in

Members of other types that take, return or hold a `TransformDeltaChangeChecker`:

[`EquipmentCustomizationRoom.changeChecker`](/game-api/types/alta-customization/equipmentcustomizationroom#m-changechecker).
