const osversion = 'os_';

var supporetedObj = {
	[osversion+'Windows'] : isSupported('Windows'),
	[osversion+'IOS']: isSupported('iOS')
};
function isSupported(test:String){
		return true;
}