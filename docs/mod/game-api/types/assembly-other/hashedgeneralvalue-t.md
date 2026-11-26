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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`HashedGeneralValue`](/mod/game-api/types/assembly-other/hashedgeneralvalue)
- **Derived types** [`EffectDefinition`](/mod/game-api/types/alta-stats-effects/effectdefinition), [`SmelterUpgrades`](/mod/game-api/types/alta-crafting/smelterupgrades), [`SmeltingRecipe`](/mod/game-api/types/alta-crafting/smeltingrecipe), [`Biome`](/mod/game-api/types/alta-world-generation/biome), [`Distribution<TThis, T, TItem, TFestivityGroup>`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup), [`LiquidVisualChunkDefinition`](/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition), [`StewRecipe`](/mod/game-api/types/alta-crafting/stewrecipe), [`CraftingPartType`](/mod/game-api/types/alta-crafting/craftingparttype), [`CosmeticColor`](/mod/game-api/types/alta-customization/cosmeticcolor), [`PlayerEquipmentDefinition`](/mod/game-api/types/alta-customization/playerequipmentdefinition), [`Enchantment`](/mod/game-api/types/alta-crafting/enchantment), [`BoulderDefinition`](/mod/game-api/types/alta-items/boulderdefinition), [`CommunalStorageUniqueIdentifier`](/mod/game-api/types/alta-items/communalstorageuniqueidentifier), [`Item`](/mod/game-api/types/alta-items/item), [`LiquidDefinition`](/mod/game-api/types/alta-stats-effects/liquiddefinition), [`LogicChannel`](/mod/game-api/types/alta-items/logicchannel), [`PresetLootSet`](/mod/game-api/types/alta-world-generation/presetlootset), [`LandmarkIcon`](/mod/game-api/types/alta-world/landmarkicon), [`Map`](/mod/game-api/types/alta-world/map), [`MapPiece`](/mod/game-api/types/alta-world/mappiece), [`Tag`](/mod/game-api/types/alta-world-generation/tag), [`Glyph`](/mod/game-api/types/alta-items/glyph), [`PageCollection`](/mod/game-api/types/alta-items/pagecollection), [`GlobalPopulationDefinition`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition), [`PopulationDefinition`](/mod/game-api/types/alta-world-generation/populationdefinition), [`PopulationRaycast`](/mod/game-api/types/alta-world-generation/populationraycast), [`PopulationSetup`](/mod/game-api/types/alta-world-generation/populationsetup), [`MeshPlacementData`](/mod/game-api/types/alta-crafting/meshplacementdata), [`VisibilityData`](/mod/game-api/types/alta-crafting/visibilitydata), [`SimpleHashedGeneralValue<T>`](/mod/game-api/types/alta-utilities/simplehashedgeneralvalue-t), [`StatDefinition`](/mod/game-api/types/alta-stats-effects/statdefinition), [`MaterialPropertyBlockSettings<T>`](/mod/game-api/types/alta-utilities/materialpropertyblocksettings-t), [`PlayerSaveData`](/mod/game-api/types/alta-utilities/playersavedata), [`PresetTree`](/mod/game-api/types/alta-crafting/presettree), [`TreeSpecies`](/mod/game-api/types/alta-crafting/treespecies), [`MicroTutorialStep`](/mod/game-api/types/game-other-namespaces/microtutorialstep), [`BiomePreset`](/mod/game-api/types/global-a-b/biomepreset), [`Curve`](/mod/game-api/types/global-c-d/curve), [`VfxData`](/mod/game-api/types/game-other-namespaces/vfxdata), [`Festivity`](/mod/game-api/types/global-e-h/festivity), [`ForestBiome`](/mod/game-api/types/global-e-h/forestbiome), [`GameAction`](/mod/game-api/types/global-e-h/gameaction), [`GrowthDefinition`](/mod/game-api/types/global-e-h/growthdefinition), [`LeaderboardDefinition`](/mod/game-api/types/global-i-l/leaderboarddefinition), [`MouldDefinition`](/mod/game-api/types/global-m-o/moulddefinition), [`PhysicalMaterial`](/mod/game-api/types/global-p/physicalmaterial), [`PlayerProgressFlag`](/mod/game-api/types/global-p/playerprogressflag), [`PlayerUnlock`](/mod/game-api/types/global-p/playerunlock), [`PrefabStageDefinition`](/mod/game-api/types/global-p/prefabstagedefinition), [`ProfessionSkill`](/mod/game-api/types/global-p/professionskill), [`SetPieceData`](/mod/game-api/types/global-s/setpiecedata), [`TimedPrefabStageDefinition`](/mod/game-api/types/global-t-x/timedprefabstagedefinition)
- **Documented in** [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HashedGeneralValue()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static readonly Logger logger"}</code> | Shared NLog logger for every hashed value of this type. Logs missing hashes and names. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isfail" /><code>{"private static bool isFail"}</code> | Private: set when a lookup fails with no items loaded. While set, `CheckItems` stops trying to load. |
| <Link id="m-isinresourceloading" /><code>{"private static bool isInResourceLoading"}</code> | Private: true while `LoadAll` is calling `Resources.LoadAll`, so `ValidateHashes` does not recurse. |
| <Link id="m-items" /><code>{"private static Dictionary<uint, T> items"}</code> | Private: every loaded asset of the type, by hash. |
| <Link id="m-itemsbyname" /><code>{"private static Dictionary<string, T> itemsByName"}</code> | Private: name lookup used by `Get(string)`, built on first use. |
| <Link id="m-paths" /><code>{"private static string[] paths"}</code> | Private: cached result of `GetAssetPaths`. |

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

| Member | What it is |
| --- | --- |
| <Link id="m-buildnamedictionary" /><code>{"private static Dictionary<string, T> BuildNameDictionary()"}</code> | Private: builds the name lookup from all loaded assets, with names lowercased and spaces removed. Logs duplicate names. |
| <Link id="m-getassetpaths" /><code>{"private static IEnumerable<string> GetAssetPaths()"}</code> | Private: the Resources folders to load from, from `HashedPathAttribute` or else the type's name. Cached in `paths`. |
| <Link id="m-loadall" /><code>{"private static IEnumerable<T> LoadAll()"}</code> | Private: loads every asset of the type from its Resources folders, with `isInResourceLoading` set while it runs. |

</details>

## Used in

Members of other types that take, return or hold a `HashedGeneralValue&lt;T>`:

[`HashedGeneralValueConverter<T>.GetFromString`](/mod/game-api/types/assembly-other/hashedgeneralvalueconverter-t#m-getfromstring), [`StatDefinitionConverter.GetFromString`](/mod/game-api/types/alta-utilities/statdefinitionconverter#m-getfromstring), [`PlayerUnlockConverter.GetFromString`](/mod/game-api/types/global-p/playerunlockconverter#m-getfromstring).
