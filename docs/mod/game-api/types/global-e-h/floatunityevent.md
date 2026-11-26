---
title: "FloatUnityEvent"
description: "Serializable UnityEvent with a float argument, so float events can be wired in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FloatUnityEvent

A **class** in `Root.Township`, the global namespace.

Serializable `UnityEvent` with a float argument, so float events can be wired in the inspector.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `UnityEvent<float>`
- **Derived types** [`FloatEvent`](/mod/game-api/types/global-e-h/floatevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FloatUnityEvent()"}</code> | Creates a `FloatUnityEvent` with default values. |

## Used in

Members of other types that take, return or hold a `FloatUnityEvent`:

[`LogicFloatReceiver.onValueChanged`](/mod/game-api/types/alta-items/logicfloatreceiver#m-onvaluechanged), [`LogicSumFloatReceiver.onValueUpdated`](/mod/game-api/types/alta-items/logicsumfloatreceiver#m-onvalueupdated), [`BouncingValue.valueUpdated`](/mod/game-api/types/global-a-b/bouncingvalue#m-valueupdated), [`CurveOutput.output`](/mod/game-api/types/global-c-d/curveoutput#m-output), [`MultiDeltaInputController.deltaProvided`](/mod/game-api/types/global-m-o/multideltainputcontroller#m-deltaprovided), [`NetworkedFloatStream.changed`](/mod/game-api/types/global-m-o/networkedfloatstream#m-changed), [`NumericalWidget.onValueChanged`](/mod/game-api/types/global-m-o/numericalwidget#m-onvaluechanged), [`SceneLoadingProgress.onProgressChanged`](/mod/game-api/types/global-s/sceneloadingprogress#m-onprogresschanged).
