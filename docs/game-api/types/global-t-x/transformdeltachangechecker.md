---
title: "TransformDeltaChangeChecker"
description: "class TransformDeltaChangeChecker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformDeltaChangeChecker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TransformDeltaChangeChecker(IEnumerable<Transform> transformsToCheck, float maxLocalPositionDelta, float maxLocalRotationDelta, float minTimeToRegisterFreeze)"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maxlocalpositiondelta" /><code>{"private float maxLocalPositionDelta"}</code> |
| <Link id="m-maxlocalrotationdelta" /><code>{"private float maxLocalRotationDelta"}</code> |
| <Link id="m-mintimetoregisterfreeze" /><code>{"private float minTimeToRegisterFreeze"}</code> |
| <Link id="m-posefreezestarttime" /><code>{"private float poseFreezeStartTime"}</code> |
| <Link id="m-posetriggerchecking" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" poseTriggerChecking"}</code> |
| <Link id="m-transformsaves" /><code>{"private Dictionary<Transform, TransformSave> transformSaves"}</code> |
| <Link id="m-transformstocheck" /><code>{"private IEnumerable<Transform> transformsToCheck"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-alltransformsfrozen" /><code>{"event Action AllTransformsFrozen"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-startcheckingforfreeze" /><code>{"void StartCheckingForFreeze(MonoBehaviour behaviourToRunCheckingRoutineOn)"}</code> |
| <Link id="m-stopchecking" /><code>{"void StopChecking()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkforposetrigger" /><code>{"private IEnumerator CheckForPoseTrigger() (iterator)"}</code> |
| <Link id="m-hastransformchanged" /><code>{"private bool HasTransformChanged(Transform transform)"}</code> |
| <Link id="m-savetransforms" /><code>{"private void SaveTransforms()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TransformDeltaChangeChecker`:

[`EquipmentCustomizationRoom.changeChecker`](/game-api/types/alta-customization/equipmentcustomizationroom#m-changechecker).
