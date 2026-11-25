---
title: "Scrubber"
description: "A grab handle that slides along a Path in Steps steps and raises updatedStep."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Scrubber

A **class** in `Root.Township`, `Alta.Mechanisms`.

A grab handle that slides along a `Path` in `Steps` steps and raises `updatedStep`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Scrubber()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-baseinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" baseInteractable"}</code> |
| <Link id="m-basetransform" /><code>{"private Transform baseTransform"}</code> |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> |
| <Link id="m-currentstep" /><code>{"private int currentStep"}</code> |
| <Link id="m-grabcoroutine" /><code>{"private Coroutine grabCoroutine"}</code> |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> |
| <Link id="m-path" /><code>{"private "}<Link to="/game-api/types/alta-items/path">{"Path"}</Link>{" path"}</code> |
| <Link id="m-positionupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" positionUpdate"}</code> |
| <Link id="m-steps" /><code>{"private int steps"}</code> |
| <Link id="m-targetprogress" /><code>{"private float targetProgress"}</code> |
| <Link id="m-updatedstep" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" updatedStep"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-steps-2" /><code>{"int Steps { get; set; }"}</code> |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-endcoroutine" /><code>{"private void EndCoroutine()"}</code> |
| <Link id="m-endgrab" /><code>{"private void EndGrab("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-grabbing" /><code>{"private IEnumerator Grabbing("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-startgrab" /><code>{"private void StartGrab("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-updatebaseposition" /><code>{"private void UpdateBasePosition()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Scrubber`:

[`CategoryScrubberController.scrubber`](/game-api/types/alta-customization/categoryscrubbercontroller#m-scrubber).
