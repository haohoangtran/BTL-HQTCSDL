let cart = [];

function getCart() {
    return cart;
}

function addtoCart(item) {
    cart.push(item);
}

function removeFromCart(food) {
    cart.splice(cart.indexOf(food), 1);
}

function setCart(carts) {
    cart = carts;
}

function checkInCart(food) {
    if (!food) {
        return null;
    }
    for (let item of this.state.cart) {
        if (item._id.$oid === food._id.$oid) {
            return item;
        }
    }
    return null;
}

const foods = [
    {
        "_id": {"$oid": "58cc36f18f040b05e81ee129"},
        "name": "Đùi gà nướng mật",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489778129/nuongmat_xolbve.png",
        "coint_old": "30000",
        "coint_new": "30000",
        "is_favorite": true,
        "cout_rate": 9,
        "rate": 4.166666666666667
    },
    {
        "_id": {"$oid": "58cc37c38f040b05e81ee12a"},
        "name": "Cơm rang đùi gà nướng mật",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489778118/comrangdui_t9mnqi.png",
        "coint_old": "45000",
        "coint_new": "43000",
        "cout_rate": 4,
        "is_favorite": true,
        "rate": 2.5
    },
    {
        "_id": {"$oid": "58cc38018f040b05e81ee12b"},
        "name": "Cơm rang đùi cay",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489778119/comrangduimat_dzoyrh.png",
        "coint_old": "45000",
        "coint_new": "43000",
        "is_favorite": true,
        "cout_rate": 9,
        "rate": 4.5
    },
    {
        "_id": {"$oid": "58cc38908f040b05e81ee12c"},
        "name": "Bò xào rau cải",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489778124/boxaocai_eoveo4.png",
        "coint_old": "50000",
        "coint_new": "47000",
        "cout_rate": 3,
        "is_favorite": false,
        "rate": 3.8333333333333335
    },
    {
        "_id": {"$oid": "58cc38d68f040b05e81ee12d"},
        "name": "Mỳ xào bò",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489778124/myxaobo_q1hwk3.png",
        "coint_old": "45000",
        "coint_new": "43000",
        "is_favorite": true,
        "cout_rate": 4,
        "rate": 4.0
    },
    {
        "_id": {"$oid": "58cc39aa8f040b05e81ee12e"},
        "name": "Cơm rang dưa bò",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489778120/comrangduabo_gmmpdg.png",
        "coint_old": "45000",
        "coint_new": "43000",
        "is_favorite": true,
        "cout_rate": 0,
        "rate": 5
    },
    {
        "_id": {"$oid": "58ce06ba8550e60008c6a49b"},
        "name": "Đùi gà sốt cay",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489778124/sotcay_ffmzuv.png",
        "coint_old": "30000",
        "coint_new": "30000",
        "cout_rate": 2,
        "is_favorite": true,
        "rate": 2.75
    },
    {
        "_id": {"$oid": "58ce0ca98550e60008c6a49c"},
        "name": "Cơm rang thập cẩm",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898512/comrangthapcam_c07cmt.jpg",
        "coint_old": "45000",
        "coint_new": "43000",
        "cout_rate": 1,
        "is_favorite": false,
        "rate": 5.0
    },
    {
        "_id": {"$oid": "58ce0d128550e6000bd0eb5a"},
        "name": "Chân gà ngâm xả ớt",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898512/chan-ga-ngam-sa-ot_e1jfi3.jpg",
        "coint_old": "60000",
        "coint_new": "56000",
        "is_favorite": true,
        "cout_rate": 6,
        "rate": 2.5833333333333335
    },
    {
        "_id": {"$oid": "58ce0e2f8550e600091f2758"},
        "name": "Cơm rang bò xào dứa",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898513/comrangboxaodua_gnlibh.jpg",
        "coint_old": "45000",
        "coint_new": "43000",
        "cout_rate": 0,
        "is_favorite": false,
        "rate": 5
    },
    {
        "_id": {"$oid": "58ce0f678550e600091f2759"},
        "name": "Dứa ướp cay ngọt",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898512/duauopcayngot_zbuauh.jpg",
        "coint_old": "25000",
        "coint_new": "25000",
        "is_favorite": false,
        "cout_rate": 0,
        "rate": 5
    },
    {
        "_id": {"$oid": "58ce11048550e6000aa483c4"},
        "name": "Dưa chuột chẻ",
        "is_favorite": false,
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898513/duachuotche_qmprto.jpg",
        "coint_old": "20000",
        "coint_new": "20000",
        "cout_rate": 0,
        "rate": 5
    },
    {
        "_id": {"$oid": "58ce113c8550e6000bd0eb5b"},
        "name": "Khoai lang chiên",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898513/khoailangchien_ucsjra.jpg",
        "coint_old": "30000",
        "is_favorite": false,
        "coint_new": "27000",
        "cout_rate": 0,
        "rate": 5
    },
    {
        "_id": {"$oid": "58ce125d8550e60008c6a49d"},
        "name": "Khoai tây chiên",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898513/khoai-tay-chien-1_jzp9i4.jpg",
        "coint_old": "30000",
        "is_favorite": false,
        "coint_new": "27000",
        "cout_rate": 0,
        "rate": 5
    },
    {
        "_id": {"$oid": "58ce12f48550e600091f275a"},
        "name": "Xoài ướp cay ngọt",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898513/xoaiuopcayngot_j0juxs.jpg",
        "coint_old": "25000",
        "coint_new": "25000",
        "cout_rate": 0,
        "is_favorite": false,
        "rate": 5
    },
    {
        "_id": {"$oid": "58ce13628550e600091f275b"},
        "name": "Xúc xích rán",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898514/xucxichran_v4qeps.jpg",
        "coint_old": "15000",
        "is_favorite": true,
        "coint_new": "15000",
        "cout_rate": 1,
        "rate": 0.0
    },
    {
        "_id": {"$oid": "58ce13ba8550e60008c6a49e"},
        "name": "Nem chua rán",
        "url": "http://res.cloudinary.com/dumfykuvl/image/upload/v1489898515/nen_chua_ran_10_yb3hmj.jpg",
        "coint_old": "7000",
        "coint_new": "7000",
        "cout_rate": 2,
        "is_favorite": false,
        "rate": 5.0
    },
]
export {setCart, getCart, foods, removeFromCart}