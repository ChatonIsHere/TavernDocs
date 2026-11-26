---
title: "GlobalSettings<T>"
description: "Base for global settings ScriptableObjects with a static Instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalSettings&lt;T&gt;

A **class** in `Alta.Global.Runtime`, `Alta.Global`.

Base for global settings ScriptableObjects with a static `Instance`. The instance is set when a `GlobalSettingsInitializer` or the lifetime-scope installer calls `InitializeInstance` at startup.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`GlobalSettings`](/game-api/types/assembly-other/globalsettings)
- **Derived types** [`CaveTeleportSettings`](/game-api/types/alta-world-generation/caveteleportsettings), [`CookingSettings`](/game-api/types/alta-crafting/cookingsettings), [`GenericCraftingSettings`](/game-api/types/alta-crafting/genericcraftingsettings), [`CustomizationPackingSettings`](/game-api/types/alta-customization/customizationpackingsettings), [`CustomizationSettings`](/game-api/types/alta-customization/customizationsettings), [`PurchasableMap`](/game-api/types/alta-customization/purchasablemap), [`MiningSettings`](/game-api/types/alta-items/miningsettings), [`LiquidSettings`](/game-api/types/alta-stats-effects/liquidsettings), [`ConnectionReceiveSettings`](/game-api/types/alta-networking/connectionreceivesettings), [`NetworkingSettings`](/game-api/types/alta-networking/networkingsettings), [`PrefabNameMap`](/game-api/types/alta-networking/prefabnamemap), [`KcpSettings`](/game-api/types/assembly-other/kcpsettings), [`QuickAccessMenuSettings`](/game-api/types/alta-player/quickaccessmenusettings), [`WoodcutSettings`](/game-api/types/alta-crafting/woodcutsettings), [`WindowsXRLoaderSettings`](/game-api/types/assembly-other/windowsxrloadersettings), [`AndroidLightSettings`](/game-api/types/global-a-b/androidlightsettings), [`MicroTutorialFaceOrbSpawnSettings`](/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings), [`MicroTutorialSystemSettings`](/game-api/types/game-other-namespaces/microtutorialsystemsettings), [`PlayerControllerPrefabs`](/game-api/types/game-other-namespaces/playercontrollerprefabs), [`RespawnSystemSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings), [`AudioEnvironmentBlendSettings`](/game-api/types/global-a-b/audioenvironmentblendsettings), [`ChiselRecipePageSettings`](/game-api/types/global-c-d/chiselrecipepagesettings), [`ClimberSettings`](/game-api/types/global-c-d/climbersettings), [`ClimbingSettings`](/game-api/types/global-c-d/climbingsettings), [`CommandLineArgumentsInEditor`](/game-api/types/assembly-other/commandlineargumentsineditor), [`CommonPrefabs`](/game-api/types/global-c-d/commonprefabs), [`DarknessSpawnerSettings`](/game-api/types/global-c-d/darknessspawnersettings), [`DurabilityGlobalSettings`](/game-api/types/global-c-d/durabilityglobalsettings), [`EdiblePageSettings`](/game-api/types/global-e-h/ediblepagesettings), [`EditorApiSettings`](/game-api/types/global-e-h/editorapisettings), [`EmbeddableGlobalSettings`](/game-api/types/global-e-h/embeddableglobalsettings), [`AddressableResolverSettings`](/game-api/types/game-other-namespaces/addressableresolversettings), [`GameAchievementSettings`](/game-api/types/global-e-h/gameachievementsettings), [`GeneratedPageSettings`](/game-api/types/global-e-h/generatedpagesettings), [`GenericCraftingRecipePageSettings`](/game-api/types/global-e-h/genericcraftingrecipepagesettings), [`GrabAssistSettings`](/game-api/types/global-e-h/grabassistsettings), [`ImpactSoundSettings`](/game-api/types/global-i-l/impactsoundsettings), [`InGameGizmosSettings`](/game-api/types/global-i-l/ingamegizmossettings), [`IngredientPageSettings`](/game-api/types/global-i-l/ingredientpagesettings), [`MenuSettings`](/game-api/types/global-m-o/menusettings), [`NameBoardsSettings`](/game-api/types/global-m-o/nameboardssettings), [`NetworkTransportPackageVersion`](/game-api/types/global-m-o/networktransportpackageversion), [`ObjectIssueLog`](/game-api/types/global-m-o/objectissuelog), [`PageLootSettings`](/game-api/types/global-p/pagelootsettings), [`PickupTypeSettings`](/game-api/types/global-p/pickuptypesettings), [`PlayerVisionComfortSettings`](/game-api/types/global-p/playervisioncomfortsettings), [`PositionSurfaceDefinitionSettings`](/game-api/types/global-p/positionsurfacedefinitionsettings), [`ProfilingPositionCycler`](/game-api/types/global-p/profilingpositioncycler), [`ProgressionSettings`](/game-api/types/global-p/progressionsettings), [`ServerDiagnosticsSettings`](/game-api/types/global-s/serverdiagnosticssettings), [`SmoothLocomotionSettings`](/game-api/types/global-s/smoothlocomotionsettings), [`SpecialBiomeAttributes`](/game-api/types/global-s/specialbiomeattributes), [`StewRecipePageSettings`](/game-api/types/global-s/stewrecipepagesettings), [`UnityEditorLoggingSettings`](/game-api/types/global-t-x/unityeditorloggingsettings)
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#globalsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static T instance"}</code> | The settings asset, set by `InitializeInstance`. |
| <Link id="m-startedcount" /><code>{"private static int startedCount"}</code> | Unused. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static T Instance { get; }"}</code> | The active settings asset. Null until it has been initialized (the editor fallback returns null in this build). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeinstance" /><code>{"sealed override void InitializeInstance()"}</code> | Makes this asset the static `Instance`. Called at startup for every listed settings asset. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-geteditorinstance" /><code>{"private static T GetEditorInstance()"}</code> | Returns null in this build; `Instance` stays null until the asset is initialized. |

</details>
