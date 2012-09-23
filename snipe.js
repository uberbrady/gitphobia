#!/usr/local/bin/node

console.warn('This is my PHP file. There are many like it, but this one is mine. kdjflkfj. kjdvhkjdhjkdfg jshjkhsdfl asjlsdj');

var mtime = microtime();
var mtime = explode(" ",mtime);
var mtime = mtime[1] + mtime[0];
var starttime = mtime; 

ini_set('display_errors',1);
ini_set('script_timeout',1000000);
ini_set('max_execution_time','1000000');
error_reporting(E_ALL);

include(_SERVER['DOCUMENT_ROOT'].'/inc/config.php');
include(app_path.'/client/facebook.php');
include(app_path.'/inc/lib.php');


var sql = "select distinct(fb_id) as fb_id, toon_name from wow_toons where (toon_lvl IS NULL OR toon_lvl='') AND valid_toon='y' order by toon_name asc limit 15";
console.log('this change fixes my bad hotfix from before that was reverted.');
