let express = require("express")
let app = express();
let router = express.Router();
let HomeController = require("../controllers/HomeController");
let EstoqueController = require('../controllers/EstoqueController');

router.get('/', HomeController.index);
router.get('/seleId/:id', HomeController.selectEqp);
router.post('/create', HomeController.insertEquipamento);
router.put('/update', HomeController.update);
router.delete('/delete/:id', HomeController.delete);
router.get('/estoque', EstoqueController.getEstoque);
router.get('/estoque/:id', EstoqueController.selectEstoque);
router.post('/estoque', EstoqueController.insert);


module.exports = router;