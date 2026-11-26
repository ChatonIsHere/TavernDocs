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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterDummy()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Backing field for `Animator`, the character's animator.</span> |
| <Link id="m-bodytype" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/bodytypesettings">{"BodyTypeSettings"}</Link>{" bodyType"}</code> | <span className="api-desc">Backing field for `BodyType`.</span> |
| <Link id="m-clothes" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/clothessettings">{"ClothesSettings"}</Link>{" clothes"}</code> | <span className="api-desc">Backing field for `Clothes`, which also shows and hides the head and body renderers.</span> |
| <Link id="m-controllercollection" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" controllerCollection"}</code> | <span className="api-desc">Backing field for `ControllerCollection`.</span> |
| <Link id="m-cosmeticpacker" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" cosmeticPacker"}</code> | <span className="api-desc">Backing field for `CosmeticPacker`.</span> |
| <Link id="m-effectrenderers" /><code>{"private HashSet<Renderer> effectRenderers"}</code> | <span className="api-desc">Renderers added with `AddEffectRenderer`, exposed as `EffectRenderers`.</span> |
| <Link id="m-eyes" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/eyesettings">{"EyeSettings"}</Link>{" eyes"}</code> | <span className="api-desc">Backing field for `Eyes`.</span> |
| <Link id="m-fingertips" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" fingerTips"}</code> | <span className="api-desc">Backing field for `FingerTips`.</span> |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | <span className="api-desc">Backing field for `LodGroup`, the character's LOD group.</span> |
| <Link id="m-mainrenderers" /><code>{"private HashSet<Renderer> mainRenderers"}</code> | <span className="api-desc">The clothes renderers, exposed as `MainRenderers`.</span> |
| <Link id="m-rigmap" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/rigmap">{"RigMap"}</Link>{" rigMap"}</code> | <span className="api-desc">Backing field for `RigMap`, which maps bone ids to transforms.</span> |
| <Link id="m-root" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" root"}</code> | <span className="api-desc">Bone id of the root bone, looked up in the rig map by `Root`.</span> |
| <Link id="m-skin" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/skinsettings">{"SkinSettings"}</Link>{" skin"}</code> | <span className="api-desc">Backing field for `Skin`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator-2" /><code>{"Animator Animator { get; }"}</code> | <span className="api-desc">The character's animator.</span> |
| <Link id="m-bodytype-2" /><code><Link to="/mod/game-api/types/alta-player/bodytypesettings">{"BodyTypeSettings"}</Link>{" BodyType { get; }"}</code> | <span className="api-desc">The body type settings.</span> |
| <Link id="m-clothes-2" /><code><Link to="/mod/game-api/types/alta-player/clothessettings">{"ClothesSettings"}</Link>{" Clothes { get; }"}</code> | <span className="api-desc">The clothes settings, which own the body and head renderers.</span> |
| <Link id="m-controllercollection-2" /><code><Link to="/mod/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" ControllerCollection { get; }"}</code> | <span className="api-desc">The character component controllers on this model.</span> |
| <Link id="m-cosmeticpacker-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" { get; }"}</code> | <span className="api-desc">Packs cosmetic meshes for this model.</span> |
| <Link id="m-effectrenderers-2" /><code>{"IEnumerable<Renderer> EffectRenderers { get; }"}</code> | <span className="api-desc">Extra renderers added for effects.</span> |
| <Link id="m-eyes-2" /><code><Link to="/mod/game-api/types/alta-player/eyesettings">{"EyeSettings"}</Link>{" Eyes { get; }"}</code> | <span className="api-desc">The eye settings; cleaned up when the model is destroyed.</span> |
| <Link id="m-fingertips-2" /><code><Link to="/mod/game-api/types/global-e-h/fingertipsettings">{"FingerTipSettings"}</Link>{" FingerTips { get; }"}</code> | <span className="api-desc">Finger tip settings.</span> |
| <Link id="m-isfirstperson" /><code>{"bool IsFirstPerson { get; private set; }"}</code> | <span className="api-desc">Whether the model is in first person mode (head hidden).</span> |
| <Link id="m-lodgroup-2" /><code>{"LODGroup LodGroup { get; }"}</code> | <span className="api-desc">The model's LOD group.</span> |
| <Link id="m-mainrenderers-2" /><code>{"IEnumerable<Renderer> MainRenderers { get; }"}</code> | <span className="api-desc">The clothes renderers.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; set; }"}</code> | <span className="api-desc">The customization manager driving this model.</span> |
| <Link id="m-renderers" /><code>{"List<Renderer> Renderers { get; }"}</code> | <span className="api-desc">Renderers in the first LOD level.</span> |
| <Link id="m-rigmap-2" /><code><Link to="/mod/game-api/types/global-q-r/rigmap">{"RigMap"}</Link>{" "}<Link to="/mod/game-api/types/global-q-r/rigmap">{"RigMap"}</Link>{" { get; }"}</code> | <span className="api-desc">Map of the rig's bones.</span> |
| <Link id="m-root-2" /><code>{"Transform Root { get; }"}</code> | <span className="api-desc">The root bone transform.</span> |
| <Link id="m-skin-2" /><code><Link to="/mod/game-api/types/alta-player/skinsettings">{"SkinSettings"}</Link>{" Skin { get; }"}</code> | <span className="api-desc">The skin settings.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addeffectrenderer" /><code>{"void AddEffectRenderer(Renderer renderer)"}</code> | <span className="api-desc">Adds a renderer to the effect renderers list.</span> |
| <Link id="m-setcharacterbodyvisibility" /><code>{"void SetCharacterBodyVisibility(bool isVisible)"}</code> | <span className="api-desc">Shows or hides the body renderers.</span> |
| <Link id="m-setcharacterheadvisibility" /><code>{"void SetCharacterHeadVisibility(bool isVisible)"}</code> | <span className="api-desc">Shows or hides the head renderers.</span> |
| <Link id="m-setfirstperson" /><code>{"void SetFirstPerson(bool isFirstPerson)"}</code> | <span className="api-desc">Sets first person mode, hiding the head renderers when on.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Collects the clothes renderers as main renderers and the first LOD's renderers into `Renderers`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the eye settings.</span> |
| <Link id="m-reducelod" /><code>{"private void ReduceLOD()"}</code> | <span className="api-desc">Drops the top LOD level and hides its renderers, unless first person. Not called anywhere in this build.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CharacterDummy`:

<div className="api-used-in">

[`PlayerCharacter.Dummy`](/mod/game-api/types/alta-player/playercharacter#m-dummy-2), [`CosmeticPacker.dummy`](/mod/game-api/types/alta-customization/cosmeticpacker#m-dummy), [`CosmeticPresetTrophy.Dummy`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-dummy), [`EquipmentCustomizationRoom.Dummy`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-dummy), [`ICustomizationHandler.CharacterDummy`](/mod/game-api/types/alta-customization/icustomizationhandler#m-characterdummy), [`PlayerCustomizationHandler.CharacterDummy`](/mod/game-api/types/alta-customization/playercustomizationhandler#m-characterdummy), [`LocalPlayerHeadRenderer.characterDummy`](/mod/game-api/types/alta-customization/localplayerheadrenderer#m-characterdummy), [`CharacterDummyPointer.characterDummy`](/mod/game-api/types/global-c-d/characterdummypointer#m-characterdummy), [`CharacterDummyPointer.CharacterDummy`](/mod/game-api/types/global-c-d/characterdummypointer#m-characterdummy-2), [`CharacterDummySpawner.CharacterDummy`](/mod/game-api/types/global-c-d/characterdummyspawner#m-characterdummy), [`CharacterDummySpawner.prefab`](/mod/game-api/types/global-c-d/characterdummyspawner#m-prefab), [`ModellingScene.character`](/mod/game-api/types/global-m-o/modellingscene#m-character), [`ModellingScene.Character`](/mod/game-api/types/global-m-o/modellingscene#m-character-2).

</div>
