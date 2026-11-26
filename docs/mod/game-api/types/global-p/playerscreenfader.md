---
title: "PlayerScreenFader"
description: "Fades the local player's view to and from black."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerScreenFader

An **abstract class** in `Root.Township`, the global namespace.

Fades the local player's view to and from black. Subclasses draw the fade. Lockers can hold the screen black (and the player controller locked) until all are removed.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ExposurePlayerScreenFader`](/mod/game-api/types/global-e-h/exposureplayerscreenfader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerScreenFader()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentcallback" /><code>{"protected Action currentCallback"}</code> | <span className="api-desc">Callback to run when the current fade ends.</span> |
| <Link id="m-currentfade" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" currentFade"}</code> | <span className="api-desc">The running fade coroutine.</span> |
| <Link id="m-playercontroller" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The player controller the fade belongs to; fade coroutines run on it.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeinlockers" /><code>{"private HashSet<object> fadeInLockers"}</code> | <span className="api-desc">Objects holding the screen black. The first one blacks it out and locks the player controller.</span> |
| <Link id="m-playercontrollermultilockmodel" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel"}</code> | <span className="api-desc">Injected lock model used to lock the player while fade lockers exist.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-screenfaded" /><code>{"event Action ScreenFaded"}</code> | <span className="api-desc">Event declared for when the screen fades; not raised in this class.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfadeinlocker" /><code>{"void AddFadeInLocker(object locker)"}</code> | <span className="api-desc">Adds a lock. The first lock snaps to black and locks the player controller.</span> |
| <Link id="m-cancelcurrentfade" /><code>{"void CancelCurrentFade(bool isInvokingCallback)"}</code> | <span className="api-desc">Stops the current fade. Its callback always runs, whatever the flag says.</span> |
| <Link id="m-customfade" /><code><Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" CustomFade(float alphaStart, float alphaEnd, float fadeDuration, Action fadeCallback = null, float startDelay = 0)"}</code> | <span className="api-desc">Cancels any fade, then fades from one alpha to another over a time after an optional delay.</span> |
| <Link id="m-fadebackin" /><code><Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" FadeBackIn(float fadeInDuration, Action fadeCallback = null, float startDelay = 0)"}</code> | <span className="api-desc">Fades from black to clear.</span> |
| <Link id="m-fadeinifnotlocked" /><code>{"void FadeInIfNotLocked(float fadeDuration)"}</code> | <span className="api-desc">Fades back in unless a locker is holding it black.</span> |
| <Link id="m-fadetoblack" /><code><Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" FadeToBlack(float fadeOutDuration, Action fadeCallback = null, float startDelay = 0)"}</code> | <span className="api-desc">Fades from clear to black.</span> |
| <Link id="m-instantset" /><code>{"void InstantSet(float alpha)"}</code> | <span className="api-desc">Cancels any fade and sets the alpha at once.</span> |
| <Link id="m-removefadeinlocker" /><code>{"void RemoveFadeInLocker(object locker, float fadeDuration)"}</code> | <span className="api-desc">Removes a lock and fades back in if none are left.</span> |
| <Link id="m-setfadedandfadebackin" /><code><Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" SetFadedAndFadeBackIn(float fadeInDuration, Action fadeCallback = null, float startDelay = 0)"}</code> | <span className="api-desc">Snaps to black, then fades back in.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel)"}</code> | <span className="api-desc">VContainer injection of the player controller lock model.</span> |
| <Link id="m-isfadelocked" /><code>{"protected bool IsFadeLocked()"}</code> | <span className="api-desc">True while any locker is held.</span> |
| <Link id="m-lerpfadescreen" /><code>{"protected abstract IEnumerator LerpFadeScreen(float duration, float alphaStart, float alphaEnd)"}</code> | <span className="api-desc">Subclass: animates the alpha over a duration.</span> |
| <Link id="m-set" /><code>{"protected abstract void Set(float alpha)"}</code> | <span className="api-desc">Subclass: sets the alpha straight away.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlefade" /><code>{"private IEnumerator HandleFade(float duration, float alphaStart, float alphaEnd, float delay) (iterator)"}</code> | <span className="api-desc">Coroutine behind `CustomFade`: waits the delay, fades, runs the callback, and holds the faded-to-black render lock while black.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerScreenFader`:

<div className="api-used-in">

[`PlayerController.screenFader`](/mod/game-api/types/global-p/playercontroller#m-screenfader), [`PlayerController.ScreenFader`](/mod/game-api/types/global-p/playercontroller#m-screenfader-2).

</div>
