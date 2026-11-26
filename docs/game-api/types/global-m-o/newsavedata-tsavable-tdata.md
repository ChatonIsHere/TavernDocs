---
title: "NewSaveData<TSavable, TData>"
description: "Base for the current version of a component's save data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NewSaveData&lt;TSavable, TData&gt;

An **abstract class** in `Root.Township`, no namespace.

Base for the current version of a component's save data. `Apply` hands the data to the component's `ISavable<TData>.Load`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`SaveData`](/game-api/types/alta-world/savedata)
- **Derived types** [`AdditionalStaticContentSaveData`](/game-api/types/global-a-b/additionalstaticcontentsavedata), [`SmelterSaveData`](/game-api/types/alta-crafting/smeltersavedata), [`ChisellingDeckSaveData`](/game-api/types/alta-crafting/chisellingdecksavedata), [`CaveLayerManagerSaveData`](/game-api/types/alta-world-generation/cavelayermanagersavedata), [`CaveTeleporterData`](/game-api/types/alta-world-generation/caveteleporterdata), [`CaveTeleporterManagerData`](/game-api/types/alta-world-generation/caveteleportermanagerdata), [`CaveLayerStreamerSaveData`](/game-api/types/alta-world/cavelayerstreamersavedata), [`CylindricalBoundsSurfaceSaveData`](/game-api/types/alta-world/cylindricalboundssurfacesavedata), [`DirectionalBoundsSurfaceSave`](/game-api/types/alta-world/directionalboundssurfacesave), [`SphericalSurfaceSaveData`](/game-api/types/alta-world/sphericalsurfacesavedata), [`CookableSaveData`](/game-api/types/alta-crafting/cookablesavedata), [`CookingPotSaveData`](/game-api/types/alta-crafting/cookingpotsavedata), [`StewManagerSaveData`](/game-api/types/alta-crafting/stewmanagersavedata), [`GenericAssemblyStationData`](/game-api/types/alta-crafting/genericassemblystationdata), [`GenericCraftingStationData`](/game-api/types/alta-crafting/genericcraftingstationdata), [`EnchantableData`](/game-api/types/alta-crafting/enchantabledata), [`ForestGeneratorSaveData`](/game-api/types/alta-world-generation/forestgeneratorsavedata), [`FireSaveData`](/game-api/types/alta-stats-effects/firesavedata), [`HeatSourceBaseSaveData`](/game-api/types/alta-stats-effects/heatsourcebasesavedata), [`CommunalStorageData`](/game-api/types/alta-items/communalstoragedata), [`LockableHingeSaveData`](/game-api/types/alta-items/lockablehingesavedata), [`PickupDockSaveData`](/game-api/types/alta-items/pickupdocksavedata), [`LiquidContainerSaveData`](/game-api/types/alta-stats-effects/liquidcontainersavedata), [`LogicBoolReceiverData`](/game-api/types/alta-items/logicboolreceiverdata), [`LogicBoolSaveData`](/game-api/types/alta-items/logicboolsavedata), [`LogicFloatChangeOnBoolSaveData`](/game-api/types/alta-items/logicfloatchangeonboolsavedata), [`LogicFloatRangeSaveData`](/game-api/types/alta-items/logicfloatrangesavedata), [`LogicFloatReceiverData`](/game-api/types/alta-items/logicfloatreceiverdata), [`LogicFloatResetSaveData`](/game-api/types/alta-items/logicfloatresetsavedata), [`LogicFloatSaveData`](/game-api/types/alta-items/logicfloatsavedata), [`LogicFloatThresholdSaveData`](/game-api/types/alta-items/logicfloatthresholdsavedata), [`LogicGateSaveData`](/game-api/types/alta-items/logicgatesavedata), [`LogicIntRangeSaveData`](/game-api/types/alta-items/logicintrangesavedata), [`LogicIntReceiverData`](/game-api/types/alta-items/logicintreceiverdata), [`LogicIntSaveData`](/game-api/types/alta-items/logicintsavedata), [`LogicIntThresholdSaveData`](/game-api/types/alta-items/logicintthresholdsavedata), [`LogicIntToBoolData`](/game-api/types/alta-items/logicinttobooldata), [`LogicManagerData`](/game-api/types/alta-items/logicmanagerdata), [`LogicSumFloatSaveData`](/game-api/types/alta-items/logicsumfloatsavedata), [`LogicSumIntSaveData`](/game-api/types/alta-items/logicsumintsavedata), [`LogicVector3ReceiverData`](/game-api/types/alta-items/logicvector3receiverdata), [`LogicVector3SaveData`](/game-api/types/alta-items/logicvector3savedata), [`PositionProviderSaveData`](/game-api/types/alta-items/positionprovidersavedata), [`GeneratedLootSaveData`](/game-api/types/alta-world-generation/generatedlootsavedata), [`LootModuleSaveData`](/game-api/types/alta-world-generation/lootmodulesavedata), [`PresetLootModuleSaveData`](/game-api/types/alta-world-generation/presetlootmodulesavedata), [`InfoBoardSaveData`](/game-api/types/alta-world/infoboardsavedata), [`LandmarkDiscoverZoneSaveData`](/game-api/types/alta-world/landmarkdiscoverzonesavedata), [`LandmarkManagerSaveData`](/game-api/types/alta-world/landmarkmanagersavedata), [`LandmarkSaveData`](/game-api/types/alta-world/landmarksavedata), [`MapBoardSaveData1`](/game-api/types/alta-world/mapboardsavedata1), [`ModifiableStaticManagerSaveData`](/game-api/types/alta-networking/modifiablestaticmanagersavedata), [`NetworkRigidbodySaveData`](/game-api/types/alta-networking/networkrigidbodysavedata), [`BookRestrictorSaveData`](/game-api/types/alta-items/bookrestrictorsavedata), [`BookSaveData`](/game-api/types/alta-items/booksavedata), [`GlobalPagesManagerSaveData`](/game-api/types/alta-items/globalpagesmanagersavedata), [`PageInstanceSaveData`](/game-api/types/alta-items/pageinstancesavedata), [`PositionRestrictorSaveData`](/game-api/types/alta-items/positionrestrictorsavedata), [`BasicPopulationFolderSaveData`](/game-api/types/alta-world-generation/basicpopulationfoldersavedata), [`EcosystemSaveData`](/game-api/types/alta-world-generation/ecosystemsavedata) and 99 more

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected NewSaveData()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for load failures and missing migrations. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override bool Apply(object target, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Calls `Load` on the target with this data. Logs and returns false if loading throws. |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Logs an error and returns null: the latest version has nothing to migrate to. |
