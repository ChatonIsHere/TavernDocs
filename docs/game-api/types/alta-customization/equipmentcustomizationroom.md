---
title: "EquipmentCustomizationRoom"
description: "class EquipmentCustomizationRoom in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentCustomizationRoom

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentCustomizationRoom()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bodytransform" /><code>{"private Transform bodyTransform"}</code> |  |
| <Link id="m-boundarytransform" /><code>{"private Transform boundaryTransform"}</code> |  |
| <Link id="m-changechecker" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformdeltachangechecker">{"TransformDeltaChangeChecker"}</Link>{" changeChecker"}</code> |  |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> |  |
| <Link id="m-dummypointer" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummyPointer"}</code> |  |
| <Link id="m-head" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" head"}</code> |  |
| <Link id="m-linkedplayercharacter" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" linkedPlayerCharacter"}</code> |  |
| <Link id="m-playerleftboundarychecker" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" playerLeftBoundaryChecker"}</code> |  |
| <Link id="m-posecheckingdelay" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" poseCheckingDelay"}</code> |  |
| <Link id="m-poser" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterrigposer">{"CharacterRigPoser"}</Link>{" poser"}</code> |  |
| <Link id="m-roomanimator" /><code>{"private "}<Link to="/game-api/types/global-e-h/equipmentroomanimator">{"EquipmentRoomAnimator"}</Link>{" roomAnimator"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dummy" /><code><Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" Dummy { get; private set; }"}</code> |  |
| <Link id="m-dummyhead" /><code>{"Transform DummyHead { get; private set; }"}</code> |  |
| <Link id="m-player" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/equipmentstatesettings">{"EquipmentStateSettings"}</Link>{" Settings { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-playerleftboundary" /><code>{"event Action PlayerLeftBoundary"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-linktoplayer" /><code>{"void LinkToPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-unlink" /><code>{"void Unlink()"}</code> |  |
| <Link id="m-attempttocopypose" /><code>{"private void AttemptToCopyPose()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkifoutsideboundary" /><code>{"private IEnumerator CheckIfOutsideBoundary() (iterator)"}</code> |  |
| <Link id="m-delayposechecking" /><code>{"private IEnumerator DelayPoseChecking() (iterator)"}</code> |  |
| <Link id="m-destroyroom" /><code>{"private void DestroyRoom()"}</code> |  |
| <Link id="m-isvaliddummybone" /><code>{"private bool IsValidDummyBone(Transform bone)"}</code> |  |
| <Link id="m-setupposecopying" /><code>{"private void SetupPoseCopying()"}</code> |  |

## Used in

Members of other types that take, return or hold a `EquipmentCustomizationRoom`:

[`EquipmentState.CustomizationRoom`](/game-api/types/alta-player/equipmentstate#m-customizationroom), [`EquipmentStateSettings.customizationRoom`](/game-api/types/alta-player/equipmentstatesettings#m-customizationroom), [`EquipmentStateSettings.CustomizationRoom`](/game-api/types/alta-player/equipmentstatesettings#m-customizationroom-2).
