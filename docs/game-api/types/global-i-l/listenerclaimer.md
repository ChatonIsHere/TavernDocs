---
title: "ListenerClaimer"
description: "Makes its object the active Wwise audio listener when it wakes, and turns off the previous claimer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListenerClaimer

A **class** in `Root.Township`, no namespace.

Makes its object the active Wwise audio listener when it wakes, and turns off the previous claimer. The latest one is `Current`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListenerClaimer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-wwiselistener" /><code>{"private AkAudioListener wwiseListener"}</code> | The `AkAudioListener` this claimer added. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/global-i-l/listenerclaimer">{"ListenerClaimer"}</Link>{" Current { get; private set; }"}</code> | The claimer that most recently took the listener. |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activateunitylistener" /><code>{"private void ActivateUnityListener()"}</code> | Empty; the Unity audio listener is not used. |
| <Link id="m-activatewwiselistener" /><code>{"private void ActivateWwiseListener()"}</code> | Adds or gets an `AkAudioListener` on this object and makes it the default listener. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Claims the listener for this object. |
| <Link id="m-deactivateunitylistener" /><code>{"private void DeactivateUnityListener()"}</code> | Empty; the Unity audio listener is not used. |
| <Link id="m-deactivatewwiselistener" /><code>{"private void DeactivateWwiseListener()"}</code> | Unsets and destroys this object's `AkAudioListener`. |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | Turns off any other `Current` claimer, sets this as `Current`, then turns its listener on or off. |

</details>
