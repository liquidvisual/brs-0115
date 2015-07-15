---
layout: app/standard/vacancies/vacancy_item/requisition
title: "Requisition"
permalink: /vacancy-item/requisition/
---

<!--- This child document initializes the page in Jekyll. -->

<div><style type="text/css"> .Report{width: 100%;}</style><script language="Javascript" type="text/Javascript">var warnString="";var warnCount=0;var fieldTag="field";var elementType="";var jreqFieldID="";var jreqFieldLabel="";var jreqFieldIDWdw="";var jreqFieldLabelWdw="";var selectAll="";var customValidation=new Array();var submitted=false;var dateFormat=/^\d{1,2}\/\d{1,2}\/\d{4}/; var ssEditPageID=312; function checkFields(){warnString=""; warnCount=0; fieldTag="field"; elementType=""; if ((typeof(document.tblGenForm.nomatch)=='object') && (document.tblGenForm.nomatch.value=='true')) warnString +='\n - The passwords do not match'; for (i=0; i < jreqFieldID.length; i++){var tmpEle=document.getElementsByName(jreqFieldID[i]); elementType=tmpEle[0].type; switch (elementType){case "text": case "textarea": case "hidden": if (tmpEle[0].value.length==0){warnCount ++; warnString +='\n - ' + jreqFieldLabel[i];}break; case "date": if ((tmpEle[0].value.length==0) || (dateFormat.test(tmpEle[0].value))){warnCount ++; warnString +='\n - ' + jreqFieldLabel[i];}break; case "select-one": if (optionalAnswer[i]==false){if (selectAll[i]==true){if (tmpEle[0].options.length <=0){warnCount ++; warnString +='\n - ' + jreqFieldLabel[i];}}else{if (tmpEle[0].selectedIndex <=0){warnCount ++; warnString +='\n - ' + jreqFieldLabel[i];}}}break; case "select-multiple": if (tmpEle[0].selectedIndex < 0){warnCount ++; warnString +='\n - ' + jreqFieldLabel[i];}break; case "radio": tmpWarn=true; for (j=0; j < tmpEle.length; j++){if (tmpEle[j].checked){tmpWarn=false;}}if (tmpWarn){warnCount ++; warnString +='\n - ' + jreqFieldLabel[i];}break; default: // check if its an array which could indicate a multi-select if (tmpEle[0]){if (tmpEle[1].selectedIndex < 0){warnCount ++; warnString +='\n - ' + jreqFieldLabel[i];}break;}else{alert ('This element type (' + elementType + ') needs to be added to the "form" file');}}// end switch}for(i=0; i < customValidation.length; i++){// DAVE- ADD CODE HERE TO PICK UP VALIDATION FUNCTIONS FOR INDIVIDUAL ELEMENTS}if (warnCount > 1) fieldTag="fields"; if (warnCount > 0) warnString='Please supply a value for the following ' + fieldTag + ': ' + warnString ;}function checkFields2(){warnString=""; warnCount=0; fieldTag="field"; elementType=""; if ((typeof(document.tblGenForm.nomatch)=='object') && (document.tblGenForm.nomatch.value=='true')) warnString +='\n - The passwords do not match'; for (i=0; i < jreqFieldIDWdw.length; i++){var tmpEle=document.getElementsByName(jreqFieldIDWdw[i]); elementType=tmpEle[0].type; switch (elementType){case "text": case "textarea": case "hidden": if (tmpEle[0].value.length==0){warnCount ++; warnString +='\n - ' + jreqFieldLabelWdw[i];}break; case "date": if ((tmpEle[0].value.length==0) || (dateFormat.test(tmpEle[0].value))){warnCount ++; warnString +='\n - ' + jreqFieldLabelWdw[i];}break; case "select-one": if (tmpEle[0].selectedIndex < 1){warnCount ++; warnString +='\n - ' + jreqFieldLabelWdw[i];}break; case "select-multiple": if (tmpEle[0].selectedIndex < 0){warnCount ++; warnString +='\n - ' + jreqFieldLabelWdw[i];}break; case "radio": tmpWarn=true; for (j=0; j < tmpEle.length; j++){if (tmpEle[j].checked){tmpWarn=false;}}if (tmpWarn){warnCount ++; warnString +='\n - ' + jreqFieldLabelWdw[i];}break; default: // check if its an array which could indicate a multi-select if (tmpEle[0]){if (tmpEle[1].selectedIndex < 0){warnCount ++; warnString +='\n - ' + jreqFieldLabelWdw[i];}break;}else{alert ('This element type (' + elementType + ') needs to be added to the "form" file');}}// end switch}for(i=0; i < customValidation.length; i++){// DAVE- ADD CODE HERE TO PICK UP VALIDATION FUNCTIONS FOR INDIVIDUAL ELEMENTS}if (warnCount > 1) fieldTag="fields"; if (warnCount > 0) warnString='Please supply a value for the following ' + fieldTag + ': ' + warnString ;}function validate(type){warnString=""; if(submitted==false){document.tblGenForm.submit();}}function validateComplete(workflow){var recipient; recipient=document.getElementsByName(workflow); if (recipient[0].value==''){alert('Please select somebody to handle the next workflow');}else{validate(0);}}function validateApprove(workflow){var recipient;var check=false;recipient=document.getElementsByName(workflow);if (recipient[0].value==''){alert('Please select somebody to handle the next workflow');}else{check=true;}return check;}function showCommentDialog(){xPos=350; yPos=350; commentDialog=window.showModelessDialog('comment.php', 'commentDialog', "dialogHeight:300px; center: yes;"); commentDialog.opener=this;}function confirmComment(){var comment=document.getElementById("chkComment");if (comment.value==''){alert('Please enter a comment'); return false;}else{document.tblGenForm.submit(); return true;}}//this.attachEvent('onunload', function purgeSplitScr(){if(!top.isSplitScreen()){top.clearToolBar();};});function setScrModeOption(){//var lnk=document.getElementById("toggleScreenMode"); var reqlnk=document.getElementById("anchEditReqWorkflow"); hndl=function handler(){if(!top.isSplitScreen()){top.splitScreen(ssEditPageID, 555);}else{top.mergeScreen(555);}}if(top.isSplitScreen()){top.removeToolBarItem('2'); top.addToolBarItem('1', '&nbsp;Full Screen', hndl); if(reqlnk){reqlnk.style.display="none";}}else{top.removeToolBarItem('1'); top.addToolBarItem('2', '&nbsp;Split Screen', hndl); if(reqlnk){reqlnk.style.display="block";}}}</script><br><div style="width: 200;"><a id="anchEditReqWorkflow" href="page.php?pageID=577&amp;windowUID=WIND54f80676c248a" title="Edit Requisition Workflow">Edit Requisition Workflow</a></div><form name="tblGenForm" action="/page.php?pageID=555" method="post"><input type="hidden" name="windowUID" value="WIND54f80676c248a"><input type="hidden" name="VacancyID" value="227880"><div class="subtitle">Vacancy Details Entered</div><table class="Report" border="0" cellspacing="0" cellpadding="2"><tbody><tr> <td class="reportheading">Question</td><td class="reportheading">Response(s)</td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.1</td><td style="border-left: none;"><b>Details of Manager/Team Leader making recruitment request:</b></td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td>&nbsp;&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.2</td><td style="border-left: none;">Name:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644240]" id="hID27858" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.3</td><td style="border-left: none;">Title:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644239]" id="hID27857" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.4</td><td style="border-left: none;"><b>Details of position (Please attach an up to date Role Statement)</b></td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td>&nbsp;&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.5</td><td style="border-left: none;">Position Title:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644241]" id="hID27859" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.6</td><td style="border-left: none;">Role Reports to:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644242]" id="hID27860" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.7</td><td style="border-left: none;">Sub-Unit:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644243]" id="hID27861" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.8</td><td style="border-left: none;">Full/Part/Casual/Contract:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644244]" id="hID27862" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.9</td><td style="border-left: none;">Cost Centre:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644245]" id="hID27863" size="30" value=" ">&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.10</td><td style="border-left: none;">GL:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644246]" id="hID27864" size="30" value=" ">&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.11</td><td style="border-left: none;">Location:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><textarea name="questionList[25644247]" id="hID27865" cols="40" rows="5"></textarea>&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.12</td><td style="border-left: none;">Existing Position?</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644248]" id="hID27866"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.13</td><td style="border-left: none;">Replaces</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644249]" id="hID27867" size="30" value=" ">&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td colspan="2"><table><tbody><tr valign="top"><td style="border-left: none;">1.14</td><td style="border-left: none;">Business Justification - please outline the need for this role and the benefits to the business:</td></tr></tbody></table><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><textarea name="questionList[25644250]" id="hID27868" style="width:100%" rows="10"></textarea></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.15</td><td style="border-left: none;">Note: A draft role statement will need to be prepared and provided to HR in advance of Interviews commencing. Hiring the "right" people at the "right" time is critical to our business. To assist you HR will participate in all professional staff interviews wherever practical. The team will be happy to assist in recruitment activity across the State, however travel and accomodation costs will need to be billed to the appropriate Business units or projects.</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td>&nbsp;&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.16</td><td style="border-left: none;">Is the position chargeable to clients?</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644252]" id="hID27870"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.17</td><td style="border-left: none;">Proposed Salary</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644253]" id="hID27871" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.18</td><td style="border-left: none;">Salary of previous incumbent:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644254]" id="hID27872" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.19</td><td style="border-left: none;">Allowance/Other Items:</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><textarea name="questionList[25644255]" id="hID27873" cols="40" rows="5"> </textarea>&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.20</td><td style="border-left: none;"><b>Benefits/Equipment Required</b></td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td>&nbsp;&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.21</td><td style="border-left: none;">PC or Laptop</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644257]" id="hID27875"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.22</td><td style="border-left: none;">Blackberry</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644258]" id="hID27876"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.23</td><td style="border-left: none;">CCI Vehicle</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644259]" id="hID27877"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.24</td><td style="border-left: none;">Fuel Card</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644260]" id="hID27878"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.25</td><td style="border-left: none;">Mobile Phone</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644261]" id="hID27879"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.26</td><td style="border-left: none;">Workstation Set up</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644262]" id="hID27880"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.27</td><td style="border-left: none;">Wilson Parking Card</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644263]" id="hID27881"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.28</td><td style="border-left: none;">Other, please specify</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><textarea name="questionList[25644264]" id="hID27882" cols="40" rows="5"> </textarea>&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.29</td><td style="border-left: none;">CCI Motor Vehicle and Parking are only available to those positions which require a vehicle as a tool of trade or Chief Officer positions.</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td>&nbsp;&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.30</td><td style="border-left: none;"><b>Access Requirements:</b></td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td>&nbsp;&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.31</td><td style="border-left: none;">System Access</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644267]" id="hID27885" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.32</td><td style="border-left: none;">Building Access</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><input type="text" name="questionList[25644268]" id="hID27886" size="30" value="">&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.33</td><td style="border-left: none;">Building Requirements</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><textarea name="questionList[25644269]" id="hID27887" cols="40" rows="5"></textarea>&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.34</td><td style="border-left: none;">System Requirements eg Email, Internet, OS</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><textarea name="questionList[25644270]" id="hID27888" cols="40" rows="5"></textarea>&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.35</td><td style="border-left: none;">Is a traveler profile required to be set up in the CCI Travel Management Portal?</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td><select name="questionList[25644271]" id="hID27889"><option value="0"> -- Select a record -- </option><option value="10">Yes</option><option value="11">No</option></select>&nbsp; </td></tr></tbody></table></td></tr><tr> <td class="reportheading">Notify For Next Action</td><td class="reportheading" align="right"><select name="Recipient[844915]"><option value="">--Select from list--</option><option value="26364">mitchsu BRS</option></select> </td></tr><tr class="evenrow"> <td><input type="button" value="Save" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value=''; document.tblGenForm.ApproveWorkflowID.value=844915; validate(2);"><input type="button" value="Complete" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value='complete'; document.tblGenForm.ApproveWorkflowID.value=844915; document.tblGenForm.NextWorkflowID.value=844916; document.tblGenForm.NextWorkflowType.value=22287; validateComplete('Recipient[844915]');"> <input type="button" value="Decline" disabled="" onclick=" document.tblGenForm.Event.value='decline'; document.tblGenForm.DeclineWorkflowID.value=''; document.tblGenForm.CurrentWorkflowID.value=844915; showCommentDialog();">&nbsp;<input type="button" name="withdraw" value="Withdraw" disabled="" onclick="document.tblGenForm.Event.value='withdraw'; document.tblGenForm.WithdrawWorkflowID.value=844915; document.tblGenForm.NextWorkflowID.value=844916; showCommentDialog();"></td><td align="right"></td></tr></tbody></table><br><br><script>ssEditPageID=56;</script><div class="subtitleDisabled">Approval To Advertise</div><table class="ReportDisabled" border="0" cellspacing="0" cellpadding="2"> <tbody><tr> <td class="reportheading">Notify For Next Action</td><td class="reportheading" align="right"> </td></tr><tr> <td><input type="button" value="Save" disabled="" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value=''; document.tblGenForm.ApproveWorkflowID.value=844916; validate(2);"><input type="button" value="Approve" disabled="" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value='approve'; document.tblGenForm.ApproveWorkflowID.value=844916; document.tblGenForm.NextWorkflowID.value=844917; document.tblGenForm.NextWorkflowType.value=22292; if(validateApprove('Recipient[844916]')) validate(0);"> <input type="button" value="Decline" disabled="" onclick=" document.tblGenForm.Event.value='decline'; document.tblGenForm.DeclineWorkflowID.value=844915; document.tblGenForm.CurrentWorkflowID.value=844916; showCommentDialog();">&nbsp;<input type="button" name="withdraw" value="Withdraw" disabled="" onclick="document.tblGenForm.Event.value='withdraw'; document.tblGenForm.WithdrawWorkflowID.value=844916; document.tblGenForm.NextWorkflowID.value=844917; showCommentDialog();"></td><td align="right"></td></tr></tbody></table><br><br><div class="subtitleDisabled">Advertised</div><table class="ReportDisabled" border="0" cellspacing="0" cellpadding="2"> <tbody><tr> <td class="reportheading">Notify For Next Action</td><td class="reportheading" align="right"> </td></tr><tr class="evenrow"> <td><input type="button" value="Save" disabled="" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value=''; document.tblGenForm.ApproveWorkflowID.value=844917; validate(2);"><input type="button" value="Complete" disabled="" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value='complete'; document.tblGenForm.ApproveWorkflowID.value=844917; document.tblGenForm.NextWorkflowID.value=844918; document.tblGenForm.NextWorkflowType.value=22288; validateComplete('Recipient[844917]');"> <input type="button" value="Decline" disabled="" onclick=" document.tblGenForm.Event.value='decline'; document.tblGenForm.DeclineWorkflowID.value=844916; document.tblGenForm.CurrentWorkflowID.value=844917; showCommentDialog();">&nbsp;<input type="button" name="withdraw" value="Withdraw" disabled="" onclick="document.tblGenForm.Event.value='withdraw'; document.tblGenForm.WithdrawWorkflowID.value=844917; document.tblGenForm.NextWorkflowID.value=844918; showCommentDialog();"></td><td align="right"></td></tr></tbody></table><br><br><div class="subtitleDisabled">Approval To Offer</div><table class="ReportDisabled" border="0" cellspacing="0" cellpadding="2"><tbody><tr> <td class="reportheading">Question</td><td class="reportheading">Response(s)</td></tr><tr class="evenrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.1</td><td style="border-left: none;">Please attach the proposed letter of offer or employment contract for approval</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><script>var files='';var fileArray=new Array();var attachmentEle=new Array();</script><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td>No Files Attached&nbsp; </td></tr></tbody></table></td></tr><tr class="oddrow"><td><table><tbody><tr valign="top"><td style="border-left: none;">1.2</td><td style="border-left: none;">Please attach any additional proposed documents the successful candidate will receive</td></tr></tbody></table></td><td><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style><script>var files='';var fileArray=new Array();var attachmentEle=new Array();</script><table border="0" cellpadding="3" cellspacing="0"><tbody><tr><td>No Files Attached&nbsp; </td></tr></tbody></table></td></tr><tr class="evenrow"><td colspan="2"><table><tbody><tr valign="top"><td style="border-left: none;">1.3</td><td style="border-left: none;">If the successful candidate is to be offered a higher salary than initially approved please submit justification below.</td></tr></tbody></table><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style></td></tr><tr class="oddrow"><td colspan="2"><table><tbody><tr valign="top"><td style="border-left: none;">1.4</td><td style="border-left: none;">Is there any other considerations for this approval?</td></tr></tbody></table><script type="text/javascript" src="jscript/plupload/plupload.full.min.js"></script><style type="text/css">.jsAttArea{padding-top: 80px !important;}</style></td></tr><tr> <td class="reportheading">Notify For Next Action</td><td class="reportheading" align="right"> </td></tr><tr> <td><input type="button" value="Save" disabled="" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value=''; document.tblGenForm.ApproveWorkflowID.value=844918; validate(2);"><input type="button" value="Approve" disabled="" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value='approve'; document.tblGenForm.ApproveWorkflowID.value=844918; document.tblGenForm.NextWorkflowID.value=844919; document.tblGenForm.NextWorkflowType.value=22293; if(validateApprove('Recipient[844918]')) validate(0);"> <input type="button" value="Decline" disabled="" onclick=" document.tblGenForm.Event.value='decline'; document.tblGenForm.DeclineWorkflowID.value=844917; document.tblGenForm.CurrentWorkflowID.value=844918; showCommentDialog();">&nbsp;<input type="button" name="withdraw" value="Withdraw" disabled="" onclick="document.tblGenForm.Event.value='withdraw'; document.tblGenForm.WithdrawWorkflowID.value=844918; document.tblGenForm.NextWorkflowID.value=844919; showCommentDialog();"></td><td align="right"></td></tr></tbody></table><br><br><div class="subtitleDisabled">Offer Made</div><table class="ReportDisabled" border="0" cellspacing="0" cellpadding="2"> <tbody><tr> <td class="reportheading">Notify For Next Action</td><td class="reportheading" align="right"> </td></tr><tr class="evenrow"> <td><input type="button" value="Save" disabled="" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value=''; document.tblGenForm.ApproveWorkflowID.value=844919; validate(2);"><input type="button" value="Complete" disabled="" onclick="document.tblGenForm.action.value='Save'; document.tblGenForm.Event.value='complete'; document.tblGenForm.ApproveWorkflowID.value=844919; document.tblGenForm.NextWorkflowID.value=844919; document.tblGenForm.NextWorkflowType.value=22293; validateComplete('Recipient[844919]');"> <input type="button" value="Decline" disabled="" onclick=" document.tblGenForm.Event.value='decline'; document.tblGenForm.DeclineWorkflowID.value=844918; document.tblGenForm.CurrentWorkflowID.value=844919; showCommentDialog();">&nbsp;<input type="button" name="withdraw" value="Withdraw" disabled="" onclick="document.tblGenForm.Event.value='withdraw'; document.tblGenForm.WithdrawWorkflowID.value=844919; document.tblGenForm.NextWorkflowID.value=844919; showCommentDialog();"></td><td align="right"></td></tr></tbody></table><br><br><input type="hidden" name="action" value=""><input type="hidden" name="WFQuestID" value=""><input type="hidden" name="GotoPageID" value=""><input type="hidden" name="numadhoc" value="b:0;"><input type="hidden" name="ApproveWorkflowID" value=""><input type="hidden" name="WithdrawWorkflowID" value=""><input type="hidden" name="DeclineWorkflowID" value=""><input type="hidden" name="NextWorkflowID" value=""><input type="hidden" name="NextWorkflowType" value=""><input type="hidden" name="CurrentWorkflowID" value=""><input type="hidden" name="Event" value=""><input type="hidden" name="chkComment" id="chkComment" value=""><!--<IFRAME ID="ifCommentOptions" style="display='none';position: absolute;z-index:4;TOP: 200px;LEFT: 200px;WIDTH: 350px;HEIGHT:248px;z-index:0" src="javascript:false;" frameBorder="0" scrolling="no" > </IFRAME><DIV STYLE="Display='none';BORDER: buttonhighlight 2px outset; FONT-SIZE: 8pt; Z-INDEX: 4; FONT-FAMILY: Tahoma; POSITION: absolute; BACKGROUND-COLOR: buttonface; TOP: 200px;LEFT: 200px;WIDTH: 350px ;HEIGHT:200px; CURSOR: default" ID="divCommentOptions" onselectstart="window.event.returnValue=false;"> <DIV STYLE="PADDING: 3px; FONT-WEIGHT: bolder; COLOR: captiontext; BORDER-BOTTOM: white 2px groove; BACKGROUND-COLOR: activecaption"> Decline/Withdraw Comment </DIV> <DIV STYLE="PADDING: 10px"> Please enter reason here: </DIV> <DIV STYLE="PADDING: 10px"> <TEXTAREA name="chkComment" ID="chkComment" cols="43" rows="10" >