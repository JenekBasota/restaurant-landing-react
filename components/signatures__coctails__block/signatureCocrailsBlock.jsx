import './signatureCocrailsBlock.scss';
import React from 'react';

function signatureCocktailsBlock() {
	return (
		<div className="signature__coctails__block__wrapper">
			<div className="signatuere__coctails__block__header">
				<p>
					<strong>Фирменные коктейли</strong>
				</p>
				<hr className="main_menu_line_back" />
				<div>
					<a href="#" className="booking_back">
						Забронировать стол
					</a>
				</div>
				<div className="container__wrapper">
					<div className="menu__block__container">
						<hr className="menu__block__container__line" />
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Мохито б/а</strong>
								</p>
								<p className="menu__block__container__item__description">
									Сахарный сироп, содовая, лайм, мята
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Клубничный милкшейк</strong>
								</p>
								<p className="menu__block__container__item__description">
									Мороженое, клубника, молоко
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
					</div>
					<div className="menu__wrapper">
						<hr className="menu__block__container__line" />
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Сейдж романс</strong>
								</p>
								<p className="menu__block__container__item__description">
									Яблочный и лаймовый сок, спрайт, киви
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
						<div className="menu__block__container__item">
							<div>
								<p className="menu__block__container__item__header">
									<strong>Холодный кофе аршат</strong>
								</p>
								<p className="menu__block__container__item__description">
									Миндальный сироп, кофе, молоко
								</p>
							</div>
							<div className="menu__block__container__item__price">
								<p>
									<strong>250</strong>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="signature__coctails__block__content__wrapper">
					<div className="signature__coctails__block__content">
						<h1>Как мы готовим</h1>
						<p>
							Каждое блюдо, прежде чем попасть в меню, проверяется
							на соответствие четырем критериям – оно должно быть
							вкусным, полезным, оригинальным и красивым.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default signatureCocktailsBlock;
