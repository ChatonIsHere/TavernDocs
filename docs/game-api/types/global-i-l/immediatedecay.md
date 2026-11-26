---
title: "ImmediateDecay"
description: "Destroys a pickup soon after it is let go, with a fade effect, unless it is picked up again or docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImmediateDecay

A **class** in `Root.Township`, no namespace.

Destroys a pickup soon after it is let go, with a fade effect, unless it is picked up again or docked. Nothing in the code calls `InitializeAsServer` or sets `Pickup`, so it probably does nothing as is.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImmediateDecay()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay" /><code>{"private Coroutine decay"}</code> | The running decay coroutine, if any. |
| <Link id="m-decayduration" /><code>{"private float decayDuration"}</code> | Seconds the decay effect plays before the entity is destroyed. |
| <Link id="m-decayeffect" /><code>{"private "}<Link to="/game-api/types/global-e-h/effectreleaseonfade">{"EffectReleaseOnFade"}</Link>{" decayEffect"}</code> | The decay effect playing now. |
| <Link id="m-decayeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" decayEffectDefinition"}</code> | Pooled effect to play while decaying. |
| <Link id="m-delaytostartdecaying" /><code>{"private float delayToStartDecaying"}</code> | Seconds after release before the decay effect starts. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; private set; }"}</code> | The pickup whose release starts the decay. |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay-2" /><code>{"private IEnumerator Decay() (iterator)"}</code> | Coroutine: if not docked, waits, plays the decay effect, waits again, then destroys the entity on the server. |
| <Link id="m-initializeasserver" /><code>{"private void InitializeAsServer()"}</code> | Hooks the decay start and stop to the pickup's release, grab and dock events. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Releases the decay effect if one is playing. |
| <Link id="m-startdecay" /><code>{"private void StartDecay("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Starts the decay coroutine when the pickup is released. |
| <Link id="m-stopdecay" /><code>{"private void StopDecay("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops the decay and its effect when the pickup is grabbed. |
| <Link id="m-stopdecaydock" /><code>{"private void StopDecayDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Stops the decay and its effect when the pickup is docked. |

</details>
