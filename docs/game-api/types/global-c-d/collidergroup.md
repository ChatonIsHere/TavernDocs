---
title: "ColliderGroup"
description: "A ComponentGroup of colliders with helpers to switch them on and off, set their layer, and ignore collisions with other colliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColliderGroup

A **class** in `Root.Township`, no namespace.

A `ComponentGroup` of colliders with helpers to switch them on and off, set their layer, and ignore collisions with other colliders.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`ComponentGroup<Collider>`](/game-api/types/global-c-d/componentgroup-t)
- **Derived types** [`NetworkColliderGroup`](/game-api/types/alta-networking/networkcollidergroup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ColliderGroup()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isacceptingtriggers" /><code>{"private bool isAcceptingTriggers"}</code> | When false, trigger colliders are left out of the group. |
| <Link id="m-isdeletingall" /><code>{"private bool isDeletingAll"}</code> | Inspector button labelled Delete All Colliders; does nothing in this build. |
| <Link id="m-isdisablinginternalcollisiononstart" /><code>{"private bool isDisablingInternalCollisionOnStart"}</code> | Ignores collisions between the group's own colliders on `Start`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ignorecollisionscoroutine" /><code>{"static IEnumerator IgnoreCollisionsCoroutine(IEnumerable<Collider> colliders, IEnumerable<Collider> otherColliders, float secondsToIgnore = 0.1) (iterator)"}</code> | Coroutine that ignores collisions between two sets of colliders for a time, then restores them. |
| <Link id="m-ignorecollisionsforduration" /><code>{"static "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" IgnoreCollisionsForDuration(IEnumerable<Collider> colliders, IEnumerable<Collider> otherColliders, MonoBehaviour nullCheck, float secondsToIgnore = 0.1)"}</code> | Starts `IgnoreCollisionsCoroutine`, stopping if the given behaviour is destroyed. Default 0.1 seconds. |
| <Link id="m-ignoreself" /><code>{"void IgnoreSelf(bool isIgnoring = true)"}</code> | Makes the group's colliders ignore each other (or stop ignoring). Runs on `Start` if set to. |
| <Link id="m-setactive" /><code>{"virtual void SetActive(bool isEnabled)"}</code> | Enables or disables every collider in the group. |
| <Link id="m-setignore" /><code>{"void SetIgnore(Collider ignore, bool isIgnoring)"}</code> | Ignores or restores collision between the group and a collider, another group, or a list of colliders. |
| <Link id="m-setignore-2" /><code>{"void SetIgnore("}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" ignore, bool isIgnoring)"}</code> | Ignores or restores collision between the group and a collider, another group, or a list of colliders. |
| <Link id="m-setignore-3" /><code>{"void SetIgnore(IEnumerable<Collider> ignore, bool isIgnoring)"}</code> | Ignores or restores collision between the group and a collider, another group, or a list of colliders. |
| <Link id="m-setlayer" /><code>{"void SetLayer(int layer)"}</code> | Moves every collider's object to a layer. |
| <Link id="m-ignorecollision" /><code>{"protected virtual void IgnoreCollision(Collider thisCollider, Collider otherCollider, bool isIgnoring)"}</code> | Ignores or restores collision between two colliders. Subclasses can override it. |
| <Link id="m-iselementvalid" /><code>{"protected override bool IsElementValid(Collider element)"}</code> | Skips trigger colliders when the group does not accept triggers. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor hook. Does nothing useful. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Turns off collisions between the group's own colliders when `isDisablingInternalCollisionOnStart` is set. |

</details>

## Used in

Members of other types that take, return or hold a `ColliderGroup`:

[`ChisellingDeck.colliderGroup`](/game-api/types/alta-crafting/chisellingdeck#m-collidergroup), [`TimberBlock.colliderGroup`](/game-api/types/alta-crafting/timberblock#m-collidergroup), [`TimberBlock.ColliderGroup`](/game-api/types/alta-crafting/timberblock#m-collidergroup-2), [`CharacterCollisionController.collidersMap`](/game-api/types/alta-player/charactercollisioncontroller#m-collidersmap), [`CharacterCollisionController.CollidersToDisableWhenInteracting.collidersToDisable`](/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting#m-colliderstodisable), [`CharacterCollisionController.CollidersToDisableWhenInteracting.CollidersToDisable`](/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting#m-colliderstodisable-2), [`CharacterCollisionControllerHelper.ReplaceColliderGroup`](/game-api/types/alta-player/charactercollisioncontrollerhelper#m-replacecollidergroup), [`InteractionCollisionController.colliders`](/game-api/types/alta-player/interactioncollisioncontroller#m-colliders), [`PlayerCharacter.bodyColliderGroup`](/game-api/types/alta-player/playercharacter#m-bodycollidergroup), [`PlayerCharacter.BodyColliderGroup`](/game-api/types/alta-player/playercharacter#m-bodycollidergroup-2), [`EmbeddableManager.collidersToAddTo`](/game-api/types/alta-items/embeddablemanager#m-colliderstoaddto), [`Agent.collision`](/game-api/types/alta-intelligence/agent#m-collision), [`Agent.Collision`](/game-api/types/alta-intelligence/agent#m-collision-2), [`IAgent.Collision`](/game-api/types/alta-intelligence/iagent#m-collision), [`LockableHinge.baseColliders`](/game-api/types/alta-items/lockablehinge#m-basecolliders), [`AnimatedRagdoll.colliders`](/game-api/types/global-a-b/animatedragdoll#m-colliders), [`CustomizationPlayerController.GetHandCollidersForInteractor`](/game-api/types/global-c-d/customizationplayercontroller#m-gethandcollidersforinteractor), [`CustomizationPlayerController.leftGhostHandColliders`](/game-api/types/global-c-d/customizationplayercontroller#m-leftghosthandcolliders), [`CustomizationPlayerController.rightGhostHandColliders`](/game-api/types/global-c-d/customizationplayercontroller#m-rightghosthandcolliders), [`ExtraArrowUpdater.ExtraArrowData.ColliderGroup`](/game-api/types/global-e-h/extraarrowupdater-extraarrowdata#m-collidergroup), [`LocomotionlessPlayerController.leftGhostHandColliders`](/game-api/types/global-i-l/locomotionlessplayercontroller#m-leftghosthandcolliders), [`LocomotionlessPlayerController.rightGhostHandColliders`](/game-api/types/global-i-l/locomotionlessplayercontroller#m-rightghosthandcolliders), [`MainMenuPlayerController.GetHandCollidersForInteractor`](/game-api/types/global-m-o/mainmenuplayercontroller#m-gethandcollidersforinteractor), [`MainMenuPlayerController.leftGhostHandColliders`](/game-api/types/global-m-o/mainmenuplayercontroller#m-leftghosthandcolliders), [`MainMenuPlayerController.rightGhostHandColliders`](/game-api/types/global-m-o/mainmenuplayercontroller#m-rightghosthandcolliders), [`Projectile.colliders`](/game-api/types/global-p/projectile#m-colliders), [`Projectile.Colliders`](/game-api/types/global-p/projectile#m-colliders-2), [`Projectile.disabledAgainst`](/game-api/types/global-p/projectile#m-disabledagainst), [`Projectile.Shoot`](/game-api/types/global-p/projectile#m-shoot).
