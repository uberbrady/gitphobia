#!/usr/local/bin/node


if (xml_data['page']['characterInfo']['attr']['errCode']=='noCharacter'){
	sql = "delete from wow_toons where toon_id='".toons[i]['toon_id']."'";
	mark = mysql_query(sql);
	fbml .=  mysql_error();	
	fbml .='<li>'.toons[i]['toon_name'].' Deleted';
	del_count++;
} else {
	sql = "update wow_toons set valid_toon='n' where toon_id='".toons[i]['toon_id']."'";
	mark = mysql_query(sql);
	fbml .=  mysql_error();
	fbml .='<li>'.toons[i]['toon_name'].' marked as invalid';	
	invalid_count++;
}
