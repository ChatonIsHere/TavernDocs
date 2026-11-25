---
title: "PlayerScreenFader"
description: "abstract class PlayerScreenFader in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerScreenFader

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ExposurePlayerScreenFader`](/game-api/types/global-e-h/exposureplayerscreenfader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerScreenFader()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentcallback" /><code>{"protected Action currentCallback"}</code> |  |
| <Link id="m-currentfade" /><code>{"protected "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" currentFade"}</code> |  |
| <Link id="m-fadeinlockers" /><code>{"private HashSet<object> fadeInLockers"}</code> |  |
| <Link id="m-playercontroller" /><code>{"protected "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |  |
| <Link id="m-playercontrollermultilockmodel" /><code>{"private "}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-screenfaded" /><code>{"event Action ScreenFaded"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addfadeinlocker" /><code>{"void AddFadeInLocker(object locker)"}</code> |  |
| <Link id="m-cancelcurrentfade" /><code>{"void CancelCurrentFade(bool isInvokingCallback)"}</code> |  |
| <Link id="m-customfade" /><code><Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" CustomFade(float alphaStart, float alphaEnd, float fadeDuration, Action fadeCallback = null, float startDelay = 0)"}</code> |  |
| <Link id="m-fadebackin" /><code><Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" FadeBackIn(float fadeInDuration, Action fadeCallback = null, float startDelay = 0)"}</code> |  |
| <Link id="m-fadeinifnotlocked" /><code>{"void FadeInIfNotLocked(float fadeDuration)"}</code> |  |
| <Link id="m-fadetoblack" /><code><Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" FadeToBlack(float fadeOutDuration, Action fadeCallback = null, float startDelay = 0)"}</code> |  |
| <Link id="m-instantset" /><code>{"void InstantSet(float alpha)"}</code> |  |
| <Link id="m-removefadeinlocker" /><code>{"void RemoveFadeInLocker(object locker, float fadeDuration)"}</code> |  |
| <Link id="m-setfadedandfadebackin" /><code><Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" SetFadedAndFadeBackIn(float fadeInDuration, Action fadeCallback = null, float startDelay = 0)"}</code> |  |
| <Link id="m-handlefade" /><code>{"private IEnumerator HandleFade(float duration, float alphaStart, float alphaEnd, float delay) (iterator)"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel)"}</code> |  |
| <Link id="m-isfadelocked" /><code>{"protected bool IsFadeLocked()"}</code> |  |
| <Link id="m-lerpfadescreen" /><code>{"protected abstract IEnumerator LerpFadeScreen(float duration, float alphaStart, float alphaEnd)"}</code> |  |
| <Link id="m-set" /><code>{"protected abstract void Set(float alpha)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerScreenFader`:

[`PlayerController.screenFader`](/game-api/types/global-p/playercontroller#m-screenfader), [`PlayerController.ScreenFader`](/game-api/types/global-p/playercontroller#m-screenfader-2).
