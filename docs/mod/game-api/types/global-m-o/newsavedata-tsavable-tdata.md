---
title: "NewSaveData<TSavable, TData>"
description: "Base for the current version of a component's save data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NewSaveData&lt;TSavable, TData&gt;

An **abstract class** in `Root.Township`, the global namespace.

Base for the current version of a component's save data. `Apply` hands the data to the component's `ISavable<TData>.Load`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`SaveData`](/mod/game-api/types/alta-world/savedata)
- **Derived types** [`AdditionalStaticContentSaveData`](/mod/game-api/types/global-a-b/additionalstaticcontentsavedata), [`SmelterSaveData`](/mod/game-api/types/alta-crafting/smeltersavedata), [`ChisellingDeckSaveData`](/mod/game-api/types/alta-crafting/chisellingdecksavedata), [`CaveLayerManagerSaveData`](/mod/game-api/types/alta-world-generation/cavelayermanagersavedata), [`CaveTeleporterData`](/mod/game-api/types/alta-world-generation/caveteleporterdata), [`CaveTeleporterManagerData`](/mod/game-api/types/alta-world-generation/caveteleportermanagerdata), [`CaveLayerStreamerSaveData`](/mod/game-api/types/alta-world/cavelayerstreamersavedata), [`CylindricalBoundsSurfaceSaveData`](/mod/game-api/types/alta-world/cylindricalboundssurfacesavedata), [`DirectionalBoundsSurfaceSave`](/mod/game-api/types/alta-world/directionalboundssurfacesave), [`SphericalSurfaceSaveData`](/mod/game-api/types/alta-world/sphericalsurfacesavedata), [`CookableSaveData`](/mod/game-api/types/alta-crafting/cookablesavedata), [`CookingPotSaveData`](/mod/game-api/types/alta-crafting/cookingpotsavedata), [`StewManagerSaveData`](/mod/game-api/types/alta-crafting/stewmanagersavedata), [`GenericAssemblyStationData`](/mod/game-api/types/alta-crafting/genericassemblystationdata), [`GenericCraftingStationData`](/mod/game-api/types/alta-crafting/genericcraftingstationdata), [`EnchantableData`](/mod/game-api/types/alta-crafting/enchantabledata), [`ForestGeneratorSaveData`](/mod/game-api/types/alta-world-generation/forestgeneratorsavedata), [`FireSaveData`](/mod/game-api/types/alta-stats-effects/firesavedata), [`HeatSourceBaseSaveData`](/mod/game-api/types/alta-stats-effects/heatsourcebasesavedata), [`CommunalStorageData`](/mod/game-api/types/alta-items/communalstoragedata), [`LockableHingeSaveData`](/mod/game-api/types/alta-items/lockablehingesavedata), [`PickupDockSaveData`](/mod/game-api/types/alta-items/pickupdocksavedata), [`LiquidContainerSaveData`](/mod/game-api/types/alta-stats-effects/liquidcontainersavedata), [`LogicBoolReceiverData`](/mod/game-api/types/alta-items/logicboolreceiverdata), [`LogicBoolSaveData`](/mod/game-api/types/alta-items/logicboolsavedata), [`LogicFloatChangeOnBoolSaveData`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata), [`LogicFloatRangeSaveData`](/mod/game-api/types/alta-items/logicfloatrangesavedata), [`LogicFloatReceiverData`](/mod/game-api/types/alta-items/logicfloatreceiverdata), [`LogicFloatResetSaveData`](/mod/game-api/types/alta-items/logicfloatresetsavedata), [`LogicFloatSaveData`](/mod/game-api/types/alta-items/logicfloatsavedata), [`LogicFloatThresholdSaveData`](/mod/game-api/types/alta-items/logicfloatthresholdsavedata), [`LogicGateSaveData`](/mod/game-api/types/alta-items/logicgatesavedata), [`LogicIntRangeSaveData`](/mod/game-api/types/alta-items/logicintrangesavedata), [`LogicIntReceiverData`](/mod/game-api/types/alta-items/logicintreceiverdata), [`LogicIntSaveData`](/mod/game-api/types/alta-items/logicintsavedata), [`LogicIntThresholdSaveData`](/mod/game-api/types/alta-items/logicintthresholdsavedata), [`LogicIntToBoolData`](/mod/game-api/types/alta-items/logicinttobooldata), [`LogicManagerData`](/mod/game-api/types/alta-items/logicmanagerdata), [`LogicSumFloatSaveData`](/mod/game-api/types/alta-items/logicsumfloatsavedata), [`LogicSumIntSaveData`](/mod/game-api/types/alta-items/logicsumintsavedata), [`LogicVector3ReceiverData`](/mod/game-api/types/alta-items/logicvector3receiverdata), [`LogicVector3SaveData`](/mod/game-api/types/alta-items/logicvector3savedata), [`PositionProviderSaveData`](/mod/game-api/types/alta-items/positionprovidersavedata), [`GeneratedLootSaveData`](/mod/game-api/types/alta-world-generation/generatedlootsavedata), [`LootModuleSaveData`](/mod/game-api/types/alta-world-generation/lootmodulesavedata), [`PresetLootModuleSaveData`](/mod/game-api/types/alta-world-generation/presetlootmodulesavedata), [`InfoBoardSaveData`](/mod/game-api/types/alta-world/infoboardsavedata), [`LandmarkDiscoverZoneSaveData`](/mod/game-api/types/alta-world/landmarkdiscoverzonesavedata), [`LandmarkManagerSaveData`](/mod/game-api/types/alta-world/landmarkmanagersavedata), [`LandmarkSaveData`](/mod/game-api/types/alta-world/landmarksavedata), [`MapBoardSaveData1`](/mod/game-api/types/alta-world/mapboardsavedata1), [`ModifiableStaticManagerSaveData`](/mod/game-api/types/alta-networking/modifiablestaticmanagersavedata), [`NetworkRigidbodySaveData`](/mod/game-api/types/alta-networking/networkrigidbodysavedata), [`BookRestrictorSaveData`](/mod/game-api/types/alta-items/bookrestrictorsavedata), [`BookSaveData`](/mod/game-api/types/alta-items/booksavedata), [`GlobalPagesManagerSaveData`](/mod/game-api/types/alta-items/globalpagesmanagersavedata), [`PageInstanceSaveData`](/mod/game-api/types/alta-items/pageinstancesavedata), [`PositionRestrictorSaveData`](/mod/game-api/types/alta-items/positionrestrictorsavedata), [`BasicPopulationFolderSaveData`](/mod/game-api/types/alta-world-generation/basicpopulationfoldersavedata), [`EcosystemSaveData`](/mod/game-api/types/alta-world-generation/ecosystemsavedata) and 99 more

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NewSaveData()"}</code> | <span className="api-desc">Creates a `NewSaveData` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for load failures and missing migrations.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override bool Apply(object target, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Calls `Load` on the target with this data. Logs and returns false if loading throws.</span> |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Logs an error and returns null: the latest version has nothing to migrate to.</span> |
