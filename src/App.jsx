import React from 'react';
import MainBlock from '../components/main__block/mainBlock';
import MenuBlock from '../components/menu__block/menuBlock';
import PopularFood from '../components/popular__food/popularFood';
import DrinksBlock from '../components/drinks__block/drinksBlock';
import DesertsBlock from '../components/deserts__block/desertsBlock';
import SignatureCocktailsBlock from '../components/signatures__coctails__block/signatureCocrailsBlock';
import SaladsBlock from '../components/salads__block/saladsBlock';
import ReviewsBlock from '../components/reviews__block/reviewsBlock';

import FooterBlockComponent from '../components/footer__block/footerBlock';

function App() {
	return (
		<div className="app">
			<MainBlock />
			<MenuBlock />
			<PopularFood />
			<DrinksBlock />
			<DesertsBlock />
			<SignatureCocktailsBlock />
			<SaladsBlock />
			<ReviewsBlock />
			<FooterBlockComponent />
		</div>
	);
}

export default App;
