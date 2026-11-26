---
title: "OldSaveData"
description: "Base for retired save data formats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OldSaveData

An **abstract class** in `Root.Township`, no namespace.

Base for retired save data formats. Its `Apply` refuses to load them.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`SaveData`](/game-api/types/alta-world/savedata)
- **Derived types** [`ChisellingDeckSaveData2`](/game-api/types/alta-crafting/chisellingdecksavedata2), [`OldChisellingDeckSaveData1`](/game-api/types/alta-crafting/oldchisellingdecksavedata1), [`CaveLayerManagerSaveData3`](/game-api/types/alta-world-generation/cavelayermanagersavedata3), [`CaveLayerManagerSaveDataOld`](/game-api/types/alta-world-generation/cavelayermanagersavedataold), [`CaveLayerManagerSaveDataOld2`](/game-api/types/alta-world-generation/cavelayermanagersavedataold2), [`FireSaveData1`](/game-api/types/alta-stats-effects/firesavedata1), [`HeatSourceBaseSaveData1`](/game-api/types/alta-stats-effects/heatsourcebasesavedata1), [`PickupDockSaveDataOld`](/game-api/types/alta-items/pickupdocksavedataold), [`LogicBoolSaveData1`](/game-api/types/alta-items/logicboolsavedata1), [`LogicFloatChangeOnBoolSaveData1`](/game-api/types/alta-items/logicfloatchangeonboolsavedata1), [`LogicFloatChangeOnBoolSaveData2`](/game-api/types/alta-items/logicfloatchangeonboolsavedata2), [`LogicGateSaveData1`](/game-api/types/alta-items/logicgatesavedata1), [`GeneratedLootSaveData1`](/game-api/types/alta-world-generation/generatedlootsavedata1), [`LootModuleSaveData1`](/game-api/types/alta-world-generation/lootmodulesavedata1), [`LootModuleSaveData2`](/game-api/types/alta-world-generation/lootmodulesavedata2), [`LootModuleSaveData3`](/game-api/types/alta-world-generation/lootmodulesavedata3), [`LootModuleSaveData4`](/game-api/types/alta-world-generation/lootmodulesavedata4), [`OldLandmarkSaveData1`](/game-api/types/alta-world/oldlandmarksavedata1), [`GlobalPagesManagerSaveData1`](/game-api/types/alta-items/globalpagesmanagersavedata1), [`PageInstanceSaveData1`](/game-api/types/alta-items/pageinstancesavedata1), [`PageInstanceSaveData2`](/game-api/types/alta-items/pageinstancesavedata2), [`PositionRestrictorSaveData2`](/game-api/types/alta-items/positionrestrictorsavedata2), [`PositionRestrictorSaveDataOld1`](/game-api/types/alta-items/positionrestrictorsavedataold1), [`PopulationFolderSaveData1`](/game-api/types/alta-world-generation/populationfoldersavedata1), [`PopulationSpawnAreaSaveData1`](/game-api/types/alta-world-generation/populationspawnareasavedata1), [`StatManagerSaveData1`](/game-api/types/alta-stats-effects/statmanagersavedata1), [`TaxSaveData1`](/game-api/types/alta-crafting/taxsavedata1), [`TradeVendorSaveDataOld`](/game-api/types/alta-crafting/tradevendorsavedataold), [`PlayerSaveFileData1`](/game-api/types/alta-utilities/playersavefiledata1), [`PlayerSaveFileData2`](/game-api/types/alta-utilities/playersavefiledata2), [`TreeSpawnerSaveData1`](/game-api/types/alta-crafting/treespawnersavedata1), [`WoodcutTreeSaveData1`](/game-api/types/alta-crafting/woodcuttreesavedata1), [`WoodcutTreeSaveData2`](/game-api/types/alta-crafting/woodcuttreesavedata2), [`SpiritModeDoorwaySaveDataOld1`](/game-api/types/game-other-namespaces/spiritmodedoorwaysavedataold1), [`BasicDecayData1`](/game-api/types/global-a-b/basicdecaydata1), [`BasicDecayData2`](/game-api/types/global-a-b/basicdecaydata2), [`DrawBridgeRangeLogicSaveData1`](/game-api/types/global-c-d/drawbridgerangelogicsavedata1), [`EmbeddableSaveData1`](/game-api/types/global-e-h/embeddablesavedata1), [`ClimbingTowerTeleporterNodeSaveDataOld1`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold1), [`ClimbingTowerTeleporterNodeSaveDataOld2`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold2), [`OrbBasinVfxControllerSaveData1`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1), [`GameTimeManagerSaveDataOld`](/game-api/types/global-e-h/gametimemanagersavedataold), [`LeaderboardManagerDataOld`](/game-api/types/global-i-l/leaderboardmanagerdataold), [`MouldSaveData1`](/game-api/types/global-m-o/mouldsavedata1), [`MovePickupSaveData1`](/game-api/types/global-m-o/movepickupsavedata1), [`PickupSaveDataOld1`](/game-api/types/global-p/pickupsavedataold1), [`PlaceItemNoDockFirePuzzleLogicSaveData1`](/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata1), [`PlaceItemNoDockPuzzleLogicSaveData1`](/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata1), [`PlaceItemPuzzleLogicSaveData1`](/game-api/types/global-p/placeitempuzzlelogicsavedata1), [`PlayerDetectSaveDataOld1`](/game-api/types/global-p/playerdetectsavedataold1), [`PlayerUnlockStationSaveDataOld1`](/game-api/types/global-p/playerunlockstationsavedataold1), [`PlayerUnlockStationSaveDataOld2`](/game-api/types/global-p/playerunlockstationsavedataold2), [`RepairBoxSaveDataOld`](/game-api/types/global-q-r/repairboxsavedataold), [`RepairBoxSaveDataOld2`](/game-api/types/global-q-r/repairboxsavedataold2), [`RepairBoxSaveDataOld3`](/game-api/types/global-q-r/repairboxsavedataold3), [`RepairBoxSaveDataOld4`](/game-api/types/global-q-r/repairboxsavedataold4), [`RopeGrabSaveData1`](/game-api/types/global-q-r/ropegrabsavedata1), [`SpawnInCircleSaveData1`](/game-api/types/global-s/spawnincirclesavedata1), [`TimeManagerSaveDataOld1`](/game-api/types/global-t-x/timemanagersavedataold1), [`TimeManagerSaveDataOld2`](/game-api/types/global-t-x/timemanagersavedataold2) and 2 more

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected OldSaveData()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger used when something tries to apply old save data directly. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override bool Apply(object component, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Logs an error that old save data was used and returns false, so nothing is applied. |
