var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let list = [
    {id: 1, name: "Post número 1", text: "Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Sapien in monti palavris qui num significa nadis i pareci latim. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. In elementis mé pra quem é amistosis quis leo. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Mé faiz elementum girarzis, nisi eros vermeio. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus."},
    {id: 2, name: "Post número 2", text: "Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Sapien in monti palavris qui num significa nadis i pareci latim. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. In elementis mé pra quem é amistosis quis leo. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Mé faiz elementum girarzis, nisi eros vermeio. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus."}
  ];

  res.send(list);
  
});

module.exports = router;
