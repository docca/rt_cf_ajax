function myFunctionSetStatus(status, TicketId, id){

    jQuery.ajax({
        type: 'POST',
        url: '<%RT->Config->Get('WebPath')%>/Elements/AjaxEditTicketBasic',
        data: {
            'Value' : status,
            'TicketId' : TicketId,
	    'Field': 'Status',
        },
        success:function(data){
	    if (/^OK.*/.test([data].toString())){
	        jQuery('#'+id).load('<%RT->Config->Get('WebPath')%>/Ticket/Elements/UpdateStatus',{'TicketId' : TicketId});
	    }
        }
    });
}

function myFunctionSetPriority(prio, TicketId, id){

    jQuery.ajax({
        type: 'POST',
        url: '<%RT->Config->Get('WebPath')%>/Elements/AjaxEditTicketBasic',
        data: {
            'Value' : prio,
            'TicketId' : TicketId,
	    'Field': 'Priority',
        },
        success:function(data){
	    if (/^OK.*/.test([data].toString())){
	        jQuery('#'+id).load('<%RT->Config->Get('WebPath')%>/Ticket/Elements/UpdatePriority',{'TicketId' : TicketId});
	    }
        }
    });
}

function viewCfValue(cfId, TicketId, Name, NameId, time, plusid){
    var id = "#showValue-"+cfId;
    if (plusid)
	id = id + "-"+TicketId;
	
    jQuery(id).load("<%RT->Config->Get('WebPath')%>/Elements/ShowCustomFieldUpdate?szuk_koru_mezo_id="+cfId+"&szuk_koru_ugyszam="+TicketId+"&szuk_koru_mezo_lekero="+Name+"&szuk_koru_mezo_lekero_id="+NameId,{'CustomFieldId': cfId,'TicketId': TicketId, 'Special': 1});
    setTimeout(function(){jQuery(id).load("<%RT->Config->Get('WebPath')%>/Elements/ShowCustomFieldHidden",{'CustomFieldId': cfId,'TicketId': TicketId, 'PlusId': plusid});}, time);
}
        