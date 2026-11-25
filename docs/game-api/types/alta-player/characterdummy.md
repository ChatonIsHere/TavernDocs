---
title: "CharacterDummy"
description: "class CharacterDummy in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterDummy

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterDummy()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> |  |
| <Link id="m-bodytype" /><code>{"private "}<Link to="/game-api/types/alta-player/bodytypesettings">{"BodyTypeSettings"}</Link>{" bodyType"}</code> |  |
| <Link id="m-clothes" /><code>{"private "}<Link to="/game-api/types/alta-player/clothessettings">{"ClothesSettings"}</Link>{" clothes"}</code> |  |
| <Link id="m-controllercollection" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" controllerCollection"}</code> |  |
| <Link id="m-cosmeticpacker" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" cosmeticPacker"}</code> |  |
| <Link id="m-effectrenderers" /><code>{"private HashSet<Renderer> effectRenderers"}</code> |  |
| <Link id="m-eyes" /><code>{"private "}<Link to="/game-api/types/alta-player/eyesettings">{"EyeSettings"}</Link>{" eyes"}</code> |  |
| <Link id="m-fingertips" /><code>{"private "}<Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" fingerTips"}</code> |  |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> |  |
| <Link id="m-mainrenderers" /><code>{"private HashSet<Renderer> mainRenderers"}</code> |  |
| <Link id="m-rigmap" /><code>{"private "}<Link to="/game-api/types/global-q-r/rigmap">{"RigMap"}</Link>{" rigMap"}</code> |  |
| <Link id="m-root" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" root"}</code> |  |
| <Link id="m-skin" /><code>{"private "}<Link to="/game-api/types/alta-player/skinsettings">{"SkinSettings"}</Link>{" skin"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator-2" /><code>{"Animator Animator { get; }"}</code> |  |
| <Link id="m-bodytype-2" /><code><Link to="/game-api/types/alta-player/bodytypesettings">{"BodyTypeSettings"}</Link>{" BodyType { get; }"}</code> |  |
| <Link id="m-clothes-2" /><code><Link to="/game-api/types/alta-player/clothessettings">{"ClothesSettings"}</Link>{" Clothes { get; }"}</code> |  |
| <Link id="m-controllercollection-2" /><code><Link to="/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" ControllerCollection { get; }"}</code> |  |
| <Link id="m-cosmeticpacker-2" /><code><Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" "}<Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" { get; }"}</code> |  |
| <Link id="m-effectrenderers-2" /><code>{"IEnumerable<Renderer> EffectRenderers { get; }"}</code> |  |
| <Link id="m-eyes-2" /><code><Link to="/game-api/types/alta-player/eyesettings">{"EyeSettings"}</Link>{" Eyes { get; }"}</code> |  |
| <Link id="m-fingertips-2" /><code><Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" FingerTips { get; }"}</code> |  |
| <Link id="m-isfirstperson" /><code>{"bool IsFirstPerson { get; private set; }"}</code> |  |
| <Link id="m-lodgroup-2" /><code>{"LODGroup LodGroup { get; }"}</code> |  |
| <Link id="m-mainrenderers-2" /><code>{"IEnumerable<Renderer> MainRenderers { get; }"}</code> |  |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; set; }"}</code> |  |
| <Link id="m-renderers" /><code>{"List<Renderer> Renderers { get; }"}</code> |  |
| <Link id="m-rigmap-2" /><code><Link to="/game-api/types/global-q-r/rigmap">{"RigMap"}</Link>{" "}<Link to="/game-api/types/global-q-r/rigmap">{"RigMap"}</Link>{" { get; }"}</code> |  |
| <Link id="m-root-2" /><code>{"Transform Root { get; }"}</code> |  |
| <Link id="m-skin-2" /><code><Link to="/game-api/types/alta-player/skinsettings">{"SkinSettings"}</Link>{" Skin { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addeffectrenderer" /><code>{"void AddEffectRenderer(Renderer renderer)"}</code> |  |
| <Link id="m-setcharacterbodyvisibility" /><code>{"void SetCharacterBodyVisibility(bool isVisible)"}</code> |  |
| <Link id="m-setcharacterheadvisibility" /><code>{"void SetCharacterHeadVisibility(bool isVisible)"}</code> |  |
| <Link id="m-setfirstperson" /><code>{"void SetFirstPerson(bool isFirstPerson)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-reducelod" /><code>{"private void ReduceLOD()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CharacterDummy`:

[`PlayerCharacter.Dummy`](/game-api/types/alta-player/playercharacter#m-dummy-2), [`CosmeticPacker.dummy`](/game-api/types/alta-customization/cosmeticpacker#m-dummy), [`CosmeticPresetTrophy.Dummy`](/game-api/types/alta-customization/cosmeticpresettrophy#m-dummy), [`EquipmentCustomizationRoom.Dummy`](/game-api/types/alta-customization/equipmentcustomizationroom#m-dummy), [`ICustomizationHandler.CharacterDummy`](/game-api/types/alta-customization/icustomizationhandler#m-characterdummy), [`PlayerCustomizationHandler.CharacterDummy`](/game-api/types/alta-customization/playercustomizationhandler#m-characterdummy), [`LocalPlayerHeadRenderer.characterDummy`](/game-api/types/alta-customization/localplayerheadrenderer#m-characterdummy), [`CharacterDummyPointer.characterDummy`](/game-api/types/global-c-d/characterdummypointer#m-characterdummy), [`CharacterDummyPointer.CharacterDummy`](/game-api/types/global-c-d/characterdummypointer#m-characterdummy-2), [`CharacterDummySpawner.CharacterDummy`](/game-api/types/global-c-d/characterdummyspawner#m-characterdummy), [`CharacterDummySpawner.prefab`](/game-api/types/global-c-d/characterdummyspawner#m-prefab), [`ModellingScene.character`](/game-api/types/global-m-o/modellingscene#m-character), [`ModellingScene.Character`](/game-api/types/global-m-o/modellingscene#m-character-2).
