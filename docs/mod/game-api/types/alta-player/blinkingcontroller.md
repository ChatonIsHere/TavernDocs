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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EyeBlinker`](/mod/game-api/types/alta-player/blinkingcontroller-eyeblinker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BlinkingController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">The Animator that has the eye blink triggers and speed parameters.</span> |
| <Link id="m-blinkduration" /><code>{"private float blinkDuration"}</code> | <span className="api-desc">How long one blink takes, in seconds. Default 0.1.</span> |
| <Link id="m-doubleblinkpercentage" /><code>{"private float doubleBlinkPercentage"}</code> | <span className="api-desc">Chance (0 to 1) that a blink is followed by a second one.</span> |
| <Link id="m-leftblinker" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/blinkingcontroller-eyeblinker">{"BlinkingController.EyeBlinker"}</Link>{" leftBlinker"}</code> | <span className="api-desc">Wrapper that fires the left eye's blink trigger.</span> |
| <Link id="m-maxtime" /><code>{"private float maxTime"}</code> | <span className="api-desc">Longest wait between blinks, in seconds. Default 5.</span> |
| <Link id="m-mintime" /><code>{"private float minTime"}</code> | <span className="api-desc">Shortest wait between blinks, in seconds. Default 2.</span> |
| <Link id="m-rightblinker" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/blinkingcontroller-eyeblinker">{"BlinkingController.EyeBlinker"}</Link>{" rightBlinker"}</code> | <span className="api-desc">Wrapper that fires the right eye's blink trigger.</span> |
| <Link id="m-timebetweendoubleblink" /><code>{"private float timeBetweenDoubleBlink"}</code> | <span className="api-desc">Wait between the two blinks of a double blink, in seconds. Default 0.3.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blink" /><code>{"void Blink()"}</code> | <span className="api-desc">Blinks both eyes once by setting the `LeftEyeBlink` and `RightEyeBlink` triggers.</span> |
| <Link id="m-startblinking" /><code>{"void StartBlinking()"}</code> | <span className="api-desc">Starts the random blink coroutine. Does nothing when headless.</span> |
| <Link id="m-stopblinking" /><code>{"void StopBlinking()"}</code> | <span className="api-desc">Stops all coroutines on this component, which ends the blinking. Does nothing when headless.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets up the left and right eye blinkers on the animator, with a blink speed of one over `blinkDuration`. Skipped when headless.</span> |
| <Link id="m-blinkinseconds" /><code>{"private IEnumerator BlinkInSeconds() (iterator)"}</code> | <span className="api-desc">Coroutine that loops forever: waits a random time between `minTime` and `maxTime`, blinks, and sometimes blinks again.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops blinking.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts blinking.</span> |

</details>
