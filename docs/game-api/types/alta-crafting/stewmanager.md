---
title: "StewManager"
description: "Next to the pot, saved with it. Holds the stew."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewManager

A **class** in `Root.Township`, `Alta.Cooking`.

Next to the pot, saved with it. Holds the stew.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<StewManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<StewManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`StewManagerSaveData`](/game-api/types/alta-crafting/stewmanagersavedata)
- **Documented in** [Cooking](/game-api/game-systems/cooking#stewmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cookingplayers" /><code>{"private List<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> cookingPlayers"}</code> |  |
| <Link id="m-currentrecipe" /><code>{"private "}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" currentRecipe"}</code> |  |
| <Link id="m-garnishes" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> garnishes"}</code> |  |
| <Link id="m-garnishrejected" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" garnishRejected"}</code> |  |
| <Link id="m-ingredients" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients"}</code> |  |
| <Link id="m-isrealrecipe" /><code>{"private bool isRealRecipe"}</code> |  |
| <Link id="m-liquidsurfaceentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" liquidSurfaceEntity"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-pot" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingpot">{"CookingPot"}</Link>{" pot"}</code> |  |
| <Link id="m-stew" /><code>{"private "}<Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew"}</code> |  |
| <Link id="m-stewliquidbase" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" stewLiquidBase"}</code> |  |
| <Link id="m-syncfadeoutingredient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncFadeOutIngredient"}</code> |  |
| <Link id="m-syncstewfromentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStewFromEntity"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-garnishes-2" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> Garnishes { get; }"}</code> |  |
| <Link id="m-ingredients-2" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Ingredients { get; }"}</code> |  |
| <Link id="m-stewliquidbase-2" /><code><Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" StewLiquidBase { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addedingredient" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> AddedIngredient"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcookabletostew" /><code>{"void AddCookableToStew("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookable)"}</code> |  |
| <Link id="m-addgarnishtostew" /><code>{"void AddGarnishToStew("}<Link to="/game-api/types/alta-crafting/icookinggarnishmarker">{"ICookingGarnishMarker"}</Link>{" garnish)"}</code> |  |
| <Link id="m-createdefaultstew" /><code>{"void CreateDefaultStew()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-removeanystew" /><code>{"void RemoveAnyStew(bool isDestroyingStewEntity = true)"}</code> |  |
| <Link id="m-setbaseliquid" /><code>{"void SetBaseLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" liquid)"}</code> |  |
| <Link id="m-setstewfromentity" /><code>{"void SetStewFromEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" stewEntity, bool isUsingLiquidBaseTint = false)"}</code> |  |
| <Link id="m-addgarnish" /><code>{"private void AddGarnish("}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{" garnishItem)"}</code> |  |
| <Link id="m-addingredient" /><code>{"private void AddIngredient("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookable)"}</code> |  |
| <Link id="m-checkforrecipe" /><code>{"private bool CheckForRecipe()"}</code> |  |
| <Link id="m-checkforvalidrecipe" /><code>{"private void CheckForValidRecipe()"}</code> |  |
| <Link id="m-cleanexperiencecalculation" /><code>{"private void CleanExperienceCalculation()"}</code> |  |
| <Link id="m-createcontentwithtint" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" CreateContentWithTint(Color colorTint)"}</code> |  |
| <Link id="m-delaydestroyentity" /><code>{"private IEnumerator DelayDestroyEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entityToDestroy, float waitDuration) (iterator)"}</code> |  |
| <Link id="m-fadeoutaddedingredient" /><code>{"private void FadeOutAddedIngredient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint addedIngredientEntityIdentifier)"}</code> |  |
| <Link id="m-fadeoutentity" /><code>{"private void FadeOutEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-getchunkvisuals" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"> GetChunkVisuals() (iterator)"}</code> |  |
| <Link id="m-getcookableitems" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] GetCookableItems()"}</code> |  |
| <Link id="m-getsteweffects" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> GetStewEffects("}<Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew)"}</code> |  |
| <Link id="m-handlenewstewstage" /><code>{"private void HandleNewStewStage("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newStewEntity)"}</code> |  |
| <Link id="m-playstewcreatedeffect" /><code>{"private void PlayStewCreatedEffect()"}</code> |  |
| <Link id="m-playvisualeffectforstew" /><code>{"private void PlayVisualEffectForStew()"}</code> |  |
| <Link id="m-serializegarnisheslist" /><code>{"private void SerializeGarnishesList("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializeingredientslist" /><code>{"private void SerializeIngredientsList("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-stewingredientsfilled" /><code>{"private void StewIngredientsFilled()"}</code> |  |
| <Link id="m-swapstewtorecipe" /><code>{"private void SwapStewToRecipe("}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" recipe)"}</code> |  |
| <Link id="m-swapstewtorecipebaseversion" /><code>{"private void SwapStewToRecipeBaseVersion(uint recipeBaseVersionHash)"}</code> |  |
| <Link id="m-syncstewcreated" /><code>{"private void SyncStewCreated("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updateliquidcontainer" /><code>{"private void UpdateLiquidContainer(bool isUsingLiquidBaseTint = false)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StewManager`:

[`CookingPot.stewManager`](/game-api/types/alta-crafting/cookingpot#m-stewmanager).
