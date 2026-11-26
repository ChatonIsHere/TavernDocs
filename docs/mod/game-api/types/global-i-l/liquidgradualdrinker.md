---
title: "LiquidGradualDrinker"
description: "Trigger component on a liquid container that slowly drains liquid out of another container held in its trigger (for example drinking from a bottle), instead..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidGradualDrinker

A **class** in `Root.Township`, the global namespace.

Trigger component on a liquid container that slowly drains liquid out of another container held in its trigger (for example drinking from a bottle), instead of pouring. Server only.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`ILiquidTransitionController`](/mod/game-api/types/alta-stats-effects/iliquidtransitioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidGradualDrinker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-containerdrinkingfrom" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" containerDrinkingFrom"}</code> | <span className="api-desc">The container liquid is currently drawn from, or null.</span> |
| <Link id="m-cooldown" /><code>{"private int cooldown"}</code> | <span className="api-desc">Frames left before an absent source cancels the transfer.</span> |
| <Link id="m-cooldownreset" /><code>{"private const int CooldownReset"}</code> | <span className="api-desc">Frames (35) the source container may be outside the trigger before the transfer is cancelled.</span> |
| <Link id="m-handledrigidbodyorcolliders" /><code>{"private HashSet<Component> handledRigidbodyOrColliders"}</code> | <span className="api-desc">Rigidbodies or colliders currently inside the trigger, so each is handled once.</span> |
| <Link id="m-iscontainerdrinkingfromcontained" /><code>{"private bool isContainerDrinkingFromContained"}</code> | <span className="api-desc">True while the source container is inside the trigger.</span> |
| <Link id="m-outtransitionupdatemethod" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" outTransitionUpdateMethod"}</code> | <span className="api-desc">Handle of the registered late update method, or null.</span> |
| <Link id="m-pourablecontainerdrinkingfrom" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" pourableContainerDrinkingFrom"}</code> | <span className="api-desc">The source's `IPourableContainer`, whose pouring is turned off while drinking.</span> |
| <Link id="m-thiscontainer" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainer">{"LiquidContainer"}</Link>{" thisContainer"}</code> | <span className="api-desc">The container that receives the liquid.</span> |
| <Link id="m-transitionduration" /><code>{"private float transitionDuration"}</code> | <span className="api-desc">Seconds a full transfer takes.</span> |

</details>

## Methods

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkdisabletransitionupdatingroutine" /><code>{"private void CheckDisableTransitionUpdatingRoutine()"}</code> | <span className="api-desc">Removes the late update method that progresses the transfer, if registered.</span> |
| <Link id="m-checkenabletransitionupdatingroutine" /><code>{"private void CheckEnableTransitionUpdatingRoutine()"}</code> | <span className="api-desc">Registers `UpdateOutTransition` on the late update module, if not already registered.</span> |
| <Link id="m-handleliquidcontainer" /><code>{"private void HandleLiquidContainer("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> | <span className="api-desc">Starts drinking from a container: targets its out transition at this container, turns off its pouring and starts the update loop.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Server: passes the entering collider's rigidbody (or the collider) to `TriggerEnterInternal`.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Server: passes the leaving collider's rigidbody (or the collider) to `TriggerExitInternal`.</span> |
| <Link id="m-removeouttransitionandstopupdating" /><code>{"private void RemoveOutTransitionAndStopUpdating()"}</code> | <span className="api-desc">Ends drinking: turns pouring back on for the source, clears it and stops the update loop.</span> |
| <Link id="m-resetouttransition" /><code>{"private void ResetOutTransition()"}</code> | <span className="api-desc">Resets the source's unfinished out transition and detaches this receiver from it.</span> |
| <Link id="m-triggerenterinternal" /><code>{"private void TriggerEnterInternal(Component target)"}</code> | <span className="api-desc">Starts drinking from a new container that allows gradual consumption, or marks the current source as back inside.</span> |
| <Link id="m-triggerexitinternal" /><code>{"private void TriggerExitInternal(Component component)"}</code> | <span className="api-desc">Marks the current source container as no longer inside the trigger.</span> |
| <Link id="m-updateouttransition" /><code>{"private void UpdateOutTransition()"}</code> | <span className="api-desc">Each late update, moves liquid along the source's out transition, and stops when it finishes or the source has been out for `CooldownReset` frames.</span> |

</details>
