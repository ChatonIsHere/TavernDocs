---
title: "BlinkingController"
description: "Makes a character's eyes blink at random intervals by firing left and right eye triggers on an Animator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlinkingController

A **class** in `Root.Township`, `Alta.Character`.

Makes a character's eyes blink at random intervals by firing left and right eye triggers on an Animator. Client only: it does nothing on a headless server.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EyeBlinker`](/game-api/types/alta-player/blinkingcontroller-eyeblinker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BlinkingController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | The Animator that has the eye blink triggers and speed parameters. |
| <Link id="m-blinkduration" /><code>{"private float blinkDuration"}</code> | How long one blink takes, in seconds. Default 0.1. |
| <Link id="m-doubleblinkpercentage" /><code>{"private float doubleBlinkPercentage"}</code> | Chance (0 to 1) that a blink is followed by a second one. |
| <Link id="m-leftblinker" /><code>{"private "}<Link to="/game-api/types/alta-player/blinkingcontroller-eyeblinker">{"BlinkingController.EyeBlinker"}</Link>{" leftBlinker"}</code> | Wrapper that fires the left eye's blink trigger. |
| <Link id="m-maxtime" /><code>{"private float maxTime"}</code> | Longest wait between blinks, in seconds. Default 5. |
| <Link id="m-mintime" /><code>{"private float minTime"}</code> | Shortest wait between blinks, in seconds. Default 2. |
| <Link id="m-rightblinker" /><code>{"private "}<Link to="/game-api/types/alta-player/blinkingcontroller-eyeblinker">{"BlinkingController.EyeBlinker"}</Link>{" rightBlinker"}</code> | Wrapper that fires the right eye's blink trigger. |
| <Link id="m-timebetweendoubleblink" /><code>{"private float timeBetweenDoubleBlink"}</code> | Wait between the two blinks of a double blink, in seconds. Default 0.3. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blink" /><code>{"void Blink()"}</code> | Blinks both eyes once by setting the `LeftEyeBlink` and `RightEyeBlink` triggers. |
| <Link id="m-startblinking" /><code>{"void StartBlinking()"}</code> | Starts the random blink coroutine. Does nothing when headless. |
| <Link id="m-stopblinking" /><code>{"void StopBlinking()"}</code> | Stops all coroutines on this component, which ends the blinking. Does nothing when headless. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets up the left and right eye blinkers on the animator, with a blink speed of one over `blinkDuration`. Skipped when headless. |
| <Link id="m-blinkinseconds" /><code>{"private IEnumerator BlinkInSeconds() (iterator)"}</code> | Coroutine that loops forever: waits a random time between `minTime` and `maxTime`, blinks, and sometimes blinks again. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops blinking. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts blinking. |

</details>
