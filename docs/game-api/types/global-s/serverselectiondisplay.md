---
title: "ServerSelectionDisplay"
description: "class ServerSelectionDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSelectionDisplay

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSelectionDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-elementselected" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" elementSelected"}</code> |  |
| <Link id="m-isselectingfirst" /><code>{"private bool isSelectingFirst"}</code> |  |
| <Link id="m-maximumenabledtime" /><code>{"private float maximumEnabledTime"}</code> |  |
| <Link id="m-maxselectiondelta" /><code>{"private float maxSelectionDelta"}</code> |  |
| <Link id="m-minimumenabledtime" /><code>{"private float minimumEnabledTime"}</code> |  |
| <Link id="m-movetotimeanimationduration" /><code>{"private float moveToTimeAnimationDuration"}</code> |  |
| <Link id="m-movetotimecoroutine" /><code>{"private Coroutine moveToTimeCoroutine"}</code> |  |
| <Link id="m-selectedtime" /><code>{"private float selectedTime"}</code> |  |
| <Link id="m-selector" /><code>{"private Transform selector"}</code> |  |
| <Link id="m-serverelements" /><code>{"private List<"}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> serverElements"}</code> |  |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> |  |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> |  |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> |  |
| <Link id="m-time" /><code>{"private float time"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentselection" /><code><Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" CurrentSelection { get; private set; }"}</code> |  |
| <Link id="m-serverelements-2" /><code>{"List<"}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{"> ServerElements { get; }"}</code> |  |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-selectedchanged" /><code>{"event "}<Link to="/game-api/types/global-s/selectedelementchanged">{"SelectedElementChanged"}</Link>{" SelectedChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addserverelement" /><code>{"void AddServerElement("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> |  |
| <Link id="m-removeserverelement" /><code>{"void RemoveServerElement("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement)"}</code> |  |
| <Link id="m-selectelement" /><code>{"void SelectElement("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" serverElement, bool isInstant)"}</code> |  |
| <Link id="m-selectfirst" /><code>{"void SelectFirst()"}</code> |  |
| <Link id="m-calculatestartvalue" /><code>{"private void CalculateStartValue()"}</code> |  |
| <Link id="m-movetotime" /><code>{"private IEnumerator MoveToTime(float targetTime, float moveToTimeAnimationDuration) (iterator)"}</code> |  |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |  |
| <Link id="m-onselectionchanged" /><code>{"private void OnSelectionChanged("}<Link to="/game-api/types/global-s/serverelement">{"ServerElement"}</Link>{" oldSelected)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-positiontransformattime" /><code>{"private void PositionTransformAtTime(float targetTime, Transform target)"}</code> |  |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-stopcurrentmovetotimeanimation" /><code>{"private void StopCurrentMoveToTimeAnimation()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updatetargets" /><code>{"private void UpdateTargets()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerSelectionDisplay`:

[`ServerBoard.display`](/game-api/types/global-s/serverboard#m-display), [`ServerBoard.Display`](/game-api/types/global-s/serverboard#m-display-2), [`ServerElement.display`](/game-api/types/global-s/serverelement#m-display), [`ServerElement.SetDisplay`](/game-api/types/global-s/serverelement#m-setdisplay).
