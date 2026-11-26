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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Scrubber()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseinteractable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" baseInteractable"}</code> | <span className="api-desc">The handle players grab.</span> |
| <Link id="m-basetransform" /><code>{"private Transform baseTransform"}</code> | <span className="api-desc">The handle's transform, moved along the path.</span> |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | <span className="api-desc">The handle's current progress along the path.</span> |
| <Link id="m-currentstep" /><code>{"private int currentStep"}</code> | <span className="api-desc">The current step.</span> |
| <Link id="m-grabcoroutine" /><code>{"private Coroutine grabCoroutine"}</code> | <span className="api-desc">The running `Grabbing` coroutine.</span> |
| <Link id="m-movementspeed" /><code>{"private float movementSpeed"}</code> | <span className="api-desc">How fast the handle moves, in path progress per second (default 0.1).</span> |
| <Link id="m-path" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/path">{"Path"}</Link>{" path"}</code> | <span className="api-desc">The path the handle moves along.</span> |
| <Link id="m-positionupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" positionUpdate"}</code> | <span className="api-desc">The registered `UpdateBasePosition` update while moving.</span> |
| <Link id="m-steps" /><code>{"private int steps"}</code> | <span className="api-desc">Backing field for `Steps`.</span> |
| <Link id="m-targetprogress" /><code>{"private float targetProgress"}</code> | <span className="api-desc">Progress of the current step.</span> |
| <Link id="m-updatedstep" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" updatedStep"}</code> | <span className="api-desc">Event raised with the new step when the hand moves the handle to it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-steps-2" /><code>{"int Steps { get; set; }"}</code> | <span className="api-desc">Number of steps along the path. Setting it moves the handle at once to the current step's new place.</span> |

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-endcoroutine" /><code>{"private void EndCoroutine()"}</code> | <span className="api-desc">Stops the grab coroutine if one is running.</span> |
| <Link id="m-endgrab" /><code>{"private void EndGrab("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops tracking the hand when the grab ends.</span> |
| <Link id="m-grabbing" /><code>{"private IEnumerator Grabbing("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Coroutine that, while held, snaps the hand's progress along the path to a step and raises `updatedStep` when it changes.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the handle's grab events and puts the handle at the start of the path.</span> |
| <Link id="m-startgrab" /><code>{"private void StartGrab("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts tracking the hand that grabbed the handle.</span> |
| <Link id="m-updatebaseposition" /><code>{"private void UpdateBasePosition()"}</code> | <span className="api-desc">Per-frame update that eases the handle towards the target step, then stops.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Scrubber`:

<div className="api-used-in">

[`CategoryScrubberController.scrubber`](/mod/game-api/types/alta-customization/categoryscrubbercontroller#m-scrubber).

</div>
