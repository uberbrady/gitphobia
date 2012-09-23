#!/usr/local/bin/node

//this is a brady file which explains why it had fucking SHORT TAGS.

// It is MINE. YOU CAN KEEP IT.


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
	fbml .='<li>'.toons[i]['toon_name'].' marked as invalid, bitches';	
	invalid_count++;
}

console.log('change is good.');
