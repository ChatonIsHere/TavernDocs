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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerSpecialEffectsController()"}</code> |

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

<details>
<summary>43 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> | Shader property ID for `_Color`. |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> | Shader property ID for `_MainTex`. |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property ID for `_Progress`, used by the wave, shell and ashes materials. |
| <Link id="m-activestreamingtrail" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportertraillerper">{"TeleporterTrailLerper"}</Link>{" activeStreamingTrail"}</code> | The pooled trail shown while the player is streaming, or null. |
| <Link id="m-activeteleporttrail" /><code>{"private "}<Link to="/game-api/types/global-t-x/teleportertraillerper">{"TeleporterTrailLerper"}</Link>{" activeTeleportTrail"}</code> | The pooled trail currently left by a teleport, or null. |
| <Link id="m-basedissolvestrength" /><code>{"private float baseDissolveStrength"}</code> | Unused field. |
| <Link id="m-baseramp1" /><code>{"private Texture2D baseRamp1"}</code> | Unused field. |
| <Link id="m-baseramp2" /><code>{"private Texture2D baseRamp2"}</code> | Unused field. |
| <Link id="m-combatshellmaterialsample" /><code>{"private Material combatShellMaterialSample"}</code> | Material the combat shell animator copies for its shell. |
| <Link id="m-controllerstodisableondeath" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercomponentcontroller">{"CharacterComponentController"}</Link>{"[] controllersToDisableOnDeath"}</code> | Character controllers that `SetActiveStateForOnDeathControllers` turns on or off. |
| <Link id="m-deadatmosphereset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" deadAtmosphereSet"}</code> | Atmosphere set loaded by `IncreaseFog` for the local player when dying. |
| <Link id="m-deathanimationsettings" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" deathAnimationSettings"}</code> | Ashes material, burst shell settings and pre-death and death visuals used by the death animation. |
| <Link id="m-deathanimator" /><code>{"private Animation deathAnimator"}</code> | Legacy `Animation` played at the start of the death animation; it animates the public progress fields. |
| <Link id="m-destroyondeath" /><code>{"private "}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"[] destroyOnDeath"}</code> | Dock visuals cleared when the death animation starts. |
| <Link id="m-die" /><code>{"private static readonly int Die"}</code> | Animator hash for a `Die` parameter. Not used in this class. |
| <Link id="m-effectonlevelup" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" EffectOnLevelUp"}</code> | Serialized event meant for level-up. Not used in this class. |
| <Link id="m-enterspiritmodecurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" enterSpiritModeCurve"}</code> | Curve used by `PlayEnterSpiritModeEffect`. |
| <Link id="m-exitspiritmodecurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" exitSpiritModeCurve"}</code> | Curve used by `PlayExitSpiritModeEffect`. |
| <Link id="m-hasrolledinfog" /><code>{"private bool hasRolledInFog"}</code> | Set once the death animation has called `IncreaseFog`, so it only happens once. |
| <Link id="m-hasusedprevisual" /><code>{"private bool hasUsedPreVisual"}</code> | Set once the pre-death visual has spawned during the death animation. |
| <Link id="m-hasusedvisual" /><code>{"private bool hasUsedVisual"}</code> | Set once the death visual has spawned during the death animation. |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | Set by `CheckInitialize` so the shell animators are only initialized once. |
| <Link id="m-leveluppooledeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" levelUpPooledEffect"}</code> | Pooled effect meant for level-up. Not used in this class. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-materialmap" /><code>{"private Dictionary<Renderer, Material> materialMap"}</code> | Remembers each main renderer's original material when the death animation swaps it for ashes. |
| <Link id="m-minimumdistancefortrail" /><code>{"private float minimumDistanceForTrail"}</code> | Shortest move, in metres, for which `EditorTrail` spawns a teleport trail. |
| <Link id="m-particlesorigin" /><code>{"private Transform particlesOrigin"}</code> | Transform the pre-death and death visuals spawn at and attach to. |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> | The player character this controller belongs to. |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> | Injected post-processing controller the death animation drives for the local player. |
| <Link id="m-randomparticles" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" randomParticles"}</code> | Pooled particles spawned by `PlayRandomCustomizationPartsParticles`. |
| <Link id="m-shellmaterial" /><code>{"private Material shellMaterial"}</code> | Unused field; the death animation uses a local copy from the combat shell animator. |
| <Link id="m-spiritmodeanimationcoroutine" /><code>{"private Coroutine spiritModeAnimationCoroutine"}</code> | Spirit-mode coroutine to stop before playing a new one. Never assigned in this class. |
| <Link id="m-spiritmodeshellmaterialsample" /><code>{"private Material spiritModeShellMaterialSample"}</code> | Material the spirit-mode shell animator copies for its shell. |
| <Link id="m-statbarpingduration" /><code>{"private float statBarPingDuration"}</code> | How long, in seconds, `PingStatBars` shows the stat bars. |
| <Link id="m-statbars" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarvisibilitygroup">{"StatBarVisibilityGroup"}</Link>{"[] statBars"}</code> | Stat bar groups shown by `PingStatBars`. |
| <Link id="m-stateffectshellmaterialsample" /><code>{"private Material statEffectShellMaterialSample"}</code> | Material the stat-effect shell animator copies for its shell. |
| <Link id="m-streaminglocomotiontrail" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" streamingLocomotionTrail"}</code> | Pooled trail definition used while the player is streaming. |
| <Link id="m-streamingtrailplaystatus" /><code>{"private "}<Link to="/game-api/types/global-e-h/effectplaystatus">{"EffectPlayStatus"}</Link>{" streamingTrailPlayStatus"}</code> | Play status given to new streaming trails; visuals are disabled for the local player. |
| <Link id="m-teleportertrail" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" teleporterTrail"}</code> | Pooled trail definition left behind when a player teleports. |
| <Link id="m-uniquematerials" /><code>{"private Dictionary<Material, Material> uniqueMaterials"}</code> | Unused field; the death animation keeps its own local map of original to ashes materials. |
| <Link id="m-wavecurve" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" waveCurve"}</code> | Curve and duration for the combat wave animation. |
| <Link id="m-wavematerial" /><code>{"private Material waveMaterial"}</code> | Per-instance copy of the wave renderer's material, made on the first wave. |
| <Link id="m-waverenderer" /><code>{"private MeshRenderer waveRenderer"}</code> | Mesh renderer for the combat wave effect; hidden except while `AnimateWave` runs. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-combatshellanimator" /><code><Link to="/game-api/types/alta-player/combatshellanimator">{"CombatShellAnimator"}</Link>{" "}<Link to="/game-api/types/alta-player/combatshellanimator">{"CombatShellAnimator"}</Link>{" { get; private set; }"}</code> | Shell effect used in combat; also the shell used by the death animation. |
| <Link id="m-spiritmodeshellanimator" /><code><Link to="/game-api/types/global-s/spiritmodeshellanimator">{"SpiritModeShellAnimator"}</Link>{" "}<Link to="/game-api/types/global-s/spiritmodeshellanimator">{"SpiritModeShellAnimator"}</Link>{" { get; private set; }"}</code> | Shell effect for spirit mode. |
| <Link id="m-stateffectshellanimator" /><code><Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" "}<Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" { get; private set; }"}</code> | Shell effect for stat effects. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order for the build step; always 0. |

</details>

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
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController postProcessController)"}</code> | Receives the post process controller through dependency injection. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatewavecoroutine" /><code>{"private IEnumerator AnimateWaveCoroutine() (iterator)"}</code> | Coroutine behind `AnimateWave`: shows the wave renderer and drives its `_Progress` along `waveCurve`, then hides it. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client only: builds the combat, stat-effect and spirit-mode shell animators and hooks trail cleanup to the entity's destruction. |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build step: disables the wave renderer so it starts hidden. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Build step counterpart to `Bake`; does nothing. |
| <Link id="m-cleantrail" /><code>{"private void CleanTrail("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Releases the active teleport trail when the player entity is destroyed by the scene. |
| <Link id="m-deactivatetrail" /><code>{"private void DeactivateTrail("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" oldTrail)"}</code> | Called when a teleport trail goes back to its pool; clears `activeTeleportTrail` if it was that trail. |
| <Link id="m-deathanimation" /><code>{"private IEnumerator DeathAnimation() (iterator)"}</code> | Coroutine behind `StartDeathAnimation`: swaps body materials for ashes, plays the death visuals and fog, and drives the shell and post-processing from the animated progress fields. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Client only: tears down the three shell animators. |
| <Link id="m-respositiontrail" /><code>{"private void RespositionTrail("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Handles locomotion position changes: moves the streaming trail, and on teleport locomotion also spawns a teleport trail from the old position. |
| <Link id="m-setstreamingtrail" /><code>{"private void SetStreamingTrail(bool isEnabled)"}</code> | Spawns or releases the streaming locomotion trail when the player starts or stops streaming. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Client only: subscribes to the locomotion controller's streaming changes and sets the streaming trail to match. The local player's trail visuals are disabled. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerSpecialEffectsController`:

[`PlayerCharacter.specialEffectsController`](/game-api/types/alta-player/playercharacter#m-specialeffectscontroller), [`PlayerCharacter.SpecialEffectsController`](/game-api/types/alta-player/playercharacter#m-specialeffectscontroller-2).
