// @login & register
const express = require('express');
const router = express.Router();
const passport = require('passport');

const Shop = require('../../models/Shop');

// @route  GET api/Shops/test
// @desc   返回的请求的json数据
// @access public
router.get('/test', (req, res) => {
  res.json({ msg: 'shop works' });
});

// @route  POST api/Shops/add
// @desc   创建信息接口
// @access Private
router.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const shopFields = {};

    if (req.body.name) shopFields.type = req.body.name;
    if (req.body.type) shopFields.type = req.body.type;
    // if (req.body.describe) shopFields.describe = req.body.describe;
    // if (req.body.income) shopFields.income = req.body.income;
    // if (req.body.expend) shopFields.expend = req.body.expend;
    // if (req.body.cash) shopFields.cash = req.body.cash;
    if (req.body.remark) shopFields.remark = req.body.remark;

    new Shop(shopFields).save().then(shop => {
      res.json(shop);
    });
  }
);

// @route  GET api/Shops
// @desc   获取所有信息
// @access Private

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Shop.find()
      .then(shop => {
        if (!shop) {
          return res.status(404).json('没有任何内容');
        }

        res.json(shop);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route  GET api/Shops/:id
// @desc   获取单个信息
// @access Private

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Shop.findOne({ _id: req.params.id })
      .then(shop => {
        if (!shop) {
          return res.status(404).json('没有任何内容');
        }

        res.json(shop);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route  POST api/Shops/edit
// @desc   编辑信息接口
// @access Private
router.post(
  '/edit/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const shopFields = {};

    if (req.body.name) shopFields.type = req.body.name;
    if (req.body.type) shopFields.type = req.body.type;
    // if (req.body.describe) shopFields.describe = req.body.describe;
    // if (req.body.income) shopFields.income = req.body.income;
    // if (req.body.expend) shopFields.expend = req.body.expend;
    // if (req.body.cash) shopFields.cash = req.body.cash;
    if (req.body.remark) shopFields.remark = req.body.remark;

    Shop.findOneAndUpdate(
      { _id: req.params.id },
      { $set: shopFields },
      { new: true }
    ).then(shop => res.json(shop));
  }
);

// @route  POST api/Shops/delete/:id
// @desc   删除信息接口
// @access Private
router.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Shop.findOneAndRemove({ _id: req.params.id })
      .then(shop => {
        shop.save().then(shop => res.json(shop));
      })
      .catch(err => res.status(404).json('删除失败!'));
  }
);

module.exports = router;
