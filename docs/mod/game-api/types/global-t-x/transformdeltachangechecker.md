---
title: "TransformDeltaChangeChecker"
description: "Watches a set of transforms and fires AllTransformsFrozen once none has moved or turned more than a small amount for long enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformDeltaChangeChecker

A **class** in `Root.Township`, the global namespace.

Watches a set of transforms and fires `AllTransformsFrozen` once none has moved or turned more than a small amount for long enough. Probably used for pose detection.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformDeltaChangeChecker(IEnumerable<Transform> transformsToCheck, float maxLocalPositionDelta, float maxLocalRotationDelta, float minTimeToRegisterFreeze)"}</code> | <span className="api-desc">Creates a `TransformDeltaChangeChecker` from `transformsToCheck`, `maxLocalPositionDelta`, `maxLocalRotationDelta` and `minTimeToRegisterFreeze`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxlocalpositiondelta" /><code>{"private float maxLocalPositionDelta"}</code> | <span className="api-desc">Largest per-frame local move that still counts as still.</span> |
| <Link id="m-maxlocalrotationdelta" /><code>{"private float maxLocalRotationDelta"}</code> | <span className="api-desc">Largest per-frame local rotation in degrees that still counts as still.</span> |
| <Link id="m-mintimetoregisterfreeze" /><code>{"private float minTimeToRegisterFreeze"}</code> | <span className="api-desc">Seconds everything must stay still before the event fires.</span> |
| <Link id="m-posefreezestarttime" /><code>{"private float poseFreezeStartTime"}</code> | <span className="api-desc">Time the current still period began, or 0.</span> |
| <Link id="m-posetriggerchecking" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" poseTriggerChecking"}</code> | <span className="api-desc">The running check coroutine.</span> |
| <Link id="m-transformsaves" /><code>{"private Dictionary<Transform, TransformSave> transformSaves"}</code> | <span className="api-desc">Last saved local pose per transform.</span> |
| <Link id="m-transformstocheck" /><code>{"private IEnumerable<Transform> transformsToCheck"}</code> | <span className="api-desc">The transforms being watched.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-alltransformsfrozen" /><code>{"event Action AllTransformsFrozen"}</code> | <span className="api-desc">Raised each time the transforms have stayed still for the minimum time.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startcheckingforfreeze" /><code>{"void StartCheckingForFreeze(MonoBehaviour behaviourToRunCheckingRoutineOn)"}</code> | <span className="api-desc">Saves the current poses and starts the check coroutine on the given behaviour.</span> |
| <Link id="m-stopchecking" /><code>{"void StopChecking()"}</code> | <span className="api-desc">Stops the check coroutine.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforposetrigger" /><code>{"private IEnumerator CheckForPoseTrigger() (iterator)"}</code> | <span className="api-desc">Coroutine that compares each frame to the last, times how long all stay still and fires the event.</span> |
| <Link id="m-hastransformchanged" /><code>{"private bool HasTransformChanged(Transform transform)"}</code> | <span className="api-desc">True if a transform moved or rotated more than the limits since the last save. Throws if it was destroyed.</span> |
| <Link id="m-savetransforms" /><code>{"private void SaveTransforms()"}</code> | <span className="api-desc">Stores each transform's local position and rotation for the next comparison.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TransformDeltaChangeChecker`:

<div className="api-used-in">

[`EquipmentCustomizationRoom.changeChecker`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-changechecker).

</div>
