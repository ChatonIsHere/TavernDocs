---
title: "VolumeTrigger"
description: "abstract class VolumeTrigger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VolumeTrigger

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`EffectVolumeTrigger`](/game-api/types/alta-stats-effects/effectvolumetrigger), [`LocomotionModifierVolumeTrigger`](/game-api/types/global-i-l/locomotionmodifiervolumetrigger), [`MovingPlatform`](/game-api/types/global-m-o/movingplatform)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected VolumeTrigger()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffecttargets" /><code>{"protected readonly List<"}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{"> ActiveEffectTargets"}</code> |  |
| <Link id="m-colliders" /><code>{"private readonly HashSet<Collider> colliders"}</code> |  |
| <Link id="m-effecthandlers" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Rigidbody, "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{"> effectHandlers"}</code> |  |
| <Link id="m-pickups" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Rigidbody, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickups"}</code> |  |
| <Link id="m-players" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Collider, "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{"> players"}</code> |  |
| <Link id="m-rigidbodies" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Collider, Rigidbody> rigidbodies"}</code> |  |
| <Link id="m-statictempremovallist" /><code>{"private static readonly List<Collider> staticTempRemovalList"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischeckingforeffecthandler" /><code>{"virtual bool IsCheckingForEffectHandler { get; }"}</code> |  |
| <Link id="m-ischeckingforpickup" /><code>{"virtual bool IsCheckingForPickup { get; }"}</code> |  |
| <Link id="m-ischeckingforplayer" /><code>{"virtual bool IsCheckingForPlayer { get; }"}</code> |  |
| <Link id="m-ischeckingforrigidbody" /><code>{"virtual bool IsCheckingForRigidbody { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |  |
| <Link id="m-effecthandlerentered" /><code>{"protected virtual void EffectHandlerEntered("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-effecthandlerleft" /><code>{"protected virtual void EffectHandlerLeft("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-geteffecthandler" /><code>{"private bool GetEffectHandler(Rigidbody rigidbody, out "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" result)"}</code> |  |
| <Link id="m-getplayer" /><code>{"private bool GetPlayer(Collider collider, out "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" result)"}</code> |  |
| <Link id="m-getrigidbody" /><code>{"private bool GetRigidbody(Collider collider, out Rigidbody result)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |
| <Link id="m-pickupentered" /><code>{"protected virtual void PickupEntered("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-pickupleft" /><code>{"protected virtual void PickupLeft("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-playerentered" /><code>{"protected virtual void PlayerEntered("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-playerleft" /><code>{"protected virtual void PlayerLeft("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-removeinternal" /><code>{"private bool RemoveInternal(Collider other)"}</code> |  |
| <Link id="m-rigidbodyentered" /><code>{"protected virtual void RigidbodyEntered(Rigidbody rigidbody)"}</code> |  |
| <Link id="m-rigidbodyleft" /><code>{"protected virtual void RigidbodyLeft(Rigidbody rigidbody)"}</code> |  |
| <Link id="m-triggereffecthandlerleftonallactivetargets" /><code>{"private void TriggerEffectHandlerLeftOnAllActiveTargets()"}</code> |  |
| <Link id="m-trygetpickup" /><code>{"private bool TryGetPickup(Rigidbody rigidbody, out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" result)"}</code> |  |
