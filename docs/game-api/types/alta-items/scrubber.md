---
title: "Scrubber"
description: "A grabbable handle that slides along a Path in fixed steps, like a slider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Scrubber

A **class** in `Root.Township`, `Alta.Mechanisms`.

A grabbable handle that slides along a `Path` in fixed steps, like a slider. It reports the step the hand moves it to and eases the handle there. Runs locally; it is not networked itself.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Scrubber()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" baseInteractable"}</code> | The handle players grab. |
| <Link id="m-basetransform" /><code>{"private Transform baseTransform"}</code> | The handle's transform, moved along the path. |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | The handle's current progress along the path. |
| <Link id="m-currentstep" /><code>{"private int currentStep"}</code> | The current step. |
| <Link id="m-grabcoroutine" /><code>{"private Coroutine grabCoroutine"}</code> | The running `Grabbing` coroutine. |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> | How fast the handle moves, in path progress per second (default 0.1). |
| <Link id="m-path" /><code>{"private "}<Link to="/game-api/types/alta-items/path">{"Path"}</Link>{" path"}</code> | The path the handle moves along. |
| <Link id="m-positionupdate" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" positionUpdate"}</code> | The registered `UpdateBasePosition` update while moving. |
| <Link id="m-steps" /><code>{"private int steps"}</code> | Backing field for `Steps`. |
| <Link id="m-targetprogress" /><code>{"private float targetProgress"}</code> | Progress of the current step. |
| <Link id="m-updatedstep" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" updatedStep"}</code> | Event raised with the new step when the hand moves the handle to it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-steps-2" /><code>{"int Steps { get; set; }"}</code> | Number of steps along the path. Setting it moves the handle at once to the current step's new place. |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-endcoroutine" /><code>{"private void EndCoroutine()"}</code> | Stops the grab coroutine if one is running. |
| <Link id="m-endgrab" /><code>{"private void EndGrab("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops tracking the hand when the grab ends. |
| <Link id="m-grabbing" /><code>{"private IEnumerator Grabbing("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Coroutine that, while held, snaps the hand's progress along the path to a step and raises `updatedStep` when it changes. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the handle's grab events and puts the handle at the start of the path. |
| <Link id="m-startgrab" /><code>{"private void StartGrab("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts tracking the hand that grabbed the handle. |
| <Link id="m-updatebaseposition" /><code>{"private void UpdateBasePosition()"}</code> | Per-frame update that eases the handle towards the target step, then stops. |

</details>

## Used in

Members of other types that take, return or hold a `Scrubber`:

[`CategoryScrubberController.scrubber`](/game-api/types/alta-customization/categoryscrubbercontroller#m-scrubber).
