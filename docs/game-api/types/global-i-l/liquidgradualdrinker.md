---
title: "LiquidGradualDrinker"
description: "class LiquidGradualDrinker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidGradualDrinker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`ILiquidTransitionController`](/game-api/types/alta-stats-effects/iliquidtransitioncontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidGradualDrinker()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-containerdrinkingfrom" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" containerDrinkingFrom"}</code> |
| <Link id="m-cooldown" /><code>{"private int cooldown"}</code> |
| <Link id="m-cooldownreset" /><code>{"private const int CooldownReset"}</code> |
| <Link id="m-handledrigidbodyorcolliders" /><code>{"private HashSet<Component> handledRigidbodyOrColliders"}</code> |
| <Link id="m-iscontainerdrinkingfromcontained" /><code>{"private bool isContainerDrinkingFromContained"}</code> |
| <Link id="m-outtransitionupdatemethod" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" outTransitionUpdateMethod"}</code> |
| <Link id="m-pourablecontainerdrinkingfrom" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/ipourablecontainer">{"IPourableContainer"}</Link>{" pourableContainerDrinkingFrom"}</code> |
| <Link id="m-thiscontainer" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainer">{"LiquidContainer"}</Link>{" thisContainer"}</code> |
| <Link id="m-transitionduration" /><code>{"private float transitionDuration"}</code> |

</details>

## Methods

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkdisabletransitionupdatingroutine" /><code>{"private void CheckDisableTransitionUpdatingRoutine()"}</code> |
| <Link id="m-checkenabletransitionupdatingroutine" /><code>{"private void CheckEnableTransitionUpdatingRoutine()"}</code> |
| <Link id="m-handleliquidcontainer" /><code>{"private void HandleLiquidContainer("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" otherContainer)"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |
| <Link id="m-removeouttransitionandstopupdating" /><code>{"private void RemoveOutTransitionAndStopUpdating()"}</code> |
| <Link id="m-resetouttransition" /><code>{"private void ResetOutTransition()"}</code> |
| <Link id="m-triggerenterinternal" /><code>{"private void TriggerEnterInternal(Component target)"}</code> |
| <Link id="m-triggerexitinternal" /><code>{"private void TriggerExitInternal(Component component)"}</code> |
| <Link id="m-updateouttransition" /><code>{"private void UpdateOutTransition()"}</code> |

</details>
