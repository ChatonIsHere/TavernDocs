---
title: "EdibleObject"
description: "Makes a pickup edible: bites over time at the mouth, then the server applies its effects and destroys it unless it's docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EdibleObject

A **class** in `Root.Township`, no namespace.

Makes a pickup edible: bites over time at the mouth, then the server applies its effects and destroys it unless it's docked. Eating also adds the item to the edible pages.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`EdibleEvent`](/game-api/types/global-e-h/edibleevent), [`EdibleUnityEvent`](/game-api/types/global-e-h/edibleunityevent)
- **Nested types** [`EatenStage`](/game-api/types/global-e-h/edibleobject-eatenstage)
- **Documented in** [Hunger, eating and drinking](/game-api/game-systems/hunger-and-eating#edibleobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EdibleObject()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-biteeffects" /><code>{"private "}<Link to="/game-api/types/global-e-h/edibleobject-eatenstage">{"EdibleObject.EatenStage"}</Link>{" biteEffects"}</code> |
| <Link id="m-bitehaptic" /><code>{"private AnimationCurve biteHaptic"}</code> |
| <Link id="m-consumers" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{", Coroutine> consumers"}</code> |
| <Link id="m-consumptioneffects" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] consumptionEffects"}</code> |
| <Link id="m-currentbites" /><code>{"private int currentBites"}</code> |
| <Link id="m-finishedeating" /><code>{"private "}<Link to="/game-api/types/global-e-h/edibleevent">{"EdibleEvent"}</Link>{" finishedEating"}</code> |
| <Link id="m-holdingentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" holdingEntity"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-resetingbites" /><code>{"private Coroutine resetingBites"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-consumptioneffects-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] ConsumptionEffects { get; }"}</code> | Effects applied to whoever finishes eating it. |
| <Link id="m-finishedeating-2" /><code><Link to="/game-api/types/global-e-h/edibleevent">{"EdibleEvent"}</Link>{" FinishedEating { get; }"}</code> | Raised on both sides when the last bite is done. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-starteat" /><code>{"bool StartEat("}<Link to="/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{" consumer, Transform mouth)"}</code> | Starts the biting coroutine for a consumer. False if disabled or that consumer is already eating. |
| <Link id="m-stopeat" /><code>{"void StopEat("}<Link to="/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{" consumer)"}</code> | Stops a consumer's biting. Bite count is kept until the item is let go. |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-biteeffects-2" /><code>{"private void BiteEffects()"}</code> |
| <Link id="m-resetbites" /><code>{"private void ResetBites("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-resetbites-2" /><code>{"private IEnumerator ResetBites() (iterator)"}</code> |
| <Link id="m-starteating" /><code>{"private IEnumerator StartEating("}<Link to="/game-api/types/global-c-d/consumptionmanager">{"ConsumptionManager"}</Link>{" consumer, Transform mouth) (iterator)"}</code> |
| <Link id="m-startholding" /><code>{"private void StartHolding("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `EdibleObject`:

[`ConsumptionManager.CanConsumeEdible`](/game-api/types/global-c-d/consumptionmanager#m-canconsumeedible), [`ConsumptionManager.HandleFailedEating`](/game-api/types/global-c-d/consumptionmanager#m-handlefailedeating), [`Eater.currentEdible`](/game-api/types/global-e-h/eater#m-currentedible), [`Eater.FinishEating`](/game-api/types/global-e-h/eater#m-finisheating).
