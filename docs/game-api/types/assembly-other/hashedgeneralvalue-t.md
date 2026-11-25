---
title: "HashedGeneralValue<T>"
description: "Base for game data assets (items, stats, recipes, materials and so on) that have a numeric hash."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HashedGeneralValue&lt;T&gt;

An **abstract class** in `Alta.Values`, `Alta`.

Base for game data assets (items, stats, recipes, materials and so on) that have a numeric hash. Assets are loaded lazily from `Resources` under the paths in `HashedPathAttribute`, or the type name if none.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`HashedGeneralValue`](/game-api/types/assembly-other/hashedgeneralvalue)
- **Derived types** [`EffectDefinition`](/game-api/types/alta-stats-effects/effectdefinition), [`SmelterUpgrades`](/game-api/types/alta-crafting/smelterupgrades), [`SmeltingRecipe`](/game-api/types/alta-crafting/smeltingrecipe), [`Biome`](/game-api/types/alta-world-generation/biome), [`Distribution<TThis, T, TItem, TFestivityGroup>`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup), [`LiquidVisualChunkDefinition`](/game-api/types/alta-crafting/liquidvisualchunkdefinition), [`StewRecipe`](/game-api/types/alta-crafting/stewrecipe), [`CraftingPartType`](/game-api/types/alta-crafting/craftingparttype), [`CosmeticColor`](/game-api/types/alta-customization/cosmeticcolor), [`PlayerEquipmentDefinition`](/game-api/types/alta-customization/playerequipmentdefinition), [`Enchantment`](/game-api/types/alta-crafting/enchantment), [`BoulderDefinition`](/game-api/types/alta-items/boulderdefinition), [`CommunalStorageUniqueIdentifier`](/game-api/types/alta-items/communalstorageuniqueidentifier), [`Item`](/game-api/types/alta-items/item), [`LiquidDefinition`](/game-api/types/alta-stats-effects/liquiddefinition), [`LogicChannel`](/game-api/types/alta-items/logicchannel), [`PresetLootSet`](/game-api/types/alta-world-generation/presetlootset), [`LandmarkIcon`](/game-api/types/alta-world/landmarkicon), [`Map`](/game-api/types/alta-world/map), [`MapPiece`](/game-api/types/alta-world/mappiece), [`Tag`](/game-api/types/alta-world-generation/tag), [`Glyph`](/game-api/types/alta-items/glyph), [`PageCollection`](/game-api/types/alta-items/pagecollection), [`GlobalPopulationDefinition`](/game-api/types/alta-world-generation/globalpopulationdefinition), [`PopulationDefinition`](/game-api/types/alta-world-generation/populationdefinition), [`PopulationRaycast`](/game-api/types/alta-world-generation/populationraycast), [`PopulationSetup`](/game-api/types/alta-world-generation/populationsetup), [`MeshPlacementData`](/game-api/types/alta-crafting/meshplacementdata), [`VisibilityData`](/game-api/types/alta-crafting/visibilitydata), [`SimpleHashedGeneralValue<T>`](/game-api/types/alta-utilities/simplehashedgeneralvalue-t), [`StatDefinition`](/game-api/types/alta-stats-effects/statdefinition), [`MaterialPropertyBlockSettings<T>`](/game-api/types/alta-utilities/materialpropertyblocksettings-t), [`PlayerSaveData`](/game-api/types/alta-utilities/playersavedata), [`PresetTree`](/game-api/types/alta-crafting/presettree), [`TreeSpecies`](/game-api/types/alta-crafting/treespecies), [`MicroTutorialStep`](/game-api/types/game-other-namespaces/microtutorialstep), [`BiomePreset`](/game-api/types/global-a-b/biomepreset), [`Curve`](/game-api/types/global-c-d/curve), [`VfxData`](/game-api/types/game-other-namespaces/vfxdata), [`Festivity`](/game-api/types/global-e-h/festivity), [`ForestBiome`](/game-api/types/global-e-h/forestbiome), [`GameAction`](/game-api/types/global-e-h/gameaction), [`GrowthDefinition`](/game-api/types/global-e-h/growthdefinition), [`LeaderboardDefinition`](/game-api/types/global-i-l/leaderboarddefinition), [`MouldDefinition`](/game-api/types/global-m-o/moulddefinition), [`PhysicalMaterial`](/game-api/types/global-p/physicalmaterial), [`PlayerProgressFlag`](/game-api/types/global-p/playerprogressflag), [`PlayerUnlock`](/game-api/types/global-p/playerunlock), [`PrefabStageDefinition`](/game-api/types/global-p/prefabstagedefinition), [`ProfessionSkill`](/game-api/types/global-p/professionskill), [`SetPieceData`](/game-api/types/global-s/setpiecedata), [`TimedPrefabStageDefinition`](/game-api/types/global-t-x/timedprefabstagedefinition)
- **Documented in** [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected HashedGeneralValue()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static readonly Logger logger"}</code> | Shared NLog logger for every hashed value of this type. Logs missing hashes and names. |

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isfail" /><code>{"private static bool isFail"}</code> |
| <Link id="m-isinresourceloading" /><code>{"private static bool isInResourceLoading"}</code> |
| <Link id="m-items" /><code>{"private static Dictionary<uint, T> items"}</code> |
| <Link id="m-itemsbyname" /><code>{"private static Dictionary<string, T> itemsByName"}</code> |
| <Link id="m-paths" /><code>{"private static string[] paths"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"static IEnumerable<T> All { get; }"}</code> | Every loaded asset of this type. Loads them on first use. |
| <Link id="m-count" /><code>{"static int Count { get; }"}</code> | How many assets of this type are loaded. Loads them on first use. |
| <Link id="m-type" /><code>{"override Type Type { get; }"}</code> | The concrete asset type `T`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkitems" /><code>{"static void CheckItems()"}</code> | Loads all assets of this type from `Resources` into the hash table if not already loaded. Called by the getters, so you rarely need it. |
| <Link id="m-get" /><code>{"static T Get(uint hash)"}</code> | Finds an asset by hash (0 gives null) or by name. The name lookup strips spaces but does not lowercase your input, and names are stored lowercased, so pass lowercase. |
| <Link id="m-get-2" /><code>{"static T Get(string name, bool isLogging = true)"}</code> | Finds an asset by hash (0 gives null) or by name. The name lookup strips spaces but does not lowercase your input, and names are stored lowercased, so pass lowercase. |
| <Link id="m-validatefortutorialineditor" /><code>{"void ValidateForTutorialInEditor()"}</code> | Empty in this build. |
| <Link id="m-validatehashes" /><code>{"void ValidateHashes()"}</code> | Checks this asset's hash is valid and unique and registers it in the hash table. Mostly an editor tool. |
| <Link id="m-getitems" /><code>{"protected static IReadOnlyCollection<TSubType> GetItems<TSubType>()"}</code> | Protected: all loaded assets that are of a given subtype. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Virtual Unity validation hook, empty in the base. |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-buildnamedictionary" /><code>{"private static Dictionary<string, T> BuildNameDictionary()"}</code> |
| <Link id="m-getassetpaths" /><code>{"private static IEnumerable<string> GetAssetPaths()"}</code> |
| <Link id="m-loadall" /><code>{"private static IEnumerable<T> LoadAll()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `HashedGeneralValue&lt;T>`:

[`HashedGeneralValueConverter<T>.GetFromString`](/game-api/types/assembly-other/hashedgeneralvalueconverter-t#m-getfromstring), [`StatDefinitionConverter.GetFromString`](/game-api/types/alta-utilities/statdefinitionconverter#m-getfromstring), [`PlayerUnlockConverter.GetFromString`](/game-api/types/global-p/playerunlockconverter#m-getfromstring).
