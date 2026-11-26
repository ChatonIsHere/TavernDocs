---
title: Players and characters
description: "Types in Alta.Character, Alta.PlayerStates, Alta.PlayerEffects, Alta.Progression, Alta.Achievements and Alta.QuickAccessActions."
sidebar_position: 9
---

# Players and characters

Types in Alta.Character, Alta.PlayerStates, Alta.PlayerEffects, Alta.Progression, Alta.Achievements and Alta.QuickAccessActions. 250 types, 20 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Achievements

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Achievement`](/game-api/types/alta-player/achievement) | class |  | 11 | One Steam achievement tracked by `AchievementManager`: its definition, text and whether the player has it. |
| [`AchievementDefinition`](/game-api/types/alta-player/achievementdefinition) | class | `ScriptableObject` | 1 | Asset for one achievement; its asset name is its ID. |
| [`AchievementDefinition.Create`](/game-api/types/alta-player/achievementdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Meta.ScriptableObject<AchievementDefinition>` | 0 |  |
| [`AchievementManager`](/game-api/types/alta-player/achievementmanager) | class | `SingletonBehaviour<AchievementManager>`, `IAchievementManager`, `IStatManager` | 5 |  |
| [`AchievementStatDefinition`](/game-api/types/alta-player/achievementstatdefinition) | class | `ScriptableObject` | 2 | Asset for one stat that achievements track; its asset name is its ID. |
| [`AchievementStatDefinition.Create`](/game-api/types/alta-player/achievementstatdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Meta.ScriptableObject<AchievementStatDefinition>` | 0 |  |
| [`IAchievementManager`](/game-api/types/alta-player/iachievementmanager) | interface |  | 2 | What an `Achievement` calls back into to unlock or refresh itself. Implemented by `AchievementManager`, which passes the calls to the platform stats. |
| [`IStatManager`](/game-api/types/alta-player/istatmanager) | interface |  | 2 | What a `Stat` calls back into to sync with the platform. Implemented by `AchievementManager`. |
| [`PlatformStats`](/game-api/types/alta-player/platformstats) | abstract class |  | 6 | Base for a platform's achievements and stats backend. `AchievementManager` creates a `SteamStats` and forwards calls to it. |
| [`SetupAchievements`](/game-api/types/alta-player/setupachievements) | static class |  | 1 |  |
| [`Stat`](/game-api/types/alta-player/stat) | class |  | 8 | One platform achievement stat (such as a Steam stat), as an int or a float. Setting a value passes it on to `AchievementManager`, which sends it to the platform. |
| [`StatType`](/game-api/types/alta-player/stattype) | enum |  | 2 | Whether a platform stat holds an int or a float. |
| [`SteamStats`](/game-api/types/alta-player/steamstats) | class | `PlatformStats` | 6 |  |

## Alta.Character

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccessibleDocks`](/game-api/types/alta-player/accessibledocks) | class | `MonoBehaviour`, `IInitializeAsLocalPlayer` | 3 | [Player inventory](../items/player-inventory.md): The accessibility option that moves belt docks to easier spots (local player). |
| [`ArmController`](/game-api/types/alta-player/armcontroller) | class | `CharacterComponentController` | 11 |  |
| [`ArmIKController`](/game-api/types/alta-player/armikcontroller) | class | `CharacterComponentController` | 10 |  |
| [`ArmIKControllerHelper`](/game-api/types/alta-player/armikcontrollerhelper) | class | `CharacterComponentHelper<CharacterComponentControllerCollection>` | 4 |  |
| [`BasicDummyCharacterController`](/game-api/types/alta-player/basicdummycharactercontroller) | class | `MonoBehaviour` | 0 |  |
| [`BlinkingController`](/game-api/types/alta-player/blinkingcontroller) | class | `MonoBehaviour` | 3 |  |
| [`BodyController`](/game-api/types/alta-player/bodycontroller) | class | `CharacterComponentController` | 8 | Moves and turns a player's body to follow the head and hands, using `BodyControllerSettings` that can be overridden. |
| [`BodyControllerSettings`](/game-api/types/alta-player/bodycontrollersettings) | class | `OverridableSettings` | 28 | Settings asset for how a player's body follows the head and hands: heading, pitch and roll from head movement, bending when moving, and smoothing speeds. |
| [`BodyControllerSettings.Create`](/game-api/types/alta-player/bodycontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<BodyControllerSettings>` | 0 |  |
| [`BodyProjection`](/game-api/types/alta-player/bodyprojection) | class | `MonoBehaviour` | 0 |  |
| [`BodyTypeSettings`](/game-api/types/alta-player/bodytypesettings) | class |  | 4 | Per-body-type distances for belt docks and stat bars on a character dummy. Set by the chosen `CosmeticBodyType`. |
| [`BoneWithRotationLimit`](/game-api/types/alta-player/bonewithrotationlimit) | class | `BoneWithTwistLimit` | 1 | A spine bone with a swing limit as well as the twist limit from `BoneWithTwistLimit`. `SpineIKHelper` keeps three of these and turns them into `RotationLimitAngle` components on the spine IK. |
| [`BoneWithTwistLimit`](/game-api/types/alta-player/bonewithtwistlimit) | class |  | 2 | A bone and how far it may twist, set in the inspector. `ShoulderTwistControllerHelper` uses one, and `BoneWithRotationLimit` extends it. |
| [`CharacterCollisionController`](/game-api/types/alta-player/charactercollisioncontroller) | class | `CharacterComponentController` | 2 |  |
| [`CharacterCollisionController.CollidersToDisableWhenInteracting`](/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting) | class |  | 2 | Inspector pairing of a hand `Controller` with the body colliders to turn off while that hand holds a pickup, so the held item doesn't hit the player's own body. |
| [`CharacterCollisionControllerHelper`](/game-api/types/alta-player/charactercollisioncontrollerhelper) | class | `CharacterComponentHelper<CharacterCollisionController>` | 4 |  |
| [`CharacterCollisionControllerHelper.BoneBoxCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-boneboxcollider) | class | `BoneCollider` | 2 | Settings for a box collider on a character bone, used by `CharacterCollisionControllerHelper` when it builds the body colliders. |
| [`CharacterCollisionControllerHelper.BoneCapsuleCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider) | class | `BoneCollider` | 2 | A capsule collider set up on one bone of the character, part of `CharacterCollisionControllerHelper`'s collider list. |
| [`CharacterCollisionControllerHelper.BoneCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecollider) | class |  | 1 |  |
| [`CharacterCollisionControllerHelper.BoneMeshCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonemeshcollider) | class | `BoneCollider` | 2 | Settings for mesh colliders on a character bone. `CharacterCollisionControllerHelper` adds one `MeshCollider` per mesh on a child object of the bone. |
| [`CharacterCollisionControllerHelper.HandPalmCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider) | class | `BoneBoxCollider` | 1 | A box collider set up on a hand's palm bone by `CharacterCollisionControllerHelper`. The box centre is flipped for the right hand. |
| [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller) | abstract class | `MonoBehaviour` | 7 | Base for player character rig components (arm IK, elbows and so on) that an owning controller updates in a set order instead of through Unity's `Update`. Finds its `PlayerController` in a parent. |
| [`CharacterComponentControllerCollection`](/game-api/types/alta-player/charactercomponentcontrollercollection) | class | `CharacterComponentController` | 6 | Character controller that runs a list of child controllers: owned ones only when the character is local, unowned ones always. |
| [`CharacterComponentHelper<T>`](/game-api/types/alta-player/charactercomponenthelper-t) | abstract class | `ScriptHelper` | 0 | Base for editor helper scripts that sit next to a `CharacterComponentController` of type `T`. |
| [`CharacterDummy`](/game-api/types/alta-player/characterdummy) | class | `MonoBehaviour` | 20 | The visual character model: rig, animator, skin, clothes, eyes and LODs, used for players and customization previews. Reached through a `CharacterDummyPointer`, such as `PlayerCustomizationHandler.CharacterDummy`. |
| [`CharacterEye`](/game-api/types/alta-player/charactereye) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 1 |  |
| [`CharacterLocalityController`](/game-api/types/alta-player/characterlocalitycontroller) | class | `PlayerControllerLocalityController` | 2 | The player character's locality controller: when a player is marked local or remote it picks the head transform and wires the head target, body, voice chat and ghost hands to it. |
| [`ClavicleController`](/game-api/types/alta-player/claviclecontroller) | class | `CharacterComponentController` | 6 | Character rig component that rotates a clavicle bone to follow where the hand (and optionally elbow) target is, using curves from `PlayerSettings.ClavicleControllerSettings`. |
| [`ClavicleControllerSettings`](/game-api/types/alta-player/claviclecontrollersettings) | class | `ScriptableObject` | 12 | Asset with the curves and limits for turning a player's collarbones toward where the hands are, so the shoulders follow the arms. |
| [`ClavicleControllerSettings.Create`](/game-api/types/alta-player/claviclecontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<ClavicleControllerSettings>` | 0 |  |
| [`ClothesSettings`](/game-api/types/alta-player/clothessettings) | class |  | 10 | The character dummy's clothing renderers (opaque and transparent, body and head) and helpers to swap their meshes and materials. Used by the cosmetic packer when building a character's look. |
| [`CustomControllerOffset`](/game-api/types/alta-player/customcontrolleroffset) | class |  | 3 | Per-hand controller offsets loaded from `custom_controller_offsets.json` next to the game's data folder. `CustomControllerOffsetReader` writes a default file and reloads it when it changes. |
| [`CustomControllerOffsetReader`](/game-api/types/alta-player/customcontrolleroffsetreader) | class | `IDisposable`, `IInitializable`, `IIsolate` | 3 |  |
| [`DestroyedHandRegenerate`](/game-api/types/alta-player/destroyedhandregenerate) | class | `MonoBehaviour` | 1 |  |
| [`DockPositionController`](/game-api/types/alta-player/dockpositioncontroller) | class |  | 2 | [Player inventory](../items/player-inventory.md): Places belt docks for the body type. |
| [`DockStore`](/game-api/types/alta-player/dockstore) | class | `IInventoryStore<PickupDock>` | 10 |  |
| [`DummyCharacterController`](/game-api/types/alta-player/dummycharactercontroller) | class | `CharacterComponentController` | 3 |  |
| [`ElbowController`](/game-api/types/alta-player/elbowcontroller) | class | `CharacterComponentController` | 9 | Character rig component that places the elbow IK hint by matching the hand's pose against a set of recorded elbow data points and averaging the best matches. |
| [`ElbowControllerSettings`](/game-api/types/alta-player/elbowcontrollersettings) | class | `ScriptableObject` | 8 | Settings asset for `ElbowController`, which places the elbow IK hint by matching the hand pose against recorded elbow samples. |
| [`ElbowControllerSettings.Create`](/game-api/types/alta-player/elbowcontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<ElbowControllerSettings>` | 0 |  |
| [`ElbowDataPointScore`](/game-api/types/alta-player/elbowdatapointscore) | class |  | 3 | An elbow guide data point and how well it matches the current hand pose. `ElbowController` keeps a sorted list of the best ones. |
| [`ElbowDataPointSet`](/game-api/types/alta-player/elbowdatapointset) | class | `ScriptableObject` | 3 | A ScriptableObject holding a list of elbow guide data points, used to place the player's elbows for given hand poses (see `ElbowController`). |
| [`ElbowGuideDataPoint`](/game-api/types/alta-player/elbowguidedatapoint) | class | `ScriptableObject`, `IElbowGuideDataPoint` | 7 | One recorded sample used to place the elbow in arm IK: a hand pose and where the elbow should be for it. `ElbowController` picks the samples closest to the current hand pose. |
| [`ElbowGuideDataPointRuntime`](/game-api/types/alta-player/elbowguidedatapointruntime) | class | `IElbowGuideDataPoint` | 6 | An elbow guide data point made at runtime, mostly by `ElbowGuideDataPoint.MirrorDataPoint` to get the other hand's version. |
| [`EyeFocus`](/game-api/types/alta-player/eyefocus) | class | `MonoBehaviour` | 2 | Simple component that turns a transform (an eye) to look at a target each frame, then applies a rotation limit. |
| [`EyeFocusController`](/game-api/types/alta-player/eyefocuscontroller) | class | `CharacterComponentController` | 5 | Client: picks something for a character's eyes to look at. Every so often it scores nearby colliders by angle, distance, speed and layer, and moves a focus handle to the best one. Turned off on headless servers. |
| [`EyeFocusControllerSettings`](/game-api/types/alta-player/eyefocuscontrollersettings) | class | `ScriptableObject` | 21 | Settings asset for `EyeFocusController`, which picks what a character's eyes look at. Nearby colliders are scored by adding up penalties (detriments) and the lowest score under the maximum wins. |
| [`EyeFocusControllerSettings.Create`](/game-api/types/alta-player/eyefocuscontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<EyeFocusControllerSettings>` | 0 |  |
| [`EyeSettings`](/game-api/types/alta-player/eyesettings) | class |  | 3 | The character dummy's eye blit materials, held on `CharacterDummy.Eyes`. |
| [`GhostHandController`](/game-api/types/alta-player/ghosthandcontroller) | class | `CharacterComponentController` | 10 | Shows the translucent ghost hand at the controller position and fades it by how far the real hand is from it. Only active on the local player; skipped on headless servers. |
| [`Hand`](/game-api/types/alta-player/hand) | class | `CharacterComponentController` | 34 | One hand of a player's character: links the controller, IK hand target, grip animator and ghost hand, and handles where held items attach. A component under each `Controller`; set up by `SetupWithController`. |
| [`HandGrip`](/game-api/types/alta-player/handgrip) | class | `MonoBehaviour` | 11 | Curls a hand model's fingers around what it holds, and blends in finger tracking from the controller. Turns itself off on headless servers. |
| [`HandGrip.GripFinger`](/game-api/types/alta-player/handgrip-gripfinger) | class |  | 7 | One finger of a `HandGrip`: its configuration and its joints. Thumbs get `ThumbGripJoint`s, other fingers plain `GripJoint`s. |
| [`HandGrip.GripJoint`](/game-api/types/alta-player/handgrip-gripjoint) | class |  | 10 | One finger joint of a hand grip. It curls in steps until it touches a grabbed object, and blends between open, splayed, closed and saved poses. |
| [`HandGrip.ThumbGripJoint`](/game-api/types/alta-player/handgrip-thumbgripjoint) | class | `GripJoint` | 3 |  |
| [`HandGripConfiguration`](/game-api/types/alta-player/handgripconfiguration) | class | `ScriptableObject` | 7 | Asset that sets up hand gripping: the fingers and their joints, grip timing, thumb positions and the stored hand poses for each hand. |
| [`HandGripConfiguration.Finger`](/game-api/types/alta-player/handgripconfiguration-finger) | class |  | 4 | Setup for one finger of the hand grip: its joints and how skeletal input is corrected. Read by `HandGrip` to build its finger joints. |
| [`HandGripConfiguration.Finger.Joint`](/game-api/types/alta-player/handgripconfiguration-finger-joint) | class |  | 4 | Size and curl limits of one finger joint, used by `HandGrip` to curl fingers around what the hand holds. |
| [`HandGripConfiguration.RotationSnapshots`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots) | class |  | 4 | Saved finger bone rotations for one hand in four poses (default, open, splayed, closed). `HandGrip` reads them per bone to blend the hand's grip. |
| [`HandStore`](/game-api/types/alta-player/handstore) | class | `IInventoryStore<Interactor>` | 10 |  |
| [`HandTargetHandler`](/game-api/types/alta-player/handtargethandler) | class | `MonoBehaviour` | 1 | Holds the IK hand target transform for a hand and rebuilds it if something destroys it. |
| [`IElbowGuideDataPoint`](/game-api/types/alta-player/ielbowguidedatapoint) | interface |  | 6 | One recorded pose sample for placing a player's elbow: a hand position and rotation (relative to the body) and the elbow hint to use for it. `ElbowController` finds the closest samples to the current hand and averages their hints. |
| [`IInventoryStore<out T>`](/game-api/types/alta-player/iinventorystore-outt) | interface |  | 9 | A stack-like store of pickups in the player's inventory. |
| [`IKSolverManagerWrapper`](/game-api/types/alta-player/iksolvermanagerwrapper) | class | `CharacterComponentController` | 3 |  |
| [`IKTwistRelaxerWrapper`](/game-api/types/alta-player/iktwistrelaxerwrapper) | class | `CharacterComponentController` | 2 |  |
| [`InteractionCollisionController`](/game-api/types/alta-player/interactioncollisioncontroller) | class | `MonoBehaviour` | 0 |  |
| [`Inventory`](/game-api/types/alta-player/inventory) | class |  | 4 | [Player inventory](../items/player-inventory.md#altacharacterinventory): `PlayerCharacter.Inventory` is a small helper the micro tutorial uses: |
| [`LocomotionStyle`](/game-api/types/alta-player/locomotionstyle) | enum |  | 3 | How a teleport or rotation is shown to the player: instantly, as a lerp, or with a fade. |
| [`MasterHand`](/game-api/types/alta-player/masterhand) | class | `MonoBehaviour` | 3 | Copies the finger bone rotations of the hand-pose (master) hand onto the character rig's IK hand after the grip updates each frame. |
| [`NeckController`](/game-api/types/alta-player/neckcontroller) | class | `SimpleIKController` | 1 |  |
| [`NeckIKController`](/game-api/types/alta-player/neckikcontroller) | class | `CharacterComponentController` | 3 |  |
| [`NeckIKControllerHelper`](/game-api/types/alta-player/neckikcontrollerhelper) | class | `CharacterComponentHelper<NeckIKController>` | 3 |  |
| [`PersonalSpace`](/game-api/types/alta-player/personalspace) | class | `MonoBehaviour` | 3 |  |
| [`PlatformHandAlignment`](/game-api/types/alta-player/platformhandalignment) | class |  | 2 | A hand offset for one platform (player mode), listed per hand in `ControllerOffsetSettings`. |
| [`PlayerCharacter`](/game-api/types/alta-player/playercharacter) | class | `SmoothLocomotionPlayerController`, `IHasFingertips` | 26 | [PlayerController and the body](../networking/player-controller.md#playercharacter): `Alta.Character.PlayerCharacter`, the VR body. Extra members: |
| [`PlayerControllerHandler`](/game-api/types/alta-player/playercontrollerhandler) | delegate |  | 0 | Event handler that receives a `PlayerController`. Used by `PlayerController.LocalPlayerSet`, `OnAboutToLeave` and `Player.PlayerControllerSet`. |
| [`PlayerControllerSettings`](/game-api/types/alta-player/playercontrollersettings) | class | `ScriptableObject` | 10 | An asset holding the settings for the parts of a player's body rig: body, clavicles, elbows, eye focus, hands and ghost hands. |
| [`PlayerControllerSettings.Create`](/game-api/types/alta-player/playercontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<PlayerControllerSettings>` | 0 |  |
| [`PlayerText`](/game-api/types/alta-player/playertext) | class | `MonoBehaviour` | 1 |  |
| [`PositionChangedHandler`](/game-api/types/alta-player/positionchangedhandler) | delegate |  | 0 | Event handler for a player moving, with the old and new positions and the locomotion function that moved them. Used by `LocomotionController.PositionChanged` and `PositionAboutToChange`. |
| [`RotationChangedHandler`](/game-api/types/alta-player/rotationchangedhandler) | delegate |  | 0 | Callback for `LocomotionController.RotationChanged`: the player plus their old and new rotation. |
| [`RotationLimitWrapper`](/game-api/types/alta-player/rotationlimitwrapper) | class | `CharacterComponentController` | 2 | Character component that applies a rotation limit to a bone (such as a wrist) every physics step, optionally falling back to the last rotation that was within the limit. |
| [`ScaleChangedHandler`](/game-api/types/alta-player/scalechangedhandler) | delegate |  | 0 | Callback for `PlayerCharacter.ScaleChanged`: the player plus their old and new scale. |
| [`ShoulderTwistController`](/game-api/types/alta-player/shouldertwistcontroller) | class | `CharacterComponentController` | 6 | Character rig component that slowly twists the shoulder around the shoulder-to-elbow axis to follow the hand, within a rotation limit. |
| [`ShoulderTwistControllerHelper`](/game-api/types/alta-player/shouldertwistcontrollerhelper) | class | `CharacterComponentHelper<ShoulderTwistController>` | 2 | Editor helper for `ShoulderTwistController` that adds a twist limit to the shoulder bone. |
| [`SimpleIKController`](/game-api/types/alta-player/simpleikcontroller) | abstract class | `CharacterComponentController` | 0 |  |
| [`SkinSettings`](/game-api/types/alta-player/skinsettings) | class |  | 4 | The character dummy's skin colours and skin blit materials, held on `CharacterDummy.Skin` and read by `SkinMeshPart`. |
| [`SpineController`](/game-api/types/alta-player/spinecontroller) | class | `SimpleIKController` | 2 |  |
| [`SpineIKHelper`](/game-api/types/alta-player/spineikhelper) | class | `ScriptHelper` | 3 |  |
| [`TeleportMode`](/game-api/types/alta-player/teleportmode) | enum |  | 3 | Which part of the player lands on the teleport target: the room centre, the feet or the head. |
| [`TwistRelaxerController`](/game-api/types/alta-player/twistrelaxercontroller) | class | `CharacterComponentController` | 4 | Character rig component that runs the forearm's `TwistRelaxer`s each fixed update, scaling their weight by how far the hand is twisted against the elbow. |
| [`TwistRelaxerControllerHelper`](/game-api/types/alta-player/twistrelaxercontrollerhelper) | class | `CharacterComponentHelper<TwistRelaxerController>` | 2 | Editor helper for `TwistRelaxerController` that adds twist relaxers to a list of bones. |
| [`TwistRelaxerSetting`](/game-api/types/alta-player/twistrelaxersetting) | class |  | 3 | One bone entry for the twist relaxer, which spreads forearm or arm twist across bones so they don't look wrung. Listed in `TwistRelaxerControllerHelper.BonesToBeRelaxed`. |

## Alta.Character.MeshRenderers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CharacterRendererLOD`](/game-api/types/alta-player/characterrendererlod) | internal class |  | 4 |  |

## Alta.PlayerEffects

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CombatShellAnimator`](/game-api/types/alta-player/combatshellanimator) | class | `ShellAnimator` | 8 | Client: animates the shell effect around a player in combat mode. `CombatState` triggers it through the player's `SpecialEffectsController`. |
| [`CombatShellSetting`](/game-api/types/alta-player/combatshellsetting) | class | `ShellSetting` | 1 | Shell effect settings for combat: two ramp textures and a dissolve strength pushed onto the shell material. Client visual. |
| [`ShellAnimationHandler`](/game-api/types/alta-player/shellanimationhandler) | class |  | 8 | One request to show a shell effect on a player through `StatEffectShellAnimator`, which queues requests by priority. |
| [`ShellAnimator`](/game-api/types/alta-player/shellanimator) | abstract class |  | 7 | Client: draws an extra copy of a player's clothes with a shell material and animates its `_Progress` value, for effects like combat, stat effects and spirit mode. |
| [`ShellSetting`](/game-api/types/alta-player/shellsetting) | abstract class |  | 1 | Base for one setting applied to a player effect's shell material. |
| [`StatDrivenEffect`](/game-api/types/alta-player/statdriveneffect) | class |  | 5 | Visuals for one side (buff or debuff) of a stat effect: a pooled effect, a curve from stat value to size, and a shell setting. |
| [`StatEffectHolder`](/game-api/types/alta-player/stateffectholder) | class |  | 5 | Pairs a stat with the visual effects shown when it goes up (buff) or down (debuff). Listed in `StatEffectsDefinition.StatEffects` and read by `PlayerEffectManager`. |
| [`StatEffectsDefinition`](/game-api/types/alta-player/stateffectsdefinition) | class | `ScriptableObject` | 1 | Asset listing the stat effects (`StatEffectHolder`) the game knows about. `PlayerEffectManager` holds one. |
| [`StatEffectsDefinition.Create`](/game-api/types/alta-player/stateffectsdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<StatEffectsDefinition>` | 0 |  |
| [`StatEffectShellAnimator`](/game-api/types/alta-player/stateffectshellanimator) | class | `ShellAnimator` | 13 | Client: the shell animator for stat effect shields around a player. Several shields can be asked for at once; the highest priority shows and the rest wait in a queue. |
| [`StatEffectShellSetting`](/game-api/types/alta-player/stateffectshellsetting) | class | `ShellSetting` | 4 | Look of the shell drawn around a player for a stat buff or debuff: colours, wave texture and how it animates in. Used by `StatEffectShellAnimator`; buffs default to orange and red, debuffs to grey and blue. |

## Alta.PlayerEffects.General.Health

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DamageState`](/game-api/types/alta-player/damagestate) | class |  | 7 | Damage about to be applied to a player, passed to `PlayerHealth.HandleDamage` listeners. A listener can mark it handled to cancel it. One object is reused for each hit. |

## Alta.PlayerStates

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AllTransitions`](/game-api/types/alta-player/alltransitions) | class |  | 15 | Holds one lazily created instance of every player state transition (playing, combat, dead, downed, spirit, equipment, customization, first join). Each player state has one as `AllTransitions`; each property is named after the transition it returns. |
| [`CombatState`](/game-api/types/alta-player/combatstate) | class | `PlayerStateBase<PlayingState>` | 7 | [Player states](../networking/player-states.md) |
| [`CombatStateSettings`](/game-api/types/alta-player/combatstatesettings) | class | `PlayerStateSettings` | 9 | Settings asset for `CombatState`: how long a player stays in combat, and the shell effect and sound shown when entering it. |
| [`CombatStateSettings.Create`](/game-api/types/alta-player/combatstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<CombatStateSettings>` | 0 |  |
| [`CustomizationState`](/game-api/types/alta-player/customizationstate) | class | `PlayerStateBase` | 3 | [Player states](../networking/player-states.md) |
| [`DeadState`](/game-api/types/alta-player/deadstate) | class | `PlayerStateBase` | 4 | [Player states](../networking/player-states.md) |
| [`DeadStateSettings`](/game-api/types/alta-player/deadstatesettings) | class | `PlayerStateSettings` | 11 | Settings asset for the player's dead state (`DeadState`): ragdoll feel, the fade and respawn timing, and which stats are reset on death. |
| [`DeadStateSettings.Create`](/game-api/types/alta-player/deadstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<DeadStateSettings>` | 0 |  |
| [`DeathAnimationSettings`](/game-api/types/alta-player/deathanimationsettings) | class |  | 11 | Settings for a two-burst death dissolve effect. `DeadStateSettings.AnimationSettings` holds one, but nothing reads it; the effect in use takes `Alta.Combat.DeathAnimationSettings`. |
| [`DownedState`](/game-api/types/alta-player/downedstate) | class | `PlayerStateBase<PlayingState>` | 6 | [Player states](../networking/player-states.md) |
| [`EquipmentState`](/game-api/types/alta-player/equipmentstate) | class | `PlayerStateBase<PlayingState>` | 5 | [Player states](../networking/player-states.md) |
| [`EquipmentStateSettings`](/game-api/types/alta-player/equipmentstatesettings) | class | `PlayerStateSettings` | 19 | Settings for the equipment player state, where a dummy copy of the player appears in front of them to change gear, and copies their pose when they hold still. |
| [`EquipmentStateSettings.Create`](/game-api/types/alta-player/equipmentstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<EquipmentStateSettings>` | 0 |  |
| [`FirstJoinState`](/game-api/types/alta-player/firstjoinstate) | class | `PlayerStateBase` | 3 | [Player states](../networking/player-states.md) |
| [`IPlayerState`](/game-api/types/alta-player/iplayerstate) | interface |  | 21 | One player state (first join, playing, combat, downed, dead, spirit and so on) held by a player's `PlayerStateManager`. States can decorate a base state. Implemented by `PlayerStateBase`; the server decides, clients follow. |
| [`IPlayerStateFactory`](/game-api/types/alta-player/iplayerstatefactory) | interface |  | 1 | Makes player state objects for a `PlayerStateManager`. `PlayerStateFactory` is the implementation. |
| [`IPlayerStateSettings`](/game-api/types/alta-player/iplayerstatesettings) | interface |  | 3 | Settings for one player state: which state class it is for and which controller modes it adds and removes while active. |
| [`IStateTransitionsManager`](/game-api/types/alta-player/istatetransitionsmanager) | interface |  | 7 | Manages a player state's transitions to other states. Implemented by `StateTransitionsManager`. |
| [`KilledData`](/game-api/types/alta-player/killeddata) | class |  | 5 |  |
| [`ObjectKilledData`](/game-api/types/alta-player/objectkilleddata) | class | `KilledData` | 4 | [Console events](../console-and-utilities/console-events.md) |
| [`PlayerKilledData`](/game-api/types/alta-player/playerkilleddata) | class | `KilledData` | 2 | [Console events](../console-and-utilities/console-events.md) |
| [`PlayerStateBase`](/game-api/types/alta-player/playerstatebase) | abstract class | `IPlayerState` | 19 | [Player states](../networking/player-states.md#playerstatebase): `Alta.PlayerStates.PlayerStateBase` (and `PlayerStateBase<T>` for a decorating state with base `T`). What a state can override: |
| [`PlayerStateBase<T>`](/game-api/types/alta-player/playerstatebase-t) | abstract class | `PlayerStateBase` | 2 | [Player states](../networking/player-states.md#playerstatebase): `Alta.PlayerStates.PlayerStateBase` (and `PlayerStateBase<T>` for a decorating state with base `T`). What a state can override: |
| [`PlayerStateChangeData`](/game-api/types/alta-player/playerstatechangedata) | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| [`PlayerStateFactory`](/game-api/types/alta-player/playerstatefactory) | class | `IPlayerStateFactory` | 2 |  |
| [`PlayerStateHandler`](/game-api/types/alta-player/playerstatehandler) | delegate |  | 0 | Callback that receives a player state, such as the pre-activation callback of `SetToState`. |
| [`PlayerStateManager`](/game-api/types/alta-player/playerstatemanager) | class | `MonoBehaviour` | 13 | [Player states](../networking/player-states.md#playerstatemanager): `Alta.PlayerStates.PlayerStateManager`, a `MonoBehaviour` on the `Player`. |
| [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings) | abstract class | `ScriptableObject`, `IPlayerStateSettings` | 3 | Base settings asset for a player state (downed, dead and so on). Each subclass names the state class it configures. |
| [`PlayerStateSettingsManager`](/game-api/types/alta-player/playerstatesettingsmanager) | static class |  | 1 |  |
| [`PlayerStateType`](/game-api/types/alta-player/playerstatetype) | enum |  | 9 | The player states: none, first join, playing, combat, customization, equipment, dead, spirit and downed. |
| [`PlayingState`](/game-api/types/alta-player/playingstate) | class | `PlayerStateBase` | 6 | [Player states](../networking/player-states.md) |
| [`PlayingStateSettings`](/game-api/types/alta-player/playingstatesettings) | class | `PlayerStateSettings` | 1 | Settings asset for the normal playing state. It adds nothing beyond `PlayerStateSettings`. |
| [`PlayingStateSettings.Create`](/game-api/types/alta-player/playingstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<PlayingStateSettings>` | 0 |  |
| [`PlayingToSpiritTransition`](/game-api/types/alta-player/playingtospirittransition) | class | `StateTransition<PlayingState, SpiritState>` | 1 | Moves a player from Playing to Spirit when their unlock manager gains a current unlock. |
| [`RemoteStateTransitionsManager`](/game-api/types/alta-player/remotestatetransitionsmanager) | class | `StateTransitionsManager` | 3 |  |
| [`SpiritState`](/game-api/types/alta-player/spiritstate) | class | `PlayerStateBase<PlayingState>` | 4 | [Player states](../networking/player-states.md) |
| [`SpiritStateSettings`](/game-api/types/alta-player/spiritstatesettings) | class | `PlayerStateSettings` | 6 | Settings asset for spirit mode (`SpiritState`), the state used during unlock challenges. |
| [`SpiritStateSettings.Create`](/game-api/types/alta-player/spiritstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<SpiritStateSettings>` | 0 |  |
| [`SpiritToPlayingTransition`](/game-api/types/alta-player/spirittoplayingtransition) | class | `StateTransition<SpiritState, PlayingState>` | 1 | Moves a player from Spirit back to Playing once their unlock manager has no current unlock. |
| [`StateTransitionsManager`](/game-api/types/alta-player/statetransitionsmanager) | class | `IStateTransitionsManager` | 8 |  |
| [`StatThresholdValue`](/game-api/types/alta-player/statthresholdvalue) | struct |  | 7 | A stat change applied when a player dies, listed in `DeadStateSettings.StatsToModifyOnDeath` and run by `StatManager.DeathReset`. It can set the stat always, or only when it's past a threshold. |
| [`TestingPlayerStates`](/game-api/types/alta-player/testingplayerstates) | class | `MonoBehaviour` | 4 |  |

## Alta.PlayerStates.Transitions

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CombatToCombatTransition`](/game-api/types/alta-player/combattocombattransition) | class | `ToCombatTransition<CombatState>` | 0 | Combat to Combat transition: a new hit while in combat keeps the player in the same combat state, and the caller then resets its timer. |
| [`CustomizationToPlayingTransition`](/game-api/types/alta-player/customizationtoplayingtransition) | class | `StateTransition<CustomizationState, PlayingState>` | 1 | Moves a player from Customization to Playing. Has no listeners; `CustomizationState` triggers it when customization finishes. |
| [`DeadToPlayingTransition`](/game-api/types/alta-player/deadtoplayingtransition) | class | `StateTransition<DeadState, PlayingState>` | 1 | Moves a player from Dead to Playing (respawn). `DeadState` triggers it. |
| [`DownedToDeadTransition`](/game-api/types/alta-player/downedtodeadtransition) | class | `StateTransition<DownedState, DeadState>` | 1 | Moves a downed player to Dead when they are killed. |
| [`DownedToPlayingTransition`](/game-api/types/alta-player/downedtoplayingtransition) | class | `StateTransition<DownedState, PlayingState>` | 2 | Moves a downed player back to Playing when revived. `DownedState` calls `HandleRevive`. |
| [`EquipmentToPlayingTransition`](/game-api/types/alta-player/equipmenttoplayingtransition) | class | `EquipmentTransition<EquipmentState, PlayingState>` | 2 | Leaves equipment mode back to Playing, either through the quick access menu or when the local player walks out of the customization room. |
| [`EquipmentTransition<TFrom, TTo>`](/game-api/types/alta-player/equipmenttransition-tfrom-tto) | abstract class | `StateTransition<TFrom, TTo>` | 1 |  |
| [`FirstJoinToCustomizationTransition`](/game-api/types/alta-player/firstjointocustomizationtransition) | class | `StateTransition<FirstJoinState, CustomizationState>` | 1 | Moves a new player from FirstJoin to Customization. `FirstJoinState` triggers it when customization is enabled and not skipped for a normal player. |
| [`FirstJoinToPlayingTransition`](/game-api/types/alta-player/firstjointoplayingtransition) | class | `StateTransition<FirstJoinState, PlayingState>` | 1 | Moves a player from FirstJoin straight to Playing. `FirstJoinState` triggers it when customization is skipped. |
| [`IPlayerStateTransition`](/game-api/types/alta-player/iplayerstatetransition) | interface |  | 6 | A possible move from one player state to another. While active it listens for its trigger, then asks the transitions manager to switch states. |
| [`PlayingToCombatTransition`](/game-api/types/alta-player/playingtocombattransition) | class | `ToCombatTransition<PlayingState>` | 0 | Moves a player from Playing to Combat when they take a tool hit within range or cause combat. All logic is in `ToCombatTransition`. |
| [`PlayingToCustomizationTransition`](/game-api/types/alta-player/playingtocustomizationtransition) | class | `StateTransition<PlayingState, CustomizationState>` | 3 | Sends a playing player back to the customization room. Fired from outside with `ExternalTrigger`, for example by `FromPlayingToCustomization`. |
| [`PlayingToDeadTransition`](/game-api/types/alta-player/playingtodeadtransition) | class | `StateTransition<PlayingState, DeadState>` | 1 | Playing to Dead transition. Its listeners are empty and nothing adds it, so in this build death goes through Downed instead. |
| [`PlayingToDownedTransition`](/game-api/types/alta-player/playingtodownedtransition) | class | `StateTransition<PlayingState, DownedState>` | 1 | Moves a playing player to Downed when their `Downed` event fires. |
| [`PlayingToEquipmentTransition`](/game-api/types/alta-player/playingtoequipmenttransition) | class | `EquipmentTransition<PlayingState, EquipmentState>` | 2 | Moves a player from Playing to equipment mode. Fired through the static `Trigger` by the equipment quick access action. |
| [`StateTransition<TFrom, TTo>`](/game-api/types/alta-player/statetransition-tfrom-tto) | abstract class | `IPlayerStateTransition` | 3 | Base for a rule that moves a player from one player state to another. Subclasses hook up listeners while the transition is active and call `TransitionToDestinationState` when their condition is met. |
| [`ToCombatTransition<TFrom>`](/game-api/types/alta-player/tocombattransition-tfrom) | class | `StateTransition<TFrom, CombatState>` | 1 |  |

## Alta.Progression.Skills

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BowDrawSkill`](/game-api/types/alta-player/bowdrawskill) | class | `SpecificPickupBasedSkill` | 3 | Bow skill that boosts the damage of the next arrow shot from a bow while the skill is active, scaled by the player's skill level. |
| [`BowMultiArrowShot`](/game-api/types/alta-player/bowmultiarrowshot) | class | `PickupBasedSkillModifier` | 3 |  |
| [`BowMultiArrowShot.Create`](/game-api/types/alta-player/bowmultiarrowshot-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BowMultiArrowShot>` | 0 |  |
| [`BowQuickdraw`](/game-api/types/alta-player/bowquickdraw) | class | `BowDrawSkill` | 0 |  |
| [`BowQuickdraw.Create`](/game-api/types/alta-player/bowquickdraw-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BowQuickdraw>` | 0 |  |
| [`BowSlowdraw`](/game-api/types/alta-player/bowslowdraw) | class | `BowDrawSkill` | 0 |  |
| [`BowSlowdraw.Create`](/game-api/types/alta-player/bowslowdraw-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BowSlowdraw>` | 0 |  |
| [`FloatValuesPerLevel`](/game-api/types/alta-player/floatvaluesperlevel) | class | `ValuePerLevel<float>` | 0 | A `ValuePerLevel` of floats, for skill values that change by level, such as `BowDrawSkill`'s damage multiplier. |
| [`IntValuesPerLevel`](/game-api/types/alta-player/intvaluesperlevel) | class | `ValuePerLevel<int>` | 0 |  |
| [`ItemLevitator`](/game-api/types/alta-player/itemlevitator) | class | `MonoBehaviour` | 2 | Makes a pickup float in place when it is let go: it drifts to a stop and then bobs up and down. Stops when picked up, docked or destroyed. |
| [`ItemLevitatorExtension`](/game-api/types/alta-player/itemlevitatorextension) | abstract class | `MonoBehaviour` | 0 |  |
| [`LightBeamSkill`](/game-api/types/alta-player/lightbeamskill) | class | `BowDrawSkill` | 1 |  |
| [`LightBeamSkill.Create`](/game-api/types/alta-player/lightbeamskill-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<LightBeamSkill>` | 0 |  |
| [`MultiArrowConfiguration`](/game-api/types/alta-player/multiarrowconfiguration) | class |  | 2 | Settings for the multi-arrow bow skill (`BowMultiArrowShot`): where the extra arrows sit and how hard they hit. |
| [`SpecificPickupBasedSkill`](/game-api/types/alta-player/specificpickupbasedskill) | abstract class | `PickupBasedSkill` | 1 |  |
| [`ValuePerLevel<T>`](/game-api/types/alta-player/valueperlevel-t) | class |  | 1 |  |

## Alta.QuickAccessActions

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ActionItemData`](/game-api/types/alta-player/actionitemdata) | class | `ScriptableObject` | 8 | Settings for an item summoned from the quick access menu: what to spawn, where, and when it despawns if the player walks away. |
| [`ActionItemHandler`](/game-api/types/alta-player/actionitemhandler) | class |  | 5 | Tracks one quick-access action item spawned for a player: fades it in and out, and despawns it when the player walks away, leaves or the item lands in the global chunk. |
| [`ActionItemHandlerCollection`](/game-api/types/alta-player/actionitemhandlercollection) | internal class | `ActionItemHandlersBase`, `IActionItemHandlerCollection` | 4 | Internal: one player's quick access action item handlers, one per action index, made on first use. The client uses one; the server keeps one per player in `ActionItemHandlerCollectionMap`. |
| [`ActionItemHandlerCollectionMap`](/game-api/types/alta-player/actionitemhandlercollectionmap) | internal class | `ActionItemHandlersBase`, `IActionItemHandlerCollection` | 4 |  |
| [`ActionItemHandlersBase`](/game-api/types/alta-player/actionitemhandlersbase) | internal abstract class |  | 0 |  |
| [`ActionItemsManager`](/game-api/types/alta-player/actionitemsmanager) | class | `NetworkEntityBehaviour` | 5 |  |
| [`AnimatedEmblem`](/game-api/types/alta-player/animatedemblem) | class | `NameBoardEmblem`, `IAnimationEndCallbackReceiver` | 1 |  |
| [`BoneWeightTestsMenuAction`](/game-api/types/alta-player/boneweighttestsmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`DebugLightMenuAction`](/game-api/types/alta-player/debuglightmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`DecreaseHeightMenuAction`](/game-api/types/alta-player/decreaseheightmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`DevToolsBoard`](/game-api/types/alta-player/devtoolsboard) | class | `PooledObject`, `IQuickAccessSettingsBoard` | 8 |  |
| [`EmptyMenu`](/game-api/types/alta-player/emptymenu) | class | `QuickAccessMenuAction` | 3 |  |
| [`EquipmentModeQuickAccess`](/game-api/types/alta-player/equipmentmodequickaccess) | class | `QuickAccessMenuAction` | 5 |  |
| [`HealthBar`](/game-api/types/alta-player/healthbar) | class | `IDisposable` | 5 | Client debug health bar: a quad above a creature that shows its health stat. Made by `ToggleEnemyHealthBars`. |
| [`IActionItemHandlerCollection`](/game-api/types/alta-player/iactionitemhandlercollection) | internal interface |  | 3 | Internal: per-player store of quick access action item handlers. `ActionItemsManager` uses `ActionItemHandlerCollectionMap` on the server and `ActionItemHandlerCollection` on the client. |
| [`IQuickAccessDynamicIcon`](/game-api/types/alta-player/iquickaccessdynamicicon) | interface |  | 1 |  |
| [`IQuickAccessSettingsBoard`](/game-api/types/alta-player/iquickaccesssettingsboard) | interface |  | 4 | A board that the settings quick access menu spawns in front of the player, such as `QuickAccessSettingsBoard` and `DevToolsBoard`. Client only. |
| [`MemoryDumpMenuAction`](/game-api/types/alta-player/memorydumpmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`MicMuteQuickAccessAction`](/game-api/types/alta-player/micmutequickaccessaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`ModMuteArgument`](/game-api/types/alta-player/modmuteargument) | struct |  | 2 | Payload for `ModsMicMuteManager`'s mute request: which moderator is muting and whether it's on. The server only accepts it from players with Developer status or higher. |
| [`ModsMicMuteManager`](/game-api/types/alta-player/modsmicmutemanager) | class | `NetworkEntityBehaviour` | 5 |  |
| [`MODSMicMuteQuickAccessAction`](/game-api/types/alta-player/modsmicmutequickaccessaction) | class | `QuickAccessMenuAction` | 3 | Quick access menu action for moderators that toggles a mod mic mute through `ModsMicMuteManager`. The mute turns itself off after `maxMuteDuration`. Client only. |
| [`MuteNonFriendsActionIcon`](/game-api/types/alta-player/mutenonfriendsactionicon) | class | `MonoBehaviour`, `IQuickAccessDynamicIcon` | 2 |  |
| [`MuteNonFriendsQuickAccessAction`](/game-api/types/alta-player/mutenonfriendsquickaccessaction) | class | `QuickAccessMenuAction` | 3 | Quick access menu action that cycles the voice chat audible scope (everyone, friends and so on). Client only. |
| [`NameBoard`](/game-api/types/alta-player/nameboard) | class | `ScaleLerpPooledObject` | 4 | Pooled floating board that shows a player's name, optional title and member status shield above their head. Spawned by the Show Names quick access action. Client only. |
| [`NameBoardEmblem`](/game-api/types/alta-player/nameboardemblem) | class | `PooledObject` | 1 | Pooled emblem (the member status shield) shown on a `NameBoard`. Subclasses can animate their close. |
| [`NameBoardShield`](/game-api/types/alta-player/nameboardshield) | class | `ScriptableObject` | 1 |  |
| [`NestingMenuAction`](/game-api/types/alta-player/nestingmenuaction) | class | `QuickAccessMenuAction` | 9 |  |
| [`PhysicsFPSMenuAction`](/game-api/types/alta-player/physicsfpsmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`PlayerProxy`](/game-api/types/alta-player/playerproxy) | class | `NetworkEntityBehaviour`, `ISavable<PlayerProxyData>`, `ISavableSave<PlayerProxyData>`, +1 more | 7 | A networked, saved stand-in for a player (a dummy with a name, title and member status) that the Show Names action labels like a real player. The server syncs its fields to clients. |
| [`PlayerProxyData`](/game-api/types/alta-player/playerproxydata) | class | `NewSaveData<PlayerProxy, PlayerProxyData>` | 4 |  |
| [`PooledMenuSettings`](/game-api/types/alta-player/pooledmenusettings) | class | `PooledObject` | 2 |  |
| [`QuickAccessDynamicIcon`](/game-api/types/alta-player/quickaccessdynamicicon) | class | `MonoBehaviour`, `IQuickAccessDynamicIcon` | 1 |  |
| [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction) | abstract class | `ScriptableObject` | 15 | [Quick access menu](../items/quick-access-menu.md#quickaccessmenuaction): `Alta.QuickAccessActions.QuickAccessMenuAction`, an abstract `ScriptableObject`. Each bubble is one of these assets. |
| [`QuickAccessMenuBubble`](/game-api/types/alta-player/quickaccessmenububble) | class | `ScaleLerpPooledObject` | 10 | One bubble in the quick access menu, showing an action and running it when chosen. A pooled object that faces the local player's head; client only. |
| [`QuickAccessMenuController`](/game-api/types/alta-player/quickaccessmenucontroller) | class | `ControllerExtension` | 8 | [Quick access menu](../items/quick-access-menu.md#quickaccessmenucontroller): `Alta.QuickAccessActions.QuickAccessMenuController`, a `ControllerExtension` on each hand. |
| [`QuickAccessMenuOrientation`](/game-api/types/alta-player/quickaccessmenuorientation) | enum |  | 3 |  |
| [`QuickAccessMenuSettings`](/game-api/types/alta-player/quickaccessmenusettings) | class | `GlobalSettings<QuickAccessMenuSettings>` | 16 | Global settings for the quick access (wrist) menu: where its bubbles spawn, how it follows the hand and how titles show. |
| [`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent`](/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent) | struct |  | 3 | Pair of sound and visual effects played when a quick access bubble is selected, one for active bubbles and one for inactive ones. Held in `QuickAccessMenuSettings`. |
| [`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit`](/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent-vfxandsfxeventsplit) | struct |  | 2 | The visual and sound effect events for one state (active or inactive) of a quick access menu bubble being selected. |
| [`QuickAccessSettingsBoard`](/game-api/types/alta-player/quickaccesssettingsboard) | class | `ScaleLerpPooledObject`, `IQuickAccessSettingsBoard` | 6 |  |
| [`ReturnToMainMenuAction`](/game-api/types/alta-player/returntomainmenuaction) | class | `QuickAccessMenuAction` | 5 |  |
| [`SettingsQuickAccessMenu`](/game-api/types/alta-player/settingsquickaccessmenu) | class | `QuickAccessMenuAction` | 9 | Quick access menu action that opens a settings board in front of the local player: either client settings, or the server's settings for players with permission. Client side. |
| [`ShieldPartDefinition`](/game-api/types/alta-player/shieldpartdefinition) | class |  | 6 | One saved mesh part of a `NameBoardShield`: mesh, material and local transform. |
| [`ShowNames`](/game-api/types/alta-player/shownames) | class | `QuickAccessMenuAction` | 4 | Client: the quick access action that shows name boards above nearby players and player proxies. Names hide after a few seconds unless the player names toggle setting is on. |
| [`SummonActionItemQuickAccess`](/game-api/types/alta-player/summonactionitemquickaccess) | class | `QuickAccessMenuAction` | 4 | Quick access menu action that summons or dismisses an action item for the player through `ActionItemsManager`. |
| [`ToggleAccessibleDockMenuAction`](/game-api/types/alta-player/toggleaccessibledockmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`ToggleDebugMovementMenuAction`](/game-api/types/alta-player/toggledebugmovementmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`ToggleEnemyHealthBars`](/game-api/types/alta-player/toggleenemyhealthbars) | class | `QuickAccessMenuAction` | 3 |  |
| [`ToggleLiveDataDisplayMenuAction`](/game-api/types/alta-player/togglelivedatadisplaymenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`ToggleLocalSpeedMenuAction`](/game-api/types/alta-player/togglelocalspeedmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`ToggleRuntimeConsole`](/game-api/types/alta-player/toggleruntimeconsole) | class | `QuickAccessMenuAction` | 5 |  |
| [`TriggerDebugSetSpawnMenuAction`](/game-api/types/alta-player/triggerdebugsetspawnmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`UpdateFarClipMenuAction`](/game-api/types/alta-player/updatefarclipmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`UpdateHeightMenuAction`](/game-api/types/alta-player/updateheightmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`VivoxConnectionQuickAccessAction`](/game-api/types/alta-player/vivoxconnectionquickaccessaction) | class | `QuickAccessMenuAction` | 5 |  |
