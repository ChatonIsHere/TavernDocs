---
title: "ListenerClaimer"
description: "Makes its object the active Wwise audio listener when it wakes, and turns off the previous claimer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListenerClaimer

A **class** in `Root.Township`, the global namespace.

Makes its object the active Wwise audio listener when it wakes, and turns off the previous claimer. The latest one is `Current`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListenerClaimer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-wwiselistener" /><code>{"private AkAudioListener wwiseListener"}</code> | <span className="api-desc">The `AkAudioListener` this claimer added.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/listenerclaimer">{"ListenerClaimer"}</Link>{" Current { get; private set; }"}</code> | <span className="api-desc">The claimer that most recently took the listener.</span> |

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activateunitylistener" /><code>{"private void ActivateUnityListener()"}</code> | <span className="api-desc">Empty; the Unity audio listener is not used.</span> |
| <Link id="m-activatewwiselistener" /><code>{"private void ActivateWwiseListener()"}</code> | <span className="api-desc">Adds or gets an `AkAudioListener` on this object and makes it the default listener.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Claims the listener for this object.</span> |
| <Link id="m-deactivateunitylistener" /><code>{"private void DeactivateUnityListener()"}</code> | <span className="api-desc">Empty; the Unity audio listener is not used.</span> |
| <Link id="m-deactivatewwiselistener" /><code>{"private void DeactivateWwiseListener()"}</code> | <span className="api-desc">Unsets and destroys this object's `AkAudioListener`.</span> |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | <span className="api-desc">Turns off any other `Current` claimer, sets this as `Current`, then turns its listener on or off.</span> |

</details>
