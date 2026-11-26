---
title: "VolumeTrigger"
description: "Base for a trigger volume that tracks what is inside it: rigidbodies, players, pickups and effect handlers, each reported once on first enter and last leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VolumeTrigger

An **abstract class** in `Root.Township`, no namespace.

Base for a trigger volume that tracks what is inside it: rigidbodies, players, pickups and effect handlers, each reported once on first enter and last leave. Subclasses turn on the kinds they need.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`EffectVolumeTrigger`](/game-api/types/alta-stats-effects/effectvolumetrigger), [`LocomotionModifierVolumeTrigger`](/game-api/types/global-i-l/locomotionmodifiervolumetrigger), [`MovingPlatform`](/game-api/types/global-m-o/movingplatform)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected VolumeTrigger()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffecttargets" /><code>{"protected readonly List<"}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{"> ActiveEffectTargets"}</code> | Effect handlers a subclass has applied effects to. `EffectHandlerLeft` is called on each when the volume is disabled. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private readonly HashSet<Collider> colliders"}</code> | Colliders inside the trigger right now. |
| <Link id="m-effecthandlers" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Rigidbody, "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{"> effectHandlers"}</code> | Counts effect handlers in the volume so each enters and leaves once. Made on first use. |
| <Link id="m-pickups" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Rigidbody, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickups"}</code> | Counts pickups in the volume so each enters and leaves once. Made on first use. |
| <Link id="m-players" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Collider, "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{"> players"}</code> | Counts players by collider, so a player enters and leaves once. Made on first use. |
| <Link id="m-rigidbodies" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Collider, Rigidbody> rigidbodies"}</code> | Counts colliders per rigidbody, so a body with several colliders enters and leaves once. |
| <Link id="m-statictempremovallist" /><code>{"private static readonly List<Collider> staticTempRemovalList"}</code> | Shared scratch list for removing disabled colliders in `OnTriggerExit`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischeckingforeffecthandler" /><code>{"virtual bool IsCheckingForEffectHandler { get; }"}</code> | Override to true to track effect handlers. Also needs `IsCheckingForRigidbody`. |
| <Link id="m-ischeckingforpickup" /><code>{"virtual bool IsCheckingForPickup { get; }"}</code> | Override to true to track pickups. Also needs `IsCheckingForRigidbody`. |
| <Link id="m-ischeckingforplayer" /><code>{"virtual bool IsCheckingForPlayer { get; }"}</code> | Override to true to track players (by their character controller). |
| <Link id="m-ischeckingforrigidbody" /><code>{"virtual bool IsCheckingForRigidbody { get; }"}</code> | Override to true to track rigidbodies. Pickup and effect handler tracking go through this. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-effecthandlerentered" /><code>{"protected virtual void EffectHandlerEntered("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Called when an effect handler's body first enters. Needs rigidbody and effect handler checking on. |
| <Link id="m-effecthandlerleft" /><code>{"protected virtual void EffectHandlerLeft("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Called when an effect handler's body leaves, or the volume is disabled. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Clears everything tracked. |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | Clears everything tracked and calls the leave hooks. |
| <Link id="m-pickupentered" /><code>{"protected virtual void PickupEntered("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Called when a pickup first enters. |
| <Link id="m-pickupleft" /><code>{"protected virtual void PickupLeft("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Called when a pickup leaves. |
| <Link id="m-playerentered" /><code>{"protected virtual void PlayerEntered("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Called when a player's character first enters. |
| <Link id="m-playerleft" /><code>{"protected virtual void PlayerLeft("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | Called when a player's character leaves. |
| <Link id="m-rigidbodyentered" /><code>{"protected virtual void RigidbodyEntered(Rigidbody rigidbody)"}</code> | Called when a rigidbody's first collider enters. The base passes it on to pickup and effect handler tracking. |
| <Link id="m-rigidbodyleft" /><code>{"protected virtual void RigidbodyLeft(Rigidbody rigidbody)"}</code> | Called when a rigidbody's last collider leaves. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Drops all tracked colliders, bodies, players, pickups and effect handlers and calls `EffectHandlerLeft` for each `ActiveEffectTargets` entry. Runs on disable and destroy. |
| <Link id="m-geteffecthandler" /><code>{"private bool GetEffectHandler(Rigidbody rigidbody, out "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" result)"}</code> | Finds a rigidbody's effect handler through its `ImpactDetector` health target. |
| <Link id="m-getplayer" /><code>{"private bool GetPlayer(Collider collider, out "}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" result)"}</code> | Maps a `CharacterController` collider with `SmoothLocomotion` to its player controller. |
| <Link id="m-getrigidbody" /><code>{"private bool GetRigidbody(Collider collider, out Rigidbody result)"}</code> | Maps a collider to its attached rigidbody. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Tracks a new collider and, if the subclass asks, its rigidbody and player, firing the entered callbacks on first contact. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Stops tracking the collider. If it wasn't tracked, also drops any tracked colliders that have been disabled. |
| <Link id="m-removeinternal" /><code>{"private bool RemoveInternal(Collider other)"}</code> | Removes a collider and its rigidbody and player counts. Returns false if it wasn't tracked. |
| <Link id="m-triggereffecthandlerleftonallactivetargets" /><code>{"private void TriggerEffectHandlerLeftOnAllActiveTargets()"}</code> | Calls `EffectHandlerLeft` for every entry in `ActiveEffectTargets`, then empties the list. |
| <Link id="m-trygetpickup" /><code>{"private bool TryGetPickup(Rigidbody rigidbody, out "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" result)"}</code> | Gets the `Pickup` on a rigidbody. |

</details>
