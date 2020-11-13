const typeDefinitions = `
	schema {
		query: RootQuery
	}
	type RootQuery {
	  makgoli : [Makgoli]
	}
	type Makgoli {
			title : String
			food_suggestion : String
			brewery : Brewery
			product : Product
	}
	type Brewery {
			title : String
			states : String
			address : String
			phone : String
			website : String
	}
	type Product {
			image : String
			is_sterilized : Boolean
			description : String
			alcohol_content : String
			awards : String
			ingredient : String
	}
`;

module.exports = [typeDefinitions];