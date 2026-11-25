---
title: "CharacterCollisionControllerHelper"
description: "class CharacterCollisionControllerHelper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterCollisionControllerHelper

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<CharacterCollisionController>`](/game-api/types/alta-player/charactercomponenthelper-t)
- **Nested types** [`BoneBoxCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-boneboxcollider), [`BoneCapsuleCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider), [`BoneCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecollider), [`BoneMeshCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonemeshcollider), [`HandPalmCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CharacterCollisionControllerHelper()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-armcolliders" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{"[] armColliders"}</code> |
| <Link id="m-handgrips" /><code>{"private "}<Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{"[] handgrips"}</code> |
| <Link id="m-handpalmcolliders" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider">{"CharacterCollisionControllerHelper.HandPalmCollider"}</Link>{"[] handPalmColliders"}</code> |
| <Link id="m-isaddingnetworkentitiestocolliders" /><code>{"private bool isAddingNetworkEntitiesToColliders"}</code> |
| <Link id="m-isaddingrigibodiestocolliders" /><code>{"private bool isAddingRigibodiesToColliders"}</code> |
| <Link id="m-isupdatingcollidersettings" /><code>{"private bool isUpdatingColliderSettings"}</code> |
| <Link id="m-meshcolliders" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercollisioncontrollerhelper-bonemeshcollider">{"CharacterCollisionControllerHelper.BoneMeshCollider"}</Link>{"[] meshColliders"}</code> |
| <Link id="m-meshrotationoffset" /><code>{"private Vector3 meshRotationOffset"}</code> |
| <Link id="m-neckcollider" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{" neckCollider"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-armcolliders-2" /><code><Link to="/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{"[] ArmColliders { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-createbonecolliders" /><code>{"void CreateBoneColliders()"}</code> |
| <Link id="m-replacebone" /><code>{"void ReplaceBone(Transform newBone)"}</code> |
| <Link id="m-replacecollidergroup" /><code><Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" ReplaceColliderGroup(Transform transform)"}</code> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addkinematicrigidbody" /><code>{"private void AddKinematicRigidbody(GameObject gameObject)"}</code> |
| <Link id="m-addnetworkentity" /><code>{"private void AddNetworkEntity(GameObject gameObject)"}</code> |
| <Link id="m-createarmcolliders" /><code>{"private void CreateArmColliders()"}</code> |
| <Link id="m-createbodycolliders" /><code>{"private void CreateBodyColliders()"}</code> |
| <Link id="m-createboxcollider" /><code>{"private BoxCollider CreateBoxCollider("}<Link to="/game-api/types/alta-player/charactercollisioncontrollerhelper-boneboxcollider">{"CharacterCollisionControllerHelper.BoneBoxCollider"}</Link>{" boneBoxCollider)"}</code> |
| <Link id="m-createcapsulecollider" /><code>{"private CapsuleCollider CreateCapsuleCollider("}<Link to="/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider">{"CharacterCollisionControllerHelper.BoneCapsuleCollider"}</Link>{" boneCapsuleCollider)"}</code> |
| <Link id="m-createhandpalmcollider" /><code>{"private BoxCollider CreateHandPalmCollider("}<Link to="/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider">{"CharacterCollisionControllerHelper.HandPalmCollider"}</Link>{" handPalmCollider)"}</code> |
| <Link id="m-createneckcollider" /><code>{"private void CreateNeckCollider()"}</code> |
| <Link id="m-createpalmcolliders" /><code>{"private void CreatePalmColliders()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |

</details>
