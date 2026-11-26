---
title: "VolumeTrigger"
description: "Base for a trigger volume that tracks what is inside it: rigidbodies, players, pickups and effect handlers, each reported once on first enter and last leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VolumeTrigger

An **abstract class** in `Root.Township`, the global namespace.

Base for a trigger volume that tracks what is inside it: rigidbodies, players, pickups and effect handlers, each reported once on first enter and last leave. Subclasses turn on the kinds they need.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`EffectVolumeTrigger`](/mod/game-api/types/alta-stats-effects/effectvolumetrigger), [`LocomotionModifierVolumeTrigger`](/mod/game-api/types/global-i-l/locomotionmodifiervolumetrigger), [`MovingPlatform`](/mod/game-api/types/global-m-o/movingplatform)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected VolumeTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffecttargets" /><code>{"protected readonly List<"}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{"> ActiveEffectTargets"}</code> | <span className="api-desc">Effect handlers a subclass has applied effects to. `EffectHandlerLeft` is called on each when the volume is disabled.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private readonly HashSet<Collider> colliders"}</code> | <span className="api-desc">Colliders inside the trigger right now.</span> |
| <Link id="m-effecthandlers" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Rigidbody, "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{"> effectHandlers"}</code> | <span className="api-desc">Counts effect handlers in the volume so each enters and leaves once. Made on first use.</span> |
| <Link id="m-pickups" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Rigidbody, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickups"}</code> | <span className="api-desc">Counts pickups in the volume so each enters and leaves once. Made on first use.</span> |
| <Link id="m-players" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Collider, "}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{"> players"}</code> | <span className="api-desc">Counts players by collider, so a player enters and leaves once. Made on first use.</span> |
| <Link id="m-rigidbodies" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout">{"MemoizeHashsetCountTracker"}</Link>{"<Collider, Rigidbody> rigidbodies"}</code> | <span className="api-desc">Counts colliders per rigidbody, so a body with several colliders enters and leaves once.</span> |
| <Link id="m-statictempremovallist" /><code>{"private static readonly List<Collider> staticTempRemovalList"}</code> | <span className="api-desc">Shared scratch list for removing disabled colliders in `OnTriggerExit`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ischeckingforeffecthandler" /><code>{"virtual bool IsCheckingForEffectHandler { get; }"}</code> | <span className="api-desc">Override to true to track effect handlers. Also needs `IsCheckingForRigidbody`.</span> |
| <Link id="m-ischeckingforpickup" /><code>{"virtual bool IsCheckingForPickup { get; }"}</code> | <span className="api-desc">Override to true to track pickups. Also needs `IsCheckingForRigidbody`.</span> |
| <Link id="m-ischeckingforplayer" /><code>{"virtual bool IsCheckingForPlayer { get; }"}</code> | <span className="api-desc">Override to true to track players (by their character controller).</span> |
| <Link id="m-ischeckingforrigidbody" /><code>{"virtual bool IsCheckingForRigidbody { get; }"}</code> | <span className="api-desc">Override to true to track rigidbodies. Pickup and effect handler tracking go through this.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-effecthandlerentered" /><code>{"protected virtual void EffectHandlerEntered("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Called when an effect handler's body first enters. Needs rigidbody and effect handler checking on.</span> |
| <Link id="m-effecthandlerleft" /><code>{"protected virtual void EffectHandlerLeft("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Called when an effect handler's body leaves, or the volume is disabled.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Clears everything tracked.</span> |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | <span className="api-desc">Clears everything tracked and calls the leave hooks.</span> |
| <Link id="m-pickupentered" /><code>{"protected virtual void PickupEntered("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Called when a pickup first enters.</span> |
| <Link id="m-pickupleft" /><code>{"protected virtual void PickupLeft("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Called when a pickup leaves.</span> |
| <Link id="m-playerentered" /><code>{"protected virtual void PlayerEntered("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Called when a player's character first enters.</span> |
| <Link id="m-playerleft" /><code>{"protected virtual void PlayerLeft("}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Called when a player's character leaves.</span> |
| <Link id="m-rigidbodyentered" /><code>{"protected virtual void RigidbodyEntered(Rigidbody rigidbody)"}</code> | <span className="api-desc">Called when a rigidbody's first collider enters. The base passes it on to pickup and effect handler tracking.</span> |
| <Link id="m-rigidbodyleft" /><code>{"protected virtual void RigidbodyLeft(Rigidbody rigidbody)"}</code> | <span className="api-desc">Called when a rigidbody's last collider leaves.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Drops all tracked colliders, bodies, players, pickups and effect handlers and calls `EffectHandlerLeft` for each `ActiveEffectTargets` entry. Runs on disable and destroy.</span> |
| <Link id="m-geteffecthandler" /><code>{"private bool GetEffectHandler(Rigidbody rigidbody, out "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" result)"}</code> | <span className="api-desc">Finds a rigidbody's effect handler through its `ImpactDetector` health target.</span> |
| <Link id="m-getplayer" /><code>{"private bool GetPlayer(Collider collider, out "}<Link to="/mod/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" result)"}</code> | <span className="api-desc">Maps a `CharacterController` collider with `SmoothLocomotion` to its player controller.</span> |
| <Link id="m-getrigidbody" /><code>{"private bool GetRigidbody(Collider collider, out Rigidbody result)"}</code> | <span className="api-desc">Maps a collider to its attached rigidbody.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Tracks a new collider and, if the subclass asks, its rigidbody and player, firing the entered callbacks on first contact.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Stops tracking the collider. If it wasn't tracked, also drops any tracked colliders that have been disabled.</span> |
| <Link id="m-removeinternal" /><code>{"private bool RemoveInternal(Collider other)"}</code> | <span className="api-desc">Removes a collider and its rigidbody and player counts. Returns false if it wasn't tracked.</span> |
| <Link id="m-triggereffecthandlerleftonallactivetargets" /><code>{"private void TriggerEffectHandlerLeftOnAllActiveTargets()"}</code> | <span className="api-desc">Calls `EffectHandlerLeft` for every entry in `ActiveEffectTargets`, then empties the list.</span> |
| <Link id="m-trygetpickup" /><code>{"private bool TryGetPickup(Rigidbody rigidbody, out "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" result)"}</code> | <span className="api-desc">Gets the `Pickup` on a rigidbody.</span> |

</details>
