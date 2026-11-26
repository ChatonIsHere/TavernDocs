---
title: "PlatformFlags"
description: "Flags for the platform the game runs on: Windows, Linux, Android, Android preview, and Quest and Pico (both include the Android bit), or Unknown."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformFlags

An **enum** in `Alta.PlatformInformation.Runtime`, `Alta.PlatformInformation`.

Flags for the platform the game runs on: Windows, Linux, Android, Android preview, and Quest and Pico (both include the Android bit), or Unknown.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-android" /><code>{"Android = 4"}</code> |
| <Link id="m-androidpreview" /><code>{"AndroidPreview = 8"}</code> |
| <Link id="m-linux" /><code>{"Linux = 2"}</code> |
| <Link id="m-pico" /><code>{"Pico = 36"}</code> |
| <Link id="m-quest" /><code>{"Quest = 20"}</code> |
| <Link id="m-unknown" /><code>{"Unknown = 65536"}</code> |
| <Link id="m-windows" /><code>{"Windows = 1"}</code> |

## Used in

Members of other types that take, return or hold a `PlatformFlags`:

<div className="api-used-in">

[`AddressableLoader.targetPlatform`](/mod/game-api/types/global-a-b/addressableloader#m-targetplatform), [`GlobalSettingsInstaller.PlatformConstrainedInstallers.validPlatforms`](/mod/game-api/types/assembly-other/globalsettingsinstaller-platformconstrainedinstallers#m-validplatforms), [`BasicObjectDisplay.displayOn`](/mod/game-api/types/alta-world-generation/basicobjectdisplay#m-displayon), [`SkinnedMeshPlatformQualityController.targetPlatforms`](/mod/game-api/types/alta-customization/skinnedmeshplatformqualitycontroller#m-targetplatforms), [`LocalPlatformProvider.GetAndroidSubPlatform`](/mod/game-api/types/assembly-other/localplatformprovider#m-getandroidsubplatform), [`LocalPlatformProvider.GetEditorBuildTargetPlatform`](/mod/game-api/types/assembly-other/localplatformprovider#m-geteditorbuildtargetplatform), [`LocalPlatformProvider.GetRuntimePlatform`](/mod/game-api/types/assembly-other/localplatformprovider#m-getruntimeplatform), [`OverridePlatformProvider.OverrideRuntime`](/mod/game-api/types/assembly-other/overrideplatformprovider#m-overrideruntime), [`OverridePlatformProvider.SetClientRuntimeOverride`](/mod/game-api/types/assembly-other/overrideplatformprovider#m-setclientruntimeoverride), [`PlatformProvider.HasFlag`](/mod/game-api/types/assembly-other/platformprovider#m-hasflag), [`PlatformProvider.IsActiveRuntime`](/mod/game-api/types/assembly-other/platformprovider#m-isactiveruntime), [`PlatformProvider.IsAndroidSubPlatform`](/mod/game-api/types/assembly-other/platformprovider#m-isandroidsubplatform), [`PlatformProvider.PlatformFlags`](/mod/game-api/types/assembly-other/platformprovider#m-platformflags), [`PlatformProvider.SetClientRuntimeOverride`](/mod/game-api/types/assembly-other/platformprovider#m-setclientruntimeoverride), [`QuickAccessMenuAction.isIgnoredOn`](/mod/game-api/types/alta-player/quickaccessmenuaction#m-isignoredon), [`BakeableTextureDecimator.PlatformTextures.targetPlatform`](/mod/game-api/types/global-a-b/bakeabletexturedecimator-platformtextures#m-targetplatform), [`NoShopForPlatformError.NoShopForPlatformError`](/mod/game-api/types/game-other-namespaces/noshopforplatformerror#m-ctor), [`NotLoggedInOnPlatformError.NotLoggedInOnPlatformError`](/mod/game-api/types/game-other-namespaces/notloggedinonplatformerror#m-ctor), [`ImportSettings.Find`](/mod/game-api/types/global-i-l/importsettings#m-find), [`ImportSettings.IsValid`](/mod/game-api/types/global-i-l/importsettings#m-isvalid), [`ImportSettings.PlatformSettings.platforms`](/mod/game-api/types/global-i-l/importsettings-platformsettings#m-platforms), [`PlatformComponents.PlatformObjectSetup.targetPlatforms`](/mod/game-api/types/global-p/platformcomponents-platformobjectsetup#m-targetplatforms), [`PlatformConditionAttribute.PlatformConditionAttribute`](/mod/game-api/types/assembly-other/platformconditionattribute#m-ctor), [`PlatformConditionAttribute.Runtime`](/mod/game-api/types/assembly-other/platformconditionattribute#m-runtime), [`PlatformDefines.GetDefines`](/mod/game-api/types/global-p/platformdefines#m-getdefines), [`PlatformDistanceLODModifier.PlatformDetails.platform`](/mod/game-api/types/global-p/platformdistancelodmodifier-platformdetails#m-platform), [`PlatformHeightOffset.platform`](/mod/game-api/types/global-p/platformheightoffset#m-platform), [`PlatformHeightOffset.PlatformHeightOffset`](/mod/game-api/types/global-p/platformheightoffset#m-ctor), [`PlatformHierarchyShuffler.targetPlatform`](/mod/game-api/types/global-p/platformhierarchyshuffler#m-targetplatform), [`PlatformLODController.PlatformDetails.platform`](/mod/game-api/types/global-p/platformlodcontroller-platformdetails#m-platform), [`PlatformLODModifier.PlatformDetails.platform`](/mod/game-api/types/global-p/platformlodmodifier-platformdetails#m-platform), [`PlatformMeshController.PlatformDetails.targetPlatform`](/mod/game-api/types/global-p/platformmeshcontroller-platformdetails#m-targetplatform), [`PlatformObjects.PlatformObjectSetup.PlatformObjectSetup`](/mod/game-api/types/global-p/platformobjects-platformobjectsetup#m-ctor-2), [`PlatformObjects.PlatformObjectSetup.targetPlatforms`](/mod/game-api/types/global-p/platformobjects-platformobjectsetup#m-targetplatforms), [`RuntimePlatformObject.targetPlatforms`](/mod/game-api/types/global-q-r/runtimeplatformobject#m-targetplatforms), [`ShaderVariantWarmer.PlatformCollection.platform`](/mod/game-api/types/global-s/shadervariantwarmer-platformcollection#m-platform).

</div>
