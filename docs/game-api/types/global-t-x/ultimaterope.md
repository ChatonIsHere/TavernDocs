---
title: "UltimateRope"
description: "Third-party Ultimate Rope Editor component: builds a physics rope from jointed rigidbody links (procedural mesh, linked objects or imported bones), with..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UltimateRope

A **class** in `Root.Township`, no namespace.

Third-party Ultimate Rope Editor component: builds a physics rope from jointed rigidbody links (procedural mesh, linked objects or imported bones), with optional coil and extension. Runs in edit mode too.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EAxis`](/game-api/types/global-t-x/ultimaterope-eaxis), [`EColliderType`](/game-api/types/global-t-x/ultimaterope-ecollidertype), [`ERopeExtensionMode`](/game-api/types/global-t-x/ultimaterope-eropeextensionmode), [`ERopeType`](/game-api/types/global-t-x/ultimaterope-eropetype), [`RopeBone`](/game-api/types/global-t-x/ultimaterope-ropebone), [`RopeBreakEventInfo`](/game-api/types/global-t-x/ultimaterope-ropebreakeventinfo), [`RopeNode`](/game-api/types/global-t-x/ultimaterope-ropenode)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UltimateRope()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-autoregenerate" /><code>{"bool AutoRegenerate"}</code> | Editor option to rebuild the rope when settings change. |
| <Link id="m-boneaxis" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" BoneAxis"}</code> |  |
| <Link id="m-bonecolliderdiameter" /><code>{"float BoneColliderDiameter"}</code> |  |
| <Link id="m-bonecolliderlength" /><code>{"float BoneColliderLength"}</code> |  |
| <Link id="m-bonecollideroffset" /><code>{"float BoneColliderOffset"}</code> |  |
| <Link id="m-bonecolliderskip" /><code>{"int BoneColliderSkip"}</code> |  |
| <Link id="m-bonecollidertype" /><code><Link to="/game-api/types/global-t-x/ultimaterope-ecollidertype">{"UltimateRope.EColliderType"}</Link>{" BoneColliderType"}</code> |  |
| <Link id="m-bonefirst" /><code>{"GameObject BoneFirst"}</code> |  |
| <Link id="m-bonelast" /><code>{"GameObject BoneLast"}</code> |  |
| <Link id="m-bonelistnamesnocolliders" /><code>{"string BoneListNamesNoColliders"}</code> |  |
| <Link id="m-bonelistnamesstatic" /><code>{"string BoneListNamesStatic"}</code> |  |
| <Link id="m-coilaxisright" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" CoilAxisRight"}</code> |  |
| <Link id="m-coilaxisup" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" CoilAxisUp"}</code> |  |
| <Link id="m-coildiameter" /><code>{"float CoilDiameter"}</code> |  |
| <Link id="m-coilnumbones" /><code>{"int CoilNumBones"}</code> |  |
| <Link id="m-coilobject" /><code>{"GameObject CoilObject"}</code> |  |
| <Link id="m-coilwidth" /><code>{"float CoilWidth"}</code> |  |
| <Link id="m-deleted" /><code>{"bool Deleted"}</code> | True when the rope has no generated links; setup methods skip deleted ropes. |
| <Link id="m-enableprefabusage" /><code>{"bool EnablePrefabUsage"}</code> |  |
| <Link id="m-eventsobjectreceiver" /><code>{"GameObject EventsObjectReceiver"}</code> | Object that gets `OnBreakMethodName` sent to it when a link breaks. |
| <Link id="m-extensiblelength" /><code>{"float ExtensibleLength"}</code> | Maximum extra length an extensible rope can pay out. |
| <Link id="m-hasacoil" /><code>{"bool HasACoil"}</code> | Whether an extensible procedural rope winds onto `CoilObject`. |
| <Link id="m-importedbones" /><code><Link to="/game-api/types/global-t-x/ultimaterope-ropebone">{"UltimateRope.RopeBone"}</Link>{"[] ImportedBones"}</code> |  |
| <Link id="m-isextensible" /><code>{"bool IsExtensible"}</code> | Whether the rope can be extended at runtime with `ExtendRope`. |
| <Link id="m-linkaxis" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" LinkAxis"}</code> |  |
| <Link id="m-linkjointangularxlimit" /><code>{"float LinkJointAngularXLimit"}</code> |  |
| <Link id="m-linkjointangularylimit" /><code>{"float LinkJointAngularYLimit"}</code> |  |
| <Link id="m-linkjointangularzlimit" /><code>{"float LinkJointAngularZLimit"}</code> |  |
| <Link id="m-linkjointbreakforce" /><code>{"float LinkJointBreakForce"}</code> | Force at which link joints break (infinite by default). |
| <Link id="m-linkjointbreaktorque" /><code>{"float LinkJointBreakTorque"}</code> | Torque at which link joints break (infinite by default). |
| <Link id="m-linkjointdampervalue" /><code>{"float LinkJointDamperValue"}</code> |  |
| <Link id="m-linkjointmaxforcevalue" /><code>{"float LinkJointMaxForceValue"}</code> |  |
| <Link id="m-linkjointspringvalue" /><code>{"float LinkJointSpringValue"}</code> |  |
| <Link id="m-linklengths" /><code>{"float[] LinkLengths"}</code> |  |
| <Link id="m-linkmass" /><code>{"float LinkMass"}</code> | Mass of each link rigidbody. |
| <Link id="m-linkobject" /><code>{"GameObject LinkObject"}</code> | Prefab used for each link of a linked-objects rope. |
| <Link id="m-linkoffsetobject" /><code>{"float LinkOffsetObject"}</code> |  |
| <Link id="m-linksolveriterationcount" /><code>{"int LinkSolverIterationCount"}</code> | Physics solver iterations for each link rigidbody. |
| <Link id="m-linktwistangleincrement" /><code>{"float LinkTwistAngleIncrement"}</code> |  |
| <Link id="m-linktwistanglestart" /><code>{"float LinkTwistAngleStart"}</code> |  |
| <Link id="m-lockstartendinzaxis" /><code>{"bool LockStartEndInZAxis"}</code> | Locks each segment's end links to the node rotations instead of aiming them along the segment. |
| <Link id="m-m-afcoilboneangles" /><code>{"float[] m_afCoilBoneAngles"}</code> |  |
| <Link id="m-m-afcoilboneradiuses" /><code>{"float[] m_afCoilBoneRadiuses"}</code> |  |
| <Link id="m-m-afcoilbonex" /><code>{"float[] m_afCoilBoneX"}</code> |  |
| <Link id="m-m-bbonesareimported" /><code>{"bool m_bBonesAreImported"}</code> |  |
| <Link id="m-m-blaststatusiserror" /><code>{"bool m_bLastStatusIsError"}</code> |  |
| <Link id="m-m-bropestartinitialorientationinitialized" /><code>{"bool m_bRopeStartInitialOrientationInitialized"}</code> |  |
| <Link id="m-m-fcurrentcoillength" /><code>{"float m_fCurrentCoilLength"}</code> |  |
| <Link id="m-m-fcurrentcoilroperadius" /><code>{"float m_fCurrentCoilRopeRadius"}</code> |  |
| <Link id="m-m-fcurrentcoilturnsleft" /><code>{"float m_fCurrentCoilTurnsLeft"}</code> |  |
| <Link id="m-m-fcurrentextension" /><code>{"float m_fCurrentExtension"}</code> |  |
| <Link id="m-m-fcurrentextensioninput" /><code>{"float m_fCurrentExtensionInput"}</code> |  |
| <Link id="m-m-nfirstnoncoilnode" /><code>{"int m_nFirstNonCoilNode"}</code> |  |
| <Link id="m-m-qinitialropestartlocalrot" /><code>{"Quaternion m_qInitialRopeStartLocalRot"}</code> |  |
| <Link id="m-m-strassetfile" /><code>{"string m_strAssetFile"}</code> |  |
| <Link id="m-m-strstatus" /><code>{"string m_strStatus"}</code> |  |
| <Link id="m-m-v3initialropestartlocalpos" /><code>{"Vector3 m_v3InitialRopeStartLocalPos"}</code> |  |
| <Link id="m-m-v3initialropestartlocalscale" /><code>{"Vector3 m_v3InitialRopeStartLocalScale"}</code> |  |
| <Link id="m-onbreakmethodname" /><code>{"string OnBreakMethodName"}</code> | Method name sent to `EventsObjectReceiver` with break info when a link breaks. |
| <Link id="m-persistafterplaymode" /><code>{"bool PersistAfterPlayMode"}</code> |  |
| <Link id="m-ropediameter" /><code>{"float RopeDiameter"}</code> | Rope thickness (at least 0.01). |
| <Link id="m-ropediameterscalex" /><code>{"float RopeDiameterScaleX"}</code> |  |
| <Link id="m-ropediameterscaley" /><code>{"float RopeDiameterScaleY"}</code> |  |
| <Link id="m-ropelayer" /><code>{"int RopeLayer"}</code> | Layer the rope and its links use. |
| <Link id="m-ropematerial" /><code>{"Material RopeMaterial"}</code> |  |
| <Link id="m-ropenodes" /><code>{"List<"}<Link to="/game-api/types/global-t-x/ultimaterope-ropenode">{"UltimateRope.RopeNode"}</Link>{"> RopeNodes"}</code> | The rope's segments, each ending at a node object. |
| <Link id="m-ropephysicsmaterial" /><code>{"PhysicMaterial RopePhysicsMaterial"}</code> |  |
| <Link id="m-ropesectionmaterial" /><code>{"Material RopeSectionMaterial"}</code> |  |
| <Link id="m-ropesegmentsides" /><code>{"int RopeSegmentSides"}</code> |  |
| <Link id="m-ropestart" /><code>{"GameObject RopeStart"}</code> | Object the rope starts from. |
| <Link id="m-ropetexturesectiontilemeters" /><code>{"float RopeTextureSectionTileMeters"}</code> |  |
| <Link id="m-ropetexturetilemeters" /><code>{"float RopeTextureTileMeters"}</code> |  |
| <Link id="m-ropetype" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eropetype">{"UltimateRope.ERopeType"}</Link>{" RopeType"}</code> | How the rope is built: procedural mesh, linked objects or imported bones. |
| <Link id="m-sendevents" /><code>{"bool SendEvents"}</code> | Whether link breaks are sent to `EventsObjectReceiver`. |
| <Link id="m-totallinks" /><code>{"int TotalLinks"}</code> | Number of links across all segments. |
| <Link id="m-totalropelength" /><code>{"float TotalRopeLength"}</code> | Length of all segments together. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"string Status { get; set; }"}</code> | Message from the last build or change. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-afterimportedbonesobjectrespawn" /><code>{"void AfterImportedBonesObjectRespawn()"}</code> | Puts imported bones back under the rope (or their non-bone parent if static) after the object respawns. |
| <Link id="m-beforeimportedbonesobjectrespawn" /><code>{"void BeforeImportedBonesObjectRespawn()"}</code> | Puts imported bones back under their original parents before the object respawns. |
| <Link id="m-buildstaticmeshobject" /><code>{"GameObject BuildStaticMeshObject(out string strStatusMessage)"}</code> | Bakes the rope into a static mesh object. Fails in editor play mode; returns a status message. |
| <Link id="m-changeropediameter" /><code>{"bool ChangeRopeDiameter(float fNewDiameter, float fNewScaleX, float fNewScaleY)"}</code> | Changes a procedural rope's diameter and scale and rebuilds its mesh. False for other rope types. |
| <Link id="m-changeropesegmentsides" /><code>{"bool ChangeRopeSegmentSides(int nNewSegmentSides)"}</code> | Changes how many sides a procedural rope's cross-section has. False for other rope types. |
| <Link id="m-checkneedsstartexitlockz" /><code>{"void CheckNeedsStartExitLockZ()"}</code> | For procedural ropes, locks the first and last link of each segment to the node rotations when `LockStartEndInZAxis` is set. |
| <Link id="m-createnewnode" /><code>{"void CreateNewNode(int nNode)"}</code> | Inserts an empty rope node after the given index. |
| <Link id="m-deleterope" /><code>{"void DeleteRope(bool bResetNodePositions = false, bool bDestroySkin = true)"}</code> | Removes the rope's links and joints, optionally resetting node transforms. |
| <Link id="m-deleteropelinks" /><code>{"void DeleteRopeLinks()"}</code> | Destroys the generated link objects. Does nothing for imported bones. |
| <Link id="m-extendrope" /><code>{"void ExtendRope("}<Link to="/game-api/types/global-t-x/ultimaterope-eropeextensionmode">{"UltimateRope.ERopeExtensionMode"}</Link>{" eRopeExtensionMode, float fIncrement)"}</code> | Extends or retracts an extensible rope, linearly or by turning the coil. Logs an error if not allowed. |
| <Link id="m-filllinkmeshindicesrope" /><code>{"void FillLinkMeshIndicesRope(int nLinearLinkIndex, int nTotalLinks, ref int[] indices, bool bBreakable, bool bBrokenLink = false)"}</code> |  |
| <Link id="m-filllinkmeshindicessections" /><code>{"void FillLinkMeshIndicesSections(int nLinearLinkIndex, int nTotalLinks, ref int[] indices, bool bBreakable, bool bBrokenLink = false)"}</code> |  |
| <Link id="m-firstnodeiscoil" /><code>{"bool FirstNodeIsCoil()"}</code> | Whether the first rope node is the coil. |
| <Link id="m-hasdynamicsegmentnodes" /><code>{"bool HasDynamicSegmentNodes()"}</code> | True if any node object has a non-kinematic rigidbody. |
| <Link id="m-islaststatuserror" /><code>{"bool IsLastStatusError()"}</code> | Whether the last build ended with an error in `Status`. |
| <Link id="m-movenodedown" /><code>{"void MoveNodeDown(int nNode)"}</code> | Swaps a rope node with the next one. |
| <Link id="m-movenodeup" /><code>{"void MoveNodeUp(int nNode)"}</code> | Swaps a rope node with the previous one. |
| <Link id="m-recomputecoil" /><code>{"void RecomputeCoil()"}</code> | Rebuilds the coil bones for the current coil length. |
| <Link id="m-regenerate" /><code>{"bool Regenerate(bool bResetNodePositions = false)"}</code> | Deletes and rebuilds the whole rope. Returns false and sets `Status` on bad settings. |
| <Link id="m-removenode" /><code>{"void RemoveNode(int nNode)"}</code> | Removes a rope node. |
| <Link id="m-setupropejoints" /><code>{"void SetupRopeJoints()"}</code> | Creates the joints between links from the current settings. |
| <Link id="m-setupropelinks" /><code>{"void SetupRopeLinks()"}</code> | Sets up link colliders, rigidbodies and layer from the current settings. |
| <Link id="m-setupropematerials" /><code>{"void SetupRopeMaterials()"}</code> | Assigns the rope and section materials on a procedural rope's skinned renderer. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-buildbonehashstring2gameobject" /><code>{"private bool BuildBoneHashString2GameObject(GameObject goRoot, GameObject goCurrent, ref Dictionary<string, GameObject> outHashString2GameObjects, ref string strErrorMessage)"}</code> |  |
| <Link id="m-buildimportedbonelist" /><code>{"private bool BuildImportedBoneList(GameObject goBoneFirst, GameObject goBoneLast, List<int> ListImportBonesStatic, List<int> ListImportBonesNoCollider, out List<"}<Link to="/game-api/types/global-t-x/ultimaterope-ropebone">{"UltimateRope.RopeBone"}</Link>{"> outListImportedBones, out string strErrorMessage)"}</code> |  |
| <Link id="m-buildimportedbonelisttry" /><code>{"private bool BuildImportedBoneListTry(GameObject goRoot, string strPrefix, int nIndexFirst, int nIndexLast, int nDigitsFirst, int nDigitsLast, List<int> ListImportBonesStatic, List<int> ListImportBonesNoCollider, out List<"}<Link to="/game-api/types/global-t-x/ultimaterope-ropebone">{"UltimateRope.RopeBone"}</Link>{"> outListImportedBones, ref string strErrorMessage)"}</code> |  |
| <Link id="m-checkaddcoilnode" /><code>{"private void CheckAddCoilNode()"}</code> |  |
| <Link id="m-checkdelcoilnode" /><code>{"private void CheckDelCoilNode()"}</code> |  |
| <Link id="m-createjoint" /><code>{"private ConfigurableJoint CreateJoint(GameObject goObject, GameObject goConnectedTo, Vector3 v3Pivot)"}</code> |  |
| <Link id="m-createropejoints" /><code>{"private void CreateRopeJoints(bool bCheckIfBroken = false)"}</code> |  |
| <Link id="m-extendropelinear" /><code>{"private float ExtendRopeLinear(float fLinearIncrement)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-getaxisvector" /><code>{"private Vector3 GetAxisVector("}<Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" eAxis, float fLength)"}</code> |  |
| <Link id="m-getlinkaxisindex" /><code>{"private int GetLinkAxisIndex()"}</code> |  |
| <Link id="m-getlinkaxisoffset" /><code>{"private Vector3 GetLinkAxisOffset(float fValue)"}</code> |  |
| <Link id="m-getlinkboxcollidercenterandsize" /><code>{"private bool GetLinkBoxColliderCenterAndSize(float fLinkLength, float fRopeDiameter, ref Vector3 v3CenterInOut, ref Vector3 v3SizeInOut)"}</code> |  |
| <Link id="m-getlinkdiameter" /><code>{"private float GetLinkDiameter()"}</code> |  |
| <Link id="m-getlinkedobjectlocalrotation" /><code>{"private Quaternion GetLinkedObjectLocalRotation(float fTwistAngle = 0)"}</code> |  |
| <Link id="m-getlinkedobjectscale" /><code>{"private float GetLinkedObjectScale(float fSegmentLength, int nNumLinks)"}</code> |  |
| <Link id="m-ongui" /><code>{"private void OnGUI()"}</code> |  |
| <Link id="m-parseboneindices" /><code>{"private bool ParseBoneIndices(string strBoneList, out List<int> outListBoneIndices, out string strErrorMessage)"}</code> |  |
| <Link id="m-setextensiblelinktokinematic" /><code>{"private void SetExtensibleLinkToKinematic(GameObject link, bool bKinematic)"}</code> |  |
| <Link id="m-setupcoilbones" /><code>{"private void SetupCoilBones(float fCoilLength)"}</code> |  |
| <Link id="m-setupjoint" /><code>{"private void SetupJoint(ConfigurableJoint joint)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `UltimateRope`:

[`RopePersistManager.ComputeTransformInfo`](/game-api/types/global-q-r/ropepersistmanager#m-computetransforminfo), [`RopePersistManager.RopeData.m_rope`](/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-rope), [`RopePersistManager.RopeData.RopeData`](/game-api/types/global-q-r/ropepersistmanager-ropedata#m-ctor), [`UltimateRope.RopeBreakEventInfo.rope`](/game-api/types/global-t-x/ultimaterope-ropebreakeventinfo#m-rope).
