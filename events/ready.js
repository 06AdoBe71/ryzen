module.exports = async(client) => {
var oynuyorkısmı = [
`t-yardım`,
`RyZeN Bot v1.1 Güncellemesi`,
];

setInterval(function() {
//sürekli tekrarlanacak bölüm
// 6000 milisaniye yani 6 saniyede bir gerçekleşecek eylem
    var random = Math.floor(Math.random()*(oynuyorkısmı.length-0+1)+0);
   client.user.setActivity(oynuyorkısmı[random], { type: 'PLAYING' });
    }, 2 * 3500);


}