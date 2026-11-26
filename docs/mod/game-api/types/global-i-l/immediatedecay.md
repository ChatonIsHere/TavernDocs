---
title: "ImmediateDecay"
description: "Destroys a pickup soon after it is let go, with a fade effect, unless it is picked up again or docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImmediateDecay

A **class** in `Root.Township`, the global namespace.

Destroys a pickup soon after it is let go, with a fade effect, unless it is picked up again or docked. Nothing in the code calls `InitializeAsServer` or sets `Pickup`, so it probably does nothing as is.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImmediateDecay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay" /><code>{"private Coroutine decay"}</code> | <span className="api-desc">The running decay coroutine, if any.</span> |
| <Link id="m-decayduration" /><code>{"private float decayDuration"}</code> | <span className="api-desc">Seconds the decay effect plays before the entity is destroyed.</span> |
| <Link id="m-decayeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/effectreleaseonfade">{"EffectReleaseOnFade"}</Link>{" decayEffect"}</code> | <span className="api-desc">The decay effect playing now.</span> |
| <Link id="m-decayeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" decayEffectDefinition"}</code> | <span className="api-desc">Pooled effect to play while decaying.</span> |
| <Link id="m-delaytostartdecaying" /><code>{"private float delayToStartDecaying"}</code> | <span className="api-desc">Seconds after release before the decay effect starts.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The pickup whose release starts the decay.</span> |

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay-2" /><code>{"private IEnumerator Decay() (iterator)"}</code> | <span className="api-desc">Coroutine: if not docked, waits, plays the decay effect, waits again, then destroys the entity on the server.</span> |
| <Link id="m-initializeasserver" /><code>{"private void InitializeAsServer()"}</code> | <span className="api-desc">Hooks the decay start and stop to the pickup's release, grab and dock events.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Releases the decay effect if one is playing.</span> |
| <Link id="m-startdecay" /><code>{"private void StartDecay("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Starts the decay coroutine when the pickup is released.</span> |
| <Link id="m-stopdecay" /><code>{"private void StopDecay("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops the decay and its effect when the pickup is grabbed.</span> |
| <Link id="m-stopdecaydock" /><code>{"private void StopDecayDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Stops the decay and its effect when the pickup is docked.</span> |

</details>
