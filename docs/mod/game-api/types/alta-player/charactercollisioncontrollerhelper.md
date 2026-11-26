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
| <Link id="m-ctor" /><code>{"CharacterCollisionControllerHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-armcolliders" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{"[] armColliders"}</code> | <span className="api-desc">Backing field for `ArmColliders`.</span> |
| <Link id="m-handgrips" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{"[] handgrips"}</code> | <span className="api-desc">The two hand grips. Not used by this code.</span> |
| <Link id="m-handpalmcolliders" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider">{"CharacterCollisionControllerHelper.HandPalmCollider"}</Link>{"[] handPalmColliders"}</code> | <span className="api-desc">Box collider settings for the two palms.</span> |
| <Link id="m-isaddingnetworkentitiestocolliders" /><code>{"private bool isAddingNetworkEntitiesToColliders"}</code> | <span className="api-desc">Whether created colliders also get a `NetworkEntity`.</span> |
| <Link id="m-isaddingrigibodiestocolliders" /><code>{"private bool isAddingRigibodiesToColliders"}</code> | <span className="api-desc">Whether created colliders also get a kinematic Rigidbody.</span> |
| <Link id="m-isupdatingcollidersettings" /><code>{"private bool isUpdatingColliderSettings"}</code> | <span className="api-desc">Inspector button that rebuilds the colliders.</span> |
| <Link id="m-meshcolliders" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonemeshcollider">{"CharacterCollisionControllerHelper.BoneMeshCollider"}</Link>{"[] meshColliders"}</code> | <span className="api-desc">Mesh collider settings for the body bones.</span> |
| <Link id="m-meshrotationoffset" /><code>{"private Vector3 meshRotationOffset"}</code> | <span className="api-desc">Local rotation given to the body mesh collider objects. Default (0, -90, 0).</span> |
| <Link id="m-neckcollider" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{" neckCollider"}</code> | <span className="api-desc">Capsule collider settings for the neck.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-armcolliders-2" /><code><Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{"[] ArmColliders { get; }"}</code> | <span className="api-desc">The capsule collider settings for the arm bones.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createbonecolliders" /><code>{"void CreateBoneColliders()"}</code> | <span className="api-desc">Builds all bone colliders: arms, neck, palms and body.</span> |
| <Link id="m-replacebone" /><code>{"void ReplaceBone(Transform newBone)"}</code> | <span className="api-desc">Points whichever collider entry uses a bone with the same name at the given new bone.</span> |
| <Link id="m-replacecollidergroup" /><code><Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" ReplaceColliderGroup(Transform transform)"}</code> | <span className="api-desc">Adds or gets a `ColliderGroup` on the transform and swaps it into the controller's matching (same name) entry.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Runs `CreateBoneColliders` when the inspector's Update Collider Settings button is pressed.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addkinematicrigidbody" /><code>{"private void AddKinematicRigidbody(GameObject gameObject)"}</code> | <span className="api-desc">Adds a kinematic Rigidbody to the object if `isAddingRigibodiesToColliders` is on.</span> |
| <Link id="m-addnetworkentity" /><code>{"private void AddNetworkEntity(GameObject gameObject)"}</code> | <span className="api-desc">Adds a `NetworkEntity` to the object if `isAddingNetworkEntitiesToColliders` is on.</span> |
| <Link id="m-createarmcolliders" /><code>{"private void CreateArmColliders()"}</code> | <span className="api-desc">Creates a capsule collider on every arm bone that is set.</span> |
| <Link id="m-createbodycolliders" /><code>{"private void CreateBodyColliders()"}</code> | <span className="api-desc">Creates convex mesh colliders on a `BoneMeshColliderObject` child of each body bone, one per mesh, removing extras.</span> |
| <Link id="m-createboxcollider" /><code>{"private BoxCollider CreateBoxCollider("}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-boneboxcollider">{"CharacterCollisionControllerHelper.BoneBoxCollider"}</Link>{" boneBoxCollider)"}</code> | <span className="api-desc">Adds or updates a box collider on a bone from its size and centre settings.</span> |
| <Link id="m-createcapsulecollider" /><code>{"private CapsuleCollider CreateCapsuleCollider("}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{" boneCapsuleCollider)"}</code> | <span className="api-desc">Adds or updates an X-axis capsule collider on a bone, centred back along the bone by half its height.</span> |
| <Link id="m-createhandpalmcollider" /><code>{"private BoxCollider CreateHandPalmCollider("}<Link to="/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider">{"CharacterCollisionControllerHelper.HandPalmCollider"}</Link>{" handPalmCollider)"}</code> | <span className="api-desc">Creates a palm box collider, mirroring the centre for the right hand.</span> |
| <Link id="m-createneckcollider" /><code>{"private void CreateNeckCollider()"}</code> | <span className="api-desc">Creates the neck capsule collider if one is set.</span> |
| <Link id="m-createpalmcolliders" /><code>{"private void CreatePalmColliders()"}</code> | <span className="api-desc">Creates the palm box collider for each hand.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the arm capsule colliders in the scene view.</span> |

</details>
