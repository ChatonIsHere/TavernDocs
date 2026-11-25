---
title: "PlayerSpecialEffectsController"
description: "Visual effects on a player character: teleport and streaming trails, combat wave, shell effects for combat, stat effects and spirit mode, the death..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerSpecialEffectsController

A **class** in `Root.Township`, no namespace.

Visual effects on a player character: teleport and streaming trails, combat wave, shell effects for combat, stat effects and spirit mode, the death animation and level up effects. A component on the player character; most of it does nothing on headless servers.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable), [`ICharacterDummySpecialEffects`](/game-api/types/global-i-l/icharacterdummyspecialeffects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerSpecialEffectsController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-contrast" /><code>{"float Contrast"}</code> | Colour contrast pushed to post processing during the death animation (local player). |
| <Link id="m-embersprogress" /><code>{"float EmbersProgress"}</code> | Death animation progress of the ash material. |
| <Link id="m-heatwaveprogress" /><code>{"float HeatWaveProgress"}</code> | Death animation progress of the second shell burst. |
| <Link id="m-isdisablingshadows" /><code>{"bool IsDisablingShadows"}</code> | Death animation flag: turn off the body's shadows. |
| <Link id="m-isincreasingfog" /><code>{"bool IsIncreasingFog"}</code> | Death animation flag: apply the dead atmosphere fog. |
| <Link id="m-isusingdeathvisual" /><code>{"bool IsUsingDeathVisual"}</code> | Death animation flag: spawn the death particles. |
| <Link id="m-isusingprevisual" /><code>{"bool IsUsingPreVisual"}</code> | Death animation flag: spawn the pre-death particles. |
| <Link id="m-shellbreakprogress" /><code>{"float ShellBreakProgress"}</code> | Death animation progress of the first shell burst. |
| <Link id="m-temperature" /><code>{"float Temperature"}</code> | Colour temperature pushed to post processing during the death animation (local player). |
| <Link id="m-tint" /><code>{"float Tint"}</code> | Colour tint pushed to post processing during the death animation (local player). |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> |  |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> |  |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |  |
| <Link id="m-activestreamingtrail" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportertraillerper">{"TeleporterTrailLerper"}</Link>{" activeStreamingTrail"}</code> |  |
| <Link id="m-activeteleporttrail" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportertraillerper">{"TeleporterTrailLerper"}</Link>{" activeTeleportTrail"}</code> |  |
| <Link id="m-basedissolvestrength" /><code>{"private float baseDissolveStrength"}</code> |  |
| <Link id="m-baseramp1" /><code>{"private Texture2D baseRamp1"}</code> |  |
| <Link id="m-baseramp2" /><code>{"private Texture2D baseRamp2"}</code> |  |
| <Link id="m-combatshellmaterialsample" /><code>{"private Material combatShellMaterialSample"}</code> |  |
| <Link id="m-controllerstodisableondeath" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercomponentcontroller">{"CharacterComponentController"}</Link>{"[] controllersToDisableOnDeath"}</code> |  |
| <Link id="m-deadatmosphereset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" deadAtmosphereSet"}</code> |  |
| <Link id="m-deathanimationsettings" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" deathAnimationSettings"}</code> |  |
| <Link id="m-deathanimator" /><code>{"private Animation deathAnimator"}</code> |  |
| <Link id="m-destroyondeath" /><code>{"private "}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"[] destroyOnDeath"}</code> |  |
| <Link id="m-die" /><code>{"private static readonly int Die"}</code> |  |
| <Link id="m-effectonlevelup" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" EffectOnLevelUp"}</code> |  |
| <Link id="m-enterspiritmodecurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" enterSpiritModeCurve"}</code> |  |
| <Link id="m-exitspiritmodecurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" exitSpiritModeCurve"}</code> |  |
| <Link id="m-hasrolledinfog" /><code>{"private bool hasRolledInFog"}</code> |  |
| <Link id="m-hasusedprevisual" /><code>{"private bool hasUsedPreVisual"}</code> |  |
| <Link id="m-hasusedvisual" /><code>{"private bool hasUsedVisual"}</code> |  |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> |  |
| <Link id="m-leveluppooledeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" levelUpPooledEffect"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-materialmap" /><code>{"private Dictionary<Renderer, Material> materialMap"}</code> |  |
| <Link id="m-minimumdistancefortrail" /><code>{"private float minimumDistanceForTrail"}</code> |  |
| <Link id="m-particlesorigin" /><code>{"private Transform particlesOrigin"}</code> |  |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> |  |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> |  |
| <Link id="m-randomparticles" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" randomParticles"}</code> |  |
| <Link id="m-shellmaterial" /><code>{"private Material shellMaterial"}</code> |  |
| <Link id="m-spiritmodeanimationcoroutine" /><code>{"private Coroutine spiritModeAnimationCoroutine"}</code> |  |
| <Link id="m-spiritmodeshellmaterialsample" /><code>{"private Material spiritModeShellMaterialSample"}</code> |  |
| <Link id="m-statbarpingduration" /><code>{"private float statBarPingDuration"}</code> |  |
| <Link id="m-statbars" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarvisibilitygroup">{"StatBarVisibilityGroup"}</Link>{"[] statBars"}</code> |  |
| <Link id="m-stateffectshellmaterialsample" /><code>{"private Material statEffectShellMaterialSample"}</code> |  |
| <Link id="m-streaminglocomotiontrail" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" streamingLocomotionTrail"}</code> |  |
| <Link id="m-streamingtrailplaystatus" /><code>{"private "}<Link to="/game-api/types/global-e-h/effectplaystatus">{"EffectPlayStatus"}</Link>{" streamingTrailPlayStatus"}</code> |  |
| <Link id="m-teleportertrail" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleporterTrail"}</code> |  |
| <Link id="m-uniquematerials" /><code>{"private Dictionary<Material, Material> uniqueMaterials"}</code> |  |
| <Link id="m-wavecurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" waveCurve"}</code> |  |
| <Link id="m-wavematerial" /><code>{"private Material waveMaterial"}</code> |  |
| <Link id="m-waverenderer" /><code>{"private MeshRenderer waveRenderer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combatshellanimator" /><code><Link to="/game-api/types/alta-player/combatshellanimator">{"CombatShellAnimator"}</Link>{" "}<Link to="/game-api/types/alta-player/combatshellanimator">{"CombatShellAnimator"}</Link>{" { get; private set; }"}</code> | Shell effect used in combat; also the shell used by the death animation. |
| <Link id="m-spiritmodeshellanimator" /><code><Link to="/game-api/types/global-s/spiritmodeshellanimator">{"SpiritModeShellAnimator"}</Link>{" "}<Link to="/game-api/types/global-s/spiritmodeshellanimator">{"SpiritModeShellAnimator"}</Link>{" { get; private set; }"}</code> | Shell effect for spirit mode. |
| <Link id="m-stateffectshellanimator" /><code><Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" "}<Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" { get; private set; }"}</code> | Shell effect for stat effects. |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animatewave" /><code>{"void AnimateWave()"}</code> | Plays the combat wave effect around the player. |
| <Link id="m-checkinitialize" /><code>{"void CheckInitialize(SkinnedMeshRenderer[] opaqueClothes, SkinnedMeshRenderer[] headOpaqueClothes)"}</code> | Sets up the three shell animators with the character's clothes once. |
| <Link id="m-editortrail" /><code>{"void EditorTrail(float distance)"}</code> | Starts or refreshes a teleport trail if the move was longer than the minimum trail distance. |
| <Link id="m-increasefog" /><code>{"void IncreaseFog()"}</code> | For the local player, applies the dead atmosphere set. |
| <Link id="m-pingstatbars" /><code>{"void PingStatBars()"}</code> | Briefly shows the player's stat bars. |
| <Link id="m-playenterspiritmodeeffect" /><code>{"void PlayEnterSpiritModeEffect()"}</code> | Plays the shell effect for entering spirit mode. |
| <Link id="m-playexitspiritmodeeffect" /><code>{"void PlayExitSpiritModeEffect()"}</code> | Plays the shell effect for leaving spirit mode. |
| <Link id="m-playrandomcustomizationpartsparticles" /><code>{"void PlayRandomCustomizationPartsParticles(Transform target)"}</code> | Spawns the customization particles at a transform. |
| <Link id="m-remotetrail" /><code>{"void RemoteTrail(Vector3 from, bool isUsingTrail)"}</code> | Starts, refreshes or ends the teleport trail from a position. |
| <Link id="m-setactivestateforondeathcontrollers" /><code>{"void SetActiveStateForOnDeathControllers(bool isActive)"}</code> | Turns on or off the character controllers listed to stop on death. |
| <Link id="m-setmaterial" /><code>{"static void SetMaterial(Material original, Material newMaterial)"}</code> | Copies colour and main texture from one material to another, using a plain colour texture if there is none. |
| <Link id="m-startdeathanimation" /><code><Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" StartDeathAnimation()"}</code> | Starts the death animation: body turns to ash, shell bursts and, for the local player, colour grading changes. |
| <Link id="m-streamingtrail" /><code>{"void StreamingTrail(bool isEnabled)"}</code> | Does nothing in this build. |
| <Link id="m-animatewavecoroutine" /><code>{"private IEnumerator AnimateWaveCoroutine() (iterator)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-cleantrail" /><code>{"private void CleanTrail("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-deactivatetrail" /><code>{"private void DeactivateTrail("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" oldTrail)"}</code> |  |
| <Link id="m-deathanimation" /><code>{"private IEnumerator DeathAnimation() (iterator)"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController postProcessController)"}</code> | Receives the post process controller through dependency injection. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-respositiontrail" /><code>{"private void RespositionTrail("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-setstreamingtrail" /><code>{"private void SetStreamingTrail(bool isEnabled)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerSpecialEffectsController`:

[`PlayerCharacter.specialEffectsController`](/game-api/types/alta-player/playercharacter#m-specialeffectscontroller), [`PlayerCharacter.SpecialEffectsController`](/game-api/types/alta-player/playercharacter#m-specialeffectscontroller-2).
