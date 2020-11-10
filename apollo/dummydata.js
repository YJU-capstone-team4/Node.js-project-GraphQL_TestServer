const mongoose = require('mongoose');
const Makgoli  = require('./model/makgoli');

const aMakgoli = [
	{
		title : '유성별 생막걸리',		
		food_suggestion : '보쌈',
		brewery : {
			title : '아리랑주조',
			states : '충청북도',
			address : '대전광역시 유성구 대학로 81번길 54',
			phone : '041-943-7678',
			website : '',

		},
		product : {
			image : '',
			is_sterilized : false, //살균 - 생막걸리(비살균) 
			description : '',
			alcohol_content : '5',
			awards : '',
			ingredient : '쌀(국내산), 찹쌀(국내산), 국(쌀, 국내산), 아스파탐, 올리고당, 수클라로스(감미료)',
		},
	},
];



mongoose.connect('mongodb://localhost/makgoli' ,  { useNewUrlParser: true });

aMakgoli.map(data => {
    const oMakgoli = new Makgoli(data);
    oMakgoli.save();
});