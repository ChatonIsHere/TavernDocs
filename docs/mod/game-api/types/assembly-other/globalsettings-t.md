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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GlobalSettings`](/mod/game-api/types/assembly-other/globalsettings)
- **Derived types** [`CaveTeleportSettings`](/mod/game-api/types/alta-world-generation/caveteleportsettings), [`CookingSettings`](/mod/game-api/types/alta-crafting/cookingsettings), [`GenericCraftingSettings`](/mod/game-api/types/alta-crafting/genericcraftingsettings), [`CustomizationPackingSettings`](/mod/game-api/types/alta-customization/customizationpackingsettings), [`CustomizationSettings`](/mod/game-api/types/alta-customization/customizationsettings), [`PurchasableMap`](/mod/game-api/types/alta-customization/purchasablemap), [`MiningSettings`](/mod/game-api/types/alta-items/miningsettings), [`LiquidSettings`](/mod/game-api/types/alta-stats-effects/liquidsettings), [`ConnectionReceiveSettings`](/mod/game-api/types/alta-networking/connectionreceivesettings), [`NetworkingSettings`](/mod/game-api/types/alta-networking/networkingsettings), [`PrefabNameMap`](/mod/game-api/types/alta-networking/prefabnamemap), [`KcpSettings`](/mod/game-api/types/assembly-other/kcpsettings), [`QuickAccessMenuSettings`](/mod/game-api/types/alta-player/quickaccessmenusettings), [`WoodcutSettings`](/mod/game-api/types/alta-crafting/woodcutsettings), [`WindowsXRLoaderSettings`](/mod/game-api/types/assembly-other/windowsxrloadersettings), [`AndroidLightSettings`](/mod/game-api/types/global-a-b/androidlightsettings), [`MicroTutorialFaceOrbSpawnSettings`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings), [`MicroTutorialSystemSettings`](/mod/game-api/types/game-other-namespaces/microtutorialsystemsettings), [`PlayerControllerPrefabs`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs), [`RespawnSystemSettings`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings), [`AudioEnvironmentBlendSettings`](/mod/game-api/types/global-a-b/audioenvironmentblendsettings), [`ChiselRecipePageSettings`](/mod/game-api/types/global-c-d/chiselrecipepagesettings), [`ClimberSettings`](/mod/game-api/types/global-c-d/climbersettings), [`ClimbingSettings`](/mod/game-api/types/global-c-d/climbingsettings), [`CommandLineArgumentsInEditor`](/mod/game-api/types/assembly-other/commandlineargumentsineditor), [`CommonPrefabs`](/mod/game-api/types/global-c-d/commonprefabs), [`DarknessSpawnerSettings`](/mod/game-api/types/global-c-d/darknessspawnersettings), [`DurabilityGlobalSettings`](/mod/game-api/types/global-c-d/durabilityglobalsettings), [`EdiblePageSettings`](/mod/game-api/types/global-e-h/ediblepagesettings), [`EditorApiSettings`](/mod/game-api/types/global-e-h/editorapisettings), [`EmbeddableGlobalSettings`](/mod/game-api/types/global-e-h/embeddableglobalsettings), [`AddressableResolverSettings`](/mod/game-api/types/game-other-namespaces/addressableresolversettings), [`GameAchievementSettings`](/mod/game-api/types/global-e-h/gameachievementsettings), [`GeneratedPageSettings`](/mod/game-api/types/global-e-h/generatedpagesettings), [`GenericCraftingRecipePageSettings`](/mod/game-api/types/global-e-h/genericcraftingrecipepagesettings), [`GrabAssistSettings`](/mod/game-api/types/global-e-h/grabassistsettings), [`ImpactSoundSettings`](/mod/game-api/types/global-i-l/impactsoundsettings), [`InGameGizmosSettings`](/mod/game-api/types/global-i-l/ingamegizmossettings), [`IngredientPageSettings`](/mod/game-api/types/global-i-l/ingredientpagesettings), [`MenuSettings`](/mod/game-api/types/global-m-o/menusettings), [`NameBoardsSettings`](/mod/game-api/types/global-m-o/nameboardssettings), [`NetworkTransportPackageVersion`](/mod/game-api/types/global-m-o/networktransportpackageversion), [`ObjectIssueLog`](/mod/game-api/types/global-m-o/objectissuelog), [`PageLootSettings`](/mod/game-api/types/global-p/pagelootsettings), [`PickupTypeSettings`](/mod/game-api/types/global-p/pickuptypesettings), [`PlayerVisionComfortSettings`](/mod/game-api/types/global-p/playervisioncomfortsettings), [`PositionSurfaceDefinitionSettings`](/mod/game-api/types/global-p/positionsurfacedefinitionsettings), [`ProfilingPositionCycler`](/mod/game-api/types/global-p/profilingpositioncycler), [`ProgressionSettings`](/mod/game-api/types/global-p/progressionsettings), [`ServerDiagnosticsSettings`](/mod/game-api/types/global-s/serverdiagnosticssettings), [`SmoothLocomotionSettings`](/mod/game-api/types/global-s/smoothlocomotionsettings), [`SpecialBiomeAttributes`](/mod/game-api/types/global-s/specialbiomeattributes), [`StewRecipePageSettings`](/mod/game-api/types/global-s/stewrecipepagesettings), [`UnityEditorLoggingSettings`](/mod/game-api/types/global-t-x/unityeditorloggingsettings)
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files#globalsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static T instance"}</code> | <span className="api-desc">The settings asset, set by `InitializeInstance`.</span> |
| <Link id="m-startedcount" /><code>{"private static int startedCount"}</code> | <span className="api-desc">Unused.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static T Instance { get; }"}</code> | <span className="api-desc">The active settings asset. Null until it has been initialized (the editor fallback returns null in this build).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeinstance" /><code>{"sealed override void InitializeInstance()"}</code> | <span className="api-desc">Makes this asset the static `Instance`. Called at startup for every listed settings asset.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-geteditorinstance" /><code>{"private static T GetEditorInstance()"}</code> | <span className="api-desc">Returns null in this build; `Instance` stays null until the asset is initialized.</span> |

</details>
