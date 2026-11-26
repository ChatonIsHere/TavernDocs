---
title: "OldSaveData"
description: "Base for retired save data formats."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OldSaveData

An **abstract class** in `Root.Township`, the global namespace.

Base for retired save data formats. Its `Apply` refuses to load them.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`SaveData`](/mod/game-api/types/alta-world/savedata)
- **Derived types** [`ChisellingDeckSaveData2`](/mod/game-api/types/alta-crafting/chisellingdecksavedata2), [`OldChisellingDeckSaveData1`](/mod/game-api/types/alta-crafting/oldchisellingdecksavedata1), [`CaveLayerManagerSaveData3`](/mod/game-api/types/alta-world-generation/cavelayermanagersavedata3), [`CaveLayerManagerSaveDataOld`](/mod/game-api/types/alta-world-generation/cavelayermanagersavedataold), [`CaveLayerManagerSaveDataOld2`](/mod/game-api/types/alta-world-generation/cavelayermanagersavedataold2), [`FireSaveData1`](/mod/game-api/types/alta-stats-effects/firesavedata1), [`HeatSourceBaseSaveData1`](/mod/game-api/types/alta-stats-effects/heatsourcebasesavedata1), [`PickupDockSaveDataOld`](/mod/game-api/types/alta-items/pickupdocksavedataold), [`LogicBoolSaveData1`](/mod/game-api/types/alta-items/logicboolsavedata1), [`LogicFloatChangeOnBoolSaveData1`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata1), [`LogicFloatChangeOnBoolSaveData2`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata2), [`LogicGateSaveData1`](/mod/game-api/types/alta-items/logicgatesavedata1), [`GeneratedLootSaveData1`](/mod/game-api/types/alta-world-generation/generatedlootsavedata1), [`LootModuleSaveData1`](/mod/game-api/types/alta-world-generation/lootmodulesavedata1), [`LootModuleSaveData2`](/mod/game-api/types/alta-world-generation/lootmodulesavedata2), [`LootModuleSaveData3`](/mod/game-api/types/alta-world-generation/lootmodulesavedata3), [`LootModuleSaveData4`](/mod/game-api/types/alta-world-generation/lootmodulesavedata4), [`OldLandmarkSaveData1`](/mod/game-api/types/alta-world/oldlandmarksavedata1), [`GlobalPagesManagerSaveData1`](/mod/game-api/types/alta-items/globalpagesmanagersavedata1), [`PageInstanceSaveData1`](/mod/game-api/types/alta-items/pageinstancesavedata1), [`PageInstanceSaveData2`](/mod/game-api/types/alta-items/pageinstancesavedata2), [`PositionRestrictorSaveData2`](/mod/game-api/types/alta-items/positionrestrictorsavedata2), [`PositionRestrictorSaveDataOld1`](/mod/game-api/types/alta-items/positionrestrictorsavedataold1), [`PopulationFolderSaveData1`](/mod/game-api/types/alta-world-generation/populationfoldersavedata1), [`PopulationSpawnAreaSaveData1`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata1), [`StatManagerSaveData1`](/mod/game-api/types/alta-stats-effects/statmanagersavedata1), [`TaxSaveData1`](/mod/game-api/types/alta-crafting/taxsavedata1), [`TradeVendorSaveDataOld`](/mod/game-api/types/alta-crafting/tradevendorsavedataold), [`PlayerSaveFileData1`](/mod/game-api/types/alta-utilities/playersavefiledata1), [`PlayerSaveFileData2`](/mod/game-api/types/alta-utilities/playersavefiledata2), [`TreeSpawnerSaveData1`](/mod/game-api/types/alta-crafting/treespawnersavedata1), [`WoodcutTreeSaveData1`](/mod/game-api/types/alta-crafting/woodcuttreesavedata1), [`WoodcutTreeSaveData2`](/mod/game-api/types/alta-crafting/woodcuttreesavedata2), [`SpiritModeDoorwaySaveDataOld1`](/mod/game-api/types/game-other-namespaces/spiritmodedoorwaysavedataold1), [`BasicDecayData1`](/mod/game-api/types/global-a-b/basicdecaydata1), [`BasicDecayData2`](/mod/game-api/types/global-a-b/basicdecaydata2), [`DrawBridgeRangeLogicSaveData1`](/mod/game-api/types/global-c-d/drawbridgerangelogicsavedata1), [`EmbeddableSaveData1`](/mod/game-api/types/global-e-h/embeddablesavedata1), [`ClimbingTowerTeleporterNodeSaveDataOld1`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold1), [`ClimbingTowerTeleporterNodeSaveDataOld2`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedataold2), [`OrbBasinVfxControllerSaveData1`](/mod/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata1), [`GameTimeManagerSaveDataOld`](/mod/game-api/types/global-e-h/gametimemanagersavedataold), [`LeaderboardManagerDataOld`](/mod/game-api/types/global-i-l/leaderboardmanagerdataold), [`MouldSaveData1`](/mod/game-api/types/global-m-o/mouldsavedata1), [`MovePickupSaveData1`](/mod/game-api/types/global-m-o/movepickupsavedata1), [`PickupSaveDataOld1`](/mod/game-api/types/global-p/pickupsavedataold1), [`PlaceItemNoDockFirePuzzleLogicSaveData1`](/mod/game-api/types/global-p/placeitemnodockfirepuzzlelogicsavedata1), [`PlaceItemNoDockPuzzleLogicSaveData1`](/mod/game-api/types/global-p/placeitemnodockpuzzlelogicsavedata1), [`PlaceItemPuzzleLogicSaveData1`](/mod/game-api/types/global-p/placeitempuzzlelogicsavedata1), [`PlayerDetectSaveDataOld1`](/mod/game-api/types/global-p/playerdetectsavedataold1), [`PlayerUnlockStationSaveDataOld1`](/mod/game-api/types/global-p/playerunlockstationsavedataold1), [`PlayerUnlockStationSaveDataOld2`](/mod/game-api/types/global-p/playerunlockstationsavedataold2), [`RepairBoxSaveDataOld`](/mod/game-api/types/global-q-r/repairboxsavedataold), [`RepairBoxSaveDataOld2`](/mod/game-api/types/global-q-r/repairboxsavedataold2), [`RepairBoxSaveDataOld3`](/mod/game-api/types/global-q-r/repairboxsavedataold3), [`RepairBoxSaveDataOld4`](/mod/game-api/types/global-q-r/repairboxsavedataold4), [`RopeGrabSaveData1`](/mod/game-api/types/global-q-r/ropegrabsavedata1), [`SpawnInCircleSaveData1`](/mod/game-api/types/global-s/spawnincirclesavedata1), [`TimeManagerSaveDataOld1`](/mod/game-api/types/global-t-x/timemanagersavedataold1), [`TimeManagerSaveDataOld2`](/mod/game-api/types/global-t-x/timemanagersavedataold2) and 2 more

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected OldSaveData()"}</code> | <span className="api-desc">Creates an `OldSaveData` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger used when something tries to apply old save data directly.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"override bool Apply(object component, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Logs an error that old save data was used and returns false, so nothing is applied.</span> |
