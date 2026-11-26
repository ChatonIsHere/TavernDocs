---
title: "CharacterDummy"
description: "The visual character model: rig, animator, skin, clothes, eyes and LODs, used for players and customization previews."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterDummy

A **class** in `Root.Township`, `Alta.Character`.

The visual character model: rig, animator, skin, clothes, eyes and LODs, used for players and customization previews. Reached through a `CharacterDummyPointer`, such as `PlayerCustomizationHandler.CharacterDummy`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterDummy()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Backing field for `Animator`, the character's animator. |
| <Link id="m-bodytype" /><code>{"private "}<Link to="/game-api/types/alta-player/bodytypesettings">{"BodyTypeSettings"}</Link>{" bodyType"}</code> | Backing field for `BodyType`. |
| <Link id="m-clothes" /><code>{"private "}<Link to="/game-api/types/alta-player/clothessettings">{"ClothesSettings"}</Link>{" clothes"}</code> | Backing field for `Clothes`, which also shows and hides the head and body renderers. |
| <Link id="m-controllercollection" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" controllerCollection"}</code> | Backing field for `ControllerCollection`. |
| <Link id="m-cosmeticpacker" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" cosmeticPacker"}</code> | Backing field for `CosmeticPacker`. |
| <Link id="m-effectrenderers" /><code>{"private HashSet<Renderer> effectRenderers"}</code> | Renderers added with `AddEffectRenderer`, exposed as `EffectRenderers`. |
| <Link id="m-eyes" /><code>{"private "}<Link to="/game-api/types/alta-player/eyesettings">{"EyeSettings"}</Link>{" eyes"}</code> | Backing field for `Eyes`. |
| <Link id="m-fingertips" /><code>{"private "}<Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" fingerTips"}</code> | Backing field for `FingerTips`. |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | Backing field for `LodGroup`, the character's LOD group. |
| <Link id="m-mainrenderers" /><code>{"private HashSet<Renderer> mainRenderers"}</code> | The clothes renderers, exposed as `MainRenderers`. |
| <Link id="m-rigmap" /><code>{"private "}<Link to="/game-api/types/global-q-r/rigmap">{"RigMap"}</Link>{" rigMap"}</code> | Backing field for `RigMap`, which maps bone ids to transforms. |
| <Link id="m-root" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" root"}</code> | Bone id of the root bone, looked up in the rig map by `Root`. |
| <Link id="m-skin" /><code>{"private "}<Link to="/game-api/types/alta-player/skinsettings">{"SkinSettings"}</Link>{" skin"}</code> | Backing field for `Skin`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator-2" /><code>{"Animator Animator { get; }"}</code> | The character's animator. |
| <Link id="m-bodytype-2" /><code><Link to="/game-api/types/alta-player/bodytypesettings">{"BodyTypeSettings"}</Link>{" BodyType { get; }"}</code> | The body type settings. |
| <Link id="m-clothes-2" /><code><Link to="/game-api/types/alta-player/clothessettings">{"ClothesSettings"}</Link>{" Clothes { get; }"}</code> | The clothes settings, which own the body and head renderers. |
| <Link id="m-controllercollection-2" /><code><Link to="/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" ControllerCollection { get; }"}</code> | The character component controllers on this model. |
| <Link id="m-cosmeticpacker-2" /><code><Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" "}<Link to="/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" { get; }"}</code> | Packs cosmetic meshes for this model. |
| <Link id="m-effectrenderers-2" /><code>{"IEnumerable<Renderer> EffectRenderers { get; }"}</code> | Extra renderers added for effects. |
| <Link id="m-eyes-2" /><code><Link to="/game-api/types/alta-player/eyesettings">{"EyeSettings"}</Link>{" Eyes { get; }"}</code> | The eye settings; cleaned up when the model is destroyed. |
| <Link id="m-fingertips-2" /><code><Link to="/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" FingerTips { get; }"}</code> | Finger tip settings. |
| <Link id="m-isfirstperson" /><code>{"bool IsFirstPerson { get; private set; }"}</code> | Whether the model is in first person mode (head hidden). |
| <Link id="m-lodgroup-2" /><code>{"LODGroup LodGroup { get; }"}</code> | The model's LOD group. |
| <Link id="m-mainrenderers-2" /><code>{"IEnumerable<Renderer> MainRenderers { get; }"}</code> | The clothes renderers. |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; set; }"}</code> | The customization manager driving this model. |
| <Link id="m-renderers" /><code>{"List<Renderer> Renderers { get; }"}</code> | Renderers in the first LOD level. |
| <Link id="m-rigmap-2" /><code><Link to="/game-api/types/global-q-r/rigmap">{"RigMap"}</Link>{" "}<Link to="/game-api/types/global-q-r/rigmap">{"RigMap"}</Link>{" { get; }"}</code> | Map of the rig's bones. |
| <Link id="m-root-2" /><code>{"Transform Root { get; }"}</code> | The root bone transform. |
| <Link id="m-skin-2" /><code><Link to="/game-api/types/alta-player/skinsettings">{"SkinSettings"}</Link>{" Skin { get; }"}</code> | The skin settings. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addeffectrenderer" /><code>{"void AddEffectRenderer(Renderer renderer)"}</code> | Adds a renderer to the effect renderers list. |
| <Link id="m-setcharacterbodyvisibility" /><code>{"void SetCharacterBodyVisibility(bool isVisible)"}</code> | Shows or hides the body renderers. |
| <Link id="m-setcharacterheadvisibility" /><code>{"void SetCharacterHeadVisibility(bool isVisible)"}</code> | Shows or hides the head renderers. |
| <Link id="m-setfirstperson" /><code>{"void SetFirstPerson(bool isFirstPerson)"}</code> | Sets first person mode, hiding the head renderers when on. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Collects the clothes renderers as main renderers and the first LOD's renderers into `Renderers`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the eye settings. |
| <Link id="m-reducelod" /><code>{"private void ReduceLOD()"}</code> | Drops the top LOD level and hides its renderers, unless first person. Not called anywhere in this build. |

</details>

## Used in

Members of other types that take, return or hold a `CharacterDummy`:

[`PlayerCharacter.Dummy`](/game-api/types/alta-player/playercharacter#m-dummy-2), [`CosmeticPacker.dummy`](/game-api/types/alta-customization/cosmeticpacker#m-dummy), [`CosmeticPresetTrophy.Dummy`](/game-api/types/alta-customization/cosmeticpresettrophy#m-dummy), [`EquipmentCustomizationRoom.Dummy`](/game-api/types/alta-customization/equipmentcustomizationroom#m-dummy), [`ICustomizationHandler.CharacterDummy`](/game-api/types/alta-customization/icustomizationhandler#m-characterdummy), [`PlayerCustomizationHandler.CharacterDummy`](/game-api/types/alta-customization/playercustomizationhandler#m-characterdummy), [`LocalPlayerHeadRenderer.characterDummy`](/game-api/types/alta-customization/localplayerheadrenderer#m-characterdummy), [`CharacterDummyPointer.characterDummy`](/game-api/types/global-c-d/characterdummypointer#m-characterdummy), [`CharacterDummyPointer.CharacterDummy`](/game-api/types/global-c-d/characterdummypointer#m-characterdummy-2), [`CharacterDummySpawner.CharacterDummy`](/game-api/types/global-c-d/characterdummyspawner#m-characterdummy), [`CharacterDummySpawner.prefab`](/game-api/types/global-c-d/characterdummyspawner#m-prefab), [`ModellingScene.character`](/game-api/types/global-m-o/modellingscene#m-character), [`ModellingScene.Character`](/game-api/types/global-m-o/modellingscene#m-character-2).
