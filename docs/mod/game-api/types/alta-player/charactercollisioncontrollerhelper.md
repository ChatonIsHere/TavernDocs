---
title: "CharacterCollisionControllerHelper"
description: "Editor helper for CharacterCollisionController that builds the character's bone colliders (arm capsules, neck capsule, palm boxes, body mesh colliders) from..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterCollisionControllerHelper

A **class** in `Root.Township`, `Alta.Character`.

Editor helper for `CharacterCollisionController` that builds the character's bone colliders (arm capsules, neck capsule, palm boxes, body mesh colliders) from inspector settings.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<CharacterCollisionController>`](/mod/game-api/types/alta-player/charactercomponenthelper-t)
- **Nested types** [`BoneBoxCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-boneboxcollider), [`BoneCapsuleCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider), [`BoneCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecollider), [`BoneMeshCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonemeshcollider), [`HandPalmCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterCollisionControllerHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armcolliders" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{"[] armColliders"}</code> | Backing field for `ArmColliders`. |
| <Link id="m-handgrips" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{"[] handgrips"}</code> | The two hand grips. Not used by this code. |
| <Link id="m-handpalmcolliders" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider">{"CharacterCollisionControllerHelper.HandPalmCollider"}</Link>{"[] handPalmColliders"}</code> | Box collider settings for the two palms. |
| <Link id="m-isaddingnetworkentitiestocolliders" /><code>{"private bool isAddingNetworkEntitiesToColliders"}</code> | Whether created colliders also get a `NetworkEntity`. |
| <Link id="m-isaddingrigibodiestocolliders" /><code>{"private bool isAddingRigibodiesToColliders"}</code> | Whether created colliders also get a kinematic Rigidbody. |
| <Link id="m-isupdatingcollidersettings" /><code>{"private bool isUpdatingColliderSettings"}</code> | Inspector button that rebuilds the colliders. |
| <Link id="m-meshcolliders" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonemeshcollider">{"CharacterCollisionControllerHelper.BoneMeshCollider"}</Link>{"[] meshColliders"}</code> | Mesh collider settings for the body bones. |
| <Link id="m-meshrotationoffset" /><code>{"private Vector3 meshRotationOffset"}</code> | Local rotation given to the body mesh collider objects. Default (0, -90, 0). |
| <Link id="m-neckcollider" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{" neckCollider"}</code> | Capsule collider settings for the neck. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armcolliders-2" /><code><Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{"[] ArmColliders { get; }"}</code> | The capsule collider settings for the arm bones. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createbonecolliders" /><code>{"void CreateBoneColliders()"}</code> | Builds all bone colliders: arms, neck, palms and body. |
| <Link id="m-replacebone" /><code>{"void ReplaceBone(Transform newBone)"}</code> | Points whichever collider entry uses a bone with the same name at the given new bone. |
| <Link id="m-replacecollidergroup" /><code><Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" ReplaceColliderGroup(Transform transform)"}</code> | Adds or gets a `ColliderGroup` on the transform and swaps it into the controller's matching (same name) entry. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Runs `CreateBoneColliders` when the inspector's Update Collider Settings button is pressed. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addkinematicrigidbody" /><code>{"private void AddKinematicRigidbody(GameObject gameObject)"}</code> | Adds a kinematic Rigidbody to the object if `isAddingRigibodiesToColliders` is on. |
| <Link id="m-addnetworkentity" /><code>{"private void AddNetworkEntity(GameObject gameObject)"}</code> | Adds a `NetworkEntity` to the object if `isAddingNetworkEntitiesToColliders` is on. |
| <Link id="m-createarmcolliders" /><code>{"private void CreateArmColliders()"}</code> | Creates a capsule collider on every arm bone that is set. |
| <Link id="m-createbodycolliders" /><code>{"private void CreateBodyColliders()"}</code> | Creates convex mesh colliders on a `BoneMeshColliderObject` child of each body bone, one per mesh, removing extras. |
| <Link id="m-createboxcollider" /><code>{"private BoxCollider CreateBoxCollider("}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-boneboxcollider">{"CharacterCollisionControllerHelper.BoneBoxCollider"}</Link>{" boneBoxCollider)"}</code> | Adds or updates a box collider on a bone from its size and centre settings. |
| <Link id="m-createcapsulecollider" /><code>{"private CapsuleCollider CreateCapsuleCollider("}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{" boneCapsuleCollider)"}</code> | Adds or updates an X-axis capsule collider on a bone, centred back along the bone by half its height. |
| <Link id="m-createhandpalmcollider" /><code>{"private BoxCollider CreateHandPalmCollider("}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider">{"CharacterCollisionControllerHelper.HandPalmCollider"}</Link>{" handPalmCollider)"}</code> | Creates a palm box collider, mirroring the centre for the right hand. |
| <Link id="m-createneckcollider" /><code>{"private void CreateNeckCollider()"}</code> | Creates the neck capsule collider if one is set. |
| <Link id="m-createpalmcolliders" /><code>{"private void CreatePalmColliders()"}</code> | Creates the palm box collider for each hand. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the arm capsule colliders in the scene view. |

</details>
